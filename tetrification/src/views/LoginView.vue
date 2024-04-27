<template class="justify-center">
  <v-app>
    <v-container>
        <v-app-bar app dense :elevation="0" class="pa-2">
          <img src="@/assets/images/logo.svg" max-height="40" contain class="pt-2 pb-1 pl-4">
          <v-app-bar-title class="ml-auto" grow></v-app-bar-title>
          <v-btn :to="{ name: 'home'}" style="color: var(--vt-c-medium-purple-1)">Home</v-btn>
          <v-btn :to="{ name: 'signup' }" style="background-color: var(--vt-c-medium-blue-1); color: var(--vt-c-dark-purple-1);">Sign up</v-btn>
        </v-app-bar>
    </v-container>
    <v-container class="fill-height fill-width justify-center">
      <v-row justify="center" class="justify-center">
        <v-col cols="12" md="6">
      <v-card class="pa-4 pt-8" elevation="4" style="z-index: 1; background-color: var(--vt-c-light-orange-1)">
        <v-card-title class="text-center card-title">
          Welcome back
        </v-card-title>
        <v-card-subtitle class="text-center text">
          Please enter your details
        </v-card-subtitle>
        <v-card-text>
          <v-form @submit.prevent="login" class="mt-6">
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="username" label="Username" class="text"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="password" label="Password" type="password" class="text"></v-text-field>
              </v-col>
              <v-col cols="4" class="text-center mx-auto">
                <v-btn type="submit" block class="mt-4" text="Login" style="background-color: var(--vt-c-medium-orange-1)"></v-btn>
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
import{useUserStore}from '@/stores/users';export default{data(){return{userStore:useUserStore(),username:'',password:'',modalVisible:!1,modalTitle:'',modalText:''}},methods:{login(){try{this.userStore.login(this.username,this.password)
this.$router.push({name:"dashboard"})}catch(error){this.showModal('Sign in error',error.message);this.username=''
this.password=''}},showModal(title,text){this.modalVisible=!0;this.modalTitle=title;this.modalText=text},closeModal(){this.modalVisible=!1}},}
</script>

<style>
  .card-title {
    font-family: Orbitron, sans-serif;
    font-weight: bold;
  }

  .text {
    font-size: 15vh;
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