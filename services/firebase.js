import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBSO7wIl5D-zdlJH5diMQFUDdlml1CY5iY",
    authDomain: "estatelinkapp.firebaseapp.com",
    projectId: "estatelinkapp",
    storageBucket: "estatelinkapp.appspot.com",
    messagingSenderId: "553315276094",
    appId: "1:553315276094:web:54f2473f017e78661c086f"
};

let app;
if (!getApps().length) {  // check if firebase app has not been initialized
    app = initializeApp(firebaseConfig);
}

const db = getFirestore(app);
const storage = getStorage(app);  // Consider passing the app instance to getStorage

export { db, storage };
