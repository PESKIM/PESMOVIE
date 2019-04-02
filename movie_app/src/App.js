import React, { Component } from 'react';
import './App.css';
import Movie from "./Movie";



class App extends Component {

  state = {};
  //무비를 마운트되고
  componentDidMount(){
    this._getMovies();
  }
  

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return ( 
      <Movie 
      title={movie.title} 
      poster={movie.medium_cover_image} 
      key={movie.id} 
      genres={movie.genres} 
      synopsis={movie.synopsis}
      />
      );
    });
    return movies
  };

  //무비를 가져오고 async = 비동기식   callApi가 끝나기를 기다린다. 
  _getMovies = async () => {
    const movies = await this._callApi()
    // 아래 setState는 callApi가 완료될때까지 실행되자 않음.
    this.setState({
      movies
    });
  };
  
  _callApi = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count")
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err));
  };

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;

