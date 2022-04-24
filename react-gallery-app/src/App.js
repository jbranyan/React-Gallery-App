import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import apiKey from './config';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

//App Components

import PageNotFound from './components/PageNotFound';
import Search from './components/Search';
import Navigation from './components/Navigation';
import PhotoContainer from './components/PhotoContainer';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      cats:[],
      dogs:[],
      computers:[]
    };
  }


  componentDidMount(query) {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=cats&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          cats: response.data.photos.photo
        });
      })
      .catch(error => {
        console.log('error catching data', error);
      });
  }

  render() {
    return(
      <BrowserRouter>
          <div className='container'>
            <Search />
            <Navigation />

            <Switch>
              <Route exact path='/' render={ () => <PhotoContainer data={this.state.cats} />} />
              <Route path='/cats' render={ () => <PhotoContainer data={this.state.cats} />} />
              {/* <Route path='/cats' render={ () => <PhotoContainer query='cats'/>} /> */}
              <Route path='/search/:query' component={Search} />
              {/* <Route component={PageNotFound} /> */}
            </Switch>
          </div>
      </BrowserRouter>

    );
  }
}
