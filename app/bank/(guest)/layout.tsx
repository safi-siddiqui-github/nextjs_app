export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="flex h-screen">
            <div className="w-1/2 overflow-y-auto scrollbar-y">
                {children}
            </div>
            <div className="w-1/2 bg-black flex flex-col gap-10 items-center justify-center text-white text-center">
                <div className="rounded-full w-44 h-44 bg-gray-50 animate-pulse bg-gradient-to-r from-black to-black/50"></div>
                <div className="flex flex-col gap-1">
                    <h2 className="text-3xl">Welcome User</h2>
                    <p className="text-sm">Happy to see you soon</p>
                </div>
            </div>
        </div>
    )
}