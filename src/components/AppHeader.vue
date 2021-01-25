<template>
  <div class="ui secondary pointing menu">
    <a class="item active"> Home </a>
    <div class="right menu">
      <div v-if="isLoggedin" class="buttons">
        <router-link to="/" class="item">Galleries</router-link>
        <router-link to="/upload" class="item">Upload</router-link>
        <a class="item" @click="logout">Logout</a>
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
  methods: mapActions(["login", "logout"]),
};
</script>

<style scoped>
.buttons {
  display: flex;
}
</style>