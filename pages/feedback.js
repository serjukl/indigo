import React, {useState, useEffect} from "react";
import styles from '../styles/FeedBack.module.sass'
import Link from "next/link";
import Nav from "../components/Nav/nav";
import Head from "next/head";
import Contact from "../components/Contact/contact";
import Footer from "../components/Footer/footer";
import firebase from "firebase";
const Feedback = () => {
    const [setFeedState, setFeedStateHandler] = useState(false)
    const [nameInput, nameInputHandler] = useState(null)
    const [feedAnon, feedAnonHandler] = useState(false)
    const [messageInput, messageInputHandler] = useState(null)
    const sendComment = (e) => {
        e.preventDefault();
        firebase.database().ref('comment').set(nameInput ? {name: nameInput, text: messageInput} : {text: messageInput});
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

                <div>
                    <div className={styles.feedbackHeader}>
                        <h2 className={styles.nameOfPerson}>Andry</h2>
                        <p className={styles.dataComment}>25.25.1220</p>
                    </div>
                    <p className={styles.message}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                        ccusantium animi commodi cumque dignissimos doloremque fugit harum hic maxime modi,
                        nesciunt nihil odit officia quis soluta tempora totam veniam. Quia, sunt?</p>
                    <div className={styles.responseContainer}>
                        <div className={styles.responseHeader}>
                            <h2 className={styles.nameOfPerson}>GRANDE PIZZERIA</h2>
                            <p className={styles.dataComment}>25.25.1220</p>
                        </div>
                        <p className={styles.message}>FROM ADMIN</p>
                    </div>
                </div>

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
