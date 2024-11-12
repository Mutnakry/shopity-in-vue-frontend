<template>
  <div>
    <div class="max-w-screen-xl mx-auto pt-20 p-4">
     
      <div>
        <div className="flex md:px-12 px-0 items-center">
          <p className="text-gray-900  whitespace-nowrap text-xl font-semibold">
            ផលិតផលរបស់អ្នកអ្នក
          </p>
          <div
            className="w-full border-4 rounded-xl border-green-400 ml-4"
          ></div>
        </div>
        <main
          class="p-4 overflow-y-auto grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-14 scrollbar-hidden"
        >
          <div v-for="(product, index) in products" :key="index">
            <div class="border text-center group py-2">
                <router-link
                  :to="{
                    name: 'detailcategory',
                    params: { id: product.id },
                  }"
                >
                  <img
                    :src="product.image"
                    alt="Product"
                    class="w-full object-contain h-24 mb-2 group-hover:scale-125 duration-300"
                  />
                  <h3 class="text-lg font-semibold line-clamp-2">
                    {{ product.name }}
                  </h3>
                  <p class="text-pink-500 text-xl">
                    {{ (product.price * 41).toFixed(2) }} KHR
                  </p>
                  <p class="text-gray-500">{{ (product.price).toFixed(2) }} USD</p>
                </router-link>
                <button
                   @click="handleAddToCart(product)"
                  class="mt-2 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg"
                >
                  បញ្ជាទិញឥឡូវ
                </button>
            
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
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
          price: 10,
          description: "Hearty chicken soup with savory broth...",
          qty: 2,
        },
      ],
    };
  },
};
</script>
