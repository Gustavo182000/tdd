const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const routes = require('./routes')

app.use(bodyParser.json())
app.use(routes);



app.listen(3001, () => console.log("Executando na porta 3001"))