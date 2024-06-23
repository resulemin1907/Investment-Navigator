<template>
    <div class="container cursor-pointer">
        <div class="tabs">
            <button
                @click="activeTab = 'yukselenler'"
                :class="{ active: activeTab === 'yukselenler' }"
            >
                Yükselenler
            </button>
            <button
                @click="activeTab = 'dusunenler'"
                :class="{ active: activeTab === 'dusunenler' }"
            >
                Düşenler
            </button>
            <button
                @click="activeTab = 'hacimliler'"
                :class="{ active: activeTab === 'hacimliler' }"
            >
                Hacimliler
            </button>
        </div>

        <div>
            <table
                v-if="activeTab === 'yukselenler'"
                class="min-w-full bg-white"
            >
                <thead class="bg-gray-200">
                    <tr>
                        <th class="py-2 px-4 border-b">HİSSE</th>
                        <th class="py-2 px-4 border-b">SON</th>
                        <th class="py-2 px-4 border-b">DEĞİŞİM</th>
                        <th class="py-2 px-4 border-b">HACİM (mTL)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="stock in yukselenler"
                        :key="stock.hisse"
                        class="hover:bg-gray-100"
                    >
                        <td class="py-2 px-4 border-b">{{ stock.hisse }}</td>
                        <td class="py-2 px-4 border-b">{{ stock.son }}</td>
                        <td
                            class="py-2 px-4 border-b"
                            :class="{
                                'text-red-500': stock.degisim < 0,
                                'text-green-500': stock.degisim >= 0,
                            }"
                        >
                            {{ stock.degisim }} %
                        </td>
                        <td class="py-2 px-4 border-b">{{ stock.hacim }}</td>
                    </tr>
                </tbody>
            </table>

            <table
                v-if="activeTab === 'dusunenler'"
                class="min-w-full bg-white"
            >
                <thead class="bg-gray-200">
                    <tr>
                        <th class="py-2 px-4 border-b">HİSSE</th>
                        <th class="py-2 px-4 border-b">SON</th>
                        <th class="py-2 px-4 border-b">DEĞİŞİM</th>
                        <th class="py-2 px-4 border-b">HACİM (mTL)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="stock in dusunenler"
                        :key="stock.hisse"
                        class="hover:bg-gray-100"
                    >
                        <td class="py-2 px-4 border-b">{{ stock.hisse }}</td>
                        <td class="py-2 px-4 border-b">{{ stock.son }}</td>
                        <td
                            class="py-2 px-4 border-b"
                            :class="{
                                'text-red-500': stock.degisim < 0,
                                'text-green-500': stock.degisim >= 0,
                            }"
                        >
                            {{ stock.degisim }} %
                        </td>
                        <td class="py-2 px-4 border-b">{{ stock.hacim }}</td>
                    </tr>
                </tbody>
            </table>

            <table
                v-if="activeTab === 'hacimliler'"
                class="min-w-full bg-white"
            >
                <thead class="bg-gray-200">
                    <tr>
                        <th class="py-2 px-4 border-b">HİSSE</th>
                        <th class="py-2 px-4 border-b">SON</th>
                        <th class="py-2 px-4 border-b">DEĞİŞİM</th>
                        <th class="py-2 px-4 border-b">HACİM (mTL)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="stock in hacimliler"
                        :key="stock.hisse"
                        class="hover:bg-gray-100"
                    >
                        <td class="py-2 px-4 border-b">{{ stock.hisse }}</td>
                        <td class="py-2 px-4 border-b">{{ stock.son }}</td>
                        <td
                            class="py-2 px-4 border-b"
                            :class="{
                                'text-red-500': stock.degisim < 0,
                                'text-green-500': stock.degisim >= 0,
                            }"
                        >
                            {{ stock.degisim }} %
                        </td>
                        <td class="py-2 px-4 border-b">{{ stock.hacim }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    name: "StocksTable",
    data() {
        return {
            activeTab: "yukselenler",
        };
    },
    computed: {
        ...mapState([
            "yukselenler",
            "dusunenler",
            "hacimliler",
            "loading",
            "error",
        ]),
    },
    methods: {
        ...mapActions(["fetchStocksData"]),
    },
    created() {
        this.fetchStocksData();
    },
};
</script>

<style scoped>
.container {
    position: relative;
    width: 100%;
    top: -3rem;
}
.tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
}

.tabs button {
    padding: 10px 10px;
    margin: 0 5px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    background-color: #f0f0f0;
    transition: background-color 0.3s;
}

.tabs button.active {
    background-color: #3b82f6;
    color: #fff;
}

.tabs button:hover:not(.active) {
    background-color: #e0e0e0;
}
</style>
