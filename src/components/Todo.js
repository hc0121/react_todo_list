import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Todo ({
    todo,
    toggleComplete,
    handleDelete,
    handleEdit,
}){
    const [newTitle, setNewTitle] = React.useState(todo.title);

    const handleChange=async(e)=>{
        e.preventDefault();
        if(todo.completed === true){
            setNewTitle(todo.title);
        }
        else{
            todo.title="";
            setNewTitle(e.target.value);
        }
    };

    return(
        <div className="todo">
            <input
            style={{textDecoration:todo.completed && "line-through"}}
            type="text"
            value={todo.title===""?newTitle:todo.title}
            className="list"
            onChange={handleChange}
            />
            <div>
                <button
                    className="button-complate"
                    onChange={()=>toggleComplete(todo)}
                >
                    <CheckCircleIcon id="i"/>
                </button>
                <button
                    className="button-edit"
                    onChange={()=>handleEdit(todo, newTitle)}
                >
                    <EditIcon id="i"/>
                </button>
                <button
                    className="button-delete"
                    onChange={()=>handleDelete(todo.id)}
                >
                    <DeleteIcon id="i"/>
                </button>
            </div>
        </div>
    )
}