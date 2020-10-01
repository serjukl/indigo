import React, {useEffect, useState} from 'react';
import Nav from "../components/Nav/nav";
import styles from "../styles/detailInfo.module.sass";
import Lightbox from "react-image-lightbox";
import Head from "next/head";

const DetailInfo = () => {

    const[isOpen, isOpenHandler] = useState(false)
    const[photoIndex, photoIndexHandler] = useState(0)
    const[chosen, chosenHandler] = useState(1)
    const[showTextIndex, showTextIndexHandler] = useState(null)

    const images = [
        'https://serving.photos.photobox.com/8014888273b33b1a87950d67f8b3375cec5abd74734fa403ad433aed25c6958d3b07a2cd4ad38bbbc0878929.jpg',
        'https://serving.photos.photobox.com/08624433f2abc10c649a3d58f2703bbadfce966257904a273b29712bd1c0044a8c9d79e8.jpg',
        'https://serving.photos.photobox.com/06067535d0bfeec5db59fb960a1a1cd0ad7f0b1f1370414c411c570ae30cfcf1f2b4b8fb.jpg',
        'https://serving.photos.photobox.com/189948333ab5bf858dc70a6534ecbd13402f2a9078201c7dd3a96d76b2e7f2f97f094f0d.jpg',
        'https://serving.photos.photobox.com/26225861d637e360784755dd657cb7646f10c2a0afd458d0d0614fe194a1f42e05f8b7e8.jpg',
        'https://serving.photos.photobox.com/043149103a412647d8f13a9cd7d141bf7bd7cff5d1ab76e838b504737f980f7009e30252.jpg',
    ]
    const text = [
        {
            title: 'Інфрачервоне опалення - приручене сонце',
            text: 'Вам коли-небудь доводилося грітися в сонячних променях, тоді як термометр показував температуру нижче' +
                ' нуля? Якщо доводилося, то напевно у вас виникало бажання випробувати це незабутнє відчуття ще безліч' +
                ' разів. Інфрачервоні обігрівачі, про які піде мова, створюють такий же тепловий ефект, як сонце. Вони' +
                ' посилають теплові промені, що поглинаються поверхнями стін, підлоги, предметів меблів, а ті, в свою' +
                ' чергу, віддають це тепло навколишньому повітрю.'
        },
        {
            title: 'Що таке інфрачервоне опалення',
            text: 'Для початку нагадаємо деякі елементарні поняття. Будь-яке нагріте тіло віддає тепло оточуючим його предметам трьома' +
                ' способами: за допомогою теплопровідності (теплообмін між двома тілами через поверхню розділу між ними), конвекцією' +
                ' (процес перенесення тепла шляхом нагрівання рідини чи газу, оточуючих нагріте тіло, а від них уже навколишніх предметів) і тепловим' +
                ' випромінюванням (електромагнітне випромінювання в інфрачервоному діапазоні довжини хвиль, що випускається' +
                ' тілом).Інфрачервоним обігрівачем, в принципі, можна вважати будь-яке нагріте тіло, що віддає тепло в основному випромінюванням, у той час' +
                ' як інші шляхи передачі тепла від нього зведені до мінімуму'

        },
        {
            title: 'Що таке ІЧ-промені (інфрачервоні промені)',
            text: 'Інфрачервоні (ІЧ) промені - це електромагнітне випромінювання, що підкоряється законам оптики і, отже, має ту ж' +
                ' природу, що і видиме світло. Ці промені займають спектральну область між червоним видимим світлом (довжина хвилі 0,74 мкм) і' +
                ' короткохвильовим радіовипромінюванням (1-2 мм). У свою чергу, інфрачервону область спектру умовно поділяють на' +
                ' короткохвильову (від 0,74 до 2,5 мкм), середньохвильову (2,5-50 мкм) і довгохвильову (50-1000 мкм) частини. ІЧ-промені' +
                ' виділяються всіма нагрітими твердими і рідкими тілами. При цьому довжина випромінюваної хвилі залежить від температури' +
                ' тіла - чим вона вища, тим коротше хвилі і вище інтенсивність випромінювання. Хочемо також нагадати, що при' +
                ' невисоких температурах випромінювання нагрітого твердого тіла майже цілком розташоване в інфрачервоній області, і таке' +
                ' тіло здається темним. При підвищенні температури випромінювані предметом хвилі зміщуються у видиму область спектру, і предмет' +
                ' спочатку здається темно-червоним, потім червоним, жовтим і, нарешті, при високих температурах - білим'

        },
        {
            title: 'Для чого ми про це розповіли?',
            text: 'Перш за все, щоб читач зміг розібратися в можливій плутанині, яка може виникнути в поняттях та термінології. Один виробник' +
                ' пише, що його обігрівачі інфрачервоні, другий - що довгохвильові, третій - що темні, четвертий - що світлі. Всі ці прилади' +
                ' є інфрачервоними, але використовуються в них хвилі довжиною приблизно від 1 до 20 мкм. Просто ті з них, які називають' +
                ' довгохвильовими, мають невисоку температуру випромінюючої поверхні і тому виділяють хвилі найбільш довгі з використовуваного' +
                ' діапазону. Їх же називають темними - при робочій температурі поверхні до 300-400 ° С обігрівачі не світяться. Короткохвильові' +
                ' випромінювачі з максимальною температурою (вище 800 ° С) називають білими або світлими.'

        },
        {
            title: 'Принцип ІЧ-опалення (інфрачервоного опалення)',
            text: "Теплове випромінювання від інфрачервоного обігрівача, як ми з'ясували, не поглинається повітрям. Тому вся" +
                ' енергія від приладу майже без втрат досягає предметів і людей в зоні його дії. І гріє саме їх, а не' +
                ' повітря, як відбувається при використанні конвекторів. Іншими словами, тепло від інфрачервоного обігрівача' +
                ' передається, в першу чергу, твердотілим предметам (підлога, стіни, меблі тощо), а вже від них - повітрю. Природно, чим' +
                ' ближче до інфрачервоних обігрівачів, тим щільніше потік тепла і вище температура предметів. Причому виділення' +
                ' тепла від інфрачервоного обігрівача відбувається тільки в зоні його прямої дії, тобто обігрів носить локальний' +
                ' характер. Це і забезпечує інфрачервоному обігрівачу цілий ряд особливостей, частина з яких вельми корисна в споживчому плані.' +
                'При використанні локального "догріву" за допомогою інфрачервоних зон, в яких знаходяться люди, можна дозволити' +
                ' собі зниження температури, створюваної основною системою опалення в усьому приміщенні, на кілька градусів. При цьому' +
                ' температура, що "відчувається", залишиться незмінною, оскільки зниження загальної температури повітря компенсуватиметься' +
                ' ІЧ-"добавкою", що поглинається безпосередньо людським тілом. Таким чином, використання інфрачервоних обігрівачів призводить до зниження' +
                ' споживання енергії і зменшення витрат на обігрів в порівнянні з традиційними способами його здійснення.'

        },
        {
            title: 'І ще трохи про виділення і поглинання інфрачервоних променів.',
            text: 'Цього разу мова піде про людський організм. Всі нагріті тіла випромінюють інфрачервоні промені. Наприклад, Земля, прогріта' +
                ' сонцем, випромінює їх у смузі від 7 до 14 мкм з піком інтенсивності близько 10 мкм. І організм людини винятком із цього правила' +
                ' не є - він випромінює ІЧ-промені в діапазоні від 3 до 50 мкм з піком в 9,6 мкм. Причому не тільки випромінює, але й інтенсивно' +
                ' поглинає - при довжині хвилі 9,6 мкм вони найбільш глибоко проникають в тіло. Саме на цій властивості ІЧ - випромінювання заснований' +
                ' ефект теплового лікування, широко використовуваного у фізіотерапевтичних кабінетах. Промені як з більшою, так і з меншою довжиною' +
                ' хвилі проникають в організм менш глибоко. Джерелами енергії для практично застосовуваних сьогодні інфрачервоних випромінювачів служать' +
                ' електрика, газ, рідке паливо (керосин) або гаряча вода.'

        },
    ]
    return (
        <div >
            <Head>
                <meta charSet="utf-8"/>
                <title>Додаткова інформація від компанії INDIGO EXPERT </title>
                <meta name="msapplication-TileColor" content="#000000"/>
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
                <meta name="theme-color" content="#000000"/>
                <meta name="description"
                      content="INDIGO EXPERT - компанія, яка відкрита у своїй діяльності і містить про себе всю детальну інформацію"/>
                <meta name="robots" content="index,follow"/>
                <meta name="keywords"
                      content="INDIGO EXPERT справка, документація компанії INDIGO EXPERT, все про компанію INDIGO EXPERT м. Івано-Франківськ, додаткова інформація про  компанія знищення грибка ІФ  "/>
            </Head>
            <Nav />

            <div className={styles.glBoxContainer} >
                <h1>Вся додаткова інформація від компанії Indigo-expert</h1>
                <div>
                    {
                        text.map((title,key) => {
                            return (
                                <div key={key}>
                                    <div className={styles.infoTitleContainer} onClick={() => showTextIndexHandler(key)}>
                                        <h1>{title.title}</h1>
                                        <div className={styles.getMoreInfo}>
                                            <h5>Показати детальніше</h5>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.7 8.64L8.2 11.14H7.5L5 8.64L5.7 7.93L7.35 9.57V4H8.35V9.57L10 7.92L10.7 8.64Z" fill="black"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div
                                        className={styles.popupText}
                                        style={{display: showTextIndex === key ? 'flex' : 'none'}}
                                    >
                                        <p>{title.text}</p>
                                        <button className={styles.exampleWorks}
                                                onClick={() => showTextIndexHandler(null)}
                                        >
                                            Закрити вкладку
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={styles.boxContainer}>
                    {
                        images.map((item,index) => {
                            return <div key={index} className={styles.photo}>
                                <img src={item}  alt="" onClick={() => isOpenHandler(true)}/>
                            </div>
                        })
                    }
                </div>

                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => isOpenHandler(false)}
                        onMovePrevRequest={() =>
                            photoIndexHandler((photoIndex + images.length - 1) % images.length)
                        }
                        onMoveNextRequest={() =>
                            photoIndexHandler((photoIndex + 1) % images.length)
                        }
                    />
                )}
            </div>

        </div>
    );
};

export default DetailInfo;