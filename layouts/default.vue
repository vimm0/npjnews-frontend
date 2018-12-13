<template>
  <div>
    <Navbar></Navbar>
    <nuxt/>
    <Footer></Footer>
    <script src="js/jquery/jquery-2.2.4.min.js"></script>
    <script src="js/bootstrap/popper.min.js"></script>
    <script src="js/bootstrap/bootstrap.min.js"></script>
    <script src="js/plugins/plugins.js"></script>
    <script src="js/active.js"></script>
  </div>
</template>
<script>
  import Navbar from '@/components/Navbar.vue'
  import Footer from '@/components/Footer.vue'

  export default {
    head() {
      return {
        script: [
          // {
          //   type: 'text/javascript',
          //   src: "js/jquery/jquery-2.2.4.min.js"
          // },
          // {
          //   src: "js/bootstrap/popper.min.js"
          // },
          // {
          //   src: "js/bootstrap/bootstrap.min.js"
          // },
          // {
          //   type: 'text/javascript',
          //   src: "js/plugins/plugins.js"
          // },
          // {
          //   type: 'text/javascript',
          //   src: "js/active.js"
          // },
        ],
        link: [
          // {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto'}
        ]
      }
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
</style>
