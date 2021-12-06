<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Sign Up</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="signupRequest">
                  <v-text-field
                    prepend-icon="person"
                    v-model="email"
                    label="E-mail"
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    prepend-icon="lock"
                    label="Password"
                    type="password"
                  ></v-text-field>
                  <v-card-actions>
                    
                <v-spacer></v-spacer>
                <input type="submit" value="Sign Up">
              </v-card-actions>
                </v-form>
              </v-card-text>
              
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

