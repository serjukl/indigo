import React from 'react';
import styles from './review.module.sass'
const Review = () => {
    return (
        <div className={styles.review}>
           <div>
               <h1>Відгуки</h1>
               <h3>Ми раді почути вашу думку</h3>
           </div>
            <button className={styles.btn}>
                Залишити відгук
            </button>
        </div>

    )
}

export default Review
