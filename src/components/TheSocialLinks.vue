<template>
  <div class="the-social-links flex-1 flex-container-row justify-flex-end align-center">
    <svg width="0" height="0">
      <linearGradient id="rg" x1="0" y1="0" x2="1" y2="-0.2">
        <stop stop-color="#ff9d38" offset="0.2" />
        <stop stop-color="#cb17bf" offset="0.45" />
        <stop stop-color="#1c44f7" offset="0.7" />
        <stop stop-color="#21df6b" offset="0.88" />
      </linearGradient>
    </svg>
    <div class="slink-container spotify-blk">
      <a href="https://open.spotify.com/artist/5J0xJnBTbPsdmwhZQ2pC8t" class="social-link slink-square spotify-slink"><font-awesome-icon :icon="['fab', 'spotify']" size="lg" /></a>
    </div>
    <div class="slink-container">
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
    </div>
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
  /* ICON COLORS */
  --slink-transition-duration: 0.35s;
  /*backgrds*/
  --init-back-color: #e9e9e9;
  --fb-back-color: #3b5999;
  --ig-back-color: #e4405f;
  --spotify-back-color: #1DB954;
  --deezer-back-color: #ff00ff;
  --yt-back-color: #ff0000;
  --soundcloud-back-color: #ff7700;
  /*fonts*/
  --fb-font-color: #ffffff;
  --ig-font-color: #ffffff;
  --spotify-font-color: #191414;
  --deezer-font-color: black;
  --yt-font-color: #ffffff;
  --soundcloud-font-color: #ffffff;
}

.opacity-grad-anim-ig {
  position: relative;
}

.opacity-grad-anim-ig a::before {
  content: '';
  z-index: -100;
  position: absolute;
  top: -4px;
  bottom: -5px;
  right: 8px;
  left: 8px;
  border-radius: 100%;
  opacity: 0;
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
  transition: ease-in-out var(--slink-transition-duration);
}

.opacity-grad-anim-ig a:hover::before {
  opacity: 1;
  transition: ease-in-out var(--slink-transition-duration);
}

.opacity-grad-anim-deezer {
  position: relative;
}

.opacity-grad-anim-deezer a::before {
  content: '';
  z-index: -100;
  position: absolute;
  top: -5px;
  bottom: -5px;
  right: 7px;
  left: 7px;
  border-radius: 100%;
  opacity: 0;
  background: linear-gradient(45deg, #ff0000, #ffed00, #ff0092, #c2ff00, #00c7f2, #c1f1fc);
  transition: ease-in-out var(--slink-transition-duration);
}

.opacity-grad-anim-deezer a:hover::before {
  opacity: 1;
  transition: ease-in-out var(--slink-transition-duration);
}

.spotify-icon {
  transform: scale(1.1);
}

.spotify-blk {
  position: relative;
}

.spotify-blk a::after {
  content: '';
  z-index: -100;
  position: absolute;
  visibility: visible;
  top: -4px;
  bottom: -5px;
  right: 8px;
  left: 8px;
  border-radius: 100%;
  opacity: 1;
  background-color: var(--init-back-color);
  transition: ease-in-out var(--slink-transition-duration);
}

.spotify-blk a::before {
  content: '';
  z-index: -50;
  position: absolute;
  top: 3px;
  bottom: 4px;
  right: 15px;
  left: 15px;
  border-radius: 100%;
  opacity: 1;
  background-color: black;
  transition: ease-in-out var(--slink-transition-duration);
}

.spotify-blk a:hover::before {
  opacity: 0;
  transition: ease-in-out var(--slink-transition-duration);
}

.social-link {
  border-radius: 100%;
  transition: all ease-in-out var(--slink-transition-duration);
  box-shadow: 0px 0px 10px rgb(255, 255, 255, 0.1);
  margin: 0px 7px;
}

.social-link:hover {
  transition: all ease-in-out var(--slink-transition-duration);
  box-shadow: 0px 0px 10px rgb(255, 255, 255, 0.4);
}

.social-link svg {
  z-index: 100;
}

.fb-slink {
  color: var(--fb-back-color);
  background-color: var(--init-back-color);
  padding: 5px 6px;
}

.fb-slink:hover {
  color: var(--fb-font-color);
  background-color: var(--fb-back-color);
  transition: all ease-in-out var(--slink-transition-duration);
}

.yt-slink {
  color: var(--yt-back-color);
  background-color: var(--init-back-color);
  padding: 5px 4px;
}

.yt-slink:hover {
  color: var(--yt-font-color);
  background-color: var(--yt-back-color);
  transition: all ease-in-out var(--slink-transition-duration);
}

.deezer-slink svg * {
  fill: #30234A;
}

.deezer-slink:hover svg * {
  fill: url(#rg);
}

.deezer-slink {
  background-color: var(--init-back-color);
  padding: 5px 5px;
}

.deezer-slink svg {
  transform: scale(0.9);
}

.deezer-slink:hover {
  color: var(--deezer-font-color);
  background-color: black;
  transition: all ease-in-out var(--slink-transition-duration);
}

.ig-slink {
  color: var(--ig-back-color);
  background-color: var(--init-back-color);
  padding: 5px 7px;
}

.ig-slink:hover {
  color: var(--ig-font-color);
  background-color: transparent;
  transition: all ease-in-out var(--slink-transition-duration);
}

.spotify-slink {
  z-index: -100;
  color: var(--spotify-back-color);
  background-color: transparent;
  padding: 5px 6px;
}

.spotify-slink:hover {
  color: var(--spotify-font-color);
  background-color: var(--spotify-back-color);
  transition: all ease-in-out var(--slink-transition-duration);
}

.soundcloud-slink {
  color: var(--soundcloud-back-color);
  background-color: var(--init-back-color);
  padding: 5px 3px;
}

.soundcloud-slink:hover {
  color: var(--soundcloud-font-color);
  background-color: var(--soundcloud-back-color);
  transition: all ease-in-out var(--slink-transition-duration);
}

@media (max-width: 1200px){
}

@media (max-width: 1024px){
  .the-social-links {
    padding-right: 0;
    padding: 10px 0px;
    margin: 10px 10px;
    background: #f7f7f770;
    z-index: 1;
    box-shadow: 0px 0px 10px #f7f7f7d8;
    border-radius: 20px;
  }
  
  .social-link {
    margin: 0px 5px;
  }

  .spotify-blk a::after {
    position: absolute;
    visibility: hidden;
    right: 6px;
    left: 5px;
  }

  .spotify-blk a::before {
    right: 14px;
    left: 14px;
  }

  .fb-slink {
    color: var(--fb-font-color);
    background-color: var(--fb-back-color);
    padding: 6px 5px 5px 6px;
  }

  .yt-slink {
    color: var(--yt-font-color);
    background-color: var(--yt-back-color);
    padding: 6px 4px 5px 4px;
  }

  .deezer-slink {
    color: var(--deezer-font-color);
    background-color: black;
    padding: 6px 4px 5px 4px;
  }

  .deezer-slink svg * {
    fill: url(#rg);
  }

  .opacity-grad-anim-deezer a::before {
    opacity: 1;
  }

  .ig-slink {
    color: var(--ig-font-color);
    background-color: transparent;
    padding: 5px 9px;
  }

  .opacity-grad-anim-ig a::before {
    opacity: 1;
    top: -5px;
    bottom: -4px;
  }

  .spotify-slink {
    color: var(--spotify-font-color);
    background-color: var(--spotify-back-color);
    padding: 6px 5px 5px 5px;
  }

  .soundcloud-slink {
    color: var(--soundcloud-font-color);
    background-color: var(--soundcloud-back-color);
    padding: 6px 3px 5px 3px;
  }
}

@media (max-width: 768px){
}
</style>