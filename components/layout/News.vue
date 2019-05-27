<i18n>
{
  "es": {
    "title": "Nuestra últimas noticias"
  },
  "en": {
    "title": "Our latest news",
  }
}
</i18n>
<template>
  <div id="home-blog" class="wrapper">
    <div id="home-blog-title" class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="section-heading">{{ $t('title') }}</h2>
        </div>
      </div>
    </div>
    <div id="home-blog-items" class="container">
      <!-- load RSS feeds via JS -->
      <template v-if="data.dataReady">
        <div class="row block-news">
          <div
            v-for="(feed, index) in data.feeds"
            :key="index"
            class="card bg-dark text-white"
          >
            <img :src="getImage(feed.content)" :alt="feed.title" />
            <div class="card-img-overlay">
              <a :href="feed.url">
                <h5 class="card-title">{{ feed.title }}</h5>
              </a>
              <small>{{ feed.pubDate | moment('DD/MM/YYYY') }}</small>
              <a :href="feed.link" class="btn btn-hidden stretched-link"></a>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
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
      </template>
    </div>
  </div>
</template>

<script>
import Parser from 'rss-parser'

const parser = new Parser()
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
const BLOG_URL = 'http://blog.enreda.coop/rss/'

export default {
  data() {
    return {
      data: {
        feeds: [],
        dataReady: false
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      parser.parseURL(CORS_PROXY + BLOG_URL).then(response => {
        this.data.feeds = response.items.slice(0, 3)
        this.data.dataReady = true
      })
    })
  },
  methods: {
    getImage(content) {
      return content.match(/(<img.*?>)/gi)[0].split('"')[1]
    }
  }
}
</script>
