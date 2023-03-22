<template>
  <div class="video-player-tv flex-container-column flex-1 align-center justify-center" :style="{background: customBackground}">
    <div class="tv-antenna flex-container-row fit-max-width align-center justify-center">
      <div class="antenna-stick-l">
        <div class="antenna-end-l"></div>
      </div>
      <div class="antenna-stick-r">
        <div class="antenna-end-r"></div>
      </div>
      <div class="antenna-base"></div>
    </div>
    <div class="tv-screen flex-container-row fit-max-width align-center justify-center">
      <div class="tv-iframe-container" :class="tvOn ? 'tv-on' : 'tv-off'">
          <youtube 
            ref="youtube" 
            :player-vars="playerVars"
            @ready="ready" 
            width="100%" 
            height="100%"
          ></youtube>
      </div>
      <div class="tv-controls-container flex-container-column align-center justify-center">
        <div class="tv-rot-container flex-container-column fit-height align-center justify-center">
          <div class="tv-rot-btn tv-rot-btn-1" v-on:click="turnBtn(1)"></div>
          <div class="tv-rot-btn tv-rot-btn-2" v-on:click="turnBtn(2)"></div>
        </div> 
        <div class="tv-sound-output"></div>
        <div class="tv-sound-output"></div>
        <div class="tv-sound-output"></div>
        <div class="tv-sound-output"></div>
        <div class="tv-sound-output"></div>
        <div class="tv-power-container flex-container-row align-end justify-center">
          <div class="flex-container-column align-center justify-center">
            <div class="tv-power-label">
              POWER
            </div>
            <div class="tv-power-btn" v-on:click="powerTv"></div>
          </div>
          <div class="tv-power-led" :style="{background: tvOn ? 'red' : '#333'}" v-on:click="powerTv"></div>
        </div>
      </div>
    </div>
    <div class="tv-feet flex-container-row align-center justify-center">
      <div class="tv-foot-l-sub">
        <div class="tv-foot-l-top">
        </div>
      </div>
      <div class="tv-foot-r-sub">
        <div class="tv-foot-r-top">
        </div>
      </div>
      <div class="tv-feet-base-shadow" :style="{background: customBackground}"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoPlayerTv',
  data: function () {
    return {
      tvOn: true,
      playerVars: {
        autoplay: 1,
        mute: 0,
      }
    }
  },
  props: {
    customBackground: {
      type: String,
      default: 'black'
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    },
  },
  methods: {
    turnBtn(btnId) {
      this.$el.querySelector(`.tv-rot-btn-${btnId}`).style.setProperty('--tv-rot-btn-angle', `rotate(${Math.random() * 360}deg)`);
    },
    powerTv() {
      this.tvOn = !this.tvOn;
      let dis = this.tvOn ? 'inline' : 'none';
      let vol = this.tvOn ? 100 : 0;
      this.$el.querySelector('iframe').style.display = dis;
      this.player.setVolume(vol);
    },
    ready() {
      // this.setVolume();
      this.player.loadPlaylist(['DyAZUMQQKk4', '_8BoZizFG60', 'GkENaIj1L0c']);
      this.player.setLoop(true);
    },
  },
  mounted() {
      this.$el.querySelector('.tv-rot-btn-1').style.setProperty('--tv-rot-btn-angle', `rotate(${Math.random() * 360}deg)`);
      this.$el.querySelector('.tv-rot-btn-2').style.setProperty('--tv-rot-btn-angle', `rotate(${Math.random() * 360}deg)`);
  }
}
</script>

<style scoped>
.video-player-tv {
  padding: 20px;
  --tv-rot-btn-angle: 'rotate(0deg)';
  --tv-decr-ratio: 0.8;
}

/* ANTENNA */
.tv-antenna {
  position: relative;
  z-index: 6;
}

.antenna-stick-l {
  position: relative;
  width: 0px;
  height: 300px;
  margin-bottom: -40px;
  margin-left: 15px;
  margin-right: 90px;
  border: 3px rgb(55, 55, 55) solid;
  transform: rotate(-38deg);
}

.antenna-stick-r {
  position: relative;
  width: 0px;
  height: 300px;
  margin-bottom: -40px;
  margin-left: 90px;
  border: 3px rgb(55, 55, 55) solid;
  transform: rotate(48deg);
}

.antenna-end-l {
  position: absolute;
  top: -15px;
  left: -15px;
  width: 20px;
  height: 20px;
  background: #b0b0b0;
  border: 4px rgb(35, 35, 35) solid;
  border-radius: 100px;
}

.antenna-end-r {
  position: absolute;
  top: -15px;
  right: -15px;
  width: 20px;
  height: 20px;
  background: #c0c0c0;
  border: 4px rgb(35, 35, 35) solid;
  border-radius: 100px;
}

.antenna-base {
  position: absolute;
  bottom: -45px;
  width: 115px;
  height: 80px;
  background: linear-gradient(50deg, #808080, #c0c0c0);
  border: 4px rgb(35, 35, 35) solid;
  border-radius: 100%;
}

/* SCREEN */
.tv-screen {
  padding: 35px;
  background: linear-gradient(35deg, #ababab, #c0c0c0);
  border: 5px solid rgb(35, 35, 35);
  border-radius: 20px;
  z-index: 9;
}

.tv-iframe-container {
  position: relative;
  width: 540px;
  height: 480px;
  box-sizing: content-box;
  padding: 0 50px;
  background: black;
  border: 1px solid black;
  border-radius: 40px;

  /* background-image: url(../assets/images/tetes/tete-bob.png); */
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100px;
}
.tv-iframe-container.tv-on::before {
  display: block;
}
.tv-iframe-container.tv-off::before {
  display: none;
}
.tv-iframe-container::before {
  position: absolute;
  content: '';
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 40px;
  z-index: -1;

  box-shadow: 0px 0px 125px #fffcebdd;
  opacity: 1;
  animation-name: tvLightVar;
  animation-direction: alternate;
  animation-duration: 1s;
  animation-iteration-count: infinite
}

.tv-iframe-container iframe {
  max-width: 100%;
  max-height: 100%;
}

@keyframes tvLightVar {
  0% {
    opacity: 1;
  }
  5% {
    opacity: 0.95;
  }
  10% {
    opacity: 0.8;
  }
  15% {
    opacity: 0.85;
  }
  20% {
    opacity: 0.75;
  }
  25% {
    opacity: 0.85;
  }
  30% {
    opacity: 0.9;
  }
  35% {
    opacity: 0.75;
  }
  40% {
    opacity: 0.85;
  }
  45% {
    opacity: 0.8;
  }
  50% {
    opacity: 0.65;
  }
  55% {
    opacity: 0.7;
  }
  60% {
    opacity: 0.65;
  }
  65% {
    opacity: 0.75;
  }
  70% {
    opacity: 0.7;
  }
  75% {
    opacity: 0.8;
  }
  80% {
    opacity: 0.65;
  }
  85% {
    opacity: 0.7;
  }
  90% {
    opacity: 0.75;
  }
  95% {
    opacity: 0.85;
  }
  100% {
    opacity: 1;
  }
}

.tv-controls-container {
  margin-left: 35px;
}

.tv-rot-container {
  width: 110px;
  margin-top: 15px;
  padding: 30px 0;
  background-color: #e0e0e0;
  border: 4px solid black;
  border-radius: 15px;
}

.tv-rot-btn {
  position: relative;
  width: 75px;
  height: 75px;
  background: #888;
  border: 4px solid black;
  border-radius: 100px;
  cursor: pointer;
}
.tv-rot-btn-1 {
  margin-bottom: 25px;
}
.tv-rot-btn:hover {
  background: #777;
}

.tv-rot-btn::after {
  content: '';
  position: absolute;
  top: calc(50% - 49px);
  left: calc(50% - 19px);
  width: 30px;
  height: 90px;
  background: linear-gradient(45deg, #888, #AAA);
  border: 4px solid black;
  border-radius: 2px;
  transform: var(--tv-rot-btn-angle);
}
.tv-rot-btn:hover::after {
  background: linear-gradient(45deg, #777, #999);
}

.tv-sound-output {
  width: 110px;
  border: 2px solid black;
  border-radius: 100px;
}
.tv-sound-output:nth-child(2) {margin-top: 35px;}
.tv-sound-output:nth-child(3) {margin-top: 16px;}
.tv-sound-output:nth-child(4) {margin-top: 17px;}
.tv-sound-output:nth-child(5) {margin-top: 15px;}
.tv-sound-output:nth-child(6) {margin-top: 18px;}

.tv-power-container {
  margin-top: 30px;
}

.tv-power-label {
  font-weight: 900;
  font-size: 11px;
  margin-bottom: 3px;
}

.tv-power-btn {
  width: 43px;
  height: 20px;
  background: #e0e0e0;
  border: 4px solid black;
  cursor: pointer;
  transition: 0.075s;
}
.tv-power-btn:hover {
  background: #444;
}

.tv-power-led {
  width: 16px;
  height: 16px;
  margin-left: 25px;
  margin-bottom: 2px;
  border: 4px solid black;
  border-radius: 100px;
}

/* FEET */
.tv-feet {
  position: relative;
  z-index: 7;
}

.tv-foot-l-sub {
  position: relative;
  width: 0px;
  height: 80px;
  margin-top: -20px;
  margin-right: 250px;
  border-right: 50px transparent solid;
  border-left: 10px transparent solid;
  border-top: 230px rgb(35, 35, 35) solid;
  transform: rotate(18deg);
}

.tv-foot-l-top {
  position: absolute;
  top: -255px;
  left: -8px;
  border-right: 50px transparent solid;
  border-left: 10px transparent solid;
  border-top: 230px #c0c0c0 solid;
}

.tv-foot-r-sub {
  position: relative;
  width: 0px;
  height: 80px;
  margin-top: -20px;
  margin-left: 250px;
  border-right: 10px transparent solid;
  border-left: 50px transparent solid;
  border-top: 230px rgb(35, 35, 35) solid;
  transform: rotate(-18deg);
}

.tv-foot-r-top {
  position: absolute;
  top: -255px;
  right: -8px;
  border-right: 10px transparent solid;
  border-left: 50px transparent solid;
  border-top: 230px #c5c5c5 solid;
}

.tv-feet-base-shadow {
  position: absolute;
  bottom: 90px;
  left: -20px;
  right: -20px;
  height: 10px;
  background: black;
}

@media (max-width: 1024px){
  /* ANTENNA */
  .antenna-stick-l {
    width: calc(0px * var(--tv-decr-ratio));
    height: calc(300px * var(--tv-decr-ratio));
    margin-bottom: calc(-40px * var(--tv-decr-ratio));
    margin-left: calc(15px * var(--tv-decr-ratio));
    margin-right: calc(90px * var(--tv-decr-ratio));
    border: calc(3px * var(--tv-decr-ratio)) rgb(55, 55, 55) solid;
  }

  .antenna-stick-r {
    width: calc(0px * var(--tv-decr-ratio));
    height: calc(300px * var(--tv-decr-ratio));
    margin-bottom: calc(-40px * var(--tv-decr-ratio));
    margin-left: calc(90px * var(--tv-decr-ratio));
    border: calc(3px * var(--tv-decr-ratio)) rgb(55, 55, 55) solid;
  }

  .antenna-end-l {
    top: calc(-15px * var(--tv-decr-ratio));
    left: calc(-15px * var(--tv-decr-ratio));
    width: calc(20px * var(--tv-decr-ratio));
    height: calc(20px * var(--tv-decr-ratio));
    border: calc(4px * var(--tv-decr-ratio)) rgb(35, 35, 35) solid;
  }

  .antenna-end-r {
    top: calc(-15px * var(--tv-decr-ratio));
    right: calc(-15px * var(--tv-decr-ratio));
    width: calc(20px * var(--tv-decr-ratio));
    height: calc(20px * var(--tv-decr-ratio));
    border: calc(4px * var(--tv-decr-ratio)) rgb(35, 35, 35) solid;
  }

  .antenna-base {
    bottom: calc(-45px * var(--tv-decr-ratio));
    width: calc(115px * var(--tv-decr-ratio));
    height: calc(80px * var(--tv-decr-ratio));
    border: calc(4px * var(--tv-decr-ratio)) rgb(35, 35, 35) solid;
  }

  /* SCREEN */
  .tv-screen {
    padding: calc(35px * var(--tv-decr-ratio));
    border: calc(5px * var(--tv-decr-ratio)) solid rgb(35, 35, 35);
    border-radius: calc(20px * var(--tv-decr-ratio));
  }

  .tv-iframe-container {
    width: calc(540px * var(--tv-decr-ratio));
    height: calc(480px * var(--tv-decr-ratio));
    padding: 0 calc(50px * var(--tv-decr-ratio));
    border-radius: calc(40px * var(--tv-decr-ratio));
  }

  .tv-iframe-container::before {
    border-radius: calc(40px * var(--tv-decr-ratio));
  }

  .tv-controls-container {
    margin-left: calc(35px * var(--tv-decr-ratio));
  }

  .tv-rot-container {
    width: calc(110px * var(--tv-decr-ratio));
    margin-top: calc(15px * var(--tv-decr-ratio));
    padding: calc(30px * var(--tv-decr-ratio)) 0;
    border: calc(4px * var(--tv-decr-ratio)) solid black;
    border-radius: calc(15px * var(--tv-decr-ratio));
  }

  .tv-rot-btn {
    width: calc(75px * var(--tv-decr-ratio));
    height: calc(75px * var(--tv-decr-ratio));
    border: calc(4px * var(--tv-decr-ratio)) solid black;
  }
  .tv-rot-btn-1 {
    margin-bottom: calc(25px * var(--tv-decr-ratio));
  }

  .tv-rot-btn::after {
    top: calc(50% - calc(49px * var(--tv-decr-ratio)));
    left: calc(calc(50% - calc(19px * var(--tv-decr-ratio))));
    width: calc(30px * var(--tv-decr-ratio));
    height: calc(90px * var(--tv-decr-ratio));
    border: calc(4px * var(--tv-decr-ratio)) solid black;
    border-radius: calc(2px * var(--tv-decr-ratio));
  }

  .tv-sound-output {
    width: calc(110px * var(--tv-decr-ratio));
    border: calc(2px * var(--tv-decr-ratio)) solid black;
    border-radius: calc(100px * var(--tv-decr-ratio));
  }
  .tv-sound-output:nth-child(2) {margin-top: calc(35px * var(--tv-decr-ratio));}
  .tv-sound-output:nth-child(3) {margin-top: calc(16px * var(--tv-decr-ratio));}
  .tv-sound-output:nth-child(4) {margin-top: calc(17px * var(--tv-decr-ratio));}
  .tv-sound-output:nth-child(5) {margin-top: calc(15px * var(--tv-decr-ratio));}
  .tv-sound-output:nth-child(6) {margin-top: calc(18px * var(--tv-decr-ratio));}

  .tv-power-container {
    margin-top: calc(30px * var(--tv-decr-ratio));
  }

  .tv-power-label {
    font-size: calc(11px * var(--tv-decr-ratio));
    margin-bottom: calc(3px * var(--tv-decr-ratio));
  }

  .tv-power-btn {
    width: calc(43px * var(--tv-decr-ratio));
    height: calc(20px * var(--tv-decr-ratio));
    border: calc(4px * var(--tv-decr-ratio)) solid black;
  }

  .tv-power-led {
    width: calc(16px * var(--tv-decr-ratio));
    height: calc(16px * var(--tv-decr-ratio));
    margin-left: calc(25px * var(--tv-decr-ratio));
    margin-bottom: calc(2px * var(--tv-decr-ratio));
    border: calc(4px * var(--tv-decr-ratio)) solid black;
  }

  /* FEET */
  .tv-foot-l-sub {
    width: calc(0px * var(--tv-decr-ratio));
    height: calc(80px * var(--tv-decr-ratio));
    margin-top: calc(-20px * var(--tv-decr-ratio));
    margin-right: calc(250px * var(--tv-decr-ratio));
    border-right: calc(50px * var(--tv-decr-ratio)) transparent solid;
    border-left: calc(10px * var(--tv-decr-ratio)) transparent solid;
    border-top: calc(230px * var(--tv-decr-ratio)) rgb(35, 35, 35) solid;
  }

  .tv-foot-l-top {
    top: calc(-255px * var(--tv-decr-ratio));
    left: calc(-8px * var(--tv-decr-ratio));
    border-right: calc(50px * var(--tv-decr-ratio)) transparent solid;
    border-left: calc(10px * var(--tv-decr-ratio)) transparent solid;
    border-top: calc(230px * var(--tv-decr-ratio)) #c0c0c0 solid;
  }

  .tv-foot-r-sub {
    width: calc(0px * var(--tv-decr-ratio));
    height: calc(80px * var(--tv-decr-ratio));
    margin-top: calc(-20px * var(--tv-decr-ratio));
    margin-left: calc(250px * var(--tv-decr-ratio));
    border-right: calc(10px * var(--tv-decr-ratio)) transparent solid;
    border-left: calc(50px * var(--tv-decr-ratio)) transparent solid;
    border-top: calc(230px * var(--tv-decr-ratio)) rgb(35, 35, 35) solid;
  }

  .tv-foot-r-top {
    position: absolute;
    top: calc(-255px * var(--tv-decr-ratio));
    right: calc(-8px * var(--tv-decr-ratio));
    border-right: calc(10px * var(--tv-decr-ratio)) transparent solid;
    border-left: calc(50px * var(--tv-decr-ratio)) transparent solid;
    border-top: calc(230px * var(--tv-decr-ratio)) #c5c5c5 solid;
  }

  .tv-feet-base-shadow {
    bottom: calc(90px * var(--tv-decr-ratio));
    left: calc(-20px * var(--tv-decr-ratio));
    right: calc(-20px * var(--tv-decr-ratio));
    height: calc(10px * var(--tv-decr-ratio));
  }
}

@media (max-width: 767px){
  .video-player-tv {
    display: none;
  }
}
</style>