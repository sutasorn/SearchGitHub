import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Form = (props) =>{
    return(
        <form onSubmit={(event => props.handleUserFormSubmit(event))}>
        <br/>
            <table>
                <tr>
                    <td>
                        <input class="form-control" name="username" type="text" placeholder="Input GitHub username" required value={props.formData.username} onChange={props.handleFormChange}/>
                    </td>
                    <td></td>
                    <td>
                        <input class="form-control" type="submit"value="OK"/>
                    </td>
                </tr>
            </table>
            
        
        </form>
        
    )
};
export default Form;