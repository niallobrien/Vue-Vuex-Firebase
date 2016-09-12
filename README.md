# Vue-Vuex-Firebase

> A Vue.js project

## Description
This project is using Vue.js v2 (RC5), Vuex and Firebase.
Data is kept in sync with Firebase in realtime (try it in different browsers) and all state is managed with Vuex.
I highly recommend you install the Vue dev tools as it also supports Vuex.

To try out this example, sign up for Firebase, create a new project, select 'Database' from the left menu, and then 
select 'Rules' from the top menu. By default, unauthorised users cannot read or write to Firebase.
For this simple example we're going to allow unauthorised users to read and write to the database, so set the rules 
as such:
```json
{
  "rules": {
    ".read": "auth == null",
    ".write": "auth == null"
  }
}
```
Finally, add your unique Firebase URL to `src/components/Message.vue`, line 19.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
