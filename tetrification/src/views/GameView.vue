<template>
  <v-container class="gameViewer">
    <v-row>
      <!-- Navbar -->
      <v-col cols="2">
        <NavBar></NavBar>
      </v-col>

      <v-col cols="7" md="6">
        <div class="header d-flex justify-space-between">
          <div class="title">
            <h1>Game</h1>
          </div>
          <div class="time">
            <h3>{{ minutes }}:00</h3>
          </div>
        </div>

        <div class="gameboys d-flex justify-space-between">
          <v-card class="pa-4 pt-4 mb-8 mt-4" elevation="4" style="z-index: 1; background-color: var(--vt-c-white-mute); width: 45%;">
            <v-card-title class="text-center card-title mb-4" style="margin: 0 auto; display: flex; justify-content: space-evenly;" v-if="gameId == 7">
            {{ player1 }}
          </v-card-title>
            <v-card-title class="text-center card-title mb-4 d-flex justify-space-evenly mx-auto my-0" @click="redirectToPlayerDetails(players(player1))" v-else>
              {{ player1 }}
            </v-card-title>
            <v-card-content class="text-center">
              <span>Points: {{ pointsPlayer1 }}</span>
              <div class="screenBg d-flex justify-content-center">
                <div class="screen mx-6 d-flex flex-column-reverse align-items-center">
                  <div class="screenProgress" id="progressPlayer1" :style="{ height: calculateProgressHeight(pointsPlayer1, pointsPlayer2).player1 }"></div>
                </div>
              </div>
              <span>Level: {{ levelPlayer1 }}</span>
              <div class="gamesWon ma-8">
                <div v-if="winsPlayer1 == 0" class="d-flex justify-space-evenly">
                  <img src="@/assets/images/life1.svg">
                  <img src="@/assets/images/life1.svg">
                  <img src="@/assets/images/life1.svg">
                </div>
                <div v-else-if="winsPlayer1 == 1" class="d-flex justify-space-evenly">
                  <img src="@/assets/images/life2.svg">
                  <img src="@/assets/images/life1.svg">
                  <img src="@/assets/images/life1.svg">
                </div>
                <div v-else-if="winsPlayer1 == 2" class="d-flex justify-space-evenly">
                  <img src="@/assets/images/life2.svg">
                  <img src="@/assets/images/life2.svg">
                  <img src="@/assets/images/life1.svg">
                </div>
                <div v-else-if="winsPlayer1 == 3" class="d-flex justify-space-evenly">
                  <img src="@/assets/images/life2.svg">
                  <img src="@/assets/images/life2.svg">
                  <img src="@/assets/images/life2.svg">
                </div>
              </div>
            </v-card-content>
          </v-card>

          <v-card class="pa-4 pt-4 mb-8 mt-4" elevation="4" style="z-index: 1; background-color: var(--vt-c-white-mute); width: 45%;">
            <v-card-title class="text-center card-title mb-4" style="margin: 0 auto; display: flex; justify-content: space-evenly;" v-if="gameId == 7">
            {{ player2 }}
          </v-card-title>
            <v-card-title class="text-center card-title mb-4" style="max-width: 200px; margin: 0 auto;" @click="redirectToPlayerDetails(players(player2))" v-else>
              {{ player2 }}
            </v-card-title>
            <v-card-content class="text-center">
              <span>Points: {{ pointsPlayer2 }}</span>
              <div class="screenBg d-flex justify-content-center">
                <div class="screen mx-6 d-flex flex-column-reverse align-items-center">
                  <div class="screenProgress" id="progressPlayer2" :style="{ height: calculateProgressHeight(pointsPlayer2, pointsPlayer1).player2 }"></div>
                </div>
              </div>
              <span>Level: {{ levelPlayer2 }}</span>
              <div class="gamesWon ma-8">
                <div v-if="winsPlayer2 == 0" class="d-flex justify-space-evenly">
                  <img src="@/assets/images/life1.svg">
                  <img src="@/assets/images/life1.svg">
                  <img src="@/assets/images/life1.svg">
                </div>
                <div v-else-if="winsPlayer2 == 1" class="d-flex justify-space-evenly">
                  <img src="@/assets/images/life2.svg">
                  <img src="@/assets/images/life1.svg">
                  <img src="@/assets/images/life1.svg">
                </div>
                <div v-else-if="winsPlayer2 == 2" class="d-flex justify-space-evenly">
                  <img src="@/assets/images/life2.svg">
                  <img src="@/assets/images/life2.svg">
                  <img src="@/assets/images/life1.svg">
                </div>
                <div v-else-if="winsPlayer2 == 3" class="d-flex justify-space-evenly">
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
            <div class="bets d-flex justify-space-evenly">
              <v-btn class="btnBet ma-4" id="btnPlayer1" :disabled="btnPlayer1" @click="placeBet(player1)">{{ player1 }}</v-btn>
              <v-btn class="btnBet ma-4" id="btnPlayer2" :disabled="btnPlayer2" @click="placeBet(player2)">{{ player2 }}</v-btn>
            </div>
          </v-card-content>
        </v-card>
      </v-col>
      <v-col class="game-list ml-auto text-center d-flex flex-column justify-space-between" cols="3">
        <div style="overflow-y: auto; z-index: 1;" class="d-flex flex-column-reverse">
            <v-card class="mb-4 py-4 ma-4 game-card" v-for="(event, index) in events" :key="index" style="min-height: 100px;">
              <div class="d-flex flex-column">
                <span>{{ event.minutes }}:00</span>
                <div class="d-flex flex-column">
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
import { useGameStore } from '@/stores/games';
import { usePlayersStore } from '@/stores/players';
import NavBar from '@/components/navbar.vue';

export default {
components: {
  NavBar
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
    btnPlayer1: false,
    btnPlayer2: false,
    modalVisible: false,
    modalTitle: '',
    modalText: ''
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

      const lastEvent = this.games[this.games.length - 1];
        
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

            if (game.minutes == lastEvent.minute) {
              this.checkBet();
            }

            await new Promise(resolve => setTimeout(resolve, 1000));
          }

          this.checkBet();
          this.loopExecuted = true;
        }
      } else {
        this.minutes = this.games[0].minute;
        this.player1 = 'TBD';
        this.player2 = 'TBD';
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
  async handleClickBets() {
    this.games = this.gameStore.getGameEvents(this.gameId);

    if (this.gameId == 1 || this.gameId == 2 || this.gameId == 3 || this.gameId == 4) {
      this.btnPlayer1 = true;
      this.btnPlayer2 = true;
    } else if (this.gameId == 5 || this.gameId == 6) {
      const middleGame = Math.floor(this.games.length / 2);
    
      for (const game of this.games) {
        if (game.minute >=  middleGame) {
          this.btnPlayer1 = true;
          this.btnPlayer2 = true;
        }
        
        await new Promise(resolve => setTimeout(resolve, 1000));

      }
    } 
  },
  placeBet(playerBet) {
    const btnPlayer1 = document.getElementById('btnPlayer1');
    const btnPlayer2 = document.getElementById('btnPlayer2');

    this.userStore.addOrUpdateBet(this.gameId, playerBet);

    if (playerBet == this.player1) {
      btnPlayer1.classList.add('btn-active');
      btnPlayer2.classList.remove('btn-active');
    } else {
      btnPlayer2.classList.add('btn-active');
      btnPlayer1.classList.remove('btn-active');
    }
  },
  async checkBet() {
    try {
      const winner = this.gameStore.getWinner(this.gameId);
      const betGame = this.userStore.user.bets.find(bet => bet.gameId === this.gameId);

      if (this.userStore.user.bets.length > 0 && winner === betGame?.playerBet) {
        this.userStore.addPoints(5);
        this.showModal('Game finished', `You won the bet! You now have ${this.userStore.user.points} points.`);
        console.log('You won! Total points:', this.userStore.user.points);
      } else {
        this.showModal('Game finished', `You lost the bet! Better luck in the next bet.`);
        console.log('You lost!');
      }
    } catch (error) {
      console.error('Error checking bet:', error);
    }
  },
  players(playerName) {
    return this.playerStore.getPlayerIdByName(playerName);
  },
  redirectToPlayerDetails(playerId) {
    this.$router.push(`/dashboard/game/${this.gameId}/${playerId}`);
  },
  calculateProgressHeight(pointsPlayer1, pointsPlayer2) {
    const maxPoints = Math.max(pointsPlayer1, pointsPlayer2);
    const minPoints = Math.min(pointsPlayer1, pointsPlayer2);

    const heightPercentagePlayer1 = (minPoints / maxPoints) * 100;
    const heightPercentagePlayer2 = 100 - heightPercentagePlayer1;

    return {
      player1: heightPercentagePlayer1 + '%',
      player2: heightPercentagePlayer2 + '%',
    };
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
mounted() {
  this.fetchGameData();
  this.handleClickBets();
},
};
</script>

<style scoped>
.gameViewer {
  width: 100%;
  max-width: 1550px;
}

.gameboys {
  height: 60%;
}

.screenBg {
  height: 50%;
  background-color: var(--vt-c-dark-grey-1);
  align-items: center;
}

.screen {
  height: 80%;
  width: 90%;
  background-color: var(--vt-c-white);
}

.screenProgress {
  background-color: aqua;
}

.btnBet {
  background-color: var(--vt-c-white);
  border: 2px solid var(--vt-c-medium-purple-2);
  width: 150px;
}

.btnBet:hover, .btn-active {
  background-color: var(--vt-c-dark-purple-2);
  color: var(--vt-c-white-mute);
}

.game-list {
  background-color: var(--vt-c-white-mute); 
  height: 110vh; 
  padding: 0; 
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
