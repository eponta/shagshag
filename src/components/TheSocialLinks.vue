<template>
  <div class="the-social-links flex-1 flex-container-row justify-flex-end align-center">
    <div class="slink-cnt spotify-cnt">
      <a href="https://open.spotify.com/artist/5J0xJnBTbPsdmwhZQ2pC8t" class="social-link slink-square spotify-slink"></a>
    </div>
    <div class="slink-cnt deezer-cnt">
      <a href="https://www.deezer.com/fr/artist/122741122" class="social-link slink-square deezer-slink"></a>
    </div>
    <div class="slink-cnt youtube-cnt">
      <a href="https://www.youtube.com/channel/UCzv_NxCVVsk-nHDg5zs1IOQ" class="social-link slink-square youtube-slink"></a>
    </div>
    <div class="slink-cnt instagram-cnt">
      <a href="https://www.instagram.com/shagshagmusique/" class="social-link slink-square instagram-slink"></a>
    </div>
    <div class="slink-cnt facebook-cnt">
      <a href="https://www.facebook.com/shagshagmusique/" class="social-link slink-square facebook-slink"></a>
    </div>
    <div class="slink-cnt soundcloud-cnt">
      <a href="https://soundcloud.com/shag-shag-331680615" class="social-link slink-square soundcloud-slink"></a>
    </div>
    <!-- <div class="slink-container">
      <a href="https://www.deezer.com/fr/artist/122741122" class="social-link slink-square deezer-slink deezer-svg-color"><font-awesome-icon :icon="['fab', 'deezer']" size="lg" /></a>
    </div>
    <div class="slink-container">
      <a href="https://www.youtube.com/channel/UCzv_NxCVVsk-nHDg5zs1IOQ" class="social-link yt-slink"><font-awesome-icon :icon="['fab', 'youtube']" size="lg" /></a>
    </div>
    <div class="slink-container opacity-grad-anim-ig">
      <a href="https://www.instagram.com/shagshagmusique/" class="social-link slink-square ig-slink"><font-awesome-icon :icon="['fab', 'instagram']" size="lg" /></a>
    </div>
    <div class="slink-container">
      <a href="https://www.facebook.com/shagshagmusique/" class="social-link slink-square fb-slink"><font-awesome-icon :icon="['fab', 'facebook']" size="lg" /></a>
    </div>
    <div class="slink-container">
      <a href="https://soundcloud.com/shag-shag-331680615" class="social-link slink-rect soundcloud-slink"><font-awesome-icon :icon="['fab', 'soundcloud']" size="lg" /></a>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'TheSocialLinks'
}
</script>

<style scoped>
.the-social-links {
  padding-right: 20px;

  --icon-size: 26px;
  --icon-size-sm: 22px;
  --slink-transition-duration: 0.35s;
  --spotify-back-color: #1DB954;
  /* --init-back-color: #e9e9e9; */
  --facebook-back-color: #089be5;
  --instagram-back-color: #e4405f;
  --deezer-back-color: linear-gradient(45deg, #ff0000, #ffed00, #ff0092, #c2ff00, #00c7f2, #c1f1fc);
  --youtube-back-color: #ff0000;
  --soundcloud-back-color: #ff7700;
}

.slink-cnt {
  width: 38px;
  height: 38px;
  margin: 0px 5px;
}

.social-link {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  transition: all ease-in-out var(--slink-transition-duration);
  box-shadow: 0px 0px 10px rgb(255, 255, 255, 0.1);
}

.spotify-slink {
  background: white;
  background-image: url("../assets/icons/spotify-green.png");
  background-size: var(--icon-size);
  background-repeat: no-repeat;
  background-position: center;
}
.spotify-slink:hover {
  background: var(--spotify-back-color);
  background-image: url("../assets/icons/spotify-blk.png");
  background-size: var(--icon-size);
  background-repeat: no-repeat;
  background-position: center;
}

.deezer-slink {
  background: white;
  background-image: url("../assets/icons/deezer-blk.png");
  background-size: var(--icon-size);
  background-repeat: no-repeat;
  background-position: center;
}
.deezer-slink:hover {
  background: rgb(0, 0, 0);
  background-image: url("../assets/icons/deezer-color.png");
  background-size: var(--icon-size);
  background-repeat: no-repeat;
  background-position: center;
}

.youtube-slink {
  background: white;
  background-image: url("../assets/icons/youtube-red.png");
  background-size: var(--icon-size);
  background-repeat: no-repeat;
  background-position: center;
}
.youtube-slink:hover {
  background: var(--youtube-back-color);
  background-image: url("../assets/icons/youtube-white.png");
  background-size: var(--icon-size);
  background-repeat: no-repeat;
  background-position: center;
}

.instagram-slink {
  background: white;
  background-image: url("../assets/icons/instagram-pink.png");
  background-size: calc(var(--icon-size) - 2px);
  background-repeat: no-repeat;
  background-position: center;
}
.instagram-slink:hover {
  background: var(--instagram-back-color);
  background-image: url("../assets/icons/instagram-white.png");
  background-size: calc(var(--icon-size) - 2px);
  background-repeat: no-repeat;
  background-position: center;
}

.facebook-slink {
  background: white;
  background-image: url("../assets/icons/facebook-blue.png");
  background-size: var(--icon-size);
  background-repeat: no-repeat;
  background-position: center;
}
.facebook-slink:hover {
  background: var(--facebook-back-color);
  background-image: url("../assets/icons/facebook-white.png");
  background-size: var(--icon-size);
  background-repeat: no-repeat;
  background-position: center;
}

.soundcloud-slink {
  background: white;
  background-image: url("../assets/icons/soundcloud-orange.png");
  background-size: calc(var(--icon-size) + 1px);
  background-repeat: no-repeat;
  background-position: center;
}
.soundcloud-slink:hover {
  background: var(--soundcloud-back-color);
  background-image: url("../assets/icons/soundcloud-white.png");
  background-size: var(--icon-size);
  background-repeat: no-repeat;
  background-position: center;
}

.social-link:hover {
  transition: all ease-in-out var(--slink-transition-duration);
  box-shadow: 0px 0px 10px rgb(255, 255, 255, 0.4);
}

@media (max-width: 1200px){
  .slink-cnt {
    width: 34px;
    height: 34px;
    margin: 0px 4px;
  }

  .spotify-slink {
    background-size: var(--icon-size-sm);
  }

  .deezer-slink {
    background-size: var(--icon-size-sm);
  }

  .youtube-slink {
    background-size: var(--icon-size-sm);
  }
  
  .instagram-slink {
    background-size: calc(var(--icon-size-sm) - 2px);
  }

  .facebook-slink {
    background-size: var(--icon-size-sm);
  }

  .soundcloud-slink {
    background-size: calc(var(--icon-size-sm) + 1px);
  }
}

@media (max-width: 1024px){
  .the-social-links {
    padding-right: 0;
    padding: 5px 5px;
    margin: 10px 10px;
    background: #f7f7f770;
    z-index: 1;
    box-shadow: 0px 0px 10px #f7f7f7d8;
    border-radius: 20px;
  }

  .slink-cnt {
    width: 34px;
    height: 34px;
    margin: 0px 4px;
  } 

  .spotify-slink {
    background: var(--spotify-back-color);
    background-image: url("../assets/icons/spotify-blk.png");
    background-size: var(--icon-size-sm);
    background-repeat: no-repeat;
    background-position: center;
  }

  .deezer-slink {
    background: rgb(0, 0, 0);
    background-image: url("../assets/icons/deezer-color.png");
    background-size: var(--icon-size-sm);
    background-repeat: no-repeat;
    background-position: center;
  }

  .youtube-slink {
    background: var(--youtube-back-color);
    background-image: url("../assets/icons/youtube-white.png");
    background-size: var(--icon-size-sm);
    background-repeat: no-repeat;
    background-position: center;
  }
  
  .instagram-slink {
    background: var(--instagram-back-color);
    background-image: url("../assets/icons/instagram-white.png");
    background-size: calc(var(--icon-size-sm) - 2px);
    background-repeat: no-repeat;
    background-position: center;
  }

  .facebook-slink {
    background: var(--facebook-back-color);
    background-image: url("../assets/icons/facebook-white.png");
    background-size: var(--icon-size-sm);
    background-repeat: no-repeat;
    background-position: center;
  }

  .soundcloud-slink {
    background: var(--soundcloud-back-color);
    background-image: url("../assets/icons/soundcloud-white.png");
    background-size: calc(var(--icon-size-sm) + 1px);
    background-repeat: no-repeat;
    background-position: center;
  }
}

@media (max-width: 767px){
}
</style>