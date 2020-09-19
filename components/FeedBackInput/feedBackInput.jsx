import React from "react";
import styles from "./feedBackInput.module.sass"
const FeedBackInput = () => {
    return (
        <div className={styles.first}>
            <form className={styles.second}>
                <div>
                    <input type="text" name="Name" placeholder="І&#39;мя" className="styles.three"/>
                    <input type="checkbox" />
                </div>
                <div>
                    <input type="email" name="Email" placeholder="E-Mail" className="styles.three"/>
                </div>
                <div>
                    <textarea/>
                </div>

                <button className="form_button">Надіслати</button>

            </form>
        </div>
    )
}
export default FeedBackInput