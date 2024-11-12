<template>
  <div>
    <Headers />
    <div class="max-w-screen-xl mx-auto pt-20 p-4">
      <div
        class="flex space-x-2 font-NotoSansKhmer underline-offset-8 border-b-2 py-2 w-44"
      >
        <router-link class="underline underline-offset-4" :to="{ name: '/' }">
          <span class="pi pi-home font-NotoSansKhmer"></span> ដើម
        </router-link>
        <router-link class="underline underline-offset-4" :to="{ name: '/' }">
          <span class="pi pi-chevron-right"></span> Category
        </router-link>
      </div>

      <div class="py-4">
        <div v-for="(product, index) in productsID" :key="index">
          <div>
            <div class="flex col-span-2">
              <div>
                <img
                  :src="product.image"
                  alt="Product image"
                  class="md:w-96 md:h-96 h-36 w-36 object-cover"
                />
              </div>
              <div class="md:w-1/3 w-2/3 p-4 space-y-2">
                <h3 class="text-2xl line-clamp-2">{{ product.names }}</h3>
                <div class="py-4 space-y-2 grid grid-cols-2">
                  <div class="space-y-2">
                    <p>តម្លៃ (KHR)</p>
                    <p>តម្លៃ (USD)</p>
                    <p>លេខកូដ</p>
                    <p>មានក្នុងហាង</p>
                    <div><p>ចំនួន</p></div>
                  </div>
                  <div class="space-y-2">
                    <p class="text-pink-600">
                      {{ (product.price * 41).toFixed(2) }} KHR
                    </p>
                    <p>{{ product.price.toFixed(2) }} USD</p>
                    <p>:00{{ product.id || "N/A" }}</p>
                    <p>: {{ product.qty || "អស់ពីស្តុក" }}</p>
                    <div
                      class="flex items-center ml-6 border border-green-500 rounded-md justify-between"
                    >
                      <button
                        type="button"
                        class="text-gray-500 text-xl hover:text-white hover:bg-green-400 px-4"
                        @click="decreaseQuantity(product)"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        readonly
                        v-model.number="product.quantity"
                        class="w-20 text-center border-l text-xl border-r border-green-500"
                        min="1"
                        @input="handleQuantityChange(product)"
                      />
                      <button
                        type="button"
                        class="text-gray-500 text-xl h-full hover:text-white hover:bg-green-400 px-4"
                        @click="increaseQuantity(product)"
                      >
                        +
                      </button>
                    </div>
                    <div
                      v-if="errorMessage"
                      class="text-red-500 text-sm mt-2 whitespace-nowrap"
                    >
                      {{ errorMessage }}
                    </div>
                  </div>
                </div>
                <button @click="handleAddToCart(product)" class="button-cart">
                  បញ្ជាទិញឥឡូវ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ProductCategoryVue />
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Headers from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { useCartContext } from "../pages/CartContect.vue";
import { useToast } from "vue-toastification";
import ProductCategoryVue from "../components/productcategory/ProductCategory.vue";
import { ref } from "vue";

export default {
  components: { Headers, Footer, ProductCategoryVue },
  setup() {
    const { addItemMultiple } = useCartContext();
    const errorMessage = ref("");
    const setError = (message) => {
      errorMessage.value = message;
    };

    const handleAddToCart = (product) => {
      setError("");
      addItemMultiple(product, product.quantity);
    };

    const increaseQuantity = (product) => {
      if (product.managstock === "yes") {
        if (product.quantity < product.qty) {
          product.quantity++;
          setError("");
        } else {
          setError("Cannot exceed stock quantity!");
        }
      } else if (product.managstock === "no") {
        product.quantity++;
      }
    };

    const decreaseQuantity = (product) => {
      if (product.quantity > 1) {
        product.quantity--;
        setError("");
      }
    };

    const handleQuantityChange = (product) => {
      if (product.quantity < 1) {
        product.quantity = 1;
        setError("");
      } else if (product.quantity > product.qty) {
        product.quantity = product.qty;
        setError("Quantity exceeds stock limit!");
      } else {
        setError("");
      }
    };

    return {
      handleAddToCart,
      increaseQuantity,
      decreaseQuantity,
      handleQuantityChange,
      errorMessage,
    };
  },
  data() {
    return {
      productsID: [
        {
          id: 4,
          image:
            "https://hungrybynature.com/wp-content/uploads/2017/09/pinch-of-yum-workshop-19.jpg",
          names: "Chicken Soup",
          subtitle: "Brown Sugar Milk Tea",
          discount: 50,
          managstock: "yes",
          price: 10,
          description: "Hearty chicken soup with savory broth...",
          qty: 5,
          quantity: 1,
        },
      ],
    };
  },
};
</script>
