import React, {useEffect, useState} from "react";
import { v4 as uuidv4 } from "uuid";
import NewTodoForm from "./NewTodoForm.jsx";
import ListItems from "./ListItems.jsx"; // Corrected the import

export default function TaskForm() {
    const [todos, setTodos] = useState(()=>{
        const localValue = localStorage.getItem("ITEMS")
        if(localValue==null) return[]

        return JSON.parse(localValue)
    });
    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(todos));
    }, [todos]);

    function addTodo(title) {
        setTodos((currentTodos) => [
            ...currentTodos,
            { id: uuidv4(), title, completed: false },
        ]);
    }

    function handleCheckboxChange(id) {
        setTodos((currentTodos) =>
            currentTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }

    function handleDelete(id) {
        setTodos((currentTodos) =>
            currentTodos.filter((todo) => todo.id !== id)
        );
    }

    return (
        <>
            <NewTodoForm onSubmit={addTodo} />
            <h1>Your todo list ☘️</h1>
            <ListItems
                todos={todos}
                handleCheckboxChange={handleCheckboxChange}
                handleDelete={handleDelete}
            />
        </>
    );
}
