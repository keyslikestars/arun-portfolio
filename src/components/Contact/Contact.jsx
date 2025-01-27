import React from 'react';
import './contact.scss';
import { RiMailSendFill, RiMapPinRangeLine, RiWhatsappLine } from 'react-icons/ri';

window.addEventListener('scroll', reveal);

function reveal(){
    const reveals = document.querySelectorAll('.reveal');

     for(var i = 0; i < reveals.length; i++){
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150; 

        if (revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('active');
        }else{
            reveals[i].classList.remove('active')
        }
     }
}




function Contact() {



  return (
    <div className='contact reveal' >
      <div className="textContainer">
        <h1>GET IN TOUCH <span style={{color:"orange", fontWeight:"900"}}>!</span></h1>
        <div className="item">
          <RiMailSendFill className='icon-img'></RiMailSendFill>
          <h2>Mail</h2>
          <span>Arunps606@gmail.com</span>
        </div>
        <div className="item">
          <RiMapPinRangeLine className='icon-img'></RiMapPinRangeLine>
          <h2>Address</h2>
          <span>Irinjalakuda,Thrissur 680688</span>
        </div>
        <div className="item">
          <RiWhatsappLine className='icon-img'></RiWhatsappLine>
          <h2>Phone</h2>
          <span>+91 9995677813</span>
        </div>
      </div>
      <div className="formContainer reveal">
        <form>
          <input type="text" required placeholder='Name' name='name' />
          <input type="email" required placeholder='E-mail' name='email' />
          <textarea rows={8} placeholder='Message' name='message'></textarea>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact