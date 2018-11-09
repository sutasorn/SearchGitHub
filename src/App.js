import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Form from './components/Form.jsx';
import ProfileDetails from './components/ProfileDetails.jsx';
import Repo from './components/Repo.jsx';
import Follwer from './components/Follwer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  constructor(){
    super();
    this.state={
      username:[],
      info:'',repoitems:'',follwer:'',
      formData: {
        username: [],
        followers :[]
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

  axios.get('https://api.github.com/users/'+this.state.formData.username+'/repos')
    .then(response => this.setState({
      repoitems : response.data
      })).catch((err) => { console.log(err); });

      axios.get('https://api.github.com/users/'+this.state.formData.username+'/followers')
      .then(response => this.setState({
        follwer : response.data
        })).catch((err) => { console.log(err); });
};

handleFormChange(event) {
  const obj = this.state.formData;
  obj[event.target.name] = event.target.value;
  this.setState(obj);
};
  render() {
    return (
      <div>
          <div className='App-head'>
            <Form
              formData={this.state.formData}
              handleUserFormSubmit={this.handleUserFormSubmit}
              handleFormChange={this.handleFormChange}
            />
        </div>
        <div className='App-body'>
        <div className='App-card' >
          <div >
             <ProfileDetails infoclean={this.state.info}/>
          </div>
          <div>
             <Follwer follweritems={this.state.follwer} infoclean={this.state.info}/>
          </div>
          <div >
             <Repo repitems={this.state.repoitems}/>
          </div>
        </div>
      
      </div>
     </div>
    );
  }
}


export default App;
