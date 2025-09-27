Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    add(n) {
      this.count += n;
    },
  },
  computed: {
    result() {
      if (this.count === 5) return this.count;
      else if (this.count < 5) return "Not there yet!";
      else return "Too much!";
    },
  },
  watch: {
    result() {
      console.log("Watcher executing...");
      setTimeout(() => {
        this.count = 0;
      }, 5000);
    },
  },
}).mount("#assignment");
