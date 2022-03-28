const mongoose = require('mongoose')

const paperSchema = new mongoose.Schema({
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
    semester:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Semester'
    },
    cource:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Cource'
    },
    updatedAt: { type: Date }
}, { timestamps: true })


const Paper = mongoose.model('Paper', paperSchema)

module.exports = Paper
