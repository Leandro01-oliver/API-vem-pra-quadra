import { NextApiRequest, NextApiResponse } from "next";
import { likeModel } from "../../../../../../../utils/database/model/like";

const handlerGetLikeByRelationId = async (
    req:NextApiRequest,
    res:NextApiResponse
) => {

    const {
        eventId
    } = req.query;


    if(req.method === "GET"){
        try{
            await likeModel.findFirst(
               {
                where:{
                  eventId: Number(eventId)
                },
                select:{
                   id:true
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

export default handlerGetLikeByRelationId;