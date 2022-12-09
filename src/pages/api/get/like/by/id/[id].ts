import { NextApiRequest, NextApiResponse } from "next";
import { eventModel } from "../../../../../../../utils/database/model/event";
import { likeModel } from "../../../../../../../utils/database/model/like";

const handlerGetLikeById = async (
    req:NextApiRequest,
    res:NextApiResponse
) => {

    const {
        eventId
    } = req.query;

    if(req.method === "GET"){
        try{
           await likeModel.findUnique({
            where:{
               eventId:Number(eventId)
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

export default handlerGetLikeById;