
<template>
    <v-app>
        <v-navigation-drawer app> </v-navigation-drawer>

        <v-app-bar app>

            <router-link to="/">Home</router-link> |

            <router-link to="/about">Acerca de </router-link>
        </v-app-bar>

        <v-main>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-main>

    </v-app>
    
</template>