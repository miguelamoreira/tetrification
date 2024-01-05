import { defineStore } from 'pinia'
import * as api from '../api/api'

const API_BASE_URL = "http://localhost:4000"

export const useGameStore = defineStore('game', {
  state: () => ({ 
    games: []
   }),
  getters: {
    getGames: (state) => state.games,
    getGame: (state) => (id) => state.games.find((game) => game.gameId == id),
    getGameEvents: (state) => id => state.games.filter((game) => game.gameId == id),
  },
  actions: {
    async fetchGames() {
      try {
        const data = await api.get(API_BASE_URL, 'games')
        this.games = data.matches
      } catch (error) {
        throw error
      }
    },
  },
})