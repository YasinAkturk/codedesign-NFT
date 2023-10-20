<template>
    <div class="w-fit mx-auto mb-[60px] flex gap-[123px]">
        <BigCard />
        <div class="flex flex-col gap-[30px] w-fit py-[40px]">
            <span class="font-bold text-[32px] text-white">New Auction</span>
            <div class="flex flex-col gap-[12px]">
                <SmallCard v-for="item in newAuctionList" :url="item.url" :title="item.title" :price="item.price" :time="item.time"/>
            </div>
            <div class="flex gap-[20px] w-full justify-end">
                <span class="font-medium text-white text-[16px] underline cursor-pointer">View All Auctions</span>
                <img class="cursor-pointer" src="/images/leftCircle.svg" alt="left">
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import BigCard from "./card/BigCard.vue";
import SmallCard from "./card/SmallCard.vue";

const newAuctionList = ref([
    { url: "/images/smallCard/sCard1.webp", title: "Somewhere Else: 094 - Palm Trees & Basketball", price: "0.5 ETH", time: "03:23:23" },
    { url: "/images/smallCard/sCard2.webp", title: "DRIP #515", price: "0.7 ETH", time: "00:33:44" },
    { url: "/images/smallCard/sCard3.webp", title: "Bikes of Burden #28. Ribs.", price: "2.5 ETH", time: "01:22:08" },
    { url: "/images/smallCard/sCard4.webp", title: "Rizzo Collection #36", price: "1.2 ETH", time: "08:17:13" }
])
</script>

<style scoped>

</style>