import * as firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyDBXYsGvYSY-kw4-m3uhaeKt8QOiRmZruE",
  authDomain: "sportify-a0b6e.firebaseapp.com",
  databaseURL: "https://sportify-a0b6e.firebaseio.com",
  storageBucket: "sportify-a0b6e.appspot.com",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp