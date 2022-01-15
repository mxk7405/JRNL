import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {

    apiKey: "AIzaSyCT5rNJ-j8lhEGDxXe45Vy3OPbjNubaKt0",
  
    authDomain: "fir-next-b2683.firebaseapp.com",
  
    projectId: "fir-next-b2683",
  
    storageBucket: "fir-next-b2683.appspot.com",
  
    messagingSenderId: "711962799946",
  
    appId: "1:711962799946:web:b31dd3a3f9a4256ce79bb3",
  
    measurementId: "G-DNLTB68TH3"
  
  };
  

  if (!firebase.apps.length){
      firebase.initializeApp(firebaseConfig)
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  export const storage = firebase.storage();