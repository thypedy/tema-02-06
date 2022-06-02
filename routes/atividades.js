module.exports = (app)=>{
    app.post('/atividades',async (req,res)=>{
        var dados = req.body
        //return console.log(dados)
        //conectar com o database
        const database = require("../config/database")()
        //importar o model atividades
        const atividades = require("../models/atividades")
        //gravar as informações do formulário no database
        var gravar = await new atividades({
            data:dados.data,
            tipo:dados.tipo,
            entrega:dados.entrega,
            disciplina:dados.disciplina,
            instrucoes:dados.orientacoes,
            usuario:dados.id,
            titulo:dados.titulo
        }).save()
        //buscar as atividades do usuário
        var buscar = await atividades.find({usuario:dados.id})
        //recarregar a página atividades
        res.render('atividades.ejs',{nome:dados.nome,id:dados.id,lista:buscar})
    })
}