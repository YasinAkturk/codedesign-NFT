<template>
    <div class="px-[50px] py-[10px] bg-[#141414] fixed top-0 z-[999] w-full flex justify-between items-center">
        <div class="flex items-end cursor-pointer">
            <img src="/images/logo.svg" alt="logo">
            <span class="text-[26px] text-[#fff] font-black leading-normal">MahyuNFT</span>
        </div>
        <ul class="flex gap-[40px]">
            <li v-for="(item, index) in menuList" :key="index" class="text-medium text-[18px] text-[#fff] cursor-pointer">{{ item }}</li>
        </ul>
        <button class="w-[184px] h-[60px] bg-primary rounded-[24px] flex justify-center items-center">
            <div class="flex gap-[12px]">
                <img src="/images/Wallet.svg" alt="wallet">
                <span class="text-medium text-[18px] text-[#fff]">My Wallet</span>
            </div>
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const menuList = ref(['Auction','Community','Explore']);
</script>

<style lang="scss" scoped>

</style>