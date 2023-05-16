<!-- Emil Skriver -->   
<script setup>
import buttonPrimary from './ButtonPrimary.vue'

import { ref } from 'vue'
import { request } from "../datocms";

const data = ref(null);
const error = ref(null);
const loading = ref(true);
const bread = ref(null);
const beer1 = ref(null);
const beer2 = ref(null);

const INFORMATION_QUERY = `
  query information {
        information {
        id
        name
        priser{
        ... on PricingRecord{
            bread
            beerTasting1
            beerTasting2
            }
        }
    }
    }
`;

request({ query: INFORMATION_QUERY }).then(result => {
  data.value = result;
//   console.log(data.value.information.priser[0]);
  bread.value = data.value.information.priser[0].bread;
  beer1.value = data.value.information.priser[0].beerTasting1;
  beer2.value = data.value.information.priser[0].beerTasting2;
}).catch(e => {
  error.value = e;
}).finally(() => {
  loading.value = false;
});
</script>

<template>
    <section class=" bg-cream-primary pt-12">
        <div class=" max-w-sm px-4 md:px-0 md:max-w-content-width mx-auto">
            <h2>VI TILBYDER</h2>
            <div class="flex flex-col gap-4 md:gap-10">

                <div class="flex gap-4 flex-col-reverse md:gap-10 md:flex-row md:justify-between">
                    <img src="../assets/images/bestillinger_carlsens_kvarter.jpg" class=" w-mobilebox-width h-mobilebox-height bg-center md:w-box-width object-cover" alt="billede af tjener der holder øl">
                    <div class=" bg-brown-primary w-mobilebox-width h-mobilelongbox-height md:h-mobilebox-height bg-center flex flex-col justify-center p-[10px] md:w-full md:max-w-longbox-width">
                
                        <div class="border-solid border-[1px] border-border-white w-full h-full p-6 flex flex-col justify-center relative">
                            <h3>ØLSMAGNING</h3>
                            <p class=" mb-3 max-w-[386px]">Vi tilbyder ølsmagning på bestilling. Vores erfarne personale vil guide dig igennem smagning af 5 eller 10 forskellige kvalitetsøl, som hver især har sin egen unikke smag og historie.</p>
                            <ul>
                                <li>- {{ beer1 }}</li>
                                <li>- {{ beer2 }}</li>
                                <li>- Kan ikke bestilles til fredag og lørdag</li>
                                <li>- Mellem 10-25 personer</li>
                            </ul>
                            <buttonPrimary buttonText="BESTIL"/>
                        </div>
                     </div>
                </div>

                <div class="flex gap-4 flex-col-reverse md:gap-10 md:flex-row md:justify-between">
                    <div class=" bg-green-primary w-mobilebox-width h-mobilelongbox-height md:h-mobilebox-height bg-center flex flex-col justify-center p-[10px] md:w-full md:max-w-longbox-width">
                
                        <div class="border-solid border-[1px] border-border-white w-full h-full p-6 flex flex-col justify-center relative">
                            <h3>HÅNDMADDER</h3>
                            <p class=" mb-3 max-w-[386px]">Fredag og lørdag mellem kl 12 og 14 har du den gyldne mulighed for at nyde din frokost på Carlsens Kvarter. Vi tilbyder tre stykker friske håndmadder fra den lokale Allégårdens Slagter sammensat med en Albani Classic på fad.</p>
                            <ul class="mb-3">
                                <li>- {{ bread }}</li>
                                <li>- Reserver senest torsdag.</li>
                            </ul>
                            <p class=" text-base font-medium">SKAL BESTILLES PÅ VORES FACEBOOK MESSENGER</p>
                            <buttonPrimary buttonText="BESTIL"/>
                        </div>
                     </div>
                     <img src="../assets/images/haandmadder_carlsens_kvarter.jpg" class=" w-mobilebox-width h-mobilebox-height bg-center md:w-box-width object-cover" alt="billede af Carlsens Kvarters håndmadder">
                </div>

                <div class="flex gap-4 flex-col-reverse md:gap-10 md:flex-row md:justify-between">
                    <img src="../assets/images/arrangementer_carlsens_kvarter.jpg" class=" w-mobilebox-width h-mobilebox-height bg-center md:w-box-width object-cover" alt="billede af Carlsens Kvarters lokaler">
                    <div class=" bg-brown-primary w-mobilebox-width h-mobilelongbox-height md:h-mobilebox-height bg-center flex flex-col justify-center p-[10px] md:w-full md:max-w-longbox-width">
                        <div class="border-solid border-[1px] border-border-white w-full h-full p-6 flex flex-col justify-center relative">
                            <h3>ARRANGEMENTER</h3>
                            <p class=" mb-3 max-w-[386px]">På dage hvor der er kapacitet til det, tilbyder vi også vores lokaler til brug i forbindelse med arrangementer.</p>
                            <p class=" max-w-[386px]">Kontakt os for at høre mere om, hvad der er muligt.</p>
                            <buttonPrimary buttonText="KONTAKT OS"/>
                        </div>
                     </div>
                </div>

            </div>
        </div>
    </section>

</template>