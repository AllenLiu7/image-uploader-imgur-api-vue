<template>
  <div class="ui secondary pointing menu">
    <a class="item active"> Home </a>
    <div class="right menu">
      <div v-if="isLoggedin" class="ui item">
        <a>Logout</a>
      </div>
      <a v-else class="ui item" @click="login"> Login </a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AppHeader",
  computed: mapGetters(["isLoggedin"]),
  methods: mapActions(["login"]),
};
</script>

<style>
</style>