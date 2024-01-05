import { ref, computed } from 'vue'
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    isUserAuthenticated: false,
    user: null,
    users: [
        { name:'João Silva', username: "joca25", email: 'joao5@email.com', password: "1234", dateOfBirth: "09/12/1998", gender: "Male", country: "Portugal", favouritePlayer: "Fractal", points: 15, streak: 2, streakImageSrc: '@/assets/images/dashboard/streak2.svg', userLevel: 'Top Out', avatar: '/assets/images/avatars/avatar1.svg'},
      ],
  }),
  getters: {
    getUser: (state) => state.user,
    getUsers: (state) => state.users,
    isUser: (state) => state.isUserAuthenticated,
  },
  actions: {
    login(username, password) {
      const user = this.users.find(
          (user) => user.username == username && user.password == password
      );
      if (user) {
        this.isUserAuthenticated = true;
        this.user = user;
      } else {
        throw Error("Invalid Data!");
      };
    },
    signup(name, username, email, password, confirmPassword, dateOfBirth, gender, country, favoritePlayer){
      let userName = this.users.find((user) => user.username == username);
      let userEmail = this.users.find((user) => user.email == email);
      
      if(userName){
        alert('Username already in use')
      }
      else if (userEmail){
        alert('E-mail already linked to an account')
      }
      else if (name === '' || username === '' || email === '' || password === '' || confirmPassword === '' || dateOfBirth === '' || gender === '' || country === '' || favoritePlayer === ''){
        alert('Fill all fields to create your account')
      }
      else if (password != confirmPassword) {
        alert('Passwords must match')
      }
      else {
        let newUser = { 
          name: name, 
          username: username, 
          email: email, 
          password: password, 
          dateOfBirth: dateOfBirth,
          gender: gender,
          country: country,
          favoritePlayer: favoritePlayer, 
          points: 0,
          streak: 1,
          streakImageSrc: '@/assets/images/dashboard/streak1.svg'
        };
        this.users.push(newUser);
        console.log(this.users)
        this.user = newUser;
        this.isUserAuthenticated = true;
        alert('account created')
      }
    },
    logout() {
      this.isUserAuthenticated = false;
      this.user = null;
    },
    updateStreak() {
      const streakNumber = this.user.streak;

      const streakImageSrc = require(`@/assets/images/dashboard/streak${streakNumber}.svg`);

      this.user.streakImageSrc = streakImageSrc;
    },
  },  
});
