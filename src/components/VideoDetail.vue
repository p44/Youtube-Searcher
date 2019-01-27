<template>
  <div>
    <h4 class="ui header">{{ selectedVideo.title }}</h4>
    <div
      class="ui embed"
      data-source="youtube"
      data-id=""
      data-placeholder="/images/image-16by9.png">
      <iframe :src="selectedVideo.url"/>
    </div>
    <p class="details">{{ selectedVideo.description }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "VideoDetail",
  computed: {
    ...mapGetters(["selectedVideo"])
  }
};
</script>


<style scoped>
.details {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
}
</style>

