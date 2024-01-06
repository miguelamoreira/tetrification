<template>
    <v-container class="profile">
      <v-row>
        <!-- Navbar -->
        <v-col cols="2">
          <NavBar></NavBar>
        </v-col>
  
        <v-col cols="9">
          <div class="header">
            <div class="title">
                <h1>Profile</h1>
            </div>
            <div class="logout">
                <v-btn style="height: 60px;" :elevation="0" @click="logout"><img src="@/assets/images/navbar/logout.svg"></v-btn>
            </div>
          </div>
  
          <div class="info mt-8">
            <div class="streak">
              <img :src="user.streakImageSrc" alt="Streak Image">
              <h4>{{ `x${user.streak}` }}</h4>
            </div>
            <div class="gamification">
              <div class="gamificationElements mx-8">
                <span>User Level: {{ user.userLevel }}</span>
              </div>
              <div class="gamificationElements mx-8">
                <span>Points: {{ user.points }}</span>
              </div>
              <div class="gamificationElements ml-8">
                <span>Ranking</span>
              </div>
            </div>
          </div>
  
          <v-card class="pa-4 pt-8 mb-8 mt-12" elevation="4" style="z-index: 1; background-color: var(--vt-c-light-orange-1);">
            <v-card-content>
                <v-row>
                    <v-col cols="4">
                      <img :src="user.avatar">
                    </v-col>
                    <v-col cols="4">
                        <div class="username text-center">
                            <label class="font-weight-medium">Username</label>
                            <span class="mt-4 mb-4 data mx-auto pa-1">{{ user.username }}</span>
                        </div>
                    </v-col>
                    <v-col cols="4">
                        <div class="country text-center">
                            <label class="font-weight-medium">Country</label>
                            <span class="mt-4 mb-4 data mx-auto pa-1">{{ user.country }}</span>
                        </div>
                    </v-col>
                    <v-col cols="4"></v-col>
                    <v-col cols="4">
                        <div class="date text-center">
                            <label class="font-weight-medium">Date of Birth</label>
                            <span class="mt-4 mb-8 data mx-auto pa-1">{{ user.dateOfBirth }}</span>
                        </div>
                    </v-col>
                    <v-col cols="4">
                        <div class="favPlayer text-center">
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
      };
    },
    computed: {
        user() {
            return this.userStore.getUser;
        }
    },
    methods: {
        logout() {
            this.userStore.logout();
            this.$router.push({ name: "home" });
        },
    }
  };
</script>
  
<style scoped>
  .profile {
    width: 100%;
    max-width: 1550px;
  }
  
  .header, .info {
    display: flex;
    justify-content: space-between; 
  }
  
  .streak {
    display: flex;
  }
  
  .streak h4 {
    font-size: 4vh;
    color: #fbd73a;
  }
  
  .gamification {
    display: flex;
  }
  
  .gamificationElements {
    background-color: var(--vt-c-light-yellow-1);
    padding: 10px 35px;
    border-radius: 8px;
    text-align: center;
  }

  .username, .country, .date, .favPlayer {
    display: flex;
    flex-direction: column;
  }

  .data {
    background-color: var(--vt-c-light-orange-2);
    border: 2px solid var(--vt-c-medium-orange-1);
    width: 45%;
  }
</style>
  