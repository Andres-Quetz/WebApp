<template>
  <span>
    <v-app-bar color="deep-purple" dark>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer">
      </v-app-bar-nav-icon>
      <v-toolbar-title>Sys.dev</v-toolbar-title>
      <v-spacer class="hidden-md-and-down"></v-spacer>
      <v-btn to="/" flat class="hidden-md-and-down">Home</v-btn>
      <v-spacer class="hidden-md-and-down"></v-spacer>
      <v-btn to="/about" flat class="hidden-md-and-down">About</v-btn>
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

<script>
export default {
  name: "AppNavigation",
  data() {
    return {
      drawer: false,
      items: [
        { title: "Home", url: "/", icon: "home" },
        { title: "Profile", url: "/about", icon: "self_improvement" },
        { title: "Sing in", url: "/sing in", icon: "key" },
        { title: "Join in", url: "/join in", icon: "app_registration" },
      ],
    };
  },
};
</script>
