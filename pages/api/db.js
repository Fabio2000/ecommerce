import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("test");

       const emails = await db
           .collection("emails")
           .find({})
           .sort({ metacritic: -1 })
           .limit(30)
           .toArray();

       res.json(emails);
   } catch (e) {
       console.error(e);
   }
};