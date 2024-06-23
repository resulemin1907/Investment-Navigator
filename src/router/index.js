import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import GoldPrices from "@/components/GoldPrices.vue";
import Login from "@/components/Login.vue";
import PreciousMetalsPrices from "@/components/PreciousMetalsPrices.vue";
import CurrencyRates from "@/components/CurrencyRates.vue";
import CryptoRates from "@/components/CryptoRates.vue";
import Converter from "@/components/Converter.vue";
import RetirementCalculator from "@/components/RetirementCalculator.vue";
import OvertimeCalculator from "@/components/OvertimeCalculator.vue";
import SeverancePayCalculator from "@/components/SeverancePayCalculator.vue";
import Bist100 from "@/components/Bist100.vue";
import Bist100Highlights from "@/components/Bist100Highlights.vue";
import Bist from "@/components/Bist.vue";
import Döviz from "@/components/Döviz.vue";

import EkonomiHaberleri from "@/components/EkonomiHaberleri.vue";
import PiyasaHaberleri from "@/components/PiyasaHaberleri.vue";
import SirketHaberleri from "@/components/SirketHaberleri.vue";
import DovizHaberleri from "@/components/DovizHaberleri.vue";
import KriptoHaberleri from "@/components/KriptoHaberleri.vue";
import KiymetliMetalHaberleri from "@/components/KiymetliMetalHaberleri.vue";
import UrunHaberleri from "@/components/UrunHaberleri.vue";
import AllNews from "@/components/AllNews.vue";
const routes = [
    {
        path: "/home",
        name: "Home",
        component: Home,
    },
    {
        path: "/all-news",
        name: "tum-haberler",
        component: AllNews,
    },
    {
        path: "/highlights",
        name: "one-çıkarılanlar",
        component: Bist100Highlights,
    },
    {
        path: "/crypto-rates",
        name: "CryptoRates",
        component: CryptoRates,
    },
    {
        path: "/severance-pay-calculator",
        name: "SeverancePayCalculator",
        component: SeverancePayCalculator,
    },
    {
        path: "/converter",
        name: "Converter",
        component: Converter,
    },
    {
        path: "/doviz",
        name: "Döviz",
        component: Döviz,
    },
    {
        path: "/currency-rates",
        name: "CurrencyRates",
        component: CurrencyRates,
    },
    {
        path: "/retirement-calculator",
        name: "RetirementCalculator",
        component: RetirementCalculator,
    },
    {
        path: "/precious-metals-prices",
        name: "PreciousMetalsPrices",
        component: PreciousMetalsPrices,
    },
    {
        path: "/overtime-calculator",
        name: "OvertimeCalculator",
        component: OvertimeCalculator,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/bist100",
        name: "Bist100",
        component: Bist100,
    },
    {
        path: "/bist",
        name: "Bist",
        component: Bist,
    },
    {
        path: "/gold-prices",
        name: "GoldPrices",
        component: GoldPrices,
    },
    {
        path: "/ekonomi-haberleri",
        name: "EkonomiHaberleri",
        component: EkonomiHaberleri,
    },
    {
        path: "/piyasa-haberleri",
        name: "PiyasaHaberleri",
        component: PiyasaHaberleri,
    },
    {
        path: "/sirket-haberleri",
        name: "SirketHaberleri",
        component: SirketHaberleri,
    },

    {
        path: "/doviz-haberleri",
        name: "DovizHaberleri",
        component: DovizHaberleri,
    },
    {
        path: "/kripto-haberleri",
        name: "KriptoHaberleri",
        component: KriptoHaberleri,
    },
    {
        path: "/kiymetli-metal-haberleri",
        name: "KiymetliMetalHaberleri",
        component: KiymetliMetalHaberleri,
    },
    {
        path: "/urun-haberleri",
        name: "UrunHaberleri",
        component: UrunHaberleri,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior() {
        return { top: 0 };
    },
});

export default router;
