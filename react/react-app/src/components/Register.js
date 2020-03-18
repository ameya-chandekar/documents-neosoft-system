import React, { Component } from 'react';
import './css/register.css'
import axios from 'axios';
class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fname: '',
            lname: '',
            email: '',
            cno: '',
            pass: '',
            cpass: ''
        };
    }
    onSubmitHandler = e => {
        var md5 = require('md5');
        const Data =
        {
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email,
            cno: this.state.cno,
            pass: md5(this.state.pass),
            cpass: md5(this.state.cpass)
        };

        if (
            Data.fname === '' ||
            Data.lname === '' ||
            Data.email === '' ||
            Data.cno === '' ||
            Data.pass !== Data.cpass ||
            Data.pass === '' ||
            Data.cpass === ''
        ) {
            alert('error');
        }
        else {
            axios.post('http://localhost:3000/user', Data).then(res => {
                alert(Data.fname + '  '+ Data.lname + '  ' + 'your Data is successfully added!! ');
                this.props.history.push('/');
            });
        }
    };

    render() {
        return (

            <div className="register">
                <div> <h1>Register yourself here</h1></div>
                <div><label for="name">First Name</label>
                    <input type="text" className="form-control" id="fname" placeholder="enter your firstname" value={this.state.fname}
                        onChange={e => { this.setState({ fname: e.target.value }); }} />
                </div>
                <div>
                    <label for="name">Last Name</label>
                    <input type="text" className="form-control" id="lname" placeholder="enter your lastname" value={this.state.lname} onChange={e => { this.setState({ lname: e.target.value }); }} />
                </div>
                <div>
                    <label for="name">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="enter your email" value={this.state.email} onChange={e => { this.setState({ email: e.target.value }); }} />
                </div>
                <div>
                    <label for="name">Conctact No</label>
                    <input type="text" className="form-control" id="cNo" placeholder="enter contact_no " value={this.state.cno} onChange={e => { this.setState({ cno: e.target.value }); }} />
                </div>
                <div>
                    <label for="name">Password</label>
                    <input type="password" className="form-control" id="pass" placeholder="enter your password " value={this.state.pass} onChange={e => { this.setState({ pass: e.target.value }); }} />
                </div>
                <div>
                    <label for="name">Confirm Password</label>
                    <input type="password" className="form-control" id="cPass" placeholder="re-enter your password " value={this.state.cpass} onChange={e => { this.setState({ cpass: e.target.value }); }} />
                </div>
                <div>
                    <input type="submit" className="btn btn-outline-dark" value="Register" onClick={this.onSubmitHandler} />
                </div>
            </div>


        );
    }
}
export default Register;