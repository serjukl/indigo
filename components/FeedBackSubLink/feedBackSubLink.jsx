import React from 'react';
import styles from './feedBackSubLink.module.sass';
import Link from "next/link";

const FeedBackSubLink = props => {
    return (
        <div className={styles.feedBackSubLink}>
            <div className={styles.feed}>
                <h2>{props.title}</h2>
                <Link  href={props.pageLink}>
                    <a>{props.linkText}</a>
                </Link>
            </div>

        </div>
    )
}
export default FeedBackSubLink