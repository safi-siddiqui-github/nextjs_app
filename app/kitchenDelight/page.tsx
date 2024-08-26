import Image from "next/image";
import Link from "next/link";

export default async function Page() {

    
    return (
        <div className="flex p-10">
            Kitchen

            <div className="flex flex-col">
                <Link href={`/api/create-users-table`}>Create Table</Link>
            </div>
        </div >
    )
}