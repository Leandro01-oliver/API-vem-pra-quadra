import { NextApiRequest, NextApiResponse } from "next";
import { likeModel } from "../../../../../../../../utils/database/model/like";


const handlerPutLikeActiveById = async (
    req:NextApiRequest,
    res:NextApiResponse
) => {

    const {
      id
    } = req.query

    if(req.method === "PUT"){
        try{
            await likeModel.update({
                data:{
                   active: true
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

export default handlerPutLikeActiveById;