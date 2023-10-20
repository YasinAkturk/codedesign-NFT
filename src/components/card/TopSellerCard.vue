<template>
    <div class="flex flex-col items-center gap-[16px]">
        <img class="w-[102px] h-[102px] rounded-[102px] select-none cursor-pointer" :src="image" alt="Top Seller NFT">
        <span class="font-medium text-white text-[20x] cursor-pointer">{{ title }}</span>
    </div>
</template>

<script setup>
const props = defineProps({
    image: { type: String },
    title: { type: String }
})
</script>

<style lang="scss" scoped>

</style>