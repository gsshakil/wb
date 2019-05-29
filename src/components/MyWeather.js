import React from 'react';
import axios from 'axios';


class MyWeather extends React.Component{

    constructor() {
        super()
    
        this.state = {
          latitude: '',
          longitude: '',
        }
    
        this.getMyLocation = this.getMyLocation.bind(this)
      }

      getMyLocation() {
        const location = window.navigator && window.navigator.geolocation
        
        if (location) {
          location.getCurrentPosition((position) => {
            this.setState({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            })
          }, (error) => {
            this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
          })
        }
    
      }
  
  componentDidMount() {
    const APP_ID = "86254bff569adb47c62600be0abf0b9e";
    axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=24&lon=90&appid=${APP_ID}`)
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
                        <h1>My Weather</h1>
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

export default MyWeather;
