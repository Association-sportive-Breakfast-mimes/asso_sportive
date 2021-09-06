import React from 'react'

const Form = () => {
    return (
        <div className="form">
            <form>
                <h1 className="form-title">Get in Touch</h1>
                <input type="text" id="name" placeholder="Nom"/>
                <input type="text" id="name" placeholder="Prénom"/>
                <input type="mail" id="name" placeholder="e-mail"/>
                <textarea type="text" placeholder="votre message" cols="15" rows="20"/>
                <input className="button" type="submit" value="Envoyer"/>
            </form>
        </div>
    )
}

export default Form
