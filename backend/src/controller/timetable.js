const Timetable = require("../models/timetable");

exports.createTimetable = (req, res) => {
  const { name, description, semester } = req.body;

  let pictures = [];
  if (req.files && req.files.length > 0) {
    pictures = req.files.map((file) => {
      return { img: file.location };
    });
  }

  const timetable = new Timetable({
    name,
    description,
    pictures,
    semester
  });

  timetable.save((err, timetable) => {
    if (err) {
      return res.status(400).send({ error: err });
    }
    if (timetable) {
      return res.status(201).send({ timetable, pictures: req.files });
    }
  });
};

exports.getTimetableBySemester = async (req, res) => {
  const { id } = req.params;
  Timetable.find({ semester: id })
    .populate("semester")
    .exec((error, timetable) => {
      if (error) {
        return res.status(400).send({ error: error });
      }
      if (timetable) {
        return res.status(200).send({ timetables: timetable });
      }
    });
};

exports.getTimetableById = async (req, res) => {
  const { id } = req.params;

  if (id) {
    Timetable.findOne({ _id: id })
      .populate("semester")
      .exec((error, timetable) => {
        if (error) {
          return res.status(400).send({ error: error });
        }
        if (timetable) {
          return res.status(200).send({ timetable });
        }
      });
  } else {
    return res.status(200).send({ error: "params required" });
  }
};
