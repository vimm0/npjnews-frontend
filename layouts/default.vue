<template>
  <div>
    <Navbar></Navbar>
    <nuxt/>
    <Footer></Footer>
    <!--<no-ssr>-->
    <script src="js/jquery/jquery-2.2.4.min.js"></script>
    <script src="js/plugins/plugins.js"></script>
    <script src="js/active.js"></script>
    <!--</no-ssr>-->
  </div>
</template>
<script>
  import Navbar from '@/components/Navbar.vue'
  import Footer from '@/components/Footer.vue'

  export default {
    data() {
      return {}
    },
    head: {
      titleTemplate: '%s - Nepex',
    },
    components: {
      Navbar,
      Footer
    }
  }
</script>
<style>
  a:hover {
    color: #fff;
    text-decoration: none;
  }

  a.post-title {
    color: #000;
  }

  a {
    color: #000;
  }

  div > a.post-like, div > a.post-comment {
    color: #828282;
  }

  div.post-date > a {
    color: #828282;
  }

  .nav-title {
    color: #fff;
    font-weight: bold;
  }
</style>
