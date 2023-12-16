<template>
    <div class="flex flex-col gap-[40px] w-full px-[50px] my-[100px] items-center">
        <span class="font-bold text-white text-[32px]">TOP SELLER</span>
        <div class="flex gap-[40px]">
            <TopSellerCard v-for="item in list" :image="item.image" :title="item.title" />
        </div>
    </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
const TopSellerCard = defineAsyncComponent(() =>
  import('./card/TopSellerCard.vue')
)
import { ref } from "vue";
const list = ref([
    { image: "/images/topSeller/seller1.svg", title: "RizKhen" },
    { image: "/images/topSeller/seller2.svg", title: "Jhiehe" },
    { image: "/images/topSeller/seller3.svg", title: "Fukiep" },
    { image: "/images/topSeller/seller4.svg", title: "Hags" },
    { image: "/images/topSeller/seller5.svg", title: "Berhans" },
    { image: "/images/topSeller/seller6.svg", title: "Abdliie" },
    { image: "/images/topSeller/seller7.svg", title: "Wetur Art" },
    { image: "/images/topSeller/seller8.svg", title: "Pokko" },
])
</script>