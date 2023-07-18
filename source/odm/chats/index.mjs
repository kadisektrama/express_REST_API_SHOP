import mongoose from 'mongoose'

const chatSchema = mongoose.Schema({
    guest_uid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    host_uid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    }
})

const chats = mongoose.model('chats', chatSchema)

export { chats }