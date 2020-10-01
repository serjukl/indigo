import App from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import 'normalize.css'
import '../styles/globals.css'
import 'react-image-lightbox/style.css';
import withRedux from 'next-redux-wrapper'


class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        const pageProps = Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {}
        // Anything returned here can be access by the client
        const res = await fetch('https://sm-smartmenu.firebaseio.com/.json')
        const data = await res.json()

        return { pageProps, data: data.test }
    }

    render() {
        // Information that was returned  from 'getInitialProps' are stored in the props i.e. pageProps
        const { Component, pageProps, data } = this.props
        // eslint-disable-next-line no-unused-expressions

        return (

            <Provider store={store}>
                <Component {...pageProps} data={data} />
            </Provider>

        )
    }
}


const makeStore = () => store
export default withRedux(makeStore)(MyApp)