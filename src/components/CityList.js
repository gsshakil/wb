import React from 'react';
import UniqueID from 'react-html-id';

import City from './City';

import { ListGroup } from 'reactstrap';

export default class CityList extends React.Component {

  constructor(){
    super();
    UniqueID.enableUniqueIds(this);
    this.state = {
      cities: [
          {id:this.nextUniqueId(), name: 'Dhaka'}, 
          {id:this.nextUniqueId(), name: 'Chittagong'}, 
          {id:this.nextUniqueId(), name: 'Khulna'}, 
          {id:this.nextUniqueId(), name: 'Sylhet'}, 
          {id:this.nextUniqueId(), name: 'Rajshahi'}, 
          {id:this.nextUniqueId(), name: 'Mymensingh'}, 
          {id:this.nextUniqueId(), name: 'Barisal'}, 
          {id:this.nextUniqueId(), name: 'Rangpur'}
      ]
    }
  }

  render() {
    return (
      <ListGroup>   
        {
            this.state.cities.map((city) =>{
               return(<City id={city.id}>{city.name}</City>) 
            })
        }
      </ListGroup>
    );
  }
}