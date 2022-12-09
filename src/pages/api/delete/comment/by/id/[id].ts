

import { NextApiRequest, NextApiResponse } from "next";
import { commentModel } from "../../../../../../../utils/database/model/comment";

const handlerDeleteCommetById = async (
    req:NextApiRequest,
    res:NextApiResponse
) => {

    const {
        id
    } = req.query;

    if(req.method === "DELETE"){
        try{
           await commentModel.delete({
            where:{
               id: Number(id)
            }
           }
        ).then((result : any)=>{
           res.status(201).json(result)
        }).catch((err : Error)=>{
            res.status(401).json(err.message)
        })
        }catch(err){
          console.error(err);
        }
    }
}

export default handlerDeleteCommetById;