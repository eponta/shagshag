<template>
  <div class="song-player flex-container-row justify-center">
    <div class="flex-container-column align-center justify-center">
      <div class="player-container" v-bind:style="cssCover">
        <svg class="back-icon" v-bind:class="{'no-opacity': selectedSong.index !== -1}" width="100" height="100" 
          viewBox="0 0 477.867 477.867"
        >
          <path d="M472.184,4.347c-3.631-3.209-8.441-4.75-13.261-4.25l-307.2,34.133c-8.647,0.957-15.19,8.265-15.189,16.964V355.34
			c-15.468-9.256-33.174-14.102-51.2-14.012C38.281,341.329,0,371.946,0,409.595s38.281,68.267,85.333,68.267
			s85.333-30.601,85.333-68.267V151.889l273.067-30.413v199.68c-15.473-9.238-33.179-14.066-51.2-13.961
			c-47.053,0-85.333,30.618-85.333,68.267c0,37.649,38.281,68.267,85.333,68.267s85.333-30.601,85.333-68.267v-358.4
			C477.866,12.208,475.8,7.584,472.184,4.347z">
          </path>
        </svg>
        <audio :src="audioSrc" preload="auto" ref="player">
        </audio>
        <div v-if="loaded" class="player-controls flex-container-row space-between align-center">
          <div class="flex-container-row">
            <svg v-if="!playing" class="audio-icon play-button" v-on:click="playClick"
              height="17" 
              viewBox="0 0 320.001 320.001" 
            >
              <path d="M295.84,146.049l-256-144c-4.96-2.784-11.008-2.72-15.904,0.128C19.008,5.057,16,10.305,16,16.001v288
        c0,5.696,3.008,10.944,7.936,13.824c2.496,1.44,5.28,2.176,8.064,2.176c2.688,0,5.408-0.672,7.84-2.048l256-144
        c5.024-2.848,8.16-8.16,8.16-13.952S300.864,148.897,295.84,146.049z">
              </path>
            </svg>
            <svg v-if="playing" class="audio-icon pause-button" v-on:click="pauseClick"
              height="17"
              viewBox="0 0 512 512"
            >
              <path d="M181.333,0H74.667c-17.643,0-32,14.357-32,32v448c0,17.643,14.357,32,32,32h106.667c17.643,0,32-14.357,32-32V32
			C213.333,14.357,198.976,0,181.333,0z"></path>
		<path d="M437.333,0H330.667c-17.643,0-32,14.357-32,32v448c0,17.643,14.357,32,32,32h106.667c17.643,0,32-14.357,32-32V32
			C469.333,14.357,454.976,0,437.333,0z"></path>
            </svg>
          </div>
          <div class="slider-container flex-container-row flex-grow-1 align-center justify-center">
            <input type="range" min="0" :max="audioDuration" v-model="currentTime" class="player-slider" v-on:input="sliderChange">
          </div>
          <div class="player-time flex-container-row align-center justify-center">
            <span>{{formatTime(currentTime)}}/{{formatTime(audioDuration)}}</span>
          </div>
          <div class="flex-container-row">
            <svg v-if="!muted" class="audio-icon volume-button" v-on:click="muteClick"
              height="17" 
              viewBox="0 0 480 480"
            >
              <path d="M278.944,17.577c-5.568-2.656-12.128-1.952-16.928,1.92L106.368,144.009H32c-17.632,0-32,14.368-32,32v128
    c0,17.664,14.368,32,32,32h74.368l155.616,124.512c2.912,2.304,6.464,3.488,10.016,3.488c2.368,0,4.736-0.544,6.944-1.6
    c5.536-2.656,9.056-8.256,9.056-14.4v-416C288,25.865,284.48,20.265,278.944,17.577z"/>
  <path d="M368.992,126.857c-6.304-6.208-16.416-6.112-22.624,0.128c-6.208,6.304-6.144,16.416,0.128,22.656
    C370.688,173.513,384,205.609,384,240.009s-13.312,66.496-37.504,90.368c-6.272,6.176-6.336,16.32-0.128,22.624
    c3.136,3.168,7.264,4.736,11.36,4.736c4.064,0,8.128-1.536,11.264-4.64C399.328,323.241,416,283.049,416,240.009
    S399.328,156.777,368.992,126.857z"/>
  <path d="M414.144,81.769c-6.304-6.24-16.416-6.176-22.656,0.096c-6.208,6.272-6.144,16.416,0.096,22.624
    C427.968,140.553,448,188.681,448,240.009s-20.032,99.424-56.416,135.488c-6.24,6.24-6.304,16.384-0.096,22.656
    c3.168,3.136,7.264,4.704,11.36,4.704c4.064,0,8.16-1.536,11.296-4.64C456.64,356.137,480,299.945,480,240.009
    S456.64,123.881,414.144,81.769z"/>
            </svg>
            <svg v-if="muted" class="audio-icon mute-button" v-on:click="volumeClick"
              height="17" 
              viewBox="0 0 480 480"
            >
            <path d="M352.021,16.075c0-6.08-3.52-11.84-8.96-14.4c-5.76-2.88-12.16-1.92-16.96,1.92l-141.76,112.96l167.68,167.68V16.075z"/>
  <path d="M443.349,420.747l-416-416c-6.24-6.24-16.384-6.24-22.624,0s-6.24,16.384,0,22.624l100.672,100.704h-9.376
    c-9.92,0-18.56,4.48-24.32,11.52c-4.8,5.44-7.68,12.8-7.68,20.48v128c0,17.6,14.4,32,32,32h74.24l155.84,124.48
    c2.88,2.24,6.4,3.52,9.92,3.52c2.24,0,4.8-0.64,7.04-1.6c5.44-2.56,8.96-8.32,8.96-14.4v-57.376l68.672,68.672
    c3.136,3.136,7.232,4.704,11.328,4.704s8.192-1.568,11.328-4.672C449.589,437.131,449.589,427.019,443.349,420.747z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="tracklist-container flex-container-column">
      <div class="tracklist flex-container-column justify-start">
        <SongPlayerAlbum
          v-for="album in albums"
          :key="album.index"
          v-bind:albumIndex="album.index"
          v-bind:albumTitle="album.albumTitle"
          v-bind:albumYear="album.albumYear"
          v-bind:songs="album.tracklist"
          v-bind:selectedSong="selectedSong"
          v-bind:isPlaying="playing"
          v-on:selectSong="selectSong"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SongPlayerAlbum from './SongPlayerAlbum.vue';

export default {
  components: {
    SongPlayerAlbum
  },
  props: {
    albums: {
      type: Array,
      required: true
    }
  },
  data: function () {
    return {
      selectedSong: {
        index: -1,
        songUrl: null,
        songTitle: '',
        songAlbum: '',
        songLength: '',
        coverUrl: null
      },
      select: false,
      loaded: false,
      playing: false,
      ended: false,
      muted: false,
      audioDuration: 100,
      currentTime: 0,
      /* */
      cssCover: {
        backgroundImage: null
      }
    }
  },
  watch: {
    selectedSong: function () {
      this.loaded = false;
      this.playing = false;
      this.ended = false;
      if (this.selectedSong.coverUrl !== null) {
          this.cssCover.backgroundImage = `url(${require('@/assets/images/songs/' + this.selectedSong.coverUrl)})`;
      }
    },
  },
  computed: {
    audioSrc: function() {
      return this.selectedSong.songUrl !== null ? require(`@/assets/audio/songs/${this.selectedSong.songUrl}`) : '';
    }
  },
  methods: {
    selectSong(song) {
      this.selectedSong = song;

    },
    getCover(song) {
      if (song.coverUrl) {
        return require(`@/assets/images/songs/${song.coverUrl}`);
      }
      else {
        return '';
      }
    },
    formatTime(timeSec) {
      return `${Math.floor(timeSec/60)}:${(timeSec % 60).toString().padStart(2, '0')}`;
    },
    loadSrc() {
      this.$refs.player.load()
    },
    initSlider() {
        var audio = this.$refs.player;
        if (audio) {
            this.audioDuration = Math.round(audio.duration);
        }
    },
    playClick() {
      if (!this.playing) {
        this.$refs.player.play();
        this.playing = true;
      }
    },
    pauseClick() {
      if (this.playing) {
        this.$refs.player.pause();
        this.playing = false;
      }
    },
    volumeClick() {
      if (this.$refs.player.muted) {
        this.$refs.player.muted = false;
        this.muted = false;
      }
    },
    muteClick() {
      if (!this.$refs.player.muted) {
        this.$refs.player.muted = true;
        this.muted = true;
      }
    },
    sliderChange() {
      this.$refs.player.currentTime = this.currentTime
    },
  },
  mounted(){
    /* CSS IMAGE */
    if (this.selectedSong.coverUrl !== null) {
      this.cssCover.backgroundImage = `url(${require('@/assets/images/songs/' + this.selectedSong.coverUrl)})`;
    }

    /* PLAYER INIT */
    var audio=this.$refs.player;
    audio.addEventListener(
      "loadedmetadata",
      function() {
        this.initSlider();
      }.bind(this)
    );
    audio.addEventListener(
      "canplay",
      function() {
        this.loaded = true;
        this.$refs.player.play();
        this.playing = true;
      }.bind(this)
    );
    audio.addEventListener(
      "ended",
      function() {
        this.playing = false;
        this.ended = true;
        console.log('end')
      }.bind(this)
    );
    audio.addEventListener(
      "timeupdate",
      function() {
        this.currentTime = Math.round(audio.currentTime);
      }.bind(this)
    );
  }
}
</script>

<style scoped>
.player-container {
  position: relative;
  height: 400px;
  width: 400px;
  background-color: #D9AFD9;
  background-image: linear-gradient(127deg, #D9AFD9 0%, #97D9E1 100%);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 400px 400px;
  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.5);
}

.back-icon {
  position: absolute;
  fill: #ffffff66;
  top: 149px;
  left: 147px;
}

.player-controls {
  position: absolute;
  height: 30px;
  width: calc(100% - 20px);
  padding: 0px 12px;
  box-sizing: border-box;
  bottom: 10px;
  left: 10px;
  background-color: rgba(31, 31, 31, 0.60);
  box-shadow: 0px 0px 3px rgba(31, 31, 31, 0.50), 0px 0px 6px rgba(241, 241, 241, 0.25);
  border-radius: 30px;
  opacity: 0.7;
  transition-duration: 0.3s;
  transition-delay: 0.75s;
}

.player-controls:hover {
  opacity: 1;
  transition-duration: 0.2s;
  transition-delay: 0s;
}

.audio-icon {
  cursor: pointer;
  fill: rgb(247, 247, 247, 0.7);
  transition: 0.2s ease-in-out;
}

.audio-icon:hover {
  fill: rgb(247, 247, 247, 1);
  transform: scale(1.05);
  transition: 0.2s ease-in-out;
}

@keyframes appearIcon {
  0% {transform: scale(0);}
  100% {transform: scale(1);}
}

@keyframes appearIcon1 {
  0% {transform: scale(0);}
  100% {transform: scale(1);}
}

.play-button {
  animation: appearIcon;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
}

.pause-button {
  animation: appearIcon1;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
}

.volume-button {
  animation: appearIcon;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
}

.mute-button {
  animation: appearIcon1;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
}

.slider-container {
  margin: 0px 5px 0px 8px;
}

.player-slider {
  width: 100%;
  margin: 2px;
  -webkit-appearance: none;
  appearance: none;
  background-color: #97D9E1;
  background-image: linear-gradient(90deg, #D9AFD9 0%, #97D9E1 100%);
  border-radius: 7px;
  height: 6px;
  border: 1px solid #D3D3D3;
  opacity: 0.7;
  transition: opacity 0.25s;
}

.player-slider::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  border-radius: 100px;
  width: 14px; /* Set a specific slider handle width */
  height: 14px; /* Slider handle height */
  background: #f7f7f7; /* Green background */
  border: 1px solid #A9A9A9;
  cursor: pointer; /* Cursor on hover */
  transition: 0.2s ease-in-out;
}

.player-slider::-webkit-slider-thumb:hover {
  transition: 0.2s ease-in-out;
  transform: scale(1.15);
}

.player-slider:hover {
  opacity: 1;
  transition-duration: 0.25s;
}

.player-time {
  margin-right: 10px;
}

.player-time span{
  color: #f7f7f7;
  font-size: 11px;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 1);
}

.song-title {
  margin: 10px 0px;
  color: #f7f7f7;
  font-size: 20px;
  max-width: 250px;
  white-space: normal;
}

.tracklist-container {
  z-index: 50;
  margin-left: 50px;
}

.tracklist {
  height: 400px;
  background: linear-gradient(45deg, #cfd9df 30%, #e2ebf0 50%);
  box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.65);
  overflow: auto;
}

@media (max-width: 1200px){
  .player-container {
    height: 350px;
    width: 350px;
    background-size: 350px 350px;
  }

  .back-icon {
    top: 130px;
    left: 135px;
    width: 80px;
    height: 80px;
  }

  .tracklist {
    height: 350px;
  }
}

@media (max-width: 1024px){
  .player-container {
    height: 276px;
    width: 276px;
    background-size: 276px 276px;
  }

  .back-icon {
    top: 101px;
    left: 103px;
    width: 70px;
    height: 70px;
  }

  .player-controls {
    opacity: 1;
  }

  .audio-icon {
    fill: rgb(247, 247, 247, 1);
  }

  .player-slider {
    opacity: 1;
  }

  .tracklist-container {
    margin-left: 20px;
  }

  .tracklist {
    height: 276px;
  }
}

@media (max-width: 768px){
  .song-player {
    flex-direction: column;
    align-items: center;
  }

  .player-container {
    height: 250px;
    width: 250px;
    background-size: 250px 250px;
  }

  .back-icon {
    top: 91px;
    left: 93px;
    width: 64px;
    height: 64px;
  }

  .tracklist-container {
    margin-top: 20px;
    margin-left: 0px;
  }

  .tracklist {
    width: 250px;
  }

  .playing-icon {
    height: 25px;
  }
}
</style>