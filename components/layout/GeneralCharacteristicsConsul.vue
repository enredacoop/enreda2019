<i18n>
{
  "es": {
    "title-one": "libre y adaptable",
    "square-one": "Al ser una plataforma de software libre, cualquier entidad o administración puede modificarlo y utilizarlo libremente, adaptándolo a sus objetivos y necesidades." ,
    "title-two": "seguro",
    "square-two": "CONSUL cuenta con un sistema de registro que garantiza la privacidad y la neutralidad de la participación. Además puede integrarse con sistemas de padrón o censo existentes." ,
    "title-three": "participación digital y presencial",
    "square-three": "CONSUL cuenta con distintos sistemas (urnas, hojas de firmas, gestores , presidentes de mesa) para dar soporte a procesos y votaciones que se desarrollen paralelamente de forma digital y presencial.",
    "title-four": "participación individual y colectiva",
    "square-four": "CONSUL permite tanto la creación de usuarios individuales cómo de organizaciones, teniendo cada tipo de usuario sistemas de verificación y permisos diferenciados." ,
    "title-five": "zonificación y geolocalización",
    "square-five": "Todas las propuestas enviadas pueden geolocalizarse en mapas totalmente configurables para personalizar las diferentes zonas del territorio (distritos, barrios, provincias...)",
    "title-six": "alineado con los ods de la agenda 2030",
    "square-six": "Todas las propuestas realizadas por la ciudadanía o los procesos impulsados por la institución puedan alinearse con alguno de los 17 ODS, sus 169 metas o incluso con metas localizadas creadas por la propia entidad."
  },
  "en": {
    "title-one": "free and adaptable",
    "square-one": "CONSUL is a free software platform that is the reason any entity or administration can modify and use it freely, adapting it to their objectives and needs." ,
    "title-two": "Reliable",
    "square-two": "CONSUL has a registration system that guarantees privacy and neutrality of participation. CONSUL can integrate with existing census or census systems." ,
    "title-three": "online and face-to-face participation",
    "square-three": "CONSUL has different systems (ballot boxes, signature sheets, managers, table presidents) to support processes and voting development in parallel digitally and in person.",
    "title-four": "individual / collective participation",
    "square-four": "CONSUL allows both the creation of individual users and organizations, each type of user having different verification and permissions systems." ,
    "title-five": "zoning and geolocation",
    "square-five": "All submitted proposals can be geolocated on fully configurable maps to customize the different areas of the territory (districts, neighborhoods, provinces).",
    "title-six": "aligned with the sdgs of the 2030 agenda",
    "square-six": "All proposals made by the people or the processes promoted by the entity can be aligned with any of the 17 SDGs, its 169 goals, or even with localized goals created by the entity itself."
  }
}
</i18n>
<template>
  <div id="section-size-gen-charact" class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
        <div id="first-square" class="row">
          <div class="col-md-2">
            <font-awesome-icon
              :icon="['fas', 'draw-polygon']"
              class="icon-gen-charact"
            />
          </div>
          <div class="col-md-10">
            <h3 class="title-gen-charact">{{ $t('title-one') }}</h3>
            <p class="separator-gen-charact"></p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-10">
            <p class="text-gen-charact">
              {{ $t('square-one') }}
            </p>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
        <div id="second-square" class="row">
          <div class="col-md-2">
            <font-awesome-icon
              :icon="['fas', 'user-lock']"
              class="icon-gen-charact"
            />
          </div>
          <div class="col-md-10">
            <h3 class="title-gen-charact">{{ $t('title-two') }}</h3>
            <p class="separator-gen-charact"></p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-10">
            <p class="text-gen-charact">
              {{ $t('square-two') }}
            </p>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
        <div id="thrid-square" class="row">
          <div class="col-md-2">
            <font-awesome-icon
              :icon="['fas', 'network-wired']"
              class="icon-gen-charact"
            />
          </div>
          <div class="col-md-10">
            <h3 class="title-gen-charact">
              {{ $t('title-three') }}
            </h3>
            <p class="separator-gen-charact"></p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-10">
            <p class="text-gen-charact">
              {{ $t('square-three') }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
        <div id="fourth-square" class="row">
          <div class="col-md-2">
            <font-awesome-icon
              :icon="['fas', 'users-cog']"
              class="icon-gen-charact"
            />
          </div>
          <div class="col-md-10">
            <h3 class="title-gen-charact">
              {{ $t('title-four') }}
            </h3>
            <p class="separator-gen-charact"></p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-10">
            <p class="text-gen-charact">
              {{ $t('square-four') }}
            </p>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
        <div id="fifth-square" class="row">
          <div class="col-md-2">
            <font-awesome-icon
              :icon="['fas', 'globe']"
              class="icon-gen-charact"
            />
          </div>
          <div class="col-md-10">
            <h3 class="title-gen-charact">
              {{ $t('title-five') }}
            </h3>
            <p class="separator-gen-charact"></p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-10">
            <p class="text-gen-charact">
              {{ $t('square-five') }}
            </p>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
        <div id="sixth-square" class="row">
          <div class="col-md-2">
            <font-awesome-icon
              :icon="['fas', 'calendar-check']"
              class="icon-gen-charact"
            />
          </div>
          <div class="col-md-10">
            <h3 class="title-gen-charact">
              {{ $t('title-six') }}
            </h3>
            <p class="separator-gen-charact"></p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-10">
            <p class="text-gen-charact">
              {{ $t('square-six') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
