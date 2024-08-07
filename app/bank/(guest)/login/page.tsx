import Link from "next/link";
import SocialLogin from '@/app/bank/(guest)/socialLogin'
import HeadLogo from "@/app/bank/(guest)/headLogo";

export default function Page() {
    return (
        <div className="flex items-center justify-center h-full">
            <div className="flex flex-col gap-5 w-3/5">

                <HeadLogo />

                <div className="flex flex-col gap-1.5 mt-5 mb-4">
                    <h2 className="text-4xl font-semibold">Login</h2>
                    <p className="text-sm">
                        New bank user! <Link href={`register`} className="font-medium">Register here</Link>
                    </p>
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="font-medium">Email</label>
                    <input type="email" className="border rounded text-gray-500 px-2 py-1.5" placeholder="Enter your email" />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="password" className="font-medium">Password</label>
                    <input type="password" className="border rounded text-gray-500 px-2 py-1.5" placeholder="Enter your password" />
                </div>

                <button className="text-sm text-center py-2 bg-black hover:bg-black/80 text-white rounded font-medium mt-2">Login</button>

                <div className="border-t-2 border-dashed my-2"></div>

                <SocialLogin />

            </div>
        </div>
    )
}