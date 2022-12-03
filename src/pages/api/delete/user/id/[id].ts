

import { NextApiRequest, NextApiResponse } from "next";
import { userModel } from "../../../../../../utils/database/model/user";

const handlerDeleteUserById = async (
    req:NextApiRequest,
    res:NextApiResponse
) => {

    const {
        id
    } = req.query;

    if(req.method === "DELETE"){
        try{
           await userModel.delete({
            where:{
               id: Number(id)
            }
           }
        ).then((result : any)=>{
           res.status(201).json(result)
        }).catch((err)=>{
            res.status(401).json(err.message)
            console.log(err.message)
        })
        }catch(err){
          console.error(err);
        }
    }
}

export default handlerDeleteUserById;