<script setup>
    defineProps({
    buttonText: String,
  });
</script>

<template>
    <a class="w-fit self-center" href="https://m.me/Carlsenskvarter" target="_blank">
        <div class=" bg-cream-primary p-[5px] mt-6 md:mt-3 md:self-start lg:absolute lg:right-5 lg:bottom-5 lg:z-10 w-fit lg:self-end duration-100 hover:scale-95">
            <button class="border-solid border-[1px] border-border-black px-5 py-2 min-w-[160px]">{{ buttonText }}</button>
        </div>
    </a>
</template>