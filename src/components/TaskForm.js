import React, { useContext, useState, useEffect } from 'react'
import { TaskListContext } from '../context/TaskListContext'

const TaskForm = () => {
    const { addTask, clearRoutine, editItem, editRoutine } = useContext(TaskListContext);
    //Now we are able to call functions from the Context, after that we have to destructure addtask property

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const handleChange = e => {
        setTitle(e.target.value)
    }
    const handleDescription = e => {
        setDescription(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (!editItem) {
            addTask(title, description)
            setTitle("")
            setDescription("")
        }else{
            editRoutine(title,description,editItem.id)
        }

    }

    useEffect(() => {
        if (editItem) {
            setTitle(editItem.title)
            setDescription(editItem.description)
            console.log(editItem)
        } else {
            setTitle('')
            setDescription('')
        }
    }, [editItem])
    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={handleChange}
                className="task-input"
                placeholder="Routine ...."
                required />
            <input
                type="text"
                onChange={handleDescription}
                className="task-input"
                value={description}
                placeholder="Description ...."
                style={{ marginTop: '10px' }}
                required />
            <div className="buttons">
                <button type="submit" className="btn add-task-btn">
                    {editItem ? "EDIT" : "ADD"}
               </button>
                <button className="btn clear-btn" onClick={clearRoutine}>
                    CLEAR
                 </button>
            </div>
        </form>
    )
}

export default TaskForm
