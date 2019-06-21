<i18n>
{
  "es": {
    "title": "Política de seguridad de ENREDA SCA",
    "subtitle": "Aviso y condiciones legales.",
    "description": "En base al nuevo Reglamento de la UE 2016/679 sobre protección de datos les detallamos nuestra Política de Privacidad y Protección de Datos Personales;",
    "head1": "FINALIDAD",
    "description1": "Los datos facilitados a Enreda S.C.A. serán tratados solamente para informarles de alguna actividad en el ámbito de nuestra actividad o para el correcto funcionamiento de una relación de cliente/proveedor.",
    "head2": "COMO DISPONEMOS DE SUS DATOS",
    "description2": "Enreda dispone solamente de los datos que nos han facilitado voluntariamente los usuarios.",
    "head3": "QUIEN ES EL RESPONSABLE DE LOS DATOS",
    "description3": "El responsable de los datos que nos facilites es ENREDA SCA con domicilio en Avda República Argentina 25, 9º. 41011 Sevilla",
    "head4": "QUIEN TRATA SUS DATOS",
    "description4": "ENREDA SCA tiene asignada a una persona delegada de los datos que vela por el cumplimiento exhaustivo de la actual normativa de Protección de Datos y del citado RGPD. Puede contactar con la persona delegada en administracion@enreda.coop",
    "head5": "CUANTO TIEMPO SE GUARDAN LOS DATOS",
    "description5": "Los datos se mantendrán siempre que exista una relación comercial y siempre en el marco de dicha relación. De no existir relación comercial se mantendrán dichos dato en los plazos que marca la ley que actualmente es de 5 años pudiendo ejercitar en cualquier momento del plazo legal la modificación o eliminación.",
    "head6": "TRANSFERENCIAS DE DATOS FUERA DE LA UE",
    "description6": "Enreda no prevé hacer transferencias internacionales de datos a terceros países fuera de la UE",
    "head7": "DERECHOS ARCO",
    "description7": "ENREDA garantiza los Derechos de acceso, rectificación, cancelación y oposición a los datos por parte de los usuarios.",
  },
  "en": {
    "title": "Security policy of ENREDA SCA",
    "subtitle": "Notice and legal conditions.",
    "description": "We detail our Privacy Policy and Protection of Personal Data based on the new EU Regulation 2016/679 on data protection;",
    "head1": "PURPOSE",
    "description1": "The data provided to Enreda S.C.A. they will be treated only to inform them of any activity in the scope of our activity or for the correct functioning of a client / supplier relationship.",
    "head2": "HOW WE HAVE YOUR DATA",
    "description2": "Enreda has only the data voluntarily provided by users.",
    "head3": "WHO IS RESPONSIBLE FOR THE DATA",
    "description3": "The person responsible for the data you provide us is ENREDA SCA with address at Avda República Argentina 25, 9º 41011 Sevilla",
    "head4": "WHO TREATS YOUR DATA",
    "description4": "ENREDA SCA is assigned to a person delegated by the data that ensures the exhaustive compliance with the current Data Protection regulations and the aforementioned RGPD. You can contact the delegate at administracion@enreda.coop",
    "head5": "HOW LONG THE DATA IS SAVED",
    "description5": "The data will be maintained whenever there is a commercial relationship and always within the framework of said relationship. If there is no commercial relationship, these data will be kept within the terms established by the law that is currently 5 years, and may be modified or eliminated at any time during the legal term.",
    "head6": "DATA TRANSFERS OUTSIDE THE EU",
    "description6": "Enreda does not foresee making international data transfers to third countries outside the EU",
    "head7": "ARCO RIGHTS",
    "description7": "ENREDA guarantees the rights of access, rectification, cancellation and opposition to the data by users.",
  }
}
</i18n>
<template>
  <div class="legal-page">
    <PageClaim :title="$t('title')" background="bg_default" />
    <div class="wrapper-content">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xs-12 col-sm-12 col-md-6">
            <p class="lead">{{ $t('description') }}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="content-section-a">
              <h3 class="section-heading">{{ $t('head1') }}</h3>
              <p class="section-body">{{ $t('description1') }}</p>
            </div>
            <div class="content-section-a">
              <h3 class="section-heading">{{ $t('head2') }}</h3>
              <p class="section-body">{{ $t('description2') }}</p>
            </div>
            <div class="content-section-a">
              <h3 class="section-heading">{{ $t('head3') }}</h3>
              <p class="section-body">{{ $t('description3') }}</p>
            </div>
            <div class="content-section-a">
              <h3 class="section-heading">{{ $t('head4') }}</h3>
              <p class="section-body">{{ $t('description4') }}</p>
            </div>
            <div class="content-section-a">
              <h3 class="section-heading">{{ $t('head5') }}</h3>
              <p class="section-body">{{ $t('description5') }}</p>
            </div>
            <div class="content-section-a">
              <h3 class="section-heading">{{ $t('head6') }}</h3>
              <p class="section-body">{{ $t('description6') }}</p>
            </div>
            <div class="content-section-a">
              <h3 class="section-heading">{{ $t('head7') }}</h3>
              <p class="section-body">{{ $t('description7') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageClaim from '~/components/layout/PageClaim.vue'
export default {
  components: {
    PageClaim
  },
  head() {
    return {
      title: this.meta.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.meta.description
        },
        { hid: 'keywords', name: 'keywords', content: this.meta.keywords }
      ]
    }
  },
  computed: {
    meta() {
      return this.$store.state.meta.legal
    }
  }
}
</script>
