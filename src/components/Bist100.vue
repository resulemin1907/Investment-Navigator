<template>
  <exchange></exchange>

  <div class="container mx-auto px-4 py-8 relative bottom-24 cursor-pointer">
    <h1 class="text-2xl font-bold mb-4">BIST 100 Hisseleri</h1>
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Hisse adı/şirket adı giriniz..."
      class="w-full px-4 py-2 border rounded mb-4"
    />
    <table class="min-w-full bg-white">
      <thead class="bg-gray-200">
        <tr>
          <th class="py-2 px-4 border-b relative right-6">Sembol</th>
          <th class="py-2 px-4 border-b relative right-6">Son</th>
          <th class="py-2 px-4 border-b relative right-6">Fark %</th>
          <th class="py-2 px-4 border-b relative right-6">Fark</th>
          <th class="py-2 px-4 border-b relative right-6">Alış</th>
          <th class="py-2 px-4 border-b relative right-6">Satış</th>
          <th class="py-2 px-4 border-b relative right-6">G. Yüksek</th>
          <th class="py-2 px-4 border-b relative right-6">G. Düşük</th>
          <th class="py-2 px-4 border-b relative right-6">A. Ort.</th>
          <th class="py-2 px-4 border-b relative right-6">Hacim</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="stock in paginatedStocks"
          :key="stock.symbol"
          class="hover:bg-gray-100"
        >
          <td class="py-2 px-4 border-b">{{ stock.symbol }}</td>
          <td class="py-2 px-4 border-b">{{ stock.lastPrice }}</td>
          <td
            class="py-2 px-4 border-b"
            :class="{
              'text-green-500': stock.changePercent >= 0,
              'text-red-500': stock.changePercent < 0,
            }"
          >
            %{{ stock.changePercent.toFixed(2) }}
          </td>
          <td class="py-2 px-4 border-b">
            {{ stock.changeAmount.toFixed(2) }}
          </td>
          <td class="py-2 px-4 border-b">{{ stock.buyingPrice }}</td>
          <td class="py-2 px-4 border-b">{{ stock.sellingPrice }}</td>
          <td class="py-2 px-4 border-b">{{ stock.highestPrice }}</td>
          <td class="py-2 px-4 border-b">{{ stock.lowestPrice }}</td>
          <td class="py-2 px-4 border-b">{{ stock.averagePrice }}</td>
          <td class="py-2 px-4 border-b">{{ stock.volume }}</td>
        </tr>
      </tbody>
    </table>
    <div class="flex justify-center mt-4">
      <button
        @click="goToPage(1)"
        :disabled="currentPage === 1"
        class="px-4 py-2 mx-1 border rounded"
      >
        İlk
      </button>
      <button
        @click="goToPage(currentPage - 1)"
        :disabled="currentPage === 1"
        class="px-4 py-2 mx-1 border rounded"
      >
        Önceki
      </button>
      <button
        v-for="page in visiblePages"
        :key="page"
        @click="goToPage(page)"
        :class="[
          'px-4 py-2 mx-1 border rounded',
          { 'bg-gray-300': currentPage === page },
        ]"
      >
        {{ page }}
      </button>
      <button
        @click="goToPage(currentPage + 1)"
        :disabled="currentPage === totalPages"
        class="px-4 py-2 mx-1 border rounded"
      >
        Sonraki
      </button>
      <button
        @click="goToPage(totalPages)"
        :disabled="currentPage === totalPages"
        class="px-4 py-2 mx-1 border rounded"
      >
        Son
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import exchange from "./exchange.vue";

export default {
  name: "Bist100",
  components: {
    exchange,
  },
  data() {
    return {
      searchQuery: "",
      currentPage: 1,
      itemsPerPage: 10,
    };
  },
  computed: {
    ...mapState(["bist100"]),
    filteredStocks() {
      return this.bist100.filter(
        (stock) =>
          stock.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          stock.symbol.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    totalPages() {
      return Math.ceil(this.filteredStocks.length / this.itemsPerPage);
    },
    paginatedStocks() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredStocks.slice(start, end);
    },
    visiblePages() {
      const pages = [];
      if (this.totalPages <= 7) {
        for (let i = 1; i <= this.totalPages; i++) {
          pages.push(i);
        }
      } else {
        if (this.currentPage <= 4) {
          pages.push(1, 2, 3, 4, 5, "...", this.totalPages);
        } else if (this.currentPage >= this.totalPages - 3) {
          pages.push(
            1,
            "...",
            this.totalPages - 4,
            this.totalPages - 3,
            this.totalPages - 2,
            this.totalPages - 1,
            this.totalPages
          );
        } else {
          pages.push(
            1,
            "...",
            this.currentPage - 1,
            this.currentPage,
            this.currentPage + 1,
            "...",
            this.totalPages
          );
        }
      }
      return pages;
    },
  },
  methods: {
    goToPage(page) {
      if (typeof page === "number" && page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
  },
};
</script>

<style scoped>
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

button {
  background-color: #f0f0f0;
  border-color: #ccc;
}

button:hover:not(:disabled) {
  background-color: #e0e0e0;
}

button.bg-gray-300 {
  background-color: #d0d0d0;
  font-weight: bold;
}
</style>
