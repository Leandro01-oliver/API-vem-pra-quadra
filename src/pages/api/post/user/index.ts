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
        tel
    } = req.body;

    const typePermission = 
                email == "leandro.lima@faculdadesapiens.edu.br" &&
                email == "carlosedu994466@gmail.com"
                ? "Administrador" : "Usuário";

    if(req.method === "POST"){
        try{
            await userModel.create({
                data:{
                    image: image,
                    name: name,
                    email: email, 
                    nick_name: nick_name,
                    tel: tel,
                    type_permission: typePermission,
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

export default handlerPostUser;