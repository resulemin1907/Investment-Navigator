<template>
    <div class="relative">
        <div class="relative">
            <input
                type="text"
                v-model="searchQuery"
                placeholder="Sembol kodu, şirket adı veya haber konusu girin ..."
                @focus="showDropdown = true"
                @blur="hideDropdown"
                class="w-full px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            />
            <i class="fas fa-search absolute left-3 top-2.5 text-gray-400"></i>
            <i
                v-if="searchQuery"
                class="fas fa-times absolute right-3 top-2.5 text-gray-400 cursor-pointer"
                @click="clearSearch"
            ></i>
        </div>
        <div
            v-if="showDropdown"
            class="absolute top-full left-0 w-full bg-white border rounded-lg mt-2 shadow-lg z-50"
        >
            <div class="flex">
                <div class="w-full p-4">
                    <h3 class="text-lg font-semibold mb-2">En Çok Arananlar</h3>
                    <ul>
                        <li
                            v-for="item in mostSearched"
                            :key="item.name"
                            class="cursor-pointer hover:bg-gray-100"
                        >
                            <span class="block font-bold">{{ item.name }}</span>
                            <span class="block text-sm">{{
                                item.description
                            }}</span>
                            <span class="block text-sm text-gray-500">{{
                                item.type
                            }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showDropdown: false,
            searchQuery: "",
            mostSearched: [
                {
                    name: "Dolar",
                    description: "Amerikan Doları Türk Lirası",
                },
                {
                    name: "THYAO",
                    description: "Türk Hava Yolları",
                },
                { name: "Euro", description: "Euro Türk Lirası" },

                {
                    name: "Gram Altın ",
                    description: "Spot Altın TL/Gr",
                },
                {
                    name: "KCHOL",
                    description: "Koç Holding",
                },
                {
                    name: "Çeyrek Altın",
                    description: "Çeyrek Altın",
                },
                {
                    name: "Yarım Altın",
                    description: "Yarım Altın",
                },
                {
                    name: "EREGL",
                    description: "Ereğli Demir ve Çelik Fabrikaları T.A.Ş",
                },
            ],
        };
    },
    methods: {
        hideDropdown() {
            setTimeout(() => {
                this.showDropdown = false;
            }, 200);
        },
        clearSearch() {
            this.searchQuery = "";
        },
    },
};
</script>

<style scoped>
/* Tailwind CSS classes will be used */
</style>
