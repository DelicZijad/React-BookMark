import {useState} from 'react'
const Contact = () => {
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const[errorClass,setErrorClass]=useState('hide');
    function emailHandler(e){
        if(regex.test(e.target.value)) setErrorClass('hide')
         else setErrorClass('')
    }
  return (
    <div className="contact bgBlue txtWhite py-200">
        <div className="container contact--container">
            <h3 className="fs-heading-medium fw-regular txtCtr">35,000+ already joined</h3>
            <h4 className="fs-heading-secondary txtCtr "> Stay up-to-date with what we’re doing</h4>
            <div className="contact--lower">
            <div className="contact--form">
                <input onChange={emailHandler} type="email" placeholder="Enter your email address" className="px-100 py-50 contact--input" />
                <p className={`contact--error bgRed txtWhite fs-50 px-100 ${errorClass}`}>Whooops, make sure it's an email</p>
            </div>
            <a href="#" className="btnRed">Contact Us</a>
        </div>
        </div>
    </div>
  )
}

export default Contact