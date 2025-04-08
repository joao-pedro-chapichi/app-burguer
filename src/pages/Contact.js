import { React, useEffect } from 'react';
// import styles from '../pages/Contact.module.css';

const Contact = () => {
  useEffect(() => {
          document.title = "Prime Burger - Contato"
      }, []);
  
  return (
    <div>Contato</div>
  )
}

export default Contact;