import { NextApiRequest, NextApiResponse } from "next";
import { eventModel } from "../../../../../../../utils/database/model/event";

const handlerGetEventById = async (
    req:NextApiRequest,
    res:NextApiResponse
) => {

    const {
        id
    } = req.query;

    if(req.method === "GET"){
        try{
           await eventModel.findUnique({
            where:{
               id: Number(id)
            }
           }
        ).then((result : any)=>{
           res.status(201).json(result)
        }).catch((err)=>{
            res.status(401).json(err.message)
        })
        }catch(err){
          console.error(err);
        }
    }
}

export default handlerGetEventById;