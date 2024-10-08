"use server";

import { sql } from "@vercel/postgres";

export async function createTransactionsTable() {
    const data = sql`
        CREATE TABLE transactions (
            id INTEGER,
            recipient_id INTEGER,
            sender_id INTEGER,
            note TEXT,
            amount INTEGER,
        )
    `;
}