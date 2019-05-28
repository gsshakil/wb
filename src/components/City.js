import React from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, Form } from 'reactstrap';

class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      backdrop: true,

      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    };

    this.toggle = this.toggle.bind(this);
    this.changeBackdrop = this.changeBackdrop.bind(this);
  }

  componentDidMount() {
    const APP_ID = "86254bff569adb47c62600be0abf0b9e";
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=${APP_ID}`)
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

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  changeBackdrop(e) {
    let value = e.target.value;
    if (value !== 'static') {
      value = JSON.parse(value);
    }
    this.setState({ backdrop: value });
  }

  render() {
    return (
      <div>
        <Form inline onSubmit={(e) => e.preventDefault()}> 
          <Button className="cityList" onClick={this.toggle} key={this.props.id}>{this.props.children}</Button>
        </Form>

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
          <ModalHeader toggle={this.toggle}>{this.props.children}</ModalHeader>
          <ModalBody>
              <h2>Temperature: {this.state.temperature}</h2>
              <h2>Weather Mode: {this.state.description}</h2>
              <h2>Humidity: {this.state.humidity}</h2>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}


export default City;
