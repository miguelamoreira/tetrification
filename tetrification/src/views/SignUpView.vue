<template class="justify-center">
  <v-app>
    <v-container>
        <v-app-bar app dense :elevation="0" class="pa-2">
          <img src="@/assets/images/logo.svg" max-height="40" contain class="pt-2 pb-1 pl-4">
          <v-app-bar-title class="ml-auto" grow></v-app-bar-title>
          <v-btn :to="{ name: 'home'}" style="color: var(--vt-c-medium-purple-1)">Home</v-btn>
          <v-btn :to="{ name: 'login' }" style="background-color: var(--vt-c-medium-blue-1); color: var(--vt-c-dark-purple-1)">Login</v-btn>
        </v-app-bar>
    </v-container>
    <v-container class="fill-height fill-width justify-center">
      <v-row justify="center" class="justify-center">
        <v-col cols="12" md="6">
      <v-card class="pa-4 pt-8 mt-8" elevation="4" style="z-index: 1; background-color: var(--vt-c-light-orange-1)">
        <v-card-title class="text-center card-title">
          Welcome to Tetrification
        </v-card-title>
        <v-card-subtitle class="text-center">
          Please enter your details
        </v-card-subtitle>
        <v-card-text>
          <v-form @submit.prevent="signup" class="mt-6">
            <v-text class="font-weight-bold">Personal Data</v-text>
            <v-row>
              <v-col cols="4.5">
                <v-text-field v-model="name" label="Name" class="pt-4"></v-text-field>
              </v-col>
              <v-col cols="3.5">
                <v-text-field v-model="date" label="Date Of Birth" class="pt-4" placeholder="DD/MM/YYYY"></v-text-field>
              </v-col>
              <v-col cols="3.5">
                <v-combobox v-model="gender" :items="genderOptions" label="Gender" class="pt-4"></v-combobox>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-text-field v-model="country" label="Country"></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field v-model="favoritePlayer" label="Favourite player"></v-text-field>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-text class="font-weight-bold">Account Data</v-text>
            <v-row>
              <v-col cols="6">
                <v-text-field v-model="username" label="Username" class="pt-4"></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field v-model="email" label="E-mail" class="pt-4"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-text-field v-model="password" label="Password" type="password"></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field v-model="confirmPassword" label="Confirm password" type="password"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4" class="text-center mx-auto">
                <v-btn type="submit" block text="Sign up" style="background-color: var(--vt-c-medium-orange-1)"></v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
      </v-col>
      </v-row>
    </v-container>
  </v-app>
  <img src="@/assets/images/piece_yellow.svg" class="position-absolute" style="top: 20vh; left: 50vh; margin: 2vh">
  <img src="@/assets/images/piece_purple.svg" class="position-absolute" style="bottom: 2vh; left: 10vh; margin: 2vh;">
  <img src="@/assets/images/piece_orange.svg" class="position-absolute" style="top: 25vh; right: 20vh; margin: 2vh;">
  <img src="@/assets/images/piece_yellow2.svg" class="position-absolute" style="bottom: 0vh; right: 2vh; margin: 2vh;">

  <v-dialog v-model="modalVisible" width="600">
      <v-card class="text-center">
        <v-card-title>{{ modalTitle }}</v-card-title>
        <v-card-text>{{ modalText }}</v-card-text>
        <v-card-actions class="mx-auto">
          <v-btn @click="closeModal" class="btnModal">Close</v-btn>
        </v-card-actions>
      </v-card>
   </v-dialog>
</template>

<script>
import { useUserStore } from '@/stores/users';
export default {
  data() {
    return {
      userStore: useUserStore(),
      name: '',
      username: '',
      date: '',
      gender: null,
      country: '',
      favoritePlayer: '',
      email: '',
      password: '',
      confirmPassword: '',
      loading: false,
      genderOptions: ["Male", "Female", "Other"],
      modalVisible: false,
      modalTitle: '',
      modalText: ''
    };
  },
  methods: {
    signup() {
			try {
				this.userStore.signup(
          this.name,
          this.username,
          this.email,
          this.password,
          this.confirmPassword,
          this.date,
          this.gender,
          this.country,
          this.favoritePlayer,
        );
        this.$router.push({ name: "login" });
			} catch (error) {
				this.showModal('Sign up error', error.message)
        this.name = ''
        this.username = ''
        this.date = ''
        this.gender = null
        this.country = ''
        this.favoritePlayer = ''
        this.email = ''
        this.password = ''
        this.confirmPassword = ''
			}
		},
    showModal(title, text) {
      this.modalVisible = true;
      this.modalTitle = title;
      this.modalText = text;
    },
    closeModal() {
      this.modalVisible = false;
    }
  },
};
</script>

<style>
  .card-title {
    font-family: Orbitron, sans-serif;
    font-weight: bold;
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