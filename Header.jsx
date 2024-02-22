import React, {useState} from 'react';
function Header(){

    const [name, setName] = useState("");
    const [password,setPassword] = useState("");
    function handleNameChange(event){
        setName(event.target.value);
    }
    function handlePasswordChange(event){
        setPassword(event.target.value);
    }

    function clickMe(){
      alert("You clicked me!");
    }
    return (
      <div>
        <p>UserName: </p>
        <input value = {name} onChange={handleNameChange}/>
        <p>password: </p>
        <input password = {password} onChange={handlePasswordChange}/>
        <li><a href = "#">Forgot password</a></li>
        <p></p>
        <button theme="pink" onClick={clickMe}>Login</button>
        <p></p>
        <li><a href = "#">Create new account</a></li>
      </div>

    );
    }
export default Header