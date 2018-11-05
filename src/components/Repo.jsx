import React, { Component } from 'react';
import Moment from 'react-moment';
const Repo = (props) => {
  if (props.repitems) {
    return (
  
        <ul>
        The list of repository
          {props.repitems.map((repitem) =>
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
  } else { return null;}
  };
export default Repo;