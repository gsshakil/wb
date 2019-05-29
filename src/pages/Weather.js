import React from 'react';
import axios from 'axios';

class Weather extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined,
      currentCity : this.props.match.params.name
    };

  

  }

  componentDidMount() {
    const APP_ID = "86254bff569adb47c62600be0abf0b9e";
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.currentCity}&appid=${APP_ID}`)
      .then(res => {
        const response = res.data;
        this.setState({ 
          temperature: response.main.temp,
          city: response.name,
          country: response.sys.country,
          humidity: response.main.humidity,
          description: response.weather[0].description,
          error: ""
        });
        console.log(JSON.stringify(response));
      })
    }

  render() {
    return (
      <div className="my-weather">
          <div className="inner">
              <div className="container">
                  <div className="col-md-6 offset-md-3">
                      <h1>{this.state.currentCity}</h1>
                      <hr/>
                      <h2>Temperature: {this.state.temperature}</h2>
                      <h2>Weather Mode: {this.state.description}</h2>
                      <h2>Humidity: {this.state.humidity}</h2>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default Weather;
