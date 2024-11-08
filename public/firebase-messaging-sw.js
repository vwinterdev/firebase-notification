importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js");

const firebaseConfig = {
    apiKey: "AIzaSyCKcRQNdPtVIdYy-ZYLK0PvcYHhm85LRJk",
    authDomain: "notification-31228.firebaseapp.com",
    projectId: "notification-31228",
    storageBucket: "notification-31228.firebasestorage.app",
    messagingSenderId: "515089145210",
    appId: "1:515089145210:web:11ef75510e5735edc28ac3",
    measurementId: "G-4QVBB372GX",
    vapidKey: 'BB9BiqPfKEWleyHgX8MnXSk6PGUV5m0ltzA58OFMYXKrpjK9MKx5MqLbxabjBB6qJY4Q9H_2Jdsc-z4I-n9uAnI'
};
  
firebase.initializeApp(firebaseConfig);
firebase.messaging();

self.addEventListener('push', (event) => {
    console.log({ event })
    if (event.data) {
        const data = event.data.json();
        const notificationTitle = data.notification.title;
        const notificationOptions = {
            body: data.notification.body,
            icon: 'https://cabinet.one/favicon.ico',
        };


        self.registration.showNotification(notificationTitle, notificationOptions);
    }

});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(
      clients.openWindow('https://www.google.com')
    );
  });
