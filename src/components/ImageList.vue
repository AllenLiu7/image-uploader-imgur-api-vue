<template>
  <div>
    <div v-if="isLoggedin" class="image-container">
      <img
        v-for="image in getImages"
        :key="image.id"
        :src="image.link"
        alt="image"
      />
    </div>
    <div>Login to start</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ImageList",
  computed: mapGetters(["getImages", "isLoggedin"]),
  methods: mapActions(["fetchImages"]),
  created() {
    this.fetchImages();
  },
};
</script>

<style scoped>
.image-container {
  column-count: 3;
  column-gap: 0;
}
img {
  height: 100%;
  width: 100%;
  object-fit: contain;
  padding: 5px;
}
</style>