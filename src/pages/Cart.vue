<template>
  <div>
    <Headers />
    <div class="pt-20">
      <!-- <div class="max-w-screen-xl mx-auto">
        <div className="max-w-screen-xl mx-auto">
          <div
            className="flex items-center justify-center py-40 text-lg text-white font-semibold rounded-full"
          >
            <div className="text-center">
              <img
                src="https://aeoncambodia.sgp1.digitaloceanspaces.com/image/inc/empty-cart.png"
                alt="empty cart"
                className="h-16 w-16 mx-auto"
              />
              <p className="text-gray-700 py-3 text-xs">
                មិនមានផលិតផលនៅក្នុងកន្ត្រក!
              </p>
              <a
                href="/"
                className="text-white py-3 px-6 font-serif text-sm rounded-lg bg-pink-600 hover:bg-pink-700"
                >បន្តទិញទំនិញ</a
              >
            </div>
          </div>

          <form>
            <div class="flex items-center mb-4">
              <a href="/">
                <h3
                  class="ml-2 text-lg text-white font-semibold bg-fuchsia-700 py-2 px-12 rounded-full"
                >
                  បន្តទិញទំនិញ
                </h3></a
              >
            </div>

            <div className=" max-w-screen-xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-6">
                <div
                  className="bg-slate-50 rounded-lg overflow-x-auto p-4 flex-1 shadow-lg"
                >
                  <div className="flex items-center mb-4 justify-between">
                    <div className="flex">
                      <a href="/">
                        <h3
                          className="ml-2 text-lg font-semibold text-pink-500"
                        >
                          Shoping - Online PHNOM PENH
                        </h3>
                      </a>
                    </div>
                    <div className="flex">
                      <p
                        className="ml-6 text-md text-red-500 cursor-pointer px-2"
                      >
                        លុបចេញពីហាង
                      </p>
                      <img
                        src="https://cdn.pixabay.com/photo/2020/04/12/10/57/store-5033746_640.png"
                        alt=""
                        className="h-6 w-6 cursor-pointer"
                      />
                    </div>
                  </div>

                  <div
                    className="flex items-center border-b border-gray-200 py-4"
                    
                  >
                    <span>1</span>
                    <div className="flex items-center ml-4 space-x-4">
                      <img
                        src="https://cdn.pixabay.com/photo/2020/04/12/10/57/store-5033746_640.png"
                        alt="Product"
                        className="w-20 h-20 object-contain"
                      />
                      <div>
                        <p className="font-semibold">ត្រីអាំង</p>
                        <p className="text-gray-500 text-xs line-clamp-2">
                          មានរស់ជាតិឆ្ងុយឆ្ងាញ
                        </p>
                        <p className="text-gray-400 text-sm">លេខកូដ: 00123</p>
                      </div>
                    </div>
                    <div>
                      <p className="ml-6 text-red-600 inle">%100</p>
                    </div>
                    <div className="text-center">
                      <p className="ml-6 text-gray-600 whitespace-nowrap">
                        $ 89
                      </p>
                      <p className="ml-6 text-gray-600 whitespace-nowrap">
                        មានទំនិញ
                        <span className="text-red-600"> 3 </span>ក្នុងស្តុក
                      </p>
                    </div>
                    <div
                      className="flex items-center ml-6 border border-pink-500 rounded-md  justify-between"
                    >
                      <button
                        type="button"
                        className="text-gray-500 text-xl hover:text-white rounded-l-md hover:bg-pink-400 px-4"
                      >
                        -
                      </button>
                      <input
                        type="text"
                        className="w-12 text-center border-l text-xl border-r border-pink-500" value="1"
                      />
                      <button
                        type="button"
                        className="text-gray-500 text-xl hover:text-white rounded-r-md hover:bg-pink-400 px-4"
                      >
                        +
                      </button>
                    </div>
                    <div>
                      <p className="ml-6 text-gray-600">90</p>
                    </div>
                    <button
                      type="button"
                      className="ml-6 w-5 text-md text-red-500"
                    >
                      <img
                        src="https://cdn.pixabay.com/photo/2020/04/12/10/57/store-5033746_640.png"
                        alt=""
                        className="h-4 w-4"
                      />
                    </button>
                  </div>
                </div>
                <div
                  className="bg-slate-50 rounded-lg p-4 w-full lg:w-1/3 shadow-md"
                >
                  <h3 className="text-lg font-semibold mb-4">សរុប</h3>
                  <div
                    className="border-t border-b border-gray-200 py-2 flex justify-between"
                  >
                    <span className="text-gray-500">សរុបរង</span>
                    <span className="font-semibold">$30</span>
                  </div>
                  <div className=" py-2 flex justify-between">
                    <span className="text-gray-500">សរុប</span>
                    <span className="font-semibold">$10</span>
                  </div>
                  <div className=" py-2 flex justify-between">
                    <span className="text-gray-500">សរុបជាប្រាក់រៀល</span>
                    <span className="font-semibold">1220 KHR</span>
                  </div>
                  <div className=" py-2 flex justify-between">
                    <span className="text-gray-500">សន្សំ</span>
                    <span className="font-semibold text-red-500"
                      >$ 9000000</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div> -->
      <Cart 
      :cart="cart" 
      :products="products" 
      @remove-from-cart="removeFromCart" 
      @update-cart-quantity="updateCartQuantity"
      @remove-all-from-cart="handleRemoveAllFromCart" 
    />
    </div>
  </div>
</template>

<script >
import Headers from "../components/Header.vue";
import Cart from '../pages/Add to cart/Cart.vue'

export default {
  name: "HomePage",
  components: { Headers,Cart },
  
  data() {
    return {
      cart: this.loadCart() || [],
    };
  },
    methods: {
    loadCart() {
      const cart = localStorage.getItem('cart');
      return cart ? JSON.parse(cart) : [];
    },
    saveCart() {
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    removeFromCart(product) {
      const index = this.cart.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        this.cart.splice(index, 1);
        this.saveCart();
      }
    },
    handleRemoveAllFromCart() {
      const confirmRemove = confirm("Are you sure you want to remove all items from the cart?");
      if (confirmRemove) {
        this.cart = []; // Clear the cart
        this.saveCart(); // Save the updated cart to localStorage
      }
    },
    checkCartItem(productId) {
      return this.cart.find((item) => item.id === productId);
    },
    updateCartQuantity({ item, action }) {
      const cartItem = this.cart.find((cart) => cart.id === item.id);
      if (cartItem) {
        if (action === 'increment') {
          if (cartItem.quantity < item.qty) {
            cartItem.quantity++;
          } else {
            alert(`Sorry, only ${item.qty} ${item.name}(s) available in stock.`);
          }
        } else if (action === 'decrement') {
          if (cartItem.quantity > 1) {
            cartItem.quantity--;
          } else {
            this.removeFromCart(cartItem); // Remove item if quantity is 1 and decrement is pressed
          }
        }
        this.saveCart(); // Save updated cart to localStorage
      }
    },
  },
};
</script>