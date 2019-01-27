<template>
  <div class="item" @click="onVideoSelect">
    <img class="ui image" :src="thunbnailUrl">
    <div class="content">
      <a class="header">{{ titleMaxLength }}</a>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "VideoListItem",
  props: {
    video: Object
  },
  computed: {
    thunbnailUrl() {
      return this.video.snippet.thumbnails.default.url;
    },
    titleMaxLength() {
      return this.video.snippet.title.substr(0, 28);
    }
  },
  methods: {
    ...mapActions(["selectVideo"]),
    onVideoSelect() {
      this.selectVideo(this.video);
    }
  }
};
</script>

<style scoped>

</style>

