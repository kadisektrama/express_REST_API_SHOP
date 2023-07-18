import { ChatMessages } from '../../../controllers/index.mjs'

export const createMessage = async (req, res) => {
    try {
        const body = {
            guest_uid: '',
            host_uid: '',
            message: '',
        }

        const message = new ChatMessages()
        const data = await message.getById()

        return res.status(200).json({ data: data })
    } catch ({ message }) {
        return res.status(400).json({ message })
    }
}