import lodash from "lodash"

import { Users } from "../../../controllers/index.mjs"

export const getUsers = async (req, res) => {
    try {
        const user = new Users()
        const data = await user.get()

        return res.status(200).json({ data: data })
    } catch (e) {
        return res.status(400).json({ message: e.message })
    }
}

export const createUser = async (req, res) => {
    try {
        const user = new Users()
        const data = await user.create(req.body)

        return res.status(201).json({ data: data })
    } catch (e) {
        return res.status(400).json({ message: e.message })
    }
}

export const getByUserId = async (req, res) => {
    try {
        const user = new Users(req.params.userId)
        const data = await user.getById()

        res.status(200).json({ data: lodash.pick(data, ['email', 'first_name', 'last_name', 'phone', 'role', 'user_name', 'image', '_id']) })
    } catch (e) {
        res.status(400).json({ message: e.message })
    }
}

export const updateByUserId = async (req, res) => {
    try {
        const user = new Users(req.params.userId)
        await user.update(req.body)

        return res.sendStatus(201)
    } catch ({ message }) {
        return res.status(400).json({ message })
    }
}

export const deleteByUserId = async (req, res) => {
    try {
        const user = new Users(req.params.userId)
        await user.delete()

        return res.sendStatus(202)
    } catch ({ message }) {
        return res.status(400).json({ message })
    }
}