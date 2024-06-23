<template>
    <div
        class="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-blue-500 relative"
    >
        <div class="absolute top-4 right-4">
            <button
                @click="setLanguage('tr')"
                :class="languageButtonClass('tr')"
            >
                TR
            </button>
            <button
                @click="setLanguage('en')"
                :class="languageButtonClass('en')"
            >
                EN
            </button>
        </div>
        <div
            class="bg-white p-8 rounded-lg shadow-lg max-w-lg transform transition-transform duration-300 ease-in-out"
        >
            <div class="flex flex-col items-center -mb-8">
                <h1 class="text-4xl font-extrabold text-blue-600">
                    Investment Navigator
                </h1>
                <img
                    src="@/assets/InvestmentLogo.png"
                    alt="Logo"
                    class="h-32 mb-4 object-contain w-40"
                />
            </div>
            <form @submit.prevent="handleLogin" class="">
                <div class="mb-4">
                    <label
                        class="block mb-2 text-sm font-medium text-gray-700"
                        for="email"
                        >{{ translations.email }}</label
                    >
                    <input
                        v-model="email"
                        type="email"
                        id="email"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>
                <div class="mb-6">
                    <label
                        class="block mb-2 text-sm font-medium text-gray-700"
                        for="password"
                        >{{ translations.password }}</label
                    >
                    <input
                        v-model="password"
                        type="password"
                        id="password"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>
                <button
                    type="submit"
                    class="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
                >
                    {{ translations.login }}
                </button>
            </form>
            <p v-if="errorMessage" class="text-red-500 mt-4 text-center">
                {{ errorMessage }}
            </p>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "LoginPage",
    data() {
        return {
            email: "",
            password: "",
            errorMessage: "",
            language: "en",
            translations: {
                email: "Email",
                password: "Password",
                login: "Login",
            },
        };
    },
    methods: {
        ...mapActions(["login"]),
        async handleLogin() {
            const success = await this.login({
                email: this.email,
                password: this.password,
            });
            if (success) {
                this.$router.push("/home");
            } else {
                this.errorMessage = "Invalid login credentials";
            }
        },
        setLanguage(lang) {
            this.language = lang;
            this.translations =
                lang === "tr"
                    ? {
                          email: "E-posta",
                          password: "Şifre",
                          login: "Giriş Yap",
                      }
                    : {
                          email: "Email",
                          password: "Password",
                          login: "Login",
                      };
        },
        languageButtonClass(lang) {
            return this.language === lang
                ? "text-white bg-blue-600 px-3 py-1 rounded-lg ml-2"
                : "text-blue-600 bg-white border border-blue-600 px-3 py-1 rounded-lg ml-2 hover:bg-blue-600 hover:text-white transition-colors";
        },
    },
};
</script>

<style scoped>
/* Tailwind CSS classes kullanılacaktır */
</style>
