<template>
  <div class="song-player-album" :class="{'dark-album': albumIndex % 2 === 1}">
    <!--<div class="album-data">
      <span class="album-title">
        {{albumTitle}} - {{albumYear}}
      </span>
    </div>
    -->
    <div class="track-row flex-container-row space-between align-center" :class="{'selected-track': song.index === selectedSong.index}" v-for="song in songs" :key="song.index" v-on:click="selectSong(song)">
      <div class="track-info flex-container-row justify-start align-center">
        <img class="track-cover" :src="getCover(song)">
        <div class="flex-container-column align-start">
          <span class="track-title">
            {{song.songTitle}}
          </span>
          <span class="track-album">
            {{song.songAlbum}}
          </span>
        </div>
      </div>
      <div class="flex-container-row justify-center align-center">
        <img src="@/assets/icons/waveform-tr.gif" height="30" class="playing-icon" v-if="isPlaying && selectedSong.index === song.index">
      </div>
      <div class="track-length">
        {{song.songLength}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    albumIndex: {
      type: Number,
      required: true
    },
    albumTitle: {
      type: String,
      required: true
    },
    albumYear: {
      type: String, 
      required: true
    },
    songs: {
      type: Array,
      required: true
    },
    selectedSong: {
      type: Object,
      required: true
    },
    isPlaying: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    getCover(song) {
      if (song.coverUrl) {
        return require(`@/assets/images/songs/${song.coverUrl}`);
      }
      else {
        return '';
      }
    },
    selectSong(song) {
      this.$emit('selectSong', song);
    }
  }

}
</script>

<style scoped>
.dark-album {
  background-color: #313138;
}

.dark-album .album-data {
  color: #f7f7f7;
}

.dark-album .track-title {
  color: #f8f8f8;
}

.dark-album .track-length {
  color: #f8f8f8;
}

.dark-album .track-album {
  color: #c9bcbc;
}

.album-data {
  width: 100%;
  box-sizing: border-box;
  text-align: end;
  font-size: 12px;
  font-style: italic;
  padding-top: 2px;
  padding-left: 10px;
  padding-right: 20px;
}

.track-row {
  position: relative;
  z-index: 100; 
  padding: 7px 10px;
  cursor: pointer;
  width: 450px;
  box-sizing: border-box;
}

.track-row:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.dark-album .track-row:hover {
  background-color: rgba(255, 255, 255, 0.125);
}

.selected-track {
  background-color: rgba(216, 142, 223, 0.15);
}

.dark-album .selected-track {
  background-color: rgba(216, 142, 223, 0.4);
}

@keyframes iconWaving {
  0% {transform: scaleY(1);}
  50% {transform: scaleY(0.8);}
  100% {transform: scaleY(1);}
}

.playing-icon {
  animation: iconWaving;
  animation-duration: 0.9s;
  animation-iteration-count: infinite;
}

.track-cover {
  height: 35px;
  width: 35px;
  margin-right: 10px;
}

.track-title, .track-album {
  width: 250px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-align: start;
}

.track-title {
  text-transform: uppercase;
  color: #292525;
  font-size: 14px;
}

.track-album {
  text-transform: uppercase;
  font-style: italic;
  color: #535050;
  font-size: 11px;
}

.track-length {
  text-transform: uppercase;
  color: #000000;
  font-size: 12px;
  margin: 0px 5px;
}

@media (max-width: 1200px){
}

@media (max-width: 1024px){
  .track-row {
    width: 400px;
  }

  .track-cover {
    height: 30px;
    width: 30px;
    margin-right: 8px;
  }

  .track-title, .track-album {
    width: 200px;
  }

  .track-title {
    font-size: 13px;
  }

  .track-album {
    font-size: 10px;
  }
}

@media (max-width: 768px){
  .track-row {
    width: 250px;
    padding: 5px 7px;
  }

  .track-title, .track-album {
    width: 120px;
  }

  .track-title {
    font-size: 11px;
  }

  .track-album {
    font-size: 8px;
  }

  .track-length {
    font-size: 11px;
    margin: 0px 3px;
  }

  .playing-icon {
    height: 25px;
  }
}
</style>