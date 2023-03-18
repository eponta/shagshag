<template>
  <div class="video-player-ipod ipod-container flex-container-row aling-center justify-center">
    <div class="ipod flex-container-column align-center space-between">
      <div class="ipod-screen">
        <div class="ipod-iframe-container" :class="iPodOn ? 'ipod-on' : 'ipod-off'">
          <iframe width="540" 
                  height="480" 
                  :src="youtubeSrc" 
                  title="YouTube video player" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen
                  :style="{display: iPodOn ? 'inline' : 'none'}"
          >
          </iframe>
        </div>
      </div>
      <div class="ipod-controls">
        <div class="ipod-controls-ilot"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoPlayeriPod',
  data: function () {
    return {
      iPodOn: true,
    }
  },
  props: {
    youtubeSrc: {
      type: String,
      required: true
    },
  },
  methods: {
    powerTv() {
      this.iPodOn = !this.iPodOn;
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
}

@media (min-width: 768px){
  .video-player-ipod {
    display: none;
  }
}
</style>