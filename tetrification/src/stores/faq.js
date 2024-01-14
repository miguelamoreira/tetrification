import { ref, computed } from 'vue'
import { defineStore } from "pinia";

export const useFAQStore = defineStore("faq", {
  state: () => ({
    faqs: [
        {   question: 'Which games can I watch and get updates on Tetrification?',
            answer: 'On Tetrification, you can follow the Top-16 phase, which is a part of the 48-seed Gold Tournament. You can watch the games on livestreaming when they are occurring, see the results of previous games or see the schedule of future games.'
        },
        {
            question: 'How can I gain points?',
            answer: 'Each day that you log into your account, you gain a certain number of points. This amount depends on the number of consecutive days that you log in. The bigger the streak of days logged, the bigger the number of points you gain.<br>o	You can also get points by answering correctly to the enquiry present on the live matches pages. Beware that if you answer incorrectly, you lose a point.'
        },
        {
            question: 'What’s the meaning of user’s level on my profile?',
            answer: 'The user’s level depends on the number of points that a user has. There are 3 different types of users. If the user has 0-5 points, the user’s level is ‘mino’. If the user has 6-10 points, the user’s level is ‘back-to-back’. If the user has 11- points, the user’s level is ‘top out’.'
        },
        {
            question: 'How long is the tournament?',
            answer: 'The 2023 tournament takes place during three consecutive days. On the first day and a half, there’s the Qualifying Round that determines which players will be playing on the 48-seed Gold Tournament and on the 32-seed Silver Tournament. During the rest of the second and the third day, the 32-seed and 48-seed tournaments are occurring simultaneously. '
        },
        {
            question: 'Which results can I see on Tetrification?',
            answer: 'You can see the results of past matches and of live matches. All these matches belong to the top-8.'
        },
        {
            question: 'How many rounds does each phase of the tournament have?',
            answer: 'The Qualifying Round, as the name suggests, only has one round to determine which players will participate in which following tournament. The 48-seed Gold Tournament has four rounds - round 0, round 1, top-16 and top-8. The 32-seed Silver Tournament has three rounds – round 0, round 1, top-8.'
        },
        {
            question: 'Can I see any information about the players?',
            answer: 'Yes! Each player participating on the tournament has their own profile page. This page contains information such as their player’s name, their real name, a brief description, their age, their location/nationality, their game style, and their personal best record. Besides this info, there’s a list with every match that they are associated with.'
        }
      ],
  }),
  getters: {
    getFAQS: (state) => state.faqs,
  },
  actions: {
    
  },  
});
