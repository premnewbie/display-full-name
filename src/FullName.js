import { useEffect, useState } from 'react';

const FullName = () => {
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [fullName,setFullName] = useState('');

    
    const handleSetFull = (e) => {
        e.preventDefault();
        if(firstName!=='' && lastName!==''){
            setFullName(firstName+' '+lastName);
        }
    }

    return ( <>
    <h1>Full Name Display</h1>
    <form>
        <div>
            <label>First Name:</label>
            <input type='text' onInput={(e)=>setFirstName(e.target.value)} required/>
        </div>
        <div>
            <label>Last Name:</label>
            <input type='text'  onInput={(e)=>setLastName(e.target.value)} required/>
        </div>
        <button type='submit' onClick={(e)=>handleSetFull(e)}>Submit</button>
    </form>
    {fullName && <div>
        Full Name: {fullName}
    </div>}
    </> );
}
 
export default FullName;