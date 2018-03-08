import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToFavorite, removeFromFavorite } from '../actions';
const poster_path = 'https://image.tmdb.org/t/p/w342';
const movieUrl = 'https://www.themoviedb.org/movie/';
class MovieItem extends Component {
  constructor(props) {
    super(props);
    this.state = { favorited: false };
    this.displayFavorite = this.displayFavorite.bind(this);
  }
  displayFavorite() {
    const {
      addToFavorite,
      removeFromFavorite,
      movie,
      favorites
    } = this.props;
    const inFavorite = favorites.find((fav) => fav.id === movie.id);
    if (!inFavorite) {
      return (
        <span
          className="glyphicon glyphicon-heart-empty"
          onClick={() => {
            this.setState({ favorited: !this.state.favorited });
            addToFavorite(movie);
          }}
        ></span>
      );
    } else {
      return (
        <span
          className="glyphicon glyphicon-heart"
          onClick={() => {
            this.setState({ favorited: !this.state.favorited });
            removeFromFavorite(movie);
          }}
        ></span>
      )
    }
  }
  render() {
    const { movie, showButton } = this.props;
    return (
      <div className="col-sm-6 col-md-3">
        <div className="thumbnail">
          <a href={movieUrl + movie.id} target="_blank">
            <img
              src={`${poster_path}/${movie.poster_path}`}
              alt={movie.title}
            />
          </a>
          <div className="caption">
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>Ratings: {' '}
              <span className="badge badge-default">
                <span className="glyphicon glyphicon-star">
                </span>{movie.vote_average}
              </span>
            </p>
            {
              showButton ? <p>{this.displayFavorite()}</p> : null
            }
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  favorites: state.favorites
});
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addToFavorite, removeFromFavorite
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieItem);

