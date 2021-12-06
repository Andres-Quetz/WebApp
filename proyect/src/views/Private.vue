<template>
  <div class="private">
    
    <button @click="logOut">LogOut</button>
    
  </div>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
export default {
  name: "private",
  methods: {
    logOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("/home");
        });
    },
  },
};
</script>
