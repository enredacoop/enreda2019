export const state = () => ({
  items: [
    {
      id: 'tipi-ciudadano',
      title: 'TIPI Ciudadano',
      class: 'tipi',
      subtitle: 'Transparencia, Información, Participación e Incidencia. EN',
      body: `
        <p>
          TIPI Ciudadano es una herramienta on line de transparencia, acceso a la información y rendición de cuentas focalizada en el seguimiento de la toda la actividad parlamentaria española relacionada con la pobreza, la justicia social y el desarrollo sostenible. 
        </p>
        <p>
          TIPI (acrónimo de transparencia, información, participación e incidencia) está diseñada para responder a las necesidades específicas de los usuarios, ya sean ciudadanos, periodistas, movimientos sociales o representantes políticos. Para ello:
          <ul>
            <li>
              Escanea toda la actividad política del Congreso de los Diputados y la clasifica automáticamente según su relación con alguna de las 21 áreas temáticas prioritarias para la pobreza, la justicia social y el desarrollo sostenible
            </li>
            <li>
              Clasifica la actividad parlamentaria a través de más de 3.000 palabras clave propuestas por especialistas y organizaciones expertas en cada una de las temáticas
            </li>
            <li>
              Dispone de un buscador con el que el usuario puede afinar su búsqueda en base a múltiples criterios (autor, fecha, tema, palabra clave, etc.)
            </li>
            <li>
              Ofrece un sistema personalizado de alertas que permite al usuario estar al día sobre las novedades políticas de sus temáticas de interés
            </li>
            <li>
              Permite el acceso y descarga libre de toda la información disponible
            </li>
          </ul>
        </p>
        <p>
          TIPI fue desarrollado por ENREDA para CIECODE (Centro de Investigación y Estudios sobre Coherencia y Desarrollo), una organización española especializada en el análisis de políticas públicas, en la coherencia de políticas para el desarrollo y en proyectos de transparencia, rendición de cuentas y participación ciudadana. La primera versión de TIPI (mayo 2014 - septiembre 2015) fue financiada por el Programa de Ciudadanía Activa de los EEA Grants y tuvo como socios a UNICEF-comité español, EAPN España, EAPN Castilla la Mancha y Fundación porCausa.      
        </p>
      `,
      description:
        'Proyecto que pretende fortalecer las capacidades de la sociedad civil, para incidir en los procesos de toma de decisión política y en la generación de un debate público informado sobre la pobreza y la justicia social en España.',
      logo: 'logo-tipi.png',
      name: 'TIPI Ciudadano',
      screenshot: 'screenshot-tipi.png',
      url: 'http://tipiciudadano.es',
      sourcecode: 'https://github.com/ciecode-madrid/',
      keys: [
        {
          key:
            'Poner en valor la política como la solución a los problemas de pobreza y desigualdad.'
        },
        {
          key:
            'Dotar a la ciudadanía de herramientas para poder exigir a los diputados que se avance en dar soluciones políticas a la pobreza y la exclusión social.'
        },
        {
          key:
            'Generar, a través del acceso a la información, un incentivo a las buenas prácticas políticas.'
        }
      ],
      metrics: [
        { metric: 'Iniciativas', value: '150k' },
        { metric: 'Eventos', value: '50' },
        { metric: 'ONGs', value: '300' }
      ],
      metricsinfo: 'Datos obtenidos en diciembre de 2015',
      technologies: [
        {
          technology: 'MeteorJS',
          url: 'https://www.meteor.com',
          logo: 'https://d14jjfgstdxsoz.cloudfront.net/assets/logo.svg'
        },
        {
          technology: 'MongoDB',
          url: 'https://www.mongodb.com',
          logo: '/assets/images/technologies/mongodb.png'
        },
        {
          technology: 'D3js',
          url: 'http://d3js.org',
          logo: 'https://raw.githubusercontent.com/d3/d3-logo/master/d3.png'
        },
        {
          technology: 'Python',
          url: 'https://www.python.org',
          logo: '/assets/images/technologies/python.png',
          class: 'white'
        },
        {
          technology: 'Redis',
          url: 'http://redis.io/',
          logo: 'https://redis.io/images/redis-white.png'
        },
        {
          technology: 'Scrapy',
          url: 'https://scrapy.org/',
          logo: 'https://scrapy.org/img/scrapylogo.png'
        },
        {
          technology: 'Luigi',
          url: 'https://github.com/spotify/luigi',
          logo:
            'https://raw.githubusercontent.com/spotify/luigi/master/doc/luigi.png',
          class: 'white'
        },
        {
          technology: 'HTML',
          url: 'https://www.w3.org/html/',
          logo: '/assets/images/technologies/html.png',
          class: ''
        },
        {
          technology: 'CSS',
          url: 'https://www.w3.org/Style/CSS/',
          logo: '/assets/images/technologies/css.png',
          class: ''
        },
        {
          technology: 'JavaScript',
          url: 'https://www.javascript.com/',
          logo: '/assets/images/technologies/js.png',
          class: ''
        }
      ],
      media: [
        {
          name: 'eldiario',
          class: 'eldiario',
          image: 'logo_eldiario.png',
          url:
            'http://www.eldiario.es/desigualdadblog/ciudadania_informada-poder-diputados-politica_vigilada-rendicion_de_cuentas_6_566653330.html'
        },
        {
          name: 'publico',
          class: 'publico',
          image: 'logo_publico.png',
          url:
            'http://www.publico.es/sociedad/ensanchar-democracia-golpe-dato.html'
        },
        {
          name: 'eldiario',
          class: 'eldiario',
          image: 'logo_elperiodico.png',
          url:
            'http://www.elperiodico.com/es/noticias/apps-para-el-ciudadano-comprometido/tipi-informacion-congreso-diputados-luchar-pobreza-5431385'
        }
      ],
      own: 'no',
      clientname: 'CIECODE',
      clientdescription:
        'Centro de Investigación y Estudios sobre Coherencia y Desarrollo',
      clienturl: 'http://unmundosalvadorsoler.org/ciecode',
      clientyear: '2015',
      calltoaction: {
        call: 'La pobreza es cosa de todas y todos ¡participa!'
      }
    },

    {
      id: 'lacentralcoop',
      title: 'LaCentral.coop',
      class: 'lacentralcoop',
      subtitle: 'Productos y servicios cooperativos.',
      body: `
        <p>
          Lacentral.coop es una plataforma para la colaboración empresarial, un  escaparate en el que las cooperativas pueden mostrar al exterior sus productos y servicios y un lugar de interacción entre cooperativas y cooperativistas.
        </p>
        <p>
          Los objetivos de la plataforma se pueden resumir en los siguientes:
          <ul>
            <li>
              Aumentar la visibilidad y posibilidades de ventas de productos y servicios cooperativos
            </li>
            <li>
              Posibilitar el conocimiento por parte de una ciudadanía cada vez más concienciada del catálogo cooperativo más amplio e integral de todo el Estado y facilitar el acceso/compra de productos y servicios basados en los principios y valores del cooperativismo
            </li>
            <li>
              Facilitar la intercooperación y la creación de sinergias y construir relaciones directas entre los/as trabajadores/as de la Economía Social
            </li>
          </ul>
        </p>
        <p>
          En definitiva, lacentral.coop aspira a convertirse en un punto de referencia en la red del cooperativismo y para la ciudadanía que realiza un consumo ético y responsable.
        </p>
        <p>
          Este proyecto ha sido desarrollado en Django/pyhton y ha sido diseñado en su totalidad por ENREDA; siendo un ejemplo de la experiencia en el Desarrollo de productos, desde una idea inicial hasta la implementación y puesta en funcionamiento.
        </p>
      `,
      description:
        'Plataforma digital que permite el consumo responsable de productos y servicios cooperativos. Además permite la intercooperación de sus usuarios y entidades desde un sistema altamente novedoso y sencillo de usar. Pensada para el valor más importante de las cooperativas: las personas.',
      logo: 'logo-lacentralcoop.png',
      name: 'LaCentral.coop',
      screenshot: 'screenshot-lacentralcoop.png',
      url: 'http://lacentral.coop',
      sourcecode: '',
      keys: [
        {
          key:
            'Aumentar la visibilidad y posibilidades de ventas de productos y servicios cooperativos.'
        },
        {
          key:
            'Facilitar la interacción y la búsqueda de intercooperación entre cooperativas y cooperativistas.'
        },
        {
          key:
            'Catálogo de consumo responsable más amplio e integral de todo el Estado, basados en los principios y valores del cooperativismo.'
        }
      ],
      metrics: [
        { metric: 'Cooperativas', value: '1187' },
        { metric: 'Usuarios', value: ' 1291' },
        { metric: 'Productos/Servicios', value: '372' }
      ],
      metricsinfo: 'Datos obtenidos en diciembre de 2015',
      technologies: [
        {
          technology: 'Python',
          url: 'https://www.python.org',
          logo: '/assets/images/technologies/python.png',
          class: 'white'
        },
        {
          technology: 'Django',
          url: 'https://www.djangoproject.com',
          logo: '/assets/images/technologies/django.png',
          class: 'white'
        },
        {
          technology: 'PostgreSQL',
          url: 'http://www.postgresql.org',
          logo: '/assets/images/technologies/postgresql.png',
          class: ''
        },
        {
          technology: 'HTML',
          url: 'https://www.w3.org/html/',
          logo: '/assets/images/technologies/html.png',
          class: ''
        },
        {
          technology: 'CSS',
          url: 'https://www.w3.org/Style/CSS/',
          logo: '/assets/images/technologies/css.png',
          class: ''
        },
        {
          technology: 'JavaScript',
          url: 'https://www.javascript.com/',
          logo: '/assets/images/technologies/js.png',
          class: ''
        }
      ],
      media: [
        {
          name: 'eldiario',
          class: 'eldiario',
          image: 'logo_eldiario.png',
          url:
            'http://www.eldiario.es/inspira/red-social-cooperativas_6_401469885.html'
        },
        {
          name: 'tercerainformacion',
          class: 'tercerainformacion',
          image: 'logo_tercerainformacion.png',
          url: 'http://tercerainformacion.es/antigua/spip.php?article88313'
        },
        {
          name: 'economiasolidaria',
          class: 'economiasolidaria',
          image: 'logo_economiasolidaria.jpg',
          url:
            'http://www.economiasolidaria.org/noticias/lacentralcoop_plataforma_de_productos_y_servicios_cooperativos'
        }
      ],
      own: 'no',
      clientname: 'FAECTA',
      clientdescription:
        'Federación Andaluza de Empresas Cooperativas de Trabajo Asociado.',
      clienturl: 'http://faecta.coop',
      clientyear: '2015',
      calltoaction: {
        call: 'Contribuye al consumo responsable'
      }
    },

    {
      id: 'enlaorbita',
      title: 'En la Órbita',
      class: 'enlaorbita',
      subtitle: 'Crea tu sitio web de forma fácil',
      body: `
        <p>
          En la Órbita, una plataforma para la creación de páginas web que apuesta por la Economía Social
        </p>
        <p>
          En la Órbita, una herramienta online para mejorar la presencia digital de empresas, organizaciones, asociaciones, así como PYMES y ONGs, que no tienen al alcance de la mano y del bolsillo la oportunidad de desarrollar páginas web sofisticadas o avanzadas, que suponen un sobrecoste en sus presupuestos.
        </p>
        <p>
          La plataforma surge para responder a una necesidad latente en este ámbito, especialmente en el tercer sector, por lo que sus servicios tienen un foco especial en la Economía Social y en atender las necesidades de estas empresas, asociaciones y organizaciones, con promociones durante su lanzamiento y atención especial para ellos en su iniciación.
        </p>
        <p>
          En la Órbita se caracteriza por su sencillez, pues está pensada para ser utilizada por personas con un nivel de conocimiento técnico medio o bajo. Por ello, esta herramienta pretende ser complemento online para estas empresas y organizaciones, como medio de mejorar su presencia digital, de manera sencilla y accesible, sin necesidad de formación específica en aspectos como la programación o el diseño.
        </p>
        <p>
          Esta plataforma, que ayuda a crear espacios webs propios, trabaja bajo dos premisas fundamentales: responsive y posicionamiento. Éstas son dos de las características fundamentales que deben tener las páginas web a día de hoy para que los usuarios finales (consumidores, clientes, etc.) localicen con facilidad a estas empresas, asociaciones u organizaciones y que éstas consigan sus objetivos.
        </p>
        <p>
          Este proyecto ha sido desarrollado desde la Cooperativa ENREDA en el marco de un proyecto de innovación impulsado por RED.es. 
        </p>
        <p>
          El desarrollo ha sido realizado en varias tecnologías e integrando servicios externos. El backend y el sistema de gestión está desarrollado en Django/python, el frontend está completamente realizado sobre Angular JS y el despliegue de sitios web está implementado mediante el uso de la Api de github.com 
        </p>
      `,
      description:
        '¿Necesitas que te encuentren? Ponte en la órbita digital y asume el control de tu empresa u organización en internet. En la órbita es una herramienta online para mejorar la presencia digital de empresas y organizaciones. Tu entidad en la red de forma sencilla, accesible y profesional.',
      logo: 'logo-elo.png',
      name: 'En la Órbita',
      screenshot: 'screenshot-elo.png',
      url: 'http://enlaorbita.com',
      sourcecode: '',
      keys: [
        { key: 'Facilita posicionamiento digital a empresas y entidades.' },
        {
          key:
            'Solución responsive para la visualización en todo tipo de dispositivos.'
        },
        { key: 'Funcionalidades avanzadas con precios muy reducidos.' }
      ],
      metrics: [
        { metric: '', value: '' },
        { metric: '', value: '' },
        { metric: '', value: '' }
      ],
      metricsinfo: '',
      technologies: [
        {
          technology: 'Python',
          url: 'https://www.python.org',
          class: 'white'
        },
        {
          technology: 'Django',
          url: 'https://www.djangoproject.com',
          class: 'white'
        },
        {
          technology: 'PostgreSQL',
          url: 'http://www.postgresql.org',
          class: ''
        },
        {
          technology: 'AngularJS',
          url: 'https://angularjs.org',
          class: ''
        },
        {
          technology: 'EJS',
          url: 'http://www.embeddedjs.com',
          class: ''
        },
        {
          technology: 'HTML',
          url: 'https://www.w3.org/html/',
          class: ''
        },
        {
          technology: 'CSS',
          url: 'https://www.w3.org/Style/CSS/',
          class: ''
        },
        {
          technology: 'JavaScript',
          url: 'https://www.javascript.com/',
          class: ''
        }
      ],
      media: [],
      own: 'si',
      clientname: '',
      clientdescription: '',
      clienturl: '',
      clientyear: '',
      calltoaction: {
        call: '¡Mejora tu presencia en la red!'
      }
    },

    {
      id: 'socialtocrowd',
      title: 'Social to Crowd',
      class: 'socialtocrowd',
      subtitle: 'El crowdfunding de las cosas',
      body: `
        <p>
          Social to Crowd es una plataforma a través de la cual cualquier persona puede colaborar con un proyecto social determinado mediante la donación de bienes materiales. Una Plataforma para facilitar la solidaridad directa entre organizaciones y personas, sin la dependencia del dinero y generando un nuevo valor en la reutilización de las cosas.
        </p>
        <p>
          Se indica que no hay dependencia del dinero porque el uso de la plataforma no tiene coste alguno ni para las entidades sociales que registren sus proyectos ni para las personas que donan material y, además, no se pueden realizar donaciones económicas. El hecho de que la iniciativa se centra en las donaciones materiales hace que se genere un nuevo valor en el reciclaje y la reutilización de las cosas, apostando por una economía colaborativa.
        </p>
        <p>
          Este proyecto se ha desarrollado gracias al trabajo de muchas personas y, especialmente, de los equipos de ENREDA y Wadobo, que han participado en el desarrollo de la idea de manera desinteresada para poder aportar una solución tecnológica a la sociedad.
        </p>
        <p>
          Social to crowd, es totalmente gratis y abierto, el código fuente se puede encontrar en el repositorio [<a href="https://github.com/socialinn/socialtocrowd" target="_blank" rel="noopener noreferrer">https://github.com/socialinn/socialtocrowd</a>] 
        </p>
      `,
      description:
        'Plataforma para facilitar la solidaridad directa entre organizaciones y personas, sin la dependencia del dinero y generando un nuevo valor en la reutilización de las cosas.',
      logo: 'logo-stc.png',
      name: 'Social to Crowd',
      screenshot: 'screenshot-stc.png',
      url: 'http://socialtocrowd.org',
      sourcecode: 'https://github.com/socialinn/socialtocrowd',
      keys: [
        {
          key:
            'Plataforma de solidaridad con proyectos sociales sin dependencia del dinero.'
        },
        {
          key: "Transparencia para facilitar la donación de materiales a ONG's."
        },
        {
          key:
            'La colaboración como mecanismo de resolución de problemas sociales.'
        }
      ],
      metrics: [
        { metric: '', value: '' },
        { metric: '', value: '' },
        { metric: '', value: '' }
      ],
      metricsinfo: '',
      technologies: [
        {
          technology: 'Python',
          url: 'https://www.python.org',
          logo: '/assets/images/technologies/python.png',
          class: 'white'
        },
        {
          technology: 'Django',
          url: 'https://www.djangoproject.com',
          logo: '/assets/images/technologies/django.png',
          class: 'white'
        },
        {
          technology: 'PostgreSQL',
          url: 'http://www.postgresql.org',
          logo: '/assets/images/technologies/postgresql.png',
          class: ''
        },
        {
          technology: 'HTML',
          url: 'https://www.w3.org/html/',
          logo: '/assets/images/technologies/html.png',
          class: ''
        },
        {
          technology: 'CSS',
          url: 'https://www.w3.org/Style/CSS/',
          logo: '/assets/images/technologies/css.png',
          class: ''
        },
        {
          technology: 'JavaScript',
          url: 'https://www.javascript.com/',
          logo: '/assets/images/technologies/js.png',
          class: ''
        }
      ],
      media: [
        {
          name: 'eldiario',
          class: 'eldiario',
          image: 'logo_eldiario.png',
          url:
            'http://www.eldiario.es/andalucia/Social-Crowd-micromecenazgo-materiales-ONG_0_272972821.html'
        },
        {
          name: 'publico',
          class: 'publico',
          image: 'logo_publico.png',
          url:
            'http://blogs.publico.es/el-cuarto-poder-en-red/2014/06/25/el-crowdfunding-de-las-cosas/'
        },
        {
          name: 'elpais',
          class: 'elpais',
          image: 'logo_elpais.jpg',
          url:
            'http://blogs.elpais.com/alterconsumismo/2014/06/social-to-crowd-el-crowdfunding-de-las-cosas.html'
        },
        {
          name: 'diarioresponsable',
          class: 'diarioresponsable',
          image: 'logo_diarioresponsable.png',
          url:
            'http://diarioresponsable.com/noticias/17860-social-to-crowd-ong-solidaridad-recogida-materiales'
        }
      ],
      own: 'si',
      clientname: '',
      clientdescription: '',
      clienturl: '',
      clientyear: '',
      calltoaction: {
        call: 'Solidiaridad, transparencia e independencia.'
      }
    },

    {
      id: 'transparencia-presupuestaria',
      title: 'Transparencia Presupuestaria',
      class: 'transparenciapresupuestaria',
      subtitle: 'Visualiza su presupuesto',
      body: `
        <p>
          ENREDA ha creado una aplicación de transparencia presupuestaria, pensada para que cualquier institución pueda facilitar de forma accesible y pedagógica sus cuentas anuales. Esta aplicación es usada actualmente por los Ayuntamientos de Córdoba y Marbella.
        </p>
        <p>
          La aplicación permite que cualquier ciudadano podrá navegar entre las diferentes partidas presupuestarias, a través de gráficas interactivas, y comprobar cómo ha ido evolucionando cada una de ellas en los últimos tres años. 
        </p>
        <p>
          Para facilitar la compresión del presupuesto, la herramienta facilita una definición sencilla de las partidas por las que está navegando, además de un glosario donde se explica de forma más detallada los principales conceptos de un presupuesto municipal.
        </p>
        <p>
          Software libre y Open data:
        </p>
        <p>
          La base de la plataforma es Software Libre y su código está liberado en el repositorio de GitHub bajo licencia GNU/GPL v3. Asimismo, cuenta con una zona de descargas, donde se pueden obtener los presupuestos municipales de los últimos años en el formato abierto CSV.
        </p>
        <p>
          Secciones:
          <ul>
            <li>
              Página de inicio con presentación del proyecto 
            </li>
            <li>
              Presupuestos globales: proporciona una visión genérica de cómo están estructurados y el tamãno de cada partida presupuestaria en relación al total
            </li>
            <li>
              Analizando los presupuestos: permite analizar cada partida presupuestaria y compararla con años anteriores de tal forma que se pueda entender de forma sencilla cómo han ido evolucionando cada una de ellas
            </li>
            <li>
              Glosario: donde se define cada partida presupuestaria
            </li>
            <li>
              Obtén los datos: muestra un listado con todos los ficheros de presupuestos publicados en formatos reutilizables (OpenData) para su descarga
            </li>
            <li>
              Contacta: permite generar un acceso directo al buzón de contacto de cada organización o enlazar a una página web donde se desarrolle la materia de una forma más extensa
            </li>
          </ul>
        </p>
        <p>
          Características técnicas
            <ul>
              <li>
                Está basada ́ıntegramente en la  última tecnología HTML5 (HTML5/CSS3/JS), por lo que puede ser alojado en cualquier servidor web
              </li>
              <li>
                Dada la orientación visual del mismo y la alta estructuración, no es necesario disponer de un sistema de gestión de contenidos interno
              </li>
              <li>
                Para la correcta visualización  del sitio web se necesita usar cualquier navegador web
              </li>
            </ul>
          </p>
      `,
      description:
        'Web de visualización de datos en la que se intenta hacer comprensible el presupuesto de cualquier entidad. Además se compara con años anteriores para generar referencias y contextos en los datos. Una oportunidad para empezar a explicar los números.',
      logo: 'logo-tp.png',
      name: 'Transparencia presupuestaria',
      screenshot: 'screenshot-tp.png',
      url: 'http://transparenciapresupuestaria.enreda.coop/',
      sourcecode: 'https://github.com/enredacoop/transparencia-presupuestaria',
      keys: [
        { key: 'Mecanismo de comparación de datos' },
        { key: 'Herramienta orientada a lo gráfico' },
        { key: '100% compatible con cualquier tecnología web' }
      ],
      metrics: [
        { metric: '', value: '' },
        { metric: '', value: '' },
        { metric: '', value: '' }
      ],
      metricsinfo: '',
      technologies: [
        {
          technology: 'D3js',
          url: '',
          logo: 'https://raw.githubusercontent.com/d3/d3-logo/master/d3.png'
        },
        {
          technology: 'Python',
          url: 'https://www.python.org',
          logo: '/assets/images/technologies/python.png',
          class: 'white'
        },
        {
          technology: 'HTML',
          url: 'https://www.w3.org/html/',
          logo: '/assets/images/technologies/html.png',
          class: ''
        },
        {
          technology: 'CSS',
          url: 'https://www.w3.org/Style/CSS/',
          logo: '/assets/images/technologies/css.png',
          class: ''
        },
        {
          technology: 'JavaScript',
          url: 'https://www.javascript.com/',
          logo: '/assets/images/technologies/js.png',
          class: ''
        }
      ],
      media: [],
      own: 'si',
      clientname: '',
      clientdescription: '',
      clienturl: '',
      clientyear: '',
      calltoaction: {
        call: 'Compara y comprende desde lo visual'
      }
    },

    {
      id: 'clic-cervantes',
      title: 'CLIC Cervantes',
      class: 'clic',
      subtitle:
        'Comercio online, internacionalización e integración de sistemas',
      body: `
        <p>
          Proyecto para la comercialización de productos del Instituto Cervantes en sus centros repartidos por el mundo. Un ejemplo de internacionalización y gestión coordinada de la información a través de Internet.
        </p>
        <p>
          ENREDA ha desarrollado para el Instituto Cervantes desde 2010 un sistema de comercio electrónico, denominado CLIC, para poner a disposición de sus potenciales clientes los servicios que oferta y que éstos puedan ser adquiridos por ellos a través de medios electrónicos.
        </p>
        <p>
          Una vez desarrollado el sistema y puesto en explotación, el Instituto Cervantes ha venido ampliando el sistema, tanto a nivel funcional como en su alcance, siendo usado éste por nuevos centros.
        </p>
        <p>
          El proyecto ha consistido en crear una capa de frontend para los 100 centros del Instituto Cervantes para facilitar la gestión de su información y venta de sus productos. El amplio número de portales y las características específicas de éstos, en especial la internacionalización y adaptación de cada portal al idioma del país del centro, ha sido uno de los retos del proyecto que se han podido resolver mediante el uso adecuado de Drupal.
        </p>
        <p>
          El proyecto ha contado con un sistema de multi sitio basado en drupal, con un conjunto de módulos desarrollados a la medida para sincronizar los datos con el sistema interno del Instituto Cervantes y facilitando la gestión de todos los portales.
        </p>
        <p>
          Además este proyecto ha supuesto el desarrollo e integración de más de 15 pasarelas de pago distintas y con características muy diversas que se han implantado a lo largo de todos los países donde hay un centro del Instituto Cervantes.
        </p>
      `,
      description:
        'Proyecto para la comercialización de productos del Instituto Cervantes en sus centros repartidos por el mundo. Un ejemplo de internacionalización y gestión coordinada de la información a través de Internet.',
      logo: 'logo-cervantes.png',
      name: 'CLIC Cervantes',
      screenshot: 'screenshot-cervantes.png',
      url: 'http://clic.cervantes.es',
      sourcecode: '',
      keys: [
        {
          key:
            'Integración de sistemas de gestión propios del cliente y con diversos servicios de banca online'
        },
        { key: 'Internacionalización de los centros en múltiples idiomas' },
        { key: 'Gestión de múltiples sitios desarrollados en Drupal' }
      ],
      metrics: [
        { metric: 'Portales operativos', value: '47' },
        { metric: 'Formas de pago online', value: '+20' },
        { metric: 'Idiomas traducidos', value: '20' }
      ],
      metricsinfo: 'Datos obtenidos en diciembre de 2015',
      technologies: [
        {
          technology: 'PHP',
          url: 'http://php.net',
          logo: '/assets/images/technologies/php.png',
          class: ''
        },
        {
          technology: 'Drupal',
          url: 'https://www.drupal.org/',
          logo: '/assets/images/technologies/drupal8.png',
          class: 'white'
        },
        {
          technology: 'Ubercart',
          url: 'https://www.drupal.org/project/ubercart',
          logo:
            'https://www.drupal.org/files/styles/grid-3-2x/public/project-images/logo_6.png'
        },
        {
          technology: 'MySQL',
          url: 'https://www.mysql.com',
          logo: '/assets/images/technologies/mysql.png',
          class: 'white'
        },
        {
          technology: 'HTML',
          url: 'https://www.w3.org/html/',
          logo: '/assets/images/technologies/html.png',
          class: ''
        },
        {
          technology: 'CSS',
          url: 'https://www.w3.org/Style/CSS/',
          logo: '/assets/images/technologies/css.png',
          class: ''
        },
        {
          technology: 'JavaScript',
          url: 'https://www.javascript.com/',
          logo: '/assets/images/technologies/js.png',
          class: ''
        }
      ],
      media: [],
      own: 'no',
      clientname: 'Instituto Cervantes',
      clientdescription:
        'Organismo público español para la promoción y enseñanza de la lengua española, y la difusión de la cultura de España e Hispanoamérica',
      clienturl: 'http://www.cervantes.es',
      clientyear: '2011-2017',
      calltoaction: {
        call: 'Te ayudamos a desarrollar tu estrategia de comercio online.'
      }
    },

    {
      id: 'conil-hospeda',
      title: 'Conil Hospeda',
      class: 'conilhospeda',
      subtitle: 'El lugar donde empiezan tus vacaciones',
      body: `
        <p>
          Este proyecto es un ejemplo del servicio de desarrollo de producto que la Cooperativa ENREDA realiza junto con clientes y aliados. Así, Conil Hospeda ha sido desarrollado junto con Cooperativa Turística de Conil.
        </p>
        <p>
          Conil Hospeda está ya en la red funcionando desde 2017 para que cualquier persona pueda realizar una reserva en alguno de los 48 establecimientos de Conil de la Frontera que son socios de la cooperativa.
        </p>
        <p>
          <b>El portal de reservas para el hotel más grande de Conil</b>
        </p>
        <p>
          El reto asumido ha sido muy importante: desarrollar un portal turístico de reservas para uno de los destinos más solicitados de la costa española y el séptimo destino turístico más buscado en Trivago.
        </p>
        <p>
          Esta iniciativa tiene  la complejidad añadida de ser un portal para múltiples establecimientos (48) asociados con una lógica no competitiva; los establecimientos aparecen de forma aleatoria en los resultados para favorecer el reparto de reservas entre ellos y no generar competencia en el portal.
        </p>
        <p>
          Todo esto ha generado multitud de titulares en la prensa destacando el potencial de la oferta turística que supone Conil Hospeda.
        </p>
        <p>
          El hotel más grande de Conil 48 establecimientos se unen en una cooperativa de servicios con su propia central de reservas: Conil Hospeda. Diario de Cádiz.
        </p>
        <p>
          Empresarios de Conil de la Frontera (Cádiz) han puesto en marcha la cooperativa turística 'Conil Hospeda', que gestionará el 70 por ciento de las plazas de alojamiento del núcleo urbano de la localidad.. 20 Minutos.
        </p>
        <p>
          Nace la iniciativa Conil Hospeda convirtiendo a la población en un gran hotel. Cadena SER-La Janda
        </p>
        <p>
          <b>Han trabajado en el proyecto más de 13 personas</b>
        </p>
        <p>
          Para poder abordar un proyecto de tal envergadura, la cooperativa ENREDA ha colaborado con numerosos perfiles técnicos con objeto de cumplir los objetivos marcados por el cliente. En este sentido, la implicación de los miembros de la Cooperativa Turística de Conil ha sido fundamental para el diseño e implementación del producto. 
        </p>
        <p>
          El desarrollo se ha realizado en Django, siendo uno de los desarrollos más complejos abordados por la Cooperativa, para situar el producto final en un mercado tan exigente como es el de los portales digitales turísticos.
        </p>
      `,
      description:
        'Proyecto de desarrollo de un motor propio de reservas online para los alojamientos de Conil de la Frontera (Cádiz), con su toque de economía social.',
      logo: 'logo-conilhospeda.svg',
      name: 'Conil Hospeda',
      screenshot: 'screenshot-conil.png',
      url: 'https://conilhospeda.com',
      sourcecode: '',
      keys: [
        {
          key:
            'Motor propio de reservas online con buscador integrado en cada uno de los sitios web de los alojamientos'
        },
        {
          key:
            'Extranet para que cada alojamiento pueda gestionar su información, las habitaciones con tarifas, reservas y disponibilidades'
        },
        {
          key:
            'Diseño adaptativo a diversos dispositivos para que el cliente pueda hacer su reserva desde cualquier lugar'
        }
      ],
      metrics: [
        { metric: 'Alojamientos', value: '48' },
        { metric: 'Habitaciones', value: '~1000' },
        { metric: '', value: '' }
      ],
      metricsinfo: 'Datos obtenidos en junio de 2016',
      technologies: [
        {
          technology: 'Python',
          url: 'https://www.python.org',
          logo: '/assets/images/technologies/python.png',
          class: 'white'
        },
        {
          technology: 'Django',
          url: 'https://www.djangoproject.com',
          logo: '/assets/images/technologies/django.png',
          class: 'white'
        },
        {
          technology: 'PostgreSQL',
          url: 'http://www.postgresql.org',
          logo: '/assets/images/technologies/postgresql.png',
          class: ''
        },
        {
          technology: 'HTML',
          url: 'https://www.w3.org/html/',
          logo: '/assets/images/technologies/html.png',
          class: ''
        },
        {
          technology: 'CSS',
          url: 'https://www.w3.org/Style/CSS/',
          logo: '/assets/images/technologies/css.png',
          class: ''
        },
        {
          technology: 'JavaScript',
          url: 'https://www.javascript.com/',
          logo: '/assets/images/technologies/js.png',
          class: ''
        }
      ],
      media: [
        {
          name: 'europapress',
          class: 'europapress',
          image: 'logo_europapress.png',
          url:
            'http://www.europapress.es/turismo/destino-espana/costa-luz/noticia-empresarios-locales-crean-cooperativa-turistica-conil-hospeda-20160511195958.html'
        },
        {
          name: '20minutos',
          class: '20minutos',
          image: 'logo_20minutos.jpg',
          url:
            'http://www.20minutos.es/noticia/2744560/0/turismo-empresarios-locales-crean-cooperativa-turistica-conil-hospeda/'
        },
        {
          name: 'diariodecadiz',
          class: 'diariodecadiz',
          image: 'logo_diariodecadiz.jpg',
          url:
            'http://www.diariodecadiz.es/article/provincia/2288284/nace/portal/inmobiliario/conil/hospeda.html'
        },
        {
          name: 'diariodeconil',
          class: 'diariodeconil',
          image: 'logo_diariodeconil.jpg',
          url:
            'http://www.diariodeconil.es/articulo/turismo/conil-hospeda-primera-cooperativa-turistica-andalucia/20160509162323000950.html'
        }
      ],
      own: 'no',
      clientname: 'Cooperativa Turística de Conil de la Frontera',
      clientdescription: '',
      clienturl: '',
      clientyear: '2016',
      calltoaction: {
        call: 'El turismo visto desde la economía social y local'
      }
    },

    {
      id: 'poletika',
      title: 'Poletika',
      class: 'poletika',
      subtitle: 'Vigilancia y presión ciudadana para el cambio político',
      body: `
        <p>
          Poletika es un proyecto formado por diversas ONGs y asociaciones con la intención de realizar incidencia política en temas cruciales para el desarrollo social.
        </p>
        <p>
          Este proyecto pretende vigilar y presionar a los partidos políticos para que las personas estén en el centro de las políticas y alcanzar una sociedad más justa y menos desigual, supervisando el trabajo parlamentario y ejecutivo a través de organizaciones, plataformas y movimientos de la sociedad civil.
        </p>
        <p>
          ENREDA ha desarrollado este portal en su tercera fase con la idea de construir una herramienta altamente funcional en la que emerge la necesidad de desarrollar un sistema relacional en el que cada elemento tenga una vinculación directa o indirecta con otro para así poder realizar navegaciones completas sobre el mismo sistema y se puedan cerrar círculos de comprensión de contenidos.
        </p>
        <p>
          El proyecto ha sido desarrollado basándose en el CMS Drupal 7 para implementar un conjunto de entidades de información relacionadas entre ellas y con fuentes de origen muy diversas.
        </p>
        <p>
          El sistem además está integrado con una API del proyecto TipiCiudadano [enlace a /proyectos/tipi-ciudadano/]  para importar información de manera automática. 
        </p>
      `,
      description:
        'Proyecto que pretende vigilar y presionar a los partidos políticos para que las personas estén en el centro de las políticas y alcanzar una sociedad más justa y menos desigual, vigilando el trabajo parlamentario y ejecutivo a través de organizaciones, plataformas y movimientos de la sociedad civil.',
      logo: 'logo-poletika.png',
      name: 'Poletika',
      screenshot: 'screenshot-poletika.png',
      url: 'http://poletika.org',
      sourcecode: '',
      keys: [
        {
          key:
            'Proyecto donde vigilar la actividad parlamentaria y ejecutiva, así como presionar para que los políticos y los partidos cumplan con sus compromisos y adquieran nuevos o mejores compromisos'
        },
        {
          key:
            'Toda la información del proyecto está a disposición de las personas usuarias, que pueden descargársela en formatos fácilmente reutilizables y con los que pueden contrastar los resultados y obtener sus propias conclusiones'
        },
        {
          key:
            'Múltiples vías de colaboración: suscripción, vigilante 2.0 (activista digital), comunicadora, diseñador, periodista, etc'
        }
      ],
      metrics: [
        { metric: 'Organizaciones', value: '+500' },
        { metric: 'Temáticas', value: '11' },
        { metric: 'Partidos políticos', value: '5' }
      ],
      metricsinfo: 'Datos obtenidos en junio de 2017',
      technologies: [
        {
          technology: 'PHP',
          url: 'http://php.net',
          logo: '/assets/images/technologies/php.png',
          class: ''
        },
        {
          technology: 'Drupal',
          url: 'https://www.drupal.org/',
          logo: '/assets/images/technologies/drupal8.png',
          class: 'white'
        },
        {
          technology: 'MySQL',
          url: 'https://www.mysql.com',
          logo: '/assets/images/technologies/mysql.png',
          class: 'white'
        },
        {
          technology: 'API REST',
          url: 'https://www.restapitutorial.com/',
          logo: '/assets/images/technologies/api.png',
          class: 'white'
        },
        {
          technology: 'Bot Telegram',
          url: 'https://telegram.org/blog/bot-revolution',
          logo: '/assets/images/technologies/bottelegram.png',
          class: ''
        },
        {
          technology: 'HTML',
          url: 'https://www.w3.org/html/',
          logo: '/assets/images/technologies/html.png',
          class: ''
        },
        {
          technology: 'CSS',
          url: 'https://www.w3.org/Style/CSS/',
          logo: '/assets/images/technologies/css.png',
          class: ''
        },
        {
          technology: 'JavaScript',
          url: 'https://www.javascript.com/',
          logo: '/assets/images/technologies/js.png',
          class: ''
        }
      ],
      media: [
        {
          name: 'europapress',
          class: 'europapress',
          image: 'logo_europapress.png',
          url:
            'http://www.europapress.es/epsocial/derechos-humanos/noticia-labor-gobierno-primeros-100-dias-insuficiente-materia-pobreza-desigualdad-20170209090249.html'
        },
        {
          name: 'eldiario',
          class: 'eldiario',
          image: 'logo_eldiario.png',
          url:
            'http://www.eldiario.es/desigualdadblog/Poletika-vigila-luces-sombras-Gobierno_6_610398988.html'
        }
      ],
      own: 'no',
      clientname: 'OXFAM Intermon',
      clientdescription: '',
      clienturl: 'http://www.oxfamintermon.org',
      clientyear: '2017',
      calltoaction: {
        call: 'Política + Ética = Poletika.org'
      }
    },

    /*
    {
      id: 'icas',
      title: 'ICAS',
      class: 'icas',
      subtitle: 'Instituto de la Cultura y las Artes de Sevilla',
      body: "Example body with <a href='/'>URL</a>.",
      description:
        'El portal institucional del Instituto de la Cultura y de las Artes que depende del Ayuntamiento de Sevilla, avanza desde un diseño descentralizado de espacios y áreas, para agrupar en un mismo portal todas las sedes culturales dependientes del ICAS. Este portal desarrollado sobre Plone/Zope permite la gestión de múltiples micro-sites y de la gestión completa de la comunicación del ICAS desde un mismo portal web.',
      logo: 'logo-icas.png',
      name: 'ICAS',
      screenshot: 'screenshot-icas.png',
      url: 'http://www.icas-sevilla.org',
      sourcecode: '',
      keys: [
        { key: 'Desarrollado sobre Plone 5/zope' },
        { key: 'Soporte a múltiples micro-sites' },
        { key: 'Diseño actual y adaptativo' }
      ],
      metrics: [
        { metric: 'micro-sites', value: '10' },
        { metric: '', value: '' },
        { metric: '', value: '' }
      ],
      metricsinfo: 'Datos obtenidos en 2018',
      technologies: [
        {
          technology: 'Plone',
          url: 'https://plone.com/',
          logo: '/assets/images/technologies/plone.png',
          class: 'white'
        },
        {
          technology: 'Python',
          url: 'https://www.python.org',
          logo: '/assets/images/technologies/python.png',
          class: 'white'
        },
        {
          technology: 'AJAX',
          url: 'https://es.wikipedia.org/wiki/AJAX',
          logo:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/AJAX_logo_by_gengns.svg/120px-AJAX_logo_by_gengns.svg.png',
          class: 'white'
        },
        {
          technology: 'Bootstrap',
          url: 'https://getbootstrap.com',
          logo:
            'https://getbootstrap.com/docs/4.1/assets/img/bootstrap-stack.png'
        },
        {
          technology: 'HTML',
          url: 'https://www.w3.org/html/',
          logo: '/assets/images/technologies/html.png',
          class: ''
        },
        {
          technology: 'CSS',
          url: 'https://www.w3.org/Style/CSS/',
          logo: '/assets/images/technologies/css.png',
          class: ''
        },
        {
          technology: 'JavaScript',
          url: 'https://www.javascript.com/',
          logo: '/assets/images/technologies/js.png',
          class: ''
        }
      ],
      media: [],
      own: 'no',
      clientname: 'ICAS',
      clientdescription: 'Instituto de la Cultura y las Artes de Sevilla',
      clienturl: 'http://www.icas-sevilla.org',
      clientyear: '2018',
      calltoaction: {
        call: 'La cultura es información.'
      }
    }, */

    {
      id: 'festivalcine',
      title: 'Festival de Sevilla',
      class: 'festivalcine',
      subtitle: 'Festival de Sevilla de Cine Europeo',
      body: `
        <p>
          Este proyecto se ha desarrollado junto con el Instituto de la Cultura y las Artes del Ayuntamiento de Sevilla (ICAS), con el cual se ha trabajado en el desarrollo de varios portales impulsados por esta institución pública. Las tecnologías en las que se basan estos trabajos son Plone y, en el caso del espacio web del Festival de Cine, Drupal.
        </p>
        <p>
          El proyecto implementado para la puesta en marcha del portal del Festival de Cine Europeo se ha desarrollado en un tiempo récord; para ello, ENREDA ha logrado coordinar las aportaciones de empresas expertas en distintos sectores. Así, atendiendo a su importante experiencia en la materia, la empresa Metadrop (metadrop.net) ha participado en el desarrollo basado en Drupal. Por su parte, el diseño gráfico de las pantallas ha sido realizado por Cortijo Social Media, empresa responsable de la imagen del Festival.
        </p>
        <p>
          Esta iniciativa se ha constituido como un importante reto para ENREDA, en el que se ha logrado armonizar la intervención de diferentes actores con la existencia de unos plazos ajustados a los ritmos de un evento de estas características. Los resultados se configuran como la consecución de un desarrollo a medida para una actividad que posee una enorme proyección internacional.
        </p>
        <p>
          El proyecto ha implicado un desarrollo a medida para la gestión de toda la parrilla de información del festival, con más de 500 pases y más de 200 películas para que pudiera automatizarse mediante la importación de los contenidos desde una base de datos externa.
        </p>
        <p>
          Además se han desarrollado múltiples funcionalidades para permitir a los editores de contenidos crear páginas a medida para la comunicación del evento.      
        </p>
      `,
      description:
        'Portal del Festival de Cine Europeo de Sevilla, que tiene como objetivo promover y difundir la cinematografía europea, estableciéndose como un lugar de encuentro para los talentos europeos de cine, periodistas especializados y profesionales del sector. El portal ha sido desarrollado en Drupal y cuenta con una gestión completa de toda la información asociada al festival, secciones de películas, películas, parrilla de programación, noticias, contenidos relacionados, prensa, etc...',
      logo: 'logo-festivalcine.png',
      name: 'Festival de Sevilla',
      screenshot: 'screenshot-festivalcine.png',
      url: 'http://festivalcinesevilla.eu',
      sourcecode: '',
      keys: [
        { key: 'Portal en múltiples idiomas con proyección internacional' },
        {
          key:
            'Presencia digital y punto de referencia de todo lo relacionado con el Festival'
        },
        { key: 'Facilita la gestión de la comunicación del Festival' }
      ],
      metrics: [
        { metric: 'películas', value: '+200' },
        { metric: 'pases de películas', value: '+450' },
        { metric: 'espectadores', value: '+75000' }
      ],
      metricsinfo: 'Datos obtenidos en 2018',
      technologies: [
        {
          technology: 'Drupal',
          url: 'https://www.drupal.org/',
          logo: '/assets/images/technologies/drupal8.png',
          class: 'white'
        },
        {
          technology: 'API REST',
          url: 'https://www.restapitutorial.com/',
          logo: '/assets/images/technologies/api.png',
          class: 'white'
        },
        {
          technology: 'HTML',
          url: 'https://www.w3.org/html/',
          logo: '/assets/images/technologies/html.png',
          class: ''
        },
        {
          technology: 'CSS',
          url: 'https://www.w3.org/Style/CSS/',
          logo: '/assets/images/technologies/css.png',
          class: ''
        },
        {
          technology: 'JavaScript',
          url: 'https://www.javascript.com/',
          logo: '/assets/images/technologies/js.png',
          class: ''
        }
      ],
      media: [],
      own: 'no',
      clientname: 'ICAS',
      clientdescription: 'Instituto de la Cultura y las Artes de Sevilla',
      clienturl: 'http://www.icas-sevilla.org',
      clientyear: '2018',
      calltoaction: {
        call: 'Tienes una cita con el cine europeo en Sevilla'
      }
    },

    {
      id: 'consul-puerto-santa-maria',
      title: 'Consul - El Puerto de Santa María',
      class: 'aytoelpuerto',
      subtitle: 'Consul',
      body: `
        <p>
          ENREDA ha desarrollado e implantado el portal de Participación Ciudadana basado en CONSUL para el Ayuntamiento de El Puerto de Santa María.
        </p>
        <p>
          Esta tecnología, software libre, es la que usa el Ayuntamiento de Madrid en su conocido portal Decide Madrid, que ha tenido tanta repercusión en los últimos dos años. Además de Madrid, esta tecnología es usada en más de 70 ayuntamientos e instituciones públicas tanto a nivel nacional como internacional.
        </p>
        <p>
          ENREDA ha realizado un desarrollo a medida para la conexión del portal de participación con el padrón del municipio para facilitar el registro de todos los usuarios en el sistema y garantizar la calidad de las votaciones realizadas.
        </p>
      `,
      description:
        'Enreda ha desarrollado y mantenido el Portal de Participación ciudadana del Ayuntamiento de El Puerto de Santa María contando con el software más completo que existe actualmente; Consul. Usado por más de 60 ciudades a nivel mundial y premiado por Naciones Unidas. Este software permite la integración total con los sistemas Web del municipio y está preparado para generar todo tipo de procesos participativos...',
      logo: 'logo-consul-elpuerto.png',
      name: 'Consul - El Puerto de Santa María',
      screenshot: 'screenshot-elpuerto.png',
      url: 'https://participa.elpuertodesantamaria.es',
      sourcecode: '',
      keys: [
        { key: 'Votaciones' },
        { key: 'Legislación colaborativa' },
        { key: 'Debates…' }
      ],
      metrics: [
        { metric: '', value: '' },
        { metric: '', value: '' },
        { metric: '', value: '' }
      ],
      metricsinfo: '',
      technologies: [
        {
          technology: 'Consul',
          url: 'http://consulproject.org/es/',
          logo: 'http://consulproject.org/img/consul_logo.svg',
          class: ''
        },
        {
          technology: 'Ruby on Rails',
          url: 'https://rubyonrails.org/',
          logo: 'https://rubyonrails.org/images/rails-logo.svg',
          class: 'white'
        },
        {
          technology: 'PostgreSQL',
          url: 'http://www.postgresql.org',
          logo: '/assets/images/technologies/postgresql.png',
          class: ''
        },
        {
          technology: 'Ubuntu',
          url: 'https://www.ubuntu.com/',
          logo: '/assets/images/technologies/ubuntu.png',
          class: 'white'
        },
        {
          technology: 'HTML',
          url: 'https://www.w3.org/html/',
          logo: '/assets/images/technologies/html.png',
          class: ''
        },
        {
          technology: 'CSS',
          url: 'https://www.w3.org/Style/CSS/',
          logo: '/assets/images/technologies/css.png',
          class: ''
        },
        {
          technology: 'JavaScript',
          url: 'https://www.javascript.com/',
          logo: '/assets/images/technologies/js.png',
          class: ''
        }
      ],
      media: [],
      own: 'no',
      clientname: 'Ayuntamiento de El Puerto de Santa María',
      clientdescription: 'Institución pública',
      clienturl: 'https://www.elpuertodesantamaria.es/',
      clientyear: '2018',
      calltoaction: {
        call: 'Decide cómo debe ser la ciudad que quieres'
      }
    },

    {
      id: 'consul-oviedo',
      title: 'Consul - Oviedo',
      class: 'decideoviedo',
      subtitle: 'Consul',
      body: `
        <p>
          En este proyecto ENREDA ha dado el servicio de mantenimiento y desarrollo evolutivo del portal de participación ciudadana del Ayuntamiento de Oviedo.
        </p>
        <p>
          El Ayuntamiento de Oviedo presentó en 2018 su proceso de Presupuestos Participativos, mediante el cual los ovetenses deciden el destino de 1,5 millones de euros a través de una votación directa y vinculante.
        </p>
        <p>
          El ambicioso proceso se basa en la plataforma consultaoviedo.es, desarrollada en base a Consul, el software libre creado por el Ayuntamiento de Madrid; y cuyo soporte, mantenimiento, evolución y adaptación a las necesidades de los procesos participativos de Oviedo ha sido desarrollado por ENREDA.
        </p>
        <p>
          Del 11 al 30 de mayo de 2018 se realizó la primera fase de apoyos para llevar las propuestas a la votación final, que tuvo lugar entre los días entre el 10 y el 26 de septiembre. Estas acciones se han realizado tanto en la plataforma consultaoviedo.es, como de forma presencial en los puntos habilitados por el Ayuntamiento; centralizándose toda la gestión de la información a través de la plataforma CONSUL.
        </p>
      `,
      description:
        'Enreda ha desarrollado y mantenido el Portal de Participación ciudadana del Ayuntamiento de Oviedo contando con el  software más completo que existe actualmente, Consul. Usado por más de 60 ciudades a nivel mundial y premiado por Naciones Unidas. Este software permite la integración total con los sistemas Web del municipio y está preparado para generar todo tipo de procesos participativos...',
      logo: 'logo-ayto-oviedo.png',
      name: 'Consul - Oviedo',
      screenshot: 'screenshot-oviedo.png',
      url: 'http://www.consultaoviedo.es',
      sourcecode: '',
      keys: [
        { key: 'Votaciones' },
        { key: 'Legislación colaborativa' },
        { key: 'Debates…' }
      ],
      metrics: [
        { metric: '', value: '' },
        { metric: '', value: '' },
        { metric: '', value: '' }
      ],
      metricsinfo: '',
      technologies: [
        {
          technology: 'Consul',
          url: 'http://consulproject.org/es/',
          logo: 'http://consulproject.org/img/consul_logo.svg',
          class: ''
        },
        {
          technology: 'Ruby on Rails',
          url: 'https://rubyonrails.org/',
          logo: 'https://rubyonrails.org/images/rails-logo.svg',
          class: 'white'
        },
        {
          technology: 'PostgreSQL',
          url: 'http://www.postgresql.org',
          logo: '/assets/images/technologies/postgresql.png',
          class: ''
        },
        {
          technology: 'Ubuntu',
          url: 'https://www.ubuntu.com/',
          logo: '/assets/images/technologies/ubuntu.png',
          class: 'white'
        },
        {
          technology: 'HTML',
          url: 'https://www.w3.org/html/',
          logo: '/assets/images/technologies/html.png',
          class: ''
        },
        {
          technology: 'CSS',
          url: 'https://www.w3.org/Style/CSS/',
          logo: '/assets/images/technologies/css.png',
          class: ''
        },
        {
          technology: 'JavaScript',
          url: 'https://www.javascript.com/',
          logo: '/assets/images/technologies/js.png',
          class: ''
        }
      ],
      media: [],
      own: 'no',
      clientname: 'Ayuntamiento de Oviedo',
      clientdescription: 'Institución pública',
      clienturl: 'https://www.oviedo.es',
      clientyear: '2018',
      calltoaction: {
        call: 'Decide cómo debe ser la ciudad que quieres'
      }
    },

    {
      id: 'unpd-somalia',
      title: 'Reforma constitucional de Somalia',
      class: 'unpdsomalia',
      subtitle: 'Consul',
      body: `
        <p>
          El proyecto se basa en el desarrollo de la plataforma, el diseño e implementación de un plan de formación, coaching y mentorización a desarrolladores somalíes, con objeto de garantizar la soberanía y autogestión de la plataforma durante el proceso. 
        </p>
        <p>
          La base de la plataforma será  Consul,  el software libre desarrollado por el Ayuntamiento de Madrid para su conocido portal https://decide.madrid.es/ que ya está siendo usado en más de 100 instituciones públicas tanto a nivel nacional como internacional. 
        </p>
        <p>      
          ENREDA ya ha trabajado en más de 15 proyectos relacionados con esta plataforma en el ámbito nacional y con este proyecto abre la vía para trabajar en el ámbito internacional en el desarrollo de portales de participación digital.
        </p>
        <p>     
          La plataforma será de gran ayuda para facilitar la participación en el proceso de los somalíes residentes en el exterior del país, que según datos de Naciones Unidas son entorno a dos millones de personas (un 13% de la población total del país). 
        </p>
        <p>      
          Además de la plataforma para el Ministerio de Asuntos Constitucionales, se realizarán adaptaciones para (crear 3 plataformas de participación ciudadana locales) que sean usadas (inicialmentente) por el  gobierno local de Mogadiscio y (posteriormente por) otras ciudades del país. Estas plataformas locales se enmarcan dentro del plan estratégico  para mejorar la resiliencia de las ciudades del país a través de la búsqueda colaborativa de soluciones, involucrando a los ciudadanos, particularmente mujeres y jóvenes, en el proceso de establecimiento de prioridades.
        </p>      
      `,
      description:
        'Enreda va a trabajar junto con la oficina somalí del Programa de las Naciones Unidas para el Desarrollo (PNUD -UNDP) para desarrollar una plataforma de participación digital, que será usada por Ministerio de Asuntos Constitucionales del Gobierno de Somalia para recibir propuestas ciudadanas en el proceso de reforma constitucional.',
      logo: 'unpd_somalia.png',
      name: 'Reforma constitucional de Somalia',
      screenshot: 'screenshot-unpdsomalia.png',
      url: 'http://www.so.undp.org/',
      sourcecode: '',
      keys: [
        { key: 'Votaciones' },
        { key: 'Legislación colaborativa' },
        { key: 'Debates' }
      ],
      metrics: [
        { metric: '', value: '' },
        { metric: '', value: '' },
        { metric: '', value: '' }
      ],
      metricsinfo: '',
      technologies: [
        {
          technology: 'Consul',
          url: 'http://consulproject.org/es/',
          logo: 'http://consulproject.org/img/consul_logo.svg',
          class: ''
        },
        {
          technology: 'Ruby on Rails',
          url: 'https://rubyonrails.org/',
          logo: 'https://rubyonrails.org/images/rails-logo.svg',
          class: 'white'
        },
        {
          technology: 'PostgreSQL',
          url: 'http://www.postgresql.org',
          logo: '/assets/images/technologies/postgresql.png',
          class: ''
        },
        {
          technology: 'Ubuntu',
          url: 'https://www.ubuntu.com/',
          logo: '/assets/images/technologies/ubuntu.png',
          class: 'white'
        },
        {
          technology: 'HTML',
          url: 'https://www.w3.org/html/',
          logo: '/assets/images/technologies/html.png',
          class: ''
        },
        {
          technology: 'CSS',
          url: 'https://www.w3.org/Style/CSS/',
          logo: '/assets/images/technologies/css.png',
          class: ''
        },
        {
          technology: 'JavaScript',
          url: 'https://www.javascript.com/',
          logo: '/assets/images/technologies/js.png',
          class: ''
        }
      ],
      media: [],
      own: 'no',
      clientname: 'PNUD en Somalia',
      clientdescription: 'ONU',
      clienturl: 'http://www.so.undp.org/',
      clientyear: '2019',
      calltoaction: {
        call: ''
      }
    },

    {
      id: 'consul-arcos-frontera',
      title: 'Consul - Arcos de la Frontera',
      class: 'decidearcos',
      subtitle: 'Consul',
      body: `
        <p>
          ENREDA ha trabajado con el Ayuntamiento de Arcos de la Frontera para la instalación, el desarrollo y el soporte, además del asesoramiento, de la plataforma digital de participación ciudadana Consul.
        </p>
        <p>
          Esta tecnología, software libre, es la que usa el Ayuntamiento de Madrid en su conocido portal Decide Madrid, que ha tenido tanta repercusión en los últimos dos años. Además de Madrid, esta tecnología es usada en más de 70 ayuntamientos e instituciones públicas tanto a nivel nacional como internacional.
        </p>
      `,
      description:
        'Enreda ha desarrollado y mantenido el Portal de Participación ciudadana del Ayuntamiento de Arcos de la Frontera contando con el  software más completo que existe actualmente, Consul. Usado por más de 60 ciudades a nivel mundial y premiado por Naciones Unidas.Este software permite la integración total con los sistemas Web del municipio y está preparado para generar todo tipo de procesos participativos...',
      logo: 'logo-ayto-arcos.png',
      name: 'Consul - Arcos de la Frontera',
      screenshot: 'screenshot-arcos.png',
      url: 'http://decidearcos.es',
      sourcecode: '',
      keys: [
        { key: 'Votaciones' },
        { key: 'Legislación colaborativa' },
        { key: 'Debates…' }
      ],
      metrics: [
        { metric: '', value: '' },
        { metric: '', value: '' },
        { metric: '', value: '' }
      ],
      metricsinfo: '',
      technologies: [
        {
          technology: 'Consul',
          url: 'http://consulproject.org/es/',
          logo: 'http://consulproject.org/img/consul_logo.svg',
          class: ''
        },
        {
          technology: 'Ruby on Rails',
          url: 'https://rubyonrails.org/',
          logo: 'https://rubyonrails.org/images/rails-logo.svg',
          class: 'white'
        },
        {
          technology: 'PostgreSQL',
          url: 'http://www.postgresql.org',
          logo: '/assets/images/technologies/postgresql.png',
          class: ''
        },
        {
          technology: 'Ubuntu',
          url: 'https://www.ubuntu.com/',
          logo: '/assets/images/technologies/ubuntu.png',
          class: 'white'
        },
        {
          technology: 'HTML',
          url: 'https://www.w3.org/html/',
          logo: '/assets/images/technologies/html.png',
          class: ''
        },
        {
          technology: 'CSS',
          url: 'https://www.w3.org/Style/CSS/',
          logo: '/assets/images/technologies/css.png',
          class: ''
        },
        {
          technology: 'JavaScript',
          url: 'https://www.javascript.com/',
          logo: '/assets/images/technologies/js.png',
          class: ''
        }
      ],
      media: [],
      own: 'no',
      clientname: 'Ayuntamiento de Arcos de la Frontera',
      clientdescription: 'Institución pública',
      clienturl: 'http://www.arcosdelafrontera.es',
      clientyear: '2018',
      calltoaction: {
        call: 'Decide cómo debe ser la ciudad que quieres'
      }
    },

    {
      id: 'consul-santiago',
      title: 'Consul - Santiago de Compostela',
      class: 'decidesantiago',
      subtitle: 'Consul',
      body: `
        <p>
          El Concello de Santiago de Compostela ha decidido confiar a la Cooperativa ENREDA la asistencia técnica para la instalación y configuración de una plataforma de participación ciudadana, basada en Consul [http://consulproject.org/en/],
        </p>
        <p>
          Consul es el software -libre - desarrollado por el Ayuntamiento de Madrid para su conocido portal Decide Madrid [<a href="https://decide.madrid.es/" target="_blank" rel="noopener noreferrer">https://decide.madrid.es/</a>] que ya está siendo usado en más de 70 ayuntamientos e instituciones públicas tanto a nivel nacional como internacional.
        </p>
        <p>
          Santiago se suma así a la larga lista de instituciones que han confiado en ENREDA para el desarrollo o gestión de sus portales web, ya sean de participación ciudadana, como los Ayuntamientos de Oviedo y Cádiz; de transparencia presupuestaria, como Córdoba o Marbella; o culturales, como el Ayuntamiento de Sevilla.
        </p>
        <p>
          Hay que recordar el compromiso del Concello de Santiago con la innovación para el Gobierno Abierto, siendo uno de los impulsores- junto a los ayuntamientos de Madrid, Zaragoza y A Coruña- de la ‘Plataforma de Gobierno Abierto, Colaborativa e interoperable’, acogida por red.es.
        </p>
      `,
      description:
        'Enreda ha desarrollado el Portal de Participación ciudadana del Ayuntamiento de Santiago de Compostela contando con el  software más completo que existe actualmente, Consul. Usado por más de 60 ciudades a nivel mundial y premiado por Naciones Unidas. Este software permite la integración total con los sistemas Web del municipio y está preparado para generar todo tipo de procesos participativos...',
      logo: 'logo-ayto-santiago.png',
      name: 'Consul - Santiago de Compostela',
      screenshot: 'screenshot-santiago.png',
      url: 'http://decidesantiago.es',
      sourcecode: '',
      keys: [
        { key: 'Votaciones' },
        { key: 'Legislación colaborativa' },
        { key: 'Debates…' }
      ],
      metrics: [
        { metric: '', value: '' },
        { metric: '', value: '' },
        { metric: '', value: '' }
      ],
      metricsinfo: '',
      technologies: [
        {
          technology: 'Consul',
          url: 'http://consulproject.org/es/',
          logo: 'http://consulproject.org/img/consul_logo.svg',
          class: ''
        },
        {
          technology: 'Ruby on Rails',
          url: 'https://rubyonrails.org/',
          logo: 'https://rubyonrails.org/images/rails-logo.svg',
          class: 'white'
        },
        {
          technology: 'PostgreSQL',
          url: 'http://www.postgresql.org',
          logo: '/assets/images/technologies/postgresql.png',
          class: ''
        },
        {
          technology: 'Ubuntu',
          url: 'https://www.ubuntu.com/',
          logo: '/assets/images/technologies/ubuntu.png',
          class: 'white'
        },
        {
          technology: 'HTML',
          url: 'https://www.w3.org/html/',
          logo: '/assets/images/technologies/html.png',
          class: ''
        },
        {
          technology: 'CSS',
          url: 'https://www.w3.org/Style/CSS/',
          logo: '/assets/images/technologies/css.png',
          class: ''
        },
        {
          technology: 'JavaScript',
          url: 'https://www.javascript.com/',
          logo: '/assets/images/technologies/js.png',
          class: ''
        }
      ],
      media: [],
      own: 'no',
      clientname: 'Ayuntamiento de Arcos de la Frontera',
      clientdescription: 'Institución pública',
      clienturl: 'http://www.arcosdelafrontera.es',
      clientyear: '2018',
      calltoaction: {
        call: 'Decide cómo debe ser la ciudad que quieres'
      }
    },

    {
      id: 'consul-cadiz',
      title: 'decide.cadiz.es',
      class: 'decidecadiz',
      subtitle: 'Consul',
      body: ` 
        <p>
          ENREDA ha desarollado para el Ayuntamiento de Cádiz el portal de participación ciudadana, basado en el software CONSUL.
        </p>
        <p>
          Consul es el software libre desarrollado por el Ayuntamiento de Madrid para su conocido portal Decide Madrid [<a href="https://decide.madrid.es/" target="_blank" rel="noopener noreferrer">https://decide.madrid.es/</a>] que ya está siendo usado en más de 70 ayuntamientos e instituciones públicas tanto a nivel nacional como internacional.
        </p>
        <p>
          El proyecto ha implicado el desarrollo e integración con el padrón municipal del Ayuntamiento de Cádiz para la validación de los usuarios.
        </p>
        <p>
          Este proyecto está realizado en Ruby on Rails, base del sistema en el que está implementado el software CONSUL.
        </p>
      `,
      description:
        'Enreda ha desarrollado el Portal de Participación ciudadana del Ayuntamiento de Cádiz contando con el software más completo que existe actualmente, Consul. Usado por más de 60 ciudades a nivel mundial y premiado por Naciones Unidas. Este software permite la integración total con los sistemas Web del municipio y está preparado para generar todo tipo de procesos participativos..',
      logo: 'logo-ayto-cadiz.png',
      name: 'Consul - Cádiz',
      screenshot: 'screenshot-cadiz.png',
      url: '',
      sourcecode: '',
      keys: [
        { key: 'Votaciones' },
        { key: 'Legislación colaborativa' },
        { key: 'Debates…' }
      ],
      metrics: [
        { metric: '', value: '' },
        { metric: '', value: '' },
        { metric: '', value: '' }
      ],
      metricsinfo: '',
      technologies: [
        {
          technology: 'Consul',
          url: 'http://consulproject.org/es/',
          logo: 'http://consulproject.org/img/consul_logo.svg',
          class: ''
        },
        {
          technology: 'Ruby on Rails',
          url: 'https://rubyonrails.org/',
          logo: 'https://rubyonrails.org/images/rails-logo.svg',
          class: 'white'
        },
        {
          technology: 'PostgreSQL',
          url: 'http://www.postgresql.org',
          logo: '/assets/images/technologies/postgresql.png',
          class: ''
        },
        {
          technology: 'Ubuntu',
          url: 'https://www.ubuntu.com/',
          logo: '/assets/images/technologies/ubuntu.png',
          class: 'white'
        },
        {
          technology: 'HTML',
          url: 'https://www.w3.org/html/',
          logo: '/assets/images/technologies/html.png',
          class: ''
        },
        {
          technology: 'CSS',
          url: 'https://www.w3.org/Style/CSS/',
          logo: '/assets/images/technologies/css.png',
          class: ''
        },
        {
          technology: 'JavaScript',
          url: 'https://www.javascript.com/',
          logo: '/assets/images/technologies/js.png',
          class: ''
        }
      ],
      media: [],
      own: 'no',
      clientname: 'Ayuntamiento de Cádiz',
      clientdescription: 'Institución pública',
      clienturl: 'http://decide.cadiz.es/',
      clientyear: '2018',
      calltoaction: {
        call: 'Decide cómo debe ser la ciudad que quieres'
      }
    },

    {
      id: 'foro-participacion',
      title: 'Foro Andaluz de Gobiernos Locales y Procesos Participativos',
      class: 'foroparticipacion',
      subtitle: 'Foro Andaluz de Gobiernos Locales y Procesos Participativos',
      body: `
        <p>
          ENREDA asumió durante el año 2017 la dirección técnica del Foro Andaluz de Gobiernos Locales y Procesos Participativos en Andalucía, impulsado por la Dirección General de Participación Ciudadana y Voluntariado adscrita a la Consejería de Igualdad y Políticas Sociales de la Junta de Andalucía y la Federación Andaluza de Municipios y Provincias (FAMP).
        </p>
        <p>
          El Foro se desarrolló entre septiembre y noviembre de 2017 en 16 municipios andaluces, a través de cuatro sesiones en cada uno de ellos (con un total, por tanto, de 64 sesiones) y concluyó con un encuentro andaluz el 28 de noviembre en Sevilla.
        </p>
        <p>
          Los objetivos del Foro eran los siguientes:
          <ul>
            <li>
              Procurar la mejora de los servicios públicos locales, cooperando con la Junta de Andalucía.
            </li>
            <li>
              Realizar una revisión conjunta de la situación en torno a los modelos de participación ciudadana en los Ayuntamientos de Andalucía (DAFO)
            </li>
            <li>
              Formar/Capacitar a Responsables Políticos y el personal técnico respecto a herramientas y procesos útiles/testados para la puesta en marcha de Proyectos de Participación Ciudadana en el ámbito local.
            </li>
            <li>
              Asesorar a los Gobiernos Locales de Andalucía para la puesta en marcha de actuaciones vinculadas con los Procesos Participativos (desde la Unidad de Gestión FAMP). 
            </li>
            <li>
              Constituir el Foro Andaluz de Gobiernos Locales y Procesos Participativos en Andalucía.
            </li>
          </ul>
        </p>
        <p>
        <p>
          Las conclusiones del foro se articularon en torno a tres documentos: 
            <li>
              <a href="http://www.famp.es/export/sites/famp/.galleries/documentos-proyectos/EstadoDeLaCuestion.pdf" target="_blank" rel="noopener noreferrer">
                Análisis de la situación actual en torno a los modelos de gobierno abierto y procesos participativos en los ayuntamientos de Andalucía: Estado de la Cuestión.
              </a>
            </li>
            <li>
              <a href="http://www.famp.es/export/sites/famp/.galleries/documentos-proyectos/HojaDeRuta.pdf" target="_blank" rel="noopener noreferrer">
                Hoja de ruta para la implantación de la Estrategia Local de Gobierno Abierto y Procesos Participativos de la Administración Local en Andalucía.
              </a>
            </li>
            <li>
              <a href="http://www.famp.es/export/sites/famp/.galleries/documentos-proyectos/EstrategiaLocal.pdf" target="_blank" rel="noopener noreferrer">
                Estrategia Local de Gobierno Abierto y Procesos Participativos.
              </a>
            </li>
        <p>
          Además se creó un <a href="http://www.famp.es/es/proyectos/proyectos-en-ejecucion/proyectos-autonomicos/foro-participacion/herramientas/" target="_blank" rel="noopener noreferrer">Banco de Talentos</a> y un <a href="http://www.famp.es/es/proyectos/proyectos-en-ejecucion/proyectos-autonomicos/foro-participacion/mercado-de-ideas/" target="_blank" rel="noopener noreferrer">Mercado de ideas</a> de la participación en Andalucía
        </p>
      `,
      description:
        'Enreda ha desarrollado distintos jornadas de formación sobre la Ley Andaluza de Participación Ciudadana y su adaptación a nivel local y provincial para multitud de organismos públicos (Junta de Andalucía, FAMP, Ayuntamiento de Cádiz, Diputación de Cádiz...',
      logo: 'logo-foro-participacion.png',
      name: 'Foro Andaluz de Gobiernos Locales y Procesos Participativos',
      screenshot: 'foro-demo-particpativa.png',
      url: '/trabajos/foro-participacion/',
      sourcecode: '',
      keys: [
        { key: 'Diseño,  elaboración de contenidos.' },
        { key: 'Sesiones de formación.' },
        { key: 'Consultoría sobre adaptación de reglamentos.' }
      ],
      metrics: [
        { metric: 'ciudades', value: '16' },
        { metric: 'participantes', value: '400' },
        {
          metric: 'Diseño de Hoja de Ruta para la participación en Andalucía',
          value: ' '
        }
      ],
      metricsinfo: 'Datos obtenidos en 2018',
      technologies: [],
      media: [],
      own: 'no',
      clientname: 'Junta de Andalucía',
      clientdescription: 'Junta de Andalucía',
      clienturl: 'https://juntadeandalucia.es/',
      clientyear: '',
      calltoaction: {
        call: ''
      }
    },
    {
      id: 'dipu-participacion-cadiz',
      title: 'Reglamento de Participación de la Diputación de Cádiz',
      class: 'dipuparticipacioncadiz',
      subtitle: 'Reglamento de Participación de la Diputación de Cádiz',
      body: `
        <p>
          ENREDA desarrolló la labor de diseño y dirección técnica del “Foro para la reforma del Reglamento de la Diputación de Cádiz”.  Este proyecto se consideró necesario ante la aprobación de la Ley 7/2017, de 27 de diciembre, de Participación Ciudadana de Andalucía, que modificará el marco legal a la que la normativa provincial debe adaptarse.
        </p>
        <p>
          Para afrontar este cambio la Diputación inició un proceso participativo, en el que los diferentes agentes locales y provinciales fueron los protagonistas. Este proceso se inició con un foro que se celebró en Arcos de la Frontera (Cádiz), un espacio participativo en el que se implicó a la ciudadanía de la provincia de Cádiz, a los técnicos/as de los entes locales y de la Diputación y a los representantes políticos de las distintas Administraciones públicas. El principal objetivo era la puesta en común de experiencias y saberes, el compartir ideas, buscar soluciones conjuntas para  construir  herramientas útiles para la participación provincial, así como  para su transferencia al resto de actores de la provincia.
        </p>
        <p>
          Durante el foro se realizó un análisis de la Participación Ciudadana en la Provincia de Cádiz, así como una batería de propuestas para integrar en la reforma del Reglamento de Participación de la Diputación de Cádiz.
        </p>
        <p>
          El Foro se desarrolló con el siguiente programa:
        </p>
            <li>
              Entrega  de documentación
            </li>
            <li>
              Presentación del Foro y de los trabajos de la Mesa Redactora
            </li>
            <li>
              Talleres participativos  (talleres simultáneos)
            </li>
              <ul>
                <li>
                  Taller 1:  Diagnóstico de la situación de la participación en la provincia de Cádiz (DAFO)
                </li>
                <li>
                  Taller 2: Retos de las estrategias locales y provinciales en la participación ciudadana
                </li>
              </ul>
            <li>
              Exposición colectiva de las conclusiones de los talleres
            </li>
            <li>
              Despedida y cierre
            </li>
          </ul>
        </p>
      `,
      description:
        'Foro para la reforma del reglamento de Participación Ciudadana y su adaptación a la nueva Ley Andaluza de Participación.',
      logo: 'logo-diputacion-cadiz.png',
      name: 'Reglamento de Participación de la Diputación de Cádiz',
      screenshot: 'reglamento-dipu-cadiz.png',
      url: '/trabajos/dipu-participacion-cadiz',
      sourcecode: '',
      keys: [
        { key: 'Diseño y elaboración de contenidos.' },
        { key: 'Dinamización de las sesiones.' },
        {
          key:
            'Estudio sobre la adaptación a la nueva Ley de Participación de las propuestas recibidas.'
        }
      ],
      metrics: [
        { metric: '', value: '' },
        { metric: '', value: '' },
        { metric: '', value: '' }
      ],
      metricsinfo: '',
      technologies: [],
      media: [],
      own: 'no',
      clientname: 'Diputación de Cádiz',
      clientdescription: 'Diputación de Cádiz',
      clienturl: 'www.dipucadiz.es/',
      clientyear: '2018',
      calltoaction: {
        call: ''
      }
    },
    {
      id: 'ayto-participacion-cadiz',
      title: 'Reglamento de Participación del Ayuntamiento de Cádiz',
      class: 'aytoparticipacioncadiz',
      subtitle: 'Reglamento de Participación del Ayuntamiento de Cádiz',
      body: `
        <p>
          ENREDA diseñó y desarrolló durante noviembre de 2018 los foros #DecideCádiz con el objetivo de abrir a la ciudadanía la reforma del Reglamento de Participación Ciudadana del Ayuntamiento de Cádiz, en el marco de su adaptación a la nueva Ley de Participación Ciudadana de Andalucía 
        </p>
        <p>
          Los foros se desarrollaron durante cuatro sesiones con el siguiente programa :
        </p>
        <p>
          <h3>
            Sesión 1: La participación ciudadana, una opción estratégica en el gobierno de la ciudad.
          </h3>
        </p>
        <p>
          <ul>
            <li>
              Presentación de los objetivos de la sesión
            </li>
            <li>
              DAFO de la situación de la participación local
            </li>
            <li>
              Exposición colectiva de las conclusiones de los talleres
            </li>
          </ul>
        </p>
        <p>
          <h3>
            Sesión 2: Principales retos del nuevo Reglamento de Participación Ciudadana (1)
          </h3>
        </p>
        <p>
          <ul>
            <li>
              Presentación de los objetivos de la sesión
            </li>
            <li>
              Taller: Afrontar los retos de la participación en el nuevo reglamento (1)
            </li>
              <ul>
                <li>
                  Transparencia para la participar; transparencia en los procesos participativos
                </li>
                <li>
                  Participación Digital
                </li>
              </ul>
            <li>
              Exposición colectiva de las conclusiones de los talleres
            </li>
          </ul>
        </p>
        <p>
          <h3>
            Sesión 3: Principales retos del nuevo Reglamento de Participación Ciudadana (2)
          </h3>
        </p>
        <p>
          <ul>
            <li>
              Presentación de los objetivos de la sesión
            </li>
            <li>
              Taller: Afrontar los retos de la participación en el nuevo reglamento (2)
            </li>
              <ul>
                <li>
                  Descentralización, cogestión y cercanía;
                </li>
                <li>
                  Codecisión plural y representativa.
                </li>
              </ul>
            <li>
              Exposición colectiva de las conclusiones de los talleres
            </li>
          </ul>
        </p>
        <p>
          <h3>
            Sesión 4: Adaptar el reglamento a la nueva Ley Andaluza de Participación Ciudadana
          </h3>
        </p>
        <p>
          <ul>
            <li>
              Presentación de los objetivos de la sesión
            </li>
            <li>
              Diagnóstico participado del actual reglamento de participación y su adaptación a la nueva Ley Andaluza de Participación Ciudadana y los retos planteados.
            </li>
            <li>
              Exposición colectiva de las conclusiones de los talleres
            </li>
          </ul>
        </p>
      `,
      description:
        'Foros para la reforma del reglamento de Participación Ciudadana y su adaptación a la nueva Ley Andaluza de Participación.',
      logo: 'logo-ayto-cadiz.png',
      name: 'Reglamento de Participación del Ayuntamiento de Cádiz',
      screenshot: 'reglamento-ayto-cadiz.png',
      url: '/trabajos/ayto-participacion-cadiz',
      sourcecode: '',
      keys: [
        { key: 'Diseño y elaboración de contenidos.' },
        { key: 'Dinamización de las sesiones.' },
        {
          key:
            'Estudio sobre la adaptación a la nueva Ley de Participación de las propuestas recibidas.'
        }
      ],
      metrics: [
        { metric: '', value: '' },
        { metric: '', value: '' },
        { metric: '', value: '' }
      ],
      metricsinfo: '',
      technologies: [],
      media: [],
      own: 'no',
      clientname: 'Ayuntamiento de Cádiz',
      clientdescription: 'Ayuntamiento de Cádiz',
      clienturl: 'www.cadiz.es/',
      clientyear: '2018',
      calltoaction: {
        call: 'La cultura es información.'
      }
    },
    {
      id: 'formacion-ley-participacion',
      title: 'Formación sobre la Ley Andaluza de Participación',
      class: 'formacionleyparticipacion',
      subtitle: 'Formación sobre la Ley Andaluza de Participación',
      body: `
        <p>
          ENREDA ha desarrollado acciones formativas sobre la Ley Andaluza de Participación Ciudadana y su adaptación a nivel local y provincial para multitud de organismos públicos (Junta de Andalucía, Federación Andaluza de Municipios y Provincias, Ayuntamiento de Cádiz, Diputación de Cádiz, etc.)
        </p>
        <p>
          Estas acciones formativas han tenido un diseño específico y han adoptado un formato diferente, según las necesidades concretas, pudiendo materializarse en:
          <ul>
            <li>Jornadas</li>
            <li>Talleres</li>
            <li>Ponencias</li>
          </ul>
        </p>
        <p>
          La metodología se ha implementado ha atendido al público para el que está diseñada cada acción:
          <ul>
            <li>Responsables políticos</li>
            <li>Técnicos</li>
            <li>Asociaciones</li>
            <li>Ciudadanía</li>
          </ul>
        </p>
        <p>
          Además se han realizado materiales específicos para las diferentes dimensiones desarrolladas en la Ley:
          <ul>
            <li>Instrumentos y procesos participativos</li>
            <li>Metodologías participativas</li>
            <li>Adaptación de reglamentos locales de participación</li>
            <li>Participación digital</li>
          </ul>
        </p>
      `,
      description:
        'Enreda ha desarrollado distintos jornadas de formación sobre la Ley Andaluza de Participación Ciudadana y su adaptación a nivel local y provincial para multitud de organismos públicos (Junta de Andalucía, FAMP, Ayuntamiento de Cádiz, Diputación de Cádiz…',
      logo: 'logo_junta.png',
      name: 'Formación sobre la Ley Andaluza de Participación',
      screenshot: 'formacion-LAP.png',
      url: '/trabajos/formacion-ley-participacion',
      sourcecode: '',
      keys: [
        { key: 'Diseño,  elaboración de contenidos.' },
        { key: 'Sesiones de formación.' },
        { key: 'Consultoría sobre adaptación de reglamentos.' }
      ],
      metrics: [
        { metric: '', value: '' },
        { metric: '', value: '' },
        { metric: '', value: '' }
      ],
      metricsinfo: '',
      technologies: [],
      media: [],
      own: 'no',
      clientname: 'Junta de Andalucía',
      clientdescription: 'Junta de Andalucía',
      clienturl: 'https://juntadeandalucia.es/',
      clientyear: '2018',
      calltoaction: {
        call: ''
      }
    },
    {
      id: 'sistema-participacion',
      title: 'Sistema Público de Participación Digital de Andalucía',
      class: 'sistemaparticipacion',
      subtitle: '',
      body: `
        <p>
          ENREDA realizó entre 2018 y 2019 la primera “prueba de concepto” para definir las necesidades del Sistema Público de Participación de Andalucía, cuya creación supondrá un verdadero hito en la historia de la participación digital de la Comunidad autónoma. 
        </p>
        <p>
          La creación del Sistema Público de Participación Digital es un mandato de la Ley 7/2017 de Participación Ciudadana de Andalucía. La norma especifica que el sistema debe basarse en Software Libre y que tiene que estar provisto de herramientas y funcionalidades suficientes para dar soporte a todos los procesos de participación ciudadana previstos en la Ley: presupuestos participativos, consultas populares, elaboración de políticas públicas, etc.
        </p>
        <p>
          Antes de decidir abordar un nuevo sistema de información, se ha considerado procedente realizar una consultoría sobre la posibilidad de usar y/o adaptar un sistema existente, en este caso CONSUL, para dar soporte digital a la Ley de Participación Ciudadana de Andalucía. En este marco, la alianza de la cooperativa ENREDA con la Administración autonómica ha valorado la herramienta CONSUL con el objeto de convertirla en una piedra angular de este sistema.
        </p>
        <p>
          La coalición entre ENREDA y la Junta de Andalucía se fundamenta en dos factores:
          <ul>
            <li>
              La amplia experiencia de ENREDA en el desarrollo de CONSUL: la cooperativa ha ayudado en su instalación y uso a los ayuntamientos de Cádiz, Granada, Córdoba, Santiago de Compostela, Oviedo, El Puerto de Santa María y Arcos de la Frontera.
            </li>
            <li>
              El dilatado conocimiento de ENREDA sobre las necesidades de la Ley de Participación de Andalucía: la cooperativa ha redactado el nuevo Reglamento Marco de Participación Andaluz y ha colaborado con los primeros ayuntamientos y diputaciones que han realizado procesos para su adaptación reglamentaria a la nueva norma.
            </li>
          </ul>
        </p>
        <p>
          Los trabajos realizados por parte de ENREDA han consistido principalmente en: 
          <ul>
            <li>
              Estudio de los requisitos funcionales que debe tener el Sistema Público de Participación de Andalucía para adaptarse a la  Ley 7/2017, de 27 de diciembre, de Participación Ciudadana de Andalucía.
            </li>
            <li>
              Análisis de los requisitos técnicos del Sistema Público de Participación de Andalucía.
            </li>
            <li>
              Documentación de las funcionalidades actuales de CONSUL 
            </li>
            <li>
              Documentación técnica sobre CONSUL y su adaptación a distintas Administraciones públicas
            </li>
            <li>
              Informe de conclusiones pormenorizado sobre los diferentes retos que deben afrontarse para poder basar el Sistema Público de Participación de Andalucía en CONSUL
            </li>
            <li>
              Instalación de CONSUL en un entorno de prueba de la Junta de Andalucía
            </li>
          </ul>
        </p>
      `,
      description:
        'Desarrollo de la Prueba de Concepto para usar CONSUL como base del Sistema Público de Participación Digital de Andalucía.',
      logo: 'logo_junta.png',
      name: '',
      screenshot: '',
      url: '/trabajos/sistema-participacion',
      sourcecode: '',
      keys: [
        {
          key:
            'Estudio pormenorizado de las necesidades soporte digital de la Ley Andaluza de Participación.'
        },
        { key: 'Integración con los sistemas de la Junta de Andalucía.' },
        {
          key:
            'Adaptación de CONSUL a necesidades  de una administración autonómica.'
        }
      ],
      metrics: [
        { metric: '', value: '' },
        { metric: '', value: '' },
        { metric: '', value: '' }
      ],
      metricsinfo: '',
      technologies: [],
      media: [],
      own: 'no',
      clientname: 'Junta de Andalucía',
      clientdescription: 'Junta de Andalucía',
      clienturl: 'https://juntadeandalucia.es/',
      clientyear: '2018',
      calltoaction: {
        call: ''
      }
    },
    {
      id: 'ciudad-amable',
      title: 'Participación para la planificación urbanística',
      class: 'ciudadamable',
      subtitle: 'Participación para la planificación urbanística',
      body: `
        <p>
          ENREDA llevó a cabo, en agosto de 2018, unas jornadas participativas y de dinamización en la fase del anteproyecto para la remodelación urbanística que facilite mejora de la movilidad en el casco urbano de Rota. Esta iniciativa se enmarca en la convocatoria de subvenciones “Ciudad Amable”, una iniciativa de concurrencia competitiva puesta en marcha por la Junta de Andalucía. 
        </p>
        <p>
          La propuesta que presentó el consistorio a la convocatoria de subvenciones preveía actuaciones en las calles Maria Auxiliadora, Castelar y Aviador Durán, reduciendo la presencia de vehículos y ganando espacio para el peatón. Asimismo, se propone la creación de una zona comercial abierta en una arteria importante del centro de la localidad involucrando a un amplio sector de la población. Las actuaciones requerían presentar el proyecto en la calle para informar, medir las reacciones  y también para la recogida de propuestas y mejoras.
        </p>
        <p>
          ENREDA realizó una actividad informativa  con materiales, exhibición y difusión del proyecto presentando mapas y bocetos de las actuaciones previstas al que se acercaron vecinos, comerciantes y visitantes de la zona para conocerlo de primera mano. Se recogieron todas las ideas, mejoras y quejas, que se plasmaron en un documento de análisis para el personal municipal. En paralelo se realizó una actividad de dibujo con niños donde estos dibujaban la ciudad en la que querrían vivir.
        </p>
        <p>
          Se contó con la presencia del alcalde, de personal técnico y político del ayuntamiento, de la empresa encargada de la redacción del anteproyecto y la organización de las técnicos de ENREDA.
        </p>
      `,
      description:
        'Enreda ha desarrollado diferentes programas participativos para desarrollar elementos de planificación urbanísticas en municipios andaluces.',
      logo: 'logo-ayto-rota.png',
      name: 'Participación para la planificación urbanística',
      screenshot: '',
      url:
        'https://www.aytorota.es/espacio-ciudadano/delegaciones/participacion-ciudadana#presupuestos-participativos',
      sourcecode: '',
      keys: [
        {
          key: 'Proyecto  “Ciudad Amable” de la Junta de Andalucía en Rota.'
        },
        { key: 'Modificación del PGOU.' },
        { key: 'Estrategias de Desarrollo Urbano Sostenible (EDUSI).' }
      ],
      metrics: [
        { metric: '', value: '' },
        { metric: '', value: '' },
        { metric: '', value: '' }
      ],
      metricsinfo: '',
      technologies: [],
      media: [],
      own: 'no',
      clientname: 'Ayuntamiento de Rota',
      clientdescription: 'Ayuntamiento de Rota',
      clienturl: 'https://www.aytorota.es/',
      clientyear: '2018',
      calltoaction: {
        call: '.'
      }
    },
    {
      id: 'presupuesto-marbella',
      title: 'Presupuesto Participativo de Marbella',
      class: 'presupuestomarbella',
      subtitle: 'Presupuesto Participativo de Marbella',
      body: `
        <p>
          ENREDA ha diseñado y ejercido la dirección técnica de en la implementación de los Presupuestos Participativos del Ayuntamiento de Marbella durante 2016 y 2017. 
        </p>
        <p>
          Para desarrollar el proceso se decidió asumir los principios básicos de la Red Estatal por los Presupuestos Participativos. La partida presupuestaria que  se acordó someter a presupuestos participativos fueron 2.000.000€ y se dividió la ciudad en cinco zonas geográficas que servirían de base al proceso.
        </p>
        <p>
          <h3>Lanzamiento y difusión inicial</h3>
        </p>
        <p>
          La difusión previa de los Presupuestos Participativos se inició el 8 de abril, con la organización de una jornadas abiertas en el Cortijo de Miraflores, en la que participaron diferentes autoridades en la materia. El lanzamiento oficial se realizó el 20 julio, a través de una rueda de prensa en la que concejal de Participación Ciudadana y el concejal de Hacienda explicaron la hoja de ruta del proceso.
        </p>
        <p>
          Durante esta fase se realizaron además talleres de formación técnica sobre el proceso al personal municipal tanto de los distritos/tenencias como de las áreas implicadas. Se impartieron 12 horas de formación inicial, principalmente en presupuestos participativos y dinamización participativa. Además se planificó el plan de comunicación para todo el curso, se diseñaron los materiales gráficos de la presentación pública y también se asignaron los distintos roles que tendrían en el proceso los asesores, técnicos y distintos trabajadores municipales.    
        </p>
        <p>
          <h3>Fase informativa y constitución de los grupos motores</h3>
        </p>
        <p>
          En esta fase se realizaron presentaciones públicas del proceso en cada una de las cinco zonas, para la cual se realizó un importante esfuerzo de convocatoria del tejido asociativo por parte del área de participación y los distritos/tenencias.
        </p>
        <p>
          Tras la presentaciones se constituyeron los cinco grupos motores y se iniciaron sus trabajos.  Cabe destacar que el proceso generó gran expectación, que se materializó en presentaciones masivas en todas las zonas.
        </p>
        <p>
          <h3>Detección de necesidades y construcción de propuestas-soluciones</h3>
        </p>
        <p>
          Para recoger las propuestas de la ciudadanía se realizaron 17 acciones de calle con los grupos motores y se abrió la posibilidad de enviar propuestas a través de internet o de registrarlas en las sedes municipales. Las acciones de calle fueron organizadas por los grupos motores en sus zonas, además se organizaron acciones conjuntas aprovechando momentos de gran afluencia ciudadana, como en el día de la bicicleta.
        </p>
        <p>
          Además se inició la campaña de comunicación masiva  mediante spots en la televisión local, mupis y la apertura de cuentas de los Presupuestos Participativos en redes sociales.
        </p>
        <p>
          Durante esta fase se recogieron cerca de 400 propuestas, aproximadamente un tercio por cada una de las tres vías abiertas, si bien la más utilizada fue la de los registros municipales, que fue la preferentemente elegida por las asociaciones para realizar sus baterías de propuestas.
        </p>
        <p>
          <h3>Priorización de las propuestas ciudadanas</h3>
        </p>
        <p>
          Para la promoción de la votación se realizaron 11 actos de calle con los grupos motores y se generaron acciones publicitarias específicas en televisión, radio, prensa y mupis.
        </p>
        <p>
          La gran novedad en la promoción de esta fase fue el uso del particicamión, que se convirtió en un elemento altamente llamativo en los actos de calle y facilitó el registro de numerosas personas en las web municipal. 
        </p>
        <p>
          El sistema electoral elegido fue otorgar hasta un máximo de tres votos a cada ciudadano empadronado, que podía emplearse a propuestas de cualquiera de las cinco zonas. No se aplicó ningún criterio de priorización corrector al número de votos.
        </p>
        <p>
          La votación se dividió en dos fases:
          <ul>
            <li>
              Durante tres días a través de internet. El software de votación se mantuvo perfectamente funcional durante toda la votación, registrándose 1009 votos de 425 votantes,.
            </li>
            <li>
              Durante un día, de 9h a 21h,  de manera presencial, para lo que se habilitaron seis mesas electorales repartidas por distintas sedes municipales. Se contabilizaron 1322 votos de 556 votantes. 
            </li>
          </ul>
        </p>
      `,
      description:
        'Enreda ha diseñado e implementado los Presupuestos Participativos del Ayuntamiento de Marbella durante dos años.',
      logo: 'logo_marbella.png',
      name: 'Presupuesto Participativo de Marbella',
      screenshot: 'camion.png',
      url: '/trabajos/presupuesto-marbella',
      sourcecode: '',
      keys: [],
      metrics: [
        { metric: 'millones de euros', value: '2' },
        { metric: 'participantes', value: '1.000' },
        { metric: 'online y presencial', value: 'Proceso' }
      ],
      metricsinfo: 'Datos obtenidos en 2018',
      technologies: [],
      media: [],
      own: 'no',
      clientname: 'Ayuntamiento de Marbella',
      clientdescription: 'Ayuntamiento de Marbella',
      clienturl: 'www.marbella.es/',
      clientyear: '2018',
      calltoaction: {
        call: ''
      }
    },
    {
      id: 'presupuesto-mijas',
      title: 'Presupuesto Participativos de Mijas',
      class: 'presupuestomijas',
      subtitle: 'Presupuesto Participativos de Mijas',
      body: `
        <p>
          ENREDA realizó durante el año 2018 el diseño y ejecución del proceso de Presupuestos Participativos del Ayuntamiento de Mijas. El proceso mijeño se convirtió en el de mayor alcance desarrollado ese año en Andalucía, contando con una dotación económica de un millón y medio de euros.
        </p>
        <p>
          El proceso se diseñó en diferentes fases:
        </p>
        <p>
          <h3>Fase previa: diseño y formación</h3>
        </p>
        <p>
          En la primera fase del proceso, ENREDA trabajó con los responsables políticos y técnicos del municipio el diseño del mismo, analizando las necesidades y características de la localidad para concretar diferentes aspectos: presupuesto, zonificación, avales, sistemas de votación, reglamentación, etc.
        </p>
        <p>
          El diseño se materializó en un proceso caracterizado por:
          <ul>
            <li>
              1.500.000 € de presupuesto
            </li>
            <li>
              División del municipio en tres zonas, con una asignación de 500.000€ cada una
            </li>
            <li>
              Derecho a voto de cualquier persona empadronada mayor de 16 años
            </li>
            <li>
              Protagonismo ciudadano garantizado por la gestión del proceso a través de unos “grupos de impulso” abiertos 
            </li>
            <li>
              Necesidad de 15 avales para presentar una propuesta
            </li>
            <li>
              Fase deliberativa con asambleas por zonas 
            </li>
            <li>
              Método de votación  presencial y digital, este último a través de CONSUL
            </li>
          </ul>
        </p> 
        <p>
          Una vez diseñada la estructura del proceso se realizaron acciones de formación al personal municipal de todas las áreas implicadas de una forma u otra en el proceso.
        </p>
        <p>
          <h3>Fase de propuestas</h3>
        </p>
        <p>
          Durante la fase de recogida de propuestas se implementaron diferentes tipos de acciones por todo el municipio: (actuaciones informativas de calles, talleres informativos, asambleas, etc) recogiéndose un total de 54 propuestas válidas. 
        </p>
        <p>
          <h3>Fase de deliberación</h3>
        </p>
        <p>
          Las propuestas se llevaron a asambleas en cada una de las zonas, donde cada proponente explicó y defendió su propuesta, que fue trabajada y mejorada por las asambleas.
        </p>
        <p>
          <h3>Estudio de viabilidad</h3>
        </p>
        <p>
          ENREDA desarrolló acciones formativas y acompañó a todas las áreas municipales para desarrollar los estudios de viabilidad sobre cada una de las propuestas presentadas. En estos estudios fueron declaradas viables un total de 41 propuestas.
        </p>
        <p>
          <h3>Votación</h3>  
        </p>
        <p>
          La votación final se desarrolló durante un mes (del 20 de septiembre al 20 de octubre) a través de internet, y de forma forma presencial a través de diferentes urnas dispuestas por la localidad. Los resultados de la votación pueden verse en https://participa.mijas.es  
        </p>
        <p>
          <h3>Ejecución y seguimiento</h3>
        </p>
        <p>
          Las 20 propuestas seleccionadas pasaron a fase de ejecución en 2019. Para garantizar el control ciudadana de esta fase se creó una Comisión de Seguimiento, con representantes ciudadanos de todas las zonas.
        </p>
      `,
      description:
        'Enreda ha diseñado e implementado los Presupuestos Participativos del Ayuntamiento de Mijas en 2018.',
      logo: 'logo-ayto-mijas.png',
      name: 'Presupuesto Participativos de Mijas',
      screenshot: 'mijas.png',
      url: 'https://participa.mijas.es/',
      sourcecode: '',
      keys: [],
      metrics: [
        { metric: 'millones de euros', value: '1,5' },
        { metric: 'participantes', value: '2.000' },
        { metric: 'online y presencial', value: 'Proceso' }
      ],
      metricsinfo: 'Datos obtenidos en 2018',
      technologies: [],
      media: [],
      own: 'no',
      clientname: 'Ayuntamiento de Mijas',
      clientdescription: 'Ayuntamiento de Mijas',
      clienturl: 'https://www.mijas.es/',
      clientyear: '2018',
      calltoaction: {
        call: ''
      }
    },
    {
      id: 'plan-intervencion',
      title: 'Plan de intervención',
      class: 'planintervencion',
      subtitle: 'Plan de intervención',
      body: `
        <p>
          ENREDA realizó durante el año 2018 el Plan Local de Intervención en Zonas Desfavorecidas de Coria del Río (Sevilla). 
        </p>
        <p>
          El objetivo principal de la Estrategia implementada era mejorar la situación y la inserción de las personas en situación o riesgo de  exclusión social. Para ello, se desarrolló una metodología con enfoque integral basada en la comunidad, utilizando los métodos del trabajo social comunitario, la intervención comunitaria y el desarrollo a escala humana. El aspecto territorial es una factor importante en las situaciones de pobreza, marginación y exclusión social pero a su vez puede ser el motor, un factor catalizador de cambio para sus habitantes.
        </p>
        <p>
          La metodología participativa ha sido clave en el diagnóstico y en la definición de los objetivos y medidas a llevar a cabo, así como en el conjunto del proceso. Fundamental para la eficacia en la consecución de los objetivos, para la apropiación por parte de los destinatarios de la intervención y para provocar el empoderamiento personal y comunitario necesario para facilitar el acceso a los sistemas de protección social. 
        </p>
        <p>
          El Plan Local elaborado se materializó en el siguiente contenido: 
        <ol>
          <li>
            Contexto municipal
          </li>
          <li>
            Identificación y delimitación de la zona desfavorecida
          </li>
          <li>
            Plan de la zona desfavorecida
          </li>
          <li>
            Análisis integral de la zona 
          </li>
          <li>
            Diagnóstico compartido de la situación 
          </li>
          <li>
            Principios rectores del plan local
          </li>
          <li>
            Objetivos consensuados con los agentes y las personas residentes en la zona
          </li>
          <li>
            Medidas y actuaciones acordadas para abordar los retos existentes
          </li>
          <li>
            Marco financiero plurianual del plan local
          </li>
          <li>
            Gobernanza
          </li>
          <li>
            Seguimiento y evaluación
          </li>
        </ol>
      </p>
      `,
      description:
        'Diseño y elaboración del plan local de intervención en zonas desfavorecidas de Coria del Río.',
      logo: 'logo-ayto-coria.png',
      name: 'Plan de intervención',
      screenshot: 'coria.png',
      url: 'http://www.ayto-coriadelrio.es',
      sourcecode: '',
      keys: [],
      metrics: [
        { metric: '', value: '' },
        { metric: '', value: '' },
        { metric: '', value: '' }
      ],
      metricsinfo: '',
      technologies: [],
      media: [],
      own: 'no',
      clientname: 'Ayuntamiento de Coria del Río',
      clientdescription: 'Ayuntamiento de Coria del Río',
      clienturl: 'www.ayto-coriadelrio.es/',
      clientyear: '2018',
      calltoaction: {
        call: ''
      }
    },
    {
      id: 'presupuesto-tarifa',
      title: 'Presupuesto Participativo de Tarifa',
      class: 'presupuestotarifa',
      subtitle: 'Presupuesto Participativo de Tarifa',
      body: `
        <p>
          ENREDA ha llevado a cabo, entre 2016 y 2018, los presupuestos participativos implementados por el Ayuntamiento de Tarifa (Cádiz). Esta iniciativa fue concebida inicialmente como un proyecto piloto, que se ha ido afianzando con el transcurso del tiempo, siendo reconocida por parte de la Diputación de Cádiz con el premio “Buenas prácticas en participación ciudadana”.
        </p>
        <p>
          Las partidas destinadas a este proyecto se han ido incrementando cada año y si bien el primer año se inició como un presupuesto participativo dedicado exclusivamente a los jóvenes, en las siguientes ediciones ya ha participado toda la población.
        </p>
        <p>
          ENREDA ha realizado el diseño metodológico adaptando el proceso a las partidas con las que se dotó y a los sectores implicados en cada una de ellas. En este sentido,  se ha otorgado una especial importancia al proceso juvenil con el objeto de afianzar una base pedagógica en participación ciudadana y democracia directa entre los jóvenes del municipio. 
        </p>
        <p>
          Las acciones que se desarrollaron y que fueron ejecutadas por ENREDA comprenden: 
          <ul>
            <li>
              el diseño de todo el proceso
            </li>
            <li>
              la comunicación y difusión, incluyendo la creación de materiales e imagen gráfica
            </li>
            <li>
              la gestión de las distintas fases (dinamización de asambleas, recogida de propuestas, estudio de viabilidad y votaciones)
            </li>
            <li>
              la evaluación y análisis de las mejoras
            </li>
          </ul>
        </p>
        <p>
          En este marco, se crearon los distintos grupos motores y comisiones de seguimiento y se ha trabajado en los diferentes núcleos poblacionales que componen el municipio de Tarifa, logrando un impacto en el conjunto de la población y de todo el término municipal. Asimismo, se ha facilitado una herramienta digital para apoyar el proceso de recogida de propuestas on line <a href="http://hazloparticipativo.org/tarifa/" target="_blank" rel="noopener noreferrer">hazloparticipativo.org/tarifa/</a>
        </p>
      `,
      description:
        'Diseño e implementación de procesos participativos del Área de Juventud y el Área de Cultura.',
      logo: 'logo-ayto-tarifa.png',
      name: 'Presupuesto Participativo de Tarifa',
      screenshot: 'tarifa.png',
      url: 'http://hazloparticipativo.es/tarifa/',
      sourcecode: '',
      keys: [
        { key: 'Proceso de intervención en el aula.' },
        { key: 'Proceso sectorial de Cultura.' },
        { key: 'Diseño de software para mesas electorales.' }
      ],
      metrics: [
        { metric: '', value: '' },
        { metric: '', value: '' },
        { metric: '', value: '' }
      ],
      metricsinfo: '',
      technologies: [],
      media: [],
      own: 'no',
      clientname: 'Ayuntamiento de Tarifa',
      clientdescription: 'Ayuntamiento de Tarifa',
      clienturl: 'https://www.aytotarifa.com/',
      clientyear: '2018',
      calltoaction: {
        call: ''
      }
    },
    {
      id: 'protocolo-ae',
      title: 'Protocolo Andalucía Emprende',
      class: 'protocoloae',
      subtitle:
        'Protocolo de acogida, recepción e información de Andalucía Emprende',
      body: `
        <p>
          Protocolo de acogida, recepción e información de Andalucía Emprende
        </p>
        <p>
          ENREDA realizó durante 2019 el Protocolo de acogida a nuevas personas usuarias de Andalucía Emprende. Andalucía Emprende es una Fundación Pública Andaluza dependiente de la Consejería de Empleo, Formación y Trabajo Autónomo de la Junta de Andalucía y cuya misión es promover la iniciativa emprendedora y el desarrollo empresarial a lo largo y ancho de la Comunidad Autónoma. Cuenta con más de 260 Centros Andaluces de Emprendimiento (CADE) repartidos por toda Andalucía. 
        </p>
        <p>
          En su empeño por mejorar el servicio a profesionales y empresas, así como a toda persona que se acerque a un centro o punto de información, se están valorando una serie de mejoras.
        </p>
        <p>
          Detectado que es oportuno mejorar procedimientos y vías de información, se decide analizar la posibilidad de crear herramientas y medios para protocolizar la acogida de las personas usuarias, transformar toda la información disponible a un formato amable y fácilmente comprensible y crear unos protocolos de recepción que sean homogéneos para todos los centros.
        </p>
        <p>
          El trabajo de ENREDA consistió en la creación de:
          <ul><li>
            Plan de acogida y protocolo de actuación: 
          </li></ul>
        </p>
        <p>
          Tabajo de consultoría donde se estableció un protocolo básico para poder homogeneizar la información que ofrecen todos los CADE de Andalucía, sistematizando los procesos que actualmente se dan, e indicando los materiales básicos  que debe entregarse a cada perfil de cara a buscar la mejora constante en la atención a las personas usuarias.
          <ul><li>
            Soporte digital de acogida:
          </li></ul>
        </p>
        <p>
          Se desarrolló una herramienta web creada para entregar información de manera digitalizada y sencilla a las nuevas personas usuarias de los servicios de Andalucía Emprende.
        </p>
        <p>
          La solución pasa por ofrecer un  generador de landings personalizadas (webs) que ofrezcan de manera visual toda la información fundamental establecida para las diferentes rutas detalladas en este protocolo de actuación, y a las que además se le pueda incorporar información personalizada para la persona usuaria. 
        </p>
        <p>
          Esta herramienta permite al personal de los CADE crear, a través de un simple formulario, una web personalizada a cada persona usuaria con información adaptada a su perfil. Para ello la herramienta incorpora:
          <ul>
            <li>
              Módulos predefinidos: que el personal de los CADE podrá ir seleccionando para construir la web personalizada de la persona usuaria.
            </li>
            <li>
              Módulo editable: en el que podrá incluir información local no contemplada en los módulos predefinidos, en diferentes formatos (textos, enlaces o adjuntar archivos).
            </li>
            <li>
              Otras opciones de personalización: como el nombre de la persona atendida, o el contacto de quien la atendió.
            </li>
          </ul>
        </p>
    `,
      description: '',
      logo: 'logo-andalucia-emprende.svg',
      name: 'Protocolo Andalucía Emprende',
      screenshot: '',
      url: '',
      sourcecode: '',
      keys: [
        { key: 'Plan de acogida' },
        { key: 'Protocolo de actuación' },
        { key: 'Soporte digital' }
      ],
      metrics: [
        { metric: '', value: '' },
        { metric: '', value: '' },
        { metric: '', value: '' }
      ],
      metricsinfo: '',
      technologies: [
        {
          technology: 'Python',
          url: 'https://www.python.org',
          logo: '/assets/images/technologies/python.png',
          class: 'white'
        },
        {
          technology: 'HTML',
          url: 'https://www.w3.org/html/',
          logo: '/assets/images/technologies/html.png',
          class: ''
        },
        {
          technology: 'CSS',
          url: 'https://www.w3.org/Style/CSS/',
          logo: '/assets/images/technologies/css.png',
          class: ''
        },
        {
          technology: 'JavaScript',
          url: 'https://www.javascript.com/',
          logo: '/assets/images/technologies/js.png',
          class: ''
        }
      ],
      media: [],
      own: 'no',
      clientname: 'Junta de Andalucía',
      clientdescription: 'Andalucía Emprende',
      clienturl: 'https://www.andaluciaemprende.es/',
      clientyear: '2019',
      calltoaction: {
        call: ''
      }
    },
    {
      id: 'mantenimiento-apps-laguna',
      title: 'Mantenimiento Aplicaciones Institucionales ULL',
      class: 'maiull',
      subtitle:
        'Mantenimiento de aplicaciones institucionales de Universidad de La Laguna',
      body: `
        <p>
          ENREDA ha participado en el Servicio de Mantenimiento de las aplicaciones institucionales con tecnología Django/Python de Universidad de la Laguna.
        </p>
        <p>
          Este proyecto ha consistido en el mantenimiento de aplicaciones corporativas internas de la Universidad, y durante el periodo de desarrollo del mismo se han realizado tareas de mantenimiento y desarrollo evolutivo de los sistemas.        
        </p>
    `,
      description: '',
      logo: 'logo-universidad-laguna.png',
      name: 'Mantenimiento Aplicaciones Institucionales ULL',
      screenshot: '',
      url: '',
      sourcecode: '',
      keys: [
        { key: 'Mantenimiento' },
        { key: 'Desarrollo' },
        { key: 'Evolutivo' }
      ],
      metrics: [
        { metric: '', value: '' },
        { metric: '', value: '' },
        { metric: '', value: '' }
      ],
      metricsinfo: '',
      technologies: [
        {
          technology: 'Python',
          url: 'https://www.python.org',
          logo: '/assets/images/technologies/python.png',
          class: 'white'
        }
      ],
      media: [],
      own: 'no',
      clientname: 'Universidad de La Laguna',
      clientdescription: '',
      clienturl: 'https://www.ull.es/',
      clientyear: '2019',
      calltoaction: {
        call: ''
      }
    },
    {
      id: 'eurovelo',
      title: 'Eurovelo',
      class: 'eurovelo',
      subtitle: 'Plataforma de rutas geolocalizadas EUROVELO 8',
      body: `
      <p>
      The platform gets geo-referenced information of the road between Cádiz and the Province of Murcia. The road is divided into several parts, and each of these parts has a detailed map of the road with information about the area, with geo-referenced information (points of interest or accommodation).      </p>
      <p>
      Los trazados que se aportan para cada etapa corresponden al registro de un itinerario real en bicicleta realizado durante la fase de evaluación del estado de la ruta en el proyecto MEDCYCLETOUR, en el segundo semestre de 2017. Por lo tanto, son recorridos que actualmente pueden realizarse, pero que no corresponden necesariamente con el trazado que finalmente se vaya ejecutando en diferentes proyectos para la EuroVelo 8 
      </p>
      <p>
      El proyecto está desarrollado sobre Wordpress con una integración de Openstreetmap y leafletjs para integrar toda la funcionalidad de puntos y rutas geolocalizados. 
      </p>
      <p>
      Además la plataforma permite la colaboración ciudadana permitiendo a los usuarios crear nuevos puntos de interés geolocalizados añadiendo imágenes e información.
      </p>
      <p>
      En definitiva este proyecto es un ejemplo práctico de cómo combinar en una plataforma información útil y accesible con una interacción con el usuario para convertir el portal en una herramienta de uso accesible a la ciudadanía.
      </p>
      `,
      description: `
      ENREDA desarrolló en su totalidad, tanto el desarrollo tecnológico como el proceso inicial de carga de datos, la plataforma de la Red EUROVELO  para la ruta correspondiente a Andalucía dentro de la Eurovelo 8.
      `,
      logo: 'logo-eurovelo.png',
      name: 'Eurovelo',
      screenshot: 'screenshot-eurovelo.png',
      url: 'https://ev8.eurovelospain.comamp-eL3e2ia/es/red-eurovelo/',
      sourcecode: '',
      metrics: [
        { metric: '', value: '' },
        { metric: '', value: '' },
        { metric: '', value: '' }
      ],
      metricsinfo: '',
      technologies: [
        {
          technology: 'Wordpress',
          url: 'https://www.wordpress.com',
          logo: '/assets/images/technologies/wordpress.png',
          class: 'white'
        },
        {
          technology: 'Openstreetmap',
          url: 'https://www.openstreetmap.org/',
          logo: '/assets/images/technologies/openstreetmap.png',
          class: ''
        },
        {
          technology: 'Leaflet.js',
          url: 'https://leafletjs.com',
          logo: '/assets/images/technologies/css.png',
          class: ''
        }
      ],
      media: [],
      own: 'no',
      clientname: 'Junta de Andalucía',
      clientdescription: '',
      clienturl: 'https://www.juntadeandalucia.es/',
      clientyear: '2019',
      calltoaction: {
        call: ''
      }
    },
    {
      id: 'proyectoindex',
      title: 'Index PNUD',
      class: 'proyectoindex',
      subtitle: 'OpenODS Index development for UNDP',
      body: `
      <p>
      This project has been called the Local SDG Alliance, is a system that allows obtaining a complete vision of how an entity is implementing the 2030 Agenda and what path it can follow to integrate the SDGs into its structure, plans, and strategies. In addition, it offers information on all the entities registered on the platform, providing an overview to disseminate the progress of the 2030 Agenda in a territory.
      </p>
      <p>
      Compliance with the 2030 Agenda is the greatest challenge facing our societies. But as you already know, the most efficient way to tackle a big task is to divide it into smaller and more concrete ones. For this reason, we have developed a progressive, accessible, and proven roadmap that makes it easier for any entity to move up, step by step, on its way to achieving the SDGs.
      </p>
      <p>
      This roadmap outlines the fastest way to move towards a model aligned with sustainable development. To achieve this mission, the roadmap is divide into 4 phases, regarding 38 challenges in total. Each challenge is the minimum unit the 2030 Agenda can be split. Overcoming each of these challenges brings you closer to your sustainability goals. Likewise, the correlation between them means that the greater the number of challenges achieved, the greater the acceleration of your progress curve.
      </p>
      `,
      description: `
      ENREDA has developed this project in conjunction with the company OpenODS to adapt the OpenODS Index product for the ART-UNDP initiative, based on the work carried out in collaboration with its team.`,
      logo: 'logo-proyectoindex.png',
      name: 'Index PNUD',
      screenshot: 'screenshot-index.jpg',
      url: '',
      sourcecode: '',
      metrics: [
        { metric: '', value: '' },
        { metric: '', value: '' },
        { metric: '', value: '' }
      ],
      metricsinfo: '',
      technologies: [
        {
          technology: 'Python',
          url: 'https://www.python.org',
          logo: '/assets/images/technologies/python.png',
          class: 'white'
        },
        {
          technology: 'HTML',
          url: 'https://www.w3.org/html/',
          logo: '/assets/images/technologies/html.png',
          class: ''
        },
        {
          technology: 'CSS',
          url: 'https://www.w3.org/Style/CSS/',
          logo: '/assets/images/technologies/css.png',
          class: ''
        },
        {
          technology: 'JavaScript',
          url: 'https://www.javascript.com/',
          logo: '/assets/images/technologies/js.png',
          class: ''
        },
        {
          technology: 'D3js',
          url: 'http://d3js.org',
          logo: 'https://raw.githubusercontent.com/d3/d3-logo/master/d3.png'
        },
        {
          technology: 'Django',
          url: 'https://www.djangoproject.com',
          class: 'white'
        },
        {
          technology: 'Vue3',
          url: 'https://www.djangoproject.com',
          class: 'white'
        }
      ],
      media: [],
      own: 'no',
      clientname: 'PNUD',
      clientdescription: 'United Nations Development Program',
      clienturl: 'https://www1.undp.org/content/undp/es/home.html',
      clientyear: '2021',
      calltoaction: {
        call: ''
      }
    },
    {
      id: 'redpublica',
      title: 'Redpública',
      class: 'redpublica',
      subtitle: 'Digital participation platform for citizens of Peru',
      body: `
      <p>
      The platform is part of the project "Innovation for citizen political participation: beyond the recovery after COVID-19", which aims to contribute to the strengthening of democracy and social cohesion in Peru, through innovative solutions to the challenges of governance and digital disruption.</p>
      <p>
      The aim is to promote new ways of citizen participation, within the framework of the promotion of digital democracy, in order to meet the challenges of governance, transparency and accountability.        </p>
      <p>
      UNDP will design a Digital Public Agenda (DPA) - a digital, interactive, and up-to-date platform - with the support of civil society to promote civic engagement and inform civil society.       </p>
      <p>
      This agenda will make visible the priority issues, demands, needs, and concerns of citizens and promote their inclusion in the plans and priorities of political organizations and the State.             </p>
      <p>
      The DPA is built with high participation of the young population and involves civil society organizations through online focus groups, e-forums, and digital forums.      </p>
      <p>
      This effort will be complemented by the recent activation of the Forum of the National Agreement for the creation of the pact Perú2 while distinguishing itself from the latter in its form and elaboration.           </p>
      `,
      description: `
      ENREDA has developed the Redpública platform for the United Nations Development Program (UNDP) to promote citizen participation and gather proposals from Peruvians to create a "country agenda"      `,
      logo: 'logo-redpublica.png',
      name: 'Redpública',
      screenshot: 'screenshot-redpublica.png',
      url: 'https://redpublica.pe/',
      sourcecode: '',
      metrics: [
        { metric: '', value: '' },
        { metric: '', value: '' },
        { metric: '', value: '' }
      ],
      metricsinfo: '',
      technologies: [
        {
          technology: 'Wordpress',
          url: 'https://www.wordpress.com',
          logo: '/assets/images/technologies/wordpress.png',
          class: 'white'
        },
        {
          technology: 'Consul',
          url: 'http://consulproject.org/es/',
          logo: 'http://consulproject.org/img/consul_logo.svg',
          class: ''
        }
      ],
      media: [],
      own: 'no',
      clientname: 'PNUD Perú',
      clientdescription: '',
      clienturl: 'https://www.pe.undp.org/',
      clientyear: '2021',
      calltoaction: {
        call: ''
      }
    }
  ]
})
