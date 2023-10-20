<template>
  <div class="flex flex-col">
    <div
      class="h-[308px] bg-[#5C3EAF33] px-[50px] py-[60px] grid grid-cols-3 gap-[10px]"
    >
      <div class="w-[440px] flex flex-col gap-[40px]">
        <div class="flex items-end cursor-pointer">
          <img src="/images/logoLight.svg" alt="logo" />
          <span class="text-[26px] text-[#fff] font-black leading-normal"
            >MahyuNFT</span
          >
        </div>
        <span class="font-medium text-[18px] text-white leading-[32px]">
          MahyuNFT is the largest NFTs Marketplace of Etherium (ETH). Buy, sell,
          and discover exclusive digital items.
        </span>
      </div>
      <div class="w-[440px] flex flex-col gap-[20px]">
        <span
          v-for="item in faqs"
          class="font-bold text-[18px] text-white leading-[32px] underline cursor-pointer"
          >{{ item }}</span
        >
      </div>
      <div class="w-[440px] flex flex-col gap-[20px]">
        <span class="font-bold text-[18px] text-white leading-[32px]"
          >Subscribe MahyuNFT for newsletter right now!</span
        >
        <div class="flex gap-[10px]">
          <input
            class="w-[328px] h-[60px] rounded-[11px] border border-solid border-white bg-[#ffffff66] placeholder:regular placeholder:text-[#D9D9D9] placeholder:text-[18px] font-regular text-[18px] text-[#D9D9D9] p-[20px] outline-none"
            @click="email = ''"
            type="text"
            placeholder="Insert your email here"
            v-model="email"
          />
          <button
            @click="email = ''"
            class="w-[103px] h-[60px] bg-primary rounded-[11px] flex justify-center items-center"
          >
            <span class="text-medium text-[18px] text-white">Sent</span>
          </button>
        </div>
      </div>
    </div>
    <div
      class="h-[61px] bg-primary flex justify-between items-center px-[50px]"
    >
      <span class="font-regular text-[18px] text-white"
        >© 2023 Mahyu.my.id</span
      >
      <div class="flex gap-[30px]">
        <span class="font-regular text-[18px] text-white cursor-pointer"
          >Privacy Policy</span
        >
        <span class="font-regular text-[18px] text-white cursor-pointer"
          >Terms of Service</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("Insert your email here");
const faqs = ref([
  "About us",
  "Frequently Asked Questions (FAQ)",
  "Help Center",
  "How to Buy and Sell",
]);
</script>

<style lang="scss" scoped></style>
