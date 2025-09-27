const app = Vue.createApp({
  data() {
    return {
      name: "Mauricio Corte",
      age: 27,
      inputValue: "Type here!",
      imageLink:
        "https://images.unsplash.com/photo-1550853024-fae8cd4be47f?q=80&w=1488&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    };
  },
  methods: {
    agePlusFive() {
      return this.age + 5;
    },
  },
});

app.mount("#assignment");
