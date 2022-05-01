import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import apiKey from './config';
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom';

//App Components

import PageNotFound from './components/PageNotFound';
import Search from './components/Search';
import Navigation from './components/Navigation';
import PhotoContainer from './components/PhotoContainer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      photos:[],
      query: '',
      isLoading: false
    };
  }

  handleClick = e => {
    const query = e.target.id;
    this.getPhotos(query);
}

  getPhotos = (query = 'cats') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        photos: response.data.photos.photo,
        query: query,
        isLoading: false
      });
    })
    .catch(error => {
      console.log('error catching data', error);
    });
  }

  componentDidMount() {
    this.getPhotos();
  }

  // componentDidUpdate(prevProps){

  //     console.log('prevProps' + JSON.stringify(prevProps.location.pathname));
  //     console.log('this props' + JSON.stringify(this.props.location.pathname));

  //       if(prevProps.location.pathname !== this.props.location.pathname){
  //         console.log('different');
  //       } 

  // }

  render() {
    console.log(this.state.query);
    return(
      <div className='container'>
        <Search onSearch={this.getPhotos} />
        <Navigation navSelection={this.handleClick}/>

        {/* Fix the routes switching */}
        <Switch>
          <Route exact path='/' render={ () => <PhotoContainer data={this.state.photos} query={this.state.query} />} />
          <Route path='/search/:query' render={() => <PhotoContainer data={this.state.photos} query={this.state.query}/>} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}
export default withRouter(App);
