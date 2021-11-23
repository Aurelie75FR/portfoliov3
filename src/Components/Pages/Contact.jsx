import React from 'react'
import ContactForm from '../UI/Form/ContactForm'
import classes from "./Contact.module.css"

const Contact = () => {
    return (
        <div className={classes.contactPage}>
            <ContactForm/>
        </div>
    )
}

export default Contact
