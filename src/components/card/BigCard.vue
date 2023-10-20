<template>
    <div class="w-[553px] h-[816px] p-[40px] rounded-[32px] gradiant">
        <div class="w-full flex justify-between items-center">
            <div class="flex gap-[12px]">
                <img src="images/flame.png" alt="flame">
                <span class="font-bold text-[32px] text-white">Item Ending Soon</span>
            </div>
            <img class="cursor-pointer" src="/images/leftCircle.svg" alt="left">
        </div>
        <div class="mt-[30px] mb-[40px]">
            <img class="w-full rounded-[12px] mb-[40px]" src="images/endingImage.webp" alt="">
            <div class="flex flex-col mb-[30px]">
                <span class="font-bold text-[26px] text-white">Hurricane (Common Body)</span>
                <div class="flex gap-[12px]">
                    <span class="font-medium text-[20px] text-white">by Spider Tanks</span>
                    <img src="images/approved.svg" alt="approved">
                </div>
            </div>
            <div class="w-full flex justify-between">
                <div class="flex flex-col">
                    <span class="font-medium text-[20px] text-[#9747FF]">Current Bid</span>
                    <span class="font-bold text-[32px] text-white tracking-[1.28px]">0.0079 ETH</span>
                </div>
                <div class="flex flex-col">
                    <span class="font-medium text-[20px] text-[#9747FF]">Remaining Time</span>
                    <span class="font-bold text-[32px] text-white tracking-[1.28px]">12:34:02</span>
                </div>
            </div>
        </div>
        <div class="w-full flex gap-[60px]">
            <button class="w-[207px] h-[60px] bg-primary rounded-[24px] flex justify-center items-center">
                    <span class="text-medium text-[18px] text-white">Place a Bid</span>
            </button>
            <button class="w-[207px] h-[60px] gradiant-button rounded-[24px] border border-solid border-white flex justify-center items-center">
                    <span class="text-medium text-[18px] text-white">View Artwork</span>
            </button>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.gradiant{
    background: linear-gradient(180deg, rgba(151, 71, 255, 0.47) -75.4%, rgba(210, 121, 245, 0.06) 100%);
}
.gradiant-button{
    background: linear-gradient(199deg, rgba(255, 255, 255, 0.26) -100.6%, rgba(255, 255, 255, 0.00) 137.27%);
}
</style>