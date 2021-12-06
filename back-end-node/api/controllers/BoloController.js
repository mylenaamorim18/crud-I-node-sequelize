const database = require('../models');

class BoloController {
    static async inserir(req, res) {
        try {
            const novoBolo = await database.Bolos.create({
                nome: req.body.nome,
                preco: req.body.preco,
                quantidade: req.body.quantidade,
                imagem: req.body.imagem,
                descricao: req.body.descricao,
                categoria_id: req.body.categoria_id
            });
    
            return res.status(201).json(novoBolo);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }

    static async editar(req, res) {
        try {
            const bolo = await database.Bolos.findByPk(req.params.id);
    
            if (bolo == null) {
                return res.status(404).json({message: "Bolo não encontrado!"});
            }
    
            const result = await bolo.update({ 
                nome: req.body.nome,
                preco: req.body.preco,
                quantidade: req.body.quantidade,
                imagem: req.body.imagem,
                descricao: req.body.descricao
            },
            { 
                where: {id: bolo.id}
            });
    
            return res.status(201).json(result);
        } catch (error) {
            return res.status(400).json({message: "Bolo alterado com sucesso!"});
        }
    }

    static async deletar(req, res) {
        try { 
            const bolo = await database.Bolos.findByPk(req.params.id);
    
            const result = await bolo.destroy({ where: { id: bolo.id } });
    
            return res.status(201).json({message: "Bolo deletado com sucesso!"});
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }

    static async visualizar(req, res) {
        try { 
            const bolo = await database.Bolos.findByPk(req.params.id);
    
            return res.status(201).json(bolo);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }

    static async listar(req, res) {
        try { 
            const bolos = await database.Bolos.findAll();
    
            return res.status(201).json(bolos);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }
}

module.exports = BoloController;