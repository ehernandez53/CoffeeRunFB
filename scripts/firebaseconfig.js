(function (window) {
    'use strict';
    var App = window.app || {};

    var FirebaseConfig = {
        apiKey: "AIzaSyB87wLhmQGd7CnC7VLQw_Qxcy1tbVB_y4U",
        authDomain: "coffeerun-4b5af.firebaseapp.com",
        projectId: "coffeerun-4b5af",
        storageBucket: "coffeerun-4b5af.appspot.com",
        messagingSenderId: "620899484394",
        appId: "1:620899484394:web:bd77dbe68cd5d4b4b30d93",
        measurementId: "G-2VTC220JY9"
    };

    App.FirebaseConfig = FirebaseConfig;

    // Initialize Firebase
    firebase.initializeApp(App.FirebaseConfig);
    window.App = App;
})(window);