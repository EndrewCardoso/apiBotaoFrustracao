const frustracaoModel = require('../models/FrustracaoModel');

module.exports = {
    save: async (req, res)=>{
        let content = {error:'', result:{}};

        let nome = req.body.parNome;
        let numCpf = req.body.parCpf;
        let tema = req.body.parTema;
        let pergunta = req.body.parPergunta;
        let resposta = req.body.parResposta;
        let tempoEmSeg = req.body.parSegundos;
        
        if (nome) {
            let frustracaoId = frustracaoModel.save(nome, numCpf, tema, pergunta, resposta, tempoEmSeg);
            content.result = {
                id: frustracaoId,
                nome,
                numCpf,
                tema,
                pergunta,
                resposta,
                tempoEmSeg
            }
        }
        else{
            content.error = 'Não foi possível encontrar dados.';
        }

        res.json(content);
    }
}