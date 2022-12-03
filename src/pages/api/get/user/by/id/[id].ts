import { NextApiRequest, NextApiResponse } from "next";
import { userModel } from "../../../../../../../utils/database/model/user";

const handlerGetUserById = async (
    req:NextApiRequest,
    res:NextApiResponse
) => {

    const {
        id
    } = req.query;

    if(req.method === "GET"){
        try{
            await userModel.findUnique(
                {
                 where:{
                    id: Number(id)
                 }
                }
             ).then((result)=>{
                res.status(201).json(result)
            }).catch((err)=>{
                res.status(401).json(err.message)
            })
        }catch(err){
          console.error(err);
        }
    }
}

export default handlerGetUserById;