const controller = {};

const models = require("../models");

controller.getAll = () => {
  return models.Blog.findAll();
};

module.exports = controller;
