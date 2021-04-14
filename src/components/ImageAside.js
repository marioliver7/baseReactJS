import React from 'react';
import styles from '../styles/ImageAside.module.scss';
import image from '../assets/img/contact.webp';

export default function ImageAside() {
    return (
        <div className={styles.ImageAsideContainer}>
            <img src={image} />
        </div>
    );
}