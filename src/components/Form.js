import emailjs from 'emailjs-com'
const Mailer = () => {
    function sendEmail (e) {
        e.preventDefault();

        emailjs.sendForm(
        'service_2reo06u',
        'template_twaj4p2',
        e.target,
        'user_68tCsb8K2VlNfXzQFIjG3'
        ).then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));
    }
    return (
        <div className="container border" 
        style={{marginTop:"50px",
        width: '50%',
        backgroundImage:`url(https://wallpapercave.com/wp/wp2042251.jpg)`,
        backgoundPosition:"center",
        backgroundSize:"cover",
        }}>
            <h1 style={{marginTop:'25px'}}>Contact Us</h1>
            <form className='row' style={{margin:"25px 85px 75px 100px"}} 
                onSubmit={sendEmail}
                >
                <label>name</label>
                <input type="text" name="name" className="form-control"/>

                <label>Email</label>
                <input type="email" name="user_email" className="form-control"/>

                <label>Message</label>
                <textarea name='message' rows='15' className="form-control"/>
                <input type='submit' value='Envoyer' className="form-control btn btn-primary"
                style={{marginTop:'30px'}}
                />
            </form>
        </div>
    );
}

export default Mailer;
