<i18n>
{
  "es": {
    "title": "Menú",
    "cooperative": "Cooperativa",
    "projects": "Proyectos",
    "blog": "Blog",
    "contact": "Contacto",
    "services": {
        "services": "Servicios",
        "service_1": "Participación Digital",
        "service_2": "Participación Ciudadana",
        "service_3": "Diseño y Desarrollo de Productos",
        "service_4": "Analítica - Big Data",
        "service_5": "Transparencia",
        "service_6": "Edusi"
    }
  },
  "en": {
    "title": "Menu",
    "cooperative": "Cooperative",
    "projects": "Projects",
    "blog": "Blog",
    "contact": "Contact",
    "services": {
        "services": "Services",
        "service_1": "Digital Participation",
        "service_2": "Citizen Participation",
        "service_3": "Design and Development of Products",
        "service_4": "Analytic - Big Data",
        "service_5": "Transparency"
    }
  }
}
</i18n>
<template>
  <div>
    <h4>{{ $t('title') }}</h4>
    <ul class="nav-list pull-left list-unstyled">
      <li>
        <nuxt-link :to="localePath({ name: 'cooperative' })">{{
          $t('cooperative')
        }}</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath({ name: 'projects' })">{{
          $t('projects')
        }}</nuxt-link>
      </li>
      <li>
        <a v-b-toggle.services-list>
          {{ $t('services.services') }}
          <font-awesome-layers class="fa-1x services-footer">
            <font-awesome-icon :icon="['fas', 'sort-down']" class="black" />
          </font-awesome-layers>
        </a>
        <b-collapse id="services-list">
          <ul class="list-unstyled services-inner">
            <li>
              <nuxt-link
                :to="localePath({ name: 'services-participaciondigital' })"
                >{{ $t('services.service_1') }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                :to="localePath({ name: 'services-participacionciudadana' })"
                >{{ $t('services.service_2') }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                :to="localePath({ name: 'services-disenodesarrolloproducto' })"
                >{{ $t('services.service_3') }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                :to="localePath({ name: 'services-analitica-bigdata' })"
                >{{ $t('services.service_4') }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                :to="
                  localePath({
                    name: 'services-transparencia'
                  })
                "
                >{{ $t('services.service_5') }}
              </nuxt-link>
            </li>
          </ul>
        </b-collapse>
      </li>
      <li>
        <a
          href="https://blog.enreda.coop/"
          target="_blank"
          rel="noopener noreferrer"
          >{{ $t('blog') }}
          <font-awesome-icon
            :icon="['fas', 'external-link-alt']"
            transform="shrink-6"
            class="blog-icon"
          />
        </a>
      </li>
      <li>
        <nuxt-link :to="localePath({ name: 'contact' })">{{
          $t('contact')
        }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>
