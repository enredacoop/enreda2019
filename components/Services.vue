<template>
  <div class="container ptb-120">
    <div class="card-deck">
      <div class="card">
        <div class="card-icon">
          <font-awesome-icon
            :icon="['fas', 'mobile-alt']"
            transform="shrink-6"
            class="black"
          />
        </div>
        <div class="card-body">
          <h5 class="card-title text-center">Participación Digital</h5>
          <nuxt-link
            class="btn btn-hidden stretched-link"
            :to="
              localePath({
                name: 'services-slug',
                params: { slug: 'participaciondigital' }
              })
            "
          ></nuxt-link>
        </div>
      </div>
      <div class="card">
        <div class="card-icon">
          <font-awesome-icon
            :icon="['fas', 'hands-helping']"
            transform="shrink-6"
            class="black"
          />
        </div>
        <div class="card-body">
          <h5 class="card-title text-center">Participación Ciudadana</h5>
          <nuxt-link
            class="btn btn-hidden stretched-link"
            :to="
              localePath({
                name: 'services-slug',
                params: { slug: 'participacionciudadana' }
              })
            "
          ></nuxt-link>
        </div>
      </div>
      <div class="card">
        <div class="card-icon">
          <font-awesome-icon
            :icon="['fas', 'code']"
            transform="shrink-6"
            class="black"
          />
        </div>
        <div class="card-body">
          <h5 class="card-title text-center">
            Diseño y desarrollo de productos
          </h5>
          <nuxt-link
            class="btn btn-hidden stretched-link"
            :to="
              localePath({
                name: 'services-slug',
                params: { slug: 'disenodesarrolloproducto' }
              })
            "
          ></nuxt-link>
        </div>
      </div>
      <div class="card">
        <div class="card-icon">
          <font-awesome-icon
            :icon="['fas', 'chart-line']"
            transform="shrink-6"
            class="black"
          />
        </div>
        <div class="card-body">
          <h5 class="card-title text-center">Analítica - Big data</h5>
          <a href="#" class="btn btn-hidden stretched-link"></a>
        </div>
      </div>
      <div class="card">
        <div class="card-icon">
          <font-awesome-icon
            :icon="['fas', 'door-open']"
            transform="shrink-6"
            class="black"
          />
        </div>
        <div class="card-body">
          <h5 class="card-title text-center">Transparencia</h5>
          <nuxt-link
            class="btn btn-hidden stretched-link"
            :to="
              localePath({
                name: 'services-slug',
                params: { slug: 'transparencia' }
              })
            "
          ></nuxt-link>
        </div>
      </div>
      <div class="card">
        <div class="card-image text-center">
          <img
            :src="require('~/assets/images/services/edusi.png')"
            class="edusi"
          />
        </div>
        <div class="card-body">
          <h5 class="card-title text-center">edusi</h5>
          <a
            href="http://edusi.eu/"
            target="_blank"
            class="btn btn-hidden stretched-link"
          ></a>
        </div>
      </div>
      <div class="card">
        <div class="card-icon">
          <font-awesome-icon
            :icon="['fas', 'phone']"
            transform="shrink-6"
            class="black"
          />
        </div>
        <div class="card-body">
          <h5 class="card-title text-center">Contáctanos</h5>
          <nuxt-link
            :to="localePath('contact')"
            class="btn btn-hidden stretched-link"
          ></nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
