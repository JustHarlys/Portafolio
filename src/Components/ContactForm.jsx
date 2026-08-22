import emailjs from 'emailjs-com';
import '../Styles/Contact.css'
import '../App.css'
import { DarkContext } from '../Context/DarkToggleContext';
import { useContext } from 'react';

function ContactForm() {

  const { darkToggle } = useContext(DarkContext)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_v32ajqk',
      'template_b7iztbl',
      e.target,
      'tUrOY1meTHHPtVx78'
    )
      .then(() => alert('Message sent successfully!'))
      .catch((error) => alert('There was an error sending your message: ' + error.text));

    e.target.reset();
  };

  return (
    <section id="contact" className="contact-section">
      <h2
        className="contact-title"
        style={darkToggle ? { color: 'white' } : {}}
      >
        Contact Me
      </h2>

      <form className="contact-form" onSubmit={sendEmail}>
        <input
          type="text"
          name="from_name"
          placeholder="Your name"
          required
        />

        <input
          type="email"
          name="from_email"
          placeholder="Your email"
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
        />

        <textarea
          name="message"
          placeholder="Your message"
          rows="6"
          required
        />

        <button type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default ContactForm;