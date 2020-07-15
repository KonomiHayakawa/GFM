import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store'
import { Provider } from 'react-redux';
// import * as firebase from 'firebase';


// const firebaseConfig = {
//   apiKey: "AIzaSyDRISdOoypSno4RViHOms8-QcBQ9yKrRcM",
//   authDomain: "goodfoodmood-b0f8c.firebaseapp.com",
//   databaseURL: "https://goodfoodmood-b0f8c.firebaseio.com",
//   projectId: "goodfoodmood-b0f8c",
//   storageBucket: "goodfoodmood-b0f8c.appspot.com",
//   messagingSenderId: "544246566728",
//   appId: "1:544246566728:web:cb54bf6bc8bfc27c4f6d7d"
// };

// firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
