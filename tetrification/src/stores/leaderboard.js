import { ref, computed } from 'vue'
import { defineStore } from "pinia";

export const useLeaderStore = defineStore("leader", {
  state: () => ({
    leader: [
        { 
            id: 1,
            player1: "SIDNEV",
            country1: "NETHERLANDS",
            player2: "ALEX T",
            country2: "USA",
        },
        {
            id: 2,
            player1: "HFULUFGUS",
            country1: "USA",
            player2: "SCUTI",
            country2: "USA",
        },
        {
            id:3,
            player1: "FRACTAL",
            country1: "USA",
            player2: "PIXELANDY",
            country2: "USA",
        },
        {
            id: 4,
            player1: "DOG",
            country1: "USA",
            player2: "DENGLER",
            country2: "USA",
        },
        {
            id: 5,
            player1:"SIDNEV",
            country1: "NETHERLANDS",
            player2:"SCUTI",
            country2: "USA",
        },
        {
            id: 6,
            player1: "FRACTAL",
            country1: "USA",
            player2: "DOG",
            country2: "USA",
        },
        
      ],
  }),
  getters: {
    getLeader: (state) => state.leader,
  },
  actions: {
    
  },  
});
