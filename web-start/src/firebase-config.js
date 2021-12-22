/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: 'AIzaSyDaEMO471j9dJO2joAmNfmjT6RvF8_epnI',
  authDomain: 'friendlychat-bae0f.firebaseapp.com',
  projectId: 'friendlychat-bae0f',
  storageBucket: 'friendlychat-bae0f.appspot.com',
  messagingSenderId: '784355716455',
  appId: '1:784355716455:web:b75a8193306b2f539b13c2',
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      'No Firebase configuration object provided.' +
        '\n' +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}
