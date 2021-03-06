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
                      content="індіго експерт - відгуки про нас та нашу роботу по знищенню грибка в місті Івано-Франківськ"/>
                <meta name="robots" content="index,follow"/>
                <meta name="keywords"
                      content="індіго експерт відгуки, залишити відгук про INDIGO EXPERT, INDIGO відгуки"/>
                <meta name="google-site-verification" content="hLL3b-cRafAUAClrSSzfIPZ3ALPEBbDYHI6Xk7t9sVY" />
                <meta property="og:title" content="Індіго Експерт - професійне знищення грибка" />
                <meta property="og:site_name" content="Індіго Експерт - професійне знищення грибка" />
                <meta property="og:url" content="https://indigo-expert.com.ua/" />
                <meta property="og:description" content="Знищення та виведення грибка, методи виведення грибком з стін, м. Івано-Франківськ індіго експерт" />
                <meta property="og:image" content="https://scontent.fiev25-1.fna.fbcdn.net/v/t1.0-1/c210.0.540.540a/44539065_1132148556940440_3142985560302288896_n.jpg?_nc_cat=105&ccb=2&_nc_sid=dbb9e7&_nc_ohc=QNGaPiyKMRIAX9EP4_c&_nc_ht=scontent.fiev25-1.fna&oh=b18bc64c7d580efdfaaa920e863c02f0&oe=5FE38489" />
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
