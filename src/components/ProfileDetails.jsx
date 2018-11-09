import React, { Component } from 'react';
class ProfileDetails extends Component {
  constructor(){
    super();
    this.state={
      infoclean:[]
    }
   
  
  }
 imgStye = {
  borderRadius: "50%",
  width: "250px",
  height: "250px"
};

render(){
  if(!this.props.infoclean){
    return(
        <center><div>ไม่พบข้อมูลกรุณากรอกชื่อ</div></center>
    )
  }
  return(
    <div >
    <div >
      <div  >
      {this.props.infoclean.avatar_url ?
        <img src={this.props.infoclean.avatar_url}
             alt="Profile"
             style={this.imgStye}/> : null }
      </div>
    <div>
      <div >
        {this.props.infoclean.name ? <p>Name:  {this.props.infoclean.name}</p> : "Name : ไม่พบข้อมูล" }
      </div>
      <div >
        {this.props.infoclean.bio ? <p>Bio:  {this.props.infoclean.bio}</p> : "Bio : ไม่พบข้อมูล" }
      </div>
      <div >
      </div>
    </div>
  </div>
  </div>
  )
}
}
export default ProfileDetails;