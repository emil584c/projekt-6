<!-- Abasin skriver -->
<script setup>

</script>

<template>

    <footer class=" bg-brown-primary">
        <div class="flex flex-col items-start justify-center py-8 max-w-[330px] mx-auto md:flex-row md:max-w-content-width md:justify-between ">
            
                <div class="md:flex-col max-w-[240px]">
                    <img class="justify-item-start mt-9" src="../assets/images/logos/logo_white.svg" alt="carlsens logo">
                        <div class="bg-border-white w-full md:max-w-content-width h-[2px] my-2"></div>
                            <p>Kom forbi Carlsens Kvarter, og få en iskold fadøl på Odenses hyggeligste ølbar. Vi garanterer en unik smagsoplevelse og højt humør på alle dagens tidspunkter.</p>
                </div>

                <div class="md:flex-col md:max-w-[175px]">
                    <h2 class="text-border-white mt-9 mb-2 md:text-2xl md:mt-12 md:mb-5">NYTTIGE LINKS</h2>
                        <router-link to="/"><p class="mb-1 md:mb-3 text-lg hover:underline">Forside</p></router-link>
                        <router-link to="/"><p class="mb-1 md:mb-3 text-lg hover:underline">Vi tilbyder</p></router-link>
                        <router-link to="/about"><p class="mb-1 md:mb-3 text-lg hover:underline">Hvem er vi</p></router-link>
                        <router-link to="/contact"><p class="mb-1 md:mb-3 text-lg hover:underline">Kontakt os</p></router-link>
                </div>

                <div class="flex-col max-w-[177px]">
                    <h2 class="text-border-white text-2xl mt-9 mb-2 md:mt-12 md:mb-5">INFORMATION</h2>
                        <p class="mb-1 md:mb-3 text-lg">Hunderupvej 19, 5000 Odense C</p>
                        <p class="mb-1 md:mb-3 text-lg">+45 63 11 01 10</p>
                        <p class="mb-1 md:mb-3 text-lg">carlsens@carlsens.dk</p>
                </div>
                
                <div class="flex-col max-w-[192px]">
                    <h2 class="text-border-white text-2xl mt-9 mb-2 md:mt-12 md:mb-5">ÅBNINGSTIDER</h2>
                        <p class="mb-1 md:mb-3 text-lg">Man - Lør: 12:00 - 01:00</p>
                        <p class="mb-1 md:mb-3 text-lg">Søndag: 13:00 - 19:00</p>
                </div>
            
        </div>

        <div class="flex flex-col justify-center pb-8 max-w-[330px] mx-auto md:max-w-content-width">
            <div class="bg-border-white w-full md:max-w-content-width h-[2px]"></div>
            <p class="mt-4 text-lg">© 2023 Carlsens Kvarter</p>
        </div>

    </footer>
    
</template>