<!-- Abasin Skriver -->
<script setup>
import buttonPrimary from './ButtonPrimary.vue'

</script>

<template>
    <section class=" bg-cream-primary">
        <div class="flex-auto flex-col items-start justify-center py-8 max-w-[330px] mx-auto md:flex-row md:max-w-content-width ">

                <div class="flex flex-col md:flex-row-reverse md:justify-between">
                    <div class=" bg-green-primary w-mobilebox-width h-mobilelongbox-height md:h-mobilebox-height bg-center flex flex-col justify-center p-[10px] md:w-full md:max-w-longbox-width">
                        <div class="border-solid border-[1px] border-border-white w-full h-full p-6 flex flex-col justify-center relative">
                            <h3>BESTILLINGER</h3>
                            <p class=" mb-3 max-w-[386px]">Ved bestilling af håndmadder, ølsmagninger eller andre arrangementer foregår bestillingen på vores Facebook Messenger.</p>
                            <p class=" text-base font-medium">ALLE BESTILLINGER SKER OVER MESSENGER</p>
                            <buttonPrimary buttonText="BESTIL"/>
                        </div>
                    </div>
                    <div class="bg-[url('../assets/images/placeholders/menufoto.jpg')] bg-cover w-mobilebox-width h-mobilebox-height bg-center flex flex-col justify-center pl-5 md:w-box-width"></div>
                </div>

                <div class="flex flex-col md:flex-row md:justify-between">
                    <div class=" bg-brown-primary w-mobilebox-width h-mobilelongbox-height md:h-mobilebox-height bg-center flex flex-col justify-center p-[10px] md:w-full md:max-w-longbox-width">
                
                        <div class="border-solid border-[1px] border-border-white w-full h-full p-6 flex flex-col justify-center relative">
                            <h3>SPØRGSMÅL?</h3>
                            <p class=" mb-3 max-w-[386px]">Hvis du har spørgsmål eller forespørgsler udover bestilling af ølsmagning, håndmadder eller arrangement, kan du kontakte os på følgende muligheder.</p>
                            <p class=" text-base font-medium">BORDRESERVATION ER IKKE MULIGT.</p>
                            <div class="bg-border-white w-full md:max-w-content-width h-[1px] my-2"></div>
                            <p class="mb-1 md:mb-3 ">+45 63 11 01 10</p>
                            <p class="mb-1 md:mb-3 ">carlsens@carlsens.dk</p>
                            <p class="mb-1 md:mb-3 ">Hunderupvej 19, 5000 Odense C</p>
                        </div>
                     </div>
                     <div class="bg-[url('../assets/images/placeholders/menufoto.jpg')] bg-cover w-mobilebox-width h-mobilebox-height bg-center flex flex-col justify-center gap-6 pl-5 md:w-box-width"></div>
                </div>
        </div>
    </section>
</template>