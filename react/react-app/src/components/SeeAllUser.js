import React, { Component } from 'react';
import axios from 'axios';

class SeeAllUsers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    //this.submitHandler(); 

    axios.get('http://localhost:3000/user').then(res => {
      this.setState({ data: res.data })
      console.log(res.data);
    }
    )
  }






  deleteHandler = id => {
    //e.preventDefault();
    let yes = "yes"

    let confirm = prompt("If want to delete Enter 'yes' and press ok otherwise press cancel");
    if (confirm != null) {

      axios.delete('http://localhost:3000/user/' + id)

        .then(res => {

          axios.get('http://localhost:3000/user').then(res => {
            this.setState({ data: res.data });
          });
        });
    }
  }

  render() {
    const myData = this.state.data;
    return (
      <div className="allusers" >

        {/* <button onClick={this.submitHandler}> Show</button> */}

        <table className="table" >
          <tbody>

            <tr><h1><pre>List Of All Users</pre></h1></tr>
            <tr>
              <th><h5> Name</h5></th>

              <th><h5>Email</h5></th>
              <th><h5>Contact No</h5></th>

            </tr>
            {myData.map((item) =>
            
              <tr key={item.id}>
                <td>{item.fname} {item.lname}</td>
            
                <td>{item.email}</td>
                <td>{item.cno}</td>

                <td><button className='btn btn-outline-dark' onClick={() => this.deleteHandler(item.id)} >Delete</button></td>
                <td><button className='btn btn-outline-dark' onClick={() => this.EditHandler(item.id)} >Edit</button></td>
              </tr>)}
          </tbody>
        </table>
      </div>);
  }

}
export default SeeAllUsers;

