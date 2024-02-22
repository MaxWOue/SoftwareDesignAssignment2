import React, {useState} from 'react';
function Registration(){
        const [name, setName] = useState("");
        const [password,setPassword] = useState("");
        const [email,setEmail] = useState("");
        const [confirmPasword,setConfirmedPassword] = useState("");
        function handleNameChange(event){
            setName(event.target.value);
        }
        function handlePasswordChange(event){
            setPassword(event.target.value);
        }
        function handleConfirmedPassword(event){
            setConfirmedPassword(event.target.value);
        }
        function handleEmailChange(event){
            setEmail(event.target.value);
        }


    function clickMe(){
      alert("You clicked me!");
    }
    return(
        <div>
            <p>Your Name: </p> 
            <input value = {name} onChange={handleNameChange}/>
            <p>Your Email Address: </p> 
            <input value = {email} onChange={handleEmailChange}/>
            <p>Create password: </p>
            <input password = {password} onChange={handlePasswordChange}/>
            <p>Confirm password: </p>
            <input confirm = {confirmPasword} onChange={handleConfirmedPassword}/><p></p>
            <button theme="pink" onClick={clickMe}>Create Account</button>
        </div>
    );
}
export default Registration