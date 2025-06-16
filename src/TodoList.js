import React, { useState } from 'react';

function TodoItem({ task, onDelete }) {
    return (
        <li>
            {task} 
            <button onClick={onDelete}>Hapus</button>
        </li>
    );
}

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleAddTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div>
            <h2>Todo List</h2>
            <input 
                type="text" 
                placeholder="Silahkan tambah tugas" 
                value={newTask} 
                onChange={(e) => setNewTask(e.target.value)} 
            />
            <button onClick={handleAddTask}>Tambah</button>
            <ul>
                {tasks.map((task, index) => (
                    <TodoItem key={index} task={task} onDelete={() => handleDeleteTask(index)} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;