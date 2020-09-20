import React from 'react';
import styles from './contact.module.sass'

const Contact = () => {
    return (
        <div className={styles.contact}>
            <div className={styles.mapContainer}>
                <a href="#" id='contact'>вул. Максимовича 15 Івано-Франківськ</a>
            </div>
            <div className={styles.line} />
            <div className={styles.tellsContainer}>
                <a href="tel:0977332783">0977332783</a>
                <a href="tel:0668120205">0668120205</a>
            </div>
            <div className={styles.line} />
            <div className={styles.logo}>
                <a href={'#'}>
                    <svg width="80"hight="50"viewBox="0 0 184 184" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M168.667 92.0002C168.667 49.6802 134.32 15.3335 91.9999 15.3335C49.6799 15.3335 15.3333 49.6802 15.3333 92.0002C15.3333 129.107 41.7066 160.003 76.6666 167.133V115H61.3333V92.0002H76.6666V72.8335C76.6666 58.0368 88.7033 46.0002 103.5 46.0002H122.667V69.0002H107.333C103.117 69.0002 99.6666 72.4502 99.6666 76.6668V92.0002H122.667V115H99.6666V168.284C138.383 164.45 168.667 131.79 168.667 92.0002Z" fill="#F57170"/>
                    </svg>
                </a>
                <div>
                    <a href="#">
                        INDIGO FACEBOOK
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact
