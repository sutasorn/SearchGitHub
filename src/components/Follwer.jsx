import React, { Component } from 'react';

const imgStye = {
    borderRadius: "50%",
    width: "250px",
    height: "250px"
  };

const Follwer = (props) => {
  if (props.follweritems) {
     return (
        <ul>
        The list of Follwer
          {props.follweritems.map((follweritem) =>
            <li key={follweritem.id}>
              <div>
                <div>
                ชื่อ :{follweritem.login}
                </div>
                <div>
                <div>
                    {follweritem.avatar_url ?
                    <img src={follweritem.avatar_url}
                    alt="Profile"
                    style={imgStye}/> : null }
                </div>
              </div>
              </div>
            </li>
          )}
        </ul>
      )
  } else { return null;}
  };
export default Follwer;