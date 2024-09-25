/* eslint-disable react/prop-types */
// import Types from "prop-types"
import Copyright from './Copyright'; // Import Copyright component

const Movie = (props) => {
    const { Movie, Country, Year} = props;
    return (
        <div>
            <div>Movie Title: {Movie}</div>
            <div>Country: {Country}</div>
            <div>Produced In: {Year}</div>
            <Copyright year={Year} />
            <hr />
        </div>
    );
};


// Movie.propTypes = {
//     Movie: Types.string.isRequired,
//     Country: Types.string.isRequired,
//     Year: Types.number.isRequired,
// }


export default Movie;
