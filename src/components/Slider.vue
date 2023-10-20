<template>
  <div class="mx-[50px] mb-[40px]">
    <swiper
    :spaceBetween="30"
    :rewind="true"
    :autoplay="{
      delay: 500,
      disableOnInteraction: false,
    }"
    :loop="true"
    :effect="'fade'"
    :navigation="false"
    :modules="modules"
    class="mt-[80px] rounded-b-[20px] bg-origin-border"
  >
    <swiper-slide v-for="item in sliderImage">
      <div class="relative z-0 flex justify-center items-end pb-[60px] px-[337px] h-[602px]">
        <img class="absolute top-0 z-0" :src="item" alt="Slider">
        <div class="relative flex flex-col items-center gap-[44px]">
          <div class="font-inter text-[100px] leading-tight text-center text-transparent bg-clip-text cursor-default bg-gradient-to-b from-primary to-[#D279F5]">Collect your NFTs Here!</div>
          <div class="flex justify-center items-center mx-[53px] bg-search w-[360px] h-[56px] rounded-[40px] border border-width border-solid outline-0 px-5">
              <div class="flex gap-[12px]">
                  <img src="/images/Search.svg" alt="search">
                  <span class="font-medium text-[#d9d9d9b3] text-[16px] select-none cursor-text">Find your NFT</span>
              </div>
          </div>
      </div>
      </div>
    </swiper-slide>
   <!--  <div :class="`flex justify-center pb-[60px] px-[337px] items-end bg-[url('${item}')] bg-cover`">
      <div class="flex flex-col items-center gap-[44px]">
          <div class="font-inter text-[100px] leading-tight text-center text-transparent bg-clip-text bg-gradient-to-b from-primary to-[#D279F5]">Collect your NFTs Here!</div>
          <div class="flex justify-center items-center mx-[53px] bg-search w-[360px] h-[56px] rounded-[40px] border border-width border-solid outline-0 px-5">
              <div class="flex gap-[12px]">
                  <img src="/images/Search.svg" alt="search">
                  <span class="font-medium text-[#d9d9d9b3] text-[16px] select-none cursor-text">Find your NFT</span>
              </div>
          </div>
      </div>
  </div> -->
  </swiper>
  </div>
</template>
<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/effect-fade';
  import 'swiper/css/navigation';
  import { Autoplay, Navigation, EffectFade } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        sliderImage: ["/images/slider/slider1.webp","/images/slider/slider2.webp","/images/slider/slider3.webp","/images/slider/slider4.webp"],
        modules: [Autoplay, Navigation, EffectFade],
      };
    },
  };
</script>
<style>
.bg-search {
  background: linear-gradient(
    122deg,
    #fff -125.51%,
    rgba(255, 255, 255, 0) 114.64%
  );
}
</style>
