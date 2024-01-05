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
            answer: 'You can see the results of past matches and of live matches. All these matches belong to the top-16 of the 48-seed tournament. On the Leaderboard section, you can see the rankings of the qualifying round, round 0, round 1 and top-16.'
        },
        {
            question: 'How many rounds does each phase of the tournament have?',
            answer: 'The Qualifying Round, as the name suggests, only has one round to determine which players will participate in which following tournament. The 48-seed Gold Tournament has four rounds - round 0, round 1, top-16 and top-8. The 32-seed Silver Tournament has three rounds – round 0, round 1, top-8.'
        },
        {
            question: 'Which data is displayed on my profile? And can I limit it?',
            answer: 'You can set your profile settings to public or private. If you set your profile to public, other users will be able to see your avatar, username, nationality, age, favorite player, the number of points you currently have, your user level and your position on the users’ leaderboard. If you set your profile to private, other users won’t be able to see the entirely of your profile and will get a warning that your profile was set to private.'
        },
        {
            question: 'Can I get notifications? What type of notifications can I get?',
            answer: 'You can choose to get 4 different kinds of notifications: notifications about the end of a game that you are tracking, notifications with the result of an enquiry that you may have answered, notifications with points that you may have gain and notifications about an upgrade of your user level.'
        },
        {
            question: 'Can I see any information about the players?',
            answer: 'Yes! Each player participating on the tournament has their own profile page. This page contains information such as their player’s name, their real name, a brief description, their age, their location/nationality, their game style, and their personal best record. Besides this info, there’s a list with every match that they are associated with.'
        },
        {
            question: 'Can I track games so that I don’t miss any update?',
            answer: 'Yes! You can track games and they will be displayed on a section on your profile page. Depending on your notifications settings, you will receive information relative to the end of a tracked game or the result of an enquiry about a game.'
        }
      ],
  }),
  getters: {
    getFAQS: (state) => state.faqs,
  },
  actions: {
    
  },  
});
