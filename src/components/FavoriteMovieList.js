import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import MovieItem from './MovieItem';
import '../index.css';
import { Link } from 'react-router-dom';

class FavoriteMovieList extends Component {
    render(){
        //console.log(this.props.favorites); 
        return (
            <div>
                <Link to="/">Home</Link> 
                <h1 className="text-center search-title"> My Favorite Movies </h1>
                {this.props.favorites.map(movie => {
                    return <MovieItem movie={movie} key={movie.id} showButton={true}/> 
                })}
            </div> 
        )
    }
}

function mapStateToProps(state) {
    //console.log("FavoriteMovieList -", state);
    return {
      favorites: state.favorites
    }
}

export default connect(mapStateToProps, null)(FavoriteMovieList);