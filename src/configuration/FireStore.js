import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDdpjeR8oQ2xzF1jOFRQpfBQnPe7sg0dQo",
    authDomain: "ecommerce-mangas.firebaseapp.com",
    projectId: "ecommerce-mangas",
    storageBucket: "ecommerce-mangas.appspot.com",
    messagingSenderId: "679818965303",
    appId: "1:679818965303:web:42742faf204e24cf716ab2"
};

//Initialize Firebase.
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
