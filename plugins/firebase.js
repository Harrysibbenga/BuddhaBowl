import { defineNuxtPlugin } from '#app';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

export default defineNuxtPlugin((nuxtApp) => {
  // Get Firebase configuration from private runtime config
  const firebaseConfig = nuxtApp.$config.firebase;

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Firebase Analytics (if needed)
  if (process.client) {
    getAnalytics(app);
  }
});
