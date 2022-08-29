const express = require('express');
const setData = require('../Tools/methods');
const { baseUrl } = require('../Tools/svConfig');
const router = express.Router();

router.get('/', (req, res) => {
    return res.json({
        status: 200,
        message: "Success",
    });
});

router.get('/:path', async (req, res) => {
    const { path } = req.params;
    const data = await setData.Get(`${baseUrl}/${path}`);
    res.json({
        status: 200,
        message: "Success",
        data: data
    });
});

router.get("/:path/:id", async (req, res) => {
    const { path, id } = req.params;
    const data = await setData.Get(`${baseUrl}/${path}/${id}`);
    console.log("Path: ", data);
    res.status(200).json(data);
});

module.exports = router;