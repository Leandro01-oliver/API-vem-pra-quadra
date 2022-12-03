import { NextApiRequest, NextApiResponse } from "next";
import { userModel } from "../../../../../../utils/database/model/user";

const handlerGetEventAll = async (
    req:NextApiRequest,
    res:NextApiResponse
) => {

    if(req.method === "GET"){
        try{
            await userModel.deleteMany()
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