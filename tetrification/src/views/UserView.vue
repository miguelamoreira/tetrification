<template>
  <v-container class="profile">
    <v-row>
      <!-- Navbar -->
      <v-col cols="2">
        <NavBar></NavBar>
      </v-col>

      <v-col cols="9">
        <div class="header d-flex">
          <div class="title">
            <h1>{{user.username}}</h1>
          </div>
        </div>

        <div class="info mt-8 justify-center d-flex">
          <div class="gamification d-flex">
            <div class="gamificationElements mx-8">
              <span>User Level: {{ user.userLevel }}</span>
            </div>
            <div class="gamificationElements mx-8">
              <span>Points: {{ user.points }}</span>
            </div>
            <div class="gamificationElements ml-8">
              <span>Ranking: {{ userRankingPosition }}</span>
            </div>
          </div>
        </div>

        <v-card class="px-4 py-12 mb-8 mt-12" elevation="4" style="z-index: 1; background-color: var(--vt-c-light-orange-1);">
            <v-card-content>
                <v-row>
                    <v-col cols="4" class="d-inline-flex flex-column align-center">
                      <img src="@/assets/images/avatars/avatarM.svg" v-if="user.gender === 'Male'">
                      <img src="@/assets/images/avatars/avatarF.svg" v-if="user.gender === 'Female'">
                    </v-col>
                    <v-col cols="4" class="d-flex flex-column justify-space-between">
                        <div class="username text-center d-flex flex-column">
                            <label class="font-weight-medium">Username</label>
                            <span class="mt-4 mb-4 data mx-auto pa-1">{{ user.username }}</span>
                        </div>
                        <div class="date text-center d-flex flex-column">
                            <label class="font-weight-medium">Date of Birth</label>
                            <span class="mt-4 mb-8 data mx-auto pa-1">{{ user.dateOfBirth }}</span>
                        </div>
                    </v-col>
                    <v-col cols="4" class="d-flex flex-column justify-space-between">
                        <div class="country text-center d-flex flex-column">
                            <label class="font-weight-medium">Country</label>
                            <span class="mt-4 mb-4 data mx-auto pa-1">{{ user.country }}</span>
                        </div>
                        <div class="favPlayer text-center d-flex flex-column">
                            <label class="font-weight-medium">Favourite player</label>
                            <span class="mt-4 mb-8 data mx-auto pa-1">{{ user.favouritePlayer }}</span>
                        </div>
                    </v-col>
            </v-row>
          </v-card-content>
        </v-card>
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { useUserStore } from "@/stores/users";
  import NavBar from "@/components/navbar.vue";

  export default {
    components: {
      NavBar,
    },
    data() {
      return {
        userStore: useUserStore(),
        userId: null,
      };
    },
    computed: {
      user() {
        this.userId = this.$route.params.userId;
        return this.userStore.getUserId(this.userId);
      },
      orderedUsers() {
        return this.userStore.getUsers.slice().sort((a, b) => b.points - a.points);
      },
      userRankingPosition() {
        const userIndex = this.orderedUsers.findIndex((u) => u.id === this.user.id);
        return userIndex + 1;
      },
    },
  };
</script>

<style scoped>
  .profile {
    max-width: 100%;
  }
  .gamificationElements {
    background-color: var(--vt-c-light-yellow-1);
    padding: 10px 35px;
    border-radius: 8px;
    text-align: center;
  }
  .data {
    background-color: var(--vt-c-light-orange-2);
    border: 2px solid var(--vt-c-medium-orange-1);
    width: 45%;
  }
</style>
