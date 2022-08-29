const express = require('express');
const setData = require("./scripts/Tools/methods");
const { baseUrl, token } = require('./scripts/Tools/svConfig');

const server = express();

server.use(express.json({ extended: false }));

const ngrok = require('ngrok');
(async function () {
    const url = await ngrok.connect();
})();


server.get('/:path', async (req, res) => {
    const { path } = req.params;
    const data = await setData.Get(`${baseUrl}/${path}`);
    console.log("Data:1212==>> ", data);
    // res.send(data);
    res.json({
        status: 200,
        message: "Success",
        data: data
    });
});

server.get("/:path/:id", async (req, res) => {
    const { path, id } = req.params;
    const data = await setData.Get(`${baseUrl}/${path}/${id}`);
    console.log("Path: ", data);
    res.status(200).json(data);
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`http://localhost:${PORT} adresinden gelen istekler dinleniyor...`);
});