import connect from "../../lib/mongodb";
import User from '../../model/schema'

connect()

export default async function handler(req,res){

    const {email,password}=req.body
    const user = await User.findOne({email,password})
    if(!user){
         return res.json({status:'Usuário não encontrado, favor, registrar-se'})
        }
    else{
        res.redirect('https://tiringastore.vercel.app/')
    }
}