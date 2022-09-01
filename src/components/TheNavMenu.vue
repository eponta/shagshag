<template>
  <div class="the-nav-menu flex-container-row">
    <font-awesome-icon :icon="['fas', 'caret-down']" size="2x" class="burger-button" v-on:click="clickBurgerMenu"/>
    <div class="nav-menu-container flex-container-row">
      <div class="nav-link-container" v-on:click="bBurgerMenuOpen = false">
        <router-link to="/" >ACCUEIL</router-link>
      </div>
      <!--
      <div class="nav-link-container">
        <router-link to="/theband">CREW</router-link>
      </div>
      -->
      <div class="nav-link-container" v-on:click="bBurgerMenuOpen = false">
        <router-link to="/music">CHANSONS</router-link>
      </div>
      <div class="nav-link-container" v-on:click="bBurgerMenuOpen = false">
        <router-link to="/quotes">QUOTES</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheNavMenu',
  data: function() {
    return {
      bBurgerMenuOpen: false
    }
  },
  watch: {
    bBurgerMenuOpen: function (isOpen) {
        let menu = this.$el.querySelector(".nav-menu-container");
      if (isOpen) {
        menu.style.opacity = 1;
        menu.style.visibility = 'visible';
      }
      else {
        menu.style.opacity = 0;
        setTimeout(() => {
          menu.style.visibility = 'hidden';
        }, 500);
      }
    }
  },
  methods: {
    clickBurgerMenu() {
      this.bBurgerMenuOpen = !this.bBurgerMenuOpen;
    }
  }
}
</script>

<style scoped>
.the-nav-menu {
  /* COLORS */
  --link-color-dark: #2b554c;
  --link-color-light: #ffffff;
  --uscore-color-dark: #2b554c;
  --uscore-color-light: #85c5b7;
}

.the-nav-menu .nav-link-container {
    padding: 10px 20px;
}

.burger-button {
  display: none;
}

.the-nav-menu a {
    position: relative;
    display: inline-block;
    font-size: 16px;
    color: black;
    text-decoration: none;
    transition: 0.2s;
}

.the-nav-menu a::before {
  content: '';
  position: absolute;
  height: 1px;
  width: 0;
  bottom: 0;
  left: 0;
  background-color: var(--uscore-color-dark);
  visibility: hidden;
  transition: all 0.3s ease-in-out;
}

.the-nav-menu a:hover::before {
  width: 100%;
  visibility: visible;
  transition: all 0.5s ease-in-out;
}

.nav-menu-container {
  visibility: visible;
  opacity: 1;
}

.nav-menu-container > .nav-link-container > .router-link-exact-active::before {
  content: '';
  position: absolute;
  height: 1px;
  width: 100%;
  bottom: 0;
  left: 0;
  visibility: visible;
  background-color: var(--link-color-dark);
}

@media (max-width: 1200px){
  .nav-menu-container {
    visibility: visible;
    opacity: 1;
  }

  .the-nav-menu {
    margin-right: 20px;
  }

  .the-nav-menu .nav-link-container {
    padding: 10px 15px;
  }

  .the-nav-menu a{
    font-size: 14px;
  }

  .site-title-gif-end {
    height: 43px;
    left: 252px;
  }
}

@media (max-width: 1024px){
  .nav-menu-container {
    visibility: visible;
    opacity: 1;
  }

  .the-nav-menu a {
    color: var(--link-color-light);
    text-shadow: 0px 0px 1px black;
  }

  .nav-menu-container > .nav-link-container > .router-link-exact-active::before {
    background-color: var(--uscore-color-light);
  }
}

@media (max-width: 768px){
  .nav-menu-container {
    visibility: hidden;
    position: fixed;
    left: 0;
    right: 0;
    top: 41px;
    flex-direction: column;
    background-color: #f7f7f7ee;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.4s;
  }

  .router-link-exact-active {
    background-color: rgba(216, 191, 216, 0.25);
  }

  .the-nav-menu .nav-link-container {
    padding: 0;
    border-bottom: 1px solid rgb(184, 184, 184, 0.65);
  }

  .nav-link-container:active {
    background: rgba(216, 191, 216, 0.25);
  }

  .the-nav-menu a {
    padding: 10px 15px;
    height: 100%;
    width: 100%;
    color: var(--link-color-dark);
    text-shadow: none;
  }

  .the-nav-menu a::before {
    content: none;
  }

  .nav-menu-container > .nav-link-container > .router-link-exact-active::before {
    content: none;
  }

  .burger-button {
    display: block;
    color: #f7f7f7;
  }
}
</style>