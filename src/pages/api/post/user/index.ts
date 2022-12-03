import { NextApiRequest, NextApiResponse } from "next";
import { userModel } from "../../../../../utils/database/model/user";

const handlerPostUser = async (
    req:NextApiRequest,
    res:NextApiResponse
) => {

    const {
        image, 
        name,
        email, 
        nick_name,
        tel,
        type_permission
    } = req.body;

    if(req.method === "POST"){
        try{
            await userModel.create({
                data:{
                    image: image,
                    name: name,
                    email: email, 
                    nick_name: nick_name,
                    tel: tel,
                    type_permission: type_permission,
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

export default handlerPostUser;