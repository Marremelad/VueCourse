const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    add() {
      this.counter++;
    },
    reduce() {
      this.counter > 0 ? this.counter-- : 0;
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    setConfirmedName() {
      this.confirmedName = this.name;
    },
    submitForm() {},
  },
});

app.mount("#events");
