<script>
export default {
  data() {
    return {
      text: "Hello from some other component!",
    };
  },
};
</script>

<template>
  <h2>{{ text }}</h2>
</template>

<style>
h2 {
  font-size: 35px;
  color: green;
}
</style>
