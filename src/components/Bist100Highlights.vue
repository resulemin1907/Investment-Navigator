<template>
    <div class="container mx-auto px-4 py-8 relative bottom-24 cursor-pointer">
        <h1 class="text-2xl font-bold mb-4">BIST 100 Öne Çıkanlar</h1>
        <h2 class="text-xl font-semibold mb-2">En Yüksek Yükselenler</h2>
        <table class="min-w-full bg-white mb-8">
            <thead class="bg-gray-200">
                <tr>
                    <th class="py-2 px-4 border-b">Sembol</th>
                    <th class="py-2 px-4 border-b">Son</th>
                    <th class="py-2 px-4 border-b">Fark %</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="stock in topGainers"
                    :key="stock.symbol"
                    class="hover:bg-gray-100"
                >
                    <td class="py-2 px-4 border-b">{{ stock.symbol }}</td>
                    <td class="py-2 px-4 border-b">{{ stock.lastPrice }}</td>
                    <td class="py-2 px-4 border-b text-green-500">
                        %{{ stock.changePercent.toFixed(2) }}
                    </td>
                </tr>
            </tbody>
        </table>

        <h2 class="text-xl font-semibold mb-2">Öne Çıkanlar</h2>
        <table class="min-w-full bg-white">
            <thead class="bg-gray-200">
                <tr>
                    <th class="py-2 px-4 border-b">Sembol</th>
                    <th class="py-2 px-4 border-b">Son</th>
                    <th class="py-2 px-4 border-b">Fark %</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="stock in highlightedStocks"
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
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState } from "vuex";
import exchange from "./exchange.vue";

export default {
    name: "Bist100Highlights",
    components: {
        exchange,
    },
    computed: {
        ...mapState(["bist100", "featuredStocks"]),
        topGainers() {
            return this.bist100
                .slice()
                .sort((a, b) => b.changePercent - a.changePercent)
                .slice(0, 5);
        },
        highlightedStocks() {
            return this.featuredStocks.slice(0, 5);
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
