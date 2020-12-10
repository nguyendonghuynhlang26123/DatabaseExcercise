const controller = {};

const models = require('../models');

controller.getAll = () => {
  return models.Recipe.findAll({
    include: [{ model: models.Ingredient, limit: 4 }],
  });
};

controller.getOne = (id) => {
  return models.Recipe.findOne({
    where: { id: id },
    include: [{ model: models.Direction }, { model: models.Ingredient }],
  });
};

module.exports = controller;
