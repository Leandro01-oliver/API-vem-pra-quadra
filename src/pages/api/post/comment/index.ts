import { NextApiRequest, NextApiResponse } from "next";
import { commentModel } from "../../../../../utils/database/model/comment";


const handlerPostComment = async (
    req:NextApiRequest,
    res:NextApiResponse
) => {

    const {
        description,
        eventId
    } = req.body;

    if(req.method === "POST"){
        try{
            await commentModel.create({
                data:{
                    description: description,
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

export default handlerPostComment;