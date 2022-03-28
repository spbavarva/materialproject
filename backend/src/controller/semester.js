const Semester = require("../models/semester")

exports.createSemester = (req, res) => {

    const { name, description, branch } = req.body;

    let pictures = []
    if (req.files && req.files.length > 0) {
        pictures = req.files.map(file => {
            return { img: file.location }
        })
    }

    const semester = new Semester({
        name,
        description,
        pictures,
        branch
    })

    semester.save((err, semester) => {
        if (err) {
            return res.status(400).send({ error: err })
        }
        if (semester) {
            return res.status(201).send({ semester, pictures: req.files })
        }
    })

}

exports.getAllSemestersOfBranch = async (req, res) => {
    const { id } = req.params
    Semester.find({ branch: id })
        .populate('branch')
        .exec((error, semester) => {
            if (error) {
                return res.status(400).send({ error: error })
            }
            if (semester) {
                return res.status(200).send({ semesters: semester })
            }
        })
}

exports.getSemesterById = async (req, res) => {
    const { id } = req.params

    if (id) {
        Semester.findOne({ _id: id })
            .populate('branch')
            .exec((error, semester) => {
                if (error) {
                    return res.status(400).send({ error: error })
                }
                if (semester) {
                    return res.status(200).send({ semester })
                }

            })
    } else {
        return res.status(200).send({ error: "params required" })
    }

}
