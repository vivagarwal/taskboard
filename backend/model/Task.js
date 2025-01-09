const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: ['To-Do', 'In Progress', 'Under Review', 'Completed'], required: true },
  priority: { type: String, enum: ['Low', 'Medium', 'Urgent'] },
  deadline: { type: Date },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'taskboarduser', required: true },
});

module.exports= mongoose.model('Task', taskSchema);
