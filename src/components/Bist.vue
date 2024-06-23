<template>
  <div>
    <Bist100></Bist100>
    <Bist100Highlights></Bist100Highlights>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Bist100 from "@/components/Bist100.vue";
import Bist100Highlights from "@/components/Bist100Highlights.vue";

export default {
  name: "Home",
  components: {
    Bist100,
    Bist100Highlights,
  },
};
</script>

<style scoped>
/* Tailwind CSS classes kullanılacaktır */
</style>
