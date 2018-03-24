var express = require("express");
var router = express.Router();
var db = require("../models");
var helpers = require("../helpers/todo");

router.route("/")
    .get(helpers.getTodo)
    .post(helpers.createTodo)

router.route("/:todoId")
    .get(helpers.showTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo)

module.exports = router;