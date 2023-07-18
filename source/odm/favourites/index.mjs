import mongoose from 'mongoose'

const favouriteSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products'
    }
})

const favourites = mongoose.model('favourites', favouriteSchema)

export { favourites }