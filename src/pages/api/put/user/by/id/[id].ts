import { NextApiRequest, NextApiResponse } from "next";
import { userModel } from "../../../../../../../utils/database/model/user";


const handlerPutEventById = async (
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

    const {
      id
    } = req.query

    if(req.method === "PUT"){
        try{
            await userModel.update({
                data:{
                    image: image,
                    name: name,
                    email: email, 
                    nick_name: nick_name,
                    tel: tel,
                    type_permission: type_permission,
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

export default handlerPutEventById;