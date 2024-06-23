<template>
    <div class="container mx-auto mb-11 relative -top-16 z-30 cursor-pointer">
        <div class="flex flex-wrap justify-between space-x-4 mt-20">
            <div class="flex space-x-4 w-full z-10">
                <div
                    class="bg-white p-4 rounded shadow-lg flex items-center space-x-4 w-1/6"
                >
                    <i class="fas fa-chart-line text-4xl text-blue-600"></i>
                    <div>
                        <h2 class="text-xl font-bold mb-2">BIST 100</h2>
                        <p class="text-3xl">{{ prices.bist }}</p>
                        <p
                            :class="{
                                'text-red-500': prices.bistChange < 0,
                                'text-green-500': prices.bistChange >= 0,
                            }"
                        >
                            %{{
                                prices.bistChange !== undefined
                                    ? prices.bistChange.toFixed(2)
                                    : "N/A"
                            }}
                        </p>
                    </div>
                </div>
                <div
                    class="bg-white p-4 rounded shadow-lg flex items-center space-x-4 w-1/6"
                >
                    <i class="fas fa-dollar-sign text-4xl text-green-600"></i>
                    <div>
                        <h2 class="text-xl font-bold mb-2">Dolar</h2>
                        <p class="text-3xl">{{ prices.dolar }}</p>
                        <p
                            :class="{
                                'text-red-500': prices.dolarChange < 0,
                                'text-green-500': prices.dolarChange >= 0,
                            }"
                        >
                            %{{
                                prices.dolarChange !== undefined
                                    ? prices.dolarChange.toFixed(2)
                                    : "N/A"
                            }}
                        </p>
                    </div>
                </div>
                <div
                    class="bg-white p-4 rounded shadow-lg flex items-center space-x-4 w-1/6"
                >
                    <i class="fas fa-euro-sign text-4xl text-blue-600"></i>
                    <div>
                        <h2 class="text-xl font-bold mb-2">Euro</h2>
                        <p class="text-3xl">{{ prices.euro }}</p>
                        <p
                            :class="{
                                'text-red-500': prices.euroChange < 0,
                                'text-green-500': prices.euroChange >= 0,
                            }"
                        >
                            %{{
                                prices.euroChange !== undefined
                                    ? prices.euroChange.toFixed(2)
                                    : "N/A"
                            }}
                        </p>
                    </div>
                </div>
                <div
                    class="bg-white p-4 rounded shadow-lg flex items-center space-x-4 w-1/6"
                >
                    <i class="fas fa-coins text-4xl text-yellow-600"></i>
                    <div>
                        <h2 class="text-xl font-bold mb-2">Altın</h2>
                        <p class="text-3xl">{{ prices.altin }}</p>
                        <p
                            :class="{
                                'text-red-500': prices.altinChange < 0,
                                'text-green-500': prices.altinChange >= 0,
                            }"
                        >
                            %{{
                                prices.altinChange !== undefined
                                    ? prices.altinChange.toFixed(2)
                                    : "N/A"
                            }}
                        </p>
                    </div>
                </div>
                <div
                    class="bg-white p-4 rounded shadow-lg flex items-center space-x-4 w-1/6"
                >
                    <i class="fas fa-coins text-4xl text-red-600"></i>
                    <div>
                        <h2 class="text-xl font-bold mb-2">BTCUSD</h2>
                        <p class="text-3xl">{{ prices.btc }}</p>
                        <p
                            :class="{
                                'text-red-500': prices.btcChange < 0,
                                'text-green-500': prices.btcChange >= 0,
                            }"
                        >
                            %{{
                                prices.btcChange !== undefined
                                    ? prices.btcChange.toFixed(2)
                                    : "N/A"
                            }}
                        </p>
                    </div>
                </div>
                <div
                    class="bg-white p-4 rounded shadow-lg flex items-center space-x-4 w-1/6"
                >
                    <i class="fas fa-coins text-4xl text-green-600"></i>
                    <div>
                        <h2 class="text-xl font-bold mb-2">Tahvil</h2>
                        <p class="text-3xl">{{ prices.tahvil }}</p>
                        <p
                            :class="{
                                'text-red-500': prices.tahvilChange < 0,
                                'text-green-500': prices.tahvilChange >= 0,
                            }"
                        >
                            %{{
                                prices.tahvilChange !== undefined
                                    ? prices.tahvilChange.toFixed(2)
                                    : "N/A"
                            }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    name: "Home",
    computed: {
        ...mapState(["prices", "loading", "error"]),
    },
    methods: {
        ...mapActions(["fetchPrices"]),
    },
    created() {
        this.fetchPrices();
        this.interval = setInterval(this.fetchPrices, 60000); // 1 dakika aralıklarla fiyatları güncelle
    },
    beforeUnmount() {
        clearInterval(this.interval);
    },
};
</script>

<style scoped>
/* Tailwind CSS classes kullanılacaktır */
</style>
