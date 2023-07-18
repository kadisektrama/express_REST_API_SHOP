// Core
import express from 'express'

// Tools
import { getFavourites, createFavourite, deleteFavourite } from './handlers.mjs'

const routes = express.Router()

routes.get('/', getFavourites)
routes.post('/', createFavourite)
routes.delete('/:favouriteId', deleteFavourite)

export { routes as favourites }