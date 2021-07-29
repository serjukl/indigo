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
    const[videos, videosHandler] = useState([
        [
            'https://player.vimeo.com/video/573931879',
            'https://player.vimeo.com/video/573931916',
            'https://player.vimeo.com/video/580644469'
        ],
        [
            'https://player.vimeo.com/video/573931947',
            'https://player.vimeo.com/video/573931979',
            'https://player.vimeo.com/video/573932004'
        ],
        [],[]
    ])
    const[showTextIndex, showTextIndexHandler] = useState(null)
    const grybok = [
        'https://serving.photos.photobox.com/67859852a10c8ec51952c1663f016e30a2fd3493b186a8ccbfa223c480e5868d81ff57a9.jpg',
        'https://serving.photos.photobox.com/76555119e16cdf680aa3a35d85b88853d188901d27ca86e4bd05b5bbb78c90502d839010.jpg',
        'https://serving.photos.photobox.com/71840471112cffc06d4241695bce657fc55ba179f3cb4848f7d62bbf8bb359699a6193de.jpg',
        'https://serving.photos.photobox.com/772213046456e918682417b400803ce4dc5a52b61c1e868700a06e42385ff42a2b7beba3.jpg',
        'https://serving.photos.photobox.com/8709483144cfc23d9a79c91742b68890beca0cd033d69aea707559a87a1b6a949cf864dd.jpg',
        'https://serving.photos.photobox.com/64689912cef2df579c16091e47fbf04e79a040c33db25087717fc73f591f7077268a2b58.jpg',
        'https://serving.photos.photobox.com/03472982916fcaf95cb248927912de94253a0180993bfea0b02885f74f572b20a5de28f3.jpg',
        'https://serving.photos.photobox.com/36932029c1ff4894dd8dde583c40863811bb829897586574104201f8f9700bf4b97934df.jpg',
        'https://serving.photos.photobox.com/231512116a9f414643e60e1e56be223eda505afa164935bfa03528678182e50c14b4f1b2.jpg',
        'https://serving.photos.photobox.com/27653602ded0edf8f2e1ab3750be80f016a050191a030c8eb8064129b3c60e10b16fa5b1.jpg',
        'https://serving.photos.photobox.com/0284484268715ede625765155fa32a9e671d593c6ee482a01713e0eb4c7eac239672f0ca.jpg',
        'https://serving.photos.photobox.com/36748985f5acf8d6e3825a4debf53bc5b7459312506fbbbc4b2ad7db0a32b0a19348be63.jpg',
        'https://serving.photos.photobox.com/55451357e71a07dbc6734ea2bec94e2290c228932cf0736c445cc12584845a1979e217de.jpg',
        'https://serving.photos.photobox.com/94398694b285f3dfed0c52412843c3af8dedd4f7ae9387e0d1a28d48a2c8840eb0b87381.jpg',
    ]
    const opalennya = [
        'https://serving.photos.photobox.com/61038953042496738332b114f201997907df25c5bce63eccba96841dc01a65764b6d459e.jpg',
        'https://serving.photos.photobox.com/642787805de1718a702c34e225a6c2d442093e47df7bd64850add93e68bcf5f2d8bad37d.jpg',
        'https://serving.photos.photobox.com/08993704519c6d6ffa68ef27aa715d81f52899c83908d00804eca3d88428483ff273795c.jpg',
        'https://serving.photos.photobox.com/93417646f5ff2c5f9ac82d50397c233975114db01ce00470a1a559f46ab1c5788eea6ed3.jpg',
        'https://serving.photos.photobox.com/38569147bece45dcb44f7dde8456cb68f1bee14ba102e54b69c8d0d31b59df9d7b751892.jpg',
        'https://serving.photos.photobox.com/56716463bd60688a4b211cd8e7c5f8b4453a14c07bee1f058c2c2d9cb3132e73e967bb54.jpg',
        'https://serving.photos.photobox.com/734492519f64ec800deb0059fe05be89d7be39841bb7c33a9e15ebac0395258fe1ebcb3c.jpg',
        'https://serving.photos.photobox.com/58868418f62844213984a1386c80f1a82d5abd8138b52f7f27c02611062700c1273af382.jpg',
        'https://serving.photos.photobox.com/71792070a436c7abc31cf319bc0ecad750d87f632bf43c7d1b412f0f1ad76bc553dc89bf.jpg',
        'https://serving.photos.photobox.com/762094404be8477a08be78b7389bda2eeabea1545f4a8a689594358781a1a0790ce0b7e8.jpg',
        'https://serving.photos.photobox.com/224874281dd655baf1ee88f14c4d15ba440eedc837c3d537047c8b65160dfc551601a594.jpg',
    ]
    const gidro = [
        'https://serving.photos.photobox.com/9060610706c5b882efd9de8bd8c667e7c116be3d33897b076f421cbc5481f0a144f46b41.jpg',
        'https://serving.photos.photobox.com/832738137a5466b3fb8d8c73dfe91ad11edd99717c1db13d48758694a02787c179dac258.jpg',
        'https://serving.photos.photobox.com/00384255821dbd890941c3438023762504a1642a8095b10516e868906d685664403965d6.jpg',
        'https://serving.photos.photobox.com/29615708828c6e471fa269f115317849653ed849b818243c8e6bacd66da60079e95e2fd9.jpg',
        'https://serving.photos.photobox.com/94311871ccb8c7f68c222dde5a6006f967b541539c5fa1621c3a504066fd7a0bbd864190.jpg',
    ]
    const ozon = [
        'https://serving.photos.photobox.com/16858971e721a641f884eb9d29221d2bd8a596f877fa81dcffe095b916133086582a4e08.jpg',
        'https://serving.photos.photobox.com/1290151297fbfa40e8f6d3f94e86ae2e3a4bd6f2d333480de18e30cdc16ec4823a581593.jpg',
        'https://serving.photos.photobox.com/78187428d17a49c98ad577a1ea2b52723fe10ecc0e1ce1b48656628e0daf8db81ca55fa9.jpg',
        'https://serving.photos.photobox.com/7146071329e44f9e66289d04633a6c62986cf081d3074a07f4c9d90d38cdc1d9f4f8ef97.jpg',
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
    const ozonText = [
        {
            title: 'Чим хороший озон?',
            text: `
                Озон - це газ, по своїй суті - модифікація кисню. У своїй природі озон утворюється після того
                як крізь повітря проходить електричний розряд. Озон має дуже високу здатність окислятись. Він ефективний
                відносно бактерій, вірусів, цвілі та грибка.
            `
        },
        {
            title: 'Для чого використовується озонування',
            text: `
                Дезінфекція приміщення набагато ефективніша ніж хлор. По-перше, озон сам по собі сильніший, а по-друге
                будучи газом він проникає всюди - в щилини та пори. Нейтралізувати неприємні запахи (усуває причину 
                а не маскує їх). Знищити всіх комах, їх гнізда і личинки. Діє навіть на пилових кліщів
            `
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
    
   
    
    let images = chosen === 1 ? grybok : chosen === 2 ? opalennya : chosen === 3 ? gidro : ozon
    let text = chosen === 1 ? grybokText : chosen === 2 ? opalennyaText : chosen === 3 ? gidroText : ozonText
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
                <meta property="og:title" content="Індіго Експерт - професійне знищення грибка" />
                <meta property="og:site_name" content="Індіго Експерт - професійне знищення грибка" />
                <meta property="og:url" content="https://indigo-expert.com.ua/" />
                <meta property="og:description" content="Знищення та виведення грибка, методи виведення грибком з стін, м. Івано-Франківськ індіго експерт" />
                <meta property="og:image" content="https://scontent.fiev25-1.fna.fbcdn.net/v/t1.0-1/c210.0.540.540a/44539065_1132148556940440_3142985560302288896_n.jpg?_nc_cat=105&ccb=2&_nc_sid=dbb9e7&_nc_ohc=QNGaPiyKMRIAX9EP4_c&_nc_ht=scontent.fiev25-1.fna&oh=b18bc64c7d580efdfaaa920e863c02f0&oe=5FE38489" />
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
                
               <div className={styles.videoContainer}>
                            
                        {
                            videos[chosen - 1].length > 0
                                ? videos[chosen - 1].map((item, key) => {
                                    return (
                                        <iframe src={item} key={key + videos[chosen - 1].length - Math.random()} width="640" height="564" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen/>
                                    )
                                })
                                : null
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
