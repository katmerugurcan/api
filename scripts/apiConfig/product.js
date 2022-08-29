const setData = require("../Tools/methods");
const baseUrl = require('../Tools/svConfig');
const express = require('express');
const router = express.Router();

// router.get('/', async (req, res) => {
//     const users = await setData.Get(`${baseUrl}/users`);
//     res.send(users);
// });

/**
 * GET product List
 * 
 * @return product list | empty.
 */

router.get('/', async (req, res) => {
    const data = await setData.Get(baseUrl, '/users');
    console.log("Data : ", data);
    try {
        res.json({
            status: 200,
            message: "Successfull"
        });
    } catch {
        res.status(404).send('Bad Request!');
    }
})

router.get('/:path', async (req, res) => {
    const { path } = req.params;
    const data = await setData.Get(`${baseUrl}/${path}`);
    console.log("Data:1212==>> ", data);
    res.send(data);
});

router.get("/:path/:id", async (req, res) => {
    const { path, id } = req.params;
    const data = await setData.Get(`${baseUrl}/${path}/${id}`);
    console.log("Path: ", data);
    res.status(200).json(data);
});

module.exports = router;