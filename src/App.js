import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Form from './components/Form.jsx';
import ProfileDetails from './components/ProfileDetails.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  constructor(){
    super();
    this.state={
      username:[],
      info:[],
      formData: {
        username: [],
      }
    }
    this.handleUserFormSubmit = this.handleUserFormSubmit.bind(this);
    this.handleFormChange= this.handleFormChange.bind(this);
  
  }
 handleUserFormSubmit(event) {
    event.preventDefault();
    axios.get('https://api.github.com/users/'+this.state.formData.username).then(response =>this.setState({
    username: response.data.login,
    info :response.data
  })).catch((err) => { console.log(err); });
}
handleFormChange(event) {
  const obj = this.state.formData;
  obj[event.target.name] = event.target.value;
  this.setState(obj);
};
  render() {
    return (
      <div className="App" className="container">
        <header className="App-header">
        </header>
        <div class="row">
          <div class="col-12">
            <Form
              formData={this.state.formData}
              handleUserFormSubmit={this.handleUserFormSubmit}
              handleFormChange={this.handleFormChange}
            />
          </div>
        </div>
        <div class="row">
          <div class="col-12">
             <ProfileDetails infoclean={this.state.info}/>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
