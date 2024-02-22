import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from 'react-dom';
import Header from "./Header.jsx";
import ProfileManagementApp from "./ProfileManagementApp";
import {useState} from "react";
import Registration from "./Registration.jsx";
import FuelQuoteHistory from "./FuelQuoteHistory.js";
import FuelQuoteForm from "./FuelQuoteForm.js";

/*export const useRoutes = () => {
  return (
    <Routes>
       <Route path="/profile" element={<ProfileManagementApp />} />
    </Routes>
  );
};*/

function App(){
  const [currOn_LoginPage, set_currOn_LoginPage] = useState(false);
  const [currOn_RegistrationPage, set_currOn_RegistrationPage] = useState(false);
  const [currOn_ProfileManagementPage, set_currOn_ProfileManagementPage] = useState(false);
  const [currOn_FuelQuoteHistory, set_currOn_FuelQuoteHistory] = useState(false);
  const [currOn_FuelQuoteForm, set_currOn_FuelQuoteForm] = useState(false);
  function switchCurr_LoginPage(e){
    set_currOn_LoginPage(!currOn_LoginPage);
    if(currOn_LoginPage == false){
      set_currOn_RegistrationPage(false);
      set_currOn_ProfileManagementPage(false);
      set_currOn_FuelQuoteHistory(false);
      set_currOn_FuelQuoteForm(false);
    }
  }
  function switchCurr_RegistrationPage(e){
    set_currOn_RegistrationPage(!currOn_RegistrationPage);
    if(currOn_RegistrationPage == false){
      set_currOn_LoginPage(false);
      set_currOn_ProfileManagementPage(false);
      set_currOn_FuelQuoteHistory(false);
      set_currOn_FuelQuoteForm(false);
    }
  }
  function switchCurr_ProfileManagementPage(e){
    set_currOn_ProfileManagementPage(!currOn_ProfileManagementPage);
    if(currOn_ProfileManagementPage == false){
      set_currOn_LoginPage(false);
      set_currOn_RegistrationPage(false);
      set_currOn_FuelQuoteHistory(false);
      set_currOn_FuelQuoteForm(false);
    }
  }
  function switchCurr_FuelQuoteHistory(e){
    set_currOn_FuelQuoteHistory(!currOn_FuelQuoteHistory);
    if(currOn_FuelQuoteHistory == false){
      set_currOn_LoginPage(false);
      set_currOn_RegistrationPage(false);
      set_currOn_ProfileManagementPage(false);
      set_currOn_FuelQuoteForm(false);
    }
  }
  function switchCurr_FuelQuoteForm(e){
    set_currOn_FuelQuoteForm(!currOn_FuelQuoteForm);
    if(currOn_FuelQuoteForm == false){
      set_currOn_LoginPage(false);
      set_currOn_RegistrationPage(false);
      set_currOn_ProfileManagementPage(false);
      set_currOn_FuelQuoteHistory(false);
    }
  }
  return (
    <div>
      <button onClick={switchCurr_LoginPage}>Login Page</button>
      <button onClick={switchCurr_RegistrationPage}>Registration Page</button>
      <button onClick={switchCurr_ProfileManagementPage}>Profile Management Page</button>
      <button onClick={switchCurr_FuelQuoteHistory}>Fuel Quote History</button>
      <button onClick={switchCurr_FuelQuoteForm}>Fuel Quote Form</button>
      {currOn_LoginPage && <Header />}
      {currOn_RegistrationPage && <Registration />}
      {currOn_ProfileManagementPage && <ProfileManagementApp />}
      {currOn_FuelQuoteHistory && <FuelQuoteHistory />}
      {currOn_FuelQuoteForm && <FuelQuoteForm />}
    </div>
  );
}

export default App;