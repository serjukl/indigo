import App from 'next/app'
import React from 'react'
import 'normalize.css'
import '../styles/globals.css'
import 'react-image-lightbox/style.css';
import LogRocket from 'logrocket';


class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        const pageProps = Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {}
        // Anything returned here can be access by the client
        const res = await fetch('https://indigo-99639.firebaseio.com/.json')
        const data = await res.json()
        LogRocket.init('ndlzvq/indigo');

        return { pageProps, data: data }
    }

    render() {
        // Information that was returned  from 'getInitialProps' are stored in the props i.e. pageProps
        const { Component, pageProps, data } = this.props
        // eslint-disable-next-line no-unused-expressions

        return (
                <Component {...pageProps} data={data} />
        )
    }
}


export default MyApp
