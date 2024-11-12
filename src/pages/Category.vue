<template>
  <div>
    <Headers />
    <div class="pt-20">
      <div class="max-w-screen-xl mx-auto p-4">
        <!-- Breadcrumb navigation -->
        <div class="text-sm breadcrumbs mb-4">
          <ul class="flex space-x-2">
            <li><a href="#" class="text-blue-500">Home</a></li>
            <li><a href="#" class="text-blue-500">Phnom Penh</a></li>
            <li>Restaurant Name</li>
          </ul>
        </div>

        <!-- Restaurant Info -->
        <div class="flex items-center space-x-4 mb-4">
          <div v-if="loading" class="animate-pulse flex items-center space-x-4">
            <!-- Skeleton for the image -->
            <div class="bg-gray-300 rounded-full w-16 h-16"></div>

            <!-- Skeleton for the text -->
            <div class="space-y-2">
              <div class="bg-gray-300 rounded w-40 h-6"></div>
              <div class="bg-gray-300 rounded w-24 h-4"></div>
              <div class="flex space-x-1">
                <div class="bg-gray-300 rounded w-16 h-4"></div>
                <div class="bg-gray-300 rounded w-10 h-4"></div>
              </div>
            </div>
          </div>
          <!-- Actual content when data is loaded -->
          <div v-else>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Huawei_AppGallery.svg/1200px-Huawei_AppGallery.svg.png"
              alt="Restaurant"
              class="w-16 h-16 rounded-full"
            />
            <div>
              <h1 class="text-2xl font-bold">
                Restaurant Name (បង្ហិត ទឹកជ្រលក់)
              </h1>
              <p class="text-red-500 text-sm line-through">$3.50</p>
              <p class="text-green-500">$2.25</p>
              <div class="flex items-center space-x-1 text-yellow-500">
                <span>⭐⭐⭐⭐⭐</span>
                <span>(500+)</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Tab Navigation -->

        <div class="overflow-x-auto whitespace-nowrap border-b mb-4">
          <div v-if="loading" class="animate-pulse flex items-center space-x-4">
            <ul class="flex space-x-6">
              <!-- Skeleton Loader -->
              <li
                class="skeleton-item bg-gray-300 h-6 w-24 rounded animate-pulse"
              ></li>
              <li
                class="skeleton-item bg-gray-300 h-6 w-24 rounded animate-pulse"
              ></li>
              <li
                class="skeleton-item bg-gray-300 h-6 w-24 rounded animate-pulse"
              ></li>
              <li
                class="skeleton-item bg-gray-300 h-6 w-24 rounded animate-pulse"
              ></li>
              <li
                class="skeleton-item bg-gray-300 h-6 w-24 rounded animate-pulse"
              ></li>
            </ul>
          </div>

          <div v-else>
            <ul class="flex space-x-6 px-6 py-4 text-lg font-medium">
              <li>
                <a
                  href="/"
                  class="text-gray-500 text-lg underline-offset-4 underline font-bold hover:text-black"
                  >ដើម</a
                >
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-black">Combo Set</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-black"
                  >Noodle Soup</a
                >
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-black">Drinks</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-black">Desserts</a>
              </li>
              <!-- Add more items as needed -->
            </ul>
          </div>
        </div>

        <!-- Product Cards -->
        <div class="flex">
          <!-- <div class="max-w-screen-xl md:w-2/3 w-full mx-auto p-4"> -->
          <div class="max-w-screen-xl md:w-3/3 w-full mx-auto p-4">
            <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                v-for="n in 4"
                :key="n"
                class="border flex rounded-lg p-4 animate-pulse"
              >
                <div class="flex-1">
                  <h2 class="h-6 bg-gray-300 rounded w-3/4 mb-2"></h2>
                  <p class="h-4 bg-gray-300 rounded w-1/4 mb-2"></p>
                  <p class="h-4 bg-gray-300 rounded w-full"></p>
                </div>
                <div class="flex items-center">
                  <img
                    alt="Drink"
                    class="w-20 h-20 object-cover rounded-lg bg-gray-300"
                  />
                  <button
                    class="ml-4 bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div v-for="(item, index) in products" :key="index">
                <div
                  class="border rounded-lg shadow-md duration-300 hover:bg-red-100 hover:scale-105 p-4 flex items-start space-x-4 bg-white"
                >
                  <div class="flex-1">
                    <h2 class="text-lg font-semibold text-gray-900">
                      {{ item.name }}
                      <span class="text-sm font-normal text-gray-600">{{
                        item.subtitle
                      }}</span>
                    </h2>
                    <p class="text-gray-600">ចាប់ពី {{ item.price }}</p>
                    <p class="text-sm line-clamp-2 text-gray-500">
                      {{ item.description }}
                    </p>
                  </div>
                  <div class="flex items-center">
                    <img
                      :src="item.image"
                      alt="Drink"
                      class="w-20 h-24 object-cover rounded-lg"
                    />
                    <div class="relative group">
                      <button
                        @click="addToCart(item)"
                        class="ml-4 bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                      >
                        +
                      </button>
                      <span
                        class="absolute left-1/2 transform cursor-pointer -translate-x-1/2 bg-green-300 whitespace-nowrap text-white text-xs rounded py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      >
                        ដាក់ចូលកន្ត្រក
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- <div class="w-1/3 rounded-xl p-4 shadow-lg md:block hidden">
            <div>
              <div v-if="loading">
                <div
                  class="flex items-center border-b border-gray-200 py-4 animate-pulse"
                >
                  <span class="block w-4 h-4 bg-gray-300 rounded-full"></span>
                  <div class="flex items-center ml-4 space-x-4">
                    <div class="w-20 h-20 bg-gray-300 rounded-lg"></div>
                    <div>
                      <div class="w-32 h-4 bg-gray-300 rounded mb-2"></div>
                      <div class="w-40 h-3 bg-gray-300 rounded mb-2"></div>
                      <div class="w-20 h-3 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                  <div class="ml-6 w-10 h-4 bg-gray-300 rounded"></div>
                  <div class="ml-6 w-10 h-4 bg-gray-300 rounded"></div>
                  <div class="ml-6 w-5 h-5 bg-gray-300 rounded"></div>
                </div>
                <div
                  class="flex items-center border-b justify-between border-gray-200 py-4 animate-pulse"
                >
                  <div class="w-40 h-3 bg-gray-300 rounded mb-2"></div>
                  <div class="ml-6 w-5 h-5 bg-gray-300 rounded"></div>
                </div>
              </div>

              <div
                v-else
                class="flex items-center border-b border-gray-200 py-4"
              >
                <span>1</span>
                <div class="flex items-center ml-4 space-x-4">
                  <img
                    src="https://cdn.pixabay.com/photo/2020/04/12/10/57/store-5033746_640.png"
                    alt="Product"
                    class="w-20 h-20 object-contain"
                  />
                  <div>
                    <p class="font-semibold">ត្រីអាំង</p>
                    <p class="text-gray-500 text-xs line-clamp-2">
                      មានរស់ជាតិឆ្ងុយឆ្ងាញ
                    </p>
                    <p class="text-gray-400 text-sm">លេខកូដ: 00123</p>
                  </div>
                </div>
                <div>
                  <p class="ml-6 text-red-600">%100</p>
                </div>
                <div class="text-center">
                  <p class="ml-6 text-gray-600 whitespace-nowrap">$ 89</p>
                </div>
                <button type="button" class="ml-6 w-5 text-md text-red-500">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDgCtB72sd2csn3h4Xoktuuub7vFQQ-dGBOw&s"
                    alt=""
                    class="h-4 w-4"
                  />
                </button>
              </div>

              <div class="flex justify-between p-2">
                <p class="text-gray-800">
                  សរុប
                  <span class="text-xs text-gray-400"
                    >(បូកបញ្ចូលទាំងថ្លៃសេវា និងពន្ធ)</span
                  >
                </p>
                <span class="text-gray-800">$0</span>
              </div>

              <a href="/showcart">
                <button
                  class="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600"
                >
                  ពិនិត្យមើលបន្ថែម
                </button>
              </a>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Headers from "../components/Header.vue";
// import Context from '../pages/Cart.vue'

export default {
  name: "HomePage",
  components: { Headers },
  data() {
    return {
      loading: true, // Loading state
      products: [], // Products data
    };
  },

  mounted() {
    // Simulate data loading
    setTimeout(() => {
      // After data is fetched, update the products and set loading to false
      this.products = [
        {
          id: 1,
          image:
            "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          name: "Beef Noodle Soup",
          subtitle: "Brown Sugar Milk Tea",
          discount: 30,
          price: 7.7,
          description:
            "A fiery and flavorful noodle soup mforting bowls of noodle soupmforting bowls of noodle soup",
          qty: 2,
        },
        {
          id: 2,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG3jTszSflQt-SjZGIWqJRegF0GrAVzpCQtg&s",
          name: "Pork Ramen",
          subtitle: "Brown Sugar Milk Tea",
          discount: 30,
          price: 7.15,
          description:
            "Comforting bowl mforting bowls of noodle soupmforting bowls of noodle soups of noodle soup",
          qty: 2,
        },
        {
          id: 3,
          image:
            "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          name: "Chicken Soup",
          subtitle: "Brown Sugar Milk Tea",
          discount: 100,
          price: 20,
          description: "Hearty chicken soup with savory broth...",
          qty: 2,
        },
        {
          id: 4,
          image:
            "https://hungrybynature.com/wp-content/uploads/2017/09/pinch-of-yum-workshop-19.jpg",
          name: "Chicken Soup",
          subtitle: "Brown Sugar Milk Tea",
          discount: 50,
          price: 10,
          description: "Hearty chicken soup with savory broth...",
          qty: 2,
        },
      ];
      this.loading = false;
    }, 2000); // Simulate a delay for loading
  },
  methods: {
    addToCart(product) {
      this.$emit("add-to-cart", product);
    },
  },
};
</script>

<style scoped>
/* Optional custom styles */
</style>
