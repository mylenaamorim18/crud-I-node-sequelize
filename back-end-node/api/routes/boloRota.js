const express = require('express');
const router = express.Router();

const controllerBolos = require("../controllers/BoloController");

router.post('/novo', controllerBolos.inserir);
router.put('/editar/:id', controllerBolos.editar);
router.delete('/deletar/:id', controllerBolos.deletar);
router.get('/visualizar/:id', controllerBolos.visualizar);
router.get('/listar', controllerBolos.listar);

module.exports = router;