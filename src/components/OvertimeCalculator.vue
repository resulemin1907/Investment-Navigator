<template>
  <exchange></exchange>

  <div class="container mx-auto px-4 py-8 relative bottom-24 cursor-pointer">
    <h1 class="text-2xl font-bold mb-4">Mesai Hesaplama</h1>
    <div class="bg-blue-900 p-6 rounded-lg text-black">
      <div class="mb-4">
        <label class="block mb-2">Sözleşmedeki Çalışma Süresi:</label>
        <input type="checkbox" v-model="under45Hours" class="mr-2" />
        Haftalık çalışma süresi 45 saatin altında ise kutucuğu işaretleyin
      </div>
      <div class="mb-4">
        <label class="block mb-2">Aylık Brüt Maaş:</label>
        <input
          type="number"
          v-model.number="monthlyGrossSalary"
          class="w-full px-4 py-2 border rounded"
          placeholder="Giriniz!"
        />
      </div>
      <div class="mb-4">
        <label class="block mb-2">Fazla Mesai (Çalışma Saati):</label>
        <input
          type="number"
          v-model.number="overtimeHours"
          class="w-full px-4 py-2 border rounded"
          placeholder="Giriniz!"
        />
      </div>
      <button
        @click="calculateOvertime"
        class="w-full bg-yellow-500 text-black px-4 py-2 rounded"
      >
        HESAPLA
      </button>
    </div>

    <div v-if="overtimePay !== null" class="mt-4">
      <h2 class="text-xl font-bold">Fazla Mesai Ücretiniz: {{ overtimePay }} TL</h2>
    </div>

    <div class="mt-4">
      <h2 class="text-xl font-bold">Mesai Hesaplama</h2>
      <p>
        Fazla mesai hesaplaması saatlik bazda ve brüt ücret üzerinden yapılır. 45 saati
        aşan çalışmalarda fazla mesai ücreti normal mesai ünden yüzde 50 daha yüksek bir
        oranda ödenirken fazla süreli çalışmalarda bu oran yüzde 25 oranında daha
        fazladır. Yıllık fazla mesai saati maksimum 270 saattir. Bu süre aylık 225 saate
        denk gelir.
      </p>
    </div>

    <div class="mt-4">
      <h2 class="text-xl font-bold">Fazla Çalışma Ücreti Nasıl Hesaplanır?</h2>
      <p>
        Fazla mesai hesaplaması matematiksel işlemlerle ‘Brüt ücret/225 = x 1,5’ formülüne
        göre yapılmaktadır. Örnek verilecek olursa aylık brüt ücreti 20 bin TL olan bir
        işçinin 5 saat mesai yaptığını varsayar:
      </p>
      <p>
        20.000/225=88.88 x 1,5 = 133.32 TL bir işçinin saatlik çalışma ücretidir. İşçi 5
        saat mesai yaptığı için 133.32 TL 5 saatlik mesai süresi ile çarpılır. Bu işlem
        sonucunda 666.6 TL işverenin 5 saat fazla mesai yapan işçiye ödemesi gereken
        miktardır.
      </p>
    </div>

    <div class="mt-4">
      <h2 class="text-xl font-bold">Fazla Sürelerle Çalışma Ücreti Nasıl Hesaplanır?</h2>
      <p>
        Fazla sürelerle çalışmalarda ise her bir saat için verilecek ücret, normal çalışma
        ücretinin saat başına düşen miktarının yüzde 25 yükseltilmesi şeklinde ödenir.
        Fazla süreli çalışmalar hesaplaması ise şu şekilde yapılmaktadır:
      </p>
      <p>
        Saatlik Brüt Ücret + (Saatlik Brüt ücret x 1,25) = Fazla Sürelerle Çalışma Ücreti
      </p>
      <p>Fazla Çalışma Süresi x Fazla Sürelerle Çalışma Ücreti</p>
      <p>
        Örnek verilecek olursa saatlik brüt ücreti 50 TL olan bir işçi haftalık çalışma
        süresinden 5 saat fazla çalıştığında alacağı toplam fazla çalışma ücreti:
      </p>
      <p>50 + (50 x %25) = 62.5 TL</p>
      <p>5 x 62.5 = 312.5 TL şeklindedir.</p>
    </div>
  </div>
</template>

<script>
import exchange from "./exchange.vue";

export default {
  components: {
    exchange,
  },
  name: "OvertimeCalculator",

  data() {
    return {
      under45Hours: false,
      monthlyGrossSalary: null,
      overtimeHours: null,
      overtimePay: null,
    };
  },
  methods: {
    calculateOvertime() {
      const hourlyRate = this.monthlyGrossSalary / 225;
      let overtimeRate = hourlyRate * 1.5;

      if (this.under45Hours) {
        overtimeRate = hourlyRate * 1.25;
      }

      this.overtimePay = (overtimeRate * this.overtimeHours).toFixed(2);
    },
  },
};
</script>

<style scoped>
button {
  cursor: pointer;
}
</style>
