import axios from 'axios';

const YOUTUBE_API_KEY = 'ReplaceThisStringWithYourApiKey';

// const defaultVideoRickAstley = {
//     id: 'dQw4w9WgXcQ',
//     title: 'Rick Astley - Never Gonna Give You Up (Video)',
//     description: 'Rick Astley - Never Gonna Give You Up (Official Video)',
//     url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
//     thumbnail: ''
// }
const defaultVideoCats = {
    id: 'DgdMV3IczYY',
    title: '♥Happy Cats Compilation - Cutest Cat Ever 2018♥ #1',
    description: 'Happy Cats Compilation - Cutest Cat Ever 2018 Plea…te Videos: Cute Animal, Cute Dog, Cat and Babies.',
    url: 'https://www.youtube.com/embed/DgdMV3IczYY',
    thumbnail: 'https://i.ytimg.com/vi/DgdMV3IczYY/default.jpg'
}

// videos are in youtube format, selectedVideo is simplified for detail view
const state = {
    videos: [],
    selectedVideo: defaultVideoCats
};

// mapGetters in computed of components
const getters = {
    selectedVideo: (state) => state.selectedVideo,
    allVideos: (state) => state.videos
};

// mapActions in methods of components
//   rootState to access state in other modules
//   commit to call mutations
const actions = {
    async searchYouTube({ commit }, searchTerm) {
        const response = await getFromYouTube(searchTerm);
        console.log(response);
        commit('setVideos', response.data.items);
    },
    selectVideo({ commit }, newSelectedVideo) {
        const svSimplified = simplifyVideo(newSelectedVideo);
        console.log(svSimplified);
        commit('setSelectedVideo', svSimplified);
    },
    async searchYouTubeAndSelectFirst({ commit }, searchTerm) {
        const response = await getFromYouTube(searchTerm);
        commit('setVideos', response.data.items);
        if (response.data.items[0]) {
            const svSimplified = simplifyVideo(response.data.items[0]);
            console.log(svSimplified);
            commit('setSelectedVideo', svSimplified);
        }
    }

};

const mutations = {
    setVideos: (state, newVideos) => {
        state.videos = newVideos;
    },
    setSelectedVideo: (state, svSimplified) => {
        state.selectedVideo = svSimplified;
    }
};

async function getFromYouTube(searchTerm) {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
            key: YOUTUBE_API_KEY,
            type: 'video',
            part: 'snippet',
            q: searchTerm
        }
    });
    return response;
}

function simplifyVideo(youtubeFormatVideo) {
    const { videoId } = youtubeFormatVideo.id;
    const svSimplified = {
        id: videoId,
        title: youtubeFormatVideo.snippet.title,
        description: youtubeFormatVideo.snippet.description,
        url: `https://www.youtube.com/embed/${videoId}`,
        thumbnail: youtubeFormatVideo.snippet.thumbnails.default.url
    }
    return svSimplified;
}

// names must match convention
export default {
    state,
    getters,
    actions,
    mutations
}