<template>
    <div>
        <exchange></exchange>
        <div class="container mx-auto px-4 py-8 relative">
            <div class="flex flex-col lg:flex-row">
                <div class="w-full lg:w-3/4 lg:pr-4">
                    <div
                        class="min-h-screen bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                    >
                        <MarketsComponent /><InvestmentForm />
                    </div>
                    <AnalysisComponent />
                </div>
                <div
                    class="w-full lg:w-1/4 space-y-4 mt-8 lg:mt-0 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                >
                    <StocksTable />
                    <WhatHappened />
                    <MostWatched />
                </div>
            </div>
            <MarketOverview />
        </div>

        <ScrollToTop />
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import exchange from "./exchange.vue";
import StocksTable from "./StocksTable.vue";
import WhatHappened from "./WhatHappened.vue";
import MostWatched from "./MostWatched.vue";
import ScrollToTop from "./ScrollToTop.vue";
import MarketsComponent from "./MarketsComponent.vue";
import AnalysisComponent from "./AnalysisComponent.vue";
import MarketOverview from "./MarketOverview.vue";
import InvestmentForm from "./InvestmentForm.vue";

export default {
    name: "Home",
    components: {
        InvestmentForm,
        exchange,
        StocksTable,
        WhatHappened,
        MostWatched,
        ScrollToTop,
        MarketsComponent,
        AnalysisComponent,
        MarketOverview,
    },
    computed: {
        ...mapState(["loading", "error"]),
    },
    methods: {
        ...mapActions(["fetchPrices"]),
    },
    created() {
        this.fetchPrices();
        window.scrollTo(0, 0);
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
