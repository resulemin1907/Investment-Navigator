<template>
  <exchange></exchange>

  <div class="container mx-auto px-4 py-8 relative bottom-24 cursor-pointer">
    <h1 class="text-2xl font-bold mb-4">Emeklilik Hesaplama</h1>
    <div class="bg-blue-900 p-6 rounded-lg text-black w-full">
      <div class="mb-4">
        <label class="block mb-2">Sigorta Türü:</label>
        <select v-model="insuranceType" class="w-full px-4 py-2 border rounded">
          <option value="SSK-4A">SSK-4A</option>
          <option value="Bağ-Kur-4B">Bağ-Kur-4B</option>
          <option value="Emekli Sandığı-4C">Emekli Sandığı-4C</option>
        </select>
      </div>
      <div class="mb-4">
        <label class="block mb-2">Doğum Tarihi:</label>
        <input type="date" v-model="birthDate" class="w-full px-4 py-2 border rounded" />
      </div>
      <div class="mb-4">
        <label class="block mb-2">Sigorta Başlangıç Tarihi:</label>
        <input
          type="date"
          v-model="insuranceStartDate"
          class="w-full px-4 py-2 border rounded"
        />
      </div>
      <div class="mb-4">
        <label class="block mb-2">Cinsiyet:</label>
        <select v-model="gender" class="w-full px-4 py-2 border rounded">
          <option value="Erkek">Erkek</option>
          <option value="Kadın">Kadın</option>
        </select>
      </div>
      <button
        @click="calculateRetirementAge"
        class="w-full bg-yellow-500 text-black px-4 py-2 rounded"
      >
        HESAPLA
      </button>
    </div>

    <div v-if="retirementAge !== null" class="mt-4">
      <h2 class="text-xl font-bold">Emeklilik Yaşınız: {{ retirementAge }}</h2>
    </div>

    <div class="mt-4">
      <h2 class="text-xl font-bold">Emekli Maaşı Hesaplama</h2>
      <p>2000 yılı öncesi hesaplama şu şekilde yapılmaktadır:</p>
      <p>Gösterge Rakamı X Aylık Bağlama Oranı X Katsayı = 4 A emekli maaşı</p>
      <p>2000 – 2008 yılları arasında 4 A girişi olan kişilerin emekli maaşları:</p>
      <p>Güncelleme Kat Sayısı X Aylık Bağlama Oranı = 4 A emekli maaşı</p>
      <p>
        2008 yılından sonra SGK kaydı bulunan kişilerin emekli maaşları şu şekilde
        yapılmaktadır:
      </p>
      <p>Aylık Kazancın Ortalaması X Bağlanma Oranı = 4 A emekli maaşı</p>
    </div>

    <div class="mt-4">
      <h2 class="text-xl font-bold">Ne Kadar Emekli Maaşı Alırım?</h2>
      <p>
        ‘Ne kadar emekli maaşı alırım?’ sorusunun cevabını en kolay yoldan doğru bir
        şekilde almak için emekli maaşı hesaplama aracını kullanabilirsiniz.
      </p>
      <p>
        Hesaplamalarda sigortalının başlangıç tarihinden itibaren ödediği prim gün sayısı,
        emeklilik sürecinin en önemli belirleyicilerindendir. Kişi, kanunlar tarafından
        belirlenen emeklilik koşullarını tamamladığında emekli olmaya hak kazanır.
      </p>
      <p>
        Türkiye’de üç farklı sigorta sistemi vardır. Sosyal Güvenlik Kurumu (SGK)
        bünyesinde bulunan bu sigorta kolları 4A, 4B ve 4C şeklindedir. Sigorta kollarına
        göre emeklilik şartları da değişmektedir. SSK (4A), Bağ-Kur (4B) ve Emekli Sandığı
        (4C) olarak ifade edilir. Bu statülerin açıklamaları şu şekildedir:
      </p>
      <p>
        4A: Kamu kurumlarına ait olmayan herhangi bir iş yerinde çalışan tüm işçiler,
        ayrıca kamu kurumlarında taşeron olarak çalışan kişiler de bu statüde
        değerlendirilir.
      </p>
      <p>
        4B: İş yeri sahipleri, muhtarlar, çiftçiler, şirket ortakları gibi kendi işini
        yapan ve vergi levhalı iş yeri sahipleri bu statü altında yer alır. Bazı
        istisnalar dışında bu kategoridedirler.
      </p>
      <p>
        4C: Kamu kurumlarında kadrolu olarak çalışan kamu personelleri bu statüde
        değerlendirilir.
      </p>
    </div>
  </div>
</template>

<script>
import exchange from "./exchange.vue";

export default {
  name: "RetirementCalculator",
  components: {
    exchange,
  },
  data() {
    return {
      insuranceType: "SSK-4A",
      birthDate: null,
      insuranceStartDate: null,
      gender: "Erkek",
      retirementAge: null,
    };
  },
  methods: {
    calculateRetirementAge() {
      // Emeklilik yaşı hesaplama mantığı
      // Bu hesaplama, örnek olarak verilmiştir ve gerçek hesaplamalarda farklılık gösterebilir
      const birthYear = new Date(this.birthDate).getFullYear();
      const startYear = new Date(this.insuranceStartDate).getFullYear();

      if (this.insuranceType === "SSK-4A") {
        if (this.gender === "Erkek") {
          this.retirementAge = 60 - (startYear - birthYear);
        } else {
          this.retirementAge = 58 - (startYear - birthYear);
        }
      } else if (this.insuranceType === "Bağ-Kur-4B") {
        if (this.gender === "Erkek") {
          this.retirementAge = 65 - (startYear - birthYear);
        } else {
          this.retirementAge = 63 - (startYear - birthYear);
        }
      } else if (this.insuranceType === "Emekli Sandığı-4C") {
        if (this.gender === "Erkek") {
          this.retirementAge = 55 - (startYear - birthYear);
        } else {
          this.retirementAge = 53 - (startYear - birthYear);
        }
      }
    },
  },
};
</script>

<style scoped>
button {
  cursor: pointer;
}
</style>
