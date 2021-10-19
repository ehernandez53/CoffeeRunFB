(function (window) {
    'use strict';
    var App = window.App || {};

    var FirebaseConfig = {
        apiKey: "AIzaSyB87wLhmQGd7CnC7VLQw_Qxcy1tbVB_y4U",
        authDomain: "coffeerun-4b5af.firebaseapp.com",
        projectId: "coffeerun-4b5af",
        storageBucket: "coffeerun-4b5af.appspot.com",
        messagingSenderId: "620899484394",
        appId: "1:620899484394:web:bd77dbe68cd5d4b4b30d93",
        measurementId: "G-2VTC220JY9"
    };

    class firebasedatastore {
        constructor() {
            console.log('Running the firebasedatastore function');
            firebase.initializeApp(FirebaseConfig);
            this.db = firebase.firestore();
        }

        async add(key, val) {
            console.log('firebase add ');
            const docRef = this.db.doc(`orders/${this.makeDocHash(20)}`);
            return docRef.set(val);
        }

        async get(email, cb) {
            const docRef = this.db.collection(`orders`);
            const snapshot = await docRef.where('emailAddress', '==', email).get();
            return await snapshot.docs.map(e => e.data());
        }

        async getAll(cb) {
            const docRef = this.db.collection(`orders`);
            const snapshot = await docRef.get();
            return await snapshot.docs.map(e => e.data());
        }

        async remove(email) {
            const docRef = await this.db.collection(`orders`);
            const batch = this.db.batch();
            const snapshot = await docRef.where('emailAddress', '==', email).get();
            snapshot.forEach(doc => {
                batch.delete(doc.ref);
            });
            await batch.commit();
        }

        makeDocHash(len) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < len; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }
    }

    App.firebasedatastore = firebasedatastore;
    window.App = App;
})(window);