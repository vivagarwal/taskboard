const express = require('express');
const Task = require('../model/Task');
const router = express.Router();
      
// Get all tasks for a user
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    return res.status(200).json({ tasks });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// Create a new task
router.post('/', async (req, res) => {
  try {
    // Use req.user.userId to set the user field
    const { title, description, status, priority, deadline } = req.body;
    console.log(req.user.id);
    const task = new Task({
      title,
      description,
      status,
      priority,
      deadline,
      user: req.user.id // Set the user field here
    });
    await task.save();
    return res.status(201).json({ message: "Task created successfully", task });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// Update an existing task
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOneAndUpdate(
      { _id: id, user: req.user.id },
      req.body,
      { new: true }
    );

    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.status(200).json(task);
  } catch (err) {
    res.status(400).json({ error: 'Invalid task data' });
  }
});

// Delete a task
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOneAndDelete({ _id: id, user: req.user.id });

    if (!task) return res.status(404).json({ error: 'Task not found' });
    return res.status(200).json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get task details by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOne({ _id: id, user: req.user.id });

    if (!task) return res.status(404).json({ error: 'Task not found' });

    res.status(200).json(task);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

module.exports = router;
