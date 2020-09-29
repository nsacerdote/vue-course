const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Finish it!',
      courseGoalB: 'Master <i>it</i>!',
      vueLink: 'https://vuejs.org/'
    };
  },
  methods: {
    outputGoal() {
      const randomNum = Math.random();
      return randomNum > 0.5 ? this.courseGoalA : this.courseGoalB;
    }
  }
});

app.mount('#user-goal');
