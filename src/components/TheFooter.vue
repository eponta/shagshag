<template>
  <div class="the-footer flex-container-row align-center justify-center">
    <div class="footer-main-container flex-1 flex-container-column justify-center full-width no-overflow">
      <h2 class="footer-name-start align-start">BOBBY</h2>
      <h2 class="footer-name-center align-center">BUDHI</h2>
      <h2 class="footer-name-end align-end">CLOCLO</h2>
      <h5 class="margin-top-50">
        88mph Records ©
      </h5>
      <TheFooterGifSection/>
    </div>
  </div>
</template>

<script>
import TheFooterGifSection from './TheFooterGifSection'
export default {
  name: 'TheFooter',
  components: {
    TheFooterGifSection
  }
}
</script>

<style scoped>
.the-footer {
  position: sticky;
  bottom: 0;
  flex-shrink: 0;
  background-color: thistle;
}

.footer-main-container {
  padding: 50px 20px 20px 20px;
  background: linear-gradient(180deg, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,1) 100%);
  z-index: 100;
}

/* SHADOW NAMES */
h2 {
  max-width: 100%;
  font-size: 60px;
  line-height: 75px;
  font-family: 'antonio';
  box-sizing: border-box;
}

h5 {
  color: thistle;
  text-shadow: 0px 0px 2px black, 0px 0px 5px rgba(255,255,255,0.5);
}

.footer-name-start {
  text-align: start;
  margin-left: 5%;
  text-shadow: 6px 6px 0px rgba(0,0,0,0.2),
                100px  0px 0px rgba( 50, 120,  70, 0.65),
                200px  0px 0px rgba(151, 162, 221, 0.90),
                300px  0px 0px rgba(132,  0,  255, 0.85),
                400px  0px 0px rgba(232, 101, 127, 0.80),
                500px  0px 0px rgba(255, 143,  67, 0.75),
                600px  0px 0px rgba( 50, 120,  70, 0.70),
                700px  0px 0px rgba(151, 162, 221, 0.65),
                800px  0px 0px rgba(132,  0,  255, 0.60),
                900px  0px 0px rgba(232, 101, 127, 0.55),
                1000px 0px 0px rgba(255, 143,  67, 0.50),
                1100px 0px 0px rgba( 50, 120,  70, 0.45),
                1200px 0px 0px rgba(151, 162, 221, 0.40),
                1300px 0px 0px rgba(132,  0,  255, 0.35),
                1400px 0px 0px rgba(232, 101, 127, 0.30),
                1500px 0px 0px rgba(255, 143,  67, 0.25),
                1600px 0px 0px rgba(209, 255, 145, 0.20),
                1700px 0px 0px rgba(255, 117, 145, 0.15),
                1800px 0px 0px rgba(151, 162, 221, 0.10),
                1900px 0px 0px rgba(232, 101, 127, 0.05);
}
.footer-name-center {
  text-align: center;
  text-shadow: 6px 6px 0px rgba(0,0,0,0.3),
                  90px 0px 0px rgba(255, 117, 201, 0.65),
                 180px 0px 0px rgba(255, 154, 215, 0.90),
                 270px 0px 0px rgba(210, 128, 240, 0.85),
                 360px 0px 0px rgba(139, 218, 252, 0.80),
                 450px 0px 0px rgba(165, 252, 242, 0.75),
                 540px 0px 0px rgba(255, 117, 201, 0.70),
                 630px 0px 0px rgba(255, 154, 215, 0.65),
                 720px 0px 0px rgba(210, 128, 240, 0.60),
                 810px 0px 0px rgba(139, 218, 252, 0.55),
                 900px 0px 0px rgba(165, 252, 242, 0.50),
                 -90px 0px 0px rgba(165, 252, 242, 0.65),
                -180px 0px 0px rgba(139, 218, 252, 0.90),
                -270px 0px 0px rgba(210, 128, 240, 0.85),
                -360px 0px 0px rgba(255, 154, 215, 0.80),
                -450px 0px 0px rgba(255, 117, 201, 0.75),
                -540px 0px 0px rgba(165, 252, 242, 0.70),
                -630px 0px 0px rgba(139, 218, 252, 0.65),
                -720px 0px 0px rgba(210, 128, 240, 0.60),
                -810px 0px 0px rgba(255, 154, 215, 0.55),
                -900px 0px 0px rgba(255, 117, 201, 0.50);
}
.footer-name-end {
  text-align: end;
  margin-right: 5%;
  text-shadow:   -100px 0px 0px rgba(209, 255, 145, 0.95),
                  0px   0px 1px rgba(255, 255, 255, 0.5),
                   6px  6px 0px rgba(  0,   0,   0,  0.4),  
                -200px  0px 0px rgba(255, 117, 145, 0.90),
                -300px  0px 0px rgba(255, 240, 240, 0.85),
                -400px  0px 0px rgba( 88, 203, 184, 0.80),
                -500px  0px 0px rgba(135,  65, 112, 0.75),
                -600px  0px 0px rgba(209, 255, 145, 0.70),
                -700px  0px 0px rgba(255, 117, 145, 0.65),
                -800px  0px 0px rgba(255, 240, 240, 0.60),
                -900px  0px 0px rgba( 88, 203, 184, 0.55),
                -1000px 0px 0px rgba(135,  65, 112, 0.50),
                -1100px 0px 0px rgba(209, 255, 145, 0.45),
                -1200px 0px 0px rgba(255, 117, 145, 0.40),
                -1300px 0px 0px rgba(255, 240, 240, 0.35),
                -1400px 0px 0px rgba( 88, 203, 184, 0.30),
                -1500px 0px 0px rgba(135,  65, 112, 0.25),
                -1600px 0px 0px rgba(209, 255, 145, 0.20),
                -1700px 0px 0px rgba(255, 117, 145, 0.15),
                -1800px 0px 0px rgba(255, 240, 240, 0.10),
                -1900px 0px 0px rgba( 88, 203, 184, 0.05);
}

@media (max-width: 1200px){

}

@media (max-width: 1024px){
  h2 {
    font-size: 48px;
    line-height: 60px;
  }
}

@media (max-width: 768px){
  .footer-name-start {
    margin-left: 0;
  }

  .footer-name-end {
    margin-right: 0;
  }
}
</style>