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
    <div class="section-title flex-container-column align-center justify-center">
        <h2>
            DERNIÈRES VIDÉOS
        </h2>
    </div>
    <div class="section-video flex-container-row">
      <div class="video-container flex-container-column flex-1 align-center justify-center">
        <div class="tv-antenna flex-container-row fit-max-width align-center justify-center">
          <div
            style="
              position: relative;
              width: 0px;
              height: 300px;
              margin-bottom: -40px;
              margin-left: 15px;
              margin-right: 90px;
              border: 3px rgb(55, 55, 55) solid;
              transform: rotate(-38deg);
            "
          >
            <div
              style="
                position: absolute;
                top: -15px;
                left: -15px;
                width: 20px;
                height: 20px;
                background: #b0b0b0;
                border: 4px rgb(35, 35, 35) solid;
                border-radius: 100px;
              "
            ></div>
          </div>
          <div
            style="
              position: relative;
              width: 0px;
              height: 300px;
              margin-bottom: -40px;
              margin-left: 90px;
              border: 3px rgb(55, 55, 55) solid;
              transform: rotate(48deg);
            "
          >
            <div
              style="
                position: absolute;
                top: -15px;
                right: -15px;
                width: 20px;
                height: 20px;
                background: #c0c0c0;
                border: 4px rgb(35, 35, 35) solid;
                border-radius: 100px;
              "
            ></div>
          </div>
          <div
            style="
              position: absolute;
              bottom: -45px;
              width: 115px;
              height: 80px;
              background: linear-gradient(50deg, #808080, #c0c0c0);
              border: 4px rgb(35, 35, 35) solid;
              border-radius: 100%;
            "
          ></div>
        </div>
        <div class="tv-screen flex-container-row fit-max-width align-center justify-center">
          <div class="tv-iframe-container">
            <iframe width="540" 
                    height="480" 
                    src="https://www.youtube.com/embed/videoseries?list=PL589rzD4Hvmp8dqKaI4z285yYTqGrreTi&autoplay=1&mute=1" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                    :style="{display: tvOn ? 'inline' : 'none'}"
            >
            </iframe>
          </div>
          <div class="flex-container-column align-center justify-center" style="margin-left: 35px;">
            <div
              class="flex-container-column fit-height align-center justify-center"
              style="
                width: 110px;
                margin-top: 15px;
                padding: 30px 0;
                background-color: #e0e0e0;
                border: 4px solid black;
                border-radius: 15px;
              "
            >
              <div
                v-on:click="turnBtn(1)"
                class="tv-btn tv-btn-1"
                style="
                  position: relative;
                  width: 75px;
                  height: 75px;
                  border: 4px solid black;
                  border-radius: 100px;
                  margin-bottom: 25px;
                  cursor: pointer;
                "
              ></div>
              <div
                v-on:click="turnBtn(2)"
                class="tv-btn tv-btn-2"
                style="
                  position: relative;
                  width: 75px;
                  height: 75px;
                  border: 4px solid black;
                  border-radius: 100px;
                  cursor: pointer;
                "
              ></div>
            </div> 
            <div
              style="
                width: 110px;
                margin-top: 35px;
                border: 2px solid black;
                border-radius: 100px;
              "
            >
            </div>
            <div
              style="
                width: 110px;
                margin-top: 16px;
                border: 2px solid black;
                border-radius: 100px;
              "
            >
            </div>
            <div
              style="
                width: 110px;
                margin-top: 17px;
                border: 2px solid black;
                border-radius: 100px;
              "
            >
            </div>
            <div
              style="
                width: 110px;
                margin-top: 15px;
                border: 2px solid black;
                border-radius: 100px;
              "
            >
            </div>
            <div
              style="
                width: 110px;
                margin-top: 18px;
                border: 2px solid black;
                border-radius: 100px;
              "
            >
            </div>
            <div 
              class="flex-container-row align-end justify-center"
              style="margin-top: 30px;"
            >
              <div class="flex-container-column align-center justify-center">
                <div style="font-weight: 900; font-size: 11px; margin-bottom: 3px">
                  POWER
                </div>
                <div
                  v-on:click="powerTv"
                  class="tv-power-btn"
                ></div>
              </div>
              <div
                v-on:click="powerTv"
                class="tv-power-led"
                style="
                  width: 16px;
                  height: 16px;
                  margin-left: 25px;
                  margin-bottom: 2px;
                  border: 4px solid black;
                  border-radius: 100px;
                "
                :style="{background: tvOn ? 'red' : '#333'}"
              ></div>
            </div>
          </div>
        </div>
        <div class="tv-feet flex-container-row align-center justify-center">
          <div
            style="
              position: relative;
              width: 0px;
              height: 80px;
              margin-top: -20px;
              margin-right: 250px;
              border-right: 50px transparent solid;
              border-left: 10px transparent solid;
              border-top: 230px rgb(35, 35, 35) solid;
              transform: rotate(18deg);
            "
          >
            <div
              style="
                position: absolute;
                top: -255px;
                left: -8px;
                border-right: 50px transparent solid;
                border-left: 10px transparent solid;
                border-top: 230px #c0c0c0 solid;
              "
            >
            </div>
          </div>
          <div
            style="
              position: relative;
              width: 0px;
              height: 80px;
              margin-top: -20px;
              margin-left: 250px;
              border-right: 10px transparent solid;
              border-left: 50px transparent solid;
              border-top: 230px rgb(35, 35, 35) solid;
              transform: rotate(-18deg);
            "
          >
            <div
              style="
                position: absolute;
                top: -255px;
                right: -8px;
                border-right: 10px transparent solid;
                border-left: 50px transparent solid;
                border-top: 230px #c5c5c5 solid;
              "
            >
            </div>
          </div>
          <div
            style="
              position: absolute;
              bottom: 90px;
              left: -20px;
              right: -20px;
              height: 10px;
              background: black;
            "
          ></div>
        </div>
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
      tvOn: true,
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
    },
    turnBtn(btnId) {
      this.$el.querySelector(`.tv-btn-${btnId}`).style.setProperty('--tv-btn-angle', `rotate(${Math.random() * 360}deg)`);
    },
    powerTv() {
      this.tvOn = !this.tvOn;
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
    }
  },
  mounted() {
      this.$el.querySelector('.tv-btn-1').style.setProperty('--tv-btn-angle', `rotate(${Math.random() * 360}deg)`);
      this.$el.querySelector('.tv-btn-2').style.setProperty('--tv-btn-angle', `rotate(${Math.random() * 360}deg)`);
  }
}
</script>

<style scoped>
:root {
  --tv-btn-angle: 'rotate(0deg)';
}

.home {
  margin-bottom: 40px;
}

.section-presentation {
  position: relative;
  overflow: hidden;
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
  right: 13.7%;
  height: 78.1%;
  width: 29.3%;
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
  position: fixed;
  top: 71px;
  height: calc(100vh - var(--hd-height));
  /* position: fixed; */
  /* top: calc(10% + 71px); */

  display: flex;
  flex-direction: column;
  align-items: stretch;

  opacity: 0;
  left: -325px;
  transition-property: opacity, left, z-index;
  transition-delay: 0.25s, 0.05s, 0.25s;
  transition-duration: 0.1s, 0.15s, 0.15s;

  padding: 20px;
  width: 325px;
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
  text-align: center;
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
  height: 48px;

  padding: 2px;

  animation-name: rotete;
  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-out;
}

.presentation-content {
  flex: 1;

  margin-bottom: 36px;
  padding-bottom: 20px;
  padding-left: 13px;
  padding-right: 13px;

  display: flex;
  flex-direction: column;

  border-bottom: 1px solid rgba(0, 0, 0, 0.25);

  overflow: auto;
}

.text-clo h2{
  background: -webkit-linear-gradient(45deg, rgb(132, 255, 165) 20%, rgb(255, 159, 228) 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-bob h2 {
  background: -webkit-linear-gradient(45deg, rgb(132, 255, 165) 20%, rgb(255, 159, 228) 75%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-bud h2 {
  background: -webkit-linear-gradient(45deg, rgb(132, 255, 165) 20%, rgb(255, 159, 228) 70%);
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

  opacity: 0.5;
  transition: 0.15s;

  cursor: pointer;
}
.presentation-back:hover {
  opacity: 0.7;
  transition: 0.15s;
}

.section-title {
  margin-top: 100px;
}

.section-title > h2 {
  color: #fdfdfd;
}

.section-video {
  background-color: black;
  margin-bottom: 250px;
}

.video-container {
  padding: 20px;
  background: black;
}

.video-container h2 {
  color: white;
  margin-bottom: 20px;
}

.tv-antenna {
  position: relative;
  z-index: 6;
}

.video-container .tv-screen {
  padding: 35px;
  background: linear-gradient(35deg, #ababab, #c0c0c0);
  background: linear-gradient();
  border: 5px solid rgb(35, 35, 35);
  border-radius: 20px;
  z-index: 9;
}

.video-container iframe {
  /* max-width: 70%; */
}

.video-container .tv-iframe-container {
  width: 540px;
  height: 480px;
  box-sizing: content-box;
  padding: 0 50px;
  background: black;
  border: 1px solid black;
  border-radius: 40px;

  /* background-image: url(../assets/images/tetes/tete-bob.png); */
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100px;
}

.tv-btn {
  background: #888;
}
.tv-btn:hover {
  background: #777;
}

.tv-btn::after {
  content: '';
  position: absolute;
  top: calc(50% - 49px);
  left: calc(50% - 19px);
  width: 30px;
  height: 90px;
  background: linear-gradient(45deg, #888, #AAA);
  border: 4px solid black;
  border-radius: 2px;
  transform: var(--tv-btn-angle);
}
.tv-btn:hover::after {
  background: linear-gradient(45deg, #777, #999);
}

.tv-power-btn {
  width: 43px;
  height: 20px;
  background: #e0e0e0;
  border: 4px solid black;
  cursor: pointer;
  transition: 0.075s;
}
.tv-power-btn:hover {
  background: #444;
}

.tv-power-led {
}

.tv-feet {
  position: relative;
  z-index: 7;
}

@media (max-width: 1200px){
  .presentation-txt-cnt {
    padding: 17px;
    width: 300px;
    left: -300px;
    font-size: 16px;
  }

  .presentation-hd > h2 {
    padding-left: 10px;
    padding-top: 6px;
    font-size: 42px;
  }

  .tete-img {
    height: 44px;
  }

  .presentation-content {
    padding-left: 10px;
    padding-right: 10px;
  }

  .section-title {
    margin-top: 80px;
  }

  .section-video {
    margin-bottom: 200px;
  }
}

@media (max-width: 1024px){
  .presentation-txt-cnt {
    top: var(--hd-height-md);
    height: calc(100vh - var(--hd-height-md));
    padding: 15px;
    width: 275px;
    left: -275px;
    font-size: 15px;
  }

  .presentation-hd > h2 {
    padding-left: 8px;
    padding-top: 6px;
    font-size: 36px;
  }

  .tete-img {
    height: 37px;
  }

  .presentation-content {
    padding-left: 8px;
    padding-right: 8px;
  }

  .section-title {
    margin-top: 60px;
  }

  .section-video {
    flex-direction: column;
    margin-bottom: 150px;
  }
}

@media (max-width: 767px){
  .bg-presentaion-cnt img {
    width: 160%;
    margin-left: -30%;
  }

  .shadow-clo {
    bottom: 5.7%;
    left: 1%;
    height: 79.8%;
    width: 37.84%;
  }

  .shadow-bob {
    bottom: 4.2%;
    right: 29.7%;
    height: 74.5%;
    width: 34.24%;
  }

  .shadow-bud {
    bottom: 3.555556%;
    right: -8.2%;
    height: 78.1%;
    width: 47%;
  }

  .presentation-txt-cnt {
    top: var(--hd-height-sm);
    height: calc(100vh - var(--hd-height-sm));
    padding: 80px 20px 20px 20px;
    width: 100vw;
    left: -100vw;
    font-size: 15px;
    background: #dadadaee;
  }

  .presentation-hd {
    width: 250px;
    max-width: 300px;
    align-self: center;
    margin-bottom: 30px;
  }

  .presentation-hd > h2 {
    padding-left: 8px;
    padding-top: 5px;
    font-size: 30px;
  }

  .tete-img {
    height: 31px;
  }

  .presentation-content {
    margin-bottom: 66px;
    padding-left: 15px;
    padding-right: 15px;
  }

  .presentation-back {
    bottom: 42px;
  }

  .section-title {
    margin-top: 40px;
  }

  .section-video {
    margin-bottom: 100px;
  }

  .video-container iframe {
    max-width: 95%;
  }
}
</style>