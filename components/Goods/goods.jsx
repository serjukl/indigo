import React from 'react';
import styles from './goods.module.sass'
const Goods = (props) => {
    return (
        <div className={styles.goods}>
            <div className={styles.imageGood}>
                <img src={props.item.src} alt={'good'}/>
            </div>
            <h2>{props.item.title}</h2>
            <p>{props.item.text}</p>
        </div>
    )
}

export default Goods;