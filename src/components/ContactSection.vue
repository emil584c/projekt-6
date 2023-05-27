<!-- Abasin Skriver -->
<script setup>
import buttonPrimary from './ButtonPrimary.vue'
</script>

<template>
    <section class=" bg-cream-primary p-1">
        <div class="flex-auto flex-col items-start justify-center max-w-[330px] mx-auto md:flex-row md:max-w-content-width ">
            <div class="flex flex-col md:flex-row-reverse md:justify-between">
                <div class=" bg-green-primary w-mobilebox-width h-mobilelongbox-height md:h-box-width bg-center flex flex-col justify-center p-[10px] md:w-full md:max-w-longbox-width">
                    <div class="border-solid border-[1px] border-border-white w-full h-full p-6 flex flex-col justify-center relative">
                            <h3>BESTILLINGER</h3>
                            <p class=" mb-2 max-w-[386px] md:max-w-full">Ved bestilling af håndmadder, ølsmagninger eller andre arrangementer foregår bestillingen på vores Facebook Messenger.</p>
                            <p class=" mb-8 max-w-[386px] md:max-w-full">Gavekort kan kun købes fysisk i baren.</p>
                            <p class=" text-base font-medium">ALLE BESTILLINGER SKER OVER MESSENGER</p>
                            <buttonPrimary buttonText="BESTIL"/>
                    </div>
                </div>
                <img src="../assets/images/bestillinger_carlsens_kvarter.jpg" class=" w-mobilebox-width h-mobilebox-height bg-center md:w-box-width object-cover my-4 md:my-0" alt="billede af tjener der hælder øl op">
            </div>

            <div class="flex flex-col md:flex-row md:justify-between md:my-[40px]">
                <div class=" bg-brown-primary w-mobilebox-width h-mobilelongbox-height md:h-box-width bg-center flex flex-col justify-center p-[10px] md:w-full md:max-w-longbox-width">               
                    <div class="border-solid border-[1px] border-border-white w-full h-full p-6 flex flex-col justify-center ">
                            <h3>SPØRGSMÅL?</h3>
                            <p class=" mb-3 max-w-[386px] md:max-w-full">Hvis du har spørgsmål eller forespørgsler udover bestilling af ølsmagning, håndmadder eller arrangement, kan du kontakte os på følgende muligheder.</p>
                            <p class=" text-base font-medium">BORDRESERVATION ER IKKE MULIGT.</p>
                            <div class="bg-border-white w-full md:max-w-content-width h-[1px] my-2"></div>
                        <div class="flex flex-col lg:flex-row lg:justify-between">
                            <div class="flex flex-row mb-4 lg:flex-col  items-center">
                                <img class="justify-item-start max-w-[25px] h-[25px] mr-1 lg:mr-0 lg:max-w-[40px] lg:h-[40px] lg:my-7 lg:justify-item-center" src="../assets/images/kontakt/mail.svg" alt="mail icon">
                                <p class="mb-1 lg:mb-3 ">carlsens@carlsens.dk</p>
                            </div>
                            <div class="flex flex-row mb-4 lg:flex-col  items-center">
                                <img class="justify-item-start max-w-[25px] mr-1 lg:mr-0 lg:max-w-[40px] lg:my-7 lg:justify-item-center" src="../assets/images/kontakt/tele.svg" alt="telephone icon">
                                <p>+45 63 11 01 10</p>
                            </div>
                            <div class="flex flex-row mb-4 lg:flex-col items-center">
                                <img class="justify-item-start max-w-[25px] h-[40px] pl-2 pr-1 mr-1 lg:mr-0 lg:max-w-[40px] lg:h-[40px] lg:my-7 lg:justify-item-center" src="../assets/images/kontakt/pin.svg" alt="pin icon">
                                <p class="mb-1 lg:mb-3 ">Hunderupvej 19, 5000 Odense C</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" bg-brown-primary my-[20px] w-mobilebox-width h-[363] bg-center flex flex-col justify-center p-[10px] md:my-[0px] md:w-full md:max-w-[363px]">               
                    <div class="border-solid border-[1px] border-border-white w-full h-full p-6 flex flex-col justify-center ">
                        <ul class="flex flex-col gap-1">
                            <h3>ÅBNINGSTIDER</h3>
                            <li>MANDAG - LØRDAG</li>
                            <li>12:00 - 01:00</li>
                            <li>SØNDAG</li>
                            <li>13:00 - 19:00</li>
                        </ul>
                        <ul class=" mt-2">
                            <h3>SOCIALE MEDIER</h3>
                            <a href="https://www.facebook.com/CarlsensKvarter" class="cursor-pointer" target="_blank">
                                <div class="flex flex-row mb-4 md:flex-row  md:mb-3 items-center">
                                    <img class="justify-item-start max-w-[25px] h-[25px] mr-1 md:mr-2 md:max-w-[25px] md:h-[25px] md:my-1 md:justify-item-center" src="../assets/images/kontakt/fb.svg" alt="facebook icon">
                                    <li>FACEBOOK</li>
                                </div>
                            </a>
                            <a href="https://www.instagram.com/carlsenskvarter/" class="cursor-pointer" target="_blank">
                                <div class="flex flex-row mb-4 md:flex-row  md:mb-3 items-center">
                                    <img class="justify-item-start max-w-[25px] h-[25px] mr-1 md:mr-2 md:max-w-[25px] md:h-[25px] mt:my-1 md:justify-item-center" src="../assets/images/kontakt/insta.svg" alt="instagram icon">
                                    <li>INSTAGRAM</li>
                                </div>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>