const express = require('express');
const { route } = require('express/lib/application');

const TaskController = require('../controller/TaskController');

const routes = express.Router();

routes.get('/task', TaskController.index);
routes.get('/create', TaskController.create);