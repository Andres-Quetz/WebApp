<template>
  <span>
    <v-app-bar color="teal lighten-2" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>
      <router-link to="/home"
        ><v-img max-height="90" max-width="90" src="..//assets/w.png"></v-img>
      </router-link>
      <v-spacer></v-spacer>
      <v-autocomplete
      v-model="model"
      
      :loading="isLoading"
      :search-input.sync="search"
      chips
      clearable
      hide-details
      hide-selected
      item-text="name"
      item-value="symbol"
      label="Search "
     
    >
     
     
    </v-autocomplete>
      <v-spacer></v-spacer>
      <v-btn to="#" color="transparent"><v-icon>add_shopping_cart</v-icon></v-btn>
      
      <v-spacer></v-spacer>
      <v-btn to="/login"  color="transparent"> <v-icon>login</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          class="deep-purple--text text--accent-4"
        >
          <template v-for="(item, index) in items">
            <v-list-item :key="index" :to="item.url">
              <v-list-item-icon>
                <v-icon>
                  {{ item.icon }}
                </v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                {{ item.title }}
              </v-list-item-title>
            </v-list-item>
            <v-divider :key="`divider-${index}`"></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </span>
</template>
<style>
.titulo {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
</style>

<script>
export default {
  name: "AppNavigation",
  data() {
    return {
      drawer: false,
      items: [
        { title: "Home", url: "/", icon: "home" },
        { title: "Profile", url: "/profile", icon: "account_circle" },
        { title: "Log in", url: "/login", icon: "login" },
        { title: "Settings", url: "/join in", icon: "settings" },
        { title: "Shopping Car", url: "/join in", icon: "add_shopping_cart" },
      ],
    };
  },
};
</script>
