<template>
  <div id="app">
    <div class="page-container flex-container-column">
      <TheTopHeader/>
      <div class="main-view">
        <router-view/>
      </div>
      <TheFooter/>
    </div>
  </div>
</template>

<script>
import TheTopHeader from './components/TheTopHeader'
import TheFooter from './components/TheFooter'

export default {
  name: 'App',
  components: {
    TheTopHeader,
    TheFooter
  }
}
</script>

<style>
@import './assets/styles/global-stylesheet.css';
</style>
