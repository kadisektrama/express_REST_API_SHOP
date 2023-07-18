import mongoose from 'mongoose'

const imageSchema = mongoose.Schema({
    url: String
})

const productSchema = mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    currency: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'currencies',
    },
    reviews_count: Number,
    rating: Number,
    user_id: mongoose.Schema.Types.ObjectId,
    images: [imageSchema]
})

const products = mongoose.model('products', productSchema)

export { products }