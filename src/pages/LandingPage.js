import React from 'react';
import { Button } from 'reactstrap';
import { Route } from 'react-router-dom';

import lp from '../lp.png';

class LandingPage extends React.Component{
    
    render(){
        const goToCityPage = () =>{
            console.log("Working!!!");
        };

        const GSButton = () => (
            <Route render={({ history}) => (
                <Button onClick={() => { history.push('/cities') }} color="danger">Get Started</Button>
            )} />
        )

        return(
            <div className="landing-page">
                <div className="inner">
                    <img src={lp} alt=""/>
                    <br/>
                    <GSButton />
                </div>
            </div> 
        );
    }
}

export default LandingPage;