<template>
  <div class="ui action input">
    <input type="text" placeholder="Search..." @input="onInput">
    <button class="ui button" @click="onClick" 
            @keyup.enter.native="onClick">Search</button>
  </div>
</template>


<script>
import { mapActions } from "vuex";

export default {
  name: "SearchBar",
  data() {
    return {
      searchTerm: String
    };
  },
  methods: {
    ...mapActions(['searchYouTube', 'searchYouTubeAndSelectFirst']),
    onInput(event) {
      this.searchTerm = event.target.value;
    },
    onClick() {
      console.log(this.searchTerm);
      // see videos.js
      this.searchYouTube(this.searchTerm);
    }
  },
  created() {
    // load the search list on start up or hard refresh
    const st = 'top music videos';
    this.searchTerm = st;
    this.searchYouTubeAndSelectFirst(st);
  }
};
</script>


<style scoped>

</style>

