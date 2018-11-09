import React, { Component } from 'react';
import axios from 'axios';
class Follwers extends Component {
  constructor(){
    super();
    this.state={
      ShowMe:false,id:[],detailFo:[],detaire:[],deFoll:[]
    }
  }
   imgStye = {
    borderRadius: "50%",
    width: "250px",
    height: "250px"
  };
  operator(id,username){
    console.log("username="+username);
    this.setState({
      ShowMe:!this.state.ShowMe,
      id:id
    })
   axios.get('https://api.github.com/users/'+username)
    .then(response => this.setState({
      detailFo : response.data
      })).catch((err) => { console.log(err) });
      axios.get('https://api.github.com/users/'+username+'/repos')
      .then(response => this.setState({
        detaire : response.data
        })).catch((err) => { console.log(err); });
  
        axios.get('https://api.github.com/users/'+username+'/followers')
        .then(response => this.setState({
          deFoll : response.data
          })).catch((err) => { console.log(err); });
  }

  render() {
    {console.log("detailFo="+this.state.detailFo)}
    if(!this.props.follweritems){
      return (null)
    }
    return (
      <ul>
      The list of Follwer
        {this.props.follweritems.map((follweritem) =>
          <li key={follweritem.id}>
            <div>
              <div>
              <a href='javascript:void(0)' onClick={()=>this.operator(follweritem.id,follweritem.login)}>ชื่อ :{follweritem.login} </a>
              </div>
              <div>
                {this.state.ShowMe && (this.state.id==follweritem.id) ?
              <div>
                  {follweritem.avatar_url ?
                  <img src={follweritem.avatar_url}
                  alt="Profile"
                  style={this.imgStye}/> : null }
              <div>Name:{this.state.detailFo.name ?<span>{this.state.detailFo.name}</span>:'ไม่พบข้อมูล'}</div>
              <div>Bio:{this.state.detailFo.bio ?<span>{this.state.detailFo.bio}</span>:'ไม่พบข้อมูล'}</div>
              <div>The list of Follwer
                <ul>
                  {
                    this.state.deFoll.map((foll)=>
                    <li key={foll.id}>
                      <div>ชื่อ:{foll.login}</div>
                    </li>
                    )
                  }
                </ul>
              </div>
              <div> The list of repository
              <ul>
                  {
                    this.state.detaire.map((repo)=>
                    <li key={repo.id}>
                      <div>ชื่อ:{repo.name}</div>
                    </li>
                    )
                  }
                </ul>
              </div>
              </div>:null
                }
            </div>
            </div>
          </li>
        )}
      </ul>
    );
  }
}
export default Follwers;