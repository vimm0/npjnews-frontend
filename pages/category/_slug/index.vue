<template>
  <div>
    <div class="blog-area section-padding-0-80">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-8">
            <div class="blog-posts-area">
              <div class="single-blog-post featured-post mb-30" v-for="(article, index) in articles">
                <div class="post-thumb">
                  <nuxt-link :to="{name: 'article-slug-id', params: {slug: article.date_url, id: article.id}}"><img
                    :src="`img/bg-img/${25+index}.jpg`" alt=""></nuxt-link>
                </div>
                <div class="post-data">
                  <nuxt-link :to="{name: 'category-slug', params: {slug: cat.slug}}" class="post-catagory"
                             v-for="cat in article.category" :key="cat.slug">{{cat.title}}
                  </nuxt-link>
                  <nuxt-link :to="{name: 'article-slug-id', params: {slug: article.date_url, id: article.id}}"
                             class="post-title">
                    <h6>{{ article.title }}</h6>
                  </nuxt-link>
                  <div class="post-meta">
                    <p class="post-author">By
                      <nuxt-link :to="{name: 'reporter-slug', params: {slug: article.reporter.slug}}">
                        {{article.reporter.name}}
                      </nuxt-link>
                    </p>
                    <p class="post-excerp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu metus sit
                      amet
                      odio sodales placerat. Sed varius leo ac leo fermentum, eu cursus nunc maximus. Integer
                      convallis
                      nisi nibh, et ornare neque ullamcorper ac. Nam id congue lectus, a venenatis massa. Maecenas
                      justo
                      libero, vulputate vel nunc id, blandit feugiat sem. </p>
                    <!-- Post Like & Post Comment -->
                    <div class="d-flex align-items-center">
                      <a href="#" class="post-like"><img src="img/core-img/like.png" alt=""> <span>392</span></a>
                      <a href="#" class="post-comment"><img src="img/core-img/chat.png" alt=""> <span>10</span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <nav aria-label="Page navigation example">
              <ul class="pagination mt-50">
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">4</a></li>
                <li class="page-item"><a class="page-link" href="#">5</a></li>
                <li class="page-item"><a class="page-link" href="#">...</a></li>
                <li class="page-item"><a class="page-link" href="#">10</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    async asyncData({store, params, error}) {
      let d = await api.get("article/?category__slug=" + params.slug);
      let res = await
        api.get("/category/" + params.slug + "/").catch(e => {
          error({statusCode: 404, message: "Page not found"});
        });
      if (res) {
        return {category: res.data, articles: d.data};
      }
    },
  }
</script>
