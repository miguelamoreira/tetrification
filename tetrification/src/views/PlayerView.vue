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
                    <v-card-title class="game-card-title">Game: {{ game.gameId }}</v-card-title>
                    <div style="display: flex; justify-content: space-evenly;" class="ma-2 py-2">
                    <v-btn></v-btn>
                    <span style="width: 100px;">{{ game.player1 }}</span>
                    <div style="display: flex; justify-content: space-around;">
                        <img src="@/assets/images/life1.svg"  style="width: 30%;">
                        <img src="@/assets/images/life1.svg" style="width: 30%;">
                        <img src="@/assets/images/life1.svg" style="width: 30%;">
                    </div>
                    </div>
                    <div style="display: flex; justify-content: space-evenly;" class="mt-6">
                    <v-btn></v-btn>
                    <span style="width: 100px;">{{ game.player2 }}</span>
                    <div style="display: flex; justify-content: space-around;">
                        <img src="@/assets/images/life1.svg" style="width: 30%;">
                        <img src="@/assets/images/life1.svg" style="width: 30%;">
                        <img src="@/assets/images/life1.svg" style="width: 30%;">
                    </div>
                    </div>
                </v-card>
            </div>
        </v-col>
        
        <v-col cols="8" style="background-color: var(--vt-c-light-purple-1);">
            <div>
            <img v-if="player.country == 'USA'" src="@/assets/images/flags/usa.svg">
            <img v-if="player.country == 'Netherlands'" src="@/assets/images/flags/netherlands.svg">
            <h1>{{ player.name }}</h1>
            </div>
            <div>
                <p><strong>Age:</strong>{{ player.age }}</p>
                <p><strong>Location:</strong>{{ player.location }}</p>
                <p><strong>Style:</strong>{{ player.style }}</p>
                <p><strong>PB:</strong>{{ player.pb }}</p>
            </div>
            <div style="display: flex; justify-content: space-between;">
                <img>
                <img src="@/assets/images/players/pieces.svg">
            </div>
        </v-col>
      </v-row>
    </v-container>
</template>
  
<script>
import { usePlayersStore } from '@/stores/players';
import { useGameStore } from '@/stores/games'
import NavBar from '@/components/navbar.vue'
  
  export default {
    components: {
      NavBar,
    },
    data() {
      return {
        playerStore: usePlayersStore(),
        gameStore: useGameStore(),
        playerId: null,
        playerGames: [],
      };
    },
    computed: {
        player() {
            this.playerId = this.$route.params.playerId;
            return this.playerStore.getPlayerId(this.playerId);
        },
        games() {
            return this.gameStore.getGames;
        },
    },
    methods: {
        getPlayerGames() {
            const allGames = this.games.filter(game => game.player1 === this.player.name || game.player2 === this.player.name);
            const pastGamesId = [1, 2, 3, 4];
            const otherGamesId = [5, 6, 7];

            const pastGames = pastGamesId.map(gameId => {
                const gamesId = allGames.filter(game => game.gameId === gameId);
                return gamesId.length > 0 ? gamesId[gamesId.length - 1] : null;
            }).filter(game => game !== null);

            const otherGames = otherGamesId.map(gameId => {
                const gamesId = allGames.filter(game => game.gameId === gameId);
                return gamesId.length > 0 ? gamesId[0] : null;
            }).filter(game => game !== null);

            this.playerGames.push(...pastGames, ...otherGames);
        },
        redirectToGameDetails(gameId) {
            this.$router.push(`/dashboard/game/${gameId}`);
        },
    },
    mounted() {
        this.getPlayerGames();
    }
  };
  </script>

<style scoped>
  .playerDetails {
    width: 100%;
    max-width: 1550px;
}

.game-card {
    background-color: var(--vt-c-white-mute);
}

.game-card-title {
    background-color: var(--vt-c-medium-grey-2);
}
</style>