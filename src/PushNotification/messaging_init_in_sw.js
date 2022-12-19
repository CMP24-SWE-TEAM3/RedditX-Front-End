import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyCFihY47mFGarGMJsT6BZLxSlwk4l5QKpE",
  authDomain: "reddit-3d725.firebaseapp.com",
  projectId: "reddit-3d725",
  storageBucket: "reddit-3d725.appspot.com",
  messagingSenderId: "294678106759",
  appId: "1:294678106759:web:4e91d5ecc5682f23345e22",
  measurementId: "G-RJ30EYDC4X",
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
          "BLcskxFWeIoSYu1dpYhP50fBUpxAtsErOIXJRxQZzk24ytsFCe1KbeBdFJ3GQehwoWctpwrMbpNY-j6M6Flhgok",
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
