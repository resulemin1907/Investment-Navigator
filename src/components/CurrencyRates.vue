<template>
  <exchange></exchange>

  <div class="container mx-auto px-4 py-8 relative bottom-24 cursor-pointer">
    <h1 class="text-2xl font-bold mb-4">Serbest Piyasa Kurları</h1>
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
            <th class="py-2 px-4 border-b relative right-5">Sembol</th>
            <th class="py-2 px-4 border-b relative right-5">Son</th>
            <th class="py-2 px-4 border-b relative right-5">Fark %</th>
            <th class="py-2 px-4 border-b relative right-5">Fark</th>
            <th class="py-2 px-4 border-b relative right-5">Açılış</th>
            <th class="py-2 px-4 border-b relative right-5">Alış</th>
            <th class="py-2 px-4 border-b relative right-5">Satış</th>
            <th class="py-2 px-4 border-b relative right-5">G. Yüksek</th>
            <th class="py-2 px-4 border-b relative right-5">G. Düşük</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in filteredCurrencyRates" :key="index">
            <td class="py-2 px-4 border-b">
              <div class="flex items-center">
                <font-awesome-icon :icon="item.flagIcon" class="flag-icon" />
                <div class="ml-2">
                  <span>{{ item.symbol }}</span>
                  <div class="text-sm text-gray-500">
                    {{ item.description }}
                  </div>
                </div>
              </div>
            </td>
            <td class="py-2 px-4 border-b">{{ item.price }}</td>
            <td
              class="py-2 px-4 border-b"
              :class="{
                'text-green-500': item.change >= 0,
                'text-red-500': item.change < 0,
              }"
            >
              %{{ item.change }}
            </td>
            <td class="py-2 px-4 border-b">
              {{ item.changeAmount }}
            </td>
            <td class="py-2 px-4 border-b">
              {{ item.openingPrice }}
            </td>
            <td class="py-2 px-4 border-b">
              {{ item.buyingPrice }}
            </td>
            <td class="py-2 px-4 border-b">
              {{ item.sellingPrice }}
            </td>
            <td class="py-2 px-4 border-b">
              {{ item.highestPrice }}
            </td>
            <td class="py-2 px-4 border-b">
              {{ item.lowestPrice }}
            </td>
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
  name: "CurrencyRates",
  data() {
    return {
      search: "",
    };
  },
  computed: {
    ...mapState(["currencyRates"]),
    filteredCurrencyRates() {
      return this.currencyRates.filter(
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
