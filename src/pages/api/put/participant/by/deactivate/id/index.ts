import { NextApiRequest, NextApiResponse } from "next";
import { participantModel } from "../../../../../../../../utils/database/model/participant";


const handlerPutLikeDeactivateById = async (
    req:NextApiRequest,
    res:NextApiResponse
) => {

    const {
        userId,
        eventId
    } = req.body

    if(req.method === "PUT"){
        try{
            await participantModel.update({
                data:{
                   active: false
                },
                where:{
                    userId: Number(userId),
                    eventId: Number(eventId)
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

export default handlerPutLikeDeactivateById;