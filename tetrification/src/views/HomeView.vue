<template>
  <v-app>
    <v-container>
      <v-app-bar app dense :elevation="0" style="font-family: 'Space Grotesk', sans-serif;" class="pa-2">
        <img src="@/assets/images/logo.svg" max-height="40" contain class="pt-2 pb-1 pl-4">
        <v-app-bar-title class="ml-auto" grow></v-app-bar-title>
        <v-btn style="color: var(--vt-c-medium-purple-1)" @click="scrollToSection('sectionTetris')">Tetris</v-btn>
        <v-btn style="color: var(--vt-c-medium-purple-1)" @click="scrollToSection('sectionTournament')">Tournament</v-btn>
        <v-btn style="color: var(--vt-c-medium-purple-1)" @click="scrollToSection('sectionFAQ')">FAQ</v-btn>
        <v-btn :to="{ name: 'login' }" style="background-color: var(--vt-c-medium-blue-1); color: var(--vt-c-dark-purple-1)">Login</v-btn>
      </v-app-bar>
    </v-container>
    <v-container id="sectionHero" class="text-center fill-height" style="position: relative;">
      <div style="position: absolute; top: 20%; left: 12.5%; z-index: 1; text-align: center; max-width: 80%;">
        <h1 style="color: var(--vt-c-dark-purple-1)">Don’t get lost in<br> the matrix.</h1>
        <br>
        <p>Join Tetrification to never miss an <br>update on the world’s biggest Tetris competition</p>
        <br>
        <v-btn style="background-color: var(--vt-c-medium-blue-1)" :to="{ name: 'signup' }">Join</v-btn>
      </div>
      <img src="@/assets/images/landingpage.svg" style="width: 100%; height: auto; max-width: none; position: relative; z-index: 0;" class="pt-8">
    </v-container>
    <v-container id="sectionTetris" style="width:100%;max-width: none; position: relative; background-color: var(--vt-c-white-mute);" class="full-height pt-12">
      <v-carousel hide-delimiters class="d-flex align-items-center justify-content-ceter"> 
        <v-carousel-item>
          <div class="carousel text-center mx-auto pa-12 py-lg-16">
            <h3 class="mb-12 mb-sm-4  font-weight-bold" style="color: var(--vt-c-medium-purple-1)">History of Tetris</h3>
            <p class="mb-8 mb-sm-4 ">
              With the goal of creating new software that was able to increase people’s happiness, Alexey Pajitnov, a soviet engineer, 
              created Tetris in 1985. There were several versions before Tetris expanded to outside of the Soviet Union, including 
              one where the puzzle pieces were made of brackets due to the lack of graphical interfaces.
            </p>
            <p class="mb-8 mb-sm-4 ">
              After some initial versions, the game made its way to both Hungary and Poland and from that point, it quickly spread out across the globe.
            </p>
          </div>
        </v-carousel-item>
        <v-carousel-item>
          <div class="carousel text-center mx-auto pa-12 py-lg-16">
            <h3 class="mb-lg-12 mb-sm-4 font-weight-bold" style="color: var(--vt-c-dark-orange-1)">How it works</h3>
            <p class="mb-lg-8 mb-sm-4">
              Tetris is a game composed with a board named matrix which is constantly being filled with falling blocks. Inspired by pentominoes tiling puzzles, 
              the blocks are called “tetrominoes” and there are 7 different types that the player can move during the game.
            </p>
            <p class="mb-8 mb-sm-4 ">
              The main goal of the game is to rotate the falling pieces so that the player 
              can clear lines off the matrix and simultaneously gain points accordingly its performance.
            </p>
          </div>
        </v-carousel-item>
        <v-carousel-item>
          <div class="carousel text-center mx-auto pa-12 py-lg-16">
            <h3 class="mb-12 mb-sm-4 font-weight-bold">Did you know?</h3>
            <p class="mb-8 mb-sm-4">
              According to the Guinness World Records, Tetris is one of the top-selling videogames of all time.
            </p>
            <p class="mb-8 mb-sm-4 ">
              Its popularity in pop culture can be seen by the numerous references in television shows, movies, 
              and other television programs. In 2023, Apple TV+ released a movie that tells the game’s origin story. 
            </p>
          </div>
        </v-carousel-item>
      </v-carousel>
    </v-container>
    <v-container id="sectionTournament">
      <div class="divCTWC ml-lg-auto pa-8 d-flex align-center">
        <img src="@/assets/images/ctwc.svg" style="margin-right: 16px; width: 25%;">
        <div>
          <h3 class="font-weight-bold mb-8">What is the CTWC?</h3>
          <p class="mb-8">
            The Classic Tetris World Championship, also known as CTWC, is a videogame tournament hosted by Portland Retro Gaming Expo. 
            Based on the first tournament of its kind, the 1990 Nintendo World Championship, 
            the contestants of the CTWC play the 1989 Nintendo version of Tetris on an 
            original Nintendo Entertainment Systems with the respective controllers.
          </p>
          <p class="mb-8">
            Since 2012, the competition takes place in the Oregon Convention Center with the exceptions of the 2020 and 2021 tournaments, which were held online.
          </p>
        </div>
      </div>
      <div class="divHistory mr-lg-auto pa-8 d-flex align-center">
      <div>
        <h3 class="font-weight-bold mb-8">History</h3>
        <p class="mb-8">
          The CTWC was funded in 2010 by a former champion of the United States National Tetris Championship, Robin Mihara. 
          The first edition of the tournament had as few as eight contestants but over the years the number has increased exponentially.
          The 2022 version of the tournament had 48 participants.
        </p>
        <p class="mb-8">
          Since 2022, the CTWC created awards the winner of the tournament with the Jonas Neubauer Memorial Trophy. 
          The trophy is named after a former seven-time winner of the competition.
        </p>
      </div>
      <img src="@/assets/images/history.svg" style="margin-left: 16px; width: 25%;">
    </div>
    <div class="divRules ml-lg-auto pa-8 d-flex align-center">
      <img src="@/assets/images/rules.svg" style="margin-right: 16px; width: 25%;">
      <div>
        <h3 class="font-weight-bold mb-8">Tournament Rules</h3>
        <p class="mb-8">
          The tournament is divided into three phases: Qualifying Round, 48-seed Gold Tournament, and 32-seed Silver Tournament.
        </p>
        <p class="mb-8">
          Since 2022, the CTWC created awards the winner of the tournament with the Jonas Neubauer Memorial Trophy. 
          The trophy is named after a former seven-time winner of the competition.
        </p>
        <p class="mb-8">
          The Qualifying Round determines the seeding of the 48-seed and 32-seed tournaments. 
          Qualifying attempts will be on Type A Tetris for a higher score. During this phase, the "multiple maxout rule" is applied, 
          which means points scored more than a million points do not count. Instead, the player will be awarded a "maxout."
        </p>
        <p class="mb-8">
          On the 48-seed Gold Tournament, all matches are played on level 18, and they'll be all set to a level 39 super killscreen. 
          The player with the highest score wins. If one player tops-out and the other player already has a higher score, the game is finished.
          If one player tops-out and the other player has a lower score, that player will continue until they either top-out 
          (having lost) or exceed the other player’s score, winning the game.
        </p>
        <p class="mb-8">
          On the 32-seed Silver Tournament, all matches will be on the best-of-five. All other rules are the same as the Gold Tournament.
        </p>
      </div>
    </div>
    </v-container>
    <v-container id="sectionFAQ">
      <v-row justify="center" class="justify-center">
        <v-col cols="12" md="6">
          <v-card style="background-color: var(--vt-c-medium-grey-1); " class="card-faq mb-12 pa-8">
            <v-card-title class="text-center">FAQ</v-card-title>
            <v-expansion-panels v-for="(faq, index) in faqs" :key="index" class="mb-4">
              <v-expansion-panel :title="faq.question" :text="faq.answer"></v-expansion-panel>
            </v-expansion-panels>
          </v-card>
        </v-col>
        <img src="@/assets/images/footer.svg" style="width: 100%; height: auto; max-width: none; position: relative; z-index: 0;">
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { useFAQStore } from '@/stores/faq';
export default {
  data() {
    return {
      faqStore: useFAQStore(),
    };
  },
  computed: {
    faqs() {
      return this.faqStore.getFAQS
    }
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>

<style>
  h1 {
    font-family: Orbitron, sans-serif;
    font-size: 6vh;
    font-weight: bold;
  }

  h3 {
    color: var(--vt-c-dark-blue-1);
    font-size: 4vh;
  }

  .carousel {
    width: 60%;
    background-color: var(--vt-c-white);
  }

  #sectionTournament div {
    width: 85%;
    padding: 2vh 5vh;
    margin: 7.5vh 0;
  }

  .divCTWC {
    background-color: var(--vt-c-medium-orange-2);
  }

  .divHistory {
    background-color: var(--vt-c-medium-purple-3);
  }

  .divRules {
    background-color: var(--vt-c-medium-yellow-1);
  }

  @media (min-width: 1024px) {
    #sectionHero, #sectionTetris ,#sectionTournament, #sectionFAQ {
      width: 100%; 
      max-width: 1550px; 
      margin: 0 auto;
    }
  }

</style>