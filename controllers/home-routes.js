const router = require('express').Router();
const sequelize = require('../config/connection');
const { Liquor, User, Comment } = require('../models');