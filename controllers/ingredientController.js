const controller = {};

const models = require("../models");

controller.getAll = (recipeId) => {
  return models.Ingredient.findAll({ where: { RecipeId: recipeId } });
};

controller.getOne = (id) => {
  return models.Ingredient.findOne({ where: { id: id } });
};

module.exports = controller;
