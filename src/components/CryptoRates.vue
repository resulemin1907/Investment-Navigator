<template>
  <exchange></exchange>

  <div class="container mx-auto px-4 py-8 relative bottom-24 cursor-pointer">
    <h1 class="text-2xl font-bold mb-4">Kripto Fiyatları</h1>
    <input
      type="text"
      v-model="search"
      placeholder="Sembol kodu/şirket adı girin..."
      class="mb-4 px-4 py-2 border rounded w-full"
    />
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white">
        <thead class="bg-gray-200">
          <tr>
            <th class="py-2 px-4 border-b relative right-12">Sembol</th>
            <th class="py-2 px-4 border-b relative right-12">Son USD</th>
            <th class="py-2 px-4 border-b relative right-12">Son TRY</th>
            <th class="py-2 px-4 border-b relative right-12">Fark %</th>
            <th class="py-2 px-4 border-b relative right-12">Borsa</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in filteredCryptoRates" :key="index">
            <td class="py-2 px-4 border-b flex items-center">
              <div class="ml-2">
                <span>{{ item.symbol }}</span>
                <div class="text-sm text-gray-500">
                  {{ item.description }}
                </div>
              </div>
            </td>
            <td class="py-2 px-4 border-b">{{ item.priceUSD }}</td>
            <td class="py-2 px-4 border-b">{{ item.priceTRY }}</td>
            <td
              class="py-2 px-4 border-b"
              :class="{
                'text-green-500': item.changePercent >= 0,
                'text-red-500': item.changePercent < 0,
              }"
            >
              %{{ item.changePercent }}
            </td>
            <td class="py-2 px-4 border-b">{{ item.exchange }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import exchange from "./exchange.vue";

export default {
  components: {
    exchange,
  },
  name: "CryptoRates",
  data() {
    return {
      search: "",
    };
  },
  computed: {
    ...mapState(["cryptoRates"]),
    filteredCryptoRates() {
      return this.cryptoRates.filter(
        (rate) =>
          rate.symbol.toLowerCase().includes(this.search.toLowerCase()) ||
          rate.description.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
.flag-icon {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}
</style>
