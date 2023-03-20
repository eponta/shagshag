<template>
  <div class="video-player-ipod ipod-container flex-container-column align-center justify-center">
    <div class="ipod flex-container-column align-center space-between">
      <div class="ipod-screen">
        <div class="ipod-iframe-container" :class="iPodOn ? 'ipod-on' : 'ipod-off'">
          <youtube ref="youtube" 
            :player-vars="playerVars"
            @ready="ready" 
            @playing="playing" 
            @paused="paused" 
            @ended="ended" 
            @cued="cued"
            :width="'100%'" 
            :height="'100%'"
          ></youtube>
        </div>
      </div>
      <div class="ipod-controls">
        <div class="ipod-controls-ilot"></div>
        <div class="ipod-controls-pad flex-container-row align-center justify-center">
          <div class="flex-1 full-height flex-container-column align-center justify-center">
            <div class="flex-1"></div>
            <div class="ipod-controls-btn btn-west flex-1" v-on:click="previousVideo"></div>
            <div class="flex-1"></div>
          </div>
          <div class="flex-1 full-height flex-container-column align-center justify-center">
            <div class="ipod-controls-btn btn-north flex-1"></div>
            <div class="flex-1"></div>
            <div class="ipod-controls-btn btn-south flex-1" v-on:click="playPause"></div>
          </div>
          <div class="flex-1 full-height flex-container-column align-center justify-center">
            <div class="flex-1"></div>
            <div class="ipod-controls-btn btn-east flex-1" v-on:click="nextVideo"></div>
            <div class="flex-1"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="ipod-volume-container">
      <input class="ipod-volume-slider" type="range" v-model="playerVolume" min="0" max="100">
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'VideoPlayeriPod',
  data: function () {
    return {
      playerVars: {
        loop: 1,
        modestBranding: 1,
        controls: 0
      },
      iPodOn: true,
      playerState: null,
      // playerVolume: 15,
    }
  },
  watch: {
    playerVolume(val) {
      this.setVolume(val);
    }
  },
  props: {
    youtubeSrc: {
      type: String,
      required: true
    },
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    },
  },
  methods: {
    //BUTTONS
    playVideo() {
      this.player.playVideo();
    },
    pauseVideo() {
      this.player.pauseVideo();
    },
    setVolume() {
      this.player.setVolume(this.playerVolume);
    },
    //YOUTUBE
    ready() {
      this.playerState = -1;
      // this.setVolume();
      this.player.loadPlaylist(['_8BoZizFG60', 'GkENaIj1L0c', 'DyAZUMQQKk4']);
      this.player.setLoop(true);
    },
    playing() {
      this.playerState = 1;
    },
    paused() {
      this.playerState = 2;
    },
    ended() {
      this.playerState = 0;
    },
    cued() {
      this.playerState = 5;
    },
    playPause() {
      if (this.playerState === -1 || this.playerState === 2 || this.playerState === 0) {
        this.playVideo();
      }
      else if (this.playerState === 1) {
        this.pauseVideo();
      }
    },
    previousVideo() {
      this.player.previousVideo();
    },
    nextVideo() {
      this.player.nextVideo();
    }
  }
}
</script>

<style scoped>
.video-player-ipod {
  padding: 20px;
}

.ipod {
  width: 260px;
  height: 444px;
  padding: 22px;
  box-sizing: border-box;
  border: 1px solid dimgrey;
  border-radius: 25px;
  box-shadow: 
    0px 0px 10px dimgray inset,
    0px -3px 20px rgb(64, 64, 64) inset;
  /* background-color: gainsboro; */
  background-image: radial-gradient(ellipse at 49% 35%, whitesmoke 0%, gainsboro 60%, dimgray 110%);
}

.ipod-screen {
  width: 216px;
  height: 162px;
  box-sizing: border-box;
  border: 4px black solid;
  border-radius: 5px;
  background: white;
  z-index: 99;
}

.ipod-iframe-container {
  width: 100%;
  height: 100%;
}

.ipod-iframe-container iframe {
  max-width: 100%;
  max-height: 100%;
}

.ipod-controls {
  position: relative;
  width: 160px;
  height: 160px;
  margin-bottom: 28px;
  border: 1px solid gainsboro;
  border-radius: 100px;
  background: white;
  z-index: 95;
}

.ipod-controls-ilot {
  position: absolute;
  top: calc(50% - 30px);
  left: calc(50% - 30px);
  width: 60px;
  height: 60px;
  border: 1px solid gainsboro;
  border-radius: 100px;
  background-color: gainsboro;
  background: linear-gradient(-5deg, whitesmoke, rgb(187, 187, 187));
  z-index: 97;
}

.ipod-controls-pad {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 96;
}

.ipod-controls-btn {
  background-repeat: no-repeat;
  opacity: 0.65;
  cursor: pointer;
}
.btn-west {
  width: 100%;
  height: calc(100% / 3);
  background-image: url(../assets/icons/ipod-backward.png);
  background-position: 23% 50%;
  background-size: 16px;
}
.btn-north {
  width: 100%;
  height: calc(100% / 3);
  background-image: url(../assets/icons/ipod-menu.png);
  background-position: 50% 20%;
  background-size: 32px;
}
.btn-south {
  width: 100%;
  height: calc(100% / 3);
  background-image: url(../assets/icons/ipod-play-pause.png);
  background-position: 50% 82%;
  background-size: 19px;
}
.btn-east {
  width: 100%;
  height: calc(100% / 3);
  background-image: url(../assets/icons/ipod-forward.png);
  background-position: 77% 50%;
  background-size: 16px;
}

.ipod-volume-container {
  margin-top: 20px;
}

.ipod-volume-slider {
  background: red;
  background-color: yellow;
  height: 20px;
}

@media (min-width: 768px){
  .video-player-ipod {
    display: none;
  }
}
</style>