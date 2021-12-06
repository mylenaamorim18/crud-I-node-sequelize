const express = require('express');
const router = express.Router();

const controllerCafes = require("../controllers/CafeController")

router.post('/novo', controllerCafes.inserir);
router.put('/editar/:id', controllerCafes.editar);
router.delete('/deletar/:id', controllerCafes.deletar);
router.get('/visualizar/:id', controllerCafes.visualizar);
router.get('/listar', controllerCafes.listar);

module.exports = router;