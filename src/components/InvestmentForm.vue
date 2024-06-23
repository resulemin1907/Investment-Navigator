<template>
    <div
        class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md transition-all duration-300 transform relative -top-28"
    >
        <h1 class="text-xl font-bold mb-4 text-center">
            Yatırım Hesaplama Formu
        </h1>
        <form @submit.prevent="calculateInvestment">
            <div class="mb-4">
                <label class="block text-gray-700">Kategori Seçiniz</label>
                <select
                    v-model="selectedCategory"
                    @change="updateCompanies"
                    class="w-full mt-2 p-2 border rounded-md transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-500"
                >
                    <option
                        v-for="category in categoryNames"
                        :key="category"
                        :value="category"
                    >
                        {{ category }}
                    </option>
                </select>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700">Şirket İsmi Seçiniz</label>
                <select
                    v-model="selectedCompany"
                    class="w-full mt-2 p-2 border rounded-md transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-500"
                >
                    <option
                        v-for="company in filteredCompanies"
                        :key="company"
                        :value="company"
                    >
                        {{ company }}
                    </option>
                </select>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700"
                    >Yatıracağınız Miktarı Seçin</label
                >
                <input
                    type="number"
                    v-model="investmentAmount"
                    class="w-full mt-2 p-2 border rounded-md transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700">İlk Tarihi Seçin</label>
                <input
                    type="date"
                    v-model="startDate"
                    :max="currentDate"
                    class="w-full mt-2 p-2 border rounded-md transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-500"
                    @change="validateDate('start')"
                />
                <p v-if="startDateError" class="text-red-500">
                    {{ startDateError }}
                </p>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700">Son Tarihi Seçin</label>
                <input
                    type="date"
                    v-model="endDate"
                    :max="currentDate"
                    class="w-full mt-2 p-2 border rounded-md transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-500"
                    @change="validateDate('end')"
                />
                <p v-if="endDateError" class="text-red-500">
                    {{ endDateError }}
                </p>
                <div class="mt-2">
                    <label class="text-gray-700">
                        <input type="checkbox" v-model="useCurrentDate" />
                        Güncel tarih ile devam etmek istiyorum
                    </label>
                </div>
            </div>
            <button
                type="submit"
                class="w-full bg-blue-500 text-white p-2 rounded-md transition duration-300 ease-in-out transform"
            >
                Hesapla
            </button>
        </form>
        <transition name="fade">
            <div
                v-if="result"
                class="mt-4 p-4 bg-green-100 text-green-700 rounded-md"
            >
                <p>{{ result }}</p>
            </div>
        </transition>
        <transition name="fade">
            <div
                v-if="profit"
                class="mt-4 p-4 bg-green-500 text-white rounded-md"
            >
                <p>{{ profit }}</p>
            </div>
        </transition>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    data() {
        return {
            selectedCategory: null,
            selectedCompany: null,
            investmentAmount: null,
            startDate: null,
            endDate: null,
            useCurrentDate: false,
            result: null,
            profit: null,
            currentDate: new Date().toISOString().split("T")[0],
            startDateError: null,
            endDateError: null,
            categories: {
                "Teknoloji ve İletişim": [
                    "Apple",
                    "ıbm",
                    "Google",
                    "Meta",
                    "Samsung",
                    "Intel",
                    "Spotify",
                    "Netflix",
                    "Microsoft",
                    "Nvidia",
                    "Etsy",
                    "Shopify",
                    "Starbucks",
                    "Airbnb",
                    "eBay",
                    "Tesla",
                    "Turkcell",
                ],
                Otomotiv: [
                    "Toyota",
                    "Volkswagen",
                    "Ford",
                    "Honda",
                    "Porsche",
                    "Tesla",
                    "Tofaş",
                ],
                "Tüketici Ürünleri": [
                    "loreal",
                    "Heineken",
                    "Coca-Cola",
                    "Pepsi",
                    "Hermès",
                    "Adidas",
                    "Nike",
                    "McDonalds",
                    "Nestlé",
                    "Ülker",
                    "Dominos",
                ],
                Enerji: ["Shell", "Zoren", "Tupras"],
                "Finans ve Bankacılık": [
                    "Mastercard",
                    "Visa",
                    "Allianz",
                    "İşBankası",
                    "Akbank",
                    "YapıKredi",
                    "Halkbank",
                    "VakıfBank",
                ],
                "Ulaşım ve Lojistik": ["Boeing", "FedEx", "THYAO", "Pegasus"],
                "Eğlence ve Medya": ["Disney", "Netflix"],
                "Savunma ve Elektronik": ["Aselsan"],
                Perakende: ["BİM", "Migros"],
                Konglomerat: [
                    "Koç Holding",
                    "Doğuş Holding",
                    "Doğan Holding",
                    "Sabancı Holding",
                ],
                "İnşaat ve Enerji": ["Enka"],
            },
        };
    },
    computed: {
        ...mapState(["companies"]),
        categoryNames() {
            return Object.keys(this.categories);
        },
        companyNames() {
            return Object.keys(this.companies).map(
                (company) => company.charAt(0).toUpperCase() + company.slice(1)
            );
        },
        filteredCompanies() {
            return this.selectedCategory
                ? this.categories[this.selectedCategory]
                : [];
        },
        selectedCompanyData() {
            return this.companies[this.selectedCompany?.toLowerCase()];
        },
    },
    methods: {
        ...mapActions(["fetchCompanies"]),
        updateCompanies() {
            this.selectedCompany = null;
        },
        calculateInvestment() {
            if (this.useCurrentDate) {
                this.endDate = this.currentDate;
            }

            if (
                !this.selectedCompany ||
                !this.investmentAmount ||
                !this.startDate ||
                !this.endDate
            ) {
                this.result = "Lütfen tüm alanları doldurun.";
                this.profit = null;
                return;
            }

            const startData = this.selectedCompanyData.find(
                (entry) => entry.Date === this.startDate
            );
            const endData = this.useCurrentDate
                ? this.selectedCompanyData[this.selectedCompanyData.length - 1]
                : this.selectedCompanyData.find(
                      (entry) => entry.Date === this.endDate
                  );

            if (!startData || !endData) {
                this.result = "Geçersiz tarih aralığı seçildi.";
                this.profit = null;
                return;
            }

            const startPrice = startData.Close;
            const endPrice = endData.Close;

            const profit =
                ((endPrice - startPrice) / startPrice) * this.investmentAmount;
            const totalAmount = profit + this.investmentAmount;

            this.result = `${this.startDate} tarihinde bu hisseye${
                this.investmentAmount
            } ${this.getCurrency()} yatırsaydınız, ${
                this.endDate
            } tarihinde toplam paranız ${this.formatCurrency(
                totalAmount
            )} olacaktı.`;
            this.profit = `Kar: ${this.formatCurrency(profit)}`;
        },
        getCurrency() {
            const foreignCompanies = [
                "Apple",
                "loreal",
                "Toyota",
                "ıbm",
                "Dominos",
                "Heineken",
                "Hermès",
                "Boeing",
                "Netflix",
                "Google",
                "Meta",
                "Shell",
                "Coca-Cola",
                "Pepsi",
                "Samsung",
                "Intel",
                "Etsy",
                "Adidas",
                "Spotify",
                "FedEx",
                "Volkswagen",
                "Shopify",
                "Starbucks",
                "Airbnb",
                "Allianz",
                "Siemens",
                "Nike",
                "McDonalds",
                "Nestlé",
                "Mastercard",
                "Visa",
                "Amazon",
                "Microsoft",
                "Nvidia",
                "Ford",
                "Honda",
                "Porsche",
                "eBay",
                "Disney",
                "Tesla",
            ];
            return foreignCompanies.includes(this.selectedCompany)
                ? "USD"
                : "TL";
        },
        formatCurrency(amount) {
            const currency = this.getCurrency();
            if (currency === "USD") {
                if (amount >= 1e6) {
                    return (amount / 1e6).toFixed(2) + " Milyon USD";
                } else if (amount >= 1e3) {
                    return (amount / 1e3).toFixed(2) + " Bin USD";
                } else {
                    return amount.toFixed(2) + " USD";
                }
            } else {
                if (amount >= 1e6) {
                    return (amount / 1e6).toFixed(2) + " Milyon TL";
                } else if (amount >= 1e3) {
                    return (amount / 1e3).toFixed(2) + " Bin TL";
                } else {
                    return amount.toFixed(2) + " TL";
                }
            }
        },
        validateDate(type) {
            const date = type === "start" ? this.startDate : this.endDate;
            if (date && new Date(date).getDate() !== 1) {
                this[`${type}DateError`] = "Lütfen ayın 1'ini seçin.";
            } else {
                this[`${type}DateError`] = null;
            }
        },
    },
    mounted() {
        this.fetchCompanies();
    },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
}
</style>
