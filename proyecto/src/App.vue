
<template>
    <v-app>
        <div>
    <v-toolbar
      dark
      prominent
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
    
    
      <v-app-bar-nav-icon><img src="./assets/s2.png" alt="logo"></v-app-bar-nav-icon>

      <v-toolbar-title>Vuetify</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
  </div>

        <v-main>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-main>

    </v-app>
    
</template>