<template>
  <div class="video-player-ipod ipod-container flex-container-column align-center justify-center" :class="iPodClass">
    <div 
      ref="ipod"
      class="ipod flex-container-column align-center space-between"
      :style="{height: `${ipodWidth * coefiPod}px`}"
    >
      <div 
        ref="ipodScreen"
        class="ipod-screen"
        :style="{height: `${ipodScreenWidth * coefScreen}px`}"
      >
        <div class="ipod-iframe-container" :class="iPodOn ? 'ipod-on' : 'ipod-off'">
          <youtube 
            ref="youtube" 
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
      <div 
        ref="ipodControls"
        class="ipod-controls"
        :style="{height: `${ipodControlsWidth}px`}"
      >
        <div class="ipod-controls-ilot"></div>
        <div class="ipod-controls-pad flex-container-row align-center justify-center" :class="clicked ? `clicked-${clicked}` : null">
          <div class="flex-1 full-height flex-container-column align-center justify-center">
            <div class="flex-1"></div>
            <div class="ipod-controls-btn btn-west flex-1" v-on:click="clickWest"></div>
            <div class="flex-1"></div>
          </div>
          <div class="flex-1 full-height flex-container-column align-center justify-center">
            <div class="ipod-controls-btn btn-north flex-1" v-on:click="clickNorth"></div>
            <div class="flex-1"></div>
            <div class="ipod-controls-btn btn-south flex-1" v-on:click="clickSouth"></div>
          </div>
          <div class="flex-1 full-height flex-container-column align-center justify-center">
            <div class="flex-1"></div>
            <div class="ipod-controls-btn btn-east flex-1" v-on:click="clickEast"></div>
            <div class="flex-1"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoPlayeriPod',
  data: function () {
    return {
      //const
      COEF_IPOD_CLASSIC: 1.70769230769,
      COEF_IPOD_CLASSIC_SCREEN: 0.75,
      COEF_IPOD_NANO: 2.34366925065,
      COEF_IPOD_NANO_SCREEN: 1.33333333333,
      //iPod - 0 : classic - 1 : nano
      iPodType: 0,
      iPodOn: true,
      clicked: null,
      ipodWidth: 260,
      ipodScreenWidth: 216,
      ipodControlsWidth: 162,
      //YT
      playerVars: {
        loop: 1,
        modestBranding: 1,
        controls: 0,
      },
      playerState: null,
      // playerVolume: 15,
    }
  },
  watch: {
    // playerVolume(val) {
    //   this.setVolume(val);
    // }
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    },
    coefiPod() {
      if (this.iPodType === 0) {
        return this.COEF_IPOD_CLASSIC;
      }
      else if (this.iPodType === 1) {
        return this.COEF_IPOD_NANO;
      }
      else {
        return this.COEF_IPOD_CLASSIC;
      }
    },
    coefScreen() {
      if (this.iPodType === 0) {
        return this.COEF_IPOD_CLASSIC_SCREEN;
      }
      else if (this.iPodType === 1) {
        return this.COEF_IPOD_NANO_SCREEN;
      }
      else {
        return this.COEF_IPOD_CLASSIC_SCREEN;
      }
    },
    iPodClass() {
      if (this.iPodType === 0) {
        return 'classic';
      }
      else if (this.iPodType === 1) {
        return 'nano';
      }
      else {
        return 'classic';
      }
    }
  },
  methods: {
    //BUTTONS
    clickWest() {
      this.clicked = 'west';
      this.player.previousVideo();
    },
    clickNorth() {
      this.clicked = 'north';
      if (this.iPodType === 0) {
        this.iPodType = 1
      }
      else if (this.iPodType === 1) {
        this.iPodType = 0
      }
      else {
        this.iPodType = 0
      }
      setTimeout(this.resizeHandler, 10);
    },
    clickSouth() {
      this.clicked = 'south';
      if (this.playerState === -1 || this.playerState === 2 || this.playerState === 0) {
        this.playVideo();
      }
      else if (this.playerState === 1) {
        this.pauseVideo();
      }
    },
    clickEast() {
      this.clicked = 'east';
      this.player.nextVideo();
    },
    playVideo() {
      this.player.playVideo();
    },
    pauseVideo() {
      this.player.pauseVideo();
    },
    // setVolume() {
    //   this.player.setVolume(this.playerVolume);
    // },
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
    resizeHandler() {
      this.ipodWidth = this.$refs.ipod.clientWidth + 2;
      this.ipodScreenWidth = this.$refs.ipodScreen.clientWidth + 8;
      this.ipodControlsWidth = this.$refs.ipodControls.clientWidth + 2;
    }
  },
  mounted() {
    this.ipodWidth = this.$refs.ipod.clientWidth + 2;
    this.ipodScreenWidth = this.$refs.ipodScreen.clientWidth + 8;
    this.ipodControlsWidth = this.$refs.ipodControls.clientWidth + 2;
  },
  created() {
    window.addEventListener("resize", this.resizeHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeHandler);
  }
}
</script>

<style scoped>
.video-player-ipod {
  min-height: 500px;
  overflow: hidden;
}

.video-player-ipod.classic {
  padding: clamp(20px, calc((100% - 200px) / 5), 67px);
}

.video-player-ipod.nano {
  padding: clamp(57px, calc((100% - 91px) / 3.12), 142px);
}

@keyframes switchOpacityC {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
    margin-left: 200%;
    }
  100% {
    opacity: 1;
    margin-left: 0%;
    }
}

@keyframes switchOpacityN {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
    margin-left: 200%;
    }
  100% {
    opacity: 1;
    margin-left: 0%;
    }
}

.classic .ipod {
  min-width: 260px;
  max-width: 400px;
  min-height: 444px;
  width: 100%;
  padding: clamp(22px, calc((100% - 2.33px) / 11.67), 34px);
  box-sizing: border-box;
  border: 1px solid dimgrey;
  border-radius: 25px;
  box-shadow: 
    0px 0px 10px dimgray inset,
    0px -3px 20px rgb(64, 64, 64) inset;
  background-color: gainsboro;
  background-image: radial-gradient(ellipse at 49% 35%, whitesmoke 0%, gainsboro 60%, dimgray 110%);

  opacity: 1;
  animation-name: switchOpacityC;
  animation-duration: 0.6s;
  animation-iteration-count: 1;
}

.nano .ipod {
  min-width: 166px;
  max-width: 250px;
  min-height: 389px;
  width: 100%;
  padding: clamp(11px, calc(100% / 15.11), 16.56px);
  box-sizing: border-box;
  border: 1px solid #555555;
  border-radius: 40% / 2px;
  box-shadow: 
      15px 0px 17px -5px rgba(124, 124, 124, 0.5) inset,
      -15px 0px 15px -5px rgba(105, 105, 105, 0.5) inset,
      5px 0px 6px -4px rgba(0, 0, 0, 0.8) inset,
      -5px 0px 4px -4px rgba(0, 0, 0, 0.8) inset,
      100px 0px 100px -150px rgb(30, 30, 30, 0.9) inset,
      6px 0px 2px -4px rgba(50, 50, 50, 0.15) inset,
      -6px 0px 2px -4px rgba(50, 50, 50, 0.05) inset,
      0px -1px 3px rgba(50, 50, 50, 0.05),
      0px 1px 5px rgba(50, 50, 50, 0.2),
      0px 0px 60px rgba(255, 255, 255, 0.1);
  background-color: #e0e0e0;
  background-image: linear-gradient(90deg, dimgray -50%, #d8d8d8 15%, #fafafa 49%, #cdcdcd 80%, dimgray 150%);

  opacity: 1;
  animation-name: switchOpacityN;
  animation-duration: 0.6s;
  animation-iteration-count: 1;
}

.classic .ipod-screen {
  min-width: 216px;
  min-height: 162px;
  width: 100%;
  box-sizing: border-box;
  border: 4px black solid;
  border-radius: 5px;
  background: white;
  z-index: 99;
}

.nano .ipod-screen {
  min-width: 142px;
  height: 173px;
  width: 100%;
  height: 173px;
  box-sizing: border-box;
  border: 6px black solid;
  border-radius: 5px;
  background: white;
  z-index: 99;
}

.ipod-iframe-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.ipod-iframe-container iframe {
  max-width: 100%;
  max-height: 100%;
}

.classic .ipod-controls {
  position: relative;
  min-height: 162px;
  max-height: 250px;
  width: clamp(162px, calc(100% / 1.32098765432), 250px);
  margin-bottom: clamp(28px, calc((100% + 25px) / 8.29), 44px);
  background: white;
  box-sizing: border-box;
  border: 1px solid gainsboro;
  border-radius: 999px;
  z-index: 95;
}

.nano .ipod-controls {
  position: relative;
  min-height: 118px;
  max-height: 181px;
  width: clamp(118px, calc(100% / 1.38333333333), 181px);
  height: 118px;
  margin-bottom: clamp(24px, calc((100% - 59px) / 3.48), 45px);
  border: 1px solid #2d2d2d;
  border-radius: 100px;
  background: linear-gradient(90deg, #2d2d2d 0%, #353535 35%, #353535 65%, #2c2c2c 100%);
  z-index: 95;
}

.classic .ipod-controls-ilot {
  position: absolute;
  top: calc(50% - (100% / (2.61290322581 * 2)));
  left: calc(50% - (100% / (2.61290322581 * 2)));
  width: calc(100% / 2.61290322581);
  height: calc(100% / 2.61290322581);
  box-sizing: border-box;
  border: 1px solid gainsboro;
  border-radius: 999px;
  background-color: gainsboro;
  background: linear-gradient(-5deg, whitesmoke, rgb(187, 187, 187));
  z-index: 97;
}

.nano .ipod-controls-ilot {
  position: absolute;
  top: calc(50% - (100% / (2.14285714286 * 2)));
  left: calc(50% - (100% / (2.14285714286 * 2)));
  width: calc(100% / 2.14285714286);
  height: calc(100% / 2.14285714286);
  box-sizing: border-box;
  border-radius: 100px;
  background-color: gainsboro;
  background: radial-gradient(#e0e0e0, #ebebeb);
  z-index: 97;
}

.classic .ipod-controls-pad {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(0deg, rgba(0,0,0,0.35) -50%, rgba(255, 255, 255, 0.5) 25%, rgba(255, 255, 255, 0.5) 75%, rgb(0,0,0,0.35) 150%),
              linear-gradient(90deg, rgba(0,0,0,0.75) -50%, rgba(255, 255, 255, 0.5) 25%, rgba(255, 255, 255, 0.5) 75%, rgb(0,0,0,0.75) 150%);
  background-size: 250% 250%;
  background-position: 50% 50%, 50% 50%;
  border-radius: 999px;
  z-index: 96;
}

.nano .ipod-controls-pad {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 96;
}
.clicked-west {
  --shadow-pos: 50% 50%, 0% 50%;
  animation-name: clickShadowW;
  animation-duration: 0.35s;
  animation-iteration-count: 1;
  animation-direction: alternate;
  animation-timing-function: ease-in;
}
.clicked-north {
  --shadow-pos: 50% 0%, 50% 50%;
  animation-name: clickShadowN;
  animation-duration: 0.35s;
  animation-iteration-count: 1;
  animation-direction: alternate;
  animation-timing-function: ease-in;
}
.clicked-south {
  --shadow-pos: 50% 100%, 50% 50%;
  animation-name: clickShadowS;
  animation-duration: 0.35s;
  animation-iteration-count: 1;
  animation-direction: alternate;
  animation-timing-function: ease-in;
}
.clicked-east {
  --shadow-pos: 50% 50%, 100% 50%;
  animation-name: clickShadowE;
  animation-duration: 0.35s;
  animation-iteration-count: 1;
  animation-direction: alternate;
  animation-timing-function: ease-in;
}

@keyframes clickShadowW {
  0% {
    background-position: 50% 50%, 50% 50%;
  }
  5% {
    background-position: var(--shadow-pos);
  }
  100% {
    background-position: 50% 50%, 50% 50%;
  }
}
@keyframes clickShadowN {
  0% {
    background-position: 50% 50%, 50% 50%;
  }
  5% {
    background-position: var(--shadow-pos);
  }
  100% {
    background-position: 50% 50%, 50% 50%;
  }
}
@keyframes clickShadowS {
  0% {
    background-position: 50% 50%, 50% 50%;
  }
  5% {
    background-position: var(--shadow-pos);
  }
  100% {
    background-position: 50% 50%, 50% 50%;
  }
}
@keyframes clickShadowE {
  0% {
    background-position: 50% 50%, 50% 50%;
  }
  5% {
    background-position: var(--shadow-pos);
  }
  100% {
    background-position: 50% 50%, 50% 50%;
  }
}

.classic .ipod-controls-btn {
  background-repeat: no-repeat;
  opacity: 0.65;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
.classic .btn-west {
  width: 100%;
  height: calc(100% / 3);
  background-image: url(../assets/icons/ipod-backward.png);
  background-position: 23% 50%;
  background-size: calc(100% / 3.375);
}
.classic .btn-north {
  width: 100%;
  height: calc(100% / 3);
  background-image: url(../assets/icons/ipod-menu.png);
  background-position: 50% 20%;
  background-size: calc(100% / 1.6875);
}
.classic .btn-south {
  width: 100%;
  height: calc(100% / 3);
  background-image: url(../assets/icons/ipod-play-pause.png);
  background-position: 50% 82%;
  background-size: calc(100% / 2.842);
}
.classic .btn-east {
  width: 100%;
  height: calc(100% / 3);
  background-image: url(../assets/icons/ipod-forward.png);
  background-position: 77% 50%;
  background-size: calc(100% / 3.375);
}

.nano .ipod-controls-btn {
  background-repeat: no-repeat;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
.nano .btn-west {
  width: 100%;
  height: calc(100% / 3);
  background-image: url(../assets/icons/ipod-backward-white.png);
  background-position: 37% 50%;
  background-size: calc(100% / 3.33333333333);
}
.nano .btn-north {
  width: 100%;
  height: calc(100% / 3);
  background-image: url(../assets/icons/ipod-menu-white.png);
  background-position: 50% 26%;
  background-size: calc(100% / 1.42857142857);
}
.nano .btn-south {
  width: 100%;
  height: calc(100% / 3);
  background-image: url(../assets/icons/ipod-play-pause-white.png);
  background-position: 50% 72%;
  background-size: calc(100% / 2.5);
}
.nano .btn-east {
  width: 100%;
  height: calc(100% / 3);
  background-image: url(../assets/icons/ipod-forward-white.png);
  background-position: 63% 50%;
  background-size: calc(100% / 3.33333333333);
}

@media (min-width: 768px){
  .video-player-ipod {
    display: none;
  }
}
</style>