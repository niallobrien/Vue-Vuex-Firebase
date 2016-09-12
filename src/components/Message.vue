<template>
  <div>
    <ul>
      <li v-for="message in messages">
        {{ message['.key'] }} - {{ message.text }}
        <a href="#" @click="removeMessage(message['.key'])">[x]</a>
      </li>
    </ul>
    <input v-model="newMessage" placeholder="Add message" />
    <button @click="addMessage">Add message</button>
  </div>
</template>

<script>
  import Vuex from 'vuex'
  import Firebase from 'firebase'
  import { getMessages } from '../vuex/getters'

  const firebaseApp = Firebase.initializeApp({ databaseURL: '<YOUR-FIREBASE-URL>' })
  const db = firebaseApp.database()
  const messagesRef = db.ref('messages')
  export default {
    computed: Vuex.mapGetters([getMessages]),
    data () {
      return {
        newMessage: ''
      }
    },
    firebase: {
      messages: messagesRef
    },
    methods: {
      addMessage () {
        if (this.newMessage.trim()) {
          messagesRef.push({
            text: this.newMessage
          })
          this.newMessage = ''
        }
      },
      removeMessage (message) {
        console.log(message)
        messagesRef.child(message).remove()
      }
    }
  }
</script>
