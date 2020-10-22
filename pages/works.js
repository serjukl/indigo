import React, {useEffect, useState} from 'react';
import Nav from "../components/Nav/nav";
import Services from "../components/Services/services";
import Lightbox from 'react-image-lightbox';
import styles from '../styles/works.module.sass'
import Link from 'next/link'
import Head from "next/head";
const Works = () => {


    const[isOpen, isOpenHandler] = useState(false)
    const[photoIndex, photoIndexHandler] = useState(0)
    const[chosen, chosenHandler] = useState(1)
    const[showTextIndex, showTextIndexHandler] = useState(null)
    const grybok = [
        'https://serving.photos.photobox.com/0284484268715ede625765155fa32a9e671d593c6ee482a01713e0eb4c7eac239672f0ca.jpg',
        'https://serving.photos.photobox.com/36748985f5acf8d6e3825a4debf53bc5b7459312506fbbbc4b2ad7db0a32b0a19348be63.jpg',
        'https://serving.photos.photobox.com/55451357e71a07dbc6734ea2bec94e2290c228932cf0736c445cc12584845a1979e217de.jpg',
        'https://serving.photos.photobox.com/94398694b285f3dfed0c52412843c3af8dedd4f7ae9387e0d1a28d48a2c8840eb0b87381.jpg',
    ]
    const opalennya = [
        'https://serving.photos.photobox.com/58868418f62844213984a1386c80f1a82d5abd8138b52f7f27c02611062700c1273af382.jpg',
        'https://serving.photos.photobox.com/71792070a436c7abc31cf319bc0ecad750d87f632bf43c7d1b412f0f1ad76bc553dc89bf.jpg',
        'https://serving.photos.photobox.com/762094404be8477a08be78b7389bda2eeabea1545f4a8a689594358781a1a0790ce0b7e8.jpg',
        'https://serving.photos.photobox.com/224874281dd655baf1ee88f14c4d15ba440eedc837c3d537047c8b65160dfc551601a594.jpg',
    ]
    const gidro = [
        'https://serving.photos.photobox.com/00384255821dbd890941c3438023762504a1642a8095b10516e868906d685664403965d6.jpg',
        'https://serving.photos.photobox.com/29615708828c6e471fa269f115317849653ed849b818243c8e6bacd66da60079e95e2fd9.jpg',
        'https://serving.photos.photobox.com/94311871ccb8c7f68c222dde5a6006f967b541539c5fa1621c3a504066fd7a0bbd864190.jpg',
    ]

    const grybokText = [
        {
            title: 'Методи боротьби із грибком',
            text: '-	Наші спеціалісти проводять діагностику приміщень та визначають проблему на обєктах вражених грибком та вологістю .'+
               ' -	Проводяться висушувальні роботи без пошкоджень приміщень'+
               ' -	При потребі оброляється  хімічним європейським препаратом  “E-larix”'+
               ' -	Прибирається з приміщення надлишок вологи завдяки потужним вологозберачам'+
               ' -	Проводяться інєкційні та гідроізоляційні роботи'+
               ' -	Якісно , швидко і акуратно   виконуємо роботу'
        },
        {
            title: 'Переваги нашої роботи',
            text: '-	Новітня технологія інфрачервоних приладів  Індіго  позволяє висушити  бетонні  та цегляні поверхні' +
                '   до 3500 см  , чим забеспечує усунення вологи та знищення грибка ' +
                '-	Висушує  область повехней  без  пошкодженнь в приміщень  з ремонтом'+
                '-	Не шкодить  організму людини та тварин'+
                '-	Забеспечує висушування до 100% ефективності'+
                '-	Швидко , ефективно , якісно'

        },
    ]
    const opalennyaText = [
        {
            title: 'Довгохвильовий обігрівач та його принцип дії',
            text: 'Довгохвильовий обігрівач - (англ. far infrared heater) панельний інфрачервоний обігрівач, випромінюючий' +
                ' довгі інфрачервоні хвилі, використовується в опаленні з 1967 р. в Європі. Країна' +
                ' винахідник Швеція. Поширення теплових променів з довжиною хвилі — λ = від 3000 до 10 000 нм, не зачіпає' +
                ' повітря. За аналогією з сонячним теплом нагріваються поверхні. Підлоги, предмети, стіни, акумулюють' +
                ' тепло і віддають його в навколишній простір. Можливість установки на стелі не псує дизайн приміщення. Тепло від' +
                " довгохвильових інфрачервоних обігрівачів залишається невидимим, нечутним і корисним для здоров'я людини"
        },
        {
            title: 'Основа економії',
            text: 'По-перше - стельові панелі подібно до сонця прогрівають предмети і відповідно температура повітря в приміщенні' +
                ' може бути на 3С менше, а відчутна тілом температура залишиться в межах 20С. По-друге, мінімальний перепад температури' +
                ' від підлоги до стелі-всього 0,3 С/м, що майже в 10 разів менше конвекції. Енепргозберігаючий потенціал такого' +
                ' опалення, в порівнянні з повітряним дорівнює 40%.'
        },
        {
            title: 'Місця ефективного застосування',
            text: 'Серед найбільш поширених можна виділити, зокрема:  квартири, заміські будинки, офіси, ресторани, вуличні кафе, готелі, виставкові' +
                ' та спортивні зали, магазини, промислові будівлі, склади, веранди, альтанки, зимові сади, будівництво, сільське господарство'

        },
        {
            title: 'Переваги інфрачервоних довгохвильових обігрівачів',
            text: '1.	Відсутність додаткового теплоносія - інфрачервоне випромінювання взаємодіє безпосередньо з навколишніми' +
                ' поверхнями, нагріваючи їх, а вони, у свою чергу, віддають тепло повітрю.   2.	Абсолютно безпечне.'+
                " 3.	Екологічність. 4.	Локальний обігрів - Можливість локального обігріву окремих зон без обігріву всього об'єму приміщення."

        },
        {
            title: 'Абсолютно безпечне випромінювання для людини',
            text: 'Довгохвильове інфрачервоне випромінювання або теплове випромінювання - це те ж саме тепло, яке Ви вічуваєте від гарячої' +
                ' грубки, сонця або від батареї центрального опалення. Воно не має нічого спільного ні з ультрафіолетовим' +
                ' випромінюванням, ні з рентгенівським. Довгохвильове інфрачервоне випромінювання абсолютно безпечне для людини. Інфрачервоні' +
                ' промені застосовуються в медичних цілях, якщо випромінювання не дуже сильно. Вони позитивно впливають на організм людини. Довгохвильові' +
                ' інфрачервоні промені мають можливість підвищувати місцевий кровообіг в організмі, посилювати обмін речовин, розширювати' +
                ' кровение судини. Що говорить не тільки про його нешкідливості, але і про корисну дію на організм.'

        },
    ]
    const gidroText = [
        {
            title: 'Ефективність гідроізоляції',
            text: 'Наша компанія спеціалізується на виконанні робіт із захисту' +
                ' бетону, підвалу, фундаментів, паркінгів, овочесховищ, погребів, резервуарів, колодязів, септиків від' +
                ' впливу негативних природних факторів.' +
                'На сьогоднішній день проникаюча гідроізоляція - краще рішення' +
                ' в будівництві. Високі технічні показники Пенетрон документально підтверджені провідними інститутами України та Європи, а' +
                ' спектр його застосування вражає масштабністю.'
        },
        {
            title: 'Для чого використовується проникаюча гідроізоляція бетону в будівництві?',
            text: 'Пориста структура бетону обумовлює його високий рівень водопоглинання, що, в свою чергу, призводить' +
                ' до корозії арматури і руйнування бетону в цілому. -Крім того, при частих і сильних перепадах температури з плюсової' +
                ' на мінусову, що властиво нашим зимам, -вода, замерзаючи і розширюючись при цьому, також руйнує бетон. Проникаюча' +
                ' гідроізоляція відмінно -запобігає таким проблемам, як:' +
                ' -відшаровування обробки;'+
                ' -підвищена вологість, вогкість;'+
                ' -появі цвілі.'
        },
    ]
    const descriptGrybok = 'Приклади робіт з боротьбою проти грибка, які виконує компанія з міста Івано-Франківськ'
    const descriptopalennya = 'Приклади робіт та варіанти опалення для вашого дому і не тільки від компанії "індіго експерт" м. Івано-Франківськ'
    const descriptgidro = 'Приклади робіт - метод гідроїзоляції, переваги та ефективність цього методи про це все від компанії "індіго експерт" м. Івано-Франківськ'
    const titleGrybok = 'Знищення грибка'
    const titleOpalennya = 'Електричне опалення'
    const titleGidro = 'Гідроізоляція'
    const keywordsGrybok = 'Грибок, боротьба із грибком, знищення грибка, компанія по знищенню грибка м. Івано-Франківськ, компанія грибок ІФ, ІФ знищення грибка '
    const keywordsOpalennya = 'Опалення ІФ, опалення м. Івано-Франківськ, економічне опалення, грибок опалення, електричне опалення'
    const keywordsGidro = 'гідроізоляція бетону в будівництві, гідроізоляція ІФ, комнанія гідроізоляція м. Івано-Франківськ'
    let images = chosen === 1 ? grybok : chosen === 2 ? opalennya : gidro
    let text = chosen === 1 ? grybokText : chosen === 2 ? opalennyaText : gidroText
    let description = chosen === 1 ? descriptGrybok : chosen === 2 ? descriptopalennya : descriptgidro
    let title = chosen === 1 ? titleGrybok : chosen === 2 ? titleOpalennya : titleGidro
    let keywords = chosen === 1 ? keywordsGrybok : chosen === 2 ? keywordsOpalennya : keywordsGidro

    useEffect(() => {
        showTextIndexHandler(null)
    },[chosen])

    const setKey = (key) => {
        if (key === showTextIndex) {
            showTextIndexHandler(null)
        } else {
            showTextIndexHandler(key)
        }
    }

    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <title>{`індіго експерт ${title}`}</title>
                <meta name="msapplication-TileColor" content="#000000" />
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content={description} />
                <meta name="robots" content="index,follow" />
                <meta name="keywords" content={keywords} />
                <meta name="google-site-verification" content="hLL3b-cRafAUAClrSSzfIPZ3ALPEBbDYHI6Xk7t9sVY" />
            </Head>
            <Nav />
            <div style={{paddingTop: '60px'}}>
                <Services
                    chosen={chosen}
                    chosenHandler={(value) => chosenHandler(value)}
                />
            </div>
            <div>
                <div className={styles.btnContainer}>
                    <button type="button" className={styles.exampleWorks} onClick={() => isOpenHandler(true)}>
                        Переглянути фото виконаних робіт
                    </button>
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
            <div>

                {
                    text.map((title,key) => {
                        return (
                            <div key={key}>
                                <div className={styles.infoTitleContainer} onClick={() => setKey(key)}>
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
            <div className={styles.btnContainer}>
                <Link href="/detailInfo">
                    <button className={styles.exampleWorks} >
                    Переглянути детальну інформацію
                    </button>
                </Link>
            </div>
        </>
    );
};

export default Works;
