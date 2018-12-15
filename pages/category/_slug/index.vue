<template>
  <p>{{ category }}</p>
</template>
<script>
  export default {
    async asyncData({store, params, error}) {
      let res = await
        api.get("/category/" + params.slug + "/").catch(e => {
          error({statusCode: 404, message: "Page not found"});
        });
      if (res) {
        return {category: res.data};
      }
    },
  }
</script>
