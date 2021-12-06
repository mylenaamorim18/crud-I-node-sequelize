const express = require('express');
const router = express.Router();

const controllerCategorias = require("../controllers/CategoriaController");

router.post('/novo', controllerCategorias.inserir);
router.put('/editar/:id', controllerCategorias.editar);
router.delete('/deletar/:id', controllerCategorias.deletar);
router.get('/visualizar/:id', controllerCategorias.visualizar);
router.get('/listar', controllerCategorias.listar);

module.exports = router;