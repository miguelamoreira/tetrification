<template>
  <v-app>
    <v-navigation-drawer app width="125" height="100" style="background-color: var(--vt-c-dark-purple-2);">
      <v-container class="text-center">
        <img src="@/assets/images/navbar/logo.svg" class="my-12">
        <v-list>
          <v-list-item class="mb-4">
            <v-list-item-icon>
              <v-btn :to="{ name: 'dashboard' }" :rounded="1" class="my-2 btn" style="height: 60px; background-color: var(--vt-c-dark-purple-2);" :elevation="0"><img src="@/assets/images/navbar/dashboard.svg"></v-btn>
            </v-list-item-icon>
          </v-list-item>
          <v-list-item class="mb-4">
            <v-list-item-icon>
              <v-btn :to="{ name: 'leaderboard' }" :rounded="1" class="my-2 btn" style="height: 60px; background-color: var(--vt-c-dark-purple-2);" :elevation="0"><img src="@/assets/images/navbar/leaderboard.svg"></v-btn>
            </v-list-item-icon>
          </v-list-item>
          <v-list-item class="mb-4">
            <v-list-item-icon>
              <v-btn :to="{ name: 'profile' }" :rounded="1" class="my-2 btn" style="height: 60px; background-color: var(--vt-c-dark-purple-2);" :elevation="0"><img src="@/assets/images/navbar/profile.svg"></v-btn>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-container>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import { RouterLink } from "vue-router";
import { useUserStore } from '@/stores/users';
export default{data(){return{userStore:useUserStore(),}},}
</script>

