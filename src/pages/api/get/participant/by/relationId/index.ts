import { NextApiRequest, NextApiResponse } from "next";
import { participantModel } from "../../../../../../../utils/database/model/participant";

const handlerGetParticipantByRelationId = async (
    req:NextApiRequest,
    res:NextApiResponse
) => {

    const {
        userId,
        eventId
    } = req.query;


    if(req.method === "GET"){
        try{
            await participantModel.findFirst(
               {
                where:{
                  eventId: Number(eventId),
                  userId: Number(userId)
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

export default handlerGetParticipantByRelationId;