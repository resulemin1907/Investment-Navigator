<template>
    <div class="mx-auto px-4 py-8 relative -top-36 -left-10 cursor-pointer">
        <h2 class="text-2xl font-bold mb-8 ml-3 cursor-pointer">PİYASALAR</h2>
        <div class="tabs">
            <button
                @click="setTab('indices')"
                :class="{ active: activeTab === 'indices' }"
            >
                Endeksler
            </button>
            <button
                @click="setTab('stocks')"
                :class="{ active: activeTab === 'stocks' }"
            >
                Hisseler
            </button>
            <button
                @click="setTab('commodities')"
                :class="{ active: activeTab === 'commodities' }"
            >
                Emtia
            </button>
            <button
                @click="setTab('currencies')"
                :class="{ active: activeTab === 'currencies' }"
            >
                Dövizler
            </button>
            <button
                @click="setTab('etfs')"
                :class="{ active: activeTab === 'etfs' }"
            >
                ETF'ler
            </button>
            <button
                @click="setTab('bonds')"
                :class="{ active: activeTab === 'bonds' }"
            >
                Tahviller
            </button>
            <button
                @click="setTab('funds')"
                :class="{ active: activeTab === 'funds' }"
            >
                Fonlar
            </button>
            <button
                @click="setTab('crypto')"
                :class="{ active: activeTab === 'crypto' }"
            >
                Kripto Paralar
            </button>
        </div>

        <div>
            <div v-if="activeTab === 'indices'" class="mt-8">
                <table class="min-w-full bg-white shadow-md rounded-lg">
                    <thead>
                        <tr class="bg-gray-200">
                            <th class="py-2">İsim</th>
                            <th class="py-2">Son</th>
                            <th class="py-2">Yüksek</th>
                            <th class="py-2">Düşük</th>
                            <th class="py-2">Fark</th>
                            <th class="py-2">Fark %</th>
                            <th class="py-2">Zaman</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="index in indices"
                            :key="index.name"
                            :class="{
                                'bg-green-100 text-green-700': index.change > 0,
                                'bg-red-100  text-red-700': index.change < 0,
                            }"
                            class="hover:bg-gray-100 transition-colors duration-300"
                        >
                            <td class="border px-4 py-2">{{ index.name }}</td>
                            <td class="border px-4 py-2">{{ index.last }}</td>
                            <td class="border px-4 py-2">{{ index.high }}</td>
                            <td class="border px-4 py-2">{{ index.low }}</td>
                            <td class="border px-4 py-2">{{ index.change }}</td>
                            <td class="border px-4 py-2">
                                {{ index.change_percent }}
                            </td>
                            <td class="border px-4 py-2">{{ index.date }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div v-if="activeTab === 'stocks'" class="mt-8">
                <table class="min-w-full bg-white shadow-md rounded-lg">
                    <thead>
                        <tr class="bg-gray-200">
                            <th class="py-2">İsim</th>
                            <th class="py-2">Son</th>
                            <th class="py-2">Yüksek</th>
                            <th class="py-2">Düşük</th>
                            <th class="py-2">Fark</th>
                            <th class="py-2">Fark %</th>
                            <th class="py-2">Hacim</th>
                            <th class="py-2">Zaman</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="stock in stocks"
                            :key="stock.name"
                            :class="{
                                'bg-green-100 text-green-700': stock.change > 0,
                                'bg-red-100  text-red-700': stock.change < 0,
                            }"
                            class="hover:bg-gray-100 transition-colors duration-300"
                        >
                            <td class="border px-4 py-2">{{ stock.name }}</td>
                            <td class="border px-4 py-2">{{ stock.last }}</td>
                            <td class="border px-4 py-2">{{ stock.high }}</td>
                            <td class="border px-4 py-2">{{ stock.low }}</td>
                            <td class="border px-4 py-2">{{ stock.change }}</td>
                            <td class="border px-4 py-2">
                                {{ stock.change_percent }}
                            </td>
                            <td class="border px-4 py-2">{{ stock.volume }}</td>
                            <td class="border px-4 py-2">{{ stock.date }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div v-if="activeTab === 'commodities'" class="mt-8">
                <table class="min-w-full bg-white shadow-md rounded-lg">
                    <thead>
                        <tr class="bg-gray-200">
                            <th class="py-2">İsim</th>
                            <th class="py-2">Sözleşme</th>
                            <th class="py-2">Son</th>
                            <th class="py-2">Yüksek</th>
                            <th class="py-2">Düşük</th>
                            <th class="py-2">Fark</th>
                            <th class="py-2">Fark %</th>
                            <th class="py-2">Zaman</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="commodity in commodities"
                            :key="commodity.name"
                            :class="{
                                'bg-green-100 text-green-700':
                                    commodity.change > 0,
                                'bg-red-100  text-red-700':
                                    commodity.change < 0,
                            }"
                            class="hover:bg-gray-100 transition-colors duration-300"
                        >
                            <td class="border px-4 py-2">
                                {{ commodity.name }}
                            </td>
                            <td class="border px-4 py-2">
                                {{ commodity.contract }}
                            </td>
                            <td class="border px-4 py-2">
                                {{ commodity.last }}
                            </td>
                            <td class="border px-4 py-2">
                                {{ commodity.high }}
                            </td>
                            <td class="border px-4 py-2">
                                {{ commodity.low }}
                            </td>
                            <td class="border px-4 py-2">
                                {{ commodity.change }}
                            </td>
                            <td class="border px-4 py-2">
                                {{ commodity.change_percent }}
                            </td>
                            <td class="border px-4 py-2">
                                {{ commodity.date }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div v-if="activeTab === 'currencies'" class="mt-8">
                <table class="min-w-full bg-white shadow-md rounded-lg">
                    <thead>
                        <tr class="bg-gray-200">
                            <th class="py-2">İsim</th>
                            <th class="py-2">Alış</th>
                            <th class="py-2">Satış</th>
                            <th class="py-2">Yüksek</th>
                            <th class="py-2">Düşük</th>
                            <th class="py-2">Fark</th>
                            <th class="py-2">Fark %</th>
                            <th class="py-2">Zaman</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="currency in currencies"
                            :key="currency.name"
                            :class="{
                                'bg-green-100 text-green-700':
                                    currency.change > 0,
                                'bg-red-100  text-red-700': currency.change < 0,
                            }"
                            class="hover:bg-gray-100 transition-colors duration-300"
                        >
                            <td class="border px-4 py-2">
                                {{ currency.name }}
                            </td>
                            <td class="border px-4 py-2">{{ currency.buy }}</td>
                            <td class="border px-4 py-2">
                                {{ currency.sell }}
                            </td>
                            <td class="border px-4 py-2">
                                {{ currency.high }}
                            </td>
                            <td class="border px-4 py-2">{{ currency.low }}</td>
                            <td class="border px-4 py-2">
                                {{ currency.change }}
                            </td>
                            <td class="border px-4 py-2">
                                {{ currency.change_percent }}
                            </td>
                            <td class="border px-4 py-2">
                                {{ currency.date }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div v-if="activeTab === 'etfs'" class="mt-8">
                <table class="min-w-full bg-white shadow-md rounded-lg">
                    <thead>
                        <tr class="bg-gray-200">
                            <th class="py-2">İsim</th>
                            <th class="py-2">Son</th>
                            <th class="py-2">Yüksek</th>
                            <th class="py-2">Düşük</th>
                            <th class="py-2">Fark</th>
                            <th class="py-2">Fark %</th>
                            <th class="py-2">Zaman</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="etf in etfs"
                            :key="etf.name"
                            :class="{
                                'bg-green-100 text-green-700': etf.change > 0,
                                'bg-red-100  text-red-700': etf.change < 0,
                            }"
                            class="hover:bg-gray-100 transition-colors duration-300"
                        >
                            <td class="border px-4 py-2">{{ etf.name }}</td>
                            <td class="border px-4 py-2">{{ etf.last }}</td>
                            <td class="border px-4 py-2">{{ etf.high }}</td>
                            <td class="border px-4 py-2">{{ etf.low }}</td>
                            <td class="border px-4 py-2">{{ etf.change }}</td>
                            <td class="border px-4 py-2">
                                {{ etf.change_percent }}
                            </td>
                            <td class="border px-4 py-2">{{ etf.date }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div v-if="activeTab === 'bonds'" class="mt-8">
                <table class="min-w-full bg-white shadow-md rounded-lg">
                    <thead>
                        <tr class="bg-gray-200">
                            <th class="py-2">İsim</th>
                            <th class="py-2">T. Getirisi</th>
                            <th class="py-2">Taban</th>
                            <th class="py-2">Yüksek</th>
                            <th class="py-2">Düşük</th>
                            <th class="py-2">Fark</th>
                            <th class="py-2">Fark %</th>
                            <th class="py-2">Zaman</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="bond in bonds"
                            :key="bond.name"
                            :class="{
                                'bg-green-100 text-green-700': bond.change > 0,
                                'bg-red-100  text-red-700': bond.change < 0,
                            }"
                            class="hover:bg-gray-100 transition-colors duration-300"
                        >
                            <td class="border px-4 py-2">{{ bond.name }}</td>
                            <td class="border px-4 py-2">{{ bond.yield }}</td>
                            <td class="border px-4 py-2">{{ bond.base }}</td>
                            <td class="border px-4 py-2">{{ bond.high }}</td>
                            <td class="border px-4 py-2">{{ bond.low }}</td>
                            <td class="border px-4 py-2">{{ bond.change }}</td>
                            <td class="border px-4 py-2">
                                {{ bond.change_percent }}
                            </td>
                            <td class="border px-4 py-2">{{ bond.date }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div v-if="activeTab === 'funds'" class="mt-8">
                <table class="min-w-full bg-white shadow-md rounded-lg">
                    <thead>
                        <tr class="bg-gray-200">
                            <th class="py-2">İsim</th>
                            <th class="py-2">Son</th>
                            <th class="py-2">Fark</th>
                            <th class="py-2">Fark %</th>
                            <th class="py-2">Zaman</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="fund in funds"
                            :key="fund.name"
                            :class="{
                                'bg-green-100 text-green-700': fund.change > 0,
                                'bg-red-100  text-red-700': fund.change < 0,
                            }"
                            class="hover:bg-gray-100 transition-colors duration-300"
                        >
                            <td class="border px-4 py-2">{{ fund.name }}</td>
                            <td class="border px-4 py-2">{{ fund.last }}</td>
                            <td class="border px-4 py-2">{{ fund.change }}</td>
                            <td class="border px-4 py-2">
                                {{ fund.change_percent }}
                            </td>
                            <td class="border px-4 py-2">{{ fund.date }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div v-if="activeTab === 'crypto'" class="mt-8">
                <table class="min-w-full bg-white shadow-md rounded-lg">
                    <thead>
                        <tr class="bg-gray-200">
                            <th class="py-2">İsim</th>
                            <th class="py-2">Son</th>
                            <th class="py-2">Fark</th>
                            <th class="py-2">Fark %</th>
                            <th class="py-2">Zaman</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="crypto in crypto"
                            :key="crypto.name"
                            :class="{
                                'bg-green-100 text-green-700':
                                    crypto.change > 0,
                                'bg-red-100  text-red-700': crypto.change < 0,
                            }"
                            class="hover:bg-gray-100 transition-colors duration-300"
                        >
                            <td class="border px-4 py-2">{{ crypto.name }}</td>
                            <td class="border px-4 py-2">{{ crypto.last }}</td>
                            <td class="border px-4 py-2">
                                {{ crypto.change }}
                            </td>
                            <td class="border px-4 py-2">
                                {{ crypto.change_percent }}
                            </td>
                            <td class="border px-4 py-2">{{ crypto.date }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    name: "MarketsComponent",
    data() {
        return {
            activeTab: "indices",
        };
    },
    computed: {
        ...mapState([
            "loading",
            "error",
            "indices",
            "stocks",
            "commodities",
            "currencies",
            "etfs",
            "bonds",
            "funds",
            "crypto",
        ]),
    },
    methods: {
        ...mapActions([
            "fetchPrices",
            "fetchIndices",
            "fetchStocks",
            "fetchCommodities",
            "fetchCurrencies",
            "fetchEtfs",
            "fetchBonds",
            "fetchFunds",
            "fetchCrypto",
        ]),
        setTab(tab) {
            this.activeTab = tab;
        },
    },
    created() {
        this.fetchPrices();
        this.fetchIndices();
        this.fetchStocks();
        this.fetchCommodities();
        this.fetchCurrencies();
        this.fetchEtfs();
        this.fetchBonds();
        this.fetchFunds();
        this.fetchCrypto();
    },
};
</script>

<style scoped>
.tabs {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
    border-bottom: 2px solid #e2e8f0;
}
.tabs button {
    padding: 10px 20px;
    cursor: pointer;
    border: none;
    background-color: #f3f4f6;
    transition: background-color 0.3s, transform 0.3s;
}
.tabs button:hover,
.tabs button.active {
    background-color: #3b82f6;
    transform: translateY(-2px);
    color: white;
}
</style>
