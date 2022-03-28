const Branch = require("../models/branch")


exports.createBranch = (req, res) => {

    const { name, description, college } = req.body;

    let pictures = []
    if (req.files && req.files.length > 0) {
        pictures = req.files.map(file => {
            return { img: file.location }
        })
    }

    const branch = new Branch({
        name,
        description,
        pictures,
        college
    })

    branch.save((err, branch) => {
        if (err) {
            return res.status(400).send({ error: err })
        }
        if (branch) {
            return res.status(201).send({ branch, pictures: req.files })
        }
    })

}

exports.getAllBranchesOfCollege = async (req, res) => {
    const { id } = req.params
    Branch.find({ college: id })
    .populate('college')
        .exec((error, branch) => {
            if (error) {
                return res.status(400).send({ error: error })
            }
            if (branch) {
                return res.status(200).send({ branches: branch })
            }
        })
}

exports.getBranchById = async (req, res) => {
    const { id } = req.params

    if (id) {
        Branch.findOne({ _id: id })
        .populate('college')
            .exec((error, branch) => {
                if (error) {
                    return res.status(400).send({ error: error })
                }
                if (branch) {
                    return res.status(200).send({ branch })
                }

            })
    } else {
        return res.status(200).send({ error: "params required" })
    }

}
