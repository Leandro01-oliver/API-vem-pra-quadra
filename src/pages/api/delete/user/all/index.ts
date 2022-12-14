import { NextApiRequest, NextApiResponse } from "next";
import { userModel } from "../../../../../../utils/database/model/user";

const handlerGetEventAll = async (
    req:NextApiRequest,
    res:NextApiResponse
) => {

    if(req.method === "DELETE"){
        try{
            await userModel.deleteMany()
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

export default handlerGetEventAll;