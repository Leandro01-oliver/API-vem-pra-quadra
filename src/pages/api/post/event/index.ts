import { NextApiRequest, NextApiResponse } from "next";
import { eventModel } from "../../../../../utils/database/model/event";


const handlerPostEvent = async (
    req:NextApiRequest,
    res:NextApiResponse
) => {

    const {
        image,
        start_date,
        end_date,
        start_hour,
        end_hour,
        title,
        description,
        district,
        cep,
        type_category,
        userId
    } = req.body;

    if(req.method === "POST"){
        try{
            await eventModel.create({
                data:{
                    image: image,
                    start_date: start_date,
                    end_date: end_date,
                    start_hour: start_hour,
                    end_hour: end_hour,
                    title: title,
                    description: description,
                    district: district,
                    cep: cep,
                    type_category: type_category,
                    userId: userId
                }
            }).then((result)=>{
                res.status(201).json(result);
            }).catch((err)=>{
                res.status(401).json(err.message)
            })
        }catch(err){
          console.error(err);
        }
    }
}

export default handlerPostEvent;