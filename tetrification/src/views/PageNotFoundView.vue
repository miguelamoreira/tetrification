<template>
  <v-container fluid fill-height>
    <v-row>
      <v-col cols="2">
        <NavBar></NavBar>
      </v-col>
      <v-col cols="10" class="d-flex justify-center align-center">
        <img src="@/assets/images/pageNotFound/piece_purple.svg" class="position-absolute" style="top: 0vh; left: 25vh; margin: 2vh; width: 18%;">
        <img src="@/assets/images/pageNotFound/piece_blue.svg" class="position-absolute" style="top: 0vh; right: 0vh; margin: 2vh; width: 18%;">
        <img src="@/assets/images/pageNotFound/piece_orange.svg" class="position-absolute" style="bottom: 0vh; left: 25vh; margin: 2vh; width: 12%;">
        <img src="@/assets/images/pageNotFound/piece_yellow.svg" class="position-absolute" style="bottom: 0vh; right: 55vh; margin: 2vh; width: 18%;">
        <img src="@/assets/images/pageNotFound/piece_purple2.svg" class="position-absolute" style="bottom: 0vh; right: 0vh; margin: 2vh; width: 12%">
        <div class="text-center">
          <span class="font-weight-bold text-h1">404</span>
          <br>
          <span class="font-weight-bold text-h3">Page Not Found</span>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NavBar from '@/components/navbar.vue'

export default {
  components: {
    NavBar,
  },
  data() {
    return {};
  },
};
</script>