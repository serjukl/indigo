import React from 'react';
import styles from './goods.module.sass'
const Goods = () => {
    return (
        <div className={styles.goods}>
            <div className={styles.imageGood}>
                <img src={require('../../public/images/Rectangle 12.png')} alt={'good'}/>
            </div>
            <h2>Товар товаруОпис 2</h2>
            <p>Опис товаруОпис товаруОпис товаруОпис товаруОпис товаруОпис </p>
        </div>
    )
}

export default Goods;