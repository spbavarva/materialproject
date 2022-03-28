const mongoose = require('mongoose')

const timetableSchema = new mongoose.Schema({
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
    updatedAt: { type: Date }
}, { timestamps: true })


const Timetable = mongoose.model('Timetable', timetableSchema)

module.exports = Timetable
