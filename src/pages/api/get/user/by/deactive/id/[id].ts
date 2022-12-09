import { NextApiRequest, NextApiResponse } from "next";
import { userModel } from "../../../../../../../../utils/database/model/user";

const handlerGetUserByDeactiveId = async (
    req:NextApiRequest,
    res:NextApiResponse
) => {

    const {
        id
    } = req.query;

    if(req.method === "GET"){
        try{
            await userModel.findMany(
                {
                 where:{
                    id: Number(id),
                    active:false
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

export default handlerGetUserByDeactiveId;