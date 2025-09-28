Vue.createApp({
  data() {
    return {
      tasks: [],
      newTask: "",
      showTasks: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.newTask);
    },
    toggleShowTasks() {
      this.showTasks = !this.showTasks;
    },
  },
}).mount("#assignment");
