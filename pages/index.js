import React from "react";
import Head from "next/head";
import Nav from "../components/Nav/nav";
import Header from "../components/Header/header";
import Production from "../components/Production/production";
import Goods from "../components/Goods/goods";
import style from '../styles/Home.module.sass'
import FeedBackSubLink from "../components/FeedBackSubLink/feedBackSubLink";
import Contact from "../components/Contact/contact";
import Footer from "../components/Footer/footer";
const Index = () => {
const goodImages = [
    {
        src:'/images/image 5.jpg',
        title:'Пенекрит',
        text:'Пенекрит  - водонепроникний матеріал для гідроізоляції  швів та  тріщин в бетонних конструкціях при виконанні гідроізоляційних робіт.'
    },
    {
        src:'/images/image 6.jpg',
        title:'Пенетрон',
        text:'Пенетрон  - проникаюча гідроізоляція для бетону. Повищує показники  водонепроникності  ,  міцності та морозостійкості бетону.'
    },
    {
        src:'/images/image 7.jpg',
        title:'Поліфлюід',
        text:'Поліфлюід  - являє собою безбарвний розчин глибокого проникнення для гідроізоляції пористих матеріалів. Він призначений для осушення поверхонь і захисту поверхонь від вологи  ,  не утворює плівки на поверхні, не змінює колір матеріалів, він містить антізамерзающіе і самоочищаються елементи, володіє фунгіцидними властивостями.'
    },
    {
        src:'/images/larix.jpg',
        title:'E - Larix',
        text:'Засіб "E - Larix" прекрасно діє проти різних форм цвілі, дріжджових грибків з  діючим  дезинфікуючим ефектом. Представлений в механічному розпилювачі, який забезпечує легку маніпуляцію і полегшує ліквідацію цвілі навіть в важкодоступних місцях.'
    },
]

    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <title>INDIGO EXPERT - професійне знищення грибка</title>
                <meta name="msapplication-TileColor" content="#000000" />
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="INDIGO EXPERT - компанія із широким спектром послуг, якісними товарами та єфективними методи роботи з грибком в м. Івано-Франківськ " />
                <meta name="robots" content="index,follow" />
                <meta name="keywords" content="INDIGO EXPERT, грибок ІФ, засоби від грибка ІФ, товари боротьби із грибком м. Івано-Франківськ, як здолати грибок засоби, гідроізоляція, опалення ІФ, знищення грибка" />
            </Head>
            <header>
                <Nav />
                <Header />
            </header>
            <section  id='second'>
                <Production />
            </section>
            <section className={style.goodContainer} id='prod'>
                {
                    goodImages.map((image, index) => {
                        return <Goods key={index} item={image} />
                    })
                }

            </section>
            <section>
                <FeedBackSubLink
                    title={'клієнти які скористались нашими послугами'}
                    pageLink={'/feedback'}
                    linkText={'Перейти до відгуків'}
                />
            </section>
            <section id='contact'>
                <div className={style.mapContactContainer}>
                    <iframe width="100%" height="600" frameBorder="0" scrolling="no" marginHeight="0"
                            marginWidth="0"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8814.37353705389!2d24.723437097840808!3d48.94341355973691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730c1a30368a433%3A0x61a56ca6b122429c!2z0LLRg9C70LjRhtGPINCc0LDQutGB0LjQvNC-0LLQuNGH0LAsIDE1LCDQhtCy0LDQvdC-LdCk0YDQsNC90LrRltCy0YHRjNC6LCDQhtCy0LDQvdC-LdCk0YDQsNC90LrRltCy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDc2MDAw!5e0!3m2!1suk!2sua!4v1600546169529!5m2!1suk!2sua"/>
                    <Contact />
                </div>
            </section>
            <section>
                <FeedBackSubLink
                    title={'Наші партнери'}
                    pageLink={'/partner'}
                    linkText={'Перейти до партнерів'}
                />
            </section>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Index
