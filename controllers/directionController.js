const controller = {};

const models = require("../models");

controller.getAll = () => {
  return models.Direction.findAll();
};

controller.getOne = (id) => {
  return models.Direction.findOne({ where: { id: id } });
};

module.exports = controller;
