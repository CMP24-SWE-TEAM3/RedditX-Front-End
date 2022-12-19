// Scripts for firebase and firebase messaging
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyCFihY47mFGarGMJsT6BZLxSlwk4l5QKpE",
  authDomain: "reddit-3d725.firebaseapp.com",
  projectId: "reddit-3d725",
  storageBucket: "reddit-3d725.appspot.com",
  messagingSenderId: "294678106759",
  appId: "1:294678106759:web:4e91d5ecc5682f23345e22",
  measurementId: "G-RJ30EYDC4X",
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
