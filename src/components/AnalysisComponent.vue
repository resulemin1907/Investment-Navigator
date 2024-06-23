<template>
    <div class="container mx-auto px-4 py-8 relative -top-20">
        <h2 class="text-2xl font-bold mb-8 flex justify-center">
            Analiz & Yorum
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
                v-for="(analysis, index) in analyses"
                :key="index"
                class="p-4 bg-white shadow rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
                <div class="flex items-center mb-4">
                    <img
                        :src="analysis.image"
                        alt="Author Image"
                        class="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                        <h3
                            class="text-lg font-semibold hover:text-blue-500 transition-colors duration-300"
                        >
                            {{ analysis.title }}
                        </h3>
                        <p class="text-sm text-gray-500">
                            Yazar: {{ analysis.author }} &middot;
                            {{ analysis.date }}
                        </p>
                    </div>
                </div>
                <p class="text-gray-700">{{ analysis.summary }}</p>
                <div class="flex items-center mt-4">
                    <span class="text-sm text-gray-500">
                        {{ analysis.comments }} Yorum
                    </span>
                    <span class="text-sm text-gray-500 ml-4">
                        {{ analysis.likes }} Beğeni
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import newsImage from "@/assets/news-image.png";

export default {
    name: "AnalysisComponent",

    data() {
        return {
            analyses: [
                {
                    title: "Tüpraş'ın Finansal Sağlığı Ne Durumda?",
                    author: "Günay Caymaz",
                    date: "18.06.2024",
                    summary:
                        "Tüpraş'ın finansal durumu hakkında detaylı bir inceleme...",
                    comments: 9,
                    likes: 5,
                    image: newsImage,
                },
                {
                    title: "Özel Seri: Haftanın En Çok Kazandıran ve Kaybettiren Kripto Para Birimleri",
                    author: "Investing.com Türkiye",
                    date: "15.06.2024",
                    summary:
                        "Kripto para piyasasındaki haftalık kazanç ve kayıplar...",
                    comments: 12,
                    likes: 7,
                    image: newsImage,
                },
                {
                    title: "Piyasada Boğa Görünümünün Devam Edeceğini Öne Süren 3 Gösterge",
                    author: "Calogero Selvaggio",
                    date: "14.06.2024",
                    summary:
                        "Piyasada boğa görünümünün devam edeceğine dair göstergeler...",
                    comments: 14,
                    likes: 8,
                    image: newsImage,
                },
                {
                    title: "İşlem Vergisi Ertelendi, Borsa Yükseldi: Kalıcı Bir Artış mı?",
                    author: "Eren Can Umut",
                    date: "14.06.2024",
                    summary:
                        "İşlem vergisinin ertelenmesinin borsa üzerindeki etkileri...",
                    comments: 8,
                    likes: 6,
                    image: newsImage,
                },
            ],
        };
    },
};
</script>

<style scoped>
/* Tailwind CSS classes kullanılacaktır */
.container {
    cursor: pointer;
}
</style>
