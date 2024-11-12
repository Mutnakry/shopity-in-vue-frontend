<template>
  <div>
    <Headers />
    <div class="pt-20">
      <div
        class="max-w-screen-xl mx-auto flex gap-4 shadow-lg rounded-lg relative"
      >
        <div class="w-1/3 p-4 relative z-40">
          <div class="flex justify-between whitespace-nowrap">
            <p class="text-green-500 text-xl font-normal hidden md:block">
              ទិញទំនិញតាមផ្នែក
            </p>
          </div>
          <hr class="my-2 bg-gray-700" />
          <ul class="text-white">
            <li>
              <a
                href="#"
                class="flex items-center p-3 text-green-500 rounded-lg dark:text-white hover:bg-white hover:shadow-md dark:hover:bg-gray-700 group"
              >
                <img
                  class="rounded-full h-8 w-8"
                  src="https://static.vecteezy.com/system/resources/thumbnails/015/452/522/small_2x/discount-icon-in-trendy-flat-style-isolated-on-background-discount-icon-page-symbol-for-your-web-site-design-discount-icon-logo-app-ui-discount-icon-eps-vector.jpg"
                  alt="Discount Icon"
                />
                <span class="flex-1 ms-3 whitespace-nowrap hidden md:block">
                  បញ្ចុះតម្លៃរហូតដល់៥០%
                </span>
              </a>
            </li>
            <div
              v-for="(cat, index) in categories"
              :key="index"
              class="relative z-40"
            >
              <li class="group relative">
                <a
                  href="#"
                  class="flex items-center p-3 text-green-500 rounded-lg dark:text-white hover:bg-white hover:shadow-md dark:hover:bg-gray-700"
                >
                  <img
                    class="rounded-full h-8 w-8"
                    src="https://cdn-icons-png.freepik.com/512/2504/2504814.png"
                    alt="Category Icon"
                  />
                  <span class="flex-1 ms-3 whitespace-nowrap hidden md:block">
                    {{ cat.name }}
                  </span>
                </a>
                <ul
                  v-if="cat.subcategories"
                  class="absolute left-full top-0 hidden group-hover:flex flex-col bg-white shadow-lg rounded-lg p-2 w-48 dark:bg-gray-700 z-40"
                >
                  <router-link
                    v-for="(subcat, subIndex) in cat.subcategories"
                    :key="subIndex"
                    class="px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-white"
                    :to="{ name: 'detailcategory', params: { id: subcat.id } }"
                  >
                    {{ subcat.name }}
                  </router-link>
                </ul>
              </li>
            </div>
            <div class="my-2">
              <button
                data-modal-target="authentication-modal"
                data-modal-toggle="authentication-modal"
                class="text-green-600 py-3 w-full outline outline-1 text-md font-normal rounded-full hover:bg-green-600 hover:text-white duration-500"
              >
                មើលបន្ថែម
              </button>
            </div>
          </ul>
        </div>
        <div
          id="default-carousel"
          class="relative w-full"
          data-carousel="slide"
        >
          <div class="relative h-56 overflow-hidden rounded-lg md:h-96 z-10">
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://images.deliveryhero.io/image/foodpanda/home-vendor-kh.jpg?width=1264&height=808.96"
                class="absolute block w-full object-contain -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="Carousel Image 1"
              />
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://images.deliveryhero.io/image/foodpanda/home-foodpanda-apps.png?width=1264&height=1004.88"
                class="absolute block w-full object-contain -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="Carousel Image 2"
              />
            </div>
          </div>
          <button
            type="button"
            class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span
              class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70"
            >
              <svg
                class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span class="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span
              class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70"
            >
              <svg
                class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span class="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
      <!-- Category -->
      <div>
        <Category />
      </div>
      <!-- Location privince -->
      <div>
        <location />
      </div>
      <div class="max-w-screen-xl mx-auto py-12">
        <h2 class="text-2xl px-4 font-bold mb-4">ផលិតផល</h2>

        <div>
          <div
            className="flex overflow-x-auto snap-x space-x-6 justify-between snap-mandatory mx-2 scrollbar-hidden"
          >
            <div
              className="w-64 rounded-lg my-3 flex-shrink-0 snap-center bg-white overflow-hidden group"
            >
              <div className="relative h-24 md:h-36 sm:h-28 duration-500">
                <div
                  className="flex font-semibold text-xl absolute justify-between text-green-400 px-2 w-full"
                >
                  <p>ផ្សារទំនើប</p>
                  <p>10%</p>
                </div>
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/008/472/909/small/beautiful-young-asian-woman-with-shopping-bags-file-png.png"
                  alt="Character"
                  className="absolute bottom-0 right-0 h-24 md:h-36 sm:h-28 duration-500 rounded-lg group-hover:scale-150"
                />
              </div>
            </div>
            <div
              className="w-64 rounded-lg my-3 flex-shrink-0 snap-center bg-white overflow-hidden group"
            >
              <div className="relative h-24 md:h-36 sm:h-28 duration-500">
                <div
                  className="flex font-semibold text-xl absolute justify-between text-green-400 px-2 w-full"
                >
                  <p>ដឹកជញ្ជូនអាហារ</p>
                  <p>50%</p>
                </div>
                <img
                  src="https://png.pngtree.com/png-vector/20230907/ourmid/pngtree-happy-shopper-selling-shopping-png-image_9206556.png"
                  alt="Character"
                  className="absolute bottom-0 right-0 h-24 md:h-36 sm:h-28 duration-500 rounded-lg group-hover:scale-150"
                />
              </div>
            </div>
            <div
              className="w-64 rounded-lg my-3 flex-shrink-0 snap-center bg-white overflow-hidden group"
            >
              <div className="relative h-24 md:h-36 sm:h-28 duration-500">
                <div
                  className="flex font-semibold text-xl absolute justify-between text-green-400 px-2 w-full"
                >
                  <p>ហ្វេសិន និងសម្រស់</p>
                  <p>25%</p>
                </div>
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/008/476/780/small/asian-woman-with-her-shopping-bags-file-png.png"
                  alt="Character"
                  className="absolute bottom-0 right-0 h-24 md:h-36 sm:h-28 duration-500 rounded-lg group-hover:scale-150"
                />
              </div>
            </div>
            <div
              className="w-64 rounded-lg my-3 flex-shrink-0 snap-center bg-white overflow-hidden group"
            >
              <div className="relative h-24 md:h-36 sm:h-28 duration-500">
                <div
                  className="flex font-semibold text-xl absolute justify-between text-green-400 px-2 w-full"
                >
                  <p>ហ្វេសិន និងសម្រស់</p>
                  <p>25%</p>
                </div>
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/008/476/780/small/asian-woman-with-her-shopping-bags-file-png.png"
                  alt="Character"
                  className="absolute bottom-0 right-0 h-24 md:h-36 sm:h-28 duration-500 rounded-lg group-hover:scale-150"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-screen-xl mx-auto py-6 px-4">
        <div>
          <h3 class="text-4xl font-medium py-8 uppercase">
            ទាញយកកម្មវិធី​ Kon khmer
          </h3>
        </div>
        <div class="rounded-xl bg-green-400">
          <div class="grid md:grid-cols-2">
            <div class="px-6 py-8">
              <h3 class="text-2xl text-white font-medium py-8">
                កុម្ម៉ង់អាហារដែល​អ្នកចូលចិត្ត និងអីវ៉ាន់ដែលអ្នកត្រូវការ
              </h3>
              <div class="flex space-x-3">
                <img
                  class="h-24 w-24 border p-2 rounded-lg"
                  src="https://images.deliveryhero.io/image/foodpanda/homepage/khhomepageqrcode.png"
                  alt=""
                />
                <p class="w-80 text-white font-medium text-lg">
                  ភោជនីយដ្ឋាននិងហាងទំនិញដែលអ្នកចូលចិត្តមកដល់ត្រឹមមួយឃ្លីក។
                  ស្វែងរកអាហារដែលអ្នកកំពុងឃ្លាន ទំនិញដែលអ្នកត្រូវការ
                  និងចង់បានយ៉ាងងាយ។ ចាំអីទៀត ទាញយកកម្មវិធីតោះ។
                </p>
              </div>
              <div>
                <div class="flex space-x-2">
                  <div>
                    <img
                      class="h-14"
                      src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Mac_App_Store_logo.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      class="h-14"
                      src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      class="h-12"
                      src="https://consumer.huawei.com/content/dam/huawei-cbg-site/me-africa/za/mkt/pdp/wearables/watch-d/huawei-nova9-se-app.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="relative">
              <img
                class="absolute hidden md:block"
                src="https://z-p3-scontent.fpnh18-3.fna.fbcdn.net/v/t45.1600-4/353969917_23855217023060359_7687610690161555521_n.png?stp=cp0_dst-jpg_p526x296_q90_spS444&_nc_cat=101&ccb=1-7&_nc_sid=467c85&_nc_eui2=AeHS1YshqMy2IjxkJVpE5mj6zlYthUlbMhjOVi2FSVsyGGcjtPh0Jjo0MIjLGcYCRRaWg5ND9UMTP1u0Gl6QliVm&_nc_ohc=9HLv92gm000Q7kNvgGi0ahe&_nc_ht=z-p3-scontent.fpnh18-3.fna&_nc_gid=A3UVsehAxpZZSAEL_8hMIHu&oh=00_AYAhXoqDjS1PUgEqJskCM8sQK5zBWLKRzuQUgos_CQzn7Q&oe=670AD32A"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>
<script >
import Headers from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Category from "../components/home/Category.vue";
import Location from "../components/home/Location.vue";
export default {
  name: "HomePage",
  components: { Headers, Footer, Category, Location },
  data() {
    return {
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
            { id: 3, name: "ទឹកដោះសាច់មាន់" },
            { id: 4, name: "សាច់ជ្រូក" },
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
};
</script>
