<i18n>
{
  "es": {
    "title": "Mantente informada/o",
    "button": "Suscribirme",
    "placeholder": "Introduce tu correo..."
  },
  "en": {
    "title": "Stay up to date",
    "button": "Subscribe",
    "placeholder": "Enter your email..."
  }
}
</i18n>
<template>
  <div class="wrapper-newsletter bg-black">
    <div class="container">
      <div class="row">
        <div class="col-12 text-left">
          <h4 class="d-inline-block">{{ $t('title') }}</h4>
          <form
            id="mc-embedded-subscribe-form"
            action="//enreda.us3.list-manage.com/subscribe/post?u=279b072f7731d3c44289c5ffd&amp;id=f695e4a4d6"
            method="post"
            name="mc-embedded-subscribe-form"
            class="form-inline validate pull-right"
            target="_blank"
            rel="noopener noreferrer"
            novalidate
          >
            <div id="mc_embed_signup_scroll">
              <div id="mce-responses" class="clear">
                <div
                  id="mce-error-response"
                  class="response"
                  style="display:none"
                ></div>
                <div
                  id="mce-success-response"
                  class="response"
                  style="display:none"
                ></div>
              </div>
              <input
                id="mce-EMAIL"
                type="email"
                value
                name="EMAIL"
                :placeholder="$t('placeholder')"
                class="required email"
              />
              <input
                id="mc-embedded-subscribe"
                type="submit"
                :value="$t('button')"
                name="subscribe"
                class="button btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
