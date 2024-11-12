<template>
  <div>
    <Headers />

    <div class="max-w-screen-xl mx-auto pt-20">
      <div class="p-4">
        <a
          class="text-md font-semibold underline underline-offset-8 text-gray-500"
          href="/"
          >ដើម ></a
        >
      </div>
      <div class="flex h-screen">
        <aside class="w-1/4 h-screen bg-gray-100 p-4 md:block hidden">
          <h2 class="text-pink-500 text-lg font-bold mb-4">
            គ្រប់ប្រភេទរាល់ទំនិញ
          </h2>
          <ul>
            <li v-for="brand in brands" :key="brand.id" class="mb-2">
              <a
                href="#"
                class="flex items-center p-2 bg-white rounded-lg shadow"
              >
                <img :src="brand.image" :alt="brand.name" class="h-8 mr-2" />
                <span class="line-clamp-1">{{ brand.name }}</span>
              </a>
            </li>
          </ul>
        </aside>

        <main
          class="md:w-3/4 p-4 overflow-y-auto snap-y grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 scrollbar-hidden"
        >
          <div
            v-for="(product, index) in products"
            :key="index"
            class="border rounded-lg shadow p-4 text-center"
          >
            <img
              :src="product.image"
              alt="Product"
              class="w-full h-24 object-cover mb-2"
            />
            <h3 class="text-lg font-semibold line-clamp-2">
              {{ product.name }}
            </h3>
            <p class="text-pink-500 text-xl">{{ product.price_khr }} KHR</p>
            <p class="text-gray-500">{{ product.price_usd }} USD</p>
            <button class="mt-2 bg-pink-500 text-white px-4 py-2 rounded-lg">
              បញ្ជាទិញឥឡូវ
            </button>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>


<script>
import Headers from "../components/Header.vue";
export default {
  components: { Headers },
  name: "ProductGrid",
  data() {
    return {
      products: [
        {
         id:2,
          name: "MO LAC SHUAN FISH SOUP 223  MO LAC SHUAN FISH SOUP 223 GG",
          price_khr: "9,100",
          price_usd: "2.20",
          image:
            "https://aeoncambodia.sgp1.digitaloceanspaces.com/image/product/phpTqrJ8Z-1638527609.png",
        },
        {
          name: "SPICED CORNED EGG 56GX50",
          price_khr: "4,600",
          price_usd: "1.10",
          image:
            "https://aeoncambodia.sgp1.digitaloceanspaces.com/image/products/20230223/EWHFas251I8OiuqW9fup1rHNqPkKOwWTEHSfVVij.jpg",
        },
        {
          name: "SPICED CORNED EGG 56GX50",
          price_khr: "4,600",
          price_usd: "1.10",
          image:
            "https://aeoncambodia.sgp1.digitaloceanspaces.com/image/product/phpTqrJ8Z-1638527609.png",
        },
        {
          name: "SPICED CORNED EGG 56GX50",
          price_khr: "4,600",
          price_usd: "1.10",
          image:
            "https://aeoncambodia.sgp1.digitaloceanspaces.com/image/product/phpTqrJ8Z-1638527609.png",
        },
        {
          name: "SPICED CORNED EGG 56GX50",
          price_khr: "4,600",
          price_usd: "1.10",
          image:
            "https://aeoncambodia.sgp1.digitaloceanspaces.com/image/product/phpTqrJ8Z-1638527609.png",
        },
        {
          name: "MO LAC SHUAN FISH SOUP 223  MO LAC SHUAN FISH SOUP 223 GG",
          price_khr: "9,100",
          price_usd: "2.20",
          image:
            "https://aeoncambodia.sgp1.digitaloceanspaces.com/image/product/phpTqrJ8Z-1638527609.png",
        },
        {
          name: "SPICED CORNED EGG 56GX50",
          price_khr: "4,600",
          price_usd: "1.10",
          image:
            "https://aeoncambodia.sgp1.digitaloceanspaces.com/image/products/20230223/EWHFas251I8OiuqW9fup1rHNqPkKOwWTEHSfVVij.jpg",
        },
        {
          name: "SPICED CORNED EGG 56GX50",
          price_khr: "4,600",
          price_usd: "1.10",
          image:
            "https://aeoncambodia.sgp1.digitaloceanspaces.com/image/product/phpTqrJ8Z-1638527609.png",
        },
        {
          name: "SPICED CORNED EGG 56GX50",
          price_khr: "4,600",
          price_usd: "1.10",
          image:
            "https://aeoncambodia.sgp1.digitaloceanspaces.com/image/product/phpTqrJ8Z-1638527609.png",
        },
        {
          name: "SPICED CORNED EGG 56GX50",
          price_khr: "4,600",
          price_usd: "1.10",
          image:
            "https://aeoncambodia.sgp1.digitaloceanspaces.com/image/product/phpTqrJ8Z-1638527609.png",
        },
        {
          name: "MO LAC SHUAN FISH SOUP 223  MO LAC SHUAN FISH SOUP 223 GG",
          price_khr: "9,100",
          price_usd: "2.20",
          image:
            "https://aeoncambodia.sgp1.digitaloceanspaces.com/image/product/phpTqrJ8Z-1638527609.png",
        },
        {
          name: "SPICED CORNED EGG 56GX50",
          price_khr: "4,600",
          price_usd: "1.10",
          image:
            "https://aeoncambodia.sgp1.digitaloceanspaces.com/image/products/20230223/EWHFas251I8OiuqW9fup1rHNqPkKOwWTEHSfVVij.jpg",
        },
        {
          name: "SPICED CORNED EGG 56GX50",
          price_khr: "4,600",
          price_usd: "1.10",
          image:
            "https://aeoncambodia.sgp1.digitaloceanspaces.com/image/product/phpTqrJ8Z-1638527609.png",
        },
        {
          name: "SPICED CORNED EGG 56GX50",
          price_khr: "4,600",
          price_usd: "1.10",
          image:
            "https://aeoncambodia.sgp1.digitaloceanspaces.com/image/product/phpTqrJ8Z-1638527609.png",
        },
        {
          name: "SPICED CORNED EGG 56GX50",
          price_khr: "4,600",
          price_usd: "1.10",
          image:
            "https://aeoncambodia.sgp1.digitaloceanspaces.com/image/product/phpTqrJ8Z-1638527609.png",
        },
        // More products...
      ],
      brands: [
        {
          id: 1,
          pro_id:2,
          name: "MO LAC SHUAN FISH ",
          price_khr: "9,100",
          price_usd: "2.20",
          image:
            "https://aeoncambodia.sgp1.digitaloceanspaces.com/image/product/phpTqrJ8Z-1638527609.png",
        },
        {
          id: 2,
           pro_id:2,
          name: "CORNED",
          price_khr: "4,600",
          price_usd: "1.10",
          image:
            "https://aeoncambodia.sgp1.digitaloceanspaces.com/image/products/20230223/EWHFas251I8OiuqW9fup1rHNqPkKOwWTEHSfVVij.jpg",
        },
        {
          id: 3,
           pro_id:4,
          name: "SPICED CORNED",
          price_khr: "4,600",
          price_usd: "1.10",
          image:
            "https://aeoncambodia.sgp1.digitaloceanspaces.com/image/product/phpTqrJ8Z-1638527609.png",
        },
        {
          id: 2,
           pro_id:3,
          name: "SPICED ",
          price_khr: "4,600",
          price_usd: "1.10",
          image:
            "https://aeoncambodia.sgp1.digitaloceanspaces.com/image/product/phpTqrJ8Z-1638527609.png",
        },
      ],
    };
  },
};
</script>


<style scoped>
.scrollbar-hidden::-webkit-scrollbar {
  display: none; /* Hide scrollbar for WebKit browsers */
}
.scrollbar-hidden {
  -ms-overflow-style: none; /* Hide scrollbar for Internet Explorer and Edge */
  scrollbar-width: none; /* Hide scrollbar for Firefox */
}
</style>