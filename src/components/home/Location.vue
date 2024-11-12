<template>
       <div class="max-w-screen-xl mx-auto py-6 px-4">
        <div>
          <h3 class="text-4xl font-medium py-8">ស្វែងរកយើងនៅតំបន់របស់អ្នក</h3>
        </div>
        <div class="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
          <!-- Loop through the locations array -->
          <div
            v-for="(location, index) in locations"
            :key="index"
            class="relative lg:h-60 md:h-48 h-36 w-full"
          >
            <div class="rounded-lg shadow-xl">
              <router-link
                :to="{
                  name: 'product',
                  params: { id: location.id },
                }"
              >
                <img
                  :src="location.image"
                  :alt="location.name"
                  class="rounded-lg hover:scale-105 lg:h-60 md:h-48 h-36 w-full duration-300 border-2 border-red-500"
                />
              </router-link>
            </div>
            <div
              class="absolute bottom-4 right-2 bg-green-500 text-white text-sm px-6 py-2 rounded-lg"
            >
              {{ location.name }}
            </div>
          </div>
        </div>
      </div>
</template>


<script>
export default {
   data(){
    return{
         locations: [
        {
          id: 1,
          name: "បន្ទាយមានជ័យ",
          image:
            "https://images.deliveryhero.io/image/foodpanda/homepage/refresh-hero-home-kh.png?width=1264",
        },
        {
          id: 2,
          name: "ភ្នំពេញ",
          image:
            "https://images.deliveryhero.io/image/foodpanda/home-vendor-kh.jpg?width=1264&height=808.96",
        },
        {
          id: 3,
          name: "សៀមរាប",
          image:
            "https://images.deliveryhero.io/image/foodpanda/homepage/refresh-hero-home-kh.png?width=1264",
        },
        {
          id: 4,
          name: "បាត់ដំបង",
          image:
            "https://z-p3-scontent.fpnh18-3.fna.fbcdn.net/v/t45.1600-4/353969917_23855217023060359_7687610690161555521_n.png?stp=cp0_dst-jpg_p526x296_q90_spS444&_nc_cat=101&ccb=1-7&_nc_sid=467c85&_nc_eui2=AeHS1YshqMy2IjxkJVpE5mj6zlYthUlbMhjOVi2FSVsyGGcjtPh0Jjo0MIjLGcYCRRaWg5ND9UMTP1u0Gl6QliVm&_nc_ohc=9HLv92gm000Q7kNvgGi0ahe&_nc_ht=z-p3-scontent.fpnh18-3.fna&_nc_gid=A3UVsehAxpZZSAEL_8hMIHu&oh=00_AYAhXoqDjS1PUgEqJskCM8sQK5zBWLKRzuQUgos_CQzn7Q&oe=670AD32A",
        },
      ],
    }
   }
}
</script>