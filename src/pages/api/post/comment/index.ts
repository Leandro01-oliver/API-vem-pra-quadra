import { NextApiRequest, NextApiResponse } from "next";
import { eventModel } from "../../../../../utils/database/model/event";


const handlerPostEvent = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {

    const {
        description,
        active,
        eventId
    } = req.body;

    if (req.method === "POST") {
        try {
            await eventModel.create({
                data: {
                    description: description,
                    active: active,
                    eventId: eventId
                }
            }).then((result: any) => {
                res.status(201).json(result);
            }).catch((err: Error) => {
                res.status(401).json(err.message)
            })
        } catch (err) {
            console.error(err);
        }
    }
}

export default handlerPostEvent;