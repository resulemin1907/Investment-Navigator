<template>
    <div
        class="container p-4 bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
    >
        <h2 class="text-xl font-bold mb-4 flex justify-center align-center">
            100,000 TL Ne Oldu?
        </h2>
        <div class="tabs mb-4 flex justify-between">
            <button
                @click="activeTab = 'daily'"
                :class="{ active: activeTab === 'daily' }"
                class="tab-button"
            >
                Günlük
            </button>
            <button
                @click="activeTab = 'weekly'"
                :class="{ active: activeTab === 'weekly' }"
                class="tab-button"
            >
                Haftalık
            </button>
            <button
                @click="activeTab = 'monthly'"
                :class="{ active: activeTab === 'monthly' }"
                class="tab-button"
            >
                Aylık
            </button>
            <button
                @click="activeTab = 'ytd'"
                :class="{ active: activeTab === 'ytd' }"
                class="tab-button"
            >
                YBG
            </button>
            <button
                @click="activeTab = 'yearly'"
                :class="{ active: activeTab === 'yearly' }"
                class="tab-button"
            >
                Yıllık
            </button>
            <button
                @click="activeTab = 'twoYears'"
                :class="{ active: activeTab === 'twoYears' }"
                class="tab-button"
            >
                2 Yıl
            </button>
        </div>
        <div v-if="loading" class="text-center w-full">Loading...</div>
        <div v-else>
            <div
                v-for="(value, key) in currentData"
                :key="key"
                class="flex justify-between items-center mb-2"
            >
                <div class="flex items-center space-x-2">
                    <div
                        :class="iconClasses[key]"
                        class="w-4 h-4 rounded-full"
                    ></div>
                    <span>{{ key }}</span>
                </div>
                <div>{{ value.value.toLocaleString() }} TL</div>
                <div
                    :class="{
                        'text-green-500': value.change >= 0,
                        'text-red-500': value.change < 0,
                    }"
                >
                    {{ value.change >= 0 ? "+" : ""
                    }}{{ value.change.toFixed(2) }} %
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    name: "WhatHappened",
    data() {
        return {
            activeTab: "daily",
            loading: true,
        };
    },
    computed: {
        ...mapState(["whatHappened"]),
        currentData() {
            return this.whatHappened[this.activeTab] || {};
        },
        iconClasses() {
            return {
                BIST100: "bg-blue-500",
                EURO: "bg-purple-500",
                ALTIN: "bg-yellow-500",
                DOLAR: "bg-green-500",
            };
        },
    },
    methods: {
        ...mapActions(["fetchWhatHappened"]),
    },
    async created() {
        await this.fetchWhatHappened();
        this.loading = false;
    },
};
</script>

<style scoped>
.container {
    position: relative;
    width: 100%;
    top: -3rem;
    left: 1.5rem;
}
.tabs {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e5e7eb;
    margin-bottom: 16px;
}

.tab-button {
    padding: 8px 16px;
    margin-bottom: -1px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s, color 0.3s;
}

.tab-button.active {
    background-color: #3b82f6;
    color: white;
    border-bottom: 2px solid #3b82f6;
    font-weight: bold;
}

.tab-button:hover:not(.active) {
    background-color: #f0f0f0;
}

.flex {
    display: flex;
}

.items-center {
    align-items: center;
}

.justify-between {
    justify-content: space-between;
}

.rounded-full {
    border-radius: 9999px;
}

.bg-blue-500 {
    background-color: #3b82f6;
}

.bg-purple-500 {
    background-color: #a855f7;
}

.bg-yellow-500 {
    background-color: #fbbf24;
}

.bg-green-500 {
    background-color: #10b981;
}

.text-green-500 {
    color: #10b981;
}

.text-red-500 {
    color: #ef4444;
}
</style>
