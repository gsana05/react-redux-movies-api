import { ADD_FAV, REMOVE_FAV } from '../actions';
import { bake_cookie, read_cookie } from 'sfcookies'; //saves state so you dont lose data when you refresh 

function addToFavorite(state = [], action) {
    state = read_cookie('favoriteMovies'); 
    switch(action.type) {
    case ADD_FAV:
      console.log("movie added to favorite", action.movie); 
      let favoriteMovies = [...state, action.movie]; 
      bake_cookie('favoriteMovies', favoriteMovies); 
      return favoriteMovies;
    case REMOVE_FAV:
      favoriteMovies = state.filter(item => item.id !== action.movie.id);
      bake_cookie('favoriteMovies', favoriteMovies); 
      return favoriteMovies; 
    default:
     return state; 

    }
}

export default addToFavorite;