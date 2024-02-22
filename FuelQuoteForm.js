import {useState} from 'react';
import './ProfileManagementApp.css';

function FuelQuoteForm(){
    return(
      <>
      <main>
        <form>
          <h2>Fuel Quote Form</h2>
          <section>
            <div className="info">
              <label htmlFor="gallons">
                Enter the desired amount of fuel in gallons:
              </label>
              <input id="gallons" type="number" required="" />
            </div>
            <p></p>
            <div className="info">
              <label htmlFor="address">Enter your delivery address:</label>
              <input id="address" type="address" />
            </div>
            <p></p>
            <div className="info">
              <label htmlFor="date">Pick a delivery date:</label>
              <input id="date" type="date" />
            </div><p></p>
            <div className="spacer" />
            <div className="info">
              <label>Suggested price per gallon:</label>
              <p>
                <i>**price output goes here**</i>
              </p>
            </div>
            <div className="info">
              <label>Total Amount Due: </label>
              <p>
                <i>**Total goes here**</i>
              </p>
            </div>
            <button>Order</button>
            <section></section>
          </section>
        </form>
      </main>
    </>
  
    );  
}

export default FuelQuoteForm;