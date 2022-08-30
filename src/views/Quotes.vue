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
      v-bind:textTitle="'LES GROUPES PUNK DE LYCÉE'"
      v-bind:textArray="[
        ' MÉRITENT DES GRAMMY AWARDS']"
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
    <SectionDoubleImageText 
      v-bind:directionRow="true"
      v-bind:imageFirst="true"
      v-bind:imageWidth="400"
      v-bind:imageHeight="289"
      v-bind:imageForeUrl="'festin-aqua.png'"
      v-bind:imageForeAlt="'Dites, on ne se serait pas déjà vus quelque part ?'"
      v-bind:imageBackUrl="'festin.png'"
      v-bind:imageBackAlt="'C\'est moi, Georges, Georges McFly!'"
      v-bind:textTitle="'LE FESTIN NOUS A RÉUNIS'"
      v-bind:textArray="['Je vous étais dessiné. Je veux dire… destiné.']"
      v-bind:sectionBackground="'lavender'"
    />
    <SectionImageText 
      v-bind:directionRow="true"
      v-bind:imageFirst="false"
      v-bind:imageUrl="'clo-ombrages.jpeg'"
      v-bind:imageAlt="''"
      v-bind:textTitle="'...'"
      v-bind:textArray="[]"
      v-bind:sectionColor="'#f2f2f2'"
      v-bind:sectionPadding="'100px'"
    />
    <SectionImageText 
      v-bind:directionRow="true"
      v-bind:imageFirst="true"
      v-bind:imageUrl="'bob-enfeus.jpeg'"
      v-bind:imageAlt="''"
      v-bind:textTitle="'...'"
      v-bind:textArray="[]"
      v-bind:sectionBackground="'lightsalmon'"
    />
    <SectionImageText 
      v-bind:directionRow="true"
      v-bind:imageFirst="false"
      v-bind:imageUrl="'bud-ombrages.jpeg'"
      v-bind:imageAlt="''"
      v-bind:textTitle="'...'"
      v-bind:textArray="[]"
      v-bind:sectionColor="'#f2f2f2'"
      v-bind:sectionPadding="'100px'"
    />
    <SectionImageText 
      v-bind:directionRow="true"
      v-bind:imageFirst="true"
      v-bind:imageUrl="'paul-anthology.gif'"
      v-bind:imageAlt="''"
      v-bind:textTitle="'HER MAJESTY IS A PRETTY NICE GIRL'"
      v-bind:textArray="['Microphones are just like people, if you shout at them, they get scared.']"
      v-bind:sectionBackground="'cadetblue'"
      v-bind:noBorder="true"
    />
    <SectionImageText 
      v-bind:directionRow="true"
      v-bind:imageFirst="false"
      v-bind:imageUrl="'guinness.gif'"
      v-bind:imageAlt="'On the road to Dublin'"
      v-bind:textTitle="'LES BULLES DE CHAMPAGNE, C\'EST MÉGALO'"
      v-bind:textArray="['J\'préfère la Guinness, c\'est mégalourd']"
      v-bind:sectionColor="'#f2f2f2'"
      v-bind:sectionPadding="'100px'"
    />
    <SectionImageText 
      v-bind:directionRow="true"
      v-bind:imageFirst="true"
      v-bind:imageUrl="'clo-enfeus.jpeg'"
      v-bind:imageAlt="''"
      v-bind:textTitle="'...'"
      v-bind:textArray="[]"
      v-bind:sectionBackground="'ghostwhite'"
    />
    <SectionImageText 
      v-bind:directionRow="true"
      v-bind:imageFirst="false"
      v-bind:imageUrl="'bob-ombrages.jpeg'"
      v-bind:imageAlt="''"
      v-bind:textTitle="'...'"
      v-bind:textArray="[]"
      v-bind:sectionColor="'#f2f2f2'"
      v-bind:sectionPadding="'100px'"
    />
    <SectionImageText 
      v-bind:directionRow="true"
      v-bind:imageFirst="true"
      v-bind:imageUrl="'bud-enfeus.jpeg'"
      v-bind:imageAlt="''"
      v-bind:textTitle="'...'"
      v-bind:textArray="[]"
      v-bind:sectionBackground="'thistle'"
    />
    <SectionImageText 
      v-bind:directionRow="true"
      v-bind:imageFirst="false"
      v-bind:imageUrl="'delorean-travel.gif'"
      v-bind:imageAlt="'88mph'"
      v-bind:textTitle="'2,21 GIGOWATTS ?!'"
      v-bind:textArray="['Là où on va, on a pas besoin de route']"
      v-bind:sectionColor="'#f2f2f2'"
      v-bind:sectionPadding="'100px'"
    />
    <SectionImageText 
      v-bind:directionRow="true"
      v-bind:imageFirst="true"
      v-bind:imageUrl="'tacle-assassin.gif'"
      v-bind:imageAlt="''"
      v-bind:textTitle="'OW, SA JAMBE EST TU-MÉ-FIÉE !'"
      v-bind:textArray="[]"
      v-bind:sectionBackground="'lightgreen'"
    />
    <SectionImageText 
      v-bind:directionRow="true"
      v-bind:imageFirst="false"
      v-bind:imageUrl="'megateuf-wayne.webp'"
      v-bind:imageAlt="'Les Groupes Punk De Lycée Méritent Des Grammy Awards'"
      v-bind:textTitle="'EXCELLENT! MEGATEUF!'"
      v-bind:textArray="['Schwiiiiing, chapiteau !', 'Le sphincter a dit quoi ?']"
      v-bind:sectionColor="'#f2f2f2'"
    />
    <SectionImageText 
      v-bind:directionRow="true"
      v-bind:imageFirst="true"
      v-bind:imageUrl="'no-stairway.jpeg'"
      v-bind:imageAlt="'Un jour elle sera mienne'"
      v-bind:textTitle="'NO STAIRWAY ?!'"
      v-bind:textArray="['C\'est dingue !']"
      v-bind:sectionBackground="'white'"
    />
  </div>
  <!--
    But the fool on the hill
    Sees the sun going down
    And the eyes in his head
    See the world spinning round

    Je t'ai vu la-bas, t'as pas hésité une seconde... C'est une qualité rare Johnny dans ce monde
  -->
</template>

<script>
import SectionImageText from '../components/SectionImageText'
import SectionDoubleImageText from '../components/SectionDoubleImageText'

export default {
  name: 'Quotes',
  components: {
    SectionImageText,
    SectionDoubleImageText
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
