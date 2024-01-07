import { defineStore } from 'pinia'
import * as api from '../api/api'

export const usePlayersStore = defineStore('player', {
  state: () => ({ 
    players: [
        {
            id: 1,
            name: 'SIDNEV',
            age: 19,
            location: 'Bovenkarspel',
            style: 'Roll',
            pb: 2678941,
            country: 'Netherlands',
        },
        {
            id: 2,
            name: 'ALEX T',
            age: 14,
            location: 'San Jose',
            style: 'Roll',
            pb: 6499000,
            country: 'USA',
        },
        {
            id: 3,
            name: 'HFULUFGUS',
            age: 21,
            location: 'Clarkson',
            style: 'Roll',
            pb: 3084820,
            country: 'USA',
        },
        {
            id: 4,
            name: 'SCUTI',
            age: 13,
            location: 'Stillwater',
            style: 'Roll',
            pb: 3448422,
            country: 'USA',
        },
        {
            id: 5,
            name: 'DENGLER',
            age: 16,
            location: 'USA',
            style: 'Roll',
            pb: 1690500,
            country: 'USA',
        },
        {
            id: 6,
            name: 'DOG',
            age: 15,
            location: 'Fort Worth',
            style: 'Roll',
            pb: 5266780,
            country: 'USA',
        },
        {
            id: 7,
            name: 'FRACTAL',
            age: 22,
            location: '--',
            style: 'Roll',
            pb: 3187500,
            country: 'USA',
        },
        {
            id: 8,
            name: 'PIXELANDY',
            age: 18,
            location: 'Texas',
            style: 'Roll',
            pb: 3515760,
            country: 'USA',
        },
    ]
   }),
  getters: {
    getPlayers: (state) => state.players,
    getPlayerId: (state) => (id) => state.players.find((player) => player.id == id),
    getPlayerIdByName: (state) => (name) => state.players.find((player) => player.name === name)?.id || null,
  },
  actions: {
  },
})