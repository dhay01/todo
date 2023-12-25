import React from "react";

export default function TodoItems({ completed, id, title, handleCheckboxChange, handleDelete }) {
    return (
        <li>
            <label>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => handleCheckboxChange(id)}
                />
                {title}
                <button
                    onClick={() => handleDelete(id)}
                    className="btn btn-danger"
                >
                    Delete
                </button>
            </label>
        </li>
    );
}
