const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create User - POST /api/users
router.post('/', async (req, res) => {
    // const data = req.body;
    // console.log(data);
    const user = new User(req.body);
    const result = await user.save();
    res.status(201).json(result)
});

// Get All User - GET /api/users
router.get('/', async (req, res) => {
    const users = await User.find();
    res.status(201).json(users)
});

// Get Single User - GET /api/users/:id
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const user = await User.findById(id);
    res.status(201).json(user)
});

// Update User - PUT /api/users/:id
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const user = await User.findByIdAndUpdate(id, req.body, {new: true});
    res.status(201).json(user);
})

// Delte User - DELETE /api/users/:id
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await User.findByIdAndDelete(id);
    res.sendStatus(204)
})

module.exports = router;