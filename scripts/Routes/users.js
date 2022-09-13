const express = require('express');
const setData = require('../Tools/methods');
const { baseUrl } = require('../Tools/svConfig');
const { data } = require('../../Data/db.js');
const { json } = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.json({
        status: 200,
        message: "Success",
    });
});

const pathRoute = path => {
    switch (path) {
        case "users":
            return data.users;
        case "tasks":
            return data[1];
    }
}

router.get('/:path', async (req, res) => {
    const { path } = req.params;
    // const data = await setData.Get(`${baseUrl}/${path}`);
    const data = pathRoute(path);
    console.log(data)
    res.json({
        status: 200,
        message: "users",
        data: data
    });
});

// router.get("/:path/:id", async (req, res) => {
//     const { path, id } = req.params;
//     const data = await setData.Get(`${baseUrl}/${path}/${id}`);
//     console.log("Path: ", data);
//     res.status(200).json(data);
// });

module.exports = router;