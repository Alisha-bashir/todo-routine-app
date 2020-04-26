import React, { createContext, useState, useEffect } from 'react'
import { v1 as uuid } from "uuid";
export const TaskListContext = createContext()

const TaskListContextProvider = (props) => {
    //we have created task in the state using useState hook !!
    const initialState = JSON.parse(localStorage.getItem('tasks')) || []

    const [tasks, setTask] = useState(initialState)
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    //this code is for the editItem 
    const [editItem, setEditItem] = useState(null)
    //This is the Add Routine function
    function addTask(title, description) {
        setTask([...tasks, { title, description: description, id: uuid() }])
    }
    const removeRoutine = id => {
        setTask(tasks.filter(task => task.id !== id))
    }
    const clearRoutine = () => {
        setTask([])
    }
    //This Code will find the the Item from the list
    const findItem = id => {
        const item = tasks.find(task => task.id === id)

        setEditItem(item)
    }
    //This code is for the Editing Purpose
    const editRoutine = (title, description, id) => {
        const newTask = tasks.map(task => (task.id === id ? { title, description, id } : task))
        setTask(newTask)
        setEditItem(null)
    }
    return (
        <TaskListContext.Provider value={{ tasks, addTask, removeRoutine, clearRoutine, findItem, editRoutine, editItem }}>{props.children}</TaskListContext.Provider>
    )
}
export default TaskListContextProvider
