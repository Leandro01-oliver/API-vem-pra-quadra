import { NextApiRequest, NextApiResponse } from "next";
import { participantModel } from "../../../../../../utils/database/model/participant";

const handlerGetParticipantAll = async (
    req:NextApiRequest,
    res:NextApiResponse
) => {

    if(req.method === "GET"){
        try{
            await participantModel.findMany()
            .then((result : any)=>{
                res.status(201).json(result);
            }).catch((err : Error)=>{
                res.status(401).json(err.message)
            })
        }catch(err){
          console.error(err);
        }
    }
}

export default handlerGetParticipantAll;