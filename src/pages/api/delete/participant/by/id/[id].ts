

import { NextApiRequest, NextApiResponse } from "next";
import { participantModel } from "../../../../../../../utils/database/model/participant";

const handlerDeleteCommetById = async (
    req:NextApiRequest,
    res:NextApiResponse
) => {

    const {
        id
    } = req.query;

    if(req.method === "DELETE"){
        try{
           await participantModel.delete({
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