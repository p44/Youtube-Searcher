<template>
  <div id="the-top" class="ui container">
    <h1 class="ui header center">Youtube Search App</h1>
    <div class="ui centered stackable grid">
      <div class="row">
        <div class="nine wide column">
          <VideoDetail></VideoDetail>
        </div>
        <div class="seven wide column">
          <div class="row">
            <SearchBar></SearchBar>
          </div>
          <div class="row">
            <VideoList></VideoList>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

export default {
  name: "App",
  components: {
    SearchBar,
    VideoList,
    VideoDetail
  }
};
</script>

<style scoped>
#the-top {
     padding: 20px 0px;
}
</style>

