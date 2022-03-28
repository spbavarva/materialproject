const mongoose = require('mongoose')

const semesterSchema = new mongoose.Schema({
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
    branch:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Branch'
    },
    updatedAt: { type: Date }
}, { timestamps: true })


const Semester = mongoose.model('Semester', semesterSchema)

module.exports = Semester
