import { NextApiRequest, NextApiResponse } from "next";
import { participantModel } from "../../../../../../../../utils/database/model/participant";


const handlerPutParticipantActiveById = async (
    req:NextApiRequest,
    res:NextApiResponse
) => {

    const {
        id
    } = req.query;

        try{

            await participantModel.update({
                data:{
                   active: true
                },
                where:{
                   id: Number(id)
                }
            }).then((result : any)=>{
                res.status(201).json(result);
            }).catch((err : Error)=>{
                res.status(401).json(err.message)
            });

        }catch(err){
          console.error(err);
        }
}

export default handlerPutParticipantActiveById;