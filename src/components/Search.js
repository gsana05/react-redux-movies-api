import React, { Component } from 'react'; 

import { Form, FormControl, FormGroup, Button} from 'react-bootstrap'; 

import { API_KEY } from '../secrets'; 
import { movies } from '../actions';
import { connect } from 'react-redux';

class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            query: ''
        };
    }

    search() {
        console.log('search button clicked', this.state.query); 
        //let url = `https://api.themoviedb.org/3/search/company?api_key=${API_KEY}&page=1&query=${this.state.query}`;
        let url =`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${this.state.query}`;
        //console.log(url); 
        fetch(url, {
            method: 'GET'
        }).then(response => response.json() )
        .then(jsonObj => {this.props.movies(jsonObj.results)});
    }


    render() {
        return (
            <div>
                <Form inline className="text-center">  {/* col-md-12 col-md-offset-3 */}
                    <FormGroup>
                        
                        { ' ' } {/* space between form elements */}
                        <FormControl 
                        type="text"
                        placeholder="Wonder women"
                        onChange={(event) => this.setState({query: event.target.value})}
                        />
                        { ' ' } {/* space between form elements */}
                        <Button bsStyle="success" 
                        onClick={() => this.search()}> 
                        Submit 
                        </Button>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default connect(null, {movies})(Search);