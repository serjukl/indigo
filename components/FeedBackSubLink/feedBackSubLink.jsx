import React from 'react';
import styles from './feedBackSubLink.module.sass';
import Link from "next/link";

const FeedBackSubLink = () => {
    return (
        <div className={styles.feedBackSubLink}>
            <h2>клієнти які скористались нашими послугами</h2>
            <Link  href={'/feedback'}>
                <a>Перейти до відгуків</a>
            </Link>
        </div>
    )
}
export default FeedBackSubLink