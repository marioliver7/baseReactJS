import React from 'react';
import styles from '../styles/Header.module.scss';

export default function Header() {
    return (
        <div className={styles.HeaderContainer}>
            <div className={styles.logo}>
                <h2>LOGO</h2>
            </div>

            <div className={styles.navBar}>
                <nav>
                    <ul>
                        <li><a href="#">Início</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Informações</a></li>
                        <li className={styles.button}><a href="#">Começar</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}