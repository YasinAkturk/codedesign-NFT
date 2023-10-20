<template>
  <div class="flex flex-col gap-[40px] w-full px-[50px] my-[100px] items-center">
    <span class="font-bold text-white text-[32px]">CATEGORIES</span>
    <div class="grid grid-cols-4 gap-[10px]">
        <CategoriCard v-for="item in list" :image="item.image" :title="item.title"/>
    </div>
  </div>
</template>

<script setup>
import CategoriCard from "./card/CategoriCard.vue";
import { ref } from "vue";

const list = ref([
  { image: "images/categories/categori1.png", title: "Art" },
  { image: "images/categories/categori2.png", title: "Collection" },
  { image: "images/categories/categori3.png", title: "Domain Name" },
  { image: "images/categories/categori4.png", title: "Music" },
  { image: "images/categories/categori5.png", title: "Photography" },
  { image: "images/categories/categori6.png", title: "Sport" },
  { image: "images/categories/categori7.png", title: "Trading Card" },
  { image: "images/categories/categori8.png", title: "Utility" },
]);
</script>

<style lang="scss" scoped></style>
