import React, { useState } from 'react';

function Formtolog (){
    const [user,setuser] = useState('');
    const [pass, setPass] = useState('');


    return(
        <label>
            user
            <br/>
            <input value={user} type='text' onChange={e => setuser(e.target.value)}/>
            <br/>
            password
            <br/>
            <input value={pass} type='text' onChange={e => setPass(e.target.value)}/>
            <br/>
            <button type="submite">entrar</button>
        </label>
    );
}

function Loginpage(){
    return(
        <div>
            <div id="art">
                <Formtolog/>
            </div>
        </div>
    );
}
        



export default Loginpage;