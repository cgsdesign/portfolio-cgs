import React, { useState } from 'react';

function Contactform() {
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
                if (!isValid) {
                    setErrorMessage('Your email is invalid.');
                } else {
                    setErrorMessage('');
                }
          } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
          }
          if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }
        console.log('errorMessage', errorMessage);
    }
      
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }
        //console.log(formState);

    // JSX
    return (
        <section>
          <form id="contact-form" onSubmit={handleSubmit}>
                <div className="form-bar">
                    <label htmlFor="name">Name:</label>
                    <br/>
                    <input type="text" onChange={handleChange} name="name" defaultValue={formState.name}/>
                </div>
                <div className="form-bar">
                    <label htmlFor="email">Email address:</label>
                    <br/>
                    <input type="email" onChange={handleChange} name="email" defaultValue={formState.email}/>
                </div>
                <div className="form-bar">
                    <label htmlFor="message">Message:</label>
                    <br/>
                    <textarea name="message" onChange={handleChange} rows="5"  defaultValue={formState.message}/>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
          </form>
        </section>
      )
    }
    
export default Contactform;