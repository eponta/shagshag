<template>
  <div class="the-footer-gif-section">
    <div class="gif-container g-cr1">
      <img src="../assets/gifs/doc-8bit.gif" alt="Nom de Zeus!" height="50px">
      <div class="gif-shadow-line">
      </div>
    </div>
    <div class="gif-container g-cr2">
      <img src="../assets/gifs/marty-8bit.gif" alt="C'est pas le pied..." height="49px">
      <div class="gif-shadow-line">
      </div>
    </div>
    <div class="gif-container g-cg1">
      <img src="../assets/gifs/delorejump.gif" alt="On a pas besoin ...de route" height="50px">
      <div class="gif-shadow-line">
      </div>
    </div>
    <div class="gif-container g-red">
      <img src="../assets/gifs/is-red-sus.gif" alt="Was not me, I swear" height="54px">        
    </div>
    <div class="gif-container g-brown">
      <img src="../assets/gifs/brown-vent.gif" alt="Shhhh" height="40px">        
    </div>
    <div class="gif-container g-black">
      <img src="../assets/gifs/black-dead.gif" alt="......" height="38px">    
      <div class="gif-shadow-black">
      </div>    
    </div>
    <div class="gif-container g-black-gh">
      <img src="../assets/gifs/black-ghost.gif" alt="*** booooo ***" height="40px">        
    </div>
    <div class="gif-container g-purple">
      <img src="../assets/gifs/purple-no.gif" alt="It's not me!" height="38px">    
      <div class="gif-shadow-purple">
      </div>    
    </div>
    <div class="gif-container g-white">
      <img src="../assets/gifs/white-show.gif" alt="I saw him!" height="38px">    
      <div class="gif-shadow-purple">
      </div>    
    </div>
    <div class="gif-container g-cyan">
      <img src="../assets/gifs/cyan-ass.gif" alt="Eh eh eh!" height="30px">    
      <div class="gif-shadow-cyan">
      </div>    
    </div>
    <div class="gif-container g-blue">
      <img src="../assets/gifs/blue-yes.gif" alt="Alright!" height="38px">    
      <div class="gif-shadow-purple">
      </div>    
    </div>
    <div class="gif-container g-yellow">
      <img src="../assets/gifs/yellow-swing.gif" alt="Shake shake shake!" height="38px">    
      <div class="gif-shadow-purple">
      </div>    
    </div>
    <div class="gif-container g-pink">
      <img src="../assets/gifs/pink-dance.gif" alt="Woo woo woo!" height="38px">    
      <div class="gif-shadow-pink">
      </div>    
    </div>
    <div class="gif-container g-orange">
      <img src="../assets/gifs/orange-grow.gif" alt="Up, down, up, down" height="42px">    
      <div class="gif-shadow-orange">
      </div>    
    </div>
  </div>
  
</template>

<script>
export default {

}
</script>

<style scoped>
.the-footer-gif-section {
  position: relative;
  height: 10px;
}

.gif-container {
  position: absolute;
  bottom: 0;
}

.gif-shadow-line {
  position: relative;
  border: 1px solid transparent;
}
.gif-shadow-line::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin-bottom: -1px;
  background: linear-gradient(90deg, rgba(0,0,0,0) 10%, rgba(255,255,255,0.25) 50%, rgba(0,0,0,0) 90%);
}

.gif-shadow-black {
  position: relative;
}
.gif-shadow-black::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: -6px -2px -4px -1px;
  background: radial-gradient(rgba(255,255,255,0.33) 50%, rgba(0,0,0,0) 50%);
  z-index: -1;
}

.gif-shadow-purple {
  position: relative;
}
.gif-shadow-purple::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  margin: -6px -2px -4px 2px;
  background: radial-gradient(rgba(255,255,255,0.33) 50%, rgba(0,0,0,0) 50%);
}

.gif-shadow-cyan {
  position: relative;
}
.gif-shadow-cyan::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  margin: -4px -1px -4px -1px;
  background: radial-gradient(rgba(255,255,255,0.33) 50%, rgba(0,0,0,0) 50%);
}

.gif-shadow-pink {
  position: relative;
}
.gif-shadow-pink::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  margin: -4px -5px -4px -3px;
  background: radial-gradient(rgba(255,255,255,0.33) 50%, rgba(0,0,0,0) 50%);
}

.gif-shadow-orange {
  position: relative;
}
.gif-shadow-orange::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  margin: -4px 0px -4px 3px;
  background: radial-gradient(rgba(255,255,255,0.33) 50%, rgba(0,0,0,0) 50%);
}

.g-cg1 {
  bottom: 5px;
  left: calc(50% - 176px);
}

.g-cr1 {
  bottom:4px;
  right: calc(50% - 145px);
}

.g-cr2 {
  bottom: 5px;
  right: calc(50% - 105px);
}

.g-red {
  bottom: -1px;
  right: 187px;
  z-index: 22;
}

.g-brown {
  bottom: 11px;
  right: 0px;
  transform: scaleX(-1);
  z-index: 20;
}

.g-black {
  bottom: 10px;
  right: 110px;
  z-index: 20;
}

.g-black-gh {
  bottom: 30px;
  right: 90px;
  z-index: 30;
  transform: scaleX(-1);
  opacity: 0.8  ;
}

.g-purple {
  bottom: 10px;
  right: 135px;
  z-index: 21;
  transform: scaleX(-1);
}

.g-white {
  bottom: 10px;
  right: 175px;
  z-index: 20;
}

.g-cyan {
  bottom: 25px;
  right: 40px;
  z-index: 10;
  opacity: 0.85;
}

.g-blue {
  bottom: 10px;
  right: 56px;
  z-index: 20;
  transform: scaleX(-1);
}

.g-yellow {
  bottom: 10px;
  right: 295px;
  z-index: 20;
  transform: scaleX(-1);
}

.g-pink {
  bottom: 10px;
  right: 355px;
  z-index: 20;
}

.g-orange {
  bottom: 0px;
  right: 330px;
  z-index: 30;
}

@media (max-width: 1200px){
  .g-yellow {
    display: none;
  }

  .g-pink {
    display: none;
  }

  .g-orange {
    display: none;
  }
}

@media (max-width: 1024px){
  .g-red {
    display: none;
  }
}

@media (max-width: 768px){
  .g-cg1 {
    left: calc(50% - 150px);
  }

  .g-cg1 img {
    height: 40px;
  }

  .g-cr1 {
    right: calc(50% - 135px);
  }

  .g-cr1 img {
    height: 40px;
  }

  .g-cr2 {
    right: calc(50% - 95px);
  }

  .g-cr2 img {
    height: 39px;
  }

  .g-white {
    display: none;
  }

  .g-purple {
    display: none;
  }

  .g-black {
    display: none;
  }
  .g-black-gh {
    display: none;
  }

  .g-cyan {
    display: none;
  }

  .g-brown {
    display: none;
  }  

  .g-blue {
    display: none;
  }
}
</style>