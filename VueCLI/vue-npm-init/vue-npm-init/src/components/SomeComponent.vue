<script>
import SomeOtherComponent from "./SomeOtherComponent.vue";

export default {
  components: {
    SomeOtherComponent,
  },
  data() {
    return {
      text: "Hello, from some component!",
    };
  },
};
</script>

<template>
  <h1>{{ text }}</h1>
  <SomeOtherComponent></SomeOtherComponent>
</template>

<style>
h1 {
  font-size: 50px;
  color: red;
}
</style>
