import { addUsers, createUsersTable } from "@/model/user";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {

    return (
        <div className="flex flex-col p-10">

            <form action={createUsersTable}>
                <button type="submit">Create Table</button>
            </form>

            <form action={addUsers}>
                <input type="text" name="name" className="border p-1" placeholder="Name" />
                <input type="text" name="email" className="border p-1" placeholder="Email" />
                <input type="text" name="password" className="border p-1" placeholder="Password" />
                <button type="submit" className="border">Add</button>
            </form>

        </div >
    )
}