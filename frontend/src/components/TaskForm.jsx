import {useState} from "react";
import API from "../services/api";

function TaskForm({reload}) {
    const [title, setTitle] = useState("");

    const createTask = async (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        
        await API.post("tasks/create/", {
            title
        });

        setTitle("");
        reload();
    };

    return (
        <form className="task-form" onSubmit={createTask}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="New Task"
            />
            <button type="submit">Add Task</button>
        </form>
    )
}

export default TaskForm;

