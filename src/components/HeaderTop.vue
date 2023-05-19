<!-- Emil skriver -->
<script setup>
import { ref } from 'vue';
const showMobileMenu = ref (true);


const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

</script>

<template>
    <header>
        <nav class="flex md:flex-col justify-between px-4 items-center md:px-0 md:justify-center pt-5 pb-3 bg-cream-primary relative">
            <router-link to="/"><img class=" md:mb-6 cursor-pointer" src="../assets/images/logos/logo_black.svg" alt="carlsens logo"></router-link>
            <div class=" hidden md:flex bg-black-primary w-full max-w-content-width h-[2px] mb-1"></div>
            <div class=" hidden md:flex bg-black-primary w-full max-w-content-width h-1 mb-3"></div>
            <ul class=" hidden md:flex gap-6">
                <li class=" text-black text-base hover:underline">  <router-link to="/">FORSIDE</router-link></li>
                <li class=" text-black text-base hover:underline" @click="scrollToSection('product-section')"><router-link to="/">VI TILBYDER</router-link></li>
                <li class=" text-black text-base hover:underline"><router-link to="/about">HVEM ER VI</router-link></li>
                <li class=" text-black text-base hover:underline"><router-link to="/contact">KONTAKT</router-link></li>
            </ul>
            <div class=" hidden md:flex bg-black-primary w-full max-w-content-width h-[2px] mt-3"></div>

            <!-- mobile nav -->
            <div :class="{ hidden: showMobileMenu}" class="fixed z-30 top-0 left-0 bg-cream-primary w-full h-full pt-7 pl-8 ">
                <ul class=" flex flex-col gap-2 w-fit">
                    <router-link @click="showMobileMenu = !showMobileMenu" to="/"><img class=" mb-4 cursor-pointer" src="../assets/images/logos/logo_black.svg" alt="carlsens logo"></router-link>
                    <li class=" text-black text-lg hover:underline"><router-link @click="showMobileMenu = !showMobileMenu" to="/">FORSIDE</router-link></li>
                    <li class=" text-black text-lg hover:underline" @click="scrollToSection('product-section')"><router-link @click="showMobileMenu = !showMobileMenu" to="/">VI TILBYDER</router-link></li>
                    <li class=" text-black text-lg hover:underline"><router-link @click="showMobileMenu = !showMobileMenu" to="/about">HVEM ER VI</router-link></li>
                    <li class=" text-black text-lg hover:underline"><router-link @click="showMobileMenu = !showMobileMenu" to="/contact">KONTAKT</router-link></li>
                </ul>
            </div>

            <!-- hamburger menu -->
            <div  @click="showMobileMenu = !showMobileMenu" class="fixed right-4 top-4 flex flex-col gap-1 md:hidden cursor-pointer z-40 bg-cream-primary p-3">
                <div class=" w-8 h-1 bg-black-primary"></div>
                <div class=" w-8 h-1 bg-black-primary"></div>
                <div class=" w-8 h-1 bg-black-primary"></div>
            </div>
        </nav>
    </header>



    
</template>