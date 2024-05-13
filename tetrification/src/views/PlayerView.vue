<template>
    <v-container class="playerDetails">
      <v-row>
        
        <!-- Navbar -->
        <v-col cols="1">
          <NavBar></NavBar>
        </v-col>
  
        <v-col cols="3" class="text-center">
            <div>
                <v-card class="mb-4 pb-4 ma-4 game-card" v-if="playerGames.length > 0" v-for="(game, index) in playerGames" :key="index" @click="redirectToGameDetails(game.gameId)">
                    <v-card-title class="game-card-title" v-if="game.gameId == 1 || game.gameId == 2 || game.gameId == 3 || game.gameId == 4">Top 8</v-card-title>
                    <v-card-title class="game-card-title" v-else>Semi-finals</v-card-title>
                    <div class="my-2 py-2 d-flex justify-space-evenly">
                        <img v-if="getPlayerCountry(game.player1) === 'Netherlands'" src="@/assets/images/flags/netherlands.svg" width="20%">
                        <img v-else-if="getPlayerCountry(game.player1) === 'USA'" src="@/assets/images/flags/usa.svg" width="20%">
                        <img v-else src="@/assets/images/flags/tbd_leaderboard.svg" width="20%">
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
                        <img v-else src="@/assets/images/flags/tbd_leaderboard.svg" width="20%">
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
        
        <v-col cols="8" style="background-color: var(--vt-c-light-purple-1);">
            <div class="d-flex">
            <img v-if="player.country == 'USA'" src="@/assets/images/flags/usa.svg">
            <img v-if="player.country == 'Netherlands'" src="@/assets/images/flags/netherlands.svg">
            <h1 class="mx-6">{{ player.name }}</h1>
            </div>
            <div>
                <p class="py-4"><strong>Age:</strong>{{ player.age }}</p>
                <p class="py-4"><strong>Location:</strong>{{ player.location }}</p>
                <p class="py-4"><strong>Style:</strong>{{ player.style }}</p>
                <p class="py-4"><strong>PB:</strong>{{ player.pb }}</p>
            </div>
            <div class="d-flex justify-space-between py-4">
                <img :src="`/src/assets/images/players/${player.image}`" width="60%" >
                <img src="@/assets/images/players/pieces.svg" width="50%">
            </div>
        </v-col>
      </v-row>
    </v-container>
</template>
  
<script>
import{usePlayersStore}from '@/stores/players';import{useGameStore}from '@/stores/games'
import NavBar from '@/components/navbar.vue'
export default{components:{NavBar,},data(){return{playerStore:usePlayersStore(),gameStore:useGameStore(),playerId:null,playerGames:[],}},computed:{player(){this.playerId=this.$route.params.playerId;return this.playerStore.getPlayerId(this.playerId)},games(){return this.gameStore.getGames},},methods:{getPlayerGames(){const allGames=this.games.filter(game=>game.player1===this.player.name||game.player2===this.player.name);const pastGamesId=[1,2,3,4];const otherGamesId=[5,6];const pastGames=pastGamesId.map(gameId=>{const gamesId=allGames.filter(game=>game.gameId===gameId);return gamesId.length>0?gamesId[gamesId.length-1]:null}).filter(game=>game!==null);const otherGames=otherGamesId.map(gameId=>{const gamesId=allGames.filter(game=>game.gameId===gameId);return gamesId.length>0?gamesId[0]:null}).filter(game=>game!==null);this.playerGames.push(...pastGames,...otherGames)},redirectToGameDetails(gameId){this.$router.push(`/dashboard/game/${gameId}`)},getPlayerCountry(playerName){const playersStore=usePlayersStore();const player=playersStore.getPlayers.find(p=>p.name===playerName);return player?player.country:'Unknown'},},mounted(){this.getPlayerGames()}}
</script>

<style scoped>
.playerDetails{max-width:100%}.game-card{background-color:var(--vt-c-white-mute)}.game-card-title{background-color:var(--vt-c-medium-grey-2)}
</style>