<script>
import UserData from "./UserData.vue";

export default {
  props: {
    userName: {
      type: String,
      required: true,
    },
    userAge: {
      type: Number,
      required: true,
    },
  },
};
</script>

<template>
  <section>
    <h1>Active User</h1>
    <h2>{{ userName }}</h2>
    <h3>{{ userAge }}</h3>
  </section>
</template>
