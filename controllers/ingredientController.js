const controller = {};

const models = require("../models");

controller.getAll = () => {
  return models.Ingredient.findAll();
};

controller.getOne = (id) => {
  return models.Ingredient.findOne({ where: { id: id } });
};

module.exports = controller;
