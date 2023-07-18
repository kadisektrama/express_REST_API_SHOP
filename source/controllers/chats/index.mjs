import { Chats as ChatsModel } from '../../models/index.mjs'

class Chats {
    constructor(data) {
        this.models = {
            chats: new ChatsModel(data)
        }
    }

    async getByGuestUid() {
        const data = await this.models.chats.getByGuestUid()

        return data
    }

    async getByHostUid() {
        const data = await this.models.chats.getByHostUid()

        return data
    }

    async create(body) {
        const data = await this.models.chats.create(body)

        return data
    }
}

export { Chats }