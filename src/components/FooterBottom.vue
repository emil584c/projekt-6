<!-- Abasin skriver -->
<script setup>

</script>

<template>

    <footer class=" bg-brown-primary">
        <div class="flex flex-col items-start justify-center py-8 max-w-[330px] mx-auto md:flex-row md:max-w-10xl">
            
                <div class="md:flex-col md:mr-32">
                    <img class="justify-item-start" src="../assets/images/placeholders/cklogo.svg" alt="carlsens logo">
                    <div class="bg-border-white w-full md:max-w-content-width h-[2px] my-2"></div>
                    <p>Kom forbi Carlsens Kvarter, og få en iskold fadøl på Odenses hyggeligste ølbar. Vi garanterer en unik smagsoplevelse og højt humør på alle dagens tidspunkter.</p>
                </div>

                <div class="md:flex-col md:mr-32">
                    <h2 class="text-border-white mt-9 mb-2 md:mt-12 md:mb-4.5">NYTTIGE LINKS</h2>
                    <div class="mb-1 md:mb-3">
                        <router-link to="/"><p>Forside</p></router-link>
                        <router-link to="/"><p>Vi tilbyder</p></router-link>
                        <router-link to="/about"><p>Hvem er vi</p></router-link>
                        <router-link to="/contact"><p>Kontakt os</p></router-link>
                    </div>
                </div>

                <div class="flex-col md:mr-32">
                    <h2 class="text-border-white mt-9 mb-2 md:mt-12 md:mb-4.5">INFORMATION</h2>
                        <div class="mb-1 md:mb-3">
                            <p>Hunderupvej 19, 5000 Odense C</p>
                            <p>+45 63 11 01 10</p>
                            <p>carlsens@carlsens.dk</p>
                        </div>
                </div>
                
                <div class="flex-col">
                    <h2 class="text-border-white mt-9 mb-2 md:mt-12 md:mb-4.5">ÅBNINGSTIDER</h2>
                    <div class="mb-1 md:mb-3">
                        <p>Man - Lør: 12:00 - 01:00</p>
                        <p>Søndag: 13:00 - 19:00</p>
                    </div>
                </div>
            

            <div class="bg-border-white w-full max-w-content-width h-[2px]"></div>
            <p class="mt-4">© 2023 Carlsens Kvarter</p>
        </div>
    </footer>
    
</template>