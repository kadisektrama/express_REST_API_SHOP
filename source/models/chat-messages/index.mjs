import { chatMessages } from '../../odm/index.mjs'

export class ChatMessages {
    constructor(data) {
        this.data = data
    }

    async create(body) {
        const data = await chatMessages.create({ chat_id: body.chat_id, message: this.data.message, uid: body.uid })

        return data
    }

    async get() {
        const data = await chatMessages.find({ chat_id: this.data }).populate('chat_id')

        return data
    }

}