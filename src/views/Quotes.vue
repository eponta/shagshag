<template>
  <div class="quotes single-view flex-container-column">
    <!--effet parallax fond couleurs-->
    <SectionImageText 
      v-bind:directionRow="true"
      v-bind:imageFirst="true"
      v-bind:imageUrl="'groupe-mur.jpg'"
      v-bind:imageAlt="'Don\'t mess with da Crew'"
      v-bind:textTitle="'SHAG SHAG'"
      v-bind:textArray="[
        'Nous, on préférait l\'été et le citron dans le gin.',
        'Les glaçons étaient carrés, nous on était ronds “Chez les filles”.'
      ]"
      v-bind:sectionBackground="'lemonchiffon'"
    />
    <SectionImageText 
      v-bind:directionRow="true"
      v-bind:imageFirst="false"
      v-bind:imageUrl="'pochette-mixtape.jpeg'"
      v-bind:imageAlt="'Flying Bobby'"
      v-bind:textTitle="'CE N\'EST PAS N\'IMPORTE QUELLE BASSE BOBBY...'"
      v-bind:textArray="['...C\'est une basse 2000!']"
      v-bind:sectionColor="'#f2f2f2'"
    />
    <SectionImageText 
      v-bind:directionRow="true"
      v-bind:imageFirst="true"
      v-bind:imageUrl="'pochette-punk.jpeg'"
      v-bind:imageAlt="'Les Groupes Punk De Lycée Méritent Des Grammy Awards'"
      v-bind:textTitle="'EXCELLENT! MEGATEUF!'"
      v-bind:textArray="['Le sphincter a dit quoi?']"
      v-bind:sectionBackground="'aquamarine'"
    />
    <SectionImageText 
      v-bind:directionRow="true"
      v-bind:imageFirst="false"
      v-bind:imageUrl="'molosse.jpeg'"
      v-bind:imageAlt="'Bobby Tannen'"
      v-bind:textTitle="'VOUS ÊTES MOLOSSE TANNEN?'"
      v-bind:textArray="['Ce nom j\'l\'encaisse pas, t\'entends!']"
      v-bind:sectionColor="'#f2f2f2'"
      v-bind:sectionPadding="'100px'"
    />
    <SectionImageText 
      v-bind:directionRow="true"
      v-bind:imageFirst="true"
      v-bind:imageUrl="'festin.png'"
      v-bind:imageAlt="'C\'est moi, Georges, Georges McFly!'"
      v-bind:textTitle="'LE FESTIN NOUS A RÉUNIS'"
      v-bind:textArray="['Je vous étais dessiné. Je veux dire… destiné.']"
      v-bind:sectionBackground="'lavender'"
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
