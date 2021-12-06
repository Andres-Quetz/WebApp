<template>
  <div class="private">
    <h1>This is a private page</h1>
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
          this.$router.replace("/");
        });
    },
  },
};
</script>
