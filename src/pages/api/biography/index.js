import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;

export default async (req, res) => {
    try {
        const client = await MongoClient.connect(MONGODB_URI);
        const db = client.db("Website");

        const data = await db
            .collection("Biography")
            .find({})
            .project({_id: 0})
            .sort({})
            .toArray();

        res.json(...data);
    } catch (e) {
        console.error(e);
    }
 };