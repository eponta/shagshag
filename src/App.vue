<template>
  <div id="app" :style="cssVars">
    <div class="page-container flex-container-column">
      <TheTopHeader/>
      <div class="main-view">
        <transition
          name="fade"
          mode="out-in"
        >
          <router-view/>
        </transition>
      </div>
      <TheFooter/>
    </div>
  </div>
</template>

<script>
import TheTopHeader from './components/TheTopHeader'
import TheFooter from './components/TheFooter'

import cssVariables from './assets/styles/cssVariables'

export default {
  name: 'App',
  components: {
    TheTopHeader,
    TheFooter
  },
  computed: {
    cssVars() {
      return cssVariables;
    }
  }
}
</script>

<style>
@import './assets/styles/global-stylesheet.css';


.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
