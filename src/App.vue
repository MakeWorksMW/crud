<template>
    <v-app>
    <v-toolbar dark color="primary">

      <v-toolbar-title class="white--text">{{$route.meta.title}}</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn to='/adicionar' icon>
        <v-icon>add</v-icon>
      </v-btn>

      <v-btn to='/' icon>
        <v-icon>list</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view>
      
      </router-view>
    </v-content>
    </v-app>
</template>