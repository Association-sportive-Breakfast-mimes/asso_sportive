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
        <div className="contactForm">
            <h1>Nous contacter</h1>
            <form className='row' onSubmit={sendEmail}>
                <label>Nom</label>
                <input type="text" name="name" value="Veuillez saisir votre nom" className="form-control"/>
                <label>Email</label>
                <input type="email" name="user_email"value="Veuillez saisir votre E-mail" className="form-control"/>
                <label>Message</label>
                <textarea name='message' rows='15' className="form-control" />
                <input type='submit' value='Envoyer' className="form-control btn-primary"/>
            </form>
        </div>
    );
}

export default Mailer;
