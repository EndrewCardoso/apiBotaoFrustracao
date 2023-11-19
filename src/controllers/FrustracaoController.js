const frustracaoModel = require('../models/FrustracaoModel');

module.exports = {
    save: async (req, res)=>{
        let content = {error:'', result:{}};

        let nome = req.body.parNome;
        let numCpf = req.body.cpf;
        let tema = req.body.parTema;
        let pergunta = req.body.parPergunta;
        let resposta = req.body.respostaMesclada;
        let nivelDificuldade = req.body.parDificuldade;
        let tempoEmSeg = req.body.contador;
        
        if (nome) {
            let frustracaoId = frustracaoModel.save(nome, numCpf, tema, pergunta, resposta, nivelDificuldade, tempoEmSeg);
            content.result = {
                id: frustracaoId,
                nome,
                numCpf,
                tema,
                pergunta,
                resposta,
                nivelDificuldade,
                tempoEmSeg
            }
        }
        else{
            content.error = 'Não há dados a serem salvos.';
        }

        res.json(content);
    }
}