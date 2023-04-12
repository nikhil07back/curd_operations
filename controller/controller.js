const mongoose = require('mongoose')
const asyncHandler = require('express-async-handler')
const Todo = require('../models/todoModels');
const { findByIdAndUpdate } = require('../models/todoModels');


const getTodos = asyncHandler(async (req, res) => {


  const allTodos = await Todo.find()

  if(!allTodos) { 
    res.status(404)
    throw new Error("cant,t Find any documents")

  }

  res.json(allTodos)


}); 
  
  const getSingleTodo = asyncHandler( async(req, res) => {
   
  const singleTodo = await Todo.find(req.params.id)


  if(!singleTodo) { 
    res.status(400)
    throw new Error("single todo error")

  }

  res.json(singleTodo)
  })
  
  const createTodo = asyncHandler(async (req, res) => {
  
    const {title , description} = req.body

    // Validation
    if(!title || !description){
        throw new Error("Please Include All Fields")
    }

    
    const newTodo = { 
      title, 
      description 
    }

    const isCreated = await Todo.create(newTodo)

    if(!isCreated){
    res.status(400) 
    throw new Error("document to create")
    } 


    res.json(isCreated)


});
  
  const updateTodo = asyncHandler(async(req, res) => {


    const updateTodo = await Todo.findByIdAndUpdate(req.params.id  , req.body , {new : true})


    if(!updateTodo){
      res.status(400) 
      throw new Error("document to update once hit put method")
      } 


      res.json(updateTodo)
  })
  
  const deleteTodo =  asyncHandler(async(req, res) => {

    await Todo.findByIdAndDelete(req.params.id)

    res.json({mes : "todo deleteeee"});
    
  })






  module.exports = {
    getTodos,
    getSingleTodo,
    updateTodo,
    createTodo,
    deleteTodo,
  };
  