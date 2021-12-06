const express = require('express');
const router = express.Router();

const controllerLogin = require("../controllers/LoginController");

router.post('/autenticacao', controllerLogin.autenticacao);

module.exports = router;