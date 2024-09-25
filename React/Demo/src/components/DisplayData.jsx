/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import './DisplayData.css';

const DisplayData = ({ users }) => {
    return (
    <div className="users-container">
        <h2>Submitted Data</h2>
        {users.map((user, index) => (
            <div key={index} className="user-card">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Age:</strong> {user.age}</p>
                <p><strong>Email:</strong> {user.email}</p>
            </div>
        ))}
        </div>
    );
};

export default DisplayData;
