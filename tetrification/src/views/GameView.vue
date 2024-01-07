<template>
  <v-container class="gameViewer">
    <v-row>
      <!-- Navbar -->
      <v-col cols="2">
        <NavBar></NavBar>
      </v-col>

      <v-col cols="7" md="6">
        <div class="header">
          <div class="title">
            <h1>Game</h1>
          </div>
          <div class="time">
            <h3>{{ minutes }}:00</h3>
          </div>
          <div class="title">
  <p>Player Info: {{ players('SIDNEV') }}</p>
</div>
        </div>

        <div class="gameboys">
          <v-card class="pa-4 pt-4 mb-8 mt-4" elevation="4" style="z-index: 1; background-color: var(--vt-c-white-mute); width: 45%;">
            <v-card-title class="text-center card-title mb-4" style="margin: 0 auto; display: flex; justify-content: space-evenly;" @click="redirectToPlayerDetails(players(player1))">
              {{ player1 }}
            </v-card-title>
            <v-card-content class="text-center">
              <span>Points: {{ pointsPlayer1 }}</span>
              <div class="screenBg">
                <div class="screen mx-6"></div>
              </div>
              <span>Level: {{ levelPlayer1 }}</span>
              <div class="gamesWon ma-8">
                <div v-if="winsPlayer1 == 0" style="display: flex; justify-content: space-evenly;">
                  <img src="@/assets/images/life1.svg">
                  <img src="@/assets/images/life1.svg">
                  <img src="@/assets/images/life1.svg">
                </div>
                <div v-else-if="winsPlayer1 == 1" style="display: flex; justify-content: space-evenly;">
                  <img src="@/assets/images/life2.svg">
                  <img src="@/assets/images/life1.svg">
                  <img src="@/assets/images/life1.svg">
                </div>
                <div v-else-if="winsPlayer1 == 2" style="display: flex; justify-content: space-evenly;">
                  <img src="@/assets/images/life2.svg">
                  <img src="@/assets/images/life2.svg">
                  <img src="@/assets/images/life1.svg">
                </div>
                <div v-else-if="winsPlayer1 == 3" style="display: flex; justify-content: space-evenly;">
                  <img src="@/assets/images/life2.svg">
                  <img src="@/assets/images/life2.svg">
                  <img src="@/assets/images/life2.svg">
                </div>
              </div>
            </v-card-content>
          </v-card>

          <v-card class="pa-4 pt-4 mb-8 mt-4" elevation="4" style="z-index: 1; background-color: var(--vt-c-white-mute); width: 45%;">
            <v-card-title class="text-center card-title mb-4" style="max-width: 200px; margin: 0 auto;" @click="redirectToPlayerDetails(players(player2))">
              {{ player2 }}
            </v-card-title>
            <v-card-content class="text-center">
              <span>Points: {{ pointsPlayer2 }}</span>
              <div class="screenBg">
                <div class="screen mx-6"></div>
              </div>
              <span>Level: {{ levelPlayer2 }}</span>
              <div class="gamesWon ma-8">
                <div v-if="winsPlayer2 == 0" style="display: flex; justify-content: space-evenly;">
                  <img src="@/assets/images/life1.svg">
                  <img src="@/assets/images/life1.svg">
                  <img src="@/assets/images/life1.svg">
                </div>
                <div v-else-if="winsPlayer2 == 1" style="display: flex; justify-content: space-evenly;">
                  <img src="@/assets/images/life2.svg">
                  <img src="@/assets/images/life1.svg">
                  <img src="@/assets/images/life1.svg">
                </div>
                <div v-else-if="winsPlayer2 == 2" style="display: flex; justify-content: space-evenly;">
                  <img src="@/assets/images/life2.svg">
                  <img src="@/assets/images/life2.svg">
                  <img src="@/assets/images/life1.svg">
                </div>
                <div v-else-if="winsPlayer2 == 3" style="display: flex; justify-content: space-evenly;">
                  <img src="@/assets/images/life2.svg">
                  <img src="@/assets/images/life2.svg">
                  <img src="@/assets/images/life2.svg">
                </div>
              </div>
            </v-card-content>
          </v-card>
        </div>

        <v-card class="pa-4 pt-4" elevation="4" style="z-index: 1; background-color: var(--vt-c-light-purple-1)">
          <v-card-title class="text-center card-title mb-4" style="color: var(--vt-c-medium-purple-1)">
            Who will win?
          </v-card-title>
          <v-card-content>
            <div class="bets">
              <v-btn class="btnBet ma-4" id="btnPlayer1">{{ player1 }}</v-btn>
              <v-btn class="btnBet ma-4" id="btnPlayer2" >{{ player2 }}</v-btn>
            </div>
          </v-card-content>
        </v-card>
      </v-col>
      <v-col class="game-list ml-auto text-center" cols="3" style="display: flex; flex-direction: column; justify-content: space-between;">
        <div style="overflow-y: auto; z-index: 1;">
            <v-card class="mb-4 py-4 ma-4 game-card" v-for="(event, index) in events" :key="index">
              <div style="display: flex; flex-direction: column;">
                <span>{{ event.minutes }}:00</span>
                <div style="display: flex; flex-direction: column;">
                  <p>{{ player1 }} - {{ event.eventPlayer1 }}</p>
                  <p>{{ player2 }} - {{ event.eventPlayer2 }}</p>
                </div>
              </div>
            </v-card>
        </div>
        <img src="@/assets/images/gamefeed.svg" style="width: 100%;">
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useUserStore } from '@/stores/users';
import { useGameStore } from '@/stores/games';
import { usePlayersStore } from '@/stores/players';
import NavBar from '@/components/navbar.vue';

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      userStore: useUserStore(),
      gameStore: useGameStore(),
      playerStore: usePlayersStore(),
      gameId: null,
      minutes: 0,
      player1: '',
      player2: '',
      pointsPlayer1: 0,
      pointsPlayer2: 0,
      levelPlayer1: 0,
      levelPlayer2: 0,
      winsPlayer1: 0,
      eventPlayer1: '',
      eventPlayer2: '',
      winsPlayer2: 0,
      games: [],
      events: [],
      loopExecuted: false,
    };
  },
  methods: {
    async fetchGameData() {
      this.gameId = this.$route.params.gameId;

      try {
        // Fetch the game data
        await this.gameStore.fetchGames();

        // Get the current game using the gameId
        this.games = this.gameStore.getGameEvents(this.gameId);
        
        if (this.gameId != 7) {
            // Prevent from looping more than once
          if (!this.loopExecuted) {
            for (const game of this.games) {
              this.minutes = game.minute;
              this.player1 = game.player1;
              this.player2 = game.player2;
              this.pointsPlayer1 = game.pointsPlayer1;
              this.pointsPlayer2 = game.pointsPlayer2;
              this.levelPlayer1 = game.levelPlayer1;
              this.levelPlayer2 = game.levelPlayer2;
              this.winsPlayer1 = game.winsPlayer1;
              this.winsPlayer2 = game.winsPlayer2;
              this.eventPlayer1 = game.eventPlayer1;
              this.eventPlayer2 = game.eventPlayer2;

              this.events.push({
                minutes: this.minutes,
                eventPlayer1: this.eventPlayer1,
                eventPlayer2: this.eventPlayer2,
              });
    
              console.log("Minutes:", this.minutes);
              console.log("Player 1:", this.player1);
              console.log("Player 2:", this.player2);
              console.log("Points Player 1:", this.pointsPlayer1);
              console.log("Points Player 2:", this.pointsPlayer2);
              console.log("Level Player 1:", this.levelPlayer1);
              console.log("Level Player 2:", this.levelPlayer2);
              console.log("Wins Player 1:", this.winsPlayer1);
              console.log("Wins Player 2:", this.winsPlayer2);

              await new Promise(resolve => setTimeout(resolve, 1000));
            }
            this.loopExecuted = true;
          }
        } else {
          this.minutes = this.games[0].minute;
          this.player1 = this.games[0].player1;
          this.player2 = this.games[0].player2;
          this.pointsPlayer1 = this.games[0].pointsPlayer1;
          this.pointsPlayer2 = this.games[0].pointsPlayer2;
          this.levelPlayer1 = this.games[0].levelPlayer1;
          this.levelPlayer2 = this.games[0].levelPlayer2;
          this.winsPlayer1 = this.games[0].winsPlayer1;
          this.winsPlayer2 = this.games[0].winsPlayer2;
          this.eventPlayer1 = this.games[0].eventPlayer1;
          this.eventPlayer2 = this.games[0].eventPlayer2;

          this.events.push({
            minutes: this.minutes,
            eventPlayer1: this.eventPlayer1,
            eventPlayer2: this.eventPlayer2,
          });
        }
      } catch (error) {
        console.error("Error fetching game data:", error);
      }
    },
    bets() {

      const btnPlayer1 = document.getElementById('btnPlayer1');
      const btnPlayer2 = document.getElementById('btnPlayer2');

      const pastGamesIds = [1, 2, 3, 4];
      const liveGamesIds = [5, 6];
      const futureGamesIds = [7];

      if (pastGamesIds.includes(this.gameId)) {
        btnPlayer1.disabled = true;
        btnPlayer2.disabled = true;
      } else if (liveGamesIds.includes(this.gameId)) {
        console.log('else if');
      } else {
        console.log('else');
      }
    },
    players(playerName) {
      return this.playerStore.getPlayerIdByName(playerName);
    },
    redirectToPlayerDetails(playerId) {
      this.$router.push(`/dashboard/game/${this.gameId}/${playerId}`);
    },
  },
mounted() {
    this.fetchGameData();
},
};
</script>

<style scoped>
  .gameViewer {
    width: 100%;
    max-width: 1550px;
  }

  .header, .gameboys {
    display: flex;
    justify-content: space-between; 
  }

  .gameboys {
    height: 60%;
  }

  .screenBg {
    height: 50%;
    background-color: var(--vt-c-dark-grey-1);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .screen {
    height: 80%;
    width: 90%;
    background-color: var(--vt-c-white);
  }

  .bets {
    display: flex;
    justify-content: space-evenly;
  }

  .btnBet {
    background-color: var(--vt-c-white);
    border: 2px solid var(--vt-c-medium-purple-2);
    width: 150px;
  }

  .game-list {
    background-color: var(--vt-c-white-mute); 
    height: 110vh; 
    padding: 0; 
  }
</style>
