<template>
  <div>
    <img
      v-for="image in getImages"
      :key="image.id"
      :src="image.link"
      alt="image"
      width="50"
      height="60"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ImageList",
  computed: mapGetters(["getImages"]),
  methods: mapActions(["fetchImages"]),
  created() {
    this.fetchImages();
  },
};
</script>

<style>
</style>