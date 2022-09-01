<template>
  <div  class="section-double-image-text align-center space-around" 
        v-bind:class="{  'flex-container-row': directionRow && imageFirst,
                        'flex-container-column': !directionRow && imageFirst,
                        'flex-container-revrow': directionRow && !imageFirst,
                        'flex-container-revcolumn': !directionRow && !imageFirst
                     }"
        v-bind:style="{background: sectionBackground, color: sectionColor, paddingTop: sectionPadding, paddingBottom: sectionPadding}"
    >
    <div class="flex-container-row flex-1 align-center justify-center">
      <div 
        class="image-container"
        :class="{'border-img': !noBorder}" 
        :style="{'width': imageWidth + 'px', 'height': imageHeight + 'px'}"
      >
        <div 
          class="img back" 
          :style="{
            'background-size': imageWidth + 'px 100%',
            'background-image': `url(${require(`@/assets/images/quotes/${imageBackUrl}`)})`
          }"
        ></div>
        <div 
          class="img fore" 
          :style="{
            'background-size': imageWidth + 'px 100%',
            'background-image': `url(${require(`@/assets/images/quotes/${imageForeUrl}`)})`
          }"
        ></div>
        <input v-model="sliderPos" type="range" min="1" max="100" value="50" class="slider">
        <div class='slider-button'></div>
      </div>
    </div>
    <div class="text-container flex-container-column flex-1 align-center justify-center">
      <h2 v-bind:class="{'no-display': textTitle === null}">
        {{textTitle}}
      </h2>
      <p v-for="textEl in textArray" :key="textEl">
        {{textEl}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionDoubleImageText',
  props: {
    directionRow: {
      type: Boolean,
      default: true
    },
    imageFirst: {
      type: Boolean,
      default: true
    },
    sectionBackground: {
      type: String,
      default: 'transparent'
    },
    sectionColor: {
      type: String,
      default: '#2c3e50'
    },
    sectionPadding: {
      type: String,
      default: '50px'
    },
    noBorder: {
      type: Boolean,
      default: false
    },
    imageWidth: {
      type: Number,
      require: true
    },
    imageHeight: {
      type: Number,
      require: true
    },
    imageForeUrl: String,
    imageForeAlt: String,
    imageBackUrl: String,
    imageBackAlt: String,
    textTitle: String,
    textArray: Array,
  },
  data: function () {
    return {
      sliderPos: 50
    }
  },
  watch: {
    sliderPos: function (val) {
      this.$el.querySelector('.img.fore').style.width = `${val}%`;
      this.$el.querySelector('.slider-button').style.left = `calc(${val}% - 14px)`;
    }
  }
}
</script>

<style scoped>
.section-double-image-text {
  padding: 50px;
}

.image-container {
  position: relative;
  overflow: hidden;
}

.image-container.border-img {
  border: 1px solid #00000055;
}

.image-container .img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.image-container .img.fore {
  width: 50%;
}

.slider {
  position: absolute;
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 100%;
  background: transparent;
  outline: none;
  margin: 0;
  transition: all .2s;
  display: flex;
  justify-content: center;
  align-items: center;
}
.slider:hover {
  background: transparent;
}
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 4px;
  height: 300px;
  background: white;
  cursor: pointer;
}
.slider::-moz-range-thumb {
  width: 4px;
  height: 289px;
  background: white;
  cursor: pointer;
}
  
.slider-button {
  pointer-events: none;
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: white;
  left: calc(50% - 14px);
  top: calc(50% - 14px);
  display: flex;
  justify-content: center;
  align-items: center;
}
.slider-button:after {
  content: '';
  padding: 2.5px;
  display: inline-block;
  border: solid #5D5D5D;
  border-width: 0 1.5px 1.5px 0;
  transform: rotate(-45deg);
}
.slider-button:before {
  content: '';
  padding: 2.5px;
  display: inline-block;
  border: solid #5D5D5D;
  border-width: 0 1.5px 1.5px 0;
  transform: rotate(135deg);
}

.text-container {
  padding: 0px 20px;
}

h2 {
  font-size: 24px;
}

p {
  font-size: 16px;
}

@media (max-width: 1200px){
}

@media (max-width: 1024px){
  .section-image-text {
    padding: 30px;
  }

  .image-container .img {
    max-height: 250px;
    max-width: 350px;
  }

  h2 {
    font-size: 24px;
  }

  p {
    font-size: 16px;
  }
}

@media (max-width: 768px){
  .section-double-image-text {
    flex-direction: column;

    padding: 100px 10px!important;
  }

  .image-container {
    height: 180px!important;
    width: 250px!important;
  }

  .image-container .img {
    background-size: 250px 100%!important;
  }

  .text-container {
    margin-top: 30px;
    padding: 0px 10px;
  }

  h2 {
    font-size: 16px;
  }

  p {
    font-size: 14px;
  }
}
</style>