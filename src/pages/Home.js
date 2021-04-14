import React from 'react';

import Header from '../components/Header';
import Contact from '../components/Contact';
import ImageAside from '../components/ImageAside';

import styles from '../styles/Home.module.scss';

export default function Home() {
    return (
        <div className={styles.HomeContainer}>
            <div className={styles.container}>
                <Header />
                <Contact />
                <ImageAside />
            </div>
        </div>
    );
}
