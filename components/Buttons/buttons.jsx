import React from 'react';
import styles from './buttons.module.sass'
const Buttons = () => {
    return (
        <div className={styles.btn}>
            <a href={'/feedback'}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0ZM12.8125 7.94433C13.2246 7.92003 13.597 8.16633 13.8794 8.6035L16.6138 13.789C16.9017 14.4035 16.7381 15.0614 16.3086 15.5005L15.0562 16.7529C14.9789 16.8588 14.928 16.9781 14.9268 17.1093C15.4071 18.9685 16.864 20.6834 18.1495 21.8628C19.4349 23.0421 20.8164 24.6388 22.6099 25.0171C22.8315 25.0789 23.1031 25.1011 23.2617 24.9536L24.7168 23.4717C25.2191 23.091 25.9457 22.9065 26.4819 23.2178H26.5063L31.4404 26.1304C32.1646 26.5844 32.2397 27.4619 31.7211 27.9956L28.3228 31.3672C27.8209 31.8819 27.1542 32.0549 26.5064 32.0557C23.6415 31.9698 20.9345 30.5637 18.711 29.1187C15.0613 26.4636 11.7136 23.1705 9.61183 19.1919C8.80577 17.5236 7.85887 15.3949 7.94923 13.5328C7.9573 12.8322 8.14683 12.1459 8.64017 11.6944L12.0386 8.29597C12.3033 8.0707 12.5652 7.95893 12.8125 7.94433Z" fill="#3A4750"/>
                </svg>
            </a>
             <a href={'/feedback'}>
                <svg width="40" height="40" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M41.8334 21C41.8334 9.5 32.5001 0.166672 21.0001 0.166672C9.50008 0.166672 0.166748 9.5 0.166748 21C0.166748 31.0833 7.33342 39.4792 16.8334 41.4167V27.25H12.6667V21H16.8334V15.7917C16.8334 11.7708 20.1042 8.5 24.1251 8.5H29.3334V14.75H25.1667C24.0209 14.75 23.0834 15.6875 23.0834 16.8333V21H29.3334V27.25H23.0834V41.7292C33.6043 40.6875 41.8334 31.8125 41.8334 21Z" fill="#3A4750"/>
                </svg>
             </a>
        </div>
    )
}
export default Buttons;