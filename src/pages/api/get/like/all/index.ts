import { NextApiRequest, NextApiResponse } from "next";
import { likeModel } from "../../../../../../utils/database/model/like";

const handlerGetLikeAll = async (
    req:NextApiRequest,
    res:NextApiResponse
) => {

    if(req.method === "GET"){
        try{
            await likeModel.findMany()
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

export default handlerGetLikeAll;