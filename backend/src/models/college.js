const mongoose = require('mongoose')

const collegeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    pictures: [
        {
            img: {
                type: String
            }
        }
    ],
    updatedAt: { type: Date }
}, { timestamps: true })


const College = mongoose.model('College', collegeSchema)

module.exports = College
