import './App.css';
import { useState } from 'react';

function App() {

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const inputChecker = () => {
    // Check the first name field
    if (document.getElementById('first-name').value.length < 1) {
      setFirstNameError(true);
    } else {
      setFirstNameError(false);
    }

    // Check the last name field
    if (document.getElementById('last-name').value.length < 1) {
      setLastNameError(true);
    } else {
      setLastNameError(false);
    }

    // Check the email field
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(document.getElementById('email').value)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }

    // Check the password field
    if (document.getElementById('password').value.length < 1) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  }

  return (
    <main>
      <div id="backdrop">
        <div id="container">
          <div id="left-area">
            <h1 id="title">Learn to code by watching others</h1>
            <p id="description">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
          </div>
          <div id="right-area">
            <div id="banner">
              <p id="banner-text"><span className="bold">Try it free 7 days </span>then $20/mo. thereafter</p>
            </div>
            <div id="card">
              <div id="input-holder">
                <input id="first-name" type="text" placeholder="First Name" className={firstNameError ? "error-input" : "default-input"}></input>
                <p className={firstNameError ? "error-message" : "hide"}>First Name cannot be empty</p>
                <input id="last-name" type="text" placeholder="Last Name" className={lastNameError ? "error-input" : "default-input"}></input>
                <p className={lastNameError ? "error-message" : "hide"}>Last Name cannot be empty</p>
                <input id="email" type="text" placeholder="Email Address" className={emailError ? "error-input" : "default-input"}></input>
                <p className={emailError ? "error-message" : "hide"}>Looks like this is not an email</p>
                <input id="password" type="text" placeholder="Password" className={passwordError ? "error-input" : "default-input"}></input>
                <p className={passwordError ? "error-message" : "hide"}>Password cannot be empty</p>
                <button id="claim" onClick={inputChecker}>CLAIM YOUR FREE TRIAL</button>
              </div>
              <div id="footer">
                <p id="small-text">By clicking the button, you are agreeing to our<span id="pink"> Terms and Services</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;

/*<img src={errorIcon} alt="error" id="first-name-error" className={firstNameError ? "error-show" : "error-hide"}></img>

              <input id="last-name" type="text" placeholder="Last Name" className="default-input"></input>
              <img src={errorIcon} alt="error" id="last-name-error" className={firstNameError ? "error-input" : "default-input"}></img>
              <p className="error-message">Last Name cannot be empty</p>
              <input id="email" type="text" placeholder="Email Address" className="default-input"></input>
              <img src={errorIcon} alt="error" id="email-error" className="error"></img>
              <p className="error-message">Looks like this is not an email</p>
              <input id="password" type="text" placeholder="Password" className="default-input"></input>
              <img src={errorIcon} alt="error" id="password-error" className="error"></img>
              <p className="error-message">Password cannot be empty</p>
*/