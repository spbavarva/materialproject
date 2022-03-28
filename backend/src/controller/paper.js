const Paper = require("../models/paper");

exports.createPaper = (req, res) => {
  const { name, description, semester, cource } = req.body;

  let pictures = [];
  if (req.files && req.files.length > 0) {
    pictures = req.files.map((file) => {
      return { img: file.location };
    });
  }

  const paper = new Paper({
    name,
    description,
    pictures,
    semester,
    cource
  });

  paper.save((err, paper) => {
    if (err) {
      return res.status(400).send({ error: err });
    }
    if (paper) {
      return res.status(201).send({ paper, pictures: req.files });
    }
  });
};

exports.getAllPapersBySemester = async (req, res) => {
  const { id } = req.params;
  Paper.find({ semester: id })
    .populate("semester")
    .populate("cource")
    .exec((error, paper) => {
      if (error) {
        return res.status(400).send({ error: error });
      }
      if (paper) {
        return res.status(200).send({ papers: paper });
      }
    });
};

exports.getAllPapersByCource = async (req, res) => {
  const { id } = req.params;
  Paper.find({ cource: id })
    .populate("semester")
    .populate("cource")
    .exec((error, paper) => {
      if (error) {
        return res.status(400).send({ error: error });
      }
      if (paper) {
        return res.status(200).send({ papers: paper });
      }
    });
};

exports.getPaperById = async (req, res) => {
  const { id } = req.params;

  if (id) {
    Paper.findOne({ _id: id })
      .populate("semester")
      .populate("cource")
      .exec((error, paper) => {
        if (error) {
          return res.status(400).send({ error: error });
        }
        if (paper) {
          return res.status(200).send({ paper });
        }
      });
  } else {
    return res.status(200).send({ error: "params required" });
  }
};
