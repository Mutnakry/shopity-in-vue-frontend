<template>
  <div className=" max-w-screen-xl mx-auto my-3">
    <h2 class="text-2xl font-bold px-4 mb-4">ផលិតផល</h2>
    <div className="flex space-x-2">
      <div
        className="flex overflow-x-auto snap-x space-x-6 justify-between snap-mandatory mx-2 scrollbar-hidden"
      >
        <div
          v-for="(product, index) in products"
          :key="index"
          class="bg-gray-200 shadow-lg flex-shrink-0 rounded-lg overflow-hidden"
        >
          <a href="/brands">
            <img
              :src="product.image"
              :alt="product.name"
              class="w-44 h-32 object-cover"
            />
            <div class="p-4 text-center">
              <h3 class="text-lg font-semibold">{{ product.name }}</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      products: [
        {
          image:
            "https://aeoncambodia.sgp1.digitaloceanspaces.com/image/catalog/product/8938501434029.jpg",
          name: "ផលិតផល ១",
        },
        {
          image:
            "https://images.deliveryhero.io/image/foodpanda/home-vendor-kh.jpg?width=1264&height=808.96",
          name: "ផលិតផល ២",
        },
        {
          image:
            "https://aeoncambodia.sgp1.digitaloceanspaces.com/image/catalog/product/8938501434029.jpg",
          name: "ផលិតផល ១",
        },

        {
          image:
            "https://images.deliveryhero.io/image/foodpanda/home-vendor-kh.jpg?width=1264&height=808.96",
          name: "ផលិតផល ២",
        },
        {
          image:
            "https://aeoncambodia.sgp1.digitaloceanspaces.com/image/catalog/product/8938501434029.jpg",
          name: "ផលិតផល ១",
        },
        {
          image:
            "https://images.deliveryhero.io/image/foodpanda/home-vendor-kh.jpg?width=1264&height=808.96",
          name: "ផលិតផល ២",
        },
        {
          image:
            "https://aeoncambodia.sgp1.digitaloceanspaces.com/image/catalog/product/8938501434029.jpg",
          name: "ផលិតផល ១",
        },
        {
          image:
            "https://images.deliveryhero.io/image/foodpanda/home-vendor-kh.jpg?width=1264&height=808.96",
          name: "ផលិតផល ២",
        },
        {
          image:
            "https://aeoncambodia.sgp1.digitaloceanspaces.com/image/catalog/product/8938501434029.jpg",
          name: "ផលិតផល ១",
        },
        {
          image:
            "https://images.deliveryhero.io/image/foodpanda/home-vendor-kh.jpg?width=1264&height=808.96",
          name: "ផលិតផល ២",
        },
        {
          image:
            "https://aeoncambodia.sgp1.digitaloceanspaces.com/image/catalog/product/8938501434029.jpg",
          name: "ផលិតផល ១",
        },
        {
          image:
            "https://images.deliveryhero.io/image/foodpanda/home-vendor-kh.jpg?width=1264&height=808.96",
          name: "ផលិតផល ២",
        },
        // Add more products here
      ],
    };
  },
};
</script>

