import mongoose from 'mongoose'

const chatMessageSchema = mongoose.Schema({
    chat_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'chats',
    },
    message: {
        type: String,
    },
    uid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    }
})

const chatMessages = mongoose.model('chat-messages', chatMessageSchema)

export { chatMessages }