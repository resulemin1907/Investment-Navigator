<template>
  <transition name="fade">
    <button
      v-show="isVisible"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
    >
      <i class="fas fa-arrow-up text-lg"></i>
    </button>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    handleScroll() {
      this.isVisible = window.scrollY > 300;
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
button i {
  transition: transform 0.2s;
}
button:hover i {
  transform: translateY(-1px);
}
</style>
