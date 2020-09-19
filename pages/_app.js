import React from 'react';

import { Provider } from 'react-redux'
import { useStore } from '../store'

import 'normalize.css'
import '../styles/globals.css'
import 'react-image-lightbox/style.css';

const MyApp = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState)
  return (
      <Provider store={store}>
          <Component {...pageProps} />
      </Provider>
  );
};


export default MyApp
