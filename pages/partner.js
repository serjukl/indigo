import React from 'react';
import Nav from "../components/Nav/nav";
import style from "../styles/Home.module.sass";
import Partners from "../components/Partners/partners";
import Goods from "../components/Goods/goods";
import Footer from "../components/Footer/footer";
import Head from "next/head";

const Partner = () => {
const goodImages = [
            {
                src:'/images/image 5.jpg',
                title:'Пенекрит',
                text:'Пенекрит  - водонепроникний матеріал для гідроізоляції  швів та  тріщин в бетонних конструкціях при виконанні гідроізоляційних робіт.'
            },
            {
                src:'/images/image 6.jpg',
                title:'Пенетрон',
                text:'Пенетрон  - проникаюча гідроізоляція для бетону ю Повищує показники  водонепроникності  ,  міцності та морозостійкості бетону.'
            },
            {
                src:'/images/image 7.jpg',
                title:'Поліфлюід',
                text:'Поліфлюід  - являє собою безбарвний розчин глибокого проникнення для гідроізоляції пористих матеріалів. Він призначений для осушення поверхонь і захисту поверхонь від вологи  ,  не утворює плівки на поверхні, не змінює колір матеріалів, він містить антізамерзающіе і самоочищаються елементи, володіє фунгіцидними властивостями.'
            },
            {
                src:'/images/image 8.jpg',
                title:'E - Larix',
                text:'Засіб "E - Larix" прекрасно діє проти різних форм цвілі, дріжджових грибків з  діючим  дезинфікуючим ефектом. Представлений в механічному розпилювачі, який забезпечує легку маніпуляцію і полегшує ліквідацію цвілі навіть в важкодоступних місцях.'
            },
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
                              content="партнери INDIGO EXPER, з якими компаніями співпрацює INDIGO EXPERT "/>
                    </Head>
                <Nav />
                <section>
                    {
                        goodImages.map((image, index) => {
                            return <Partners key={index} item={image} />
                        })
                    }
                </section>
                <footer>
                    <Footer />
                </footer>
            </div>

        );

}

export default Partner;