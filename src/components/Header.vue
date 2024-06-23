<template>
    <header
        class="bg-white dark:bg-gray-300 shadow-md py-4 px-8 flex items-center justify-between fixed w-full z-50 cursor-pointer transition-transform duration-300 ease-in-out"
    >
        <div class="flex items-center">
            <img
                src="@/assets/bg-logo.png"
                alt="Logo"
                class="h-12 mr-3 rounded-2xl transition-transform duration-300 hover:scale-105"
            />
            <h1
                class="text-2xl font-bold text-blue-600 transition-colors duration-300 hover:text-blue-800"
            >
                Investment Navigator
            </h1>
        </div>

        <nav class="hidden md:flex items-center space-x-8">
            <router-link
                to="/home"
                class="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
                >Home</router-link
            >

            <div class="relative">
                <button
                    @click="toggleDropdown('news')"
                    class="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
                >
                    Haberler
                </button>
                <div
                    v-if="dropdowns.news"
                    @mouseleave="closeDropdown('news')"
                    class="absolute mt-2 w-48 bg-white shadow-lg rounded-lg transition-opacity duration-300"
                >
                    <router-link
                        to="/ekonomi-haberleri"
                        class="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                        >Ekonomi Haberleri</router-link
                    >
                    <router-link
                        to="/piyasa-haberleri"
                        class="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                        >Piyasa Haberleri</router-link
                    >
                    <router-link
                        to="/sirket-haberleri"
                        class="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                        >Şirket Haberleri</router-link
                    >
                    <router-link
                        to="/doviz-haberleri"
                        class="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                        >Döviz Haberleri</router-link
                    >
                    <router-link
                        to="/kripto-haberleri"
                        class="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                        >Kripto Haberleri</router-link
                    >
                    <router-link
                        to="/kiymetli-metal-haberleri"
                        class="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                        >Kıymetli Metal Haberleri</router-link
                    >
                    <router-link
                        to="/urun-haberleri"
                        class="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                        >Ürün Haberleri</router-link
                    >
                </div>
            </div>

            <div class="relative">
                <router-link
                    @click.native="toggleDropdown('borsa')"
                    to="/bist"
                    class="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                    >Borsa</router-link
                >
                <div
                    v-if="dropdowns.borsa"
                    @mouseleave="closeDropdown('borsa')"
                    class="absolute mt-2 w-48 bg-white shadow-lg rounded-lg transition-opacity duration-300"
                >
                    <router-link
                        to="/bist100"
                        class="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                        >BIST Hisseleri</router-link
                    >
                    <router-link
                        to="/highlights"
                        class="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                        >BIST Öne Çıkanlar</router-link
                    >
                    <a
                        href="#"
                        class="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                        >BIST Endeksleri</a
                    >
                </div>
            </div>

            <SearchBar />

            <div class="relative">
                <button
                    @click="toggleDropdown('kripto')"
                    class="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
                >
                    Kripto
                </button>
                <div
                    v-if="dropdowns.kripto"
                    @mouseleave="closeDropdown('kripto')"
                    class="absolute mt-2 w-48 bg-white shadow-lg rounded-lg transition-opacity duration-300"
                >
                    <a
                        href="#"
                        class="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                        >Öne Çıkanlar</a
                    >
                    <router-link
                        to="/crypto-rates"
                        class="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                        >Tüm Kriptolar</router-link
                    >
                </div>
            </div>

            <div class="relative">
                <router-link
                    @click.native="toggleDropdown('doviz')"
                    to="/doviz"
                    class="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                    >Döviz</router-link
                >
                <div
                    v-if="dropdowns.doviz"
                    @mouseleave="closeDropdown('doviz')"
                    class="absolute mt-2 w-48 bg-white shadow-lg rounded-lg transition-opacity duration-300"
                >
                    <router-link
                        to="/gold-prices"
                        class="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                        >Altın Fiyatları</router-link
                    >
                    <router-link
                        to="/currency-rates"
                        class="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                        >Canlı Döviz Kurları</router-link
                    >
                    <router-link
                        to="/precious-metals-prices"
                        class="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                        >Kıymetli Maden Fiyatları</router-link
                    >
                </div>
            </div>

            <div class="relative">
                <button
                    @click="toggleDropdown('hesaplama')"
                    class="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
                >
                    Hesaplama
                </button>
                <div
                    v-if="dropdowns.hesaplama"
                    @mouseleave="closeDropdown('hesaplama')"
                    class="absolute mt-2 w-48 bg-white shadow-lg rounded-lg transition-opacity duration-300"
                >
                    <router-link
                        to="/converter"
                        class="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                        >Döviz Çevirici</router-link
                    >
                    <router-link
                        to="/retirement-calculator"
                        class="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                    >
                        Emeklilik Hesaplayıcı</router-link
                    >
                    <router-link
                        to="/overtime-calculator"
                        class="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                    >
                        Mesai Hesaplama</router-link
                    >
                    <router-link
                        to="/severance-pay-calculator"
                        class="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                    >
                        Kıdem Tazminatı</router-link
                    >
                </div>
            </div>
        </nav>

        <div class="relative">
            <div
                @click="toggleDropdown('profile')"
                class="cursor-pointer h-10 w-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold"
            >
                {{ userInitials }}
            </div>
            <div
                v-if="dropdowns.profile"
                @mouseleave="closeDropdown('profile')"
                class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 shadow-lg rounded-lg transition-opacity duration-300"
            >
                <a
                    @click="logout"
                    class="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-600 flex items-center"
                >
                    <i class="fas fa-sign-out-alt mr-2"></i> Logout
                </a>
                <a
                    @click="toggleDarkMode"
                    class="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-600 flex items-center"
                >
                    <i
                        :class="{
                            'fas fa-moon': !isDarkMode,
                            'fas fa-sun': isDarkMode,
                        }"
                        class="mr-2"
                    ></i>
                    <span>{{ isDarkMode ? "Light Mode" : "Dark Mode" }}</span>
                </a>
            </div>
        </div>
    </header>
    <NewsSlider></NewsSlider>
</template>

<script>
import SearchBar from "./SearchBar.vue";
import NewsSlider from "./NewsSlider.vue";
export default {
    name: "Header",
    components: {
        SearchBar,
        NewsSlider,
    },
    data() {
        return {
            dropdowns: {
                news: false,
                borsa: false,
                kripto: false,
                doviz: false,
                hesaplama: false,
                profile: false,
            },
        };
    },
    methods: {
        toggleDropdown(dropdown) {
            this.closeAllDropdowns();
            this.dropdowns[dropdown] = !this.dropdowns[dropdown];
        },
        closeDropdown(dropdown) {
            this.dropdowns[dropdown] = false;
        },
        closeAllDropdowns() {
            Object.keys(this.dropdowns).forEach((key) => {
                this.dropdowns[key] = false;
            });
        },
        logout() {
            this.$store.dispatch("logout");
            this.$router.push("/login");
        },
        toggleDarkMode() {
            this.$emit("toggle-dark-mode");
        },
    },
    computed: {
        user() {
            return this.$store.state.user;
        },
        userInitials() {
            if (this.user && this.user.email) {
                return this.user.email.charAt(0).toUpperCase();
            }
            return "";
        },
        isDarkMode() {
            return this.$root.isDarkMode;
        },
    },
};
</script>

<style scoped>
header {
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 1rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    z-index: 50;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
}

nav a,
nav button {
    font-size: 1.125rem; /* 18px */
    font-weight: 500;
    color: #4a5568; /* gray-700 */
    transition: color 0.3s;
}

nav a:hover,
nav button:hover {
    color: #2563eb; /* blue-600 */
}

.dropdown {
    display: none;
}

.dropdown[style*="display: block;"] {
    display: block !important;
}

.header-button {
    font-size: 1.125rem; /* 18px */
    font-weight: 500;
    color: #4a5568; /* gray-700 */
    transition: color 0.3s;
}

.header-button:hover {
    color: #2563eb; /* blue-600 */
}

.header-button:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
}

input[type="text"] {
    padding: 0.5rem 1rem;
    border: 1px solid #e2e8f0; /* gray-300 */
    border-radius: 0.375rem; /* rounded-lg */
    transition: all 0.3s;
}

input[type="text"]:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
}

.dropdown {
    position: absolute;
    right: 0;
    top: 100%;
    margin-top: 0.5rem;
    width: 12rem; /* 48 */
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem; /* rounded-lg */
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.dropdown a {
    display: block;
    padding: 0.5rem 1rem;
    color: #4a5568; /* gray-700 */
    transition: background-color 0.3s;
}

.dropdown a:hover {
    background-color: #ebf8ff; /* blue-100 */
}

@media (max-width: 768px) {
    nav {
        display: none;
    }
    .mobile-menu-button {
        display: inline-block;
    }
}

@media (min-width: 769px) {
    .mobile-menu-button {
        display: bloc;
    }
}
</style>
