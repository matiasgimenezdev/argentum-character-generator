const express = require('express');
const path = require('path');
const routes = require('./routes.js');
const app = express();
const port = 3000;

routes(app);

app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
	console.log(`Servidor escuchando en http://localhost:${port}`);
});
