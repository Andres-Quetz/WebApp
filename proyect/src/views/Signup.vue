<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Sign up</v-toolbar-title>
              </v-toolbar>

              <v-card-text>
                <form @submit.prevent="signupRequest" id="signup-form">
                  <v-text-field
                    prepend-icon="person"
                    v-model="email"
                    label="E-mail"
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    prepend-icon="lock"
                    :append-icon="show ? 'visibility' : 'visibility_off'"
                    :rules="[rules.required, rules.min]"
                    :type="show ? 'text' : 'password'"
                    label="Password"
                    hint="At least 6 characters"
                    counter
                    @click:append="show = !show"
                  ></v-text-field>
                  <div class="col-sm-12 text-center form-group">
                    <button
                      v-bind:disabled="xhrRequest"
                      v-bind:class="{ disabled: xhrRequest }"
                      class="btn btn-lg btn-primary px-4"
                    >
                      <span v-if="!xhrRequest">Sign Up</span>
                      <span v-if="xhrRequest">Please Wait...</span>
                    </button>
                    <div
                      v-if="xhrRequest"
                      class="spinner-border text-secondary _loader"
                      role="status"
                    >
                      <span class="sr-only">Loading...</span>
                    </div>
                  </div>
                  <div class="col-sm-12 text-center form-group mt-5">
                    <p>
                      Already have an account?
                      <router-link to="/login">Login</router-link>
                    </p>
                  </div>
                </form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
export default {
  name: "Signup",
  data() {
    return {
      show: false,
            myFile: null,
            URLing: null,
            processing: false,
            fileURL: null,
      email: "",
      password: "",
      xhrRequest: false,
      errorMessage: "",
      successMessage: "",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 6 || "Min 6 characters",
      },
    };
  },
  methods: {
    signupRequest() {
      let v = this;
      v.xhrRequest = true;
      v.errorMessage = "";
      v.successMessage = "";

      firebase
        .auth()
        .createUserWithEmailAndPassword(v.email, v.password)
        .then(
          () => {
            v.successMessage = "Register Successfully.";
            v.xhrRequest = false;
          },
          (error) => {
            let errorResponse = JSON.parse(error.message);
            v.errorMessage = errorResponse.error.message;
            v.xhrRequest = false;
          }
        );
    },
  },
};
</script>
