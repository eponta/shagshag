<template>
  <div class="home single-view">
    <div class="section-image section-overlay-sunb-blk">
      <img src="../assets/images/groupe-presentation.jpeg">
    </div>
    <div class="section-video flex-container-row">
      <div class="video-container flex-1 align-center justify-center">
        <iframe width="854" 
                height="480" 
                src="https://www.youtube.com/embed/videoseries?list=PL589rzD4Hvmp8dqKaI4z285yYTqGrreTi&autoplay=1&mute=1" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
        </iframe>      
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: function () {
    return {
      videoId: 'GkENaIj1L0c'
    }
  },
  methods: {
    onCued() {
      console.log("\n\ncued");
      this.getState();
      this.player.playVideo();
      console.log("play")
      this.getState();
    },
    async onReady() {
      let cnt = 0;
      console.log("\n\nfile d'att");
      let rep = await this.getState();
      if (rep === 5) {
        console.log(cnt)
      }
      this.player.playVideo();
      this.getState();
    },
    async getState() {
      let rep = this.player.getPlayerState();
      console.log(rep);
      return rep;
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    }
  }
}
</script>

<style scoped>
.home {
  margin-bottom: 40px;
}

.section-video {
  background-color: black;
}

.video-container {
  padding: 20px;
}

.video-container h2 {
  color: white;
  margin-bottom: 20px;
}

.video-container iframe {
  max-width: 100%;
}

@media (max-width: 1200px){
}

@media (max-width: 1024px){
  .section-video {
    flex-direction: column;
  }
}

@media (max-width: 768px){
}
</style>