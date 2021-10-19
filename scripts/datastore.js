(function (window) {
    'use strict';
    var App = window.App || {};
    var Promise = window.Promise;

    class DataStore {
        constructor() {
            // console.log('Running the DataStore constructor.');
            this.data = {};
        }
        promiseResolvedWith(value) {
            var promise = new Promise(function (resolve, reject) {
                resolve(value);
            });
            return promise;
        }
        add(key, val) {
            this.promiseResolvedWith(null);
        }
        remove(key) {
            delete this.data[key];
            return this.promiseResolvedWith(null);
        }
        get(key) {
            return this.promiseResolvedWith(this.data[key]);
        }
        getAll() {
            return this.promiseResolvedWith(this.data);
        }

        static runTests(ds) {
            ds.add('m@bond.com', 'tea');
            ds.add('james@bond.com', 'espresso');
            console.log(ds.getAll());
            ds.remove('james@bond.com');
            console.log('After removing james@bond.com: ' + ds.getAll());
            console.log(ds.get('m@bond.com'));
            console.log('Trying to get the removed james@bond.com gets... ' +
                ds.get('james@bond.com'));
        }
    }

    App.DataStore = DataStore;
    window.App = App;
})(window);
