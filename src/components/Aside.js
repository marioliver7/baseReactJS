import React from 'react';
import styles from '../styles/Aside.module.scss';
import images from '../assets/img/astronauta.jpg';

export default function Aside() {
    return (
        <div className={styles.AsideContainer}>
            <img src={images} alt="Astronauta aleatório" />
        </div>
    );
}