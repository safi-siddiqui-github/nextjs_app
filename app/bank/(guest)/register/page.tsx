import Link from "next/link";
import HeadLogo from "@/app/bank/(guest)/headLogo";

export default function Page() {
    return (
        <div className="flex items-center justify-center py-20">
            <div className="flex flex-col gap-5 w-3/5">

                <HeadLogo />

                <div className="flex flex-col gap-1.5 mt-5 mb-4">
                    <h2 className="text-4xl font-semibold">Register</h2>
                    <p className="text-sm">
                        Already a bank member! <Link href={`login`} className="font-medium">Login here</Link>
                    </p>
                </div>

                <div className="flex gap-2">

                    <div className="flex flex-col gap-1 w-full">
                        <label htmlFor="firstName" className="font-medium">First Name</label>
                        <input type="text" className="border rounded text-gray-500 px-2 py-1.5" placeholder="ex: John" />
                    </div>

                    <div className="flex flex-col gap-1 w-full">
                        <label htmlFor="lastName" className="font-medium">Last Name</label>
                        <input type="text" className="border rounded text-gray-500 px-2 py-1.5" placeholder="ex: Doe" />
                    </div>

                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="address" className="font-medium">Address</label>
                    <input type="email" className="border rounded text-gray-500 px-2 py-1.5" placeholder="Enter your current address" />
                </div>

                <div className="flex gap-2">

                    <div className="flex flex-col gap-1 w-full">
                        <label htmlFor="state" className="font-medium">State</label>
                        <input type="text" className="border rounded text-gray-500 px-2 py-1.5" placeholder="ex: US" />
                    </div>

                    <div className="flex flex-col gap-1 w-full">
                        <label htmlFor="postalCode" className="font-medium">Postal</label>
                        <input type="text" className="border rounded text-gray-500 px-2 py-1.5" placeholder="ex: 779900" />
                    </div>

                </div>

                <div className="flex gap-2">

                    <div className="flex flex-col gap-1 w-full">
                        <label htmlFor="dob" className="font-medium">Date of Birth</label>
                        <input type="text" className="border rounded text-gray-500 px-2 py-1.5" placeholder="ex: US" />
                    </div>

                    <div className="flex flex-col gap-1 w-full">
                        <label htmlFor="ssn" className="font-medium">SSN</label>
                        <input type="text" className="border rounded text-gray-500 px-2 py-1.5" placeholder="ex: 05/12/2011" />
                    </div>

                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="font-medium">Email</label>
                    <input type="email" className="border rounded text-gray-500 px-2 py-1.5" placeholder="Enter your email" />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="password" className="font-medium">Password</label>
                    <input type="password" className="border rounded text-gray-500 px-2 py-1.5" placeholder="Enter your password" />
                </div>

                <button className="text-sm text-center py-2 bg-black hover:bg-black/80 text-white rounded font-medium mt-2">Register</button>

            </div>
        </div>
    )
}