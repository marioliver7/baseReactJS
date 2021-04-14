import React from 'react';
import styles from '../styles/FormLogin.module.scss';

import { FaUser, FaLock } from 'react-icons/fa';

export default function FormLogin() {

    return (
        <div className={styles.FormLoginContainer}>
            <form>
                <fieldset>
                    <legend>Login</legend>

                    <div>
                        <div className={styles.inputIcon}>
                            <input type="email" name="email" placeholder="Digite seu email" required />
                            <FaUser className={styles.icon} />
                        </div>

                        <div className={styles.inputIcon}>
                            <input type="password" name="senha" placeholder="********" />
                            <FaLock className={styles.icon} />
                        </div>

                        <div className={styles.btn}>
                            <button className={styles.btn1} type="button">Logar</button>

                            <button className={styles.btn2} type="button">Cadastre-se</button>
                        </div>

                    </div>
                    
                </fieldset>
            </form>
        </div>
    )
}