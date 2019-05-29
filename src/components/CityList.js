import React from 'react';
import UniqueID from 'react-html-id';
import { Link } from "react-router-dom";

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
    return(  
        this.state.cities.map((city) =>{
          return(
              <ListGroup className="cityList">   
                  <Link to={'/weather/'+ city.name}>
                      {city.name}
                  </Link>
              </ListGroup>
              ); 
            })
          )
      }
  }

