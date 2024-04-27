<template>
    <v-container class="leaderboard">
      <v-row>
        
        <!-- Navbar -->
        <v-col cols="2">
          <NavBar></NavBar>
        </v-col>
  
        <v-col cols="10" md="9">
            <div>
            <h1>Leaderboard</h1>
            </div>

            <div class="navbar2 d-flex my-4">
              <button @click="toggleSection('tournament')">
                <h2 class="mr-6" :class="{ 'active-text': showTournament }">Tournament</h2>
              </button>
              <button @click="toggleSection('users')">
                <h2 class="mr-6" :class="{ 'active-text': showUsers }">Users</h2>
              </button>
            </div>

            <div class="tournament btn-active" v-show="showTournament">
              <v-row style="height: 100%;">
                <v-col cols="2" class="d-flex flex-column justify-space-between mr-4">
                  <v-card class="d-flex card-player pa-2 mt-12 justify-space-between">
                    <img src="@/assets/images/flags/netherlands.svg" v-if="leaderboardData[0].country1 === 'NETHERLANDS'" width="30%">
                    <img src="@/assets/images/flags/usa.svg" v-if="leaderboardData[0].country1 === 'USA'" width="30%">
                    <span class="align-self-center">{{ leaderboardData[0].player1 }}</span>
                  </v-card>
                  <v-card class="d-flex card-player pa-2 justify-space-between">
                    <img src="@/assets/images/flags/netherlands.svg" v-if="leaderboardData[0].country2 === 'NETHERLANDS'" width="30%">
                    <img src="@/assets/images/flags/usa.svg" v-if="leaderboardData[0].country2 === 'USA'" width="30%">
                    <span class="align-self-center">{{ leaderboardData[0].player2 }}</span>
                  </v-card>
                  <v-card class="d-flex card-player pa-2 justify-space-between">
                    <img src="@/assets/images/flags/netherlands.svg" v-if="leaderboardData[2].country1 === 'NETHERLANDS'" width="30%">
                    <img src="@/assets/images/flags/usa.svg" v-if="leaderboardData[2].country1 === 'USA'" width="30%">
                    <span class="align-self-center">{{ leaderboardData[2].player1  }}</span>
                  </v-card>
                  <v-card class="d-flex card-player pa-2 mb-12 justify-space-between">
                    <img src="@/assets/images/flags/netherlands.svg" v-if="leaderboardData[2].country2 === 'NETHERLANDS'" width="30%">
                    <img src="@/assets/images/flags/usa.svg" v-if="leaderboardData[2].country2 === 'USA'" width="30%">
                    <span class="align-self-center">{{ leaderboardData[2].player2  }}</span>
                  </v-card>
                </v-col>
                <v-col cols="2" class="d-flex flex-column justify-space-around mx-4">
                  <v-card class="d-flex card-player pa-2 mb-6 justify-space-between">
                    <img src="@/assets/images/flags/netherlands.svg" v-if="leaderboardData[4].country1 === 'NETHERLANDS'" width="30%">
                    <img src="@/assets/images/flags/usa.svg" v-if="leaderboardData[4].country1 === 'USA'" width="30%">
                    <span class="align-self-center">{{ leaderboardData[4].player1  }}</span>
                  </v-card>
                  <v-card class="d-flex card-player pa-2 justify-space-between">
                    <img src="@/assets/images/flags/netherlands.svg" v-if="leaderboardData[5].country1 === 'NETHERLANDS'" width="30%">
                    <img src="@/assets/images/flags/usa.svg" v-if="leaderboardData[5].country1 === 'USA'" width="30%">
                    <span class="align-self-center">{{ leaderboardData[5].player1  }}</span>
                  </v-card>
                </v-col>
                <v-col cols="2" class="d-flex flex-column justify-center align-center mx-6">
                  <v-card class="d-flex card-player pa-2 justify-space-between">
                    <img src="@/assets/images/flags/tbd_leaderboard.svg" width="30%">
                    <span class="align-self-center">TBD</span>
                  </v-card>
                  <v-card class="card-player-wrapper my-6 py-8 px-4">
                    <div>
                      <v-card class="d-flex card-player pa-2 justify-space-between mx-auto">
                        <img src="@/assets/images/flags/tbd_leaderboard.svg" width="30%">
                        <span class="align-self-center">TBD</span>
                      </v-card>
                    </div>
                  </v-card>
                  <v-card class="d-flex card-player pa-2 justify-space-between">
                    <img src="@/assets/images/flags/tbd_leaderboard.svg" width="30%">
                    <span class="align-self-center">TBD</span>
                  </v-card>
                </v-col>
                <v-col cols="2" class="d-flex flex-column justify-space-around mx-4">
                  <v-card class="d-flex card-player pa-2 justify-space-between">
                    <img src="@/assets/images/flags/netherlands.svg" v-if="leaderboardData[4].country2 === 'NETHERLANDS'" width="30%">
                    <img src="@/assets/images/flags/usa.svg" v-if="leaderboardData[4].country2 === 'USA'" width="30%">
                    <span class="align-self-center">{{ leaderboardData[4].player2  }}</span>
                  </v-card>
                  <v-card class="d-flex card-player pa-2 justify-space-between">
                    <img src="@/assets/images/flags/netherlands.svg" v-if="leaderboardData[5].country2 === 'NETHERLANDS'" width="30%">
                    <img src="@/assets/images/flags/usa.svg" v-if="leaderboardData[5].country2 === 'USA'" width="30%">
                    <span class="align-self-center">{{ leaderboardData[5].player2  }}</span>
                  </v-card>
                </v-col>
                <v-col cols="2" class="d-flex flex-column justify-space-between mx-4">
                  <v-card class="d-flex card-player pa-2 mt-12 justify-space-between">
                    <img src="@/assets/images/flags/netherlands.svg" v-if="leaderboardData[1].country1 === 'NETHERLANDS'" width="30%">
                    <img src="@/assets/images/flags/usa.svg" v-if="leaderboardData[1].country1 === 'USA'" width="30%">
                    <span class="align-self-center">{{ leaderboardData[1].player1  }}</span>
                  </v-card>
                  <v-card class="d-flex card-player pa-2 justify-space-between">
                    <img src="@/assets/images/flags/netherlands.svg" v-if="leaderboardData[1].country2 === 'NETHERLANDS'" width="30%">
                    <img src="@/assets/images/flags/usa.svg" v-if="leaderboardData[1].country2 === 'USA'" width="30%">
                    <span class="align-self-center">{{ leaderboardData[1].player2  }}</span>
                  </v-card>
                  <v-card class="d-flex card-player pa-2 justify-space-between">
                    <img src="@/assets/images/flags/netherlands.svg" v-if="leaderboardData[3].country1 === 'NETHERLANDS'" width="30%">
                    <img src="@/assets/images/flags/usa.svg" v-if="leaderboardData[3].country1 === 'USA'" width="30%">
                    <span class="align-self-center">{{ leaderboardData[3].player1  }}</span>
                  </v-card>
                  <v-card class="d-flex card-player pa-2 mb-12 justify-space-between">
                    <img src="@/assets/images/flags/netherlands.svg" v-if="leaderboardData[3].country2 === 'NETHERLANDS'" width="30%">
                    <img src="@/assets/images/flags/usa.svg" v-if="leaderboardData[3].country2 === 'USA'" width="30%">
                    <span class="align-self-center">{{ leaderboardData[3].player2  }}</span>
                  </v-card>
                </v-col>
              </v-row>
            </div>

            <div class="users" v-show="showUsers">
              <v-row class="justify-center mt-8">
                <v-col cols="4">
                  <v-card class="d-flex flex-row justify-space-between pa-4" @click="redirectToUserDetails(userData[0].id)" :elevation="0">
                    <img src="@/assets/images/avatars/avatarM.svg" v-if="userData[0].gender === 'Male'" width="35%">
                    <img src="@/assets/images/avatars/avatarF.svg" v-if="userData[0].gender === 'Female'" width="35%">
                    <div class="d-flex flex-column justify-space-between text-center">
                      <span class="font-weight-bold">{{ userData[0].username }}</span>
                      <span>{{ userData[0].country }}</span>
                      <span>{{ userData[0].points }}</span>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
              <v-row class="mt-8 d-flex justify-center">
                <v-col cols="4">
                  <v-card class="d-flex flex-row justify-space-between pa-4" @click="redirectToUserDetails(userData[1].id)" :elevation="0">
                    <img src="@/assets/images/avatars/avatarM.svg" v-if="userData[1].gender === 'Male'" width="35%">
                    <img src="@/assets/images/avatars/avatarF.svg" v-if="userData[1].gender === 'Female'" width="35%">
                    <div class="d-flex flex-column justify-space-between text-center">
                      <span class="font-weight-bold">{{ userData[1].username }}</span>
                      <span>{{ userData[1].country }}</span>
                      <span>{{ userData[1].points }}</span>
                    </div>
                  </v-card>
                </v-col>
                <v-col cols="4" class="d-inline-flex flex-column align-center">
                  <v-card style="height: 200px; width: 150px; background-color: var(--vt-c-white-mute);" class="py-2">
                    <h3 class="font-weight-bold my-3 text-center">1</h3>
                  </v-card>
                </v-col>
                <v-col cols="4">
                  <v-card class="d-flex flex-row justify-space-between pa-4" @click="redirectToUserDetails(userData[2].id)" :elevation="0">
                    <img src="@/assets/images/avatars/avatarM.svg" v-if="userData[2].gender === 'Male'" width="35%">
                    <img src="@/assets/images/avatars/avatarF.svg" v-if="userData[2].gender === 'Female'" width="35%">
                    <div class="d-flex flex-column justify-space-between text-center">
                      <span class="font-weight-bold">{{ userData[2].username }}</span>
                      <span>{{ userData[2].country }}</span>
                      <span>{{ userData[2].points }}</span>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
              <v-row class="justify-center mt-0">
                <v-card style="width: 600px; height: 150px; background-color: var(--vt-c-white-mute);" class="d-flex pa-8">
                  <h3 class="font-weight-bold my-3 text-center">2</h3>
                  <h3 class="font-weight-bold my-3 text-center ml-auto">3</h3>
                </v-card>
              </v-row>
              <v-row class="justify-center mt-8">
                <v-col cols="6" lg="6" sm="12">
                  <v-card class="card-user d-flex flex-row justify-space-around py-8" @click="redirectToUserDetails(userData[3].id)">
                    <h3 class="my-6 font-weight-bold">4</h3>
                    <img src="@/assets/images/avatars/avatarM.svg" v-if="userData[3].gender === 'Male'" width="20%">
                    <img src="@/assets/images/avatars/avatarF.svg" v-if="userData[3].gender === 'Female'" width="20%">
                    <div class="d-flex flex-column justify-space-between text-center">
                      <span class="font-weight-bold">{{ userData[3].username }}</span>
                      <span>{{ userData[3].country }}</span>
                      <span>{{ userData[3].points }}</span>
                    </div>
                  </v-card>
                </v-col>
                <v-col cols="6" lg="6" sm="12">
                  <v-card class="card-user d-flex flex-row justify-space-around py-8" @click="redirectToUserDetails(userData[4].id)">
                    <h3 class="my-6 font-weight-bold">5</h3>
                    <img src="@/assets/images/avatars/avatarM.svg" v-if="userData[3].gender === 'Male'" width="20%">
                    <img src="@/assets/images/avatars/avatarF.svg" v-if="userData[3].gender === 'Female'" width="20%">
                    <div class="d-flex flex-column justify-space-between text-center">
                      <span class="font-weight-bold">{{ userData[4].username }}</span>
                      <span>{{ userData[4].country }}</span>
                      <span>{{ userData[4].points }}</span>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </div>

        </v-col>
      </v-row>
    </v-container>
</template>
  
<script>
import{useUserStore}from '@/stores/users';import{useLeaderStore}from '@/stores/leaderboard';import NavBar from '@/components/navbar.vue'
export default{components:{NavBar,},data(){return{userStore:useUserStore(),leaderboardStore:useLeaderStore(),leaderboardData:null,userData:null,showTournament:!0,showUsers:!1,}},computed:{orderedUsers(){return this.userStore.getUsers.slice().sort((a,b)=>b.points-a.points).slice(0,5)},},methods:{toggleSection(section){this.showTournament=section==='tournament';this.showUsers=section==='users'},leaderboard(){this.leaderboardData=this.leaderboardStore.getLeader},users(){this.userData=this.orderedUsers;console.log(this.userData)},redirectToUserDetails(id){console.log('Redirecting to user details for:',id);this.$router.push(`/leaderboard/${id}`)},},created(){this.leaderboard();this.users()}}
  </script>

<style scoped>
  .leaderboard {
    max-width: 100%;
}

  .active-text {
    text-decoration: underline;
    background-color: white;
  }
  .active-text {
    font-weight: bold;
  }

  .tournament {
    height: 100%;
  }

  .card-player {
    width: 200px;
    background-color: var(--vt-c-medium-blue-2);
  }

  .card-player-wrapper {
    background-color: var(--vt-c-dark-blue-1);
    width: 250px;
  }

  .card-user {
    background-color: var(--vt-c-white-mute);
  }
</style>