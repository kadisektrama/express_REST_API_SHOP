import { ChatMessages } from '../../../controllers/index.mjs'

export const createMessage = async (req, res) => {
    try {
        const body = {
            guest_uid: req.data.userId,
            host_uid: req.body.host_uid,
            message: req.body.message,
        }

        const message = new ChatMessages(body)
        const data = await message.create(req.data.userId)

        return res.status(200).json({ data: data })
    } catch ({ message }) {
        return res.status(400).json({ message })
    }
}