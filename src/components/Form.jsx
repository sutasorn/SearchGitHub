import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Form = (props) =>{
    return(
        <form onSubmit={(event => props.handleUserFormSubmit(event))}>
        <br/>
             <input  name="username" type="text" placeholder="Input GitHub username" required value={props.formData.username} onChange={props.handleFormChange}/>
            <input  type="submit"value="OK"/>
            
        
        </form>
        
    )
};
export default Form;