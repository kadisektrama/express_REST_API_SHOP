import { chats } from '../../odm/index.mjs'
import lodash from 'lodash'

export class Chats {
    constructor(data) {
        this.data = data
    }

    async create() {
        const data = await chats.create(lodash.pick(this.data, ['guest_uid', 'host_uid']))

        return data
    }

    async getById() {
        const data = await chats.findById(this.data)

        return data
    }

    async getByHostGuestUid() {
        const data = await chats.findOne(lodash.pick(this.data, ['guest_uid', 'host_uid', '_id']))

        return data
    }

    async getByHostUid() {
        const data = await chats.find({ host_uid: this.data }).populate('guest_uid')

        return data
    }

    async getByGuestUid() {
        const data = await chats.find({ guest_uid: this.data }).populate('host_uid')

        return data
    }
}