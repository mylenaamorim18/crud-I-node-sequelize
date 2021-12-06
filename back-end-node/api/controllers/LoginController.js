const database = require('../models');

class LoginController {
    static async autenticacao(req, res) {
        try {
            // req.body.nome

            // if (req.body.email )
    
            // return res.status(201).json(novaCategoria);
            const usuario = await database.Login.findOne({ where: { email: req.body.email } })
            if (usuario) {
                if (usuario.senha == req.body.senha) {
                    return res.status(201).json("ok");
                } else {
                    return res.status(404).json({message: "Senha incorreta"});
                }
            }
            else {
                return res.status(404).json({message: "Usuário não cadastrado"});
            }
        } catch (error) {
            return res.status(400).json({message: "Dados inválidos"});
        }
    }
}
module.exports = LoginController;