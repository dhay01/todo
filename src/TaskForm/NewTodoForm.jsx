import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function NewTodoForm({ onSubmit }) {
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (newItem === "") return;
        onSubmit(newItem);
        // Clear the input field after submitting
        setNewItem("");
    }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">New item 💫</label>
                <input
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    id="item"
                    type="text"
                    placeholder="Your new task..."
                    className="new-item-input"
                />

            </div>
            <div className="form-row">
                <button className="add-btn" type="submit">Add</button>
            </div>
        </form>
    );
}
