import React from 'react';
import Aside from '../components/Aside';
import FormLogin from '../components/FormLogin';
import styles from '../styles/Register.module.scss';

export default function Register() {
    return (
        <div className={styles.RegisterContainer}>
            <Aside />
            <FormLogin />
        </div>
    );
}