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

  searchBarHandler = (e) => {
    this.setState({
      searchBarInput: e.target.value
    })
  }

  tyAgainHandler = () => {
    this.setState({
      searchBarInput: '',
      weatherDetials: {},
      error: false
    })
  }

  setWeather = () => {
    const city = this.state.searchBarInput;
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const URL = API_URL + `?q=${city}$appid=${API_KEY}$units=metric`;
    this.setState({
      weatherDetails: {},
      loading: true,
      error: false
    }, *() => {
      fetch(URL)
      .then(res => res.json())
      .then(data => {
        if(data.cod === 2000) {
          this.setState({
            weatherDetails: {
              temperature: data.main.temp,
              description: data.weather[0].main
            },
            loading: false
          });
        } else {
          throw data.cod
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({
          loading: false,
          error: true
        });
      });
    });
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
