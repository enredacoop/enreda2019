<i18n>
{
  "es": {
    "where_are_title": "Dónde estamos",
  },
  "en": {
    "where_are_title": "Where we are",
  }
}
</i18n>

<template>
  <div>
    <section id="offices">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <h2 class="section-heading">{{ $t('where_are_title') }}</h2>
            <h3 class="section-subheading text-muted"></h3>
          </div>
        </div>
        <div class="row text-center justify-content-center mt-30">
          <div
            v-for="(place, index) in offices.places"
            :key="index"
            class="col-sm-12 col-md-3 col-lg-3"
          >
            <h3 class="city">{{ place.city }}</h3>
            <h5 class="officename">
              <a
                :href="place.officeurl"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ place.officename }}
              </a>
            </h5>
            <p v-if="place.address != ''" class="text-muted">
              {{ place.address }}
              <br />
              {{ place.zipcode }}, {{ place.city }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      offices: {
        places: [
          {
            city: 'Sevilla',
            address: '',
            zipcode: '',
            officename: '',
            officeurl: ''
          },
          {
            city: 'Málaga',
            address: '',
            zipcode: '',
            officename: '',
            officeurl: ''
          },
          {
            city: 'Madrid',
            address: '',
            zipcode: '',
            officename: '',
            officeurl: ''
          }
        ]
      }
    }
  }
}
</script>
