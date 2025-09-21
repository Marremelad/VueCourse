const app = Vue.createApp({
  data() {
    return {
      dynamicHtml: '<h2>Have fun!</h2>',
      courseGoalA: 'Finish the course and learn Vue!',
      courseGoalB: 'Master Vue and build great apps!',
      vueLink: 'https://vuejs.org/'
    }
  },
  methods: {
    outputGoal() {
      return Math.random() < 0.5
        ? this.courseGoalA
        : this.courseGoalB
    }
  }
})

app.mount('#user-goal')