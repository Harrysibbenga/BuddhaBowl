import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
// ... other firebase imports

// Firebase configuration
const firebaseConfig = {
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_APP_ID,
    measurementId: process.env.VUE_APP_MEASUREMENT_ID
};

// Initialize Firebase only if it hasn't been initialized yet
let firebaseApp;
if (!getApps().length) {
    firebaseApp = initializeApp(firebaseConfig);
    // Initialize Firebase Analytics if it's not a SSR (Server Side Rendered) context
    if (typeof window !== 'undefined') {
        getAnalytics(firebaseApp);
    }
} else {
    firebaseApp = getApps()[0]; // if already initialized, use that one
}

// Initialize Firestore and Auth
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

// Export the necessary Firebase services
export { firebaseApp, db, auth };

// Example of exporting a reusable database reference
// export const todosRef = collection(db, 'todos');
