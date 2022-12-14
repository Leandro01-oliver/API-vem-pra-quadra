import { NextApiRequest, NextApiResponse } from "next";
import { eventModel } from "../../../../../../../../utils/database/model/event";

const handlerGetEventByAtivo = async (
    req:NextApiRequest,
    res:NextApiResponse
) => {

    const {
        userId
    } = req.query;

    if(req.method === "GET"){
        try{
           await eventModel.findMany({
            where:{
               userId:Number(userId),
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

export default handlerGetEventByAtivo;