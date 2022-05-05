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
  //set the initial state
  constructor(){
    super();
    this.state = {
      photos:[],
      query: '',
    };
  }

  //On button click, get the related photos
  handleClick = e => {
    const query = e.target.id;
    this.getPhotos(query);
}

  //Get the photos from Flickr and set the state
  getPhotos = (query = 'cats') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        photos: response.data.photos.photo,
        query: query
      });
    })
    .catch(error => {
      console.log('error catching data', error);
    });
  }

  componentDidMount() {
    this.getPhotos();
  }

  //If the pathname doesn't match the previous get the photos related to the path
  componentDidUpdate(prevProps){
    if(prevProps.location.pathname !== this.props.location.pathname){
      const pathName = this.props.location.pathname !== '/' ? this.props.location.pathname.slice(1) : 'cats';
      this.getPhotos(pathName);
    }
  }

  render() {
    return(
      <div className='container'>
        <Search onSearch={this.getPhotos} />
        <Navigation navSelection={this.handleClick}/>

        <Switch>
          <Route exact path='/' render={ () => <PhotoContainer data={this.state.photos} query={this.state.query} />} />
          <Route path='/:query' render={() => <PhotoContainer data={this.state.photos} query={this.state.query}/>} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}
export default withRouter(App);
