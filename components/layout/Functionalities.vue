<i18n>
{
  "es": {
    "circle-one": "Propuestas Ciudadanas",
    "circle-two": "Votaciones",
    "circle-three": "Legislación Colaborativa",
    "circle-four": "Presupuestos Participativos",
    "circle-five": "Procesos Avanzados",
    "circle-six": "Debates"
    
  },
  "en": {
    "circle-one": "Citizen Proposals",
    "circle-two": "Voting",
    "circle-three": "Cooperative Legislation",
    "circle-four": "Participatory budgeting",
    "circle-five": "Advanced Processes",
    "circle-six": "Debates"
    
  }
}
</i18n>
<template>
  <div class="process">
    <div class="container-fluid">
      <div class="row padding">
        <div class="col-md-1 content-icon empty"></div>
        <div class="col-md-1 content-icon">
          <font-awesome-icon :icon="['fas', 'quote-right']" class="icon" />
        </div>
        <div class="col-md-2 content-circle">
          <div class="circle">
            <p class="text-circle circle-one-three-four-five">
              {{ $t('circle-one') }}
            </p>
          </div>
        </div>
        <div class="col-md-1 content-icon">
          <font-awesome-icon :icon="['fas', 'lightbulb']" class="icon" />
        </div>
        <div class="col-md-2 content-circle">
          <div class="circle">
            <p id="circle-two" class="text-circle center-circle-two">
              {{ $t('circle-two') }}
            </p>
          </div>
        </div>
        <div class="col-md-1 content-icon">
          <font-awesome-icon :icon="['fas', 'hand-pointer']" class="icon" />
        </div>
        <div class="col-md-2 content-circle">
          <div class="circle">
            <p class="text-circle circle-one-three-four-five">
              {{ $t('circle-three') }}
            </p>
          </div>
        </div>
        <div class="col-md-1 content-icon">
          <font-awesome-icon :icon="['fas', 'download']" class="icon" />
        </div>
        <div class="col-md-1 content-icon"></div>
      </div>
      <div class="row padding">
        <div class="col-md-1 content-icon empty"></div>
        <div class="col-md-1 content-icon">
          <font-awesome-icon
            id="middle-one"
            :icon="['fas', 'search']"
            class="middle-icon"
          />
        </div>
        <div class="col-md-2 space"></div>
        <div class="col-md-1 content-icon">
          <font-awesome-icon
            id="middle-two"
            :icon="['fas', 'users']"
            class="middle-icon"
          />
        </div>
        <div class="col-md-2"></div>
        <div class="col-md-1 content-icon">
          <font-awesome-icon
            id="middle-three"
            :icon="['fas', 'file-alt']"
            class="middle-icon"
          />
        </div>
        <div class="col-md-2"></div>
        <div class="col-md-1 content-icon">
          <font-awesome-icon
            id="middle-four"
            :icon="['fas', 'handshake']"
            class="middle-icon"
          />
        </div>
        <div class="col-md-1 content-icon"></div>
      </div>
      <div class="row padding">
        <div class="col-md-1 content-icon empty"></div>
        <div class="col-md-1 content-icon">
          <font-awesome-icon :icon="['fas', 'coins']" class="last-icon icon" />
        </div>
        <div class="col-md-2 content-circle">
          <div class="circle">
            <p class="text-circle circle-one-three-four-five">
              {{ $t('circle-four') }}
            </p>
            <div>
              <font-awesome-icon
                :icon="['fas', 'tools']"
                class="icon-responsive"
              />
            </div>
          </div>
        </div>
        <div class="col-md-1 content-icon">
          <font-awesome-icon :icon="['fas', 'tools']" class="last-icon icon" />
        </div>
        <div class="col-md-2 content-circle">
          <div class="circle">
            <p class="text-circle circle-one-three-four-five">
              {{ $t('circle-five') }}
            </p>
            <div>
              <font-awesome-icon
                :icon="['fas', 'tools']"
                class="icon-responsive"
              />
            </div>
          </div>
        </div>
        <div class="col-md-1 content-icon">
          <font-awesome-icon
            :icon="['fas', 'cogs']"
            class="last-icon icon"
            style="margin-left:15px;"
          />
        </div>
        <div class="col-md-2 content-circle">
          <div class="circle">
            <p id="circle-six" class="text-circle">
              {{ $t('circle-six') }}
            </p>
          </div>
        </div>
        <div class="col-md-1 content-icon">
          <font-awesome-icon
            :icon="['fas', 'comments']"
            class="last-icon icon"
          />
        </div>
        <div class="col-md-1 content-icon"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
