<script>
import { reactive, provide, inject, onMounted } from "vue";
import { useToast } from "vue-toastification";

export const useCart = () => {
  const cart = reactive({ items: [] });
  const toast = useToast();

  // Load cart from localStorage on initial render
  onMounted(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      cart.items = JSON.parse(savedCart);
    }
  });

  // Save cart to localStorage whenever it changes
  const saveCart = () => {
    localStorage.setItem("cart", JSON.stringify(cart.items));
  };

  const addItem = (item) => {
    const existingItem = cart.items.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const newQuantity = existingItem.quantity + 1;
      if (newQuantity > item.qty) {
        toast.error("ចំនួនក្នុងស្តុកបានអស់ហើយ !", {
          position: "top-right",
          autoClose: 1000,
        });
        return;
      } else {
        existingItem.quantity = newQuantity;
        toast.success(`${item.names} បានបញ្ចូលទៅក្នុងកន្រ្តក`, {
          position: "top-right",
          autoClose: 1000,
        });
      }
    } else {
      if (item.quantity > item.qty) {
        toast.error("ផលិតផលចំនួនក្នុងស្តុកបានអស់ហើយ !", {
          position: "top-right",
          autoClose: 1000,
        });
      } else {
        cart.items.push({ ...item, quantity: 1 });
        toast.success(`${item.names} បានបញ្ចូលទៅក្នុងកន្រ្តក`, {
          position: "top-right",
          autoClose: 1000,
        });
      }
    }
    saveCart();
  };

  
  const addItemMultiple = (item, quantityToAdd) => {
    // Ensure the quantity to add does not exceed the available stock
    if (quantityToAdd > item.qty) {
      toast.error("ចំនួនក្នុងស្តុកបានអស់ហើយ !", {
        position: "top-right",
        autoClose: 1000,
      });
      return;
    }

    const existingItem = cart.items.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const newQuantity = existingItem.quantity + quantityToAdd;

      // Check if the new quantity exceeds the available stock
      if (newQuantity > item.qty) {
        toast.error("ចំនួនក្នុងស្តុកបានអស់ហើយ !", {
          position: "top-right",
          autoClose: 1000,
        });
        return;
      } else {
        existingItem.quantity = newQuantity;
        toast.success(`${item.names} បានបញ្ចូល ${quantityToAdd} កន្រ្តក`, {
          position: "top-right",
          autoClose: 1000,
        });
      }
    } else {
      // If the item doesn't exist in the cart, add it with the specified quantity
      cart.items.push({ ...item, quantity: quantityToAdd });
      toast.success(`${item.names} បានបញ្ចូល ${quantityToAdd} កន្រ្តក`, {
        position: "top-right",
        autoClose: 1000,
      });
    }

    saveCart();
  };

  const updateQuantity = (id, quantity) => {
    const item = cart.items.find((cartItem) => cartItem.id === id);
    if (item) {
      if (quantity > item.qty) {
        toast.error("ចំនួនក្នុងស្តុកបានអស់ហើយ​​ !", {
          position: "top-right",
          autoClose: 1000,
        });
      } else if (quantity <= 0) {
        cart.items = cart.items.filter((cartItem) => cartItem.id !== id);
      } else {
        item.quantity = quantity;
      }
      saveCart();
    }
  };

  const removeItem = (id) => {
    cart.items = cart.items.filter((item) => item.id !== id);
    saveCart();
  };

  const clearCart = () => {
    cart.items = [];
    localStorage.removeItem("cart");
  };

  return {
    cart,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
    addItemMultiple,
  };
};

export const provideCart = () => {
  const cart = useCart();
  provide("cart", cart);
};

export const useCartContext = () => {
  return inject("cart");
};
</script>
