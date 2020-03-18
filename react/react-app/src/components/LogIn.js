import React, { Component } from 'react';
import './css/register.css';
import axios from 'axios';

class LogIn extends Component {
  
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            pass: ''
        };
    }

    uservalidateHandler=e=>{
       
        e.preventDefault();
        var md5 = require('md5');
        const userInput = {
            email: this.state.email,
            pass: md5(this.state.pass)
        };
        axios.get('http://localhost:3000/user').then(res => {
			var result = res.data.filter(function(result) {
				return userInput.email === result.email && userInput.pass === result.pass;
			});
			if (result.length > 0) {
				
			 this.props.history.push('/components/UserSection')
			} else {
				alert("wrong username or password");
		}});
    };

    
    render() {
        return (
            <div className='sdd'>
        <div className="login form-group">
            

                    <div><h1>LOG IN</h1></div>
                    <div><label for="name">Email</label>
                        <input type="text" className="form-control" id="username" placeholder="enter Email id" onChange={e => {
                                this.setState({
                                    email: e.target.value,
                                });}}/>
                    </div>
                    <div>
                        <label for="name">Password</label>
                        <input type="text" className="form-control" id="lname" placeholder="enter password" onChange={e => {
                                this.setState({
                                    pass: e.target.value,
                                });
                                }}/>
                    </div>
                    <p className="fp"><a >Forget password?</a></p>

                    <div>
                    <input type="submit" className="btn btn-outline-dark" value="Log In" onClick={this.uservalidateHandler}/>
                </div>
                
             

                </div> 
            </div>);
        
        }
    }
export default LogIn;