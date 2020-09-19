import React, {useEffect, useState} from 'react';
import Nav from "../components/Nav/nav";
import Services from "../components/Services/services";
import Lightbox from 'react-image-lightbox';
import styles from '../styles/works.module.sass'

const Works = () => {


    const[isOpen, isOpenHandler] = useState(false)
    const[photoIndex, photoIndexHandler] = useState(0)
    const[chosen, chosenHandler] = useState(1)
    const[showTextIndex, showTextIndexHandler] = useState(null)
    const grybok = [
        'https://serving.photos.photobox.com/71392107233a32a4eca9a0b51a072629c7c584a7126726cff672259d2577fc615ad8e4d5.jpg',
        'https://serving.photos.photobox.com/51034369949521b281298f666efdeb6c08ef8cd296c3f129ca2eab2e0e7f09c31e2733f8.jpg',
        'https://serving.photos.photobox.com/91437846a84e7536ca3ca790ab2f54b3ae881a711781a1836eb8ffd22b9adedf14e5ba6b.jpg',
        'https://serving.photos.photobox.com/7031735056f3d938f7222934cf7e83ce0607f48d0645933886de4db387aa037947ce1357.jpg',
    ]
    const opalennya = [
        'https://serving.photos.photobox.com/71392107233a32a4eca9a0b51a072629c7c584a7126726cff672259d2577fc615ad8e4d5.jpg',
        'https://serving.photos.photobox.com/51034369949521b281298f666efdeb6c08ef8cd296c3f129ca2eab2e0e7f09c31e2733f8.jpg',
    ]
    const gidro = [
        'https://serving.photos.photobox.com/71392107233a32a4eca9a0b51a072629c7c584a7126726cff672259d2577fc615ad8e4d5.jpg',
    ]

    const grybokText = [
        {
            title: 'Інфрачервоне опалення - приручене сонце',
            text: 'Вам коли-небудь доводилося грітися в сонячних променях, тоді як термометр показував ' +
                'температуру нижче нуля? Якщо доводилося, то напевно у вас виникало бажання випробувати' +
                ' це незабутнє відчуття ще безліч разів.' +
                'Інфрачервоні обігрівачі, про які піде мова, створюють такий же тепловий ' +
                'ефект, як сонце. Вони посилають теплові промені, що поглинаються поверхнями ' +
                'стін, підлоги, предметів меблів, а ті, в свою чергу, віддають це тепло навколишньому ' +
                'повітрю.'
        },
        {
            title: 'Що таке інфрачервоне опалення',
            text: 'Для початку нагадаємо деякі елементарні поняття. Будь-яке нагріте тіло ' +
                'віддає тепло оточуючим його предметам трьома способами: за допомогою теплопровідності ' +
                '(теплообмін між двома тілами через поверхню розділу між ними), конвекцією (процес ' +
                'перенесення тепла шляхом нагрівання рідини чи газу, оточуючих нагріте тіло, а від них ' +
                'уже навколишніх предметів) і тепловим випромінюванням (електромагнітне випромінювання в ' +
                'інфрачервоному діапазоні довжини хвиль, що випускається тілом)Інфрачервоним обігрівачем, ' +
                'в принципі, можна вважати будь-яке нагріте тіло, що віддає тепло в основному випромінюванням, у той час як інші шляхи передачі тепла від нього зведені до мінімуму.'
        },
    ]
    const opalennyaText = [
        {
            title: 'ОПАЛЕННЯ',
            text: 'лопфілопифлоптфі опалення'
        },
    ]
    const gidroText = [
        {
            title: 'GIDRO',
            text: 'лопфілопифлоптфі GIDRO'
        },
        {
            title: 'Що таке інфрачервоне опалення',
            text: 'Для початку нагадаємо деякі елементарні поняття. Будь-яке нагріте тіло ' +
                'віддає тепло оточуючим його предметам трьома способами: за допомогою теплопровідності ' +
                '(теплообмін між двома тілами через поверхню розділу між ними), конвекцією (процес ' +
                'перенесення тепла шляхом нагрівання рідини чи газу, оточуючих нагріте тіло, а від них ' +
                'уже навколишніх предметів) і тепловим випромінюванням (електромагнітне випромінювання в ' +
                'інфрачервоному діапазоні довжини хвиль, що випускається тілом)Інфрачервоним обігрівачем, ' +
                'в принципі, можна вважати будь-яке нагріте тіло, що віддає тепло в основному випромінюванням, у той час як інші шляхи передачі тепла від нього зведені до мінімуму.'
        },
    ]
    let images = chosen === 1 ? grybok : chosen === 2 ? opalennya : gidro
    let text = chosen === 1 ? grybokText : chosen === 2 ? opalennyaText : gidroText

    useEffect(() => {
        showTextIndexHandler(null)
    },[chosen])
    return (
        <>
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
            <div className={styles.btnContainer}>
                <button className={styles.exampleWorks} >
                    Переглянути детальну інформацію
                </button>
            </div>
        </>
    );
};

export default Works;