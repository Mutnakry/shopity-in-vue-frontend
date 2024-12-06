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

      <div v-for="(product, index) in productsID" :key="index">
        <div>
          <div class="flex col-span-2">
            <!-- Main Product Image -->
            <div>
              <img
                :src="product.image"
                alt="Product image"
                class="md:w-96 md:h-96 h-36 w-36 object-cover"
              />
                <!-- Sub Images -->
              <div class="flex space-x-2 mt-4">
               <img
                :src="product.image"
                alt="Product image"
                  class="w-20 h-20 object-cover border-2 border-gray-800 cursor-pointer"
              />
              </div>
              <!-- Sub Images -->
              <div class="flex space-x-2 mt-4">
                <img
                  v-for="(sub, subIndex) in product.subimage"
                  :key="subIndex"
                  :src="sub.names"
                  alt="Sub image"
                  class="w-16 h-16 object-cover border border-gray-300 rounded-md cursor-pointer"
                  @click="updateMainImage(product, sub.names)"
                />
              </div>
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
import ProductCategoryVue from "../components/productcategory/ProductCategory.vue";
import { ref } from "vue";

export default {
  components: { Headers, Footer, ProductCategoryVue },
  // setup() {
  //   const { addItemMultiple } = useCartContext();
  //   const errorMessage = ref("");
  //   const setError = (message) => {
  //     errorMessage.value = message;
  //   };

  //   const handleAddToCart = (product) => {
  //     setError("");
  //     addItemMultiple(product, product.quantity);
  //   };

  //   const increaseQuantity = (product) => {
  //     if (product.managstock === "yes") {
  //       if (product.quantity < product.qty) {
  //         product.quantity++;
  //         setError("");
  //       } else {
  //         setError("Cannot exceed stock quantity!");
  //       }
  //     } else if (product.managstock === "no") {
  //       product.quantity++;
  //     }
  //   };

  //   const decreaseQuantity = (product) => {
  //     if (product.quantity > 1) {
  //       product.quantity--;
  //       setError("");
  //     }
  //   };

  //   const handleQuantityChange = (product) => {
  //     if (product.quantity < 1) {
  //       product.quantity = 1;
  //       setError("");
  //     } else if (product.quantity > product.qty) {
  //       product.quantity = product.qty;
  //       setError("Quantity exceeds stock limit!");
  //     } else {
  //       setError("");
  //     }
  //   };

  //   return {
  //     handleAddToCart,
  //     increaseQuantity,
  //     decreaseQuantity,
  //     handleQuantityChange,
  //     errorMessage,
  //   };
  // },

  setup() {
    const { addItemMultiple } = useCartContext();
    const errorMessage = ref("");
    const setError = (message) => {
      errorMessage.value = message;
    };

    const updateMainImage = (product, subImage) => {
      product.image = subImage; // Update the main image
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
      updateMainImage, // Add this method to return
      errorMessage,
    };
  },

  data() {
    return {
      productsID: [
        {
          id: 4,
          image:
            "https://thumbs.dreamstime.com/b/diet-healthy-food-lifestyle-health-concept-sport-exercise-equipment-workout-and-gym-background-nutrition-detox-salad-f-179855057.jpg",
          subimage: [
            {
              id: 1,
              names:
                "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
            },
            {
              id: 2,
              names:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9qiFboMey4r13L_aCj0TXaDp_-9rbtGbdRmxXpRVbG3_LqPkipblzTB0-liNHqrxqFao&usqp=CAU",
            },
            {
              id: 3,
              names:
                "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg",
            },
            {
              id: 4,
              names:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSax8foOcuyFWfKauStAHihPjokbWUcCn_djg&s",
            },
             {
              id: 5,
              names:
                "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528",
            },
            {
              id: 6,
              names:
                "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574",
            },
            
          ],
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
