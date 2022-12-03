import { NextApiRequest, NextApiResponse } from "next";
import { userModel } from "../../../../../../../utils/database/model/user";

const handlerGetUserByEmail = async (
    req:NextApiRequest,
    res:NextApiResponse
) => {

    const {
        email
    } = req.query;


    if(req.method === "GET"){
        try{
            await userModel.findUnique(
               {
                where:{
                   email: email?.toString()
                },
                select:{
                   id:true
                }
               }
            ).then((result : any)=>{
                res.status(201).json(result)
            }).catch((err)=>{
                res.status(401).json(err.message)
            })
        }catch(err){
          console.error(err);
        }
    }
}

export default handlerGetUserByEmail;