import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Follwers =(props) =>{
    return(
        <button className='button' onClick={()=>{props.handleClick()}}>Search</button>
    )
    
};

export default Follwers;


//https://code.tutsplus.com/tutorials/introduction-to-api-calls-with-react-and-axios--cms-21027