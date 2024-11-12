<template>
  <div>
    <Headers />
    <div class="pt-20">
      <div class="max-w-screen-xl mx-auto">
        <div class="p-4">
          <div class="flex gap-4  py-4">
            <a class="font-bold underline-offset-4 underline" href="/">ទំព័រដើម</a>
            <span>></span>
            <p class="font-medium">ខេត្តបាត់ដំបង</p>
          </div>
          <h4 class="font-medium text-4xl py-5">ភោជនីយដ្ឋានទាំងអស់</h4>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <!-- Product Card -->
            <div class="relative bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Hamburger_%2812164386105%29.jpg"
                alt="Product Image"
                class="w-full h-48 object-cover"
              />
              <div class="p-4">
                <h3 class="text-xl font-bold">Product Name</h3>
                <p class="text-gray-500">Description or subtitle</p>
                <div class="mt-2">
                  <span class="text-yellow-400">&#9733;</span>
                  <span>4.7 (19)</span>
                </div>
              </div>
              <!-- Badge -->
              <div
                class="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded-full"
              >
                <span
                  class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"
                ></span>
                <span class="relative">50% off</span>
              </div>
            </div>
            <div class="relative bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKe9jOoKK4gfYGaUVR6QhO5V3SQMKff76bfQ&s"
                alt="Product Image"
                class="w-full h-48 object-cover"
              />
              <div class="p-4">
                <h3 class="text-xl font-bold">Product Name</h3>
                <p class="text-gray-500">Description or subtitle</p>
                <div class="mt-2">
                  <span class="text-yellow-400">&#9733;</span>
                  <span>4.7 (19)</span>
                </div>
              </div>
              <!-- Badge -->
              <div
                class="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded-full"
              >
                <span
                  class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"
                ></span>
                <span class="relative">50% off</span>
              </div>
            </div>
            <div class="relative bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd-L4QNhHXwGv-QLaRvk2CWvmu942Hj_Hnnw&s"
                alt="Product Image"
                class="w-full h-48 object-cover"
              />
              <div class="p-4">
                <h3 class="text-xl font-bold">Product Name</h3>
                <p class="text-gray-500">Description or subtitle</p>
                <div class="mt-2">
                  <span class="text-yellow-400">&#9733;</span>
                  <span>4.7 (19)</span>
                </div>
              </div>
              <!-- Badge -->
              <div
                class="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded-full"
              >
                <span
                  class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"
                ></span>
                <span class="relative">50% off</span>
              </div>
            </div>
            <div class="relative bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd-L4QNhHXwGv-QLaRvk2CWvmu942Hj_Hnnw&s"
                alt="Product Image"
                class="w-full h-48 object-cover"
              />
              <div class="p-4">
                <h3 class="text-xl font-bold">Product Name</h3>
                <p class="text-gray-500">Description or subtitle</p>
                <div class="mt-2">
                  <span class="text-yellow-400">&#9733;</span>
                  <span>4.7 (19)</span>
                </div>
              </div>
              <!-- Badge -->
              <div
                class="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded-full"
              >
                <span
                  class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"
                ></span>
                <span class="relative">50% off</span>
              </div>
            </div>
            <!-- Repeat for other product cards -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import Headers from "../components/Header.vue";

export default {
  name: "HomePage",
  components: { Headers },
};
</script>