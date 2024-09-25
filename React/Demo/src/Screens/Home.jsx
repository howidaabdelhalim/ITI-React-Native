/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import { Link } from "react-router-dom";

const Home = ({ movies }) => {
    return (
        <div>
            <h1>Movies</h1>
            <hr />
            <div>
                {movies.map((movie) => (
                    <div key={movie.id}>
                        <h2>{movie.title}</h2>
                        <p>{movie.description}</p>
                        <Link to={`/movies/${movie.id}`}>
                            <button>Show Details</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;



























// /* eslint-disable no-unused-vars */
// import React from 'react';
// import MovieCard from '../components/MovieCard';


// const movies = [
//     {id: 1, title: 'Barbie', description: "She’s everything. He’s just Ken. Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans."},
//     {id: 2, title: 'Taylor Swift: The Eras Tour', description: 'It’s been a long time coming. The cultural phenomenon continues on the big screen! Immerse yourself in this once-in-a-lifetime concert film experience with a breathtaking, cinematic view of the history-making tour.'},
//     {id: 3, title: 'The Childe', description: 'The chase is on. Han, a Filipino-Korean boxer hits the final punch against his opponent at an illegal game. The opponent is knocked down, and Han returns home with a few dollars to pay for his mother’s surgery.'},
//     {id: 4, title: 'Kira & El Gen', description: 'Based on the 1919 novel, this movie focuses on the fury state among the people during the 1919 Egyptian Revolution, uniting Kira and El Gen in the struggle against the British occupation.'},
//     {id: 5, title: 'Enola Holmes', description: 'Mystery runs in the family. While searching for her missing mother, intrepid teen Enola Holmes uses her sleuthing skills to outsmart big brother Sherlock and help a runaway lord.'},
//     {id: 6, title: 'Joker', description: 'Put on a happy face. During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.'},
// ];

// const Home = () => {
//     return (
//         <div>
//             <h1>Movies</h1>
//                 <div className="movie-list">
//                     {movies.map(movie => (
//                         <MovieCard key={movie.id} movie={movie} />
//         ))}
//             </div>
//         </div>
//     );
// }

// export default Home;
