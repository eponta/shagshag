<template>
  <div class="song-player-mini flex-container-column align-center justify-center">
    <div class="player-container" v-bind:style="cssCover">
      <audio :src="require(`@/assets/audio/songs/${songUrl}`)" preload="auto" ref="player">
      </audio>
      <svg v-if="loaded && !playing" class="audio-icon play-button" v-on:click="playClick"
        width="36" 
        height="36" 
        viewBox="0 0 320.001 320.001" 
      >
        <path d="M295.84,146.049l-256-144c-4.96-2.784-11.008-2.72-15.904,0.128C19.008,5.057,16,10.305,16,16.001v288
	c0,5.696,3.008,10.944,7.936,13.824c2.496,1.44,5.28,2.176,8.064,2.176c2.688,0,5.408-0.672,7.84-2.048l256-144
	c5.024-2.848,8.16-8.16,8.16-13.952S300.864,148.897,295.84,146.049z">
        </path>
      </svg>
      <svg v-if="loaded && playing" class="audio-icon pause-button" v-on:click="playClick"
        width="36" 
        height="36" 
        viewBox="0 0 512 512" 
      >
<g>
	<g>
		<path d="M181.333,0H74.667c-17.643,0-32,14.357-32,32v448c0,17.643,14.357,32,32,32h106.667c17.643,0,32-14.357,32-32V32
			C213.333,14.357,198.976,0,181.333,0z"/>
	</g>
</g>
<g>
	<g>
		<path d="M437.333,0H330.667c-17.643,0-32,14.357-32,32v448c0,17.643,14.357,32,32,32h106.667c17.643,0,32-14.357,32-32V32
			C469.333,14.357,454.976,0,437.333,0z"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
      </svg>
    </div>
    <h4 class="song-title">
      {{songTitle}}
    </h4>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      required: true
    },
    songUrl: {
      type: String,
      required: true
    },
    songTitle: {
      type: String,
      required: true
    },
    coverUrl: {
      type: String,
      default: null
    },
    playingMini: {
      type: Number
    }
  },
  data: function () {
    return {
      loaded: false,
      playing: false,
      /* */
      cssCover: {
        backgroundImage: null
      }
    }
  },
  watch: {
    coverUrl: function (value) {
      if (value !== null) {
          this.cssCover.backgroundImage = `url(${require('@/assets/images/songs/' + this.coverUrl)})`;
      }
    },
    playingMini: function (val) {
      if (val != this.index) {
        this.$refs.player.pause();
        this.playing = false;
      }
    }
  },
  methods: {
    playClick() {
      this.$refs.player.load();
      if (this.playing) {
        this.$refs.player.pause();
      }
      else {
        this.$refs.player.play();
        this.$emit('playMini', this.index);
      }
      this.playing = !this.playing;
    }
  },
  mounted(){
    /* CSS IMAGE */
    if (this.coverUrl !== null) {
      this.cssCover.backgroundImage = `url(${require('@/assets/images/songs/' + this.coverUrl)})`;
    }

    /* PLAYER INIT */
    var audio=this.$refs.player;
    audio.addEventListener(
      "canplay",
      function() {
        this.loaded=true;
      }.bind(this)
    );
  }
}
</script>

<style scoped>
.player-container {
  position: relative;
  height: 250px;
  width: 250px;
  background-color: #D9AFD9;
  background-image: linear-gradient(127deg, #D9AFD9 0%, #97D9E1 100%);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 250px 250px;
  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.5);
}

.audio-icon {
  cursor: pointer;
  fill: #f7f7f7;
  transition: fill 0.2s ease-in-out, transform 0.2s ease-in-out;
}

.audio-icon:hover {
  fill: #b8ecee;
  transform: scale(1.1);
  transition: fill 0.2s ease-in-out, transform 0.2s ease-in-out;
}

.play-button {
  position: absolute;
  top: 107px;
  left: 107px;
}

.pause-button {
  position: absolute;
  top: 107px;
  left: 107px;
}

.song-title {
  margin: 10px 0px;
  color: #f7f7f7;
  font-size: 20px;
  max-width: 250px;
  white-space: normal;
}

@media (max-width: 1200px){
}

@media (max-width: 1024px){
  .player-container {
    height: 190px;
    width: 190px;  
    background-size: 190px 190px;
  }

  .play-button {
    top: 80px;
    left: 80px;
    width: 30px;
    height: 30px;
  }
}

@media (max-width: 768px){
  .song-player-mini {
    margin-bottom: 50px;
  }
}

</style>