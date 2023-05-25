const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description:{
      type: String,
      required: true,
  },
  todoType:{
    type: String,
		required: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

let Todo = mongoose.model('Todo', todoSchema)
module.exports = Todo
