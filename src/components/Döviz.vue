<template>
  <GoldPrices></GoldPrices>
  <PreciousMetalsPrices></PreciousMetalsPrices>
  <CurrencyRates></CurrencyRates>
</template>

<script>
import GoldPrices from "@/components/GoldPrices.vue";
import PreciousMetalsPrices from "@/components/PreciousMetalsPrices.vue";
import CurrencyRates from "@/components/CurrencyRates.vue";

export default {
  name: "Home",
  components: {
    GoldPrices,
    PreciousMetalsPrices,
    CurrencyRates,
  },
};
</script>

<style scoped>
/* Tailwind CSS classes kullanılacaktır */
</style>
