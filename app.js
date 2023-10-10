var express = require('express')
var app = express()

app.get('/', function(req, res){
    res.send("<html><body>Portal de Noticias</body></html>")
})

app.get('/tecnologia', function(req, res){
    res.send("<html><body>Portal de Noticias sobre tecnologia</body></html>")
})
app.get('/moda', function(req, res){
    res.send("<html><body>Portal de Noticias sobre moda</body></html>")
})

app.listen(3000, function(){
    console.log('Servidor Rodando com Express')
})