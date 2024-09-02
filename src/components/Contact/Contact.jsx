import { useState } from "react";
import emailjs from "emailjs-com";
import theme_pattern from "../../assets/theme_pattern.svg";
import "./Contact.css";
import { FaEnvelope } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaTelegram } from 'react-icons/fa';
import { FaSpinner } from "react-icons/fa6";
const Contact = () => {
  const email = "tobbie2611@gmail.com";
  const telephone = "+2349065848356";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    emailjs
      .send(
        "service_yywfrl4",
        "template_xfn8gnk",
        formData,
        "eX3QV1cP6ODGZVgHw"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setLoading(false);
        setSuccessMessage("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => setSuccessMessage(""), 5000);
      })
      .catch((err) => {
        setLoading(false);
        console.log("FAILED...", err);
      });
  };

  return (
    <section id='contact'>
      <div className="container contact">
        <div className="contact_head">
          <h1>Contact Me</h1>
          <img src={theme_pattern} alt="theme" />
        </div>

        <div className="contents">
          <div className="content_left">
            <h2>Let&apos;s Talk</h2>
            <p>
              I&apos;m currently available to take on new project, so feel free
              to send me a message about anything that you want me to work on.
              You can contact me anytime
            </p>
            <div>
              <span>
                <FaEnvelope style={{ fontSize: "20px" }} />
              </span>
              <p>
                <a href={`mailto:${email}`}>tobbie2611@gmail.com</a>
              </p>
            </div>
            <div>
              <span>
                <FaPhone style={{ fontSize: "20px" }} />
              </span>
              <p>
                <a href={`tel:${telephone}`}>+234 9065848356</a>
              </p>
            </div>
          </div>

          <div className="content_right">
            {successMessage && (
              <p className="success-message">{successMessage}</p>
    
            )}
          

            <form onSubmit={handleSubmit}>
              <input
                name="name"
                placeholder="Your Name"
                type="text"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                name="email"
                type="email"
                placeholder="info@info.com"
                value={formData.email}
                onChange={handleChange}
              />

              <textarea
                name="message"
                placeholder="Message"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit" className="btn">
                {loading ? <FaSpinner className='spinner' />: 'Send'}
              </button>
            </form>
          </div>
        </div>

    <div className="footer_link">
      <span>
        <a href="https://www.facebook.com/immaa.ajayi" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icon"/>
        </a>
        
        <a href="https://www.instagram.com/toby_ay201/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon"  />
        </a>
        
        <a href="https://www.linkedin.com/in/abegunde-emmanuel-573687185" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon"  />
        </a>
        
        <a href="https://twitter.com/toby_ay201?s=21&t=zv7pt-bY9v_4OZrnXnshaw" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="icon"  />
        </a>
        
        <a href="https://api.whatsapp.com/send?phone=2349065848356" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="icon" />
        </a>

        <a href="https://t.me/marshallFan2611" target="_blank" rel="noopener noreferrer">
          <FaTelegram className="icon"  />
        </a>
      </span>
    </div>
      </div>
    </section>
  );
};

export default Contact;
