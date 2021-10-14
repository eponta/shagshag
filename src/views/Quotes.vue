<template>
  <div class="quotes single-view flex-container-column">
    <SectionImageText 
      v-bind:directionRow="true"
      v-bind:imageFirst="true"
      v-bind:imageUrl="'groupe-mur.jpg'"
      v-bind:imageAlt="'Don\'t mess with da Crew'"
      v-bind:textTitle="'SHAG SHAG'"
      v-bind:textContent="'En rute dans ma shatguar! Grrr baby, vraiment grrr!'"
      v-bind:sectionBackground="'thistle'"
    />
    <SectionImageText 
      v-bind:directionRow="true"
      v-bind:imageFirst="false"
      v-bind:imageUrl="'pochette-mixtape.jpeg'"
      v-bind:imageAlt="'Flying Bobby'"
      v-bind:textTitle="'CE N\'EST PAS N\'IMPORTE QUELLE BASSE BOBBY...'"
      v-bind:textContent="'...C\'est une basse 2000!'"
      v-bind:sectionColor="'#f2f2f2'"
    />
    <SectionImageText 
      v-bind:directionRow="true"
      v-bind:imageFirst="true"
      v-bind:imageUrl="'pochette-punk.jpeg'"
      v-bind:imageAlt="'Les Groupes Punk De Lycée Méritent Des Grammy Awards'"
      v-bind:textTitle="'EXCELLENT! MEGATEUF!'"
      v-bind:textContent="'C\'est pas la maman de Stifler là-bas?!'"
      v-bind:sectionBackground="'aquamarine'"
    />
  </div>
</template>

<script>
import SectionImageText from '../components/SectionImageText'

export default {
  name: 'Quotes',
  components: {
    SectionImageText
  }
}
</script>

<style scoped>
.quotes {
  padding: 50px 0px;
}

@media (max-width: 1200px){
}

@media (max-width: 1024px){
  .quotes {
    padding: 60px 0px;
  }
}

@media (max-width: 768px){
}
</style>
