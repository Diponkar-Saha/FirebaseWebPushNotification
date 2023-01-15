importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AAAAi4YAiUc:APA91bE0Q_XUsDwrblsOB4SztiMK3kHdPt4erFMVWeSFoHIDA5p2_VKemwRBMxFSkk9RnBLkjcCuVfIoWuVjNlkV7q6mhi_RRMhkiCXOcnkVkz63csV6Ba9EZRYeQG6JDOgEw6hFn2U-",

    authDomain: "YOUR_FIREBASE_DOMAIN_NAME",
    databaseURL: "YOUR_FIREBASE_DATBASE_URL",
    projectId: "YOUR_FIREBASE_PROJECT_ID",
    storageBucket: "YOUR_FIREBASE_STORAGE_BUCKET END WITH appspot.com",
    messagingSenderId: "599248636231",
    appId: "YOUR APP ID",
    measurementId: "YOUR MEASUREMENT ID"
};

firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
});