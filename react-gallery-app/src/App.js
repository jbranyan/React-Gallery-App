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
import Result from './components/Result';

class App extends Component {
  state = {
    cats:[]
  };


componentDidMount() {
  axios.get('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=cats&per_page=24&format=json&nojsoncallback=1')
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
  console.log(this.state.cats);
  return(
        <div>
        <div className="main-header">
          {/* <Navigation /> */}
        </div>
        <div className="main-content">
          <Result data={this.state.cats} />
        </div>
      </div>
    );
  }
}

export default App;
