<i18n>
{
  "es": {
    "accordion-one-title": "implantación",
    "accordion-one-text":"Creamos una versión de CONSUL, a instalar en tus propios servidores o en los nuestros, configurado según tus necesidades, y adaptado gráficamente a tu organización.",
    "accordion-two-title": "soporte",
    "accordion-two-text":"Te damos soporte, tanto técnico como metodológico, para qué puedas usar CONSUL con total garantía.",
    "accordion-three-title": "formación y capacitación",
    "accordion-three-text":"Podemos ofrecerte diferentes formatos de formación y capacitación sobre el uso y aprovechamiento de CONSUL tanto a personal técnico como político.",
    "accordion-four-title": "desarrollo a medida",
    "accordion-four-text":"Si tu organización necesita alguna funcionalidad no contemplada en CONSUL, podemos realizar un desarrollo a medida para que tu plataforma se adapte exactamente a lo que necesitas",
    "accordion-five-title": "análisis de datos",
    "accordion-five-text":"Podemos explotar las estadísticas sobre cómo la gente usa tu CONSUL para ayudarte a mejorar el diseño de los procesos y ampliar la participación en los mismos.",
    "accordion-six-title": "diseño de procesos",
    "accordion-six-text":"Diseño metodológico e implementación de planes de participación, adaptados a CONSUL. Así como acompañamiento y dinamización de los mismos. El equipo de Enreda cuenta con experiencia en todo tipo procesos participativos: juvenil, urbanístico, intervención social...",
    "accordion-seven-title": "presupuestos participativos",
    "accordion-seven-text":"Ponemos las metodologías participativas al servicio de la democracia presupuestaria. Diseñamos todas las fases del proceso, asesoramos sobre los distintos modelos existentes para adaptarlos a las necesidades.",
    "accordion-eight-title": "reglamentos de participación",
    "accordion-eight-text":"Consultoría para la redacción de reglamentos o su adaptación a la diferentes legislaciones para que los procesos pueden aprovechar todas las funcionalidades de CONSUL con todas las garantías legales."
  },
  "en": {
    "accordion-one-title": "implementation",
    "accordion-one-text":"",
    "accordion-two-title": "support",
    "accordion-two-text":"",
    "accordion-three-title": "training and qualification",
    "accordion-three-text":"",
    "accordion-four-title": "custom development",
    "accordion-four-text":"",
    "accordion-five-title": "data analysis",
    "accordion-five-text":"",
    "accordion-six-title": "process design",
    "accordion-six-text":"",
    "accordion-seven-title": "participatory budgeting",
    "accordion-seven-text":"",
    "accordion-eight-title": "participation regulations",
    "accordion-eight-text":""
  }
}
</i18n>
<template>
  <!-- <div class="accordion" role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button v-b-toggle.accordion-1 block variant="info">
          Accordion 1
        </b-button>
      </b-card-header>
      <b-collapse id="accordion-1" accordion="my-accordion" role="tablist">
        <b-card-body>
          <b-card-text>
            I start opened because <code>visible</code> is
            <code>false</code>
          </b-card-text>
          <b-card-text>texto 1</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button v-b-toggle.accordion-2 block variant="info">
          Accordion 2
        </b-button>
      </b-card-header>
      <b-collapse
        id="accordion-2"
        accordion="my-accordion"
        role="tablist"
        class="panel-group"
        aria-multiselectable="true"
      >
        <b-card-body>
          <b-card-text>texto 2</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div> -->
  <div class="section-consul-services">
    <div class="row">
      <div class="col-xs-12">
        <div class="servicios-desplegable">
          <div
            id="accordion"
            class="panel-group"
            role="tablist"
            aria-multiselectable="true"
          >
            <div id="panel-one" class="panel panel-default">
              <b-card-header
                header-tag="header"
                class="p-1 panel-heading title-section-consul-services"
                role="tab"
              >
                <h3 class="panel-title">
                  <a
                    class="collapsed nombrefake"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse1st"
                    aria-expanded="false"
                    aria-controls="collapse1st"
                  >
                    implantación
                  </a>
                </h3>
              </b-card-header>
              <div
                id="collapse1st"
                class="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingOne"
              >
                <div class="panel-body" style="border-top-width: 0px;">
                  <p>
                    Creamos una versión de <strong>CONSUL</strong>, a instalar
                    en tus propios servidores o en los nuestros, configurado
                    según tus necesidades, y adaptado gráficamente a tu
                    organización.
                  </p>
                </div>
              </div>
            </div>

            <div class="space-acc"></div>
            <div id="panel-two" class="panel panel-default">
              <div
                id="headingTwo"
                class="panel-heading title-section-consul-services"
                role="tab"
              >
                <h3 class="panel-title">
                  <a
                    class="collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse2nd"
                    aria-expanded="false"
                    aria-controls="collapse2nd"
                  >
                    soporte
                  </a>
                </h3>
              </div>
              <div
                id="collapse2nd"
                class="panel-collapse collapse custom"
                role="tabpanel"
                aria-labelledby="headingTwo"
              >
                <div class="panel-body" style="border-top-width: 0px;">
                  <p>
                    Te damos soporte, tanto técnico como metodológico, para qué
                    puedas usar <strong>CONSUL</strong> con total garantía.
                  </p>
                </div>
              </div>
            </div>
            <div class="space-acc"></div>
            <div id="panel-three" class="panel panel-default">
              <div
                id="headingThree"
                class="panel-heading title-section-consul-services"
                role="tab"
              >
                <h3 class="panel-title">
                  <a
                    class="collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse3rd"
                    aria-expanded="false"
                    aria-controls="collapse3rd"
                  >
                    formación y capacitación
                  </a>
                </h3>
              </div>
              <div
                id="collapse3rd"
                class="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingThree"
              >
                <div class="panel-body" style="border-top-width: 0px;">
                  <p>
                    Podemos ofrecerte diferentes formatos de formación y
                    capacitación sobre el uso y aprovechamiento de CONSUL tanto
                    a personal técnico como político.
                  </p>
                </div>
              </div>
            </div>
            <div class="space-acc"></div>
            <div id="panel-four" class="panel panel-default">
              <div
                id="headingFour"
                class="panel-heading title-section-consul-services"
                role="tab"
              >
                <h3 class="panel-title">
                  <a
                    class="collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse4th"
                    aria-expanded="false"
                    aria-controls="collapse4th"
                  >
                    desarrollo a medida
                  </a>
                </h3>
              </div>
              <div
                id="collapse4th"
                class="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingFour"
              >
                <div class="panel-body" style="border-top-width: 0px;">
                  <p>
                    Si tu organización necesita alguna funcionalidad no
                    contemplada en CONSUL, podemos realizar un desarrollo a
                    medida para que tu plataforma se adapte exactamente a lo que
                    necesitas
                  </p>
                </div>
              </div>
            </div>
            <div class="space-acc"></div>
            <div id="panel-five" class="panel panel-default">
              <div
                id="headingFive"
                class="panel-heading title-section-consul-services"
                role="tab"
              >
                <h3 class="panel-title">
                  <a
                    class="collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse5th"
                    aria-expanded="false"
                    aria-controls="collapse5th"
                  >
                    análisis de datos
                  </a>
                </h3>
              </div>
              <div
                id="collapse5th"
                class="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingFive"
              >
                <div class="panel-body" style="border-top-width: 0px;">
                  <p>
                    Podemos explotar las estadísticas sobre cómo la gente usa tu
                    CONSUL para ayudarte a mejorar el diseño de los procesos y
                    ampliar la participación en los mismos.
                  </p>
                </div>
              </div>
            </div>
            <div class="space-acc"></div>
            <div id="panel-six" class="panel panel-default">
              <div
                id="headingSix"
                class="panel-heading title-section-consul-services"
                role="tab"
              >
                <h3 class="panel-title">
                  <a
                    class="collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse6th"
                    aria-expanded="false"
                    aria-controls="collapse6th"
                  >
                    diseño de procesos
                  </a>
                </h3>
              </div>
              <div
                id="collapse6th"
                class="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingSix"
              >
                <div class="panel-body" style="border-top-width: 0px;">
                  <p>
                    Diseño metodológico e implementación de planes de
                    participación, adaptados a CONSUL. así como acompañamiento y
                    dinamización de los mismos. El equipo de Enreda cuenta con
                    experiencia en todo tipo procesos participativos: juvenil,
                    urbanístico, intervención social...
                  </p>
                </div>
              </div>
            </div>
            <div class="space-acc"></div>
            <div id="panel-seven" class="panel panel-default">
              <div
                id="headingSeven"
                class="panel-heading title-section-consul-services"
                role="tab"
              >
                <h3 class="panel-title">
                  <a
                    class="collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse7th"
                    aria-expanded="false"
                    aria-controls="collapse7th"
                  >
                    presupuestos participativos
                  </a>
                </h3>
              </div>
              <div
                id="collapse7th"
                class="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingSeven"
              >
                <div class="panel-body" style="border-top-width: 0px;">
                  <p>
                    Ponemos las metodologías participativas al servicio de la
                    democracia presupuestaria. Diseñamos todas las fases del
                    proceso, asesoramos sobre los distintos modelos existentes
                    para adaptarlos a las necesidades.
                  </p>
                </div>
              </div>
            </div>
            <div class="space-acc"></div>
            <div id="panel-eight" class="panel panel-default">
              <div
                id="headingEight"
                class="panel-heading title-section-consul-services"
                role="tab"
              >
                <h3 class="panel-title">
                  <a
                    class="collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse8th"
                    aria-expanded="false"
                    aria-controls="collapse8th"
                  >
                    reglamentos de participación
                  </a>
                </h3>
              </div>
              <div
                id="collapse8th"
                class="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingSeven"
              >
                <div class="panel-body" style="border-top-width: 0px;">
                  <p>
                    Consultoría para la redacción de reglamentos o su adaptación
                    a la diferentes legislaciones para que los procesos pueden
                    aprovechar todas las funcionalidades de CONSUL con todas las
                    garantías legales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
