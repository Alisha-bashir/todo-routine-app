import React,{useContext} from 'react'
import '../App.css'
import {TaskListContext} from '../context/TaskListContext'
import EditIcon from '@material-ui/icons/EditOutlined';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
const Task = ({ task }) => {
    const {removeRoutine ,findItem} = useContext(TaskListContext)
    return (
        <li className="list-item">
                <span style={{color:'black',}}>{task.title}</span>
                <span>{task.description}</span>
            <div style={{flexGrow:2,flexBasis:'200px',marginLeft:'10px'}}>
                <DeleteIcon onClick={() => removeRoutine(task.id)}/>
                <EditIcon onClick={() => findItem(task.id)} />
            </div>
        </li>
    )
}

export default Task
