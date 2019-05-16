<template>
  <div id="home-blog" class="wrapper">
    <div id="home-blog-title" class="container wow pulse">
      <div class="row">
        <div class="col-12 text-center">
          <h2>{{ data.newstitle }}</h2>
        </div>
      </div>
    </div>
    <div id="home-blog-items" class="container wow pulse">
      <!-- load RSS feeds via JS -->
      <div id="loading-blog-items" class="row">
        <div class="col-12">
          <div class="row block-news loading">
            <div class="card">
              <div class="card-img-overlay">
                <h5 class="card-title"></h5>
                <small></small>
              </div>
            </div>
            <div class="card">
              <div class="card-img-overlay">
                <h5 class="card-title"></h5>
                <small></small>
              </div>
            </div>
            <div class="card">
              <div class="card-img-overlay">
                <h5 class="card-title"></h5>
                <small></small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        newstitle: 'Nuestras últimas noticias'
      }
    }
  }
}
</script>
