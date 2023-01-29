// Scripts for firebase and firebase messaging
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyClEjbza4FfTRtOzhH68lmeKIbQi7wvlFE",
  authDomain: "reddit-f129b.firebaseapp.com",
  projectId: "reddit-f129b",
  storageBucket: "reddit-f129b.appspot.com",
  messagingSenderId: "46502148210",
  appId: "1:46502148210:web:b89ed82ad9caadd3c46aeb",
};

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig, "secondary");

// Retrieve firebase messaging
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/logo192.png",
  };

  // eslint-disable-next-line no-restricted-globals
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});

// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker
//     .register("../firebase-messaging-sw.js")
//     .then(function (registration) {
//       console.log("Registration successful, scope is:", registration.scope);
//     })
//     .catch(function (err) {
//       console.log("Service worker registration failed, error:", err);
//     });
// }
