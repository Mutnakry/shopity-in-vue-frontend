<template>
  <aside class="w-1/4 h-screen bg-gray-100 p-4 md:block hidden">
    <h2 class="text-green-500 text-lg font-bold mb-4">គ្រប់ប្រភេទរាល់ទំនិញ</h2>
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
            activeCategory === index ? 'text-white bg-orange-500' : 'bg-white',
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
              class="text-green-700 text-lg"
              >{{ subcategory.name }}</a
            >
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>


<script>
export default {
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
    };
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