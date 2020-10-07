import React, {useEffect} from 'react';
import Nav from "../components/Nav/nav";
import styles from "../styles/partner.module.sass";
import Partners from "../components/Partners/partners";
import Head from "next/head";

const Partner = (props) => {

const goodImages = [
            {
                src:'/images/horyzont-logo.png',
                title:'Горизонт',
                link:'https://horyzont.if.ua/',
                desc: 'Напівсуха стяжка "Горизонт"\n' +
                    'для квартир, приватних будинків, гаражів'
            }
        ]

        return (
                <div>
                    <Head>
                        <meta charSet="utf-8"/>
                        <title>Партнери компанії INDIGO EXPERT</title>
                        <meta name="msapplication-TileColor" content="#000000"/>
                        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
                        <meta name="theme-color" content="#000000"/>
                        <meta name="description"
                              content="INDIGO EXPERT - компанія, яка має надійних партнерів в місті Івано-Франківськ"/>
                        <meta name="robots" content="index,follow"/>
                        <meta name="keywords"
                              content="партнери INDIGO EXPERT, з якими компаніями співпрацює INDIGO EXPERT "/>
                    </Head>
                <Nav />
                <section className={styles.partnerContainer}>
                    {
                        goodImages.map((image, index) => {
                            return <Partners key={index} item={image} />
                        })
                    }
                </section>
            </div>

        );

}

export default Partner;
