import React from 'react';
import styles from './feedBackSubLink.module.sass';
import Link from "next/link";

const FeedBackSubLink = () => {
    return (
        <div className={styles.feedBackSubLink}>
            <div className={styles.feed}>
                <h2>клієнти які скористались нашими послугами</h2>
                <Link  href={'/feedback'}>
                    <a>Перейти до відгуків</a>
                </Link>
            </div>
            <div className={styles.partners}>
                <h2>Наші партнери</h2>
                <Link  href={'/partner'}>
                    <a>Перейти до партнерів</a>
                </Link>

            </div>
        </div>
    )
}
export default FeedBackSubLink