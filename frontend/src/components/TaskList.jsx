import API from "../services/api";

const TaskList = ({tasks, reload}) => {
    const deleteTask = async (id) => {
        await API.delete(`tasks/delete/${id}/`);
        reload();
    }

    return (
        <div className="task-list">
            {tasks.length === 0 ? (
                <div className="empty-state">
                    <p>No tasks yet. Add a task to get started!</p>
                </div>
            ) : (
                tasks.map(task => (
                    <div key={task.id} className="task-item">
                        <span className="task-title">{task.title}</span>
                        <button 
                            className="delete-btn"
                            onClick={() => deleteTask(task.id)}
                        >
                            Delete
                        </button>
                    </div>
                ))
            )}
        </div>
    )
}

export default TaskList;

