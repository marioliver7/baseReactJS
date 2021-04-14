import React from 'react';
import styles from '../styles/Contact.module.scss';

export default function Contact() {
    return (
        <div className={styles.ContactContainer}>
            <h1>Contact</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <button type="button">Leia Mais</button>
        </div>
    );
}