import { useState } from 'react'

export default function Form() {
    const [ firstname, setFirstname ] = useState('');
    const [ lastname, setLastname ] = useState('');
    
    function handleInputChange({target}) {
        const {id, value} = target;
        if(id === 'firstname'){
            setFirstname(value);
        } else if(id === 'lastname') {
            setLastname(value);
        }
    }
  
    function onClick(){
        alert(`Hello ${firstname} ${lastname}`)
    }
    return (
        <>  
            <p>{ firstname }</p>
            <input onChange={ handleInputChange } value={ firstname } type="text" placeholder="First name" id="firstname" /> <br /><br />
            <input onChange={ handleInputChange } value={ lastname} type="text" placeholder="Last name" id="lastname" /> <br /><br />
            <button onClick={ onClick }>Submit</button>
            
        </>
    );
}