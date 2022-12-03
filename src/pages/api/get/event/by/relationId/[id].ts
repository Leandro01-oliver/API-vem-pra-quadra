import { NextApiRequest, NextApiResponse } from "next";
import { eventModel } from "../../../../../../../utils/database/model/event";

const handlerGetEventByRelationId = async (
    req:NextApiRequest,
    res:NextApiResponse
) => {

    const {
        title
    } = req.query;

    if(req.method === "GET"){
        try{
           await eventModel.findUnique({
            where:{
              title: title?.toString()
            }
           }
        ).then((result)=>{
           res.status(201).json(result)
        }).catch((err)=>{
            res.status(401).json(err.message)
        })
        }catch(err){
          console.error(err);
        }
    }
}

export default handlerGetEventByRelationId;