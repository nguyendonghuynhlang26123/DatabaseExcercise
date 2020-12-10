const controller = {};

const models = require("../models");

controller.getAll = (recipeId) => {
  return models.Direction.findAll({where: {RecipeId: recipeId}});
};

controller.getOne = (id) => {
  return models.Direction.findOne({ where: { id: id } });
};

module.exports = controller;
