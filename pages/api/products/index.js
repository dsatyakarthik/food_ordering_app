import Product from "@/models/Product";
import dbConnect from "@/util/mongo";

export default async function handler(req, res) {
    const { method , cookies } = req;

    const token = cookies.token;
   dbConnect()
    if(method === "GET"){
        try {
            const prods= await Product.find()
            res.status(201).json(prods)
        } catch (err) {
            res.status(500).json(err);
        }
    }

    if(method === "POST"){

        if(!token || token!=process.env.TOKEN){
            return res.status(401).json("Not Authenticated!");
        }
        try{
            const prod = await Product.create(req.body);
            res.status(201).json(prod)
        }catch(err){
            res.status(500).json(err);
        }
    }
}