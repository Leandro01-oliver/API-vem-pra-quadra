import { NextApiRequest, NextApiResponse } from "next";
import { userModel } from "../../../../../../utils/database/model/user";

const handlerPutUserAll = async (
    req:NextApiRequest,
    res:NextApiResponse
) => {

    const {
        image, 
        name,
        email, 
        nick_name,
        tel,
        cpf,
        type_permission
    } = req.body;

    if(req.method === "PUT"){
        try{
            await userModel.create({
                data:{
                    image: image,
                    name: name,
                    email: email, 
                    nick_name: nick_name,
                    tel: tel,
                    cpf: cpf,
                    type_permission: type_permission,
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

export default handlerPutUserAll;