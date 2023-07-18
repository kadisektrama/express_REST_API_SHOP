import { Favourites } from '../../../controllers/index.mjs'

export const createFavourite = async (req, res) => {
    try {
        const body = {
            user_id: req.data.userId,
            product_id: req.body.product_id,
        }

        const favourites = new Favourites()
        const data = await favourites.create(body)

        return res.status(200).json({ data: data })
    } catch ({ message }) {
        return res.status(400).json(message)
    }
}

export const getFavourites = async (req, res) => {
    try {
        const favourites = new Favourites(req.data.userId)
        const data = await favourites.get()

        return res.status(200).json({ data: data })
    } catch ({ message }) {
        return res.status(400).json(message)
    }
}

export const deleteFavourite = async (req, res) => {
    const body = {
        user_id: req.data.userId,
        product_id: req.params.favouriteId,
    }

    try {
        const favourites = new Favourites()
        const data = await favourites.delete(body)

        return res.status(200).json({ data: data })
    } catch ({ message }) {
        return res.status(400).json(message)
    }
}