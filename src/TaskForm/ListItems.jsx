import React from "react";
import TodoItems from "./TodoItems.jsx";

export default function ListItems({ todos, handleCheckboxChange, handleDelete }) {
    return (
        <ul className="list">
            {todos.length === 0 && <li>No todos here !🌜</li>}
            {todos.map((todo) => (
                <TodoItems
                    key={todo.id}
                    {...todo}
                    handleCheckboxChange={handleCheckboxChange}
                    handleDelete={handleDelete}
                />
            ))}
        </ul>
    );
}
