import logo from './logo.svg';
//import axios from "axios";
import {useState} from 'react';
import './ProfileManagementApp.css';
//import Dropdown from 'react-bootstrap/Dropdown';

/*
- Full Name (50 characters, required)
- Address 1 (100 characters, required)
- Address 2 (100 characters, optional)
- City (100 characters, required)
- State (Drop Down, selection required) DB will store 2 character state code
- Zipcode (9 characters, at least 5 character code required)
*/

function ProfileManagementApp() {
  const [name, set_name] = useState('');
  const [primaryaddress, set_primaryaddress] = useState('');
  const [secondaryaddress, set_secondaryaddress] = useState('');
  const [city, set_city] = useState('');
  const [usstate, set_usstate] = useState('');
  const [zipcode, set_zipcode] = useState('');
  const [didSubmitYet,set_didSubmitYet] = useState(false);
  const [open, set_open] = useState(false);
  function handleChangeName(e){
    set_name(e);
  }
  function handleChangePrimaryAddress(e){
    set_primaryaddress(e);
  }
  function handleChangeSecondaryAddress(e){
    set_secondaryaddress(e);
  }
  function handleChangeCity(e){
    set_city(e);
  }
  function handleChangeZipcode(e){
    set_zipcode(e);
  }
  function handleButtonChange(e){
    set_didSubmitYet(true);
  }
  const handleOpen = () => {
    set_open(!open);
  }
  function handleChangeUSStateToAK(){
    set_usstate('Alaska');
  }
  function handleChangeUSStateToCO(){
    set_usstate('Colorado');
  }
  function handleChangeUSStateToNM(){
    set_usstate('New Mexico');
  }
  function handleChangeUSStateToND(){
    set_usstate('North Dakota');
  }
  function handleChangeUSStateToOK(){
    set_usstate('Oklahoma');
  }
  function handleChangeUSStateToTX(){
    set_usstate('Texas');
  }
  return (
    <div><h1>Change Profile</h1>
      <label>
        Full Name: <input onChange={handleChangeName} />
      </label><p></p>
      <label>
        Primary Address: <input onChange={handleChangePrimaryAddress} />
      </label><p></p>
      <label>
        Secondary Address (put N/A if not not applicable): <input onChange={handleChangeSecondaryAddress} />
      </label><p></p>
      <label>
        City: <input onChange={handleChangeCity} />
      </label><p></p>
      <label>
        Zip Code: <input onChange={handleChangeZipcode} />
      </label><p></p>
      <button onClick={handleButtonChange}>Submit Changes</button><p></p>
      <label>
        Change State: <button onClick={handleOpen}>Dropdown</button>
      </label>
      {open ? (
        <ul className="changestateto__">
          <li className="changestatetoAK">
            <button onClick={handleChangeUSStateToAK}>Alaska</button>
          </li>
          <li className="changestatetoCO">
            <button onClick={handleChangeUSStateToCO}>Colorado</button>
          </li>
          <li className="changestatetoNM">
            <button onClick={handleChangeUSStateToNM}>New Mexico</button>
          </li>
          <li className="changestatetoND">
            <button onClick={handleChangeUSStateToND}>North Dakota</button>
          </li>
          <li className="changestatetoOK">
            <button onClick={handleChangeUSStateToOK}>Oklahoma</button>
          </li>
          <li className="changestatetoTX">
            <button onClick={handleChangeUSStateToTX}>Texas</button>
          </li>
        </ul>
      ) : null}
      {didSubmitYet && <h2>Changes made</h2>}
    </div>
  );
}
//ND, CO, OK
/*
<div>
      
*/
/*
<h1>Change Profile</h1>
      <form onSubmit={handleChangeName}>
        <label> Full name:  
          <textarea
            placeholder="Full name"
            value={name}
            onChange={e => set_name(e.target.value)}
          />
        </label>
        <button type="submit">Change Name</button>
      </form>
*/
export default ProfileManagementApp;

//Alias: SWDEhw2a1