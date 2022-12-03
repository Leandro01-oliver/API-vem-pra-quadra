import { NextApiRequest, NextApiResponse } from "next";
import { eventModel } from "../../../../../../utils/database/model/event";

const handlerGetEventAll = async (
    req:NextApiRequest,
    res:NextApiResponse
) => {

    if(req.method === "GET"){
        try{
            await eventModel.findMany()
            .then((result)=>{
                res.status(201).json(result);
            }).catch((err)=>{
                res.status(401).json(err.message)
            })
        }catch(err){
          console.error(err);
        }
    }
}

export default handlerGetEventAll;