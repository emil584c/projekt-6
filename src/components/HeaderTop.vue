<!-- Emil skriver -->
<script setup>

</script>

<template>
    <header class=" flex md:flex-col justify-between px-4 items-center md:px-0 md:justify-center pt-5 pb-3 bg-cream-primary">
        <router-link to="/"><img class=" md:mb-6 cursor-pointer" src="../assets/images/logos/logo_black.svg" alt="carlsens logo"></router-link>
        <div class=" hidden md:flex bg-black-primary w-full max-w-content-width h-[2px] mb-1"></div>
        <div class=" hidden md:flex bg-black-primary w-full max-w-content-width h-1 mb-3"></div>
        
        <nav class="h-screen md:h-fit">
            <ul class=" md:flex gap-6">
                <router-link to="/"><li class=" text-black text-base hover:underline">FORSIDE</li></router-link>
                <router-link to="/"><li class=" text-black text-base hover:underline">VI TILBYDER</li></router-link>
                <router-link to="/about"><li class=" text-black text-base hover:underline">HVEM ER VI</li></router-link>
                <router-link to="/contact"><li class=" text-black text-base hover:underline">KONTAKT</li></router-link>
            </ul>
        </nav>
        <div class=" hidden md:flex bg-black-primary w-full max-w-content-width h-[2px] mt-3"></div>

        <!-- hamburger menu -->
        <div class=" flex flex-col gap-1 md:hidden">
            <div class=" w-8 h-1 bg-black-primary"></div>
            <div class=" w-8 h-1 bg-black-primary"></div>
            <div class=" w-8 h-1 bg-black-primary"></div>
        </div>
    </header>
</template>