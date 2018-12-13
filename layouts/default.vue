<template>
  <div>
    <Navbar></Navbar>
    <nuxt/>
    <Footer></Footer>
  </div>
</template>
<script>
  import Navbar from '@/components/Navbar.vue'
  import Footer from '@/components/Footer.vue'

  export default {
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

  div > a.post-like, div > a.post-comment {
    color: #828282;
  }

  div.post-date > a {
    color: #828282;
  }
</style>
