<template>
  <div class="swiper-container z-20 cursor-pointer">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(image, index) in images" :key="index">
        <img :src="image.src" :alt="`Slide ${index + 1}`" class="slide-img" />
      </swiper-slide>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, Pagination } from "swiper";
import image1 from "@/assets/borsa-haberi1.png";
import image2 from "@/assets/borsa-haberi2.png";
import image3 from "@/assets/borsa-haberi3.png";
import image4 from "@/assets/borsa-haberi4.png";
import image5 from "@/assets/borsa-haberi5.png";
import image6 from "@/assets/borsa-haberi6.png";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
      },
      images: [
        { src: image1 },
        { src: image2 },
        { src: image3 },
        { src: image4 },
        { src: image5 },
        { src: image6 },
      ],
    };
  },
};
</script>

<style>
.swiper-container {
  display: flex;
  margin: -23rem auto;
  justify-content: center;
  align-items: center;
  z-index: -1111111;
  overflow: hidden; /* Scroll olmaması için overflow hidden */
}

.swiper-slide img {
  width: 100%; /* Genişliği div kadar yapar */
  height: 100%; /* Yüksekliği div kadar yapar */
  object-fit: none; /* Resimleri div'e sığacak şekilde ayarlar */
  transition: transform 0.5s ease-in-out;
}

.swiper-slide-active img {
  transform: scale(1.05);
}

.swiper-button-prev,
.swiper-button-next {
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 8px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10; /* Ok işaretlerinin her zaman görünür olması için z-index ayarladık */
}

.swiper-button-prev {
  left: 10px;
}

.swiper-button-next {
  right: 10px;
}

.swiper-pagination-bullet-active {
  background-color: #007bff;
}
</style>
