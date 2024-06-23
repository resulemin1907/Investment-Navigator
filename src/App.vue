<template>
    <div :class="{ dark: isDarkMode }">
        <Header @toggle-dark-mode="toggleDarkMode" v-if="!isLoginPage" />
        <NewsSlider v-if="!isLoginPage" />
        <router-view></router-view>
        <Footer v-if="!isLoginPage" />
        <ScrollToTop />
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import NewsSlider from "./components/NewsSlider.vue";
import ScrollToTop from "./components/ScrollToTop.vue";

export default {
    name: "App",
    components: {
        Header,
        Footer,
        NewsSlider,
        ScrollToTop,
    },
    data() {
        return {
            isDarkMode: false,
        };
    },
    computed: {
        isLoginPage() {
            return this.$route.path === "/login";
        },
    },
    methods: {
        toggleDarkMode() {
            this.isDarkMode = !this.isDarkMode;
            if (this.isDarkMode) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        },
    },
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/css/flag-icon.min.css");
</style>
