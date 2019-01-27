# Youtube Search App

## About

 - Single Page app for searching youtube, selecting and playing a video
 - Modified from the project app in the excellent Udemy course on Vue Js by Stephen Grider
 - Requires a key to the Youtube data API v3. See Setup below
 - Fairly basic Vue app.

### Screencap

TODO screencap

### Modifications to the practice app

 - Added Vuex data store to replace most props and events
 - vidoes.js module for youtube interaction
 - Replaced bootstrap with Semantic UI
 - Set a default video on first load
 - Trigger initial search from default predetermined search term and select the first
 - Button click to search instead of onChange

 ### Setup

Vuex and axios are required.
```
npm install --save vuex axios
```

#### Youtube access

  - Obtain an api key to [Youtube data api v3](https://developers.google.com/youtube/v3/)
  - paste the key in videos.js

### References

 - [Vuex](https://vuex.vuejs.org/)
 - [axios](https://www.axios.com/)
 - [Vue CLI Config docs ](https://cli.vuejs.org/config/)
 - [Semantic UI](https://semantic-ui.com)


### More

Note: Clean, re-installand run from within videobrowser dir
```
rm -rf node_modules
npm install --save vuex axios
npm run serve
```

 