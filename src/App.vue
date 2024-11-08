<script setup lang="ts">
import { onMounted, ref } from 'vue'
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

const token = ref('');
const currentTitle = ref('');
const currentText = ref('');
const currentToken = ref('');

const notificationMounted = async () => {
    const swRegistration = await navigator.serviceWorker.register('/firebase-notification/firebase-messaging-sw.js');
    const app = initializeApp(firebaseConfig);
    const messaging = getMessaging(app);
    token.value = await getToken(messaging, { vapidKey: FIREBASE_VAPID_KEY, serviceWorkerRegistration: swRegistration });
}

const interval = ref<ReturnType<typeof setInterval> | null>(null);

const pollingNotification = () => {
  console.log('1')
  if(Notification.permission === "granted"){
    notificationMounted()
    if(interval.value) clearInterval(interval.value)
  } else {
    Notification.requestPermission()
  }
  
  if(!interval.value){
    interval.value = setInterval(pollingNotification, 10000)
  }
};



const sendNotification = () => {
  if(!token.value) return 

  fetch('https://winter-dev.ru', { 
    method: 'post', 
    headers: {
      'Content-Type': 'application/json',
    }, 
    body: JSON.stringify({
      token: currentToken.value || token.value,
      text: currentText.value,
      title: currentTitle.value
    })})
}

const clipboard = () => {
  navigator.clipboard.writeText(token.value);
}

onMounted(() => {
  pollingNotification()
});

const tokens = ref([])
const adding_token = ref('') 
const addTokenToTokens = () => {
  if(!adding_token.value) return alert('Пустое значение')
  tokens.value.push(adding_token.value)
  adding_token.value = ''
}

const sendNotifications = () => {
  if(!token.value) return 

  fetch('http://localhost:3333', { 
    method: 'post', 
    headers: {
      'Content-Type': 'application/json',
    }, 
    body: JSON.stringify({
      isMany: true,
      token: tokens.value,
      text: currentText.value,
      title: currentTitle.value
    })})
}
</script>

<template>
  <div class="wrapper">

      <div v-if="token" class="token-text" @click="clipboard()" title="СКОПИРОВАТЬ ТОКЕН">
        Tокен устройства:
        <br />
        <strong>
          {{ token  }}
        </strong>
      </div>
      <div v-else>
        Загрузка...
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div class="form">
        <div class="input">
          <label for="title">Title</label>
          <input placeholder="шапка сообщения" id="title" v-model="currentTitle" />
        </div>
        
        <div class="input">
          <label for="text">Text</label>
          <textarea placeholder="тело сообщения" id="text" v-model="currentText" />
        </div>

        <div class="input">
          <label for="token">Token</label>
          <textarea :placeholder="token" id="token" v-model="currentToken" />
        </div>
        <button class="button-send"  @click="sendNotification()">
          Отправить сообщение
        </button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <ol>
        <li v-for="(token, index) of tokens" :key="index">
          {{ token }}
        </li>
      </ol>
      <div class="input">
        <label for="token2">Токен</label>
        <textarea  id="token2" v-model="adding_token" />
      </div>
      <br />
      <button class="button-send"  @click="addTokenToTokens()">
        Добавить
      </button>
      <br />
      <button class="button-send" @click="sendNotifications()" >
        Отправить
      </button>
  </div>


 
</template>

<style scoped>
*{
  box-sizing: border-box;
}
.wrapper{
  max-width: 1200px;
  margin: 0px auto;
}
.token-text{
  cursor: pointer;
}
.token-text:hover > strong{
  opacity: 0.7;
}
.form{
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.input{
  width: 100%;
}
.input > label {
  display: block;
  margin-bottom: 20px;
}
.input > input,textarea {
  display: block;
  width: 100%;
  resize: vertical;
}
.button-send{
  width: 100%;
  display: block;
  background: blue;
  padding: 12px;
  border-radius: 12px;
  outline: none;
  border: none;
  cursor: pointer;
}
</style>
