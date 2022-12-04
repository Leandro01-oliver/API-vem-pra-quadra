import { NextApiRequest, NextApiResponse } from "next";
import { commentModel } from "../../../../../../../utils/database/model/comment";


const handlerGetCommentByRelationId = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {

    const {
        description
    } = req.query;

    if (req.method === "GET") {
        try {
            await commentModel.findUnique({
                where: {
                    description: description?.toString()
                }
            }
            ).then((result: any) => {
                res.status(201).json(result)
            }).catch((err: Error) => {
                res.status(401).json(err.message)
            })
        } catch (err) {
            console.error(err);
        }
    }
}

export default handlerGetCommentByRelationId;