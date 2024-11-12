<template>
  <main
    class="md:w-3/4 p-4 overflow-y-auto snap-y grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 scrollbar-hidden"
  >
    <div
      v-for="(product, index) in products"
      :key="index"
      class="border p-4 h-72 text-center"
    >
      <div>
        <router-link
          :to="{ name: 'detailcategory', params: { id: product.id } }"
        >
          <img
            :src="product.image"
            alt="Product"
            class="w-full h-24 object-cover mb-2"
          />
          <h3 class="text-lg font-semibold line-clamp-2">
            {{ product.names }}
          </h3>
          <p class="text-pink-500 text-xl">
            {{ (product.price * 41).toFixed(2) }} KHR
          </p>
          <p class="text-gray-500">{{ product.price }} USD</p>
        </router-link>
        <button @click="handleAddToCart(product)" class="button-cart py-2">
          បញ្ជាទិញឥឡូវ
        </button>
      </div>
    </div>
  </main>
</template>

<script>
import { useCartContext } from "../../pages/CartContect.vue";
export default {
  setup() {
    const { addItem } = useCartContext();

    const handleAddToCart = (product) => {
      addItem(product);
    };

    return {
      handleAddToCart,
    };
  },
  data() {
    return {
      products: [
        {
          id: 1,
          image:
            "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          names: "Beef Noodle Soup",
          subtitle: "Brown Sugar Milk Tea",
          discount: 30,
          managstock:"yes",
          price: 7.7,
          description:
            "A fiery and flavorful noodle soup mforting bowls of noodle soupmforting bowls of noodle soup",
          qty: 2,
        },
        {
          id: 2,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG3jTszSflQt-SjZGIWqJRegF0GrAVzpCQtg&s",
          names: "Pork Ramen",
          subtitle: "Brown Sugar Milk Tea",
          discount: 30,
          managstock:"no",
          price: 7.15,
          description:
            "Comforting bowl mforting bowls of noodle soupmforting bowls of noodle soups of noodle soup",
          qty: 2,
        },
        {
          id: 3,
          image:
            "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          names: "Chicken Soup",
          subtitle: "Brown Sugar Milk Tea",
          discount: 100,
          managstock:"no",
          price: 20,
          description: "Hearty chicken soup with savory broth...",
          qty: 2,
        },
        {
          id: 4,
          image:
            "https://hungrybynature.com/wp-content/uploads/2017/09/pinch-of-yum-workshop-19.jpg",
          names: "Chicken Soup",
          subtitle: "Brown Sugar Milk Tea",
          discount: 50,
          managstock:"yes",
          price: 10,
          description: "Hearty chicken soup with savory broth...",
          qty: 2,
        },
      ],
    };
  },
};
</script>