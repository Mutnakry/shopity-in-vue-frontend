<template>
  <div>
    <Category
      @add-to-cart="addToCart"
      :cart="cart"
      @check-cart-item="checkCartItem"
    />
  </div>
</template>

<script>
import Category from "./Category.vue";
import { useToast } from "vue-toastification";

export default {
  components: {
    Category,
  },
  data() {
    return {
      cart: this.loadCart() || [],
    };
  },
  methods: {
    loadCart() {
      const cart = localStorage.getItem("cart");
      return cart ? JSON.parse(cart) : [];
    },
    saveCart() {
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    addToCart(product) {
      const cartItem = this.cart.find((item) => item.id === product.id);
      const toast = useToast();

      if (cartItem) {
        const totalQuantityInCart = cartItem.quantity;
        if (totalQuantityInCart + 1 > product.qty) {
          // Notify if trying to exceed available stock
          toast.error(
            `សុំទោសចំនួនមានតែ ${product.qty} ប៉ុណ្នោះ ${product.name} សូមលោកអ្នកឆែកមើលសាថ្មី !`,
            {
              position: "top-right",
              timeout: 3000,
            }
          );
          return; // Exit the function if exceeding stock
        }
        // Increment quantity for existing item
        cartItem.quantity++;
        toast.success(`លោកអ្នកបានបញ្ចូលកន្រ្តក់ ${product.name} ដោយជោកជ័យ !`, {
          position: "top-right",
          timeout: 3000,
        });
      } else {
        // Add new item to cart
        this.cart.push({ ...product, quantity: 1 });
        toast.success(`លោកអ្នកបានបញ្ចូលកន្រ្តក់ ${product.name} ដោយជោកជ័យ !`, {
          position: "top-right",
          timeout: 3000,
        });
      }

      // Save the updated cart to localStorage
      this.saveCart();
    },
  },
};
</script>
