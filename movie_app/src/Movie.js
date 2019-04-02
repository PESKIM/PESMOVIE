import React, { Component } from 'react';
import propTypes from 'prop-types';

import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis'

function Movie({title, poster, genres, synopsis}){
    return(
        <div className="Movie">
            <div className="Movie__Columns">
            <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie__Columns">
            <h1>{title}</h1>
            <div className="Movie__Generes">
                {genres.map((genre, index) => <MovieGenre genre={genre} key={index}/>)}
            </div>
            <div className="Movie__Synopsis">
             <LinesEllipsis
        text={synopsis}
  maxLine='2'
  ellipsis='...'
  trimRight
  basedOn='letters'
/>
            </div>
            </div>
        </div>
        )
}


function MoviePoster({poster, alt}){
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
    )
}

function MovieGenre({genre}){
    return (
        <span className="Movie__Genre">{genre} </span>
    )
}

Movie.propTypes = {
    title: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    genres: propTypes.array.isRequired,
    synopsis: propTypes.string.isRequired,
}

MoviePoster.prototype = {
    poster: propTypes.string.isRequired,
    alt: propTypes.string.isRequired
}

MovieGenre.prototype = {
    genres: propTypes.array.isRequired,
}

export default Movie