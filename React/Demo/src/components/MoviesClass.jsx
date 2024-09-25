/* eslint-disable no-unused-vars */
import { Component } from "react";

const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
const url = "https://api.themoviedb.org/3";
const imgPath = "https://image.tmdb.org/t/p/w500/";
const path = "/discover/movie?sort_by=popularity.desc";
const apiUrl = url + path + apiKey;

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: null,
            loading: true,
            error: null,
        };
    }

    componentDidMount(){
        fetch(apiUrl)
        .then(response => {
            if(response.ok)
                return response.json();
        })
        .then((data) => this.setState({movies: data.results, loading: false}));
    }

    render(){
        const { movies, loading, error }= this.state;
        if (loading) {
            return <p>Loading...</p>;
        }
    
        if (error) {
            return <p>Error</p>;
        }
    

        return(
            <div>
                <h1>Popular Movies</h1>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {movies.map((movie)=>( <div key={movie.id} style={{ margin: '10px', textAlign: 'center', maxWidth: '200px' }}> 
                        <img src={imgPath + movie.poster_path} alt={movie.title} 
                        style={{ width: '200px', height: '300px', objectFit: 'cover' }} />
                            <h2>{movie.title}</h2>
                            <h5>{movie.vote_average}</h5>
                            <p>{movie.overview}</p>
                        </div>
                        
                    ))}
                </div>
            </div>
        );
    }
}

export default Movies;