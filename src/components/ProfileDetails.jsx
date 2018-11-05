import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const imgStye = {
  borderRadius: "50%",
  width: "250px",
  height: "250px"
};
const ProfileDetails = (props) => {
  if(props.infoclean==null){
    return (  <div class="App-card">ไม่พบข้อมูล</div>)
  }
    return (
      <div class="container">
      <div class="App-card">
        <div class="row">
          <div class="col-4">
          {props.infoclean.avatar_url ?
            <img src={props.infoclean.avatar_url}
                 alt="Profile"
                 style={imgStye}/> : null }
          </div>
        <div class="col-8">
          <div class="row">
            {props.infoclean.name ? <p>Name:  {props.infoclean.name}</p> : "Name : ไม่พบข้อมูล" }
          </div>
          <div class="row">
            {props.infoclean.bio ? <p>Bio:  {props.infoclean.bio}</p> : "Bio : ไม่พบข้อมูล" }
          </div>
          <div class="row">
            {props.infoclean.followers ? <p>Followers:  {props.infoclean.followers}</p> : "Followers: ไม่พบข้อมูล" }
          </div>
        </div>
      </div>
      </div>
      </div>
    )
};
export default ProfileDetails;