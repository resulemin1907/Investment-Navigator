<template>
  <footer
    class="bg-gradient-to-r from-blue-500 to-blue-800 text-white py-8 cursor-pointer"
  >
    <div class="container mx-auto px-4">
      <!-- Üst Kısım: Marka ve Sosyal Medya -->
      <div class="flex flex-wrap items-center justify-between mb-8">
        <div class="flex items-center mb-4 md:mb-0">
          <img src="@/assets/bg-logo.png" alt="Logo" class="h-12 mr-3 rounded-2xl" />
          <h1 class="text-2xl font-bold">Investment Navigator</h1>
        </div>
        <div class="flex space-x-4">
          <a
            href="#"
            class="text-white hover:text-blue-300 transition-colors duration-300"
            ><i class="fab fa-facebook-f"></i
          ></a>
          <a
            href="#"
            class="text-white hover:text-blue-300 transition-colors duration-300"
            ><i class="fab fa-twitter"></i
          ></a>
          <a
            href="#"
            class="text-white hover:text-blue-300 transition-colors duration-300"
            ><i class="fab fa-linkedin-in"></i
          ></a>
        </div>
      </div>

      <!-- Orta Kısım: Linkler -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h2 class="text-xl font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                class="block py-1 hover:text-blue-300 transition-colors duration-300"
                >Home</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-1 hover:text-blue-300 transition-colors duration-300"
                >About Us</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-1 hover:text-blue-300 transition-colors duration-300"
                >Services</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-1 hover:text-blue-300 transition-colors duration-300"
                >Contact</a
              >
            </li>
          </ul>
        </div>
        <div>
          <h2 class="text-xl font-semibold mb-4">Support</h2>
          <ul>
            <li>
              <a
                href="#"
                class="block py-1 hover:text-blue-300 transition-colors duration-300"
                >Help Center</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-1 hover:text-blue-300 transition-colors duration-300"
                >FAQ</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-1 hover:text-blue-300 transition-colors duration-300"
                >Privacy Policy</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-1 hover:text-blue-300 transition-colors duration-300"
                >Terms of Service</a
              >
            </li>
          </ul>
        </div>
        <div>
          <h2 class="text-xl font-semibold mb-4">Get in Touch</h2>
          <ul>
            <li class="block py-1">Email: support@investmentnavigator.com</li>
            <li class="block py-1">Phone: +1 123 456 7890</li>
            <li>
              <a
                href="#"
                class="block py-1 hover:text-blue-300 transition-colors duration-300"
                >Contact Us</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-1 hover:text-blue-300 transition-colors duration-300"
                >Feedback</a
              >
            </li>
          </ul>
        </div>
      </div>

      <!-- Alt Kısım: Telif Hakkı -->
      <div class="text-center">
        <p>&copy; 2024 Investment Navigator. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  background: linear-gradient(to right, #1e3a8a, #3b82f6);
}
</style>
