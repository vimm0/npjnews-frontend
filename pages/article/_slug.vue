<template>
  <p>{{ article }}</p>
</template>
<script>
  export default {
    async asyncData({store, params, error}) {
      let res = await
        api.get("/article/" + params.pk + "/").catch(e => {
          error({statusCode: 404, message: "Page not found"});
        });
      if (res) {
        return {article: res.data};
      }
    },
  }
</script>
