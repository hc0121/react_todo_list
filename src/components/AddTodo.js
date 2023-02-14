import React from "react";
import {db} from "../firebase";
import {collection, addDoc} from "firebase/firestore";
import { async } from "@firebase/util";

export default function AddTodo(){
    const [title, setTitle] = React.useState("");

    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(title !== ""){
            await addDoc(collection(db, "todos"),{
                title,
                completed:false,
            });
            setTitle("");
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="input_container">
                <input
                type="text"
                placeholder="輸入內容"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
            </div>
            <div className="btn_container">
                <button>新增</button>
            </div>
        </form>
    );
}