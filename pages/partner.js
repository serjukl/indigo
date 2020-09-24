import React from 'react';
import Nav from "../components/Nav/nav";
import style from "../styles/Home.module.sass";
import Partners from "../components/Partners/partners";
import Goods from "../components/Goods/goods";
import Footer from "../components/Footer/footer";

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