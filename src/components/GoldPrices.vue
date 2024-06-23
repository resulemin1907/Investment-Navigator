<template>
  <exchange></exchange>

  <div class="container mx-auto px-4 py-8 relative bottom-24 cursor-pointer">
    <h1 class="text-2xl font-bold mb-6">Serbest Piyasa Altın Fiyatları</h1>
    <table class="min-w-full bg-white">
      <thead>
        <tr>
          <th class="py-2 px-4 border-b">Sembol</th>
          <th class="py-2 px-4 border-b">Son</th>
          <th class="py-2 px-4 border-b">Fark %</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(price, index) in goldPrices" :key="index">
          <td class="py-2 px-4 border-b flex items-center">
            <img src="@/assets/gold-icon.png" alt="Altın" class="h-8 w-10 mr-2" />
            <div>
              <div class="font-bold">{{ price.symbol }}</div>
              <div class="text-sm text-gray-500">
                {{ price.description }}
              </div>
            </div>
          </td>
          <td class="py-2 px-4 border-b">
            {{ price.price.toLocaleString("tr-TR") }}
          </td>
          <td
            class="py-2 px-4 border-b"
            :class="{
              'text-green-500': price.change >= 0,
              'text-red-500': price.change < 0,
            }"
          >
            %{{ price.change.toFixed(2) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import exchange from "./exchange.vue";

export default {
  name: "GoldPrices",
  components: {
    exchange,
  },
  data() {
    return {
      goldPrices: [
        {
          symbol: "Gram Altın (Serb.)",
          description: "Serbest Piyasa Altın TL/Gr",
          price: 2419.191,
          change: 0.39,
        },
        {
          symbol: "Ons/USD",
          description: "Altın Dolar",
          price: 1800,
          change: -0.25,
        },
        {
          symbol: "Ons/TL",
          description: "Altın Ons Türk Lirası",
          price: 15600,
          change: 0.15,
        },
        {
          symbol: "Çeyrek Altın",
          description: "Çeyrek Altın",
          price: 3.904,
          change: 0.4,
        },
        {
          symbol: "Yarım Altın",
          description: "Yarım Altın",
          price: 7.834,
          change: 0.3,
        },
        {
          symbol: "Cumhuriyet Altını",
          description: "Cumhuriyet Altını",
          price: 2400,
          change: 0.2,
        },
        {
          symbol: "Ata Altın",
          description: "Ata Altın",
          price: 16.209,
          change: 0.2,
        },
        {
          symbol: "Gram Altın (Spot)",
          description: "Spot Altın TL/Gr",
          price: 2420,
          change: 0.3,
        },
        {
          symbol: "Gram Has Altın (Serb.)",
          description: "Serbest 0.995 Has Altın TL/Gr",
          price: 2418,
          change: 0.2,
        },
        {
          symbol: "22 Ayar",
          description: "22 Ayar Bilezik Gram/TL",
          price: 2.191,
          change: 0.1,
        },
        {
          symbol: "Külçe/USD",
          description: "Külçe Altın (Dolar)",
          price: 1805,
          change: -0.2,
        },

        {
          symbol: "İki Buçuk Altın",
          description: "İkibuçuk Altın",
          price: 39.166,
          change: 0.35,
        },
        {
          symbol: "Beşli Altın",
          description: "Beşli Altın",
          price: 79.808,
          change: 0.4,
        },
        {
          symbol: "Ziynet Altını",
          description: "Ziynet Altın",
          price: 15.728,
          change: 0.25,
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Tailwind CSS kullanılacaktır */
table {
  width: 100%;
}
th,
td {
  text-align: left;
}
</style>
