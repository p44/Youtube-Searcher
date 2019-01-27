<template>
    <div class="ui middle aligned animated selection list">
        <VideoListItem 
          v-for="video in allVideos"
          :video="video"
          :key="video.etag">
        </VideoListItem>
    </div>
</template>

<script>
import VideoListItem from './VideoListItem';
import { mapGetters } from 'vuex';

export default {
    name: 'VideoList',
    components: {
        VideoListItem
    },
    computed: {
        ...mapGetters(['allVideos']),
    }
}
</script>


<style scoped>

</style>
