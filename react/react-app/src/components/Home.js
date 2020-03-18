import React, { Component } from 'react';
import './css/register.css';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
class Home extends Component {

    render() {

        return (

            <div className="home">

                <table border="0" align="center">
                    <tr><th><h1>React Example</h1></th></tr>

                    <tr><td> <Link to="/components/LogIn"><button className='btn-outline-dark'>Log In Here </button></Link></td></tr>

                    <tr><td><Link to="/components/Register"><button className=' btn-outline-dark'>New To Our Site Register Now</button></Link></td></tr>
                    <tr><td><Link to="/components/SeeAllUsers"><button className=' btn-outline-dark'>See All Users</button></Link></td></tr>
                </table>
            </div>);


    }
}
export default Home;
