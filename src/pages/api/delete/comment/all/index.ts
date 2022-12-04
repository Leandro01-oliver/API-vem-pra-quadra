import { NextApiRequest, NextApiResponse } from "next";
import { commentModel } from "../../../../../../utils/database/model/comment";


const handlerDeleteCommentAll = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {

    if (req.method === "GET") {
        try {
            await commentModel.deleteMany()
                .then((result: any) => {
                    res.status(201).json(result);
                }).catch((err: Error) => {
                    res.status(401).json(err.message)
                })
        } catch (err) {
            console.error(err);
        }
    }
}

export default handlerDeleteCommentAll;