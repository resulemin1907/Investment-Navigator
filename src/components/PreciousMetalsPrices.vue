<template>
  <div>
    <exchange></exchange>
    <div class="container mx-auto px-4 py-8 relative bottom-24 cursor-pointer">
      <h1 class="text-2xl font-bold mb-4">Kıymetli Maden Fiyatları</h1>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white">
          <thead class="bg-gray-200">
            <tr>
              <th class="py-2 px-5 border-b">Sembol</th>
              <th class="py-2 px-5 border-b">Son</th>
              <th class="py-2 px-5 border-b">Fark %</th>
              <th class="py-2 px-5 border-b">Fark</th>
              <th class="py-2 px-5 border-b">Açılış</th>
              <th class="py-2 px-5 border-b">Alış</th>
              <th class="py-2 px-5 border-b">Satış</th>
              <th class="py-2 px-5 border-b">G. Yüksek</th>
              <th class="py-2 px-5 border-b">G. Düşük</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in preciousMetalsPrices" :key="index">
              <td class="py-2 px-4 border-b">
                {{ item.symbol }}
              </td>
              <td class="py-2 px-4 border-b">
                {{ item.lastPrice }}
              </td>
              <td
                class="py-2 px-4 border-b"
                :class="{
                  'text-green-500': item.changePercent >= 0,
                  'text-red-500': item.changePercent < 0,
                }"
              >
                %{{ item.changePercent }}
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
  </div>
</template>

<script>
import { mapState } from "vuex";
import Exchange from "./exchange.vue";

export default {
  name: "PreciousMetalsPrices",
  components: {
    Exchange,
  },
  computed: {
    ...mapState(["preciousMetalsPrices"]),
  },
};
</script>

<style scoped>
/* Stil kodları buraya eklenecek */
</style>
