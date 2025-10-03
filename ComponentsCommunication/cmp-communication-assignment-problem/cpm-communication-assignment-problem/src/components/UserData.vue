<script>
export default {
  emits: ["set-new-user"],
  methods: {
    setNewUser() {
      this.$emit("set-new-user", this.$refs.name.value, this.$refs.age.value);
    },
  },
};
</script>

<template>
  <form @submit.prevent="setNewUser">
    <div class="input-container">
      <label for="name">name:</label>
      <input type="text" id="name" ref="name" required />

      <label for="age">age:</label>
      <input type="number" id="age" ref="age" required />
    </div>
    <button>Set new user</button>
  </form>
</template>
