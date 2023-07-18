import { Chats } from '../../../controllers/index.mjs'

export const getChats = async (req, res) => {
    try {
        const chats = new Chats(req.data.userId)
        const data = await chats.getByGuestUid()

        return res.status(200).json({ data: data })
    } catch ({ message }) {
        return res.status(400).json(message)
    }
}