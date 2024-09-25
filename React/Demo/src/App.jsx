/* eslint-disable no-unused-vars */

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from "react";
import Home from './Screens/Home';
import About from './Screens/About';
import Contact from './Screens/Contact';
import AddMovie from './components/AddMovie';
import Navbar from './Screens/Navbar';
import MovieDetails from './components/MovieDetails';


const App = () => {
    const [movies, setMovies] = useState([
      {
          id: 1, 
          title: 'Barbie', 
          description: "She’s everything. He’s just Ken. Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.", 
          releaseYear: 2023,
          director: "Greta Gerwig",
          cast: ["Margot Robbie", "Ryan Gosling", "Will Ferrell"],
          rating: "PG-13",
          duration: "1h 54m"
      },
      {
          id: 2, 
          title: 'Taylor Swift: The Eras Tour', 
          description: 'It’s been a long time coming. The cultural phenomenon continues on the big screen! Immerse yourself in this once-in-a-lifetime concert film experience with a breathtaking, cinematic view of the history-making tour.', 
          releaseYear: 2023,
          director: "Sam Wrench",
          cast: ["Taylor Swift"],
          rating: "PG",
          duration: "2h 45m"
      },
      {
          id: 3, 
          title: 'The Childe', 
          description: 'The chase is on. Han, a Filipino-Korean boxer hits the final punch against his opponent at an illegal game. The opponent is knocked down, and Han returns home with a few dollars to pay for his mother’s surgery.', 
          releaseYear: 2023,
          director: "Park Hoon-jung",
          cast: ["Kim Seon-ho", "Go Ara", "Kang Tae-joo"],
          rating: "R",
          duration: "1h 58m"
      },
      {
          id: 4, 
          title: 'Kira & El Gen', 
          description: 'Based on the 1919 novel, this movie focuses on the fury state among the people during the 1919 Egyptian Revolution, uniting Kira and El Gen in the struggle against the British occupation.', 
          releaseYear: 2022,
          director: "Marwan Hamed",
          cast: ["Karim Abdel Aziz", "Ahmed Ezz", "Hend Sabry"],
          rating: "PG-13",
          duration: "2h 30m"
      },
      {
          id: 5, 
          title: 'Enola Holmes', 
          description: 'Mystery runs in the family. While searching for her missing mother, intrepid teen Enola Holmes uses her sleuthing skills to outsmart big brother Sherlock and help a runaway lord.', 
          releaseYear: 2020,
          director: "Harry Bradbeer",
          cast: ["Millie Bobby Brown", "Henry Cavill", "Sam Claflin"],
          rating: "PG-13",
          duration: "2h 3m"
      },
      {
          id: 6, 
          title: 'Joker', 
          description: 'Put on a happy face. During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.', 
          releaseYear: 2019,
          director: "Todd Phillips",
          cast: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
          rating: "R",
          duration: "2h 2m"
      },
  ]);
    const addMovie = (title, description, releaseYear, director, cast, rating, duration) => {
        const newMovie = {
            id: movies.length + 1,
            title,
            description,
            releaseYear,
            director,
            cast,
            rating,
            duration
        };
        setMovies([...movies, newMovie]);
    };

    return (
        <Router>
            <Navbar />
            <div style={{ marginTop: '60px' }}>
                <Routes>
                    <Route path="/" element={<Home movies={movies} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/add-movie" element={<AddMovie addMovie={addMovie} />} />
                    <Route path="/movies/:id" element={<MovieDetails movies={movies} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;














// import React, { useState } from 'react';
// import FormComponent from '../src/components/FormComponent.jsx';
// import DisplayData from '../src/components/DisplayData.jsx';

// const App = () => {
//   const [submittedUsers, setSubmittedUsers] = useState([]);

//   //to add the new user's data to the array
//   const handleFormSubmit = (newUser) => {
//     setSubmittedUsers([...submittedUsers, newUser]); 
//   };

//   return (
//     <div className="container">
//       <h2 className="text-center">React Multi-User Form</h2>
//       <FormComponent onSubmit={handleFormSubmit} />
//       {submittedUsers.length > 0 && (
//         <DisplayData users={submittedUsers} />
//       )}
//     </div>
//   );
// };

// export default App;

























// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// <> is called fragement to put my bunch of elements into 1 parent 'syntax sugar'
// import './App.css'
// import Movies from './components/Movies'; Task 1
// import Display from './components/Display'; Task 2


// function App() {
  // const [count, setCount] = useState(0)
  // var x = "Howida"
  // var objStyle={backgroundColor:"red" , color:"white", margin:"10px"}
  // return (
    // <>
      {/* <h1>Hello { x }</h1> */}
      {/* <div style={objStyle}>Hello World</div>
      <label htmlFor='in'>Name:</label>
      <input id = 'in' />
      <h1>Hello { x }</h1> */}
      {/* <Movies /> */}
      {/* <Display /> */}
    {/* </> */}
  // )
// }

// export default App
