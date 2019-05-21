<template>
  <div id="page-claim" :class="'wrapper ' + background">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12 text-center">
          <div class="claim wow fadeInLeft">
            <h2>{{ title }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: 'ENREDA' },
    background: { type: String, default: '' }
  }
}
</script>
