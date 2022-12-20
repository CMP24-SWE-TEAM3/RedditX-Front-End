import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyClEjbza4FfTRtOzhH68lmeKIbQi7wvlFE",
  authDomain: "reddit-f129b.firebaseapp.com",
  projectId: "reddit-f129b",
  storageBucket: "reddit-f129b.appspot.com",
  messagingSenderId: "46502148210",
  appId: "1:46502148210:web:b89ed82ad9caadd3c46aeb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig, "secondary");

// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);

function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");

      getToken(messaging, {
        vapidKey:
          "BM65GEnHhG6thx79-Y4J8bKEyep7_qSjxcT3Sg1zmigJ5ZhNUM7TZtoklSiyEAXU3XwH17alRi10D0DPkiHQPvU",
      }).then((currentToken) => {
        if (currentToken) {
          console.log("current token for client: ", currentToken);
        } else {
          console.log(
            "No registration token available. Request permission to generate one."
          );
        }
      });
    } else {
      console.log("Notification permission denied.");
    }
  });
}
export const getOrRegisterServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    return window.navigator.serviceWorker
      .getRegistration("/firebase-push-notification-scope")
      .then((serviceWorker) => {
        if (serviceWorker) return serviceWorker;
        return window.navigator.serviceWorker.register(
          "/firebase-messaging-sw.js",
          {
            scope: "/firebase-push-notification-scope",
          }
        );
      });
  }
  throw new Error("The browser doesn`t support service worker.");
};

const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage((payload) => {
      resolve(payload);
    });
  });

const onForegroundMessage = () =>
  new Promise((resolve) => onMessage(messaging, (payload) => resolve(payload)));
export { requestPermission, onForegroundMessage, onMessageListener };
