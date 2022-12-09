import { NextApiRequest, NextApiResponse } from "next";
import { likeModel } from "../../../../../utils/database/model/like";

const handlerPostLike = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {

    const {
        description,
        eventId
    } = req.body;

    if(req.method === "POST"){
        try{
            await likeModel.create({
                data:{
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

export default handlerPostLike;