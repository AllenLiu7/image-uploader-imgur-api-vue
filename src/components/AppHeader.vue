<template>
  <div class="ui secondary pointing menu">
    <a class="item active"> Home </a>
    <div class="right menu">
      <a class="ui item" @click="logIn"> Logout </a>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AppHeader",
  methods: mapActions(["logIn"]),
};
</script>

<style>
</style>