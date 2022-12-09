import { NextApiRequest, NextApiResponse } from "next";
import { eventModel } from "../../../../../../utils/database/model/event";


const handlerPutByIdEvent = async (
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

    const {
      id
    } = req.query

    if(req.method === "PUT"){
        try{
            await eventModel.update({
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
                },
                where:{
                    id: Number(id)
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

export default handlerPutByIdEvent;