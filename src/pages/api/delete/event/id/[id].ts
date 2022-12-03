

import { NextApiRequest, NextApiResponse } from "next";
import { eventModel } from "../../../../../../utils/database/model/event";
import { userModel } from "../../../../../../utils/database/model/user";

const handlerDeleteEventById = async (
    req:NextApiRequest,
    res:NextApiResponse
) => {

    const {
        id
    } = req.query;

    if(req.method === "DELETE"){
        try{
           await eventModel.delete({
            where:{
               id: Number(id)
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

export default handlerDeleteEventById;