import emailjs from 'emailjs-com'
import React from 'react';

const Mailer = () => {
    function sendEmail (e) {
        e.preventDefault();

        emailjs.sendForm(
        'service_sut0bhr',
        'template_5jr7tjl',
        e.target,
        'user_3UwtezsmgDmDpR8yrgHAT'
        ).then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));
    }
    return (
        <div className='main'>
        <div className='contact1'>
            
            <h2>Formulaire de Contact</h2>

            <form onSubmit={sendEmail}>
                <div className='form-grid'>
                    <div>
                        <label htmlFor="name">Nom</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email"/>
                    </div>
                    <div className="textarea">
                        <label htmlFor='message'>Message</label>
                        <textarea></textarea>
                    </div>
                </div>
                <input type='submit' className="button" value='Send Message'/>
            </form>
        </div>
        <div className="animation">
            <div className="words word-1">
                    <span>A</span>
                    <span>I</span>
                    <span>K</span>
                    <span>I</span>
                    <span>D</span>
                    <span>O</span>
            </div>
            <div className="words word-2">
                <span>I</span>
                <span>S</span>
            </div>
            <div className="words word-3">
                <span>L</span>
                <span>I</span>
                <span>F</span>
                <span>E</span>
            </div>
        </div>
    </div>
    );
}

export default Mailer;
