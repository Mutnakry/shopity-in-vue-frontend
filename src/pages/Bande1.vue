<template>
  <div>
    <Headers />
    <div class="max-w-screen-xl mx-auto pt-20">
      <div class="p-4">
        <a
          class="text-md font-semibold underline underline-offset-8 text-gray-500"
          href="/"
        >
          ដើម >
        </a>
      </div>
      <div class="flex h-screen">
        <aside class="w-1/4 h-screen bg-gray-100 p-4 md:block hidden">
          <h2 class="text-pink-500 text-lg font-bold mb-4">
            គ្រប់ប្រភេទរាល់ទំនិញ
          </h2>
          <ul>
            <li
              v-for="(category, index) in categories"
              :key="category.id"
              class="mb-2"
            >
              <div
                @click="toggleDropdown(index)"
                :class="[
                  'flex justify-between items-center p-2 rounded-lg shadow cursor-pointer',
                  activeCategory === index
                    ? 'text-white bg-orange-500'
                    : 'bg-white',
                ]"
              >
                <span>{{ category.name }}</span>
                <span v-if="category.subcategories.length">
                  <svg
                    v-if="activeCategory === index"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                  <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                </span>
              </div>
              <ul v-if="activeCategory === index" class="ml-4 mt-2">
                <li
                  v-for="subcategory in category.subcategories"
                  :key="subcategory.id"
                  class="py-1"
                >
                  <a
                    @click="selectSubcategory(subcategory.id)"
                    class="text-gray-700"
                    >{{ subcategory.name }}</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </aside>
        <main
          class="md:w-3/4 p-4 overflow-y-auto snap-y grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 scrollbar-hidden"
        >
          <div
            v-for="(product, index) in filteredProducts"
            :key="index"
            class="border rounded-lg shadow p-4 h-72 text-center"
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
                <p class="text-pink-500 text-xl">{{ product.price_khr }} KHR</p>
                <p class="text-gray-500">{{ product.price }} USD</p>
              </router-link>
              <button
                @click="handleAddToCart(product)"
                class="mt-2 bg-orange-600 text-white px-4 py-2 rounded-lg"
              >
                បញ្ជាទិញឥឡូវ
              </button>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Headers from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { useCartContext } from "../pages/CartContect.vue";

export default {
  components: { Headers, Footer },
  name: "ProductGrid",
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
      activeCategory: null,
      selectedSubcategoryId: null,
      categories: [
        {
          id: 1,
          name: "បង្ហាញទាំងអស់",
          subcategories: [
            { id: 1, name: "ស្រា" },
            { id: 2, name: "ទឹកដោះគោ" },
          ],
        },
        {
          id: 2,
          name: "ទំនិញមួយទឹក",
          subcategories: [
            { id: 3, name: "ទឹកដោះសាច់មាន់" },
            { id: 4, name: "សាច់ជ្រូក" },
          ],
        },
        {
          id: 3,
          name: "ផលិតផលសុទ្ធ",
          subcategories: [
            { id: 5, name: "សាច់គោ" },
            { id: 6, name: "អាហាររូបករណ៍" },
          ],
        },
      ],
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
  computed: {
    filteredProducts() {
      if (this.selectedSubcategoryId) {
        return this.products.filter(
          (product) => product.subcategory_id === this.selectedSubcategoryId
        );
      }
      return this.products;
    },
  },
  methods: {
    toggleDropdown(index) {
      this.activeCategory = this.activeCategory === index ? null : index;
    },
    selectSubcategory(subcategoryId) {
      this.selectedSubcategoryId = subcategoryId;
    },
  },
};
</script>

<style scoped>
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}
.scrollbar-hidden {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
