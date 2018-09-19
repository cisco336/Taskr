const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema TASK
const TaskSchema = new Schema({
    title: {
        type: String,
        required: [true, 'The title field is required']
    },
    description: {
        type: String
    },
    priority: {
        type: String
    },
    completed: Boolean
});

const Task = mongoose.model('task', TaskSchema);

// Export
module.exports = Task;