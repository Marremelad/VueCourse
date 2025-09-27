Vue.createApp({
  data() {
    return {
      inputClass: "",
      showParagraph: true,
      inputBackgroundColor: "",
    };
  },
  methods: {
    setInputClass(e) {
      if (e.target.value === "user1" || "user2")
        this.inputClass = e.target.value;
    },
    toggleShowParagraph() {
      this.showParagraph = !this.showParagraph;
    },
    setInputBackgroundColor(e) {
      this.inputBackgroundColor = e.target.value;
    },
  },
  computed: {
    paragraphClasses() {
      console.log("Computing...");
      return [this.inputClass, this.showParagraph ? "visible" : "hidden"];

      // return {
      //   user1: this.userInput === "user1",
      //   user2: this.userInput === "user2",
      //   visible: this.showParagraph,
      //   hidden: !this.showParagraph,
      // };
    },
  },
}).mount("#assignment");
