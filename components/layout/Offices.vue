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
    <section id="offices" class="mt-60">
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
            <template v-if="place.othercontact != ''">
              <h5 class="officename">
                <a :href="'mailto:' + place.othercontact" target="_blank">{{
                  place.othercontact
                }}</a>
              </h5>
            </template>
            <h5 class="officename">
              <a :href="place.officeurl" target="_blank">{{
                place.officename
              }}</a>
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
            address: 'Avda. República Argentina 25 Planta 9',
            zipcode: '41011',
            officename: 'Espacio RES',
            officeurl: 'http://espaciores.org',
            othercontact: ''
          },
          {
            city: 'Málaga',
            address: 'Trinidad Grund 7, 1º derecha',
            zipcode: '29001',
            officename: 'DobleMitad',
            officeurl: 'https://www.doblemitad.com',
            othercontact: 'malaga@enreda.coop'
          },
          {
            city: 'Madrid',
            address: '',
            zipcode: '',
            officename: '',
            officeurl: '',
            othercontact: 'madrid@enreda.coop'
          }
        ]
      }
    }
  }
}
</script>
