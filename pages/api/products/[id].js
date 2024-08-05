import Product from "@/models/Product";
import dbConnect from "@/util/mongo";

export default async function handler(req, res) {
    const { method ,
        query: { id },
        cookies
     } = req;

     const token = cookies.token;
   dbConnect()
    if(method === "GET"){
        try {
            const prod= await Product.findById(id)
            res.status(201).json(prod)
        } catch (err) {
            res.status(500).json(err);
        }
    }

    if(method === "PUT"){
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
    if(method === "DELETE"){
        if(!token || token!=process.env.TOKEN){
            return res.status(401).json("Not Authenticated!");
        }
        try{
            await Product.findByIdAndDelete(id);
            res.status(200).json("The product has been deleted!!!")
        }catch(err){
            res.status(500).json(err);
        }
    }
}