import React,{useRef} from 'react'
import emailjs from "emailjs-com"
import classes from "./ContactForm.module.css"

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
            "service_vo6m80m",
            "template_2xqe41b",
            form.current,
          "user_lQpxdbXovWfyhlJP6gXgT"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
        e.target.reset();
    };
    return (
        <form className={classes.contactForm} ref={form} onSubmit={sendEmail}>
        <div className={classes.formBox}>
          <label htmlFor="name">Name</label>
          <input
            className={classes.nameInput}
            type="text"
            name="name"
            placeholder="Nom/Prénom"
          />
        </div>
  
        <div className={classes.formBox}>
          <label htmlFor="email">Email</label>
          <input
            className={classes.emailInput}
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
  
        <div className={classes.formBox}>
          <label htmlFor="subject">Subject</label>
          <input
            className={classes.subjectInput}
            type="text"
            name="subject"
            placeholder="Sujet"
          />
        </div>
  
        <div className={classes.formBox}>
          <label htmlFor="message">Message</label>
          <textarea
            className={classes.messageArea}
            name="message"
            placeholder="Message ..."
            rows="10"
            cols="40"
          />
        </div>
        <input type="submit" value="Envoyer" className={classes.formBtn} />
      </form>
    )
}

export default ContactForm
