import { MongoClient } from "mongodb";

const MONGO_URL = process.env.MONGO_URL;
let client = null;

export async function connectToDatabase() {
  if (client) {
    return client;
  }

  if (!MONGO_URL) {
    console.log("MongoDB URL not found");
  }

  try {
    client = await MongoClient.connect(MONGO_URL);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed: ", error);
  }
}
