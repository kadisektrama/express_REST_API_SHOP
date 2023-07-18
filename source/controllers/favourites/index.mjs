import { Favourites as FavouritesModel } from "../../models/index.mjs"

export class Favourites {
    constructor(data) {
        this.models = {
            favourites: new FavouritesModel(data)
        }
    }

    async get() {
        const data = this.models.favourites.get()

        return data
    }

    async create(body) {
        const data = this.models.favourites.create(body)

        return data
    }

    async delete(body) {
        const data = this.models.favourites.delete(body)

        return data
    }
}