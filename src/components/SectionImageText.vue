<template>
  <div  class="section-image-text align-center space-around" 
        v-bind:class="{  'flex-container-row': directionRow && imageFirst,
                        'flex-container-column': !directionRow && imageFirst,
                        'flex-container-revrow': directionRow && !imageFirst,
                        'flex-container-revcolumn': !directionRow && !imageFirst
                     }"
        v-bind:style="{background: sectionBackground, color: sectionColor, paddingTop: sectionPadding, paddingBottom: sectionPadding}"
    >
    <div class="image-container flex-container-row flex-1 align-center justify-center">
      <img :src="require(`@/assets/images/quotes/${imageUrl}`)" :alt="imageAlt" :class="{'border-img': !noBorder}">
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
    sectionPadding: {
      type: String,
      default: '50px'
    },
    noBorder: {
      type: Boolean,
      default: false
    },
    imageUrl: String,
    imageAlt: String,
    textTitle: String,
    textArray: Array,
  },
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

.image-container img.border-img {
  border: 1px solid #00000055;
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

@media (max-width: 767px){
  .section-image-text {
    flex-direction: column;

    padding: 100px 10px!important;
  }

  .image-container img {
    max-height: 270px;
    max-width: 250px;
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