const express = require('express');

const VideoController = require('./controllers/VideoController');

const routes = express.Router();

routes.get('/watch-video', VideoController.viewVideo) // mostra o index.html 
routes.get('/upload-video', VideoController.upload) // rota usada para salvar o vídeo no mongodb
routes.get('/watch', VideoController.fetchVideo)
routes.get('/', VideoController.index)

//Exportar a rota
module.exports = routes;