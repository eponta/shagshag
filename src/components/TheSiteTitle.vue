<template>
  <div class="the-site-title flex-1 flex-container-row justify-start align-center pos-relative full-height">
    <a href="/shagshag" class="main-title">SHAG SHAG</a>
    <img src="../assets/gifs/16bit-rocker.gif" alt="Shake dat' bro!" class="site-title-gif-mid">
    <img src="../assets/gifs/8bit-rocker.gif" alt="Alright dude!" class="site-title-gif-end">
  </div>
</template>

<script>
export default {
  name: 'TheSiteTitle'
}
</script>

<style scoped>
.the-site-title {
  overflow: hidden;
}

.main-title {
  /* font-family: "Barcade"; */
  font-family: "amazonic";
  font-size: 65px;
  line-height: 65px;
  padding-left: 12px;
  padding-top: 13px;
  white-space: nowrap;
  color: indigo;
  text-decoration: none!important;
}

.site-title-gif-mid {
  position: absolute;
  left: 300px;
  bottom: 3px;
  height: 60px;
  transform: scaleX(-1);
}

.site-title-gif-end {
  position: absolute;
  height: 55px;
  left: 355px;
  bottom: 3px;
}

@media (max-width: 1200px){
  .main-title {
    font-size: 54px;
    padding-top: 10px;
  }

  .site-title-gif-mid {
    height: 40px;
    left: 250px;
  }

  .site-title-gif-end {
    height: 43px;
    left: 290px;
  }
}

@media (max-width: 1024px){
  .main-title {
    font-size: 48px;
    padding-top: 9px;
    padding-left: 10px;
  }

  .site-title-gif-mid {
    height: 40px;
    left: 228px;
  }

  .site-title-gif-end {
    height: 43px;
    left: 265px;
  }
}

@media (max-width: 767px){
  .main-title {
    font-size: 36px;
    padding-left: 8px;
    padding-top: 8px;
  }

  .site-title-gif-mid {
    height: 30px;
    left: 164px;
  }

  .site-title-gif-end {
    height: 30px;
    left: 191px;
  }
}
</style>