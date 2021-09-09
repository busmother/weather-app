import React, { Component } from 'react';

import { MoonLoader } from 'react-spinners';

import classes from './App.module.css';
import assetMapping from '../../assets/assetMapping.json';
import Card from '../../elements/Card/Card';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SearchBar from '../../components/SearchBar/SearchBar';
import WeatherDetails from '../../components/WeatherDetails/WeatherDetails';
import Preview from '../../components/Preview/Preview';
import ErrorNotice from '../../components/ErrorNotice/ErrorNotice';

class App extends Component {

  state = {
    searchBarInput: '',
    weatherDetails: {
      temperature:null,
      description: ''
    },
    loading: false,
    error: false
  }

  render() {
    return (
      <div className={classes.AppWrapper}>
        <Header />
        <main className={classes.AppMain}>
          <SearchBar />
          <Card>
            <WeatherDetails />

          </Card>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
