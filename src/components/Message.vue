<template>
  <div>
    <ul>
      <li v-for="message in messages">
        {{ message['.key'] }} - {{ message.text }}
        <a href="#" @click="removeMessage(message['.key'])">[x]</a>
      </li>
    </ul>
    <input v-model="newMessage" @keyup.enter="addMessage" placeholder="Add message" />
    <button @click="addMessage">Add message</button>
  </div>
</template>

<script>
  import Vuex from 'vuex'
  import Firebase from 'firebase'

  const firebaseApp = Firebase.initializeApp({ databaseURL: 'https://tinyissue-f4320.firebaseio.com/' })
  const db = firebaseApp.database()
  const messagesRef = db.ref('messages')

  export default {
    computed: Vuex.mapGetters(['messages']),
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
        messagesRef.child(message).remove()
      }
    }
  }
</script>
