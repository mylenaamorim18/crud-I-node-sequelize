const database = require('../models');

class CafeController {
    static async inserir(req, res) {
        try {
            const novoCafe = await database.Cafes.create({
                nome: req.body.nome,
                preco: req.body.preco,
                quantidade: req.body.quantidade,
                imagem: req.body.imagem,
                descricao: req.body.descricao,
                categoria_id: req.body.categoria_id
            });
    
            return res.status(201).json(novoCafe);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }

    static async editar(req, res) {
        try {
            const cafe = await database.Cafes.findByPk(req.params.id);
    
            if (cafe == null) {
                return res.status(404).json({message: "Café não encontrado!"});
            }
    
            const result = await cafe.update({ 
                nome: req.body.nome,
                preco: req.body.preco,
                quantidade: req.body.quantidade,
                imagem: req.body.imagem,
                descricao: req.body.descricao
            },
            { 
                where: {id: cafe.id}
            });
    
            return res.status(201).json(result);
        } catch (error) {
            return res.status(400).json({message: "Café alterado com sucesso!"});
        }
    }

    static async deletar(req, res) {
        try { 
            const cafe = await database.Cafes.findByPk(req.params.id);
    
            const result = await cafe.destroy({ where: { id: cafe.id } });
    
            return res.status(201).json({message: "Café deletado com sucesso!"});
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }

    static async visualizar(req, res) {
        try { 
            const cafe = await database.Cafes.findByPk(req.params.id);
    
            return res.status(200).json(cafe);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }

    static async listar(req, res) {
        try { 
            const cafes = await database.Cafes.findAll();
    
            return res.status(200).json(cafes);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }
}

module.exports = CafeController;