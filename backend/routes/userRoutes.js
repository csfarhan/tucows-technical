const express = require('express');
const router = express.Router();

const {putUsers, getUsers, deleteAll, deleteUser} = require('../controllers/userController');

router.put('/putUsers', putUsers).get('/', getUsers).delete("/deleteAll", deleteAll).delete("/deleteUser", deleteUser);

module.exports = (router);