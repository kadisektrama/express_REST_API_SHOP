// Core
import express from 'express'

// Tools
import { createMessage } from './handlers.mjs'

const routes = express.Router()

routes.post('/', createMessage)

export { routes as messages }