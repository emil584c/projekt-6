<!-- Emil Skriver -->
<script setup>
</script>

<template>
    <section class=" bg-cream-primary pt-12 px-3">
        <div class="max-w-[330px] md:max-w-content-width mx-auto">
            <h2>HVEM ER CARLSENS KVARTER</h2>
        </div>
        <div class=" px-4 md:px-0 md:max-w-content-width mx-auto w-full justify-center">
            <div class="flex flex-col gap-4 md:gap-10">
                <div class="flex flex-col gap-4 md:gap-10 items-center justify-center md:items-stretch md:flex-row md:justify-between max-w-[330px] mx-auto md:mx-0 md:max-w-content-width overflow-hidden">
                    <div class="bg-[url('../assets/images/holdet_bag_carlsen_kvarter.jpg')] bg-cover w-mobilebox-width h-mobilebox-width md:h-mobilebox-height bg-center flex justify-center items-end p-10 md:max-w-longbox-width md:w-full md:justify-end md:p-8">
                        <router-link to="/about">
                            <div class=" bg-cream-primary p-[5px] relative z-10 w-fit hover:scale-95 duration-100">
                                <button class="border-solid border-[1px] border-border-black px-5 py-2">LÆR OS AT KENDE</button>
                            </div>
                        </router-link>
                    </div>
                    <div class="bg-[url('../assets/images/aabningstider_carlsens_kvarter.jpg')] bg-cover w-mobilebox-width h-mobilebox-width md:h-mobilebox-height flex flex-col justify-center gap-6 pl-5 md:w-box-width scale-105">
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

                <div class="flex flex-col gap-4 md:gap-10 items-center md:items-stretch md:flex-row md:justify-between">
                    <img src="../assets/images/facade_carlsens_kvarter.jpg" class=" w-mobilebox-width h-mobilebox-height bg-center md:w-box-width object-cover" alt="billede af tjener der holder øl">
                    <div class=" bg-brown-primary md:bg-[url('../assets/images/service_paa_carlsens_kvarter.jpg')] bg-cover w-mobilebox-width h-mobilelongbox-height md:h-mobilebox-height bg-center flex flex-col justify-center p-10 md:w-full md:max-w-longbox-width">
                       <h3>SERVICE I FOKUS</h3> 
                       <p class=" mb-2 max-w-[386px]">Hos Carlsens Kvarter er servicen i samme kvalitet som vores øl. Når du har fundet en siddeplads, kommer vores tjenere hen og hjælper dig med at finde den helt rigtige øl.</p>
                       <p class="max-w-[386px]">Vi spiller kun lav musik, så der er god plads til samtalen og den hyggelige stemning.</p>
                    </div>
                </div>

                <div class="flex gap-4 flex-col-reverse items-center md:items-stretch md:gap-10 md:flex-row md:justify-between">
                    <div class=" bg-brown-primary md:bg-[url('../assets/images/udvalg_af_oel_carlsens_kvarter.jpg')] bg-cover w-mobilebox-width h-mobilelongbox-height md:h-mobilebox-height bg-center flex flex-col justify-center p-10 md:w-full md:max-w-longbox-width">
                        <h3>UDVALG AF ØL</h3> 
                        <p class=" mb-2 max-w-[386px]">Vi elsker øl og tilbyder hele 21 øl på fad, og over 100 forskellige øl på flaske.</p>
                        <p class=" mb-2 max-w-[386px]">Vi har øl til hver en smag, dog er belgisk bryg vores specialitet. Du kan få alt fra frugtige Lambic til Trappistøl, som alle er nøje udvalgte.</p>
                        <p class="max-w-[386px]">Du kan selvfølgelig også altid få en kold Albani på flaske eller fad.</p>
                     </div>
                     <img src="../assets/images/menu_carlsens_kvarter.jpg" class=" w-mobilebox-width h-mobilebox-height bg-center md:w-box-width object-cover" alt="billede af tjener der holder øl">
                </div>

            </div>
        </div>
    </section>
</template>