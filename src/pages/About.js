import { React, useEffect } from "react";
// import styles from './About.module.css';

const About = () => {
    useEffect(() => {
        document.title = "Prime Burger - Sobre"
    }, []);
    
    return (
        <div>Sobre</div>
    )
}
 
export default About