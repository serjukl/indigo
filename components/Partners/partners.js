import React from 'react';
import styles from './partners.module.sass'
const Partners = (props) => {
    return (
        <a href={props.item.link} className={styles.partnerItem}>
            <div className={styles.imageGood}>
                <img src={props.item.src} alt={'Логотипи компаній партнерів'}/>
            </div>
            <h2>{props.item.title}</h2>
        </a>
    )
}


export default Partners;