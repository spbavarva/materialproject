const mongoose = require('mongoose')

const branchSchema = new mongoose.Schema({
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
    college:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'College'
    },
    updatedAt: { type: Date }
}, { timestamps: true })


const Branch = mongoose.model('Branch', branchSchema)

module.exports = Branch
