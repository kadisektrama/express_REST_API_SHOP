// Core
import express from 'express'

// Tools
import { getChats } from './handlers.mjs'

const routes = express.Router()

routes.get('/', getChats)

export { routes as chats }