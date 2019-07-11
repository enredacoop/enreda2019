export const state = () => ({
  items: [
    {
      title: 'Consul - El Puerto de Santa María',
      logo: 'logo-consul-elpuerto.png',
      class: 'aytoelpuerto',
      url: 'consul-puerto-santa-maria',
      category: ['consul', 'participaciondigital'],
      favourite: false
    },
    {
      title: 'Consul - Oviedo',
      logo: 'logo-ayto-oviedo.png',
      class: 'decideoviedo',
      url: 'consul-oviedo',
      category: ['consul', 'participacion', 'participaciondigital'],
      favourite: true
    },
    {
      title: 'Consul - Arcos de la Frontera',
      logo: 'logo-ayto-arcos.png',
      class: 'decidearcos',
      url: 'consul-arcos-frontera',
      category: ['consul', 'participaciondigital'],
      favourite: false
    },
    {
      title: 'Consul - Santiago de Compostela',
      logo: 'logo-ayto-santiago.png',
      class: 'decidesantiago',
      url: 'consul-santiago',
      category: ['consul', 'participaciondigital'],
      favourite: false
    },
    {
      title: 'decide.cadiz.es',
      logo: '',
      class: 'decidecadiz',
      url: 'consul-cadiz',
      category: ['consul', 'participaciondigital'],
      favourite: false
    },
    {
      title: 'TIPI Ciudadano',
      logo: 'logo-tipi.png',
      class: 'tipi',
      url: 'tipi-ciudadano',
      category: [
        'transparencia',
        'analisisdatos',
        'desarrolloproducto',
        'desarrollotecnologico',
        'participaciondigital',
        'participacion',
        'economiasocial',
        'innovacionsocial'
      ],
      favourite: true
    },
    {
      title: 'LaCentral.coop',
      logo: 'logo-lacentralcoop.png',
      class: 'lacentralcoop',
      url: 'lacentralcoop',
      category: [
        'desarrolloproducto',
        'economiasocial',
        'desarrollotecnologico',
        'disenodesarrolloproducto'
      ],
      favourite: false
    },
    {
      title: 'Poletika',
      logo: 'logo-poletika.png',
      class: 'poletika',
      url: 'poletika',
      category: [
        'participaciondigital',
        'desarrolloproducto',
        'desarrollotecnologico',
        'disenodesarrolloproducto'
      ],
      favourite: false
    },
    {
      title: 'Social to Crowd',
      logo: 'logo-stc.png',
      class: 'socialtocrowd',
      url: 'socialtocrowd',
      category: [
        'innovacionsocial',
        'desarrolloproducto',
        'desarrollotecnologico',
        'disenodesarrolloproducto'
      ],
      favourite: false
    },
    {
      title: 'Transparencia Presupuestaria',
      logo: 'logo-tp.png',
      class: 'transparenciapresupuestaria',
      url: 'transparencia-presupuestaria',
      category: ['desarrolloproducto', 'transparencia'],
      favourite: false
    },
    {
      title: 'CLIC Cervantes',
      logo: 'logo-cervantes.png',
      class: 'clic',
      url: 'clic-cervantes',
      category: [
        'desarrollotecnologico',
        'desarrolloproducto',
        'disenodesarrolloproducto'
      ],
      favourite: false
    },
    {
      title: 'Conil Hospeda',
      logo: 'logo-conilhospeda.svg',
      class: 'conilhospeda',
      url: 'conil-hospeda',
      category: [
        'desarrolloproducto',
        'economiasocial',
        'desarrollotecnologico',
        'disenodesarrolloproducto'
      ],
      favourite: false
    },
    {
      title: 'En la Órbita',
      logo: 'logo-elo.png',
      class: 'enlaorbita',
      url: 'enlaorbita',
      category: [
        'desarrolloproducto',
        'desarrollotecnologico',
        'economiasocial',
        'disenodesarrolloproducto'
      ],
      favourite: false
    },
    /*
    {
      title: 'ICAS',
      logo: 'logo-icas.png',
      class: 'icas',
      url: 'icas',
      category: ['desarrollotecnologico'],
      favourite: false
    }, */
    {
      title: 'Festival de Sevilla de Cine',
      logo: 'logo-festivalcine.png',
      class: 'festivalcine',
      url: 'festivalcine',
      category: ['desarrollotecnologico'],
      favourite: false
    },
    {
      title: 'Foro Andaluz de Gobiernos Locales y Procesos Participativos',
      logo: 'logo-foro-participacion.png',
      class: 'foroparticipacion',
      url: 'foro-participacion',
      category: [
        'reglamento',
        'participacion',
        'innovacionsocial',
        'participacionciudadana'
      ],
      favourite: false
    },
    {
      title: 'Reglamento de Participación de la Diputación de Cádiz',
      logo: 'logo-diputacion-cadiz.png',
      class: 'dipuparticipacioncadiz',
      url: 'dipu-participacion-cadiz',
      category: ['participacion', 'reglamento', 'participacionciudadana'],
      favourite: false
    },
    {
      title: 'Reglamento de Participación del Ayuntamiento de Cádiz',
      logo: '',
      class: 'aytoparticipacioncadiz',
      url: 'ayto-participacion-cadiz',
      category: ['participacion', 'reglamento', 'participacionciudadana'],
      favourite: false
    },
    {
      title: 'Formación sobre la Ley Andaluza de Participación',
      logo: '',
      class: 'formacionleyparticipacion',
      url: 'formacion-ley-participacion',
      category: ['reglamento', 'participacion', 'participacionciudadana'],
      favourite: false
    },
    {
      title: 'Sistema Público de Participación Digital de Andalucía',
      logo: '',
      class: 'sistemaparticipacion',
      url: 'sistema-participacion',
      category: [
        'consul',
        'participacion',
        'participaciondigital',
        'desarrolloproducto',
        'desarrollotecnologico'
      ],
      favourite: true
    },
    {
      title: 'Participación para la planificación urbanística',
      logo: 'logo-ayto-rota.png',
      class: 'ciudadamable',
      url: 'ciudad-amable',
      category: ['participacion', 'participacionciudadana'],
      favourite: false
    },
    {
      title: 'Presupuesto Participativos de Marbella',
      logo: 'logo_marbella.png',
      class: 'presupuestomarbella',
      url: 'presupuesto-marbella',
      category: [
        'presuspuestoparticipativo',
        'participacion',
        'participacionciudadana'
      ],
      favourite: false
    },
    {
      title: 'Presupuesto Participativos de Mijas',
      logo: 'logo-ayto-mijas.png',
      class: 'presupuestomijas',
      url: 'presupuesto-mijas',
      category: [
        'participacion',
        'presuspuestoparticipativo',
        'participacionciudadana'
      ],
      favourite: false
    },
    {
      title: 'Plan de intervención',
      logo: 'logo-ayto-coria.png',
      class: 'planintervencion',
      url: 'plan-intervencion',
      category: ['participacion', 'innovacionsocial', 'participacionciudadana'],
      favourite: false
    },
    {
      title: 'Presupuesto Participativo de Tarifa',
      logo: 'logo-ayto-tarifa.png',
      class: 'presupuestotarifa',
      url: 'presupuesto-tarifa',
      category: [
        'presuspuestoparticipativo',
        'participacion',
        'participacionciudadana'
      ],
      favourite: false
    },
    {
      title: 'Protocolo Andalucía Emprende',
      logo: 'logo-andalucia-emprende.svg',
      class: 'protocoloae',
      url: 'protocolo-ae',
      category: [
        'desarrolloproducto',
        'innovacionsocial',
        'disenodesarrolloproducto'
      ],
      favourite: true
    },
    {
      title: 'Mantenimiento Aplicaciones Institucionales ULL',
      logo: 'logo-universidad-laguna.png',
      class: 'maiull',
      url: 'mantenimiento-apps-laguna',
      category: [
        'desarrolloproducto',
        'desarrollotecnologico',
        'disenodesarrolloproducto'
      ],
      favourite: false
    }
  ]
})
