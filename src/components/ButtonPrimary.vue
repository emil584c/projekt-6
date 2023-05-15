<script setup>
    defineProps({
    buttonText: String,
  });
</script>

<template>
    <div class=" bg-cream-primary p-[5px] absolute right-5 bottom-5 z-10 w-fit self-end duration-100 hover:scale-95">
        <button class="border-solid border-[1px] border-border-black px-5 py-2 min-w-[160px]">{{ buttonText }}</button>
    </div>
</template>