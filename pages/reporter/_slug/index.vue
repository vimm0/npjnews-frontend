<template>
  <p>{{ reporter }}</p>
</template>
<script>
  export default {
    async asyncData({store, params, error}) {
      let res = await
        api.get("/reporter/" + params.slug + "/").catch(e => {
          error({statusCode: 404, message: "Page not found"});
        });
      if (res) {
        return {reporter: res.data};
      }
    },
  }
</script>
