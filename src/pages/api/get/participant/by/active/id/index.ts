import { NextApiRequest, NextApiResponse } from "next";
import { participantModel } from "../../../../../../../../utils/database/model/participant";

const handlerGetParticipantByAtivoId = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {

    const {
        userId,
        eventId
    } = req.body

    if (req.method === "GET") {
        try {
            await participantModel.findMany({
                where: {
                    userId: Number(userId),
                    eventId: Number(eventId),
                    active: true
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

export default handlerGetParticipantByAtivoId;