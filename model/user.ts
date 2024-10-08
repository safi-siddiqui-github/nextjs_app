import mongoose, { Schema, Document } from "mongoose";
import { z } from "zod";
import bcrypt from "bcryptjs";

/*
    Regex Patterns: https://regexr.com/
*/

const regex = {
    username: {
        pattern: /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/igm,
        message: "Username can contain characters a-z, 0-9, underscores and periods. The username cannot start with a period nor end with a period. It must also not have more than one period sequentially. Max length is 30 chars."
    },
    email: {
        pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
        message: "Email must be valid email" // RFC2822
    },
    password: {
        pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
        message: "Password must be at least 8 characters, must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number and can contain special characters"
    },
    verificationCode: {
        pattern: /^[a-zA-Z0-9]{6}$/,
        message: "Varification code must exactly have 6 characters consisting of only alphabets and numbers",
    }
};

/*
    MongoDB Schema
*/

export interface UserMongooseInterface extends Document { // TypeScript Interface
    name: string,
    username: string,
    email: string,
    password: string,
    verificationCode: string,
    isVerified: boolean,
    createdAt: Date,
    updatedAt: Date,
    verifiedAt: Date,
    verificationCodeExpiresAt: Date,
};

const UserMongooseSchema: Schema<UserMongooseInterface> = new Schema({ // MongoDB Schema
    name: {
        type: String,
        required: [true, "Name is requried"],
        trim: true,
    },
    username: {
        type: String,
        required: [true, "Username is requried"],
        trim: true,
        unique: true,
        match: [regex.username.pattern, regex.username.message]
    },
    email: {
        type: String,
        required: [true, "Email is requried"],
        trim: true,
        unique: true,
        match: [regex.email.pattern, regex.email.message]
    },
    password: {
        type: String,
        required: true,
        trim: true,
        match: [regex.password.pattern, regex.password.message]
    },
    verificationCode: {
        type: String,
        required: false,
        match: [regex.verificationCode.pattern, regex.verificationCode.message]
    },
    isVerified: {
        type: Boolean,
        required: false,
        default: false,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        required: false,
    },
    verifiedAt: {
        type: Date,
        required: false,
    },
    verificationCodeExpiresAt: {
        type: Date,
        required: false,
    },
});

// If Exists Else New
const UserMongooseModel = mongoose.models.User as mongoose.Model<UserMongooseInterface> || mongoose.model<UserMongooseInterface>("User", UserMongooseSchema);

/*
    Zod Validation
*/

const UserZod = {
    name: z
        .string().trim()
        .min(2).max(50),
    username: z
        .string().trim()
        .min(5).max(30)
        .regex(regex.username.pattern, regex.username.message),
    email: z
        .string().trim()
        .min(10).max(50)
        .email({ message: regex.email.message })
        .regex(regex.email.pattern, regex.email.message),
    password: z
        .string().trim()
        .min(8).max(50)
        .regex(regex.password.pattern, regex.password.message),
    verificationCode: z
        .string().trim()
        .length(6, "Verification code must be of 6 characters")
        .regex(regex.verificationCode.pattern, regex.verificationCode.message),
};

const signUpValidationZod = z.object({
    name: UserZod.name,
    username: UserZod.username,
    email: UserZod.email,
    password: UserZod.password,
});

const signInValidationZod = z.object({
    username: UserZod.username,
    email: UserZod.email,
    password: UserZod.password,
});

/*
    Utility Functions
*/

export async function hashPassword(password: string) {
    const hashed = await bcrypt.hash(password, 7);
    return hashed;
}

export function generateVerificationCode() {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
}

export function verificationCodeExpiry() {
    const codeExpiry = new Date();
    codeExpiry.setHours(codeExpiry.getHours() + 1);
    return codeExpiry;
}

/*
    Export 
*/
export { UserMongooseModel };