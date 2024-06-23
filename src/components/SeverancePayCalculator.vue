<template>
  <exchange></exchange>
  <div class="container mx-auto px-4 py-8 relative bottom-24 cursor-pointer">
    <h1 class="text-2xl font-bold mb-4">Kıdem Tazminatı Hesaplama</h1>
    <div class="bg-blue-900 p-6 rounded-lg text-black">
      <div class="mb-4">
        <label class="block mb-2">İşe Başlangıç Tarihi:</label>
        <input
          type="date"
          v-model="startDate"
          class="w-full px-4 py-2 border rounded"
          placeholder="gg.aa.yyyy"
        />
      </div>
      <div class="mb-4">
        <label class="block mb-2">İşten Ayrılma Tarihi:</label>
        <input
          type="date"
          v-model="endDate"
          class="w-full px-4 py-2 border rounded"
          placeholder="gg.aa.yyyy"
        />
      </div>
      <div class="mb-4">
        <label class="block mb-2">Brüt Ücret:</label>
        <input
          type="number"
          v-model.number="grossSalary"
          class="w-full px-4 py-2 border rounded"
          placeholder="Giriniz!"
        />
      </div>
      <div class="mb-4">
        <label class="block mb-2">Aylık Yardımlar:</label>
        <input
          type="number"
          v-model.number="monthlyBenefits"
          class="w-full px-4 py-2 border rounded"
          placeholder="Yol, yemek vb. aylık yardımların toplamını giriniz."
        />
      </div>
      <button
        @click="calculateSeverancePay"
        class="w-full bg-yellow-500 text-black px-4 py-2 rounded"
      >
        HESAPLA
      </button>
    </div>

    <div v-if="severancePay !== null" class="mt-4">
      <h2 class="text-xl font-bold">Kıdem Tazminatınız: {{ severancePay }} TL</h2>
    </div>

    <div class="mt-4">
      <h2 class="text-xl font-bold">Kıdem Tazminatı Hesaplama</h2>
      <p>
        Kıdem tazminatı hesaplamalarında işçinin brüt ücreti temel alınmalıdır; net ücret
        dikkate alınmaz. Hesaplama yapılırken sigorta primi, sendika aidatı, vergi gibi
        kesintiler öncesindeki brüt ücret esas alınır. İşçinin brüt çıplak ücreti
        belirlenirken bu miktarın 30 ile çarpılması gerekmektedir.
      </p>
      <p>
        Bunun yanı sıra, süreklilik arz eden sosyal yardımlar ve benzeri ücretler de
        hesaplamaya dahil edilir. Eğer ikramiyeler ücrete endeksli ise son ücret üzerinden
        günlük hesaplanır. Hesaplama yapılırken bir tam yıl için 30 günlük giydirilmiş
        brüt ücret esas alınır. Giydirilmiş ücret hesaplamalarında değişkenlerin tamamı
        brüt tutar baz alınarak yapılır. Kıdem tazminatından ise sadece damga vergisi
        kesintisi yapılabilir.
      </p>
    </div>

    <div class="mt-4">
      <h2 class="text-xl font-bold">Kıdem Tazminatı Nedir?</h2>
      <p>
        Kıdem tazminatı, bir çalışanın iş akdine son verilmesi durumunda, çalıştığı süreye
        bağlı olarak alacağı bir tazminat ödemesidir. 4857 sayılı İş Kanunu ile şartları
        çerçevesinde belirlenen kıdem tazminatı işverenlerin çalışanlara sağlamakla
        yükümlü olduğu bir hak olarak kabul edilir. Kendi isteğiyle işten ayrılanlar kıdem
        tazminatı alamaz.
      </p>
    </div>

    <div class="mt-4">
      <h2 class="text-xl font-bold">Kıdem Tazminatını Kimler Alabilir?</h2>
      <p>
        Kıdem tazminatını kendi isteği ile işten ayrılmamış veya vefat etmiş kişiler,
        kendi isteği ile ayrılırsa ayrılma nedeni iş yasasının 24. maddesinde belirtilen
        işçinin haklı bir nedene dayanarak derhal işi bırakması şartını yerine getirenler
        alabilir. Bunların dışında emeklilik şartlarını yerine getirmiş olup emeklilik
        için ilgili kuruma toptan ödeme ya da maaş bağlanması için müracaat etmiş olanlar
        ve aynı işyerinde veya aynı işverene bağlı değişik işyerlerinde en az bir yıllık
        çalışma süresi olanlara kıdem tazminatı ödenir.
      </p>
    </div>
  </div>
</template>

<script>
import exchange from "./exchange.vue";

export default {
  name: "SeverancePayCalculator",
  components: {
    exchange,
  },
  data() {
    return {
      startDate: null,
      endDate: null,
      grossSalary: null,
      monthlyBenefits: 0,
      severancePay: null,
    };
  },
  methods: {
    calculateSeverancePay() {
      if (!this.startDate || !this.endDate || !this.grossSalary) {
        alert("Lütfen tüm alanları doldurun.");
        return;
      }

      const start = new Date(this.startDate);
      const end = new Date(this.endDate);
      const yearsOfWork = (end - start) / (1000 * 60 * 60 * 24 * 365.25);

      const annualSalary = this.grossSalary + this.monthlyBenefits;
      this.severancePay = ((annualSalary / 30) * yearsOfWork).toFixed(2);
    },
  },
};
</script>

<style scoped>
button {
  cursor: pointer;
}
</style>
