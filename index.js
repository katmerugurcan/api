const express = require('express');
const setData = require('./Tools/methods');
const baseUrl = require('./Tools/svConfig');

const PORT = process.env.PORT || 5000;

const server = express();
server.use(express.json());
server.use(express.static("public"));

server.get('/:path', async (req, res) => {
    const { path } = req.params;
    const data = await setData.Get(`${baseUrl}/${path}`);
    console.log("Data:1212==>> ", data);
    res.send(data);
});

server.get("/:path/:id", async (req, res) => {
    const { path, id } = req.params;
    const data = await setData.Get(`${baseUrl}/${path}/${id}`);
    console.log("Path: ", data);
    res.status(200).json(data);
});

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT} adresinden gelen istekler dinleniyor...`);
});