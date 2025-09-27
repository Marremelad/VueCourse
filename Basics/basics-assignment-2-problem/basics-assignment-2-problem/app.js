const app = Vue.createApp({
  data() {
    return {
      inputKeyDown: "",
      inputEnter: "",
    };
  },
  methods: {
    showAlert() {
      alert("Hello from the alert!");
    },
    setInputOnKeyDown(event) {
      this.inputKeyDown = event.target.value;
    },
    setInputOnEnter(event) {
      this.inputEnter = event.target.value;
    },
  },
});

app.mount("#assignment");
