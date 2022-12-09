import { NextApiRequest, NextApiResponse } from "next";
import { commentModel } from "../../../../../../../utils/database/model/comment";

const handlerGetCommentById = async (
    req:NextApiRequest,
    res:NextApiResponse
) => {

    const {
        eventId
    } = req.query;

    if(req.method === "GET"){
        try{
           await commentModel.findUnique({
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

export default handlerGetCommentById;