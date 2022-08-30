<template>
  <div class="home single-view">
    <div class="section-presentation">
      <div class="bg-presentaion-cnt section-overlay-sunb-blk">
        <img src="../assets/images/groupe-presentation.jpeg" width="100%">
      </div>
      <img 
        class="shadow-img shadow-clo" 
        src="../assets/images/shadow/cloclo-blur-crop.png" 
        v-on:click="selectDude('clo')"
        v-on:mouseover="hoverDude('clo')"
        v-on:mouseleave="hoverDude(null)"
        v-bind:class="{'active-dude': isCloActive, 'selected-dude': selectedDude === 'clo', 'hovered-dude': hoveredDude === 'clo'}"
      >
      <img 
        class="shadow-img shadow-bob" 
        src="../assets/images/shadow/bobby-blur-crop.png" 
        v-on:click="selectDude('bob')"
        v-on:mouseover="hoverDude('bob')"
        v-on:mouseleave="hoverDude(null)"
        v-bind:class="{'active-dude': isBobActive, 'selected-dude': selectedDude === 'bob', 'hovered-dude': hoveredDude === 'bob'}"
      >
      <img 
        class="shadow-img shadow-bud" 
        src="../assets/images/shadow/budhi-blur-crop.png" 
        v-on:click="selectDude('bud')"
        v-on:mouseover="hoverDude('bud')"
        v-on:mouseleave="hoverDude(null)"
        v-bind:class="{'active-dude': isBudActive, 'selected-dude': selectedDude === 'bud', 'hovered-dude': hoveredDude === 'bud'}"
      >
      <div class="presentation-txt-cnt text-clo">
        <div class="presentation-hd">
          <h2>CLOCLO</h2>
          <img class="tete-img" src="../assets/images/tetes/tete-clo.png">
        </div>
        <div class="presentation-content">
          <p>
            Lui c'est Claude. Le mec est pacifiste. 
            <br><br>
            Il recueille les sans-abris dans la grande de ses parents défunts, un grand généreux. 
            <br><br>
            Mais n'allez pas lui chercher des noises. On dit qu'un jour il a abattu un bœuf à mains nues. Les bouchers n'ont rien pu sauver...
            <br><br>
            Un dernier petit conseil, si vous tenez à garder de bonnes relations avec vos voisins, évitez de mettre une cowbell entre les mains de cet homme.
          </p>
          <p class="presentation-else">
            <span class="tal-hd">Talents :</span> chant, clavier, ukulele, cowbell, stand-up paddle, bilboquet, panenka
          </p>
          <img 
            class="presentation-gif" 
            style="margin-top: 5px;" 
            width="100px"
            src="../assets/gifs/luka-goku.gif" 
            alt="Luka Magic"
          >
        </div>
        <img 
          class="presentation-back" 
          src="../assets/icons/back.png" 
          alt="Fermer"
          v-on:click="selectedDude = null"
        >
      </div>
      <div class="presentation-txt-cnt text-bob">
        <div class="presentation-hd">
          <h2>BOBBY</h2>
          <img class="tete-img" src="../assets/images/tetes/tete-bob.png">
        </div>
        <div class="presentation-content">
          <p>
            Bobby, ah ah ah. 
            <br>
            Aaaah Bobby.
            <br><br>
            Rien de drôle, le mec est né dans la campagne moldave un soir de décembre. 
            <br><br>
            Il y a deux ans, il a fait sortir sa femme de prison. Croyez-le ou non, six jours après, elle y est retournée pour chercher un peu de chaleur.
          </p>
          <p class="presentation-else">
            <span class="tal-hd">Talents :</span> chant, basse, guitare, violon, service-volée, white russian, eurostep
          </p>
          <img 
            class="presentation-gif" 
            style="margin-top: 20px;" 
            width="60px"
            src="../assets/gifs/bart-s.gif" 
            alt="Rider du dimanche"
          >
        </div>
        <img 
          class="presentation-back" 
          src="../assets/icons/back.png" 
          alt="Fermer"
          v-on:click="selectedDude = null"
        >
      </div>
      <div class="presentation-txt-cnt text-bud">
        <div class="presentation-hd">
          <h2>BUDHI</h2>
          <img class="tete-img" src="../assets/images/tetes/tete-bud.png">
        </div>
        <div class="presentation-content">
          <p class="presentation-txt">
            Mmmh Budhi... 
            <br><br>
            Sous son apparence de petit prince se cache un grand manipulateur. À trois ans, il a été adopté par un couple de costaricains. On ne les a jamais retrouvés. 
            <br><br>
            Ne vous fiez pas à son air de grand rêveur, ce gars-là finit toujours le travail sans faire de fioriture.
          </p>
          <p class="presentation-else">
            <span class="tal-hd">Talents :</span> chant, guitare, banjo, guimbarde, œuf mollet, catch & shoot
            <br><br>
            <span class="sur-hd">Surnoms :</span> La blatte, la terrasse chauffée
          </p>
          <img 
            class="presentation-gif" 
            style="margin-top: -20px;" 
            width="100px"
            src="../assets/gifs/tarzan-roll.gif" 
            alt="Tarzan Boy"
          >
        </div>
        <img 
          class="presentation-back" 
          src="../assets/icons/back.png" 
          alt="Fermer"
          v-on:click="selectedDude = null"
        >
      </div>
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
      videoId: 'GkENaIj1L0c',
      selectedDude: null,
      hoveredDude: null,
    }
  },
  methods: {
    selectDude(dude) {
      if (this.selectedDude === dude) {
        this.selectedDude = null;
      }
      else {
        this.selectedDude = dude;
      }
    },
    hoverDude(dude) {
      this.hoveredDude = dude;
    }
  },
  computed: {
    isCloActive() {
      return this.hoveredDude === 'clo' || (!this.hoveredDude && this.selectedDude === 'clo') ? true : false;
    },
    isBobActive() {
      return this.hoveredDude === 'bob' || (!this.hoveredDude && this.selectedDude === 'bob') ? true : false;
    },
    isBudActive() {
      return this.hoveredDude === 'bud' || (!this.hoveredDude && this.selectedDude === 'bud') ? true : false;
    },
  }
}
</script>

<style scoped>
.home {
  margin-bottom: 40px;
}

.section-presentation {
  position: relative;
}

.bg-presentaion-cnt {
  width: 100%;
}

.shadow-img {
  position: absolute;

  opacity: 1;
  transition: 0.1s;

  cursor: pointer;

  z-index: 111;
}
.shadow-img.hovered-dude, .shadow-img.selected-dude {
  opacity: 0;
  transition: 0.75s;
}

.shadow-clo {
  bottom: 5.7%;
  left: 19.35%;
  height: 79.8%;
  width: 23.65%;
}

.shadow-bob {
  bottom: 4.2%;
  right: 37.3%;
  height: 74.5%;
  width: 21.4%;
}

.shadow-bud {
  bottom: 3.555556%;
  right: 13.833333%;
  height: 78.1%;
  width: 29%;
}

/*.shadow-clo {
  bottom: 6.444444%;
  left: 19.833333%;
  height: 78.888889;
  width: 22.833333%;
}

.shadow-bob {
  bottom: 4.666667%;
  right: 37.666667%;
  height: 73.777778%;
  width: 20.833333%;
}

.shadow-bud {
  bottom: 3.555556%;
  right: 13.833333%;
  height: 77.555556%;
  width: 29%;
}*/

.presentation-txt-cnt {
  /* position: absolute;
  top: 200px; */
  position: fixed;
  top: calc(10% + 71px);

  display: flex;
  flex-direction: column;
  align-items: stretch;

  opacity: 0;
  left: -325px;
  transition-property: opacity, left, z-index;
  transition-delay: 0.25s, 0.05s, 0.25s;
  transition-duration: 0.1s, 0.15s, 0.15s;

  padding: 20px 20px 20px 25px;
  width: 325px;
  max-height: calc(90% - 71px);
  box-sizing: border-box;

  background-color: #ffffff22;
  background: linear-gradient(  35deg, rgba(255, 255, 255, 0.75) -75%, rgba(255, 255, 255, 0.15)  30%, rgba(255, 255, 255, 0.55) 100%),
              linear-gradient( 135deg, rgba(227, 227, 227, 0.3 )   0%, rgba(226, 226, 226, 0.5 )  55%, rgba(223, 223, 223,  0.3) 100%),
              linear-gradient( -60deg, rgba( 64, 255, 118, 0.3 )   0%, rgba(135, 255, 229, 0.15) 100%                                  ),
              linear-gradient(  50deg, rgba(255, 107, 228, 0.15)   0%, rgba(138,  36, 186, 0.25) 120%                                  );
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  border: 1px solid #ffffff33;

  color: rgb(54, 54, 54);
  text-align: left;
  font-size: 17px;

  overflow: hidden;

  z-index: 101;
}

/* .shadow-clo:hover ~ .text-clo, .shadow-bob:hover ~ .text-bob, .shadow-bud:hover ~ .text-bud {
  opacity: 1;
  left: 0;

  transition-property: opacity, left;
  transition-delay: 0.1s, 0.2s;
  transition-duration: 0.1s, 0.4s;

  z-index: 121;
} */

/*** ACTIVE = SELECTED ***/
.shadow-clo.selected-dude ~ .text-clo, .shadow-bob.selected-dude ~ .text-bob, .shadow-bud.selected-dude ~ .text-bud {
  opacity: 1;
  left: 0;

  transition-property: opacity, left;
  transition-delay: 0.1s, 0.2s;
  transition-duration: 0.1s, 0.4s;

  z-index: 121;
}

/*** ACTIVE = HOVERED ( || SELECTED) ***/
/*.shadow-clo.active-dude ~ .text-clo, .shadow-bob.active-dude ~ .text-bob, .shadow-bud.active-dude ~ .text-bud {
  opacity: 1;
  left: 0;

  transition-property: opacity, left;
  transition-delay: 0.1s, 0.2s;
  transition-duration: 0.1s, 0.4s;

  z-index: 121;
}
*/

.presentation-hd {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  /* background: linear-gradient(45deg, rgba(0, 0, 0, 0.35) 50%, rgba(0, 0, 0, 0) 100%); */
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.45) 60%, rgba(0, 0, 0, 0) 100%);

  border: 1px solid black;
  margin-bottom: 20px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
}

.presentation-hd > h2 {
  flex: 1;

  border-right: 1px solid black;
  /* margin-right: 10px; */
  padding-left: 12px;
  padding-top: 7px;

  font-family: "amazonic";
  font-weight: 500;
  font-size: 46px;
  color: #2f4f4f;
}

/* .presentation-hd > h2 {
  flex: 1;

  border-right: 1px solid black;
  padding-left: 10px;

  font-size: 32px;
} */

@keyframes rotete {
  /* 0% {transform: rotate(0deg);}
  7% {transform: rotate(0deg);}
  15% {transform: rotate(10deg);}
  30% {transform: rotate(-10deg);}
  45% {transform: rotate(10deg);}
  52% {transform: rotate(0deg);}
  100% {transform: rotate(0deg);} */

  0% {transform: rotate(0deg);}
  5% {transform: rotate(0deg);}
  10% {transform: rotate(10deg);}
  20% {transform: rotate(-10deg);}
  30% {transform: rotate(10deg);}
  35% {transform: rotate(0deg);}
  40% {transform: rotate(720deg);}
  41% {transform: rotate(750deg);}
  70% {transform: rotate(-25deg);}
  73% {transform: rotate(10deg);}
  75% {transform: rotate(-5deg);}
  77% {transform: rotate(4deg);}
  79% {transform: rotate(-4deg);}
  81% {transform: rotate(3deg);}
  83% {transform: rotate(-3deg);}
  85% {transform: rotate(0deg);}
  100% {transform: rotate(0deg);}
}

.tete-img {
  flex: 0;

  /* height: 40px; */
  height: 50px;

  padding: 2px;

  animation-name: rotete;
  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-out;
}

.presentation-content {
  margin-bottom: 36px;
  padding-bottom: 20px;
  padding-left: 13px;

  display: flex;
  flex-direction: column;

  border-bottom: 1px solid rgba(0, 0, 0, 0.168);

  overflow: scroll;
}

.text-clo h2{
  background: -webkit-linear-gradient(45deg, rgb(132, 255, 165) 0%, rgb(255, 159, 228) 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-bob h2 {
  background: -webkit-linear-gradient(45deg, rgb(132, 255, 165) 0%, rgb(255, 159, 228) 60%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-bud h2 {
  background: -webkit-linear-gradient(45deg, rgb(132, 255, 165) 0%, rgb(255, 159, 228) 50%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.presentation-else {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.128);
}

.presentation-else > .tal-hd {
  font-weight: 900;
  color: rgb(167, 119, 90);
}

.presentation-else > .sur-hd {
  font-weight: 900;
  color: rgb(100, 90, 167);
}

.presentation-gif {
  align-self: center;
  max-width: 75%;
}

.presentation-back {
  position: absolute;
  width: 32px;
  right: 20px;
  bottom: 12px;

  opacity: 0.4;
  transition: 0.15s;

  cursor: pointer;
}
.presentation-back:hover {
  opacity: 0.7;
  transition: 0.15s;
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