import React from 'react';
import Aside from '../components/Aside';
import FormLogin from '../components/FormLogin';
import styles from '../styles/Login.module.scss';

export default function Login() {
    return (
        <div className={styles.LoginContainer}>
            <Aside />
            <FormLogin />
        </div>
    ); 
}