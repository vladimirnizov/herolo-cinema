<template>
  <div>
    <app-navbar />

    <!-- Main Router -->
    <nuxt />

    <app-footer />
  </div>
</template>

<script>
  import AppNavbar from '@/globals/navbar/Navbar.vue';
  import AppFooter from '@/globals/footer/Footer.vue';

  export default {
    components : {
      AppNavbar,
      AppFooter
    }
  }
</script>