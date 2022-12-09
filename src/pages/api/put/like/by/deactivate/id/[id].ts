import { NextApiRequest, NextApiResponse } from "next";
import { likeModel } from "../../../../../../../../utils/database/model/like";


const handlerPutLikeDeactivateById = async (
    req:NextApiRequest,
    res:NextApiResponse
) => {

    const {
      eventId
    } = req.query

    if(req.method === "PUT"){
        try{
            await likeModel.update({
                data:{
                   active: false
                },
                where:{
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