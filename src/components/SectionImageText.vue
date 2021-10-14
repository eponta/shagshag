<template>
  <div  class="section-image-text align-center space-around" 
        v-bind:class="{  'flex-container-row': directionRow && imageFirst,
                        'flex-container-column': !directionRow && imageFirst,
                        'flex-container-revrow': directionRow && !imageFirst,
                        'flex-container-revcolumn': !directionRow && !imageFirst
                     }"
        v-bind:style="{background: sectionBackground, color: sectionColor}"
    >
    <div class="image-container flex-container-row flex-1 align-center justify-center">
      <img :src="require(`@/assets/images/${imageUrl}`)" :alt="imageAlt">
    </div>
    <div class="text-container flex-container-column flex-1 align-center justify-center">
      <h2 v-bind:class="{'no-display': textTitle === null}">
        {{textTitle}}
      </h2>
      <p>
        {{textContent}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionImageText',
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
    imageUrl: String,
    imageAlt: String,
    textTitle: String,
    textContent: String
  },
  methods: {
    getImgUrl() {
      return require('../assets/images/' + this.imageUrl)
    }
  }
}
</script>

<style scoped>
.section-image-text {
  padding: 50px;
}

.image-container img {
  max-height: 300px;
  max-width: 400px;
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

  .image-container img {
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
  .section-image-text {
    padding: 20px 10px;
  }

  .image-container img {
    max-height: 120px;
    max-width: 130px;
  }

  .text-container {
    padding: 0px 10px;
  }

  h2 {
    font-size: 14px;
  }

  p {
    font-size: 11px;
  }
}
</style>