<template>
  <v-container class="profile">
    <v-row>
      <!-- Navbar -->
      <v-col cols="2">
        <NavBar></NavBar>
      </v-col>

      <v-col cols="9">
        <div class="header d-flex justify-space-between">
          <div class="title">
              <h1>Profile</h1>
          </div>
          <div class="logout">
              <v-btn style="height: 60px;" :elevation="0" @click="logout"><img src="@/assets/images/navbar/logout.svg"></v-btn>
          </div>
        </div>

        <div class="info mt-8 d-flex justify-space-between">
          <div class="streak d-flex">
            <img src="@/assets/images/streak/streak1.svg" v-if="userStore.getUser.streak.length > 0 && userStore.getUser.streak[userStore.getUser.streak.length - 1].value === 1">
            <img src="@/assets/images/streak/streak2.svg" v-else-if="userStore.getUser.streak.length > 0 && userStore.getUser.streak[userStore.getUser.streak.length - 1].value === 2">
            <img src="@/assets/images/streak/streak3.svg" v-else-if="userStore.getUser.streak.length > 0 && userStore.getUser.streak[userStore.getUser.streak.length - 1].value === 3">
            <img src="@/assets/images/streak/streak4.svg" v-else-if="userStore.getUser.streak.length > 0 && userStore.getUser.streak[userStore.getUser.streak.length - 1].value === 4">
            <img src="@/assets/images/streak/streak5.svg" v-else-if="userStore.getUser.streak.length > 0 && userStore.getUser.streak[userStore.getUser.streak.length - 1].value === 5">
            <img src="@/assets/images/streak/streak6.svg" v-else-if="userStore.getUser.streak.length > 0 && userStore.getUser.streak[userStore.getUser.streak.length - 1].value === 6">
            <img src="@/assets/images/streak/streak7.svg" v-else-if="userStore.getUser.streak.length > 0 && userStore.getUser.streak[userStore.getUser.streak.length - 1].value >= 7">
            <h4 class="align-self-end">{{ `x${userStore.getUser.streak[userStore.getUser.streak.length - 1].value}` }}</h4>
          </div>
          <div class="gamification align-center d-flex">
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

  <v-dialog v-model="modalVisible" width="600">
    <v-card class="text-center">
      <v-card-title>{{ modalTitle }}</v-card-title>
      <v-card-text>{{ modalText }}</v-card-text>
      <v-card-actions class="mx-auto">
        <v-btn @click="confirmModal" class="btnModal">Confirm</v-btn>
        <v-btn @click="cancelModal" class="btnModal">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import avatar from "@/assets/images/avatars/avatarM.svg"
import { useUserStore } from "@/stores/users";
import NavBar from "@/components/navbar.vue";

export default {
components: {
  NavBar,
},
data() {
  return {
    userStore: useUserStore(),
    avatar: avatar,
    modalVisible: false,
    modalTitle: '',
    modalText: ''
  };
},
computed: {
  user() {
    return this.userStore.getUser;
  },
  orderedUsers() {
    return this.userStore.getUsers.slice().sort((a, b) => b.points - a.points);
  },
  userRankingPosition() {
    const userIndex = this.orderedUsers.findIndex((u) => u.id === this.user.id);
    return userIndex + 1;
  },
},
methods: {
  logout() {
    this.showModal('Logout', 'Do you really want to logout?');
  },
  showModal(title, text) {
    this.modalVisible = true;
    this.modalTitle = title;
    this.modalText = text;
  },
  confirmModal() {
    this.userStore.logout();
    this.$router.push({ name: "home" });
  },
  cancelModal() {
    this.modalVisible = false;
  }
},
};
</script>

<style scoped>
.profile {
  max-width: 100%;
}

.streak h4 {
  font-size: 4vh;
  color: #fbd73a;
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

.btnModal {
  background-color: var(--vt-c-medium-purple-3);
}

.btnModal:hover {
  background-color: var(--vt-c-medium-purple-2);
}

.btnModal:active {
  background-color: var(--vt-c-medium-purple-1);
  color: var(--vt-c-white);
}
</style>
