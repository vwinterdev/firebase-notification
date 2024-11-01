<script setup lang="ts">
import { initializeApp } from "firebase/app";
import { getToken, getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCKcRQNdPtVIdYy-ZYLK0PvcYHhm85LRJk",
  authDomain: "notification-31228.firebaseapp.com",
  projectId: "notification-31228",
  storageBucket: "notification-31228.firebasestorage.app",
  messagingSenderId: "515089145210",
  appId: "1:515089145210:web:11ef75510e5735edc28ac3",
  measurementId: "G-4QVBB372GX"
};
const FIREBASE_VAPID_KEY = 'BB9BiqPfKEWleyHgX8MnXSk6PGUV5m0ltzA58OFMYXKrpjK9MKx5MqLbxabjBB6qJY4Q9H_2Jdsc-z4I-n9uAnI';

(async () => {
  try {
    const swRegistration = await navigator.serviceWorker.register('/firebase-notification/firebase-messaging-sw.js');
    const app = initializeApp(firebaseConfig);
    const messaging = getMessaging(app);
    const currentToken =  await getToken(messaging, { vapidKey: FIREBASE_VAPID_KEY, serviceWorkerRegistration: swRegistration })
    console.log(currentToken)
    return currentToken 
  } catch (error) {
    alert('need enable notifications!')
  }
})()







</script>

<template>
  <button>
    send
  </button>
  
</template>

<style scoped>

</style>
