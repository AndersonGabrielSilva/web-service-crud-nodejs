const express = require('express');
const app = new express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

//Config    
//Template engine - Para renderizar a pagina html
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// conexão com o banco de dados
const sequelize = new Sequelize('DB_Sib', 'postgres', '1498', {
    host: 'localhost',
    dialect: 'postgres'
});

//Testando conexão com o DataBase
sequelize.authenticate().then(function () {
    console.log("Conectado com sucesso ao Postgres")
}).catch(function (erro) {
    console.log("Falha na conexão com o Postgres" + erro);
});

//Rotas
app.get('/cad',function(req,resp){
    resp.render('formulario')
})

app.post('/adicionar',function(req,resp){
    resp.send('Texto: '+req.body.titulo)
})

app.listen(8000, function (){
    console.log("Server rodando!")
});