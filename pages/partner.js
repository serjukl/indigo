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
                        <title>Партнери компанії індіго експерт</title>
                        <meta name="msapplication-TileColor" content="#000000"/>
                        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
                        <meta name="theme-color" content="#000000"/>
                        <meta name="description"
                              content="індіго експерт - компанія, яка має надійних партнерів в місті Івано-Франківськ"/>
                        <meta name="robots" content="index,follow"/>
                        <meta name="keywords"
                              content="партнери індіго експерт з якими компаніями співпрацює індіго експерт "/>
                        <meta name="google-site-verification" content="hLL3b-cRafAUAClrSSzfIPZ3ALPEBbDYHI6Xk7t9sVY" />
                        <meta property="og:title" content="Індіго Експерт - професійне знищення грибка" />
                        <meta property="og:site_name" content="Індіго Експерт - професійне знищення грибка" />
                        <meta property="og:url" content="https://indigo-expert.com.ua/" />
                        <meta property="og:description" content="Знищення та виведення грибка, методи виведення грибком з стін, м. Івано-Франківськ індіго експерт" />
                        <meta property="og:image" content="https://scontent.fiev25-1.fna.fbcdn.net/v/t1.0-1/c210.0.540.540a/44539065_1132148556940440_3142985560302288896_n.jpg?_nc_cat=105&ccb=2&_nc_sid=dbb9e7&_nc_ohc=QNGaPiyKMRIAX9EP4_c&_nc_ht=scontent.fiev25-1.fna&oh=b18bc64c7d580efdfaaa920e863c02f0&oe=5FE38489" />
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
