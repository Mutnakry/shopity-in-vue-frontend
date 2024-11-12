<template>
  <div>
    <Headers />
    <div class="pt-20">
      <div class="max-w-screen-xl mx-auto p-4">
        <!-- Skeleton loading state -->
        <div v-if="loading" class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- Skeleton Cards -->
          <div class="border rounded-lg p-4 animate-pulse">
            <div class="bg-gray-300 h-40 w-full rounded-lg mb-4"></div>
            <div class="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div class="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
            <div class="h-4 bg-gray-300 rounded w-full"></div>
          </div>

          <div class="border rounded-lg p-4 animate-pulse">
            <div class="bg-gray-300 h-40 w-full rounded-lg mb-4"></div>
            <div class="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div class="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
            <div class="h-4 bg-gray-300 rounded w-full"></div>
          </div>

          <div class="border rounded-lg p-4 animate-pulse">
            <div class="bg-gray-300 h-40 w-full rounded-lg mb-4"></div>
            <div class="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div class="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
            <div class="h-4 bg-gray-300 rounded w-full"></div>
          </div>
        </div>

        <!-- Show actual content when loading is false -->
        <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- Real Product Cards -->
          <div
            v-for="(item, index) in products"
            :key="index"
            class="border rounded-lg p-4"
          >
            <img
              :src="item.image"
              alt="Product"
              class="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 class="text-lg font-bold">{{ item.name }}</h3>
            <p class="text-sm text-gray-500">{{ item.price }}</p>
            <p class="text-sm text-gray-600">{{ item.description }}</p>
          </div>
        </div>
      </div>
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
          <div
            v-if="loading"
            class="animate-pulse flex items-center space-x-4"
          >
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
          <ul class="flex space-x-6">
            <li>
              <a href="#" class="text-gray-500 hover:text-black"
                >Popular Items</a
              >
            </li>
            <li>
              <a href="#" class="text-gray-500 hover:text-black">Combo Set</a>
            </li>
            <li>
              <a href="#" class="text-gray-500 hover:text-black">Noodle Soup</a>
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

        <!-- Search and Category Filters -->
        <div class="flex justify-between items-center mb-4">
          <div class="w-full md:w-1/3 relative">
            <input
              type="text"
              placeholder="Search items..."
              class="w-full py-2 px-4 border rounded-lg"
            />
            <button class="absolute top-1/2 right-2 transform -translate-y-1/2">
              🔍
            </button>
          </div>
          <div class="flex space-x-2">
            <button class="px-4 py-2 border rounded-lg">មាតុភូត</button>
            <button class="px-4 py-2 border rounded-lg">វេជ្ជបណ្ឌិត</button>
          </div>
        </div>

        <!-- Popular Items Section -->
        <div class="mb-4">
          <h2 class="text-xl font-bold">Popular Items</h2>
          <p class="text-sm text-gray-500">
            Selected based on customer preferences
          </p>
        </div>

        <!-- Product Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- Card 1 -->
          <div class="border rounded-lg p-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Huawei_AppGallery.svg/1200px-Huawei_AppGallery.svg.png"
              alt="Product"
              class="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 class="text-lg font-bold">Beef Noodle Soup</h3>
            <p class="text-sm text-gray-500">$7.70</p>
            <p class="text-sm text-gray-600">
              A fiery and flavorful noodle soup featuring tender slices of
              beef...
            </p>
          </div>
          <!-- Card 2 -->
          <div class="border rounded-lg p-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Huawei_AppGallery.svg/1200px-Huawei_AppGallery.svg.png"
              alt="Product"
              class="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 class="text-lg font-bold">Pork Ramen</h3>
            <p class="text-sm text-gray-500">$7.15</p>
            <p class="text-sm text-gray-600">
              Flavorful and comforting bowls of noodle soup, featuring a
              variety...
            </p>
          </div>
          <!-- Card 3 -->
          <div class="border rounded-lg p-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Huawei_AppGallery.svg/1200px-Huawei_AppGallery.svg.png"
              alt="Product"
              class="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 class="text-lg font-bold">Chicken Soup</h3>
            <p class="text-sm text-gray-500">$4.95</p>
            <p class="text-sm text-gray-600">
              A hearty chicken soup with fresh ingredients and savory broth...
            </p>
          </div>
          <!-- Add more product cards as needed -->
          <!-- Card 2 -->
          <div class="border rounded-lg p-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Huawei_AppGallery.svg/1200px-Huawei_AppGallery.svg.png"
              alt="Product"
              class="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 class="text-lg font-bold">Pork Ramen</h3>
            <p class="text-sm text-gray-500">$7.15</p>
            <p class="text-sm text-gray-600">
              Flavorful and comforting bowls of noodle soup, featuring a
              variety...
            </p>
          </div>

          <!-- Card 2 -->
          <div class="border rounded-lg p-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Huawei_AppGallery.svg/1200px-Huawei_AppGallery.svg.png"
              alt="Product"
              class="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 class="text-lg font-bold">Pork Ramen</h3>
            <p class="text-sm text-gray-500">$7.15</p>
            <p class="text-sm text-gray-600">
              Flavorful and comforting bowls of noodle soup, featuring a
              variety...
            </p>
          </div>
          <!-- Card 2 -->
          <div class="border rounded-lg p-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Huawei_AppGallery.svg/1200px-Huawei_AppGallery.svg.png"
              alt="Product"
              class="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 class="text-lg font-bold">Pork Ramen</h3>
            <p class="text-sm text-gray-500">$7.15</p>
            <p class="text-sm text-gray-600">
              Flavorful and comforting bowls of noodle soup, featuring a
              variety...
            </p>
          </div>
          <!-- Card 2 -->
          <div class="border rounded-lg p-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Huawei_AppGallery.svg/1200px-Huawei_AppGallery.svg.png"
              alt="Product"
              class="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 class="text-lg font-bold">Pork Ramen</h3>
            <p class="text-sm text-gray-500">$7.15</p>
            <p class="text-sm text-gray-600 line-clamp-2">
              Flavorful andFlavorful and comforting bowls of noodle soup,
              featuring a comforting bowls of noodle soup, featuring a
              variety...
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Headers from "../components/Header.vue";

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
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Huawei_AppGallery.svg/1200px-Huawei_AppGallery.svg.png",
          name: "Beef Noodle Soup",
          price: "$7.70",
          description: "A fiery and flavorful noodle soup...",
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Huawei_AppGallery.svg/1200px-Huawei_AppGallery.svg.png",
          name: "Pork Ramen",
          price: "$7.15",
          description: "Comforting bowls of noodle soup...",
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Huawei_AppGallery.svg/1200px-Huawei_AppGallery.svg.png",
          name: "Chicken Soup",
          price: "$4.95",
          description: "Hearty chicken soup with savory broth...",
        },
      ];
      this.loading = false;
    }, 2000); // Simulate a delay for loading
  },
};
</script>

<style scoped>
/* Optional custom styles */
</style>
