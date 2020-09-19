import React, {useState} from "react";
import styles from '../styles/FeedBack.module.sass'
import Link from "next/link";
import Nav from "../components/Nav/nav";

const Feedback = () => {
    const[setFeedState, setFeedStateHandler] = useState(false)
    const[nameInput, nameInputHandler] = useState(null)
    const[feedAnon, feedAnonHandler] = useState(false)
    const[messageInput, messageInputHandler] = useState(null)
    const sendComment = () => {
        alert('send')
    }
    return (
        <div className={styles.feedBackSection}>
            <Nav /> 
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
                >
                    <div className={styles.upFeedFrom}>
                        <input
                            onChange={(e) => nameInputHandler({name : e.target.value})}
                            className={feedAnon ? `${styles.nameInput} ${styles.dn}` : styles.nameInput}
                            type='text'
                            placeholder="ім'я"
                        />
                        <div style={{display:'flex',alignItem:'center'}}>
                            <p>Надіслати анонімно</p>
                            <div
                                className={
                                    feedAnon
                                        ? `${styles.checkBoxCustom} ${styles.checkBoxCustomActive}`
                                        : styles.checkBoxCustom
                                }
                                onClick={() => feedAnonHandler(!feedAnon)}
                            >
                                <div className={styles.ball} />
                            </div>
                        </div>
                    </div>
                    <textarea
                        placeholder="Ми завжди раді Вам"
                        className={styles.feedMessage}
                        onChange={(e) => messageInputHandler({message : e.target.value})}
                    >
                        </textarea>
                    <button onClick={sendComment} className={styles.sendFeed}>send</button>
                </form>
            </div>

            <div className={styles.feedBackContainer}>

                <div >
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
                    <h2>Скуштуйте та зробіть висновки</h2>
                    <p>Зробіть замовлення</p>
                </div>
                <Link  href='/'>
                    <a className={styles.btnGoToMenu2}>
                        Перейти в меню
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Feedback
