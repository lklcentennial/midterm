const Std = require("../models/std.model");

exports.create = async (req, res) => {
  if (!req.body.name || !req.body.major) {
    return res.status(400).send({
      message: "Name or major can't be empty",
    });
  }

  const std = new Std({
    name: req.body.name,
    age: req.body.age || null,
    major: req.body.major,
  });

  await std.save()
            .then((data) => res.send(data))
            .catch((err) => {
              res.status(500).send({
                message: "Something went wrong!!",
                error: err,
              });
            });
};

exports.findAll = async (req, res) => {
  // Retrieve all the data

  await Std.find()
            .then((stds) => {
              res.send(stds);
            })
            .catch((err) => {
              res.status(500).send({
                message: "Something went wrong!!",
                error: err,
              });
            });
};

exports.findOne = async (req, res) => {
  // console.log(req.params.id);

  await Std.findById(req.params.id)
            .then((stds) => {
              res.send(stds);
            })
            .catch((err) => {
              res.status(500).send({
                message: "Something went wrong!!",
                error: err,
              });
            });
};

exports.update = async (req, res) => {
  if (!req.body.name || !req.body.major) {
    return res.status(400).send({
      message: "Name or major can't be empty",
    });
  }

  await Std.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      age: req.body.age || null,
      major: req.body.major,
    },
    { new: true }
  )
    .then((stds) => {
      res.send(stds);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Something went wrong!!",
        error: err,
      });
    });
};

exports.delete = async (req, res) => {
  await Std.findByIdAndRemove(req.params.id)
    .then((stds) => {
      res.send({
        message: "ID got deleted!!",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Something went wrong!!",
        error: err,
      });
    });
};
