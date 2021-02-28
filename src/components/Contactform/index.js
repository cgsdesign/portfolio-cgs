import React, { useState } from 'react';
import linkedin from "../../assets/images/linkedin.png"
import github from "../../assets/images/github.png"
import codepen from "../../assets/images/codepen.png"
import "./contactform.css"

function Contactform() {
    // const [errorMessage, setErrorMessage] = useState('');
    // const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    // function validateEmail(email) {
    //     var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     return re.test(String(email).toLowerCase());
    //   }

    // function handleChange(e) {
    //     if (e.target.name === 'email') {
    //         const isValid = validateEmail(e.target.value);
    //         console.log(isValid);
    //         // isValid conditional statement
    //             if (!isValid) {
    //                 setErrorMessage('Your email is invalid.');
    //             } else {
    //                 setErrorMessage('');
    //             }
    //       } else {
    //         if (!e.target.value.length) {
    //           setErrorMessage(`${e.target.name} is required.`);
    //         } else {
    //           setErrorMessage('');
    //         }
    //       }
    //       if (!errorMessage) {
    //         setFormState({ ...formState, [e.target.name]: e.target.value });
    //       }
    //     console.log('errorMessage', errorMessage);
    // }
      
    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log(formState);
    //   }
    //     //console.log(formState);

    // // JSX
    // return (
    //     <section>
    //       <form id="contact-form" onSubmit={handleSubmit}>
    //             <div className="form-bar">
    //                 <label htmlFor="name">Name:</label>
    //                 <br/>
    //                 <input type="text" onChange={handleChange} name="name" defaultValue={formState.name}/>
    //             </div>
    //             <div className="form-bar">
    //                 <label htmlFor="email">Email address:</label>
    //                 <br/>
    //                 <input type="email" onChange={handleChange} name="email" defaultValue={formState.email}/>
    //             </div>
    //             <div className="form-bar">
    //                 <label htmlFor="message">Message:</label>
    //                 <br/>
    //                 <textarea name="message" onChange={handleChange} rows="5"  defaultValue={formState.message}/>
    //             </div>
    //             {errorMessage && (
    //                 <div>
    //                     <p className="error-text">{errorMessage}</p>
    //                 </div>
    //             )}
    //             <button type="submit">Submit</button>
    //       </form>
    //     </section>
    //   )

    return (
      <section>
        <h3>Catherine G Sibley</h3>
        <h3> Madison, IL</h3>
        <h3> catherine.lea.graham@gmail.com</h3>
        <br></br>
        <div className="link-zone">
        <a href="https://www.linkedin.com/in/catherine-sibley-93677926/" target="_blank" rel="noreferrer">
                <img alt="linkedin link" src={linkedin} />
            </a>
            <a href="https://github.com/cgsdesign" target="_blank" rel="noreferrer">
                <img alt="github link" src={github} />
            </a>   
            <a href="https://codepen.io/cgsdesign" target="_blank" rel="noreferrer">
                <img alt="github link" src={codepen} />
            </a>  
            </div> 
      </section>
    )
    }
    
export default Contactform;
