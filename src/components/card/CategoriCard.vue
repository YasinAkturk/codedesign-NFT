<template>
    <div class="flex flex-col p-[20px] gradiant rounded-[32px] gap-[20px] cursor-pointer">
        <img class="h-[226px] w-full rounded-[32px]" :src="image" alt="categori">
        <span class="font-bold text-white text-[20px] text-center">{{ title }}</span>
    </div>
</template>

<script setup>
const props = defineProps({
    image: { type: String },
    title: { type: String }
})
</script>

<style scoped>
.gradiant{
    background: linear-gradient(180deg, rgba(151, 71, 255, 0.47) -75.4%, rgba(210, 121, 245, 0.06) 100%);
}
</style>