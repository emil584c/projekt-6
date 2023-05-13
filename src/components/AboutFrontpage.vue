<!-- Emil Skriver -->
<script setup>
import buttonPrimary from './ButtonPrimary.vue'
</script>

<template>


    <section class=" bg-cream-primary pt-12">
        <div class=" max-w-sm px-4 md:max-w-content-width mx-auto">
            <h2>HVEM ER CARLSENS KVARTER</h2>
            <div class="flex flex-col gap-4 md:gap-10">

                <div class="flex flex-col gap-4 md:gap-10 md:flex-row md:justify-between">
                    <div class="bg-[url('../assets/images/placeholders/groupfoto.jpg')] bg-cover w-mobilebox-width h-mobilebox-height bg-center flex justify-center items-end p-10 md:max-w-longbox-width md:w-full md:justify-end md:p-8">
                        <div class=" bg-cream-primary p-[5px] relative z-10 w-fit">
                            <button class="border-solid border-[1px] border-border-black px-5 py-2">LÆR OS AT KENDE</button>
                        </div>
                    </div>
                    <div class="bg-[url('../assets/images/placeholders/servingfoto.jpg')] bg-cover w-mobilebox-width h-mobilebox-height bg-center flex flex-col justify-center gap-6 pl-5 md:w-box-width">
                        <ul class="flex flex-col gap-1">
                            <h3>ÅBNINGSTIDER</h3>
                            <li>MANDAG - LØRDAG</li>
                            <li>12:00 - 01:00</li>
                            <li>SØNDAG</li>
                            <li>13:00 - 19:00</li>
                        </ul>
                        <ul>
                            <h3>ADRESSE</h3>
                            <li>HUNDERUPVEJ 19</li>
                            <li>5000 ODENSE C</li>
                        </ul>
                    </div>
                </div>

                <div class="flex flex-col gap-4 md:gap-10 md:flex-row md:justify-between">
                    <div class="bg-[url('../assets/images/placeholders/outsidefoto.jpg')] bg-cover w-mobilebox-width h-mobilebox-height bg-center flex flex-col justify-center gap-6 pl-5 md:w-box-width">
                    </div>
                    <div class=" bg-brown-primary md:bg-[url('../assets/images/placeholders/servicefoto.jpg')] bg-cover w-mobilebox-width h-mobilelongbox-height md:h-mobilebox-height bg-center flex flex-col justify-center p-10 md:w-full md:max-w-longbox-width">
                       <h3>SERVICE I FOKUS</h3> 
                       <p class=" mb-2 max-w-[386px]">Hos Carlsens Kvarter er servicen ligeså god som vores øl. Vi har jeres ønsker som topprioritet, hvad end ganen begærer. Ønsker du en anbefaling, er vores ekspertise til rådighed.</p>
                       <p class="max-w-[386px]">Når du besøger os skal du ikke bruge tiden på at vente ved baren. Finder du et komfortabelt sted at sidde, så kommer vores tjenere hen og tager imod din bestilling.</p>
                    </div>
                </div>

                <div class="flex gap-4 flex-col-reverse md:gap-10 md:flex-row md:justify-between">
                    <div class=" bg-brown-primary md:bg-[url('../assets/images/placeholders/cheersfoto.jpg')] bg-cover w-mobilebox-width h-mobilelongbox-height md:h-mobilebox-height bg-center flex flex-col justify-center p-10 md:w-full md:max-w-longbox-width">
                        <h3>UDVALG AF ØL</h3> 
                        <p class=" mb-2 max-w-[386px]">Hos Carlsens Kvarter elsker vi øl, og er altid på udkik efter nye spændende varianter, til vores brede udvalg i baren.</p>
                        <p class="max-w-[386px]">Vi har mange forskellige slags øl til hver en smag, dog er belgisk bryg vores specialitet. Størstedelen af vores øl kan du vælge enten at få på flaske eller fad.</p>
                     </div>
                    <div class="bg-[url('../assets/images/placeholders/menufoto.jpg')] bg-cover w-mobilebox-width h-mobilebox-height bg-center flex flex-col justify-center gap-6 pl-5 md:w-box-width"></div>
                </div>

            </div>
        </div>
    </section>

</template>