<template>
    <div class="container p-4 bg-white rounded-lg shadow-md cursor-pointer">
        <h2 class="text-xl font-bold mb-4 flex justify-center">
            En Çok İzlenenler
        </h2>
        <table class="min-w-full bg-white rounded-lg shadow-md">
            <thead class="bg-gray-200">
                <tr>
                    <th class="py-3 px-6 border-b">HİSSE</th>
                    <th class="py-3 px-6 border-b">SON</th>
                    <th class="py-3 px-6 border-b">DEĞİŞİM</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="stock in mostWatched"
                    :key="stock.hisse"
                    class="hover:bg-gray-100"
                >
                    <td class="py-3 px-6 border-b">{{ stock.hisse }}</td>
                    <td class="py-3 px-6 border-b">{{ stock.son }}</td>
                    <td
                        class="py-3 px-6 border-b"
                        :class="{
                            'text-red-500': stock.degisim < 0,
                            'text-green-500': stock.degisim >= 0,
                        }"
                    >
                        {{ stock.degisim.toFixed(2) }} %
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    name: "MostWatched",
    computed: {
        ...mapState(["mostWatched"]),
    },
    methods: {
        ...mapActions(["fetchMostWatched"]),
    },
    created() {
        this.fetchMostWatched();
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
table {
    border-collapse: separate;
    border-spacing: 0 5px;
}

th,
td {
    text-align: left;
}

th {
    font-weight: 700;
}

td {
    font-weight: 400;
}
</style>
