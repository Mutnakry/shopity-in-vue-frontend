<template>
  <div>
    <nav
      class="bg-green-800 shadow-xl dark:bg-gray-900 fixed w-full z-20 top-0 start-0"
    >
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4969/4969682.png"
            class="h-8 w-8 rounded-full"
            alt="Flowbite Logo"
          />
          <span
            class="self-center text-orange-500 text-2xl font-medium whitespace-nowrap dark:text-white sm:block hidden"
          >
            KON KHMER
          </span>
        </a>
        <div class="flex text-white space-x-3">
          <!-- Login Button -->
          <button
            @click="openModal('login')"
            class="py-1 px-6 hover:scale-105 hover:border-orange-500 border-2 border-orange-500"
          >
            ចូលគណនី
          </button>
          <!-- Register Button -->
          <button
            @click="openModal('register')"
            class="py-1 px-6 hover:scale-105 border-0 bg-orange-500 border-orange-500"
          >
            ចុះឈ្មោះ
          </button>
          <button>
            <a href="/cart">
              <img
                class="h-6 hover:scale-105"
                src="https://static.vecteezy.com/system/resources/previews/017/196/580/non_2x/shopping-cart-icon-on-transparent-background-free-png.png"
              />
            </a>
          </button>
          <div v-if="total !== 0" class="flex space-x-2">
            <p class="-translate-x-3 -translate-y-3">{{ totalcount }}</p>
            <div class="translate-y-0">
              <span>{{ total.toFixed(2) }} $</span>
            </div>
          </div>

          <div
            class="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse"
          >
            <button
              type="button"
              data-dropdown-toggle="language-dropdown-menu"
              class="flex space-x-2"
            >
              <span>admin</span>
              <svg
                class="h-6 hover:scale-105 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM12 14c-3.31 0-6 2.69-6 6v2h12v-2c0-3.31-2.69-6-6-6z"
                />
              </svg>
            </button>
            <!-- Dropdown -->
            <div
              class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
              id="language-dropdown-menu"
            >
              <ul class="py-2 font-medium" role="none">
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div class="items-center" @click="logoutUser">LogOut</div>
                  </a>
                </li>
              </ul>
            </div>
            <button
              data-collapse-toggle="navbar-language"
              type="button"
              class="inline-flex items-center p-2 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-language"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <LoginVue
      :isOpen="isModalOpen"
      :valuetype="valuetype"
      @close="isModalOpen = false"
      @update-valuetype="updateValuetype"
    />
  </div>
</template>

<script>
import LoginVue from "./Login.vue";
import { useCartContext } from "../pages/CartContect.vue";

export default {
  components: { LoginVue },
  setup() {
    const { cart } = useCartContext();
    return { cart };
  },
  data() {
    return {
      isModalOpen: false,
      isModalLogout: false,
      valuetype: "login",
    };
  },
  methods: {
    openModal(type) {
      this.valuetype = type;
      this.isModalOpen = true;
    },
    logoutUser() {
      console.log("User logged out");
      localStorage.removeItem("userToken");
      this.isModalLogout = false;
      this.$router.push("/");
    },
    updateValuetype(newType) {
      this.valuetype = newType;
    },
  },
  computed: {
    totalcount() {
      return this.cart.items.reduce((sum, item) => sum + 1, 0);
    },
    total() {
      return this.cart.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
  },
};
</script>
