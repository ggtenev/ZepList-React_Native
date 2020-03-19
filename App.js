import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import listReducer from './store/reducer'

import ReduxThunk from 'redux-thunk'

import Navigation from './navigation/Navigator'

// var firebaseConfig = {
//   apiKey: "AIzaSyAlpMV1ZbYedM7xnefl3K3SH3pRaPpUc9Q",
//   authDomain: "finalprojectedx-72902.firebaseapp.com",
//   databaseURL: "https://finalprojectedx-72902.firebaseio.com",
//   projectId: "finalprojectedx-72902",
//   storageBucket: "finalprojectedx-72902.appspot.com",
//   messagingSenderId: "865729816291",
//   appId: "1:865729816291:web:952d372e749ebcec9307d6"
// };
// // Initialize Firebase
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }



const rootReducer = combineReducers({
  lists:listReducer
})
const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export default function App() {
  return (
    <Provider store = {store}>
      <Navigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
