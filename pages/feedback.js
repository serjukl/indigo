import React, { useState } from "react";
import styles from '../styles/FeedBack.module.sass'
import Link from "next/link";
import Nav from "../components/Nav/nav";
import Head from "next/head";
import database from '../firebaseConfig'
import Footer from "../components/Footer/footer";
import 'firebase/database';

const Feedback = ({data}) => {
    const [setFeedState, setFeedStateHandler] = useState(false)
    const [nameInput, nameInputHandler] = useState(null)
    const [feedAnon, feedAnonHandler] = useState(false)
    const [messageInput, messageInputHandler] = useState(null)

    const sendComment = (e) => {
        e.preventDefault();
        let commentsArr = data?.comments ? data.comments : []
        commentsArr.push(
            nameInput ? {
                name: feedAnon ? "Анонім" : nameInput.name,
                message: messageInput.message,
                date: new Date().toISOString().slice(0,10)
            }  : {message: messageInput, date: new Date().toISOString().slice(0,10)}
        )
        database.ref('comments').set(commentsArr)
        setTimeout(() => window.location.reload(), 500)
    }

    return (
        <div className={styles.feedBackSection}>
            <Head>
                <meta charSet="utf-8"/>
                <title>INDIGO EXPERT відгуки про нас</title>
                <meta name="msapplication-TileColor" content="#000000"/>
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
                <meta name="theme-color" content="#000000"/>
                <meta name="description"
                      content="INDIGO EXPERT - відгуки про нас та нашу роботу по знищенню грибка в місті Івано-Франківськ"/>
                <meta name="robots" content="index,follow"/>
                <meta name="keywords"
                      content="INDIGO EXPERT відгуки, залишити відгук про INDIGO EXPERT, INDIGO відгуки"/>
            </Head>
            <Nav/>
            <div className={styles.feedMain}>
                <h1>Відгуки</h1>
                <div className={styles.downFeedMan}>
                    <p>Ми були б раді почути Вашу думку</p>
                    <button onClick={() => setFeedStateHandler(!setFeedState)}>Написати</button>
                </div>
            </div>
            <h1>Нам цікава Ваша думка</h1>
            <div className={styles.flowScreenForm}>
                <form
                    className={setFeedState ? `${styles.formFeedContainer} ${styles.formFeedContainerActive}` : styles.formFeedContainer}
                    onSubmit={(e)=> sendComment(e)}
                >
                    <div className={styles.upFeedFrom}>
                        <input
                            onChange={(e) => nameInputHandler({name: e.target.value})}
                            className={feedAnon ? `${styles.nameInput} ${styles.dn}` : styles.nameInput}
                            type='text'
                            placeholder="ім'я"
                            id={"addname"}
                        />
                        <div style={{display: 'flex', alignItem: 'center'}}>
                            <p>Надіслати анонімно</p>
                            <div
                                className={
                                    feedAnon
                                        ? `${styles.checkBoxCustom} ${styles.checkBoxCustomActive}`
                                        : styles.checkBoxCustom
                                }
                                onClick={() => feedAnonHandler(!feedAnon)}
                            >
                                <div className={styles.ball}/>
                            </div>
                        </div>
                    </div>
                    <textarea
                        placeholder="Ми завжди раді Вам"
                        required
                        type = "text"
                        name="massage"
                        className={styles.feedMessage}
                        onChange={(e) => messageInputHandler({message: e.target.value})}
                    >
                            </textarea>

                    <button type={"submit"} className={styles.sendFeed} >send</button>

                </form>
            </div>



            <div className={styles.feedBackContainer}>

                {
                    data?.comments
                        ? data.comments.map((comment,key) => {
                            return (
                                <div key={key}>
                                    <div className={styles.feedbackHeader}>
                                        <h2 className={styles.nameOfPerson}>
                                            {
                                                comment.name || "Анонім"
                                            }
                                        </h2>
                                        <p className={styles.dataComment}>{comment.date}</p>
                                    </div>
                                    <p className={styles.message}>{comment.message}</p>
                                </div>
                            )
                        })
                        : null
                }

            </div>
            <div className={styles.refMenuFromFeed}>
                <div className={styles.textContainerRef}>
                    <h2>Виникли запитання?</h2>
                    <p>Отримайте консультацію</p>
                </div>
                <Link href='/#contact'>
                    <a className={styles.btnGoToMenu2}>
                        Перейти до контанків
                    </a>
                </Link>
            </div>
        <Footer />
        </div>
    )
}
    export default Feedback
