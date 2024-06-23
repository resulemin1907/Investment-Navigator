import { createStore } from "vuex";
import axios from "axios";

export default createStore({
    state: {
        user: null,
        prices: {
            dolar: 0,
            euro: 0,
            altin: 0,
            bist: 0,
            btc: 0,
            tahvil: 0,
            dolarChange: 0,
            euroChange: 0,
            altinChange: 0,
            bistChange: 0,
            btcChange: 0,
            tahvilChange: 0,
        },
        timestamps: {
            daily: [],
            weekly: [],
            monthly: [],
            yearly: [],
        },
        indices: [],
        stocks: [],
        commodities: [],
        currencies: [],
        etfs: [],
        bonds: [],
        funds: [],
        crypto: [],
        companies: {},

        whatHappened: {
            daily: {},
            weekly: {},
            monthly: {},
            ytd: {},
            yearly: {},
            twoYears: {},
        },
        marketData: {
            turkEndeksleri: [],
            dunyaEndeksleri: [],
            vadeliEndeksler: [],
            onemliHisseSenetleri: [],
            emtiyalar: [],
            etfler: [],
            oranlarTahviller: [],
            ondeGelenTurkHisseSenetleri: [],
            enIyiKriptoParalar: [],
        },
        mostWatched: [],
        currencyRates: [],
        preciousMetalsPrices: [],
        cryptoRates: [],
        bist100: [],
        featuredStocks: [],
        loading: false,
        error: null,
        news: [
            "BIST pay endekslerinde 2024 yılı üçüncü çeyrek dönem değişikliklerini belirledi",
            "ABD/Yellen: İşsizlik oranı bir miktar yukarı kaydı, iş gücü piyasası biraz daha normalleşti",
            "Dolar/TL kuru yeni rekor seviyelere ulaştı",
            "BIST 100 endeksi güne yükselişle başladı",
            "Kripto para piyasasında dalgalanmalar devam ediyor",
            "ABD'de üretici fiyatlarında artış hızı beklentilerin altında kald",
            "Bayraktar: İspanya ile enerji alanında ilişkilerimizi daha da ileri taşımayı arzu ediyoruz",
        ],
        yukselenler: [],
        dusunenler: [],
        hacimliler: [],
        converterRates: {
            currencies: [
                { symbol: "TRY", price: 1 },
                { symbol: "USD", price: 0.13 },
                { symbol: "EUR", price: 0.11 },
            ],
            gold: [
                { symbol: "Gram Altın", price: 500 },
                { symbol: "Çeyrek Altın", price: 800 },
            ],
            crypto: [
                { symbol: "BTC", price: 60000 },
                { symbol: "ETH", price: 4000 },
            ],
        },
    },
    mutations: {
        setCompanies(state, companies) {
            state.companies = companies;
        },
        setUser(state, user) {
            state.user = user;
        },
        SET_INDICES(state, data) {
            state.indices = data;
        },
        SET_MARKET_DATA(state, marketData) {
            state.marketData = marketData;
        },
        SET_STOCKS(state, data) {
            state.stocks = data;
        },
        SET_COMMODITIES(state, data) {
            state.commodities = data;
        },
        SET_CURRENCIES(state, data) {
            state.currencies = data;
        },
        SET_ETFS(state, data) {
            state.etfs = data;
        },
        SET_BONDS(state, data) {
            state.bonds = data;
        },
        SET_FUNDS(state, data) {
            state.funds = data;
        },
        SET_CRYPTO(state, data) {
            state.crypto = data;
        },
        SET_MOST_WATCHED(state, data) {
            state.mostWatched = data;
        },
        SET_PRICES(state, prices) {
            state.prices = prices;
        },
        SET_CURRENCY_RATES(state, currencyRates) {
            state.currencyRates = currencyRates;
        },
        SET_PRECIOUS_METALS_PRICES(state, preciousMetalsPrices) {
            state.preciousMetalsPrices = preciousMetalsPrices;
        },
        SET_CRYPTO_RATES(state, cryptoRates) {
            state.cryptoRates = cryptoRates;
        },
        SET_BIST100(state, bist100) {
            state.bist100 = bist100;
        },
        SET_FEATURED_STOCKS(state, featuredStocks) {
            state.featuredStocks = featuredStocks;
        },
        SET_LOADING(state, loading) {
            state.loading = loading;
        },
        SET_ERROR(state, error) {
            state.error = error;
        },
        SET_NEWS(state, news) {
            state.news = news;
        },
        SET_YUKSELENLER(state, yukselenler) {
            state.yukselenler = yukselenler;
        },
        SET_DUSUNENLER(state, dusunenler) {
            state.dusunenler = dusunenler;
        },
        SET_HACIMLILER(state, hacimliler) {
            state.hacimliler = hacimliler;
        },
        SET_WHAT_HAPPENED(state, data) {
            state.whatHappened = data;
        },
        SET_CONVERTER_RATES(state, rates) {
            state.converterRates = rates;
        },
    },
    actions: {
        login({ commit }, { email, password }) {
            if (email === "r.ryie48@gmail.com" && password === "Resul1907") {
                commit("setUser", { email });
                return true;
            }
            return false;
        },
        logout({ commit }) {
            commit("setUser", null);
        },
        async fetchPrices({ commit }) {
            commit("SET_LOADING", true);
            try {
                const response = await axios.get("/data/prices.json");
                commit("SET_PRICES", response.data.prices);
                commit("SET_CURRENCY_RATES", response.data.currencyRates);
                commit(
                    "SET_PRECIOUS_METALS_PRICES",
                    response.data.preciousMetalsPrices
                );
                commit("SET_CRYPTO_RATES", response.data.cryptoRates);
                commit("SET_BIST100", response.data.bist100);
                commit("SET_FEATURED_STOCKS", response.data.featuredStocks);
                commit("SET_LOADING", false);
            } catch (error) {
                commit("SET_ERROR", error);
                commit("SET_LOADING", false);
            }
        },
        async fetchMarketData({ commit }) {
            commit("SET_LOADING", true);
            try {
                const response = await axios.get("/data/marketData.json");
                commit("SET_MARKET_DATA", response.data.marketData);
                commit("SET_LOADING", false);
            } catch (error) {
                commit("SET_ERROR", error);
                commit("SET_LOADING", false);
            }
        },
        async fetchCompanies({ commit }) {
            try {
                const response = await axios.get(
                    "/data/CompanyWhatChanged.json"
                );
                commit("setCompanies", response.data);
            } catch (error) {
                console.error("Failed to fetch companies:", error);
            }
        },
        async fetchIndices({ commit }) {
            try {
                const response = await axios.get("/data/indices.json");
                commit("SET_INDICES", response.data.indices);
            } catch (error) {
                console.error("Error fetching indices data:", error);
            }
        },
        async fetchStocks({ commit }) {
            try {
                const response = await axios.get("/data/stocks.json");
                commit("SET_STOCKS", response.data.stocks);
            } catch (error) {
                console.error("Error fetching stocks data:", error);
            }
        },
        async fetchCommodities({ commit }) {
            try {
                const response = await axios.get("/data/commodities.json");
                commit("SET_COMMODITIES", response.data.commodities);
            } catch (error) {
                console.error("Error fetching commodities data:", error);
            }
        },
        async fetchCurrencies({ commit }) {
            try {
                const response = await axios.get("/data/currencies.json");
                commit("SET_CURRENCIES", response.data.currencies);
            } catch (error) {
                console.error("Error fetching currencies data:", error);
            }
        },
        async fetchEtfs({ commit }) {
            try {
                const response = await axios.get("/data/etfs.json");
                commit("SET_ETFS", response.data.etfs);
            } catch (error) {
                console.error("Error fetching etfs data:", error);
            }
        },
        async fetchBonds({ commit }) {
            try {
                const response = await axios.get("/data/bonds.json");
                commit("SET_BONDS", response.data.bonds);
            } catch (error) {
                console.error("Error fetching bonds data:", error);
            }
        },
        async fetchFunds({ commit }) {
            try {
                const response = await axios.get("/data/funds.json");
                commit("SET_FUNDS", response.data.funds);
            } catch (error) {
                console.error("Error fetching funds data:", error);
            }
        },
        async fetchCrypto({ commit }) {
            try {
                const response = await axios.get("/data/crypto.json");
                commit("SET_CRYPTO", response.data.crypto);
            } catch (error) {
                console.error("Error fetching crypto data:", error);
            }
        },
        async fetchStocksData({ commit }) {
            commit("SET_LOADING", true);
            try {
                const response = await axios.get("/data/stocksData.json");
                commit("SET_YUKSELENLER", response.data.data.yukselenler);
                commit("SET_DUSUNENLER", response.data.data.dusunenler);
                commit("SET_HACIMLILER", response.data.data.hacimliler);
                commit("SET_LOADING", false);
            } catch (error) {
                commit("SET_ERROR", error);
                commit("SET_LOADING", false);
            }
        },
        async fetchWhatHappened({ commit }) {
            try {
                const response = await axios.get("/data/whatHappened.json");
                commit("SET_WHAT_HAPPENED", response.data);
            } catch (error) {
                console.error("Error fetching what happened data:", error);
            }
        },
        async fetchMostWatched({ commit }) {
            try {
                const response = await axios.get("/data/mostWatched.json");
                commit("SET_MOST_WATCHED", response.data.mostWatched);
            } catch (error) {
                console.error("Error fetching most watched data:", error);
            }
        },
        async fetchConverterRates({ commit }) {
            try {
                const response = await axios.get("/data/converterRates.json");
                commit("SET_CONVERTER_RATES", response.data);
            } catch (error) {
                console.error("Error fetching converter rates:", error);
            }
        },
    },
    getters: {
        isAuthenticated: (state) => !!state.user,
        prices: (state) => state.prices,
        timestamps: (state) => state.timestamps,
        indices: (state) => state.indices,
        stocks: (state) => state.stocks,
        commodities: (state) => state.commodities,
        currencies: (state) => state.currencies,
        etfs: (state) => state.etfs,
        bonds: (state) => state.bonds,
        funds: (state) => state.funds,
        crypto: (state) => state.crypto,
        currencyRates: (state) => state.currencyRates,
        preciousMetalsPrices: (state) => state.preciousMetalsPrices,
        cryptoRates: (state) => state.cryptoRates,
        bist100: (state) => state.bist100,
        featuredStocks: (state) => state.featuredStocks,
        loading: (state) => state.loading,
        error: (state) => state.error,
        news: (state) => state.news,
        yukselenler: (state) => state.yukselenler,
        dusunenler: (state) => state.dusunenler,
        hacimliler: (state) => state.hacimliler,
        whatHappened: (state) => state.whatHappened,
        mostWatched: (state) => state.mostWatched,
        converterRates: (state) => state.converterRates,
        marketData: (state) => state.marketData,
        companies: (state) => state.companies,
    },
});
