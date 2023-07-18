import { favourites } from "../../odm/index.mjs"

export class Favourites {
    constructor(data) {
        this.data = data
    }

    async get() {
        const data = await favourites.find({ user_id: this.data })

        return data
    }

    async create(body) {
        const data = await favourites.create(body)

        return data
    }

    async delete(body) {
        const data = await favourites.deleteOne(body)

        return data
    }
}