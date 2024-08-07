import Link from "next/link";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="flex">
            <div className="w-64 flex flex-col gap-8 px-5 pt-10 border-r h-screen">

                <div className="flex items-center justify-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-black to-white"></div>
                    <h2 className="text-2xl font-semibold tracking-tight">BANK APP</h2>
                </div>

                <div className="border-2 rounded p-2 gap-2 flex items-center">
                    <svg className="w-6 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                    <input type="text" className="w-full outline-none" placeholder="Search here" />
                </div>

                <div className="flex flex-col gap-5">
                    <Link href={`/bank/`} className="flex items-center gap-4 text-gray-500 border-r-4 rounded">
                        <svg className="w-7 text-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M15 18H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
                        <span className="font-medium text-sm text-current">Home</span>
                    </Link>

                    <Link href={`/bank/myBanks`} className="flex items-center gap-4 text-gray-500 hover:border-r-4 rounded">
                        <svg className="w-7 text-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 17V17.5V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M12 6V6.5V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M15 9.5C15 8.11929 13.6569 7 12 7C10.3431 7 9 8.11929 9 9.5C9 10.8807 10.3431 12 12 12C13.6569 12 15 13.1193 15 14.5C15 15.8807 13.6569 17 12 17C10.3431 17 9 15.8807 9 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
                        <span className="font-medium text-sm text-current">My Banks</span>
                    </Link>
                </div>

            </div>

            <div className="flex-1 scrollbar-y overflow-y-auto h-screen">
                {children}
            </div>
        </div>
    )
}