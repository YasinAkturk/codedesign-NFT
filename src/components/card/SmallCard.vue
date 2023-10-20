<template>
    <div class="w-[440px] h-[140px] p-[20px] rounded-[12px] gradiant cursor-pointer">
        <div class="flex gap-[20px]">
            <img class="rounded-[12px] w-[100px] h-[100px]" :src="url" alt="nftCard">
            <div class="w-full pt-[15px] flex flex-col items-start">
                <span class="font-bold text-[18px] text-white">{{ title }}</span>
                <div class="w-full flex flex-row justify-between">
                    <span class="font-medium text-[16px] text-white">{{ price }}</span>
                    <span class="font-regular text-[16px] text-[#D279F5]">{{ time }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    url: { type: String },
    title: { type: String },
    price: { type: String },
    time: { type: String },
})
</script>

<style scoped>
.gradiant{
    background: linear-gradient(138deg, rgba(255, 255, 255, 0.43) -196.41%, rgba(255, 255, 255, 0.00) 122.07%);
}
</style>