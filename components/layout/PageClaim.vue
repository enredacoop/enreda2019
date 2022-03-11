<template>
  <div id="page-claim" :class="'wrapper ' + background">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12 text-center">
          <div class="claim wow fadeInLeft">
            <h1>{{ title }}</h1>
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

<style lang="less" scoped>
.urbandata {
  background-image: url('~@~@/assets/images/bg_urbandata.jpg') !important;
  background-position: bottom center !important;
}
</style>
