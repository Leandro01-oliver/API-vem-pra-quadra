import { NextApiRequest, NextApiResponse } from "next";
import { likeModel } from "../../../../../utils/database/model/like";
import { participantModel } from "../../../../../utils/database/model/participant";

const handlerPostParticipant = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {

    const {
        userId,
        eventId
    } = req.body;

    if(req.method === "POST"){
        try{
            await participantModel.create({
                data:{
                    userId: userId,
                    eventId: eventId
                }
            }).then((result : any)=>{
                res.status(201).json(result);
            }).catch((err : Error)=>{
                res.status(401).json(err.message)
            })
        }catch(err){
          console.error(err);
        }
    }
}

export default handlerPostParticipant;