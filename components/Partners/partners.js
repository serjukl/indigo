import React from 'react';
import styles from './partners.module.sass'
const Partners = (props) => {
    return (
        <div className={styles.goods}>
            <div className={styles.imageGood}>
                <a href={'#'}>
                <img src={props.item.src} alt={'good'}/>
                </a>
            </div>
            <h2>{props.item.title}</h2>
            <p>{props.item.text}</p>
        </div>
    )
}


export default Partners;