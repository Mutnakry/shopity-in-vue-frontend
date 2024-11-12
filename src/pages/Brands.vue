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
        <BrandsProductVue />
        <BrandsDetailVue />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Headers from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import BrandsDetailVue from "../components/brands/BrandsDetail.vue";
import BrandsProductVue from "../components/brands/BrandsProduct.vue";

export default {
  components: { Headers, Footer, BrandsDetailVue, BrandsProductVue },
};
</script>

