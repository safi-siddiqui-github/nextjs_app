import { ApiResponse, EmailResponse } from "@/response/types";
import { Resend } from "resend";
import VerificationCodeEmail from "@/resend/VerificationCode";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendVerificationEmailResend(
    username: string,
    email: string,
    verificationCode: string,
): Promise<EmailResponse> {

    try {
        await resend.emails.send({
            from: 'nextjs@test.com',
            subject: 'Verification Code',
            to: email,
            react: VerificationCodeEmail({ username, verificationCode }),
        });

        return {
            success: true,
            message: "Verification Email Sent"
        }

    } catch (error) {
        console.log("Verification Email Failed", error);

        return {
            success: false,
            message: "Verification Email Failed"
        }
    }
}