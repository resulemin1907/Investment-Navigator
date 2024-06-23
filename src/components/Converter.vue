<template>
  <exchange></exchange>

  <div class="container mx-auto px-4 py-8 relative bottom-24 cursor-pointer">
    <h1 class="text-2xl font-bold mb-4">Çevirici</h1>
    <div>
      <button
        @click="category = 'currencies'"
        :class="['px-4 py-2', category === 'currencies' ? 'bg-gray-300' : 'bg-white']"
      >
        Döviz
      </button>
      <button
        @click="category = 'gold'"
        :class="['px-4 py-2', category === 'gold' ? 'bg-gray-300' : 'bg-white']"
      >
        Altın
      </button>
      <button
        @click="category = 'crypto'"
        :class="['px-4 py-2', category === 'crypto' ? 'bg-gray-300' : 'bg-white']"
      >
        Kripto
      </button>
    </div>
    <div class="mt-4">
      <div
        v-for="(item, index) in selectedRates"
        :key="index"
        class="flex items-center mb-4"
      >
        <input
          type="number"
          v-model.number="values[index]"
          class="px-4 py-2 border rounded w-full mr-2"
        />
        <select v-model="selectedSymbols[index]" class="px-4 py-2 border rounded">
          <option v-for="rate in selectedRates" :key="rate.symbol" :value="rate.symbol">
            {{ rate.symbol }}
          </option>
        </select>
      </div>
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
  name: "Converter",
  data() {
    return {
      category: "currencies",
      values: [1, 0, 0],
      selectedSymbols: ["TRY", "USD", "EUR"],
    };
  },
  computed: {
    ...mapState(["converterRates"]),
    selectedRates() {
      return this.converterRates[this.category] || [];
    },
  },
  watch: {
    values: {
      handler(newValues) {
        this.convertValues(newValues);
      },
      deep: true,
    },
    selectedSymbols: {
      handler() {
        this.convertValues(this.values);
      },
      deep: true,
    },
    category() {
      this.convertValues(this.values);
    },
  },
  methods: {
    convertValues(values) {
      const [baseValue, ...otherValues] = values;
      const baseSymbol = this.selectedSymbols[0];
      const baseRateObj = this.selectedRates.find((rate) => rate.symbol === baseSymbol);

      if (!baseRateObj || !baseRateObj.price) {
        console.error(`Base rate for symbol ${baseSymbol} not found or has no price`);
        return;
      }

      const baseRate = baseRateObj.price;

      otherValues.forEach((value, index) => {
        const targetSymbol = this.selectedSymbols[index + 1];
        const targetRateObj = this.selectedRates.find(
          (rate) => rate.symbol === targetSymbol
        );

        if (!targetRateObj || !targetRateObj.price) {
          console.error(
            `Target rate for symbol ${targetSymbol} not found or has no price`
          );
          return;
        }

        const targetRate = targetRateObj.price;
        this.values[index + 1] = (baseValue * baseRate) / targetRate;
      });
    },
  },
  mounted() {
    this.convertValues(this.values);
  },
};
</script>

<style scoped>
button {
  cursor: pointer;
  border: 1px solid #ccc;
  margin-right: 8px;
}
</style>
