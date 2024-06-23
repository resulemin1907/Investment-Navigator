<template>
    <div
        class="news-slider top-16 w-full flex items-center justify-between p-4 bg-gray-800 text-white z-60 cursor-pointer"
    >
        <button @click="prevNews" class="p-2">
            <i class="fas fa-chevron-left"></i>
        </button>
        <div class="flex-1 text-center px-4">
            <span class="font-bold mr-2">SON DAKİKA</span>
            <span>{{ currentNews }}</span>
        </div>
        <button @click="nextNews" class="p-2">
            <i class="fas fa-chevron-right"></i>
        </button>
        <router-link to="/all-news" class="ml-4 text-yellow-400"
            >Tüm Haberler</router-link
        >
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    name: "NewsSlider",
    data() {
        return {
            currentIndex: 0,
            interval: null,
        };
    },
    computed: {
        ...mapState(["news"]),
        currentNews() {
            return this.news.length > 0 ? this.news[this.currentIndex] : "";
        },
    },
    methods: {
        ...mapActions(["fetchNews"]),
        nextNews() {
            this.currentIndex = (this.currentIndex + 1) % this.news.length;
        },
        prevNews() {
            this.currentIndex =
                (this.currentIndex - 1 + this.news.length) % this.news.length;
        },
        startAutoSlide() {
            this.interval = setInterval(this.nextNews, 10000); // 10 saniyede bir haber değiştir
        },
        stopAutoSlide() {
            clearInterval(this.interval);
        },
    },
    created() {
        this.fetchNews();
        this.startAutoSlide();
    },
    beforeUnmount() {
        this.stopAutoSlide();
    },
};
</script>

<style scoped>
.news-slider {
    background-color: #2d3748;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}
button {
    background: none;
    border: none;
    cursor: pointer;
}
button i {
    font-size: 1.5rem;
    color: #f0e68c;
}
</style>
