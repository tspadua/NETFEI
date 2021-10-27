const express = require('express');

const VideoController = require('./controllers/VideoController');

const routes = express.Router();

routes.get('/', VideoController.index) // mostra o index.html 
routes.get('/upload-video', VideoController.upload) // rota usada para salvar o vídeo no mongodb
routes.get('/watch', VideoController.fetchVideo)

//Exportar a rota
module.exports = routes;