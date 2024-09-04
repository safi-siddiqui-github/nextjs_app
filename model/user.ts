"use server";

import { sql } from "@vercel/postgres";

export async function createUsersTable() {
    const data = sql`
        CREATE TABLE Users (
            id INTEGER,
            name TEXT,
            email TEXT,
            phone INTEGER,
            role TEXT,
        )
    `;
}

export async function alterUsersTable() {
     sql`
        ALTER TABLE Users 
        RENAME COLUMN phone TO phone_number;
    `;

    sql`
        ALTER TABLE Users 
        ADD COLUMN password TEXT;
    `;

    sql`
        ALTER TABLE Users 
        DROP COLUMN password;
    `;
}

export async function allUsers() {
    return await sql`SELECT * FROM USERS;`;
}

export async function addUsers(formData: FormData) {

    
    console.log(formData);
    return;
    let a = await sql`SELECT * FROM USERS;`;
    // return a;
}