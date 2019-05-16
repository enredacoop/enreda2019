<template>
  <div id="home-claim" class="wrapper">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12 text-center">
          <div class="claim wow fadeInLeft">
            <h2>{{ data.claim }}</h2>
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
        claim: 'Tecnología para la Transformación Social'
      }
    }
  }
}
</script>
