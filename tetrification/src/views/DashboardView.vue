<template>
  <v-container class="dashboard">
    <v-row>
      
      <!-- Navbar -->
      <v-col cols="2">
        <NavBar></NavBar>
      </v-col>

      <!-- middle side content -->
      <v-col cols="7" md="6">
        <div>
          <h1>Dashboard</h1>
          <h3>Welcome back, <span>{{userStore.getUser.username}}</span>.</h3>
        </div>
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

        <!-- Live card -->
        <v-card class="pa-4 pt-4 mb-8 mt-4" elevation="4" style="z-index: 1; background-color: var(--vt-c-light-purple-1)">
          <v-card-title class="text-center card-title mb-4" style="background-color: var(--vt-c-medium-purple-2); max-width: 150px; margin: 0 auto;">
            Live
          </v-card-title>
          <v-card v-for="(game, index) in liveGames" :key="index" class="pa-6  mb-4 game d-flex justify-space-evenly align-center" style="z-index: 1;" @click="redirectToGameDetails(game.gameId)">
            <!-- button simulating image; elements positioning purposes -->
            <img v-if="getPlayerCountry(game.player1) === 'Netherlands'" src="@/assets/images/flags/netherlands.svg" width="10%">
            <img v-else-if="getPlayerCountry(game.player1) === 'USA'" src="@/assets/images/flags/usa.svg" width="10%">
            <span>{{ game.player1 }}</span>
            <h2>{{ game.pointsPlayer1 }}</h2>
            <span>vs</span>
            <h2>{{ game.pointsPlayer2 }}</h2>
            <span>{{ game.player2 }}</span>
            <img v-if="getPlayerCountry(game.player2) === 'Netherlands'" src="@/assets/images/flags/netherlands.svg" width="10%">
            <img v-else-if="getPlayerCountry(game.player2) === 'USA'" src="@/assets/images/flags/usa.svg" width="10%">
          </v-card>
        </v-card>

        <!-- Top Seeds card -->
        <v-card class="pa-4 pt-4" elevation="4" style="z-index: 1; background-color: var(--vt-c-white-soft)" :to="{name: 'leaderboard'}">
          <v-card-title class="text-center card-title mb-4">
            Top Seeds
          </v-card-title>
          <v-row>
            <v-col cols="4">
              <v-card class="mb-4 pb-4" style="z-index: 1;">
                <v-card-title class="text-center card-title">#1</v-card-title>
                <v-card-subtitle class="text-center">SIDNEV</v-card-subtitle>
              </v-card>
            </v-col>
            <v-col cols="4">
              <v-card class="mb-4 pb-4" style="z-index: 1;">
                <v-card-title class="text-center card-title">#2</v-card-title>
                <v-card-subtitle class="text-center">DENGLER</v-card-subtitle>
              </v-card>
            </v-col>
            <v-col cols="4">
              <v-card class="mb-4 pb-4" style="z-index: 1;">
                <v-card-title class="text-center card-title">#3</v-card-title>
                <v-card-subtitle class="text-center">FRACTAL</v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <!-- right side -->
      <v-col class="game-list ml-auto text-center" cols="3">
        <v-text-field v-model="searchQuery" label="Search" outlined dense class="mt-4 pa-4" @click="handleBtnClick" @input="searchGames"></v-text-field>
        <h4 class="pa-4 font-weight-bold">Games</h4>
        <v-btn class="ma-4 btn-game-list btn-active" @click="handleBtnClick('past')" id="btnPast">Past</v-btn>
        <v-btn class="ma-4 btn-game-list" @click="handleBtnClick('future')" id="btnFuture">Future</v-btn>
        <div>
          <v-card class="mb-4 py-4 ma-4 game-card d-flex flex-column align-content-center" v-if="visibleGames.length > 0" v-for="(game, index) in visibleGames" :key="index" @click="redirectToGameDetails(game.gameId)">
            <div class="my-2 d-flex justify-space-evenly">
              <img v-if="getPlayerCountry(game.player1) === 'Netherlands'" src="@/assets/images/flags/netherlands.svg" width="20%">
              <img v-else-if="getPlayerCountry(game.player1) === 'USA'" src="@/assets/images/flags/usa.svg" width="20%">
              <img v-else src="@/assets/images/flags/tbd_dashboard.svg" width="20%">
              <span style="width: 100px;">{{ game.player1 }}</span>
              <div v-if="game.winsPlayer1 === 0" class="d-flex justify-space-around">
                <img src="@/assets/images/life1.svg"  style="width: 30%;">
                <img src="@/assets/images/life1.svg" style="width: 30%;">
                <img src="@/assets/images/life1.svg" style="width: 30%;">
              </div>
              <div v-if="game.winsPlayer1 === 1" class="d-flex justify-space-around">
                <img src="@/assets/images/life2.svg"  style="width: 30%;">
                <img src="@/assets/images/life1.svg" style="width: 30%;">
                <img src="@/assets/images/life1.svg" style="width: 30%;">
              </div>
              <div v-if="game.winsPlayer1 === 2" class="d-flex justify-space-around">
                <img src="@/assets/images/life2.svg"  style="width: 30%;">
                <img src="@/assets/images/life2.svg" style="width: 30%;">
                <img src="@/assets/images/life1.svg" style="width: 30%;">
              </div>
              <div v-if="game.winsPlayer1 === 3" class="d-flex justify-space-around">
                <img src="@/assets/images/life2.svg"  style="width: 30%;">
                <img src="@/assets/images/life2.svg" style="width: 30%;">
                <img src="@/assets/images/life2.svg" style="width: 30%;">
              </div>
            </div>
            <div class="mt-6 d-flex justify-space-evenly">
              <img v-if="getPlayerCountry(game.player2) === 'Netherlands'" src="@/assets/images/flags/netherlands.svg" width="20%">
              <img v-else-if="getPlayerCountry(game.player2) === 'USA'" src="@/assets/images/flags/usa.svg" width="20%">
              <img v-else src="@/assets/images/flags/tbd_dashboard.svg" width="20%">
              <span style="width: 100px;">{{ game.player2 }}</span>
              <div v-if="game.winsPlayer2 === 0" class="d-flex justify-space-around">
                <img src="@/assets/images/life1.svg"  style="width: 30%;">
                <img src="@/assets/images/life1.svg" style="width: 30%;">
                <img src="@/assets/images/life1.svg" style="width: 30%;">
              </div>
              <div v-if="game.winsPlayer2 === 1" class="d-flex justify-space-around">
                <img src="@/assets/images/life2.svg"  style="width: 30%;">
                <img src="@/assets/images/life1.svg" style="width: 30%;">
                <img src="@/assets/images/life1.svg" style="width: 30%;">
              </div>
              <div v-if="game.winsPlayer2 === 2" class="d-flex justify-space-around">
                <img src="@/assets/images/life2.svg"  style="width: 30%;">
                <img src="@/assets/images/life2.svg" style="width: 30%;">
                <img src="@/assets/images/life1.svg" style="width: 30%;">
              </div>
              <div v-if="game.winsPlayer2 === 3" class="d-flex justify-space-around">
                <img src="@/assets/images/life2.svg"  style="width: 30%;">
                <img src="@/assets/images/life2.svg" style="width: 30%;">
                <img src="@/assets/images/life2.svg" style="width: 30%;">
              </div>
            </div>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useUserStore } from '@/stores/users';
import { useGameStore } from '@/stores/games'
import { usePlayersStore } from '@/stores/players';
import NavBar from '@/components/navbar.vue'
import games from '@/api/mocks/games';

export default {
  components:{NavBar,},data(){return{userStore:useUserStore(),gameStore:useGameStore(),playersStore:usePlayersStore(),searchQuery:'',liveGames:[],visibleGames:[],}},methods:{games(){return this.gameStore.getGames},redirectToGameDetails(gameId){this.$router.push(`/dashboard/game/${gameId}`)},handleBtnClick(type){const btnPast=document.getElementById('btnPast');const btnFuture=document.getElementById('btnFuture');if(type==='past'){btnPast.classList.add('btn-active');btnFuture.classList.remove('btn-active');this.searchQuery='';this.visibleGames=this.getPastGames()}else if(type==='future'){btnFuture.classList.add('btn-active');btnPast.classList.remove('btn-active');this.searchQuery='';this.visibleGames=this.getFutureGames()}else{btnPast.classList.remove('btn-active');btnFuture.classList.remove('btn-active');this.visibleGames=[]}},getLiveGames(){const liveGameIds=[5,6];console.log('All games:',this.gameStore.getGames);const liveGames=liveGameIds.map(gameId=>{const gamesId=this.gameStore.getGames.filter(game=>game.gameId===gameId);return gamesId.length>0?gamesId[0]:null}).filter(game=>game!==null);console.log('Live games:',liveGames);return liveGames},getPastGames(){const pastGameIds=[1,2,3,4];console.log('All games:',this.gameStore.getGames);const pastGames=pastGameIds.map(gameId=>{const gamesId=this.gameStore.getGames.filter(game=>game.gameId===gameId);return gamesId.length>0?gamesId[gamesId.length-1]:null}).filter(game=>game!==null);console.log('Past games:',pastGames);return pastGames},getFutureGames(){const futureGameIds=[7];console.log('All games:',this.gameStore.getGames);const futureGames=futureGameIds.map(gameId=>{const gamesId=this.gameStore.getGames.filter(game=>game.gameId===gameId);return gamesId.length>0?gamesId[0]:null}).filter(game=>game!==null);futureGames[0].player1='TBD';futureGames[0].player2='TBD';console.log('Future games:',futureGames);return futureGames},searchGames(){const searchPlayer=this.searchQuery.toLowerCase().trim();if(searchPlayer.length===0){this.visibleGames=[];return}
this.visibleGames=this.games().filter(game=>{const player1=game.player1.toLowerCase().includes(searchPlayer);const player2=game.player2.toLowerCase().includes(searchPlayer);if([1,2,3,4].includes(game.gameId)){const filteredGames=this.gameStore.getGames.filter(g=>g.gameId===game.gameId);return player1||player2&&filteredGames.length>0?game===filteredGames[filteredGames.length-1]:!1}else if([5,6,7].includes(game.gameId)){const filteredGames=this.gameStore.getGames.filter(g=>g.gameId===game.gameId);return player1||player2&&filteredGames.length>0?game===filteredGames[0]:!1}
return!1})},getPlayerCountry(playerName){const playersStore=usePlayersStore();const player=playersStore.getPlayers.find(p=>p.name===playerName);return player?player.country:'Unknown'},},created(){if(this.games().length===0){this.gameStore.fetchGames().then(()=>{this.liveGames=this.getLiveGames();this.visibleGames=this.getPastGames()})}else{this.liveGames=this.getLiveGames();this.visibleGames=this.getPastGames()}},}
</script>

<style scoped>
  .dashboard {
    max-width: 100%;
  }

  h3 span {
    color: var(--vt-c-medium-purple-2);
  }

  .streak h4 {
    font-size: 4vh;
    color: #FBD73A;
  }

  .game-list {
    background-color: var(--vt-c-white-mute); 
    padding: 0; 
  }

  .btn-game-list {
    width: 40%;
    background-color: var(--vt-c-white-mute);
    color: var(--vt-c-dark-purple-2);
    box-shadow: none;
  }

  .btn-game-list:hover, .btn-active  {
    background-color: var(--vt-c-dark-purple-2);
    color: var(--vt-c-white-mute);
  }
  
</style>
