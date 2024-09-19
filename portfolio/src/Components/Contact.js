import React from 'react';
import { FaUser, FaMapMarkerAlt, FaEnvelope, FaCommentDots } from 'react-icons/fa'; // Import the icons
import './Style/Contact.css';

function Contact() {
  return (
    <div className="Contact">
        <h1>Get In Touch</h1>
        <div className="contactContent">
          <p>Don't hesitate to get in touch with me if you have any questions or would like to discuss your project further. 
            I'm always happy to hear from potential clients and would love the opportunity to work with you.
            Feel free to contact me for questions, feedback, or collaborations. I value your input and look forward to connecting with you:</p>
        
          <div className="contact-info">
            <h4><FaUser className="icon" /> Name</h4>
            <p>Thusharaga Vallipuranathan</p>

            <h4><FaMapMarkerAlt className="icon" /> Address</h4>
            <p>Wellawatte, Colombo, Sri Lanka.</p> 

            <h4><FaEnvelope className="icon" /> Mail</h4>
            <p>thusharagav2001@gmail.com</p>
          </div>  
          <br/>
        
          {/* Email button */}
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzCMrffKSBNPwBJTxMQcWmmzhhvrxhXCbSVJvmZLLTJzswMDhKsWdLmmmNHzPhrtFdWPVKq" className="contact-btn">
            Let's get in touch  <FaCommentDots className="btn-icon" />
          </a>
        </div>
    </div>
  );
}

export default Contact;
