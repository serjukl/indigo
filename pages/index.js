import React from "react";
import Nav from "../components/Nav/nav";
import Header from "../components/Header/header";
import Production from "../components/Production/production";
import FeedBackInput from "../components/FeedBackInput/feedBackInput"
import Goods from "../components/Goods/goods";
import style from '../styles/Home.module.sass'
import FeedBackSubLink from "../components/FeedBackSubLink/feedBackSubLink";
import Contact from "../components/Contact/contact";
import Footer from "../components/Footer/footer";
const Index = () => {

    return (
        <>
            <header>
                <Nav />
                <Header />
            </header>
            <section>
                <Production />
            </section>
            <section className={style.goodContainer}>
                <Goods />
                <Goods />
                <Goods />
                <Goods />
            </section>
            <section>
                <FeedBackSubLink />
            </section>
            <section>
                <div className={style.mapContactContainer}>
                    <iframe width="100%" height="600" frameBorder="0" scrolling="no" marginHeight="0"
                            marginWidth="0"
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"/>
                    <Contact />
                </div>
            </section>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Index
