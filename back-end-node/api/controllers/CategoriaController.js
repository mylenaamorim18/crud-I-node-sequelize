const database = require('../models');

class CategoriaController {
    static async inserir(req, res) {
        try {
            const novaCategoria = await database.Categorias.create({
                nome: req.body.nome
            });
    
            return res.status(201).json(novaCategoria);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }

    static async editar(req, res) {
        try {
            const categoria = await database.Categorias.findByPk(req.params.id);
    
            if (categoria == null) {
                return res.status(404).json({message: "Categoria não encontrado!"});
            }
    
            const result = await categoria.update({ 
                nome: req.body.nome
            },
            { 
                where: {id: categoria.id}
            });
    
            return res.status(201).json(result);
        } catch (error) {
            return res.status(400).json({message: "Categoria alterado com sucesso!"});
        }
    }

    static async deletar(req, res) {
        try { 
            const categoria = await database.Categorias.findByPk(req.params.id);
    
            const result = await categoria.destroy({ where: { id: categoria.id } });
    
            return res.status(201).json({message: "Categoria deletada com sucesso!"});
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }

    static async visualizar(req, res) {
        try { 
            const categoria = await database.Categorias.findByPk(req.params.id);
    
            return res.status(201).json(categoria);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }

    static async listar(req, res) {
        try { 
            const categorias = await database.Categorias.findAll();
    
            return res.status(201).json(categorias);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }
}

module.exports = CategoriaController;