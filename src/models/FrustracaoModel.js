const db = require('../db');

module.exports = {
    save: (nome, numCpf, tema, perguntaId, pergunta, resposta, nivelDificuldade, tempoSegundos)=>{

        return new Promise((resolve, reject)=>{
            db.query('INSERT INTO Frustracao (nome, cpf, tema, perguntaId, pergunta, resposta, nivelDificuldade, tempoSegundos, dtCadastro) VALUE (?, ?, ?, ?, ?, ?, ?, ?, NOW())',
            [nome, numCpf, tema, perguntaId, pergunta, resposta, nivelDificuldade, tempoSegundos],
            (error, results)=>{
                if (error) { reject(error); return; }
                resolve(results.insertId);
            });
        });
    }
};