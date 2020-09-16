import React from "react";
import Link from 'next/link'
import {useDispatch, useSelector} from "react-redux";
import styles from './nav.module.sass'

const useNav = () => {
    const navState = useSelector((state) => state.isNavOpen)
    const dispatch = useDispatch()
    const isNavOpen = () =>
        dispatch({
            type: 'IS_NAV_OPEN',
        })
    const closeNav = () =>
        dispatch({
            type: 'CLOSE_NAV',
        })
    return { navState, isNavOpen, closeNav}
}


const Nav = () => {
    const { navState, isNavOpen, closeNav } = useNav()
    const links = [
        {
            name: 'Головна',
            link: '/'
        },
        {
            name: 'Продукція',
            link: '/#prod'
        },
        {
            name: 'Відгуки',
            link: '/feedback'
        },
        {
            name: 'Приклади робіт',
            link: '/works'
        },
        {
            name: 'Контакти',
            link: '/works'
        }
    ]
    return (
        <nav className={styles.nav}>
            <Link href="/">
                <a onClick={isNavOpen}>
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="25" cy="1.89655" r="1.89655" fill="#F57170"/>
                        <circle cx="24.9426" cy="27.5862" r="19.8851" stroke="#F57170" strokeWidth="3.21839"/>
                        <path d="M23.4483 5.05746H26.4369V11.5627V14.22V50H23.4483V14.22V11.5627V5.05746Z" fill="#F57170"/>
                        <path d="M24.9426 43.6782C33.8299 43.6782 41.0346 36.4735 41.0346 27.5862C41.0346 23.8334 39.7499 20.3806 37.5964 17.6437L35.4985 19.2529C37.3097 21.544 38.3909 24.4388 38.3909 27.5862C38.3909 35.0135 32.3699 41.0345 24.9426 41.0345C17.5153 41.0345 11.4943 35.0135 11.4943 27.5862C11.4943 24.4388 12.5755 21.544 14.3867 19.2529L12.2888 17.6437C10.1353 20.3806 8.85065 23.8334 8.85065 27.5862C8.85065 36.4735 16.0553 43.6782 24.9426 43.6782Z" fill="#F57170"/>
                        <path d="M24.9426 11.4942C24.4388 11.4942 23.9404 11.5174 23.4483 11.5627C20.2241 11.8596 17.2753 13.1076 14.8851 15.0237L16.5518 17.076C18.4859 15.5299 20.8561 14.5066 23.4483 14.22C23.939 14.1658 24.4375 14.1379 24.9426 14.1379C25.4477 14.1379 25.9462 14.1658 26.4369 14.22C29.0291 14.5066 31.3993 15.5299 33.3334 17.076L35.0001 15.0237C32.6099 13.1076 29.6611 11.8596 26.4369 11.5627C25.9448 11.5174 25.4464 11.4942 24.9426 11.4942Z" fill="#F57170"/>
                        <path d="M24.983 18.046C21.9912 18.046 19.2881 19.2353 17.3564 21.1494L18.9138 23.046C20.3901 21.4587 22.5355 20.4598 24.9233 20.4598C27.3111 20.4598 29.4564 21.4587 30.9327 23.046L32.6096 21.1494C30.6778 19.2353 27.9747 18.046 24.983 18.046Z" fill="#F57170"/>
                        <path d="M28.6207 26.092L26.3793 27.386L26.3793 24.7979L28.6207 26.092Z" fill="#F57170"/>
                        <path d="M21.2644 26.092L23.5058 27.386L23.5058 24.7979L21.2644 26.092Z" fill="#F57170"/>
                    </svg>
                    <h2>indigo</h2>
                </a>
            </Link>
            <ul className={navState ? styles.mobOpen : null}>
                {
                    links.map((link, key) => {
                        return (
                            <li key={key}>
                                <Link href={link.link}>
                                    <a onClick={closeNav}>
                                        { link.name }
                                    </a>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            <div className={styles.navigationIcons}>
                {
                    navState
                        ? <svg onClick={isNavOpen} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.1751 15L23.0835 8.09166C23.22 7.93225 23.2913 7.72718 23.2832 7.51745C23.2751 7.30772 23.1882 7.10877 23.0398 6.96036C22.8914 6.81195 22.6924 6.725 22.4827 6.7169C22.273 6.7088 22.0679 6.78014 21.9085 6.91666L15.0001 13.825L8.09181 6.90833C7.93489 6.75141 7.72206 6.66325 7.50014 6.66325C7.27822 6.66325 7.06539 6.75141 6.90847 6.90833C6.75155 7.06525 6.6634 7.27808 6.6634 7.5C6.6634 7.72192 6.75155 7.93474 6.90847 8.09166L13.8251 15L6.90847 21.9083C6.82124 21.983 6.75039 22.075 6.70037 22.1784C6.65035 22.2817 6.62224 22.3944 6.61781 22.5091C6.61338 22.6239 6.63271 22.7383 6.67461 22.8453C6.7165 22.9522 6.78005 23.0493 6.86127 23.1305C6.94248 23.2118 7.0396 23.2753 7.14654 23.3172C7.25348 23.3591 7.36792 23.3784 7.48268 23.374C7.59745 23.3696 7.71006 23.3415 7.81345 23.2914C7.91684 23.2414 8.00877 23.1706 8.08347 23.0833L15.0001 16.175L21.9085 23.0833C22.0679 23.2199 22.273 23.2912 22.4827 23.2831C22.6924 23.275 22.8914 23.188 23.0398 23.0396C23.1882 22.8912 23.2751 22.6923 23.2832 22.4825C23.2913 22.2728 23.22 22.0678 23.0835 21.9083L16.1751 15Z" fill="black"/>
                        </svg>
                        : <svg onClick={isNavOpen} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.5 22.5062C27.5 23.1937 26.9425 23.75 26.2562 23.75H16.2437C15.9139 23.75 15.5975 23.619 15.3643 23.3857C15.131 23.1525 15 22.8361 15 22.5062C15 22.1764 15.131 21.86 15.3643 21.6268C15.5975 21.3935 15.9139 21.2625 16.2437 21.2625H26.2562C26.9437 21.2625 27.5 21.8187 27.5 22.5062V22.5062Z" fill="black"/>
                            <path d="M27.5 15C27.5 15.6875 26.9425 16.2438 26.2562 16.2438H3.74375C3.41389 16.2438 3.09753 16.1127 2.86429 15.8795C2.63104 15.6462 2.5 15.3299 2.5 15C2.5 14.6701 2.63104 14.3538 2.86429 14.1205C3.09753 13.8873 3.41389 13.7563 3.74375 13.7563H26.2562C26.9437 13.7563 27.5 14.3138 27.5 15V15Z" fill="black"/>
                            <path d="M26.2562 8.7375C26.5861 8.7375 26.9025 8.60646 27.1357 8.37321C27.369 8.13997 27.5 7.82361 27.5 7.49375C27.5 7.16389 27.369 6.84753 27.1357 6.61429C26.9025 6.38104 26.5861 6.25 26.2562 6.25H11.2437C11.0804 6.25 10.9187 6.28217 10.7678 6.34467C10.6169 6.40718 10.4798 6.49879 10.3643 6.61429C10.2488 6.72978 10.1572 6.86689 10.0947 7.01779C10.0322 7.16869 10 7.33042 10 7.49375C10 7.65708 10.0322 7.81881 10.0947 7.96971C10.1572 8.12061 10.2488 8.25772 10.3643 8.37321C10.4798 8.48871 10.6169 8.58032 10.7678 8.64282C10.9187 8.70533 11.0804 8.7375 11.2437 8.7375H26.2562Z" fill="black"/>
                        </svg>
                }
            </div>
        </nav>
    )
}

export default Nav