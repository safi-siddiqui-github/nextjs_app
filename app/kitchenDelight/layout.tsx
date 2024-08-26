import Link from "next/link";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <div className="flex flex-col">

            <main className="">
                {children}
            </main>

        </div>
    )
}