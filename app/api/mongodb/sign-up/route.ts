import connectToMongoDB from "@/database";
import { generateVerificationCode, hashPassword, UserMongooseInterface, UserMongooseModel, verificationCodeExpiry } from "@/model/User";
import { sendVerificationEmailResend } from "@/resend";
import { ApiResponse } from "@/response/types";

export async function POST(request: Request): Promise<Response> {

    try {
        await connectToMongoDB();

        const {
            name,
            username,
            email,
            password,
        } = await request.json();

        const hashed = await hashPassword(password);
        const verificationCode = generateVerificationCode();
        const verificationCodeExpiresAt = verificationCodeExpiry();

        const existingEmail = await UserMongooseModel.findOne({ email });

        if (existingEmail) {

            if (existingEmail.isVerified) {

                return Response.json(
                    <ApiResponse>{
                        success: false,
                        message: 'Email registered already',
                    },
                    { status: 400 }
                );

            } else { // Update User

                existingEmail.password = hashed;
                existingEmail.verificationCode = verificationCode;
                existingEmail.verificationCodeExpiresAt = verificationCodeExpiresAt;
                await existingEmail.save();
            }
        }

        const existingUsername = await UserMongooseModel.findOne({ username });

        if (existingUsername) {

            return Response.json(
                <ApiResponse>{
                    success: false,
                    message: 'Username registered already',
                },
                { status: 400 }
            );
        }

        const user = new UserMongooseModel({
            name,
            username,
            email,
            password: hashed,
            verificationCode,
            verificationCodeExpiresAt,
        })

        await user.save();

        const emailResponse = await sendVerificationEmailResend(
            username,
            email,
            verificationCode
        );

        if (!emailResponse.success) {
            return Response.json(
                <ApiResponse>{
                    success: false,
                    message: emailResponse.message,
                },
                { status: 400 }
            );
        }

        return Response.json(
            <ApiResponse>{
                success: true,
                message: 'User Registered Success',
            },
            { status: 201 }
        );

    } catch (error) {
        console.log("Sign Up Error", error);

        return Response.json(
            <ApiResponse>{
                success: false,
                message: "Sign Up Error",
            },
            { status: 500 }
        );
    }
}