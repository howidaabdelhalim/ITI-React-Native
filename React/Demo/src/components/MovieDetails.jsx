/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";

const MovieDetails = ({ movies }) => {
    const { id } = useParams();
    const movie = movies.find((m) => m.id === parseInt(id));

    if (!movie) {
        return <div>Movie not found</div>;
    }

    return (
        <div>
            <h1>{movie.title}</h1>
            <p><strong>Description: </strong>{movie.description}</p>
            <p><strong>Release Year: </strong>{movie.releaseYear}</p>
            <p><strong>Director: </strong>{movie.director}</p>
            <p><strong>Cast: </strong>{movie.cast.join(', ')}</p>
            <p><strong>Rating: </strong>{movie.rating}</p>
            <p><strong>Duration: </strong>{movie.duration}</p>
        </div>
    );
};

export default MovieDetails;

























// import React from 'react';
// import { useParams } from 'react-router-dom';




// const MovieDetails = () => {
//     const { id } = useParams();
//     const movie = movies.find(m => m.id === parseInt(id));

//     if (!movie) {
//         return <div>Movie not found</div>;
// }

// return (
//     <div>
        
//     </div>
// );
// };

// export default MovieDetails;

