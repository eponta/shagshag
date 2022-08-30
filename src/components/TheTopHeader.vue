<template>
  <div class="the-top-header flex-container-row align-center">
    <div class="flex-1 flex-container-row justify-start align-center pos-relative full-height">
      <TheSiteTitle/>
    </div>
    <div class="flex-1 flex-container-row justify-center align-center nav-menu-container">
      <TheNavMenu/>
    </div>
    <div class="flex-1 flex-container-row justify-flex-end align-center s-links-container">
      <TheSocialLinks/>
    </div>
  </div>
</template>

<script>
import TheSiteTitle from './TheSiteTitle'
import TheNavMenu from './TheNavMenu'
import TheSocialLinks from './TheSocialLinks'

export default {
  name: 'TheTopHeader',
  components: {
    TheSiteTitle,
    TheNavMenu,
    TheSocialLinks
  }
}
</script>

<style scoped>
.the-top-header {
  position: sticky;
  z-index: 999999;
  top: 0;
  left: 0;
  height: 70px;
  background: linear-gradient(110deg, rgba(255,255,255,1) 0%,rgba(0,212,255,1) 54%, rgba(43,85,76,1) 75%, rgba(2,0,36,1) 90%);
  background-color: #5eb4a2;
  box-shadow: 0px 1px 5px rgba(0,0,0,0.5);
  border-bottom: solid 1px #2b554c;
}

@media (max-width: 1200px){
}

@media (max-width: 1024px){
  .the-top-header {
    min-height: 55px;
  }

  .s-links-container {
    position: fixed;
    top: 55px;
    right: 0;
  }

  .nav-menu-container {
    justify-content: flex-end;
  }
}

@media (max-width: 768px){
  .the-top-header {
    min-height: 40px;
  }  

  .s-links-container {
    top: 40px;
  }
}
</style>