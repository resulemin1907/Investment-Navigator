<template>
  <exchange></exchange>

  <div class="container mx-auto px-4 py-8 flex">
    <div class="w-3/4 pr-8">
      <h1 class="text-2xl font-bold mb-14 ml-7 flex justify-center">Ekonomi Haberleri</h1>
      <div
        v-for="news in newsList"
        :key="news.id"
        class="flex mb-6 transition-transform duration-300 hover:scale-105"
      >
        <img
          :src="news.image"
          alt="News Image"
          class="w-1/3 h-auto rounded-lg mr-4 mb-7 object-containe"
        />
        <div class="">
          <a
            :href="news.link"
            class="text-lg font-semibold text-blue-600 hover:underline"
          >
            {{ news.title }}
          </a>
          <p class="text-sm text-gray-500">{{ news.date }}</p>
          <p class="text-sm">{{ news.content }}</p>
          <p class="text-sm text-gray-500 mt-1">
            {{ news.category }}
          </p>
        </div>
      </div>
    </div>
    <div class="w-1/4 space-y-4 mt-20 ml-8">
      <StocksTable />
      <WhatHappened />
      <MostWatched />
    </div>
  </div>
</template>

<script>
import newsImage from "@/assets/news-image.png";
import exchange from "./exchange.vue";
import StocksTable from "./StocksTable.vue";
import WhatHappened from "./WhatHappened.vue";
import MostWatched from "./MostWatched.vue";
export default {
  name: "ekonomi-haberleri",
  components: {
    exchange,
    StocksTable,
    WhatHappened,
    MostWatched,
  },
  data() {
    return {
      newsList: [
        {
          id: 1,
          title:
            "Pegasus, yurt dışında 750 milyon dolara kadar borçlanma aracı ihracı için SPK'ya başvurdu",
          date: "17-06-2024 13:39:57",
          content:
            "Pegasus, yurt dışında satılmak üzere 750 milyon dolar tutara kadar borçlanma aracı ihracı için Sermaye Piyasası Kurulu'na (SPK) başvurdu.",
          category: "Şirket Haberleri",
          image: newsImage,
          link: "#",
        },
        {
          id: 2,
          title: "Alfa Solar, 2024 yılında 10 milyar TL hasılat öngörüyor",
          date: "17-06-2024 13:25:26",
          content:
            "Alfa Solar Enerji Sanayi ve Ticaret AŞ, 2024 yılında hasılatını %29.3 artırarak 10 milyar TL'ye çıkarmayı öngörüyor.",
          category: "Şirket Haberleri",
          image: newsImage,
          link: "#",
        },
        {
          id: 3,
          title:
            "SPK, 16 şirkete ilk çeyrek finansal raporlarını KAP'a göndermeleri için ek süre verdi",
          date: "17-06-2024 13:15:55",
          content:
            "Sermaye Piyasası Kurulu (SPK), Borsa İstanbul'da işlem gören 15 şirket ile bir aracı kurumun 31.03.2024 tarihli finansal raporlarını KAP'a bildirim ile ilgili olarak ek süre verilmesini onayladı.",
          category: "Şirket Haberleri",
          image: newsImage,
          link: "#",
        },
        {
          id: 4,
          title: "FLO'nun halka arzına yönelik izahnamenin onayı için SPK'ya başvuruldu",
          date: "17-06-2024 13:03:54",
          content:
            "Gözde Girişim Sermayesi Yatırım Ortaklığı AŞ, Flo Mağazacılık ve Pazarlama AŞ'deki (FLO) paylarının halka arzına yönelik hazırlanan izahnamenin onayı için Sermaye Piyasası Kurulu'na (SPK) başvurdu.",
          category: "Şirket Haberleri",
          image: newsImage,
          link: "#",
        },
        {
          id: 5,
          title: "Meditera'nın ilk çeyrek satış hasılatı %12 arttı",
          date: "17-06-2024 12:39:41",
          content:
            "Meditera Tıbbi Malzeme Sanayi ve Ticaret AŞ'nin, 2024 yılının ilk çeyreğine ilişkin sonuçları açıklandı. Meditera'nın satış hasılatı 2024 yılının ilk çeyreğinde 436 milyon TL ile geçen senenin aynı dön...",
          category: "Şirket Haberleri",
          image: newsImage,
          link: "#",
        },
        {
          id: 6,
          title: "Tümosan, ATS üretimi için fabrika kuracak",
          date: "17-06-2024 12:32:47",
          content:
            "Tümosan, Konya Özel Endüstri Bölgesi içerisinde 10.000 m² kapalı alanda yıllık 20.000 adet kapasiteye sahip ATS üretimi için yatırım maliyeti yaklaşık 450 milyon TL öngörülen fabrika kurulmasına karar...",
          category: "Şirket Haberleri",
          image: newsImage,
          link: "#",
        },
        {
          id: 7,
          title: "E - İmza'dan sonra E-Mühür geliyor",
          date: "17-06-2024 12:03:59",
          content:
            "Ulaştırma ve Altyapı Bakanı Abdulkadir Uraloğlu, Elektronik Mühür altyapısının tamamlanarak hizmete hazır hale getirildiğini bildirerek, “Elektronik Mühür ile kamu işlemlerinin dijitalleşmesinin yanı ...",
          category: "Gündem Haberleri",
          image: newsImage,
          link: "#",
        },
        {
          id: 8,
          title:
            "Pegasus, yurt dışında 750 milyon dolara kadar borçlanma aracı ihracı için SPK'ya başvurdu",
          date: "17-06-2024 13:39:57",
          content:
            "Pegasus, yurt dışında satılmak üzere 750 milyon dolar tutara kadar borçlanma aracı ihracı için Sermaye Piyasası Kurulu'na (SPK) başvurdu.",
          category: "Şirket Haberleri",
          image: newsImage,
          link: "#",
        },
        {
          id: 9,
          title: "Alfa Solar, 2024 yılında 10 milyar TL hasılat öngörüyor",
          date: "17-06-2024 13:25:26",
          content:
            "Alfa Solar Enerji Sanayi ve Ticaret AŞ, 2024 yılında hasılatını %29.3 artırarak 10 milyar TL'ye çıkarmayı öngörüyor.",
          category: "Şirket Haberleri",
          image: newsImage,
          link: "#",
        },
        {
          id: 10,
          title:
            "SPK, 16 şirkete ilk çeyrek finansal raporlarını KAP'a göndermeleri için ek süre verdi",
          date: "17-06-2024 13:15:55",
          content:
            "Sermaye Piyasası Kurulu (SPK), Borsa İstanbul'da işlem gören 15 şirket ile bir aracı kurumun 31.03.2024 tarihli finansal raporlarını KAP'a bildirim ile ilgili olarak ek süre verilmesini onayladı.",
          category: "Şirket Haberleri",
          image: newsImage,
          link: "#",
        },
        {
          id: 11,
          title: "FLO'nun halka arzına yönelik izahnamenin onayı için SPK'ya başvuruldu",
          date: "17-06-2024 13:03:54",
          content:
            "Gözde Girişim Sermayesi Yatırım Ortaklığı AŞ, Flo Mağazacılık ve Pazarlama AŞ'deki (FLO) paylarının halka arzına yönelik hazırlanan izahnamenin onayı için Sermaye Piyasası Kurulu'na (SPK) başvurdu.",
          category: "Şirket Haberleri",
          image: newsImage,
          link: "#",
        },
        {
          id: 12,
          title: "Meditera'nın ilk çeyrek satış hasılatı %12 arttı",
          date: "17-06-2024 12:39:41",
          content:
            "Meditera Tıbbi Malzeme Sanayi ve Ticaret AŞ'nin, 2024 yılının ilk çeyreğine ilişkin sonuçları açıklandı. Meditera'nın satış hasılatı 2024 yılının ilk çeyreğinde 436 milyon TL ile geçen senenin aynı dön...",
          category: "Şirket Haberleri",
          image: newsImage,
          link: "#",
        },
        {
          id: 13,
          title: "Tümosan, ATS üretimi için fabrika kuracak",
          date: "17-06-2024 12:32:47",
          content:
            "Tümosan, Konya Özel Endüstri Bölgesi içerisinde 10.000 m² kapalı alanda yıllık 20.000 adet kapasiteye sahip ATS üretimi için yatırım maliyeti yaklaşık 450 milyon TL öngörülen fabrika kurulmasına karar...",
          category: "Şirket Haberleri",
          image: newsImage,
          link: "#",
        },
        {
          id: 14,
          title: "E - İmza'dan sonra E-Mühür geliyor",
          date: "17-06-2024 12:03:59",
          content:
            "Ulaştırma ve Altyapı Bakanı Abdulkadir Uraloğlu, Elektronik Mühür altyapısının tamamlanarak hizmete hazır hale getirildiğini bildirerek, “Elektronik Mühür ile kamu işlemlerinin dijitalleşmesinin yanı ...",
          category: "Gündem Haberleri",
          image: newsImage,
          link: "#",
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.pr-8 {
  padding-right: 2rem;
}

.space-y-4 > * + * {
  margin-top: 1rem;
}

.transition-transform {
  transition: transform 0.3s ease-in-out;
}

.hover\:scale-105:hover {
  transform: scale(1.05);
}
</style>
