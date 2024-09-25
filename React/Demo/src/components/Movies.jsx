// import React from 'react'
import { useState } from 'react'
import Movie from './Movie';

const Movies = () => {
    const [moviesArr] = useState([
        {Movie: 'Inside Out 2', Country:'USA', Year: 2024}, 
        {Movie: 'Wonderland', Country:'South-Korea' ,Year: 2024},
        {Movie: 'Daimond Dust', Country:'Egypt' ,Year: 2018},
        {Movie: 'The Crime', Country:'Egypt',Year: 2022}
    ])
    // console.log(moviesArr);
    return(
        <div>
            {/* {usersArr.map((u)=><User key={u.id} id={u.id} name={u.name} age={u.age}></User>)} */}
            {moviesArr.map((m)=><Movie key={m.Movie} {...m}></Movie>)}
        </div>
    );
}
export default Movies;