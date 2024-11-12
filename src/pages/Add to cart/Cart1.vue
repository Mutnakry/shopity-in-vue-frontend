<template>
  <div>
    <div class="max-w-screen-xl mx-auto">
      <!-- Check if the cart is empty -->
      <div v-if="cart.length === 0" class="flex items-center justify-center py-40 text-lg text-white font-semibold rounded-full">
        <div class="text-center">
          <img src="https://aeoncambodia.sgp1.digitaloceanspaces.com/image/inc/empty-cart.png" alt="empty cart" class="h-16 w-16 mx-auto" />
          <p class="text-gray-700 py-3 text-sm">មិនមានផលិតផលនៅក្នុងកន្ត្រក!</p>
          <a href="/" class="text-white py-3 px-6 font-serif text-sm rounded-lg bg-green-600 hover:bg-green-700 hover:text-green-600">បន្តទិញទំនិញ</a>
        </div>
      </div>
      <!-- Render cart items -->
      <div v-else>
        <form>
          <div class="flex items-center mb-4">
            <a href="/">
              <h3 class="ml-2 text-lg text-white font-semibold bg-green-500 py-2 px-12 rounded-full">បន្តទិញទំនិញ</h3>
            </a>
          </div>
          <div class="max-w-screen-xl mx-auto">
            <div class="flex flex-col lg:flex-row gap-6">
              <div class="bg-slate-50 rounded-lg overflow-x-auto p-4 flex-1 shadow-lg">
                <div class="flex items-center mb-4 justify-between">
                  <div class="flex">
                    <a href="/">
                      <h3 class="ml-2 text-lg font-semibold text-green-500">Shopping - Online PHNOM PENH</h3>
                    </a>
                  </div>
                  <div class="flex">
                    <button class="flex" @click.prevent="removeAllFromCart">
                      <p class="ml-6 text-md text-green-500 cursor-pointer px-2">លុបចេញពីហាង</p>
                      <img src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" alt="" class="h-6 w-6 cursor-pointer" />
                    </button>
                  </div>
                </div>
                <!-- Loop through cart items -->
                <div v-for="(item, index) in cart" :key="item.id" class="border-t">
                  <div class="flex items-center border-b border-gray-200 py-4">
                    <span>{{ index + 1 }}</span>
                    <div class="flex items-center ml-4 space-x-4">
                      <img :src="item.image" alt="Product" class="w-20 h-20 object-contain" />
                      <div>
                        <p class="font-semibold">{{ item.name }}</p>
                        <p class="text-gray-500 text-xs line-clamp-2">{{ item.subtitle }}</p>
                        <p class="text-gray-400 text-sm">លេខកូដ: 001{{ item.id }}</p>
                      </div>
                    </div>
                    <div>
                      <p class="ml-6 text-red-600">{{ item.discount }} %</p>
                    </div>
                    <div class="text-center">
                      <p class="ml-6 text-gray-600 whitespace-nowrap">$ {{ item.price }}</p>
                      <p class="ml-6 text-gray-600 whitespace-nowrap">មានទំនិញ <span class="text-red-600">{{ item.qty }}</span> ក្នុងស្តុក</p>
                    </div>
                    <div class="flex items-center ml-6 border border-green-500 rounded-md justify-between">
                      <button type="button" @click="decrementQuantity(item)" class="text-gray-500 text-xl hover:text-white rounded-l-md hover:bg-green-400 px-4">-</button>
                      <input type="text" class="w-12 text-center border-l text-xl border-r border-green-500" v-model="item.quantity" />
                      <button type="button" @click="incrementQuantity(item)" class="text-gray-500 text-xl hover:text-white rounded-r-md hover:bg-green-400 px-4">+</button>
                    </div>
                    <div>
                      <p class="ml-6 text-gray-600">${{ (item.price * item.quantity - item.price * item.quantity * (item.discount * 0.01)).toFixed(2) }}</p>
                    </div>
                    <button @click="removeFromCart(item)" type="button" class="ml-6 w-5 text-md text-red-500">
                      <img src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" alt="" class="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              <div class="bg-slate-50 rounded-lg p-4 w-full lg:w-1/3 shadow-md">
                <h3 class="text-lg font-semibold mb-4">សរុប</h3>
                <div class="border-t border-b border-gray-200 py-2 flex justify-between">
                  <span class="text-gray-500">សរុបរង</span>
                  <span class="font-semibold">${{ total.toFixed(2) }}</span>
                </div>
                <div class="py-2 flex justify-between">
                  <span class="text-gray-500">សរុប</span>
                  <span class="font-semibold">${{ subtotal.toFixed(2) }}</span>
                </div>
                <div class="py-2 flex justify-between">
                  <span class="text-gray-500">សរុបជាប្រាក់រៀល</span>
                  <span class="font-semibold">{{ (subtotal * 41).toFixed(2) }} KHR</span>
                </div>
                <div class="py-2 flex justify-between">
                  <span class="text-red-500">សន្សំ</span>
                  <span class="font-semibold text-red-500">$ {{ totalDiscount.toFixed(2) }}</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useToast } from "vue-toastification";

export default {
  props: ["cart"],
  setup() {
    const toast = useToast();
    return { toast };
  },
  computed: {
    total() {
      return this.cart.reduce((sum, item) => sum + (item.price * item.quantity * (1 - item.discount / 100)), 0);
    },
    subtotal() {
      return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    },
    totalDiscount() {
      return this.cart.reduce((sum, item) => sum + (item.price * item.quantity * (item.discount / 100)), 0);
    },
  },
  methods: {
    removeFromCart(item) {
      this.$emit("remove-from-cart", item);
    },
    removeAllFromCart() {
      this.$emit("remove-all-from-cart");
    },
    incrementQuantity(item) {
      if (item.quantity < item.qty) {
        this.$emit("update-cart-quantity", { item, action: "increment" });
      } else {
        this.toast.error(`Sorry, only ${item.qty} available for ${item.name}.`);
      }
    },
    decrementQuantity(item) {
      if (item.quantity > 1) {
        this.$emit("update-cart-quantity", { item, action: "decrement" });
      }
    },
  },
};
</script>
