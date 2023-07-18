import lodash from 'lodash'

import { ChatMessages as ChatMessagesModel } from '../../models/index.mjs'
import { Chats as ChatModel } from '../../models/index.mjs'

class ChatMessages {
    constructor(data) {
        this.models = {
            chatMessages: new ChatMessagesModel(data),
            chat: new ChatModel(data)
        }
    }

    async get() {
        const data = await this.models.chatMessages.get()

        return data
    }

    async create(uid) {
        let chat = await this.models.chat.getByHostGuestUid()
        console.log('chat', chat)
        if (lodash.isEmpty(chat)) {
            // if chat isn't exist
            chat = await this.models.chat.create()
            const data = await this.models.chatMessages.create({ chat_id: chat._id, uid })

            return data
        } else {
            // if chat is exist
            const data = await this.models.chatMessages.create({ chat_id: chat._id, uid })

            return data
        }
    }
}

export { ChatMessages }