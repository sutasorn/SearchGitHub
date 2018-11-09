import React, { Component } from 'react';
class Repo extends Component {
  constructor(){
    super();
    this.state={
      repitems:[]
    }
   
  
  }

  render() {
  
    if(!this.props.repitems){
      return(null)
    }
    return(
      <ul>
      The list of repository
        {this.props.repitems.map((repitem) =>
          <li key={repitem.id}>
            <div>
              <div>
                {repitem.name} 
              </div>
            </div>
          </li>
        )}
      </ul>
    )
  }
}
export default Repo;