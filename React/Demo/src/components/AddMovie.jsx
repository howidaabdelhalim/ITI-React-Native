/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState } from "react";

const AddMovie = ({ addMovie }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [releaseYear, setReleaseYear] = useState("");
    const [director, setDirector] = useState("");
    const [cast, setCast] = useState("");
    const [rating, setRating] = useState("");
    const [duration, setDuration] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && description && releaseYear && director && cast && rating && duration) {
            const castArray = cast.split(",").map(name => name.trim());
            addMovie(title, description, releaseYear, director, castArray, rating, duration);
            setTitle("");  
            setDescription("");
            setReleaseYear("");
            setDirector("");
            setCast("");
            setRating("");
            setDuration("");
        }
    };

    return (
        <div>
            <h1>Add Movie</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div>
                    <label>Description:</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div>
                    <label>Release Year:</label>
                    <input
                        type="number"
                        value={releaseYear}
                        onChange={(e) => setReleaseYear(e.target.value)}
                    />
                </div>

                <div>
                    <label>Director:</label>
                    <input
                        type="text"
                        value={director}
                        onChange={(e) => setDirector(e.target.value)}
                    />
                </div>

                <div>
                    <label>Cast (comma-separated):</label>
                    <input
                        type="text"
                        value={cast}
                        onChange={(e) => setCast(e.target.value)}
                    />
                </div>

                <div>
                    <label>Rating:</label>
                    <input
                        type="text"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    />
                </div>

                <div>
                    <label>Duration:</label>
                    <input
                        type="text"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                    />
                </div>

                <button type="submit">Add Movie</button>
            </form>
        </div>
    );
};

export default AddMovie;
