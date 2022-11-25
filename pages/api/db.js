import clientPromise from "../../lib/auth";


export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("test");

       const emails = await db
           .collection("emails")
           .find({})
           .sort({ metacritic: -1 })
           .limit(10)
           .toArray();

       res.json(emails);
   } catch (e) {
       console.error(e);
   }
};