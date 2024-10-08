import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {}

async function connectToMongoDB(): Promise<void> {

    if (connection.isConnected) {
        console.log("Already Connected");
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || '', {});
        connection.isConnected = db.connections[0].readyState;
        console.log("MongoDB Connected");
    } catch (error) {
        console.log("MongoDB Failed");
        process.exit(1);
    }
}

export default connectToMongoDB;