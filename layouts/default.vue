<template>
  <div>
    <Navbar></Navbar>
    <!--<div class="blog-area section-padding-0-80">-->
    <!--<div class="container">-->
    <!--<div class="row">-->
    <!--<div class="col-12 col-lg-8">-->
    <nuxt/>
    <!--</div>-->
    <!--<div class="col-12 col-lg-4">-->
    <!--<sidebar></sidebar>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
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
  import Sidebar from '@/components/Sidebar.vue'

  export default {
    data() {
      return {}
    },
    head: {
      titleTemplate: '%s - Nepex',
    },
    components: {
      Navbar,
      Sidebar,
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
