<template>
  <div>
    <Headers />
    <div class="pt-20">
      <div class="max-w-screen-xl mx-auto">
        <div class="p-4">
          <div class="flex gap-4 py-4">
            <a class="font-bold underline-offset-4 underline" href="/"
              >ទំព័រដើម</a
            >
            <span>></span>
            <!-- <p class="font-medium">{{locations.name}}</p> -->
          </div>
          <h4 class="font-medium text-4xl py-5">ភោជនីយដ្ឋានទាំងអស់</h4>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <!-- Skeleton Loader -->
            <div
              v-if="loading"
              v-for="n in 4"
              :key="n"
              class="relative bg-gray-200 rounded-lg shadow-lg overflow-hidden animate-pulse"
            >
              <div class="w-full h-48 bg-gray-300"></div>
              <div class="p-4">
                <div class="h-6 bg-gray-300 rounded w-3/4"></div>
                <div class="h-4 bg-gray-300 rounded mt-2 w-1/2"></div>
                <div class="h-4 bg-gray-300 rounded mt-2 w-1/4"></div>
              </div>
            </div>

            <!-- Product Card -->
            <div
              v-else
              v-for="product in products"
              :key="product.id"
              class="relative bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                :src="product.image"
                alt="Product Image"
                class="w-full h-48 object-cover"
              />
              <div class="p-4">
                <h3 class="text-xl font-bold">{{ product.name }}</h3>
                <p class="text-gray-500">{{ product.description }}</p>
                <div class="mt-2">
                  <span class="text-yellow-400">&#9733;</span>
                  <span>{{ product.rating }} ({{ product.reviews }})</span>
                </div>
              </div>
              <!-- Badge -->
              <div
                v-if="product.discount"
                class="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded-full"
              >
                <span
                  class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"
                ></span>
                <span class="relative">{{ product.discount }}% off</span>
              </div>
              <div class="flex justify-end items-center">
                <router-link
                  :to="{
                    name: 'showcart',
                    params: { id: product.id },
                  }"
                  class="bg-orange-500 text-white w-full text-center font-bold py-2 px-4 rounded hover:bg-orange-600"
                >
                  Book Now
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Headers from "../components/Header.vue";
import Footer from "../components/Footer.vue"

export default {
  name: "HomePage",
  components: { Headers,Footer },
  data() {
    return {
      loading: true, // Add loading state
      products: [], // Replace this with fetched products
    };
  },
  mounted() {
    // Simulate API call
    setTimeout(() => {
      this.products = [
        {
          id: 1,
          name: "Product 1",
          description: "This is product 1",
          rating: 4.7,
          reviews: 19,
            price:20,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/b/b0/Hamburger_%2812164386105%29.jpg",
          discount: 50,
        },
        {
          id: 2,
          name: "Product 2",
          description: "This is product 2",
          rating: 4.5,
          reviews: 23,
            price:20,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKe9jOoKK4gfYGaUVR6QhO5V3SQMKff76bfQ&s",
          discount: 40,
        },
        {
          id: 2,
          name: "Product 2",
          description: "This is product 2",
          rating: 4.5,
          reviews: 23,
          price:20,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKe9jOoKK4gfYGaUVR6QhO5V3SQMKff76bfQ&s",
          discount: 0,
        },
        {
          id: 2,
          name: "Product 2",
          description: "This is product 2",
          rating: 4.5,
          reviews: 23,
            price:20,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKe9jOoKK4gfYGaUVR6QhO5V3SQMKff76bfQ&s",
          discount: 40,
        },
        // Add more products...
      ];
      this.loading = false; // Set loading to false when data is fetched
    }, 2000);
  },

   
};
</script>

<style>
/* Optional: You can customize your skeleton animation duration */
</style>
