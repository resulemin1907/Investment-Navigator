<template>
    <div class="mx-auto px-4 py-8 relative -top-14 mb-10 cursor-pointer">
        <h2
            class="text-2xl font-bold relative -top-16 flex justify-center font-serif"
            style="color: #3b82f6"
        >
            PİYASA VERİLERİ
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
                <h3 class="text-xl font-bold mb-8 flex justify-center">
                    Türk Endeksleri
                </h3>
                <table class="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th class="py-2">İsim</th>
                            <th class="py-2">Son</th>
                            <th class="py-2">Fark</th>
                            <th class="py-2">Fark %</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="index in marketData.turkEndeksleri"
                            :key="index.name"
                            :class="{
                                'bg-green-100 text-green-700': index.fark > 0,
                                'bg-red-100  text-red-700 ': index.fark < 0,
                            }"
                            class="hover:bg-gray-100 transition-colors duration-300"
                        >
                            <td class="border px-4 py-2">{{ index.name }}</td>
                            <td class="border px-4 py-2">{{ index.son }}</td>
                            <td class="border px-4 py-2">{{ index.fark }}</td>
                            <td class="border px-4 py-2">
                                {{ index.fark_percent }}%
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <h3 class="text-xl font-bold mb-6 flex justify-center">
                    Dünya Endeksleri
                </h3>
                <table class="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th class="py-2">İsim</th>
                            <th class="py-2">Son</th>
                            <th class="py-2">Fark</th>
                            <th class="py-2">Fark %</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="index in marketData.dunyaEndeksleri"
                            :key="index.name"
                            :class="{
                                'bg-green-100 text-green-700': index.fark > 0,
                                'bg-red-100  text-red-700 ': index.fark < 0,
                            }"
                            class="hover:bg-gray-100 transition-colors duration-300"
                        >
                            <td class="border px-4 py-2">{{ index.name }}</td>
                            <td class="border px-4 py-2">{{ index.son }}</td>
                            <td class="border px-4 py-2">{{ index.fark }}</td>
                            <td class="border px-4 py-2">
                                {{ index.fark_percent }}%
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <h3 class="text-xl font-bold mb-6 flex justify-center">
                    Vadeli Endeksler
                </h3>
                <table class="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th class="py-2">İsim</th>
                            <th class="py-2">Son</th>
                            <th class="py-2">Fark</th>
                            <th class="py-2">Fark %</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="index in marketData.vadeliEndeksler"
                            :key="index.name"
                            :class="{
                                'bg-green-100 text-green-700': index.fark > 0,
                                'bg-red-100  text-red-700 ': index.fark < 0,
                            }"
                            class="hover:bg-gray-100 transition-colors duration-300"
                        >
                            <td class="border px-4 py-2">{{ index.name }}</td>
                            <td class="border px-4 py-2">{{ index.son }}</td>
                            <td class="border px-4 py-2">{{ index.fark }}</td>
                            <td class="border px-4 py-2">
                                {{ index.fark_percent }}%
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <h3 class="text-xl font-bold mb-6 flex justify-center">
                    Önemli Hisse Senetleri
                </h3>
                <table class="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th class="py-2">İsim</th>
                            <th class="py-2">Son</th>
                            <th class="py-2">Fark</th>
                            <th class="py-2">Fark %</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="index in marketData.onemliHisseSenetleri"
                            :key="index.name"
                            :class="{
                                'bg-green-100 text-green-700': index.fark > 0,
                                'bg-red-100  text-red-700 ': index.fark < 0,
                            }"
                            class="hover:bg-gray-100 transition-colors duration-300"
                        >
                            <td class="border px-4 py-2">{{ index.name }}</td>
                            <td class="border px-4 py-2">{{ index.son }}</td>
                            <td class="border px-4 py-2">{{ index.fark }}</td>
                            <td class="border px-4 py-2">
                                {{ index.fark_percent }}%
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <h3 class="text-xl font-bold mb-6 flex justify-center">
                    Emtiyalar
                </h3>
                <table class="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th class="py-2">İsim</th>
                            <th class="py-2">Son</th>
                            <th class="py-2">Fark</th>
                            <th class="py-2">Fark %</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="index in marketData.emtiyalar"
                            :key="index.name"
                            :class="{
                                'bg-green-100 text-green-700': index.fark > 0,
                                'bg-red-100  text-red-700 ': index.fark < 0,
                            }"
                            class="hover:bg-gray-100 transition-colors duration-300"
                        >
                            <td class="border px-4 py-2">{{ index.name }}</td>
                            <td class="border px-4 py-2">{{ index.son }}</td>
                            <td class="border px-4 py-2">{{ index.fark }}</td>
                            <td class="border px-4 py-2">
                                {{ index.fark_percent }}%
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <h3 class="text-xl font-bold mb-6 flex justify-center">
                    ETF'ler
                </h3>
                <table class="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th class="py-2">İsim</th>
                            <th class="py-2">Son</th>
                            <th class="py-2">Fark</th>
                            <th class="py-2">Fark %</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="index in marketData.etfler"
                            :key="index.name"
                            :class="{
                                'bg-green-100 text-green-700': index.fark > 0,
                                'bg-red-100  text-red-700 ': index.fark < 0,
                            }"
                            class="hover:bg-gray-100 transition-colors duration-300"
                        >
                            <td class="border px-4 py-2">{{ index.name }}</td>
                            <td class="border px-4 py-2">{{ index.son }}</td>
                            <td class="border px-4 py-2">{{ index.fark }}</td>
                            <td class="border px-4 py-2">
                                {{ index.fark_percent }}%
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <h3 class="text-xl font-bold mb-6 flex justify-center">
                    Oranlar & Tahviller
                </h3>
                <table class="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th class="py-2">İsim</th>
                            <th class="py-2">Son</th>
                            <th class="py-2">Fark</th>
                            <th class="py-2">Fark %</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="index in marketData.oranlarTahviller"
                            :key="index.name"
                            :class="{
                                'bg-green-100 text-green-700': index.fark > 0,
                                'bg-red-100  text-red-700 ': index.fark < 0,
                            }"
                            class="hover:bg-gray-100 transition-colors duration-300"
                        >
                            <td class="border px-4 py-2">{{ index.name }}</td>
                            <td class="border px-4 py-2">{{ index.son }}</td>
                            <td class="border px-4 py-2">{{ index.fark }}</td>
                            <td class="border px-4 py-2">
                                {{ index.fark_percent }}%
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <h3 class="text-xl font-bold mb-6 flex justify-center">
                    Önde Gelen Türk Hisse Senetleri
                </h3>
                <table class="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th class="py-2">İsim</th>
                            <th class="py-2">Son</th>
                            <th class="py-2">Fark</th>
                            <th class="py-2">Fark %</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="index in marketData.ondeGelenTurkHisseSenetleri"
                            :key="index.name"
                            :class="{
                                'bg-green-100 text-green-700': index.fark > 0,
                                'bg-red-100  text-red-700 ': index.fark < 0,
                            }"
                            class="hover:bg-gray-100 transition-colors duration-300"
                        >
                            <td class="border px-4 py-2">{{ index.name }}</td>
                            <td class="border px-4 py-2">{{ index.son }}</td>
                            <td class="border px-4 py-2">{{ index.fark }}</td>
                            <td class="border px-4 py-2">
                                {{ index.fark_percent }}%
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <h3 class="text-xl font-bold mb-6 flex justify-center">
                    En İyi Kripto Paralar
                </h3>
                <table class="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th class="py-2">İsim</th>
                            <th class="py-2">Son</th>
                            <th class="py-2">Fark</th>
                            <th class="py-2">Fark %</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="index in marketData.enIyiKriptoParalar"
                            :key="index.name"
                            :class="{
                                'bg-green-100 text-green-700': index.fark > 0,
                                'bg-red-100  text-red-700 ': index.fark < 0,
                            }"
                            class="hover:bg-gray-100 transition-colors duration-300"
                        >
                            <td class="border px-4 py-2">{{ index.name }}</td>
                            <td class="border px-4 py-2">{{ index.son }}</td>
                            <td class="border px-4 py-2">{{ index.fark }}</td>
                            <td class="border px-4 py-2">
                                {{ index.fark_percent }}%
                            </td>
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
    name: "MarketOverview",
    computed: {
        ...mapState(["marketData"]),
    },
    methods: {
        ...mapActions(["fetchMarketData"]),
    },
    created() {
        this.fetchMarketData();
    },
};
</script>

<style scoped>
/* Tailwind CSS classes kullanılacaktır */
</style>
