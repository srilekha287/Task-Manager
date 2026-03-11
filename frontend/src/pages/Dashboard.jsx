import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Dashboard() {
    const navigate = useNavigate();
    const [tasks, setTasks] = useState([]);

    const loadTasks = async () => {
        const res = await API.get("tasks/");
        setTasks(res.data);
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate('/');
    };

    useEffect(() => {
        loadTasks();
    }, []);

    return (
        <div className="dashboard">
            <h2>Task Manager</h2>
            <button className="logout-btn" onClick={handleLogout}>
                Logout
            </button>
            <TaskForm reload={loadTasks} />
            <TaskList tasks={tasks} reload={loadTasks} />
        </div>
    )
}

export default Dashboard;

