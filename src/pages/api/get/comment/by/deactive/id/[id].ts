import { NextApiRequest, NextApiResponse } from "next";
import { commentModel } from "../../../../../../../../utils/database/model/comment";

const handlerGetCommentByDeactiveId = async (
    req:NextApiRequest,
    res:NextApiResponse
) => {

    const {
        eventId
    } = req.query;

    if(req.method === "GET"){
        try{
           await commentModel.findMany({
            where:{
                eventId:Number(eventId),
                active:true
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

export default handlerGetCommentByDeactiveId;