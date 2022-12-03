import { NextApiRequest, NextApiResponse } from "next";
import { eventModel } from "../../../../../../utils/database/model/event";

const handlerDeleteEventAll = async (
    req:NextApiRequest,
    res:NextApiResponse
) => {

    if(req.method === "GET"){
        try{
            await eventModel.deleteMany()
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

export default handlerDeleteEventAll;