import emailjs from 'emailjs-com';
import '../StylesFreelance/ContactFormF.css'
import '../App.css'
import { DarkContext } from '../Context/DarkToggleContext';
import { useContext } from 'react';

function ContactFormF() {

  const {darkToggle} = useContext(DarkContext)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v32ajqk', 'template_b7iztbl', e.target, 'tUrOY1meTHHPtVx78')
      .then(() => alert('Mensaje enviado con éxito!'))
      .catch((error) => alert('Error al enviar el mensaje: ' + error.text));

    e.target.reset();
  };

  return (
    <section id="contact" className="contact-section-f">
      <h2 className="contact-title-f" style={darkToggle ? {color: 'white'} : {color: '#282c34'}}>Contáctame</h2>
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="text" name="from_name" placeholder="Tu nombre" required />
        <input type="email" name="from_email" placeholder="Tu correo" required />
        <input type="text" name="subject" placeholder="Asunto" required />
        <textarea name="message" placeholder="Tu mensaje" rows="6" required />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default ContactFormF;