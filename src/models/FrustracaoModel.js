const db = require('../db');

module.exports = {
    save: (nome, numCpf, tema, pergunta, resposta, tempoSegundos)=>{

        return new Promise((resolve, reject)=>{
            db.query('INSERT INTO Frustracao (nome, cpf, tema, pergunta, resposta, tempoSegundos, dtCadastro) VALUE (?, ?, ?, ?, ?, ?, NOW())',
            [nome, numCpf, tema, pergunta, resposta, tempoSegundos],
            (error, results)=>{
                if (error) { reject(error); return; }
                resolve(results.insertId);
            });
        });
    }
};