<template>
  <div>
    <Headers />
    <div class="max-w-screen-xl mx-auto pt-20 p-4">
      <!-- Breadcrumb Navigation -->
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

      <!-- Product List -->
      <div class="py-4">
        <div v-for="(product, index) in productsID" :key="index">
          <div class="flex col-span-2">
            <div @click="handleSelectProduct(product)">
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
      <!-- Show selected product sub-images -->
      <div v-if="selectedProduct" class="py-4 flex gap-2">
        <div v-for="(item, index) in selectedProduct.sunproduct" :key="index">
          <img
            :src="item.images"
            alt="Product image"
            class="h-20 w-20 object-cover border p-1"
          />
        </div>
      </div>

      <ProductCategoryVue />
    </div>
    <Footer />
  </div>
</template>

<script>
import Headers from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { useCartContext } from "../pages/CartContect.vue";
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
      if (product.quantity < product.qty) {
        product.quantity++;
        setError("");
      } else {
        setError("Cannot exceed stock quantity!");
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

    const selectedProduct = ref([]); // To store the selected product

    const handleSelectProduct = (product) => {
      selectedProduct.value = product; // Set the selected product
    };

    return {
      handleAddToCart,
      increaseQuantity,
      decreaseQuantity,
      handleQuantityChange,
      errorMessage,
      selectedProduct, // Expose the selected product to the template
      handleSelectProduct, // Pass this to the template to update selected product
    };
  },
  data() {
    return {
      productsID: [
        {
          id: 1,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG3jTszSflQt-SjZGIWqJRegF0GrAVzpCQtg&s",
          sunproduct: [
            {
              id: 1,
              images:
                "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
            },
            {
              id: 2,
              images:
                "https://images.unsplash.com/photo-1560674457-12073ed6fae6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhbXxlbnwwfHwwfHx8MA%3D%3D",
            },
          ],
          names: "Chicken Soup",
          subtitle: "Brown Sugar Milk Tea",
          discount: 50,
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
