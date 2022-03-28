const Cource = require("../models/cource")

exports.createCource = (req, res) => {

    const { name, description, semester } = req.body;

    let pictures = []
    if (req.files && req.files.length > 0) {
        pictures = req.files.map(file => {
            return { img: file.location }
        })
    }

    const cource = new Cource({
        name,
        description,
        pictures,
        semester
    })

    cource.save((err, cource) => {
        if (err) {
            return res.status(400).send({ error: err })
        }
        if (cource) {
            return res.status(201).send({ cource, pictures: req.files })
        }
    })

}

exports.getAllCourcesOfSemester = async (req, res) => {
    const { id } = req.params
    Cource.find({ semester: id })
        .populate('semester')
        .exec((error, cource) => {
            if (error) {
                return res.status(400).send({ error: error })
            }
            if (cource) {
                return res.status(200).send({ cources: cource })
            }
        })
}

exports.getCourceById = async (req, res) => {
    const { id } = req.params

    if (id) {
        Cource.findOne({ _id: id })
            .populate('semester')
            .exec((error, cource) => {
                if (error) {
                    return res.status(400).send({ error: error })
                }
                if (cource) {
                    return res.status(200).send({ cource })
                }

            })
    } else {
        return res.status(200).send({ error: "params required" })
    }

}
