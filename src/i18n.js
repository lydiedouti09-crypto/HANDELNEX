import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  fr: {
    translation: {
      nav: {
        accueil: 'ACCUEIL', apropos: 'À PROPOS', activites: 'NOS ACTIVITÉS',
        solutions: 'NOS SOLUTIONS', vision: 'NOTRE VISION', contact: 'CONTACT',
        cta: 'Découvrir nos solutions',
      },
      hero: {
        btn_discover: 'Nous découvrir', btn_solutions: 'Nos solutions', scroll: 'DÉFILER',
        slides: [
          { tag: 'Technologies & numérique', title: 'Des solutions qui connectent les opportunités.', desc: "HANDELNEX développe et connecte des services dans les domaines de la logistique, du commerce et des solutions numériques." },
          { tag: 'Logistique & livraison', title: "Une logistique fluide, à l'échelle internationale.", desc: "Des flux maîtrisés, de la prise en charge à la livraison finale, partout où vous en avez besoin." },
          { tag: 'Commerce & intermédiation', title: 'Le commerce en ligne, simplifié.', desc: "Une intermédiation fiable pour vos achats, ventes et échanges de biens." },
          { tag: 'Transport & distribution', title: "Une distribution efficace, à l'échelle internationale.", desc: "Des solutions de transport et de distribution optimisées pour répondre à vos besoins." },
          { tag: 'Services & support', title: 'Un support client réactif et professionnel.', desc: "Un service client de qualité pour vous accompagner dans vos projets." },
          { tag: 'Innovation & développement', title: "L'innovation au cœur de nos solutions.", desc: "Développement continu de solutions innovantes pour vous offrir les meilleurs résultats." },
          { tag: 'Voyage & mobilité', title: 'Des solutions pour voyager plus simplement.', desc: "Des services numériques conçus pour faciliter vos projets de voyage et vos déplacements." },
          { tag: 'Accompagnement professionnel', title: 'Un accompagnement pensé pour vos besoins.', desc: "Des services fiables et adaptés pour vous accompagner à chaque étape de vos projets." },
          { tag: 'Échanges internationaux', title: 'Relier les marchés et les opportunités.', desc: "Des solutions qui facilitent les échanges et développent les connexions à l'international." },
          { tag: 'Un réseau en mouvement', title: 'Construire les solutions de demain.', desc: "HANDELNEX fait évoluer son réseau pour répondre aux nouveaux usages et aux besoins de ses clients." },
        ],
        pills: { logistique: 'Logistique', commerce: 'Commerce', livraison: 'Livraison', voyage: 'Voyage', importExport: 'Import/Export', technologie: 'Technologie' },
      },
      apropos: {
        tag: 'À PROPOS DE HANDELNEX',
        title: "Plus qu'une entreprise. Un réseau de solutions.",
        desc: "HANDELNEX est une entreprise basée à Francfort qui développe et coordonne des services dans plusieurs domaines : logistique, commerce, livraison, mobilité, import/export et technologies.\n\nNotre objectif est de proposer des solutions pratiques répondant à des besoins concrets, tout en facilitant les échanges entre différents marchés et territoires.",
        btn: 'En savoir plus',
        infos: [
          { title: "Plusieurs domaines d'activité" },
          { title: 'Solutions évolutives' },
          { title: 'Perspective internationale' },
          { title: 'Basée à Francfort' },
        ],
      },
      activites: {
        tag: 'NOS ACTIVITÉS', title: "Nos domaines d'activité",
        desc: 'Un ensemble de services complémentaires au cœur de HANDELNEX.',
        list: [
          { title: 'Logistique', desc: "Solutions logistiques adaptées aux besoins des entreprises et des particuliers, avec une gestion optimisée des flux." },
          { title: 'Commerce & achats en ligne', desc: "Intermédiation et accompagnement pour les achats en ligne, facilitation des transactions numériques." },
          { title: 'Livraison', desc: "Services de livraison fiables et rapides, pensés pour les besoins modernes du commerce de proximité et digital." },
          { title: 'Services administratifs', desc: "Accompagnement dans les démarches administratives pour simplifier la vie des entreprises et des particuliers." },
          { title: 'Import & Export', desc: "Importation et exportation de produits électroniques et de biens d'occasion à l'échelle internationale." },
          { title: 'Technologies & services numériques', desc: "Services informatiques, électroniques et numériques pour les entreprises en transformation digitale." },
          { title: 'Voyage & Billetterie', desc: "Une solution numérique dédiée aux projets de voyage et à la billetterie — application mobile intuitive." },
          { title: "Biens d'occasion", desc: "Commerce de biens d'occasion avec un cadre de confiance et des garanties adaptées aux transactions." },
        ],
      },
      solutions: {
        tag: 'ÉCOSYSTÈME', title: 'Nos solutions',
        desc: "Découvrez les applications et services proposés par HANDELNEX. Un écosystème conçu pour évoluer.",
        loading: 'Chargement des solutions...',
        empty: "Aucune solution publiée pour le moment.",
        app_tag: 'Application', discover: 'Découvrir la solution', scan: 'SCANNER POUR TÉLÉCHARGER', android: 'Application Android',
      },
      actualites: {
        tag: 'ACTUALITÉS', title: 'Actualités & nouveautés',
        desc: 'Suivez les dernières nouvelles et initiatives de HANDELNEX.',
        empty: 'Aucune actualité publiée pour le moment.', read_more: 'Lire plus', back: 'Retour aux actualités', loading: 'Chargement...', error: 'Actualité introuvable.',
      },
      vision: {
        tag: 'NOTRE VISION',
        title1: 'Connecter les services.', title2: 'Créer les opportunités.',
        desc: "HANDELNEX ambitionne de développer des services et des solutions capables d'accompagner les besoins d'un environnement de plus en plus connecté.",
        values: { innovation: 'Innovation', confiance: 'Confiance', international: 'International', technologie: 'Technologie' },
      },
      contact: {
        tag: 'CONTACT', title: 'Parlons de votre projet ou de votre besoin.',
        nom: 'Nom', email: 'Adresse e-mail', sujet: 'Sujet', message: 'Message',
        nom_ph: 'Votre nom', email_ph: 'vous@exemple.com', sujet_ph: 'Objet de votre message', message_ph: 'Écrivez votre message ici...',
        send: 'Envoyer', sent: 'Message envoyé',
        email_title: 'E-mail', location_title: 'Siège', location: 'HANDELNEX (haftungsbeschränkt) Hamburger Allee 10260486 Frankfurt am Main Deutschland',
        response_title: 'Réponse', response: 'Notre équipe répond généralement sous 48h ouvrées.',
      },
      footer: {
        tagline: 'DES SOLUTIONS QUI CONNECTENT LES OPPORTUNITÉS.',
        entreprise: 'ENTREPRISE', solutions: 'SOLUTIONS', informations: 'INFORMATIONS',
        news: 'ACTUALITÉS', privacy: 'POLITIQUE DE CONFIDENTIALITÉ', travel: 'VOYAGES & BILLETTERIE',
        contact_us: 'Nous contacter', rights: 'Tous droits réservés.', location: 'Francfort, Allemagne (haftungsbeschränkt)',
      },
    },
  },
  en: {
    translation: {
      nav: {
        accueil: 'HOME', apropos: 'ABOUT', activites: 'OUR ACTIVITIES',
        solutions: 'OUR SOLUTIONS', vision: 'OUR VISION', contact: 'CONTACT',
        cta: 'Discover our solutions',
      },
      hero: {
        btn_discover: 'Discover us', btn_solutions: 'Our solutions', scroll: 'SCROLL',
        slides: [
          { tag: 'Technology & Digital', title: 'Solutions that connect opportunities.', desc: "HANDELNEX develops and connects services in logistics, commerce, and digital solutions." },
          { tag: 'Logistics & Delivery', title: 'Seamless logistics, on an international scale.', desc: "Managed flows, from pickup to final delivery, wherever you need it." },
          { tag: 'Commerce & Brokerage', title: 'Online commerce, simplified.', desc: "Reliable brokerage for your purchases, sales, and exchanges of goods." },
          { tag: 'Transport & Distribution', title: 'Efficient distribution, on an international scale.', desc: "Optimized transport and distribution solutions to meet your needs." },
          { tag: 'Services & Support', title: 'Responsive and professional customer support.', desc: "Quality customer service to support you in your projects." },
          { tag: 'Innovation & Development', title: 'Innovation at the heart of our solutions.', desc: "Continuous development of innovative solutions to offer you the best results." },
          { tag: 'Travel & Mobility', title: 'Solutions to make travel simpler.', desc: "Digital services designed to make your travel plans and journeys easier." },
          { tag: 'Professional Support', title: 'Support designed around your needs.', desc: "Reliable and tailored services to support you through every stage of your projects." },
          { tag: 'International Exchange', title: 'Connecting markets and opportunities.', desc: "Solutions that make international exchanges easier and strengthen valuable connections." },
          { tag: 'A Network in Motion', title: 'Building the solutions of tomorrow.', desc: "HANDELNEX evolves its network to meet new uses and the changing needs of its clients." },
        ],
        pills: { logistique: 'Logistics', commerce: 'Commerce', livraison: 'Delivery', voyage: 'Travel', importExport: 'Import/Export', technologie: 'Technology' },
      },
      apropos: {
        tag: 'ABOUT HANDELNEX',
        title: 'More than a company. A network of solutions.',
        desc: "HANDELNEX develops services and solutions across multiple sectors to meet real needs and create new opportunities.",
        btn: 'Learn more',
        infos: [
          { title: 'Multiple business areas' },
          { title: 'Scalable solutions' },
          { title: 'International outlook' },
          { title: 'Based in Frankfurt' },
        ],
      },
      activites: {
        tag: 'OUR ACTIVITIES', title: 'Our business areas',
        desc: 'A set of complementary services at the heart of HANDELNEX.',
        list: [
          { title: 'Logistics', desc: "Logistics solutions tailored to the needs of businesses and individuals, with optimized flow management." },
          { title: 'Commerce & Online Shopping', desc: "Brokerage and support for online purchases, facilitating digital transactions." },
          { title: 'Delivery', desc: "Reliable and fast delivery services, designed for the modern needs of local and digital commerce." },
          { title: 'Administrative Services', desc: "Support with administrative procedures to simplify life for businesses and individuals." },
          { title: 'Import & Export', desc: "Import and export of electronic products and second-hand goods on an international scale." },
          { title: 'Technology & Digital Services', desc: "IT, electronic, and digital services for businesses undergoing digital transformation." },
          { title: 'Travel & Ticketing', desc: "A digital solution dedicated to travel projects and ticketing — an intuitive mobile app." },
          { title: 'Second-hand Goods', desc: "Trade in second-hand goods with a trusted framework and guarantees suited to transactions." },
        ],
      },
      solutions: {
        tag: 'ECOSYSTEM', title: 'Our solutions',
        desc: "Discover the applications and services offered by HANDELNEX. An ecosystem designed to grow.",
        loading: 'Loading solutions...',
        empty: 'No solution published yet. Add one from the admin area.',
        app_tag: 'App', discover: 'Discover the solution', scan: 'SCAN TO DOWNLOAD', android: 'Android App',
      },
      actualites: {
        tag: 'NEWS', title: 'News & updates',
        desc: 'Follow the latest news and initiatives from HANDELNEX.',
        empty: 'No news published yet.', read_more: 'Read more', back: 'Back to news', loading: 'Loading...', error: 'News item not found.',
      },
      vision: {
        tag: 'OUR VISION',
        title1: 'Connecting services.', title2: 'Creating opportunities.',
        desc: "HANDELNEX aims to develop services and solutions capable of supporting the needs of an increasingly connected environment.",
        values: { innovation: 'Innovation', confiance: 'Trust', international: 'International', technologie: 'Technology' },
      },
      contact: {
        tag: 'CONTACT', title: "Let's talk about your project or need.",
        nom: 'Name', email: 'Email address', sujet: 'Subject', message: 'Message',
        nom_ph: 'Your name', email_ph: 'you@example.com', sujet_ph: 'Subject of your message', message_ph: 'Write your message here...',
        send: 'Send', sent: 'Message sent',
        email_title: 'Email', location_title: 'Headquarters', location: 'HANDELNEX (haftungsbeschränkt)Hamburger Allee 10260486 Frankfurt am Main Germany',
        response_title: 'Response', response: 'Our team generally replies within 48 business hours.',
      },
      footer: {
        tagline: 'SOLUTIONS THAT CONNECT OPPORTUNITIES.',
        entreprise: 'COMPANY', solutions: 'SOLUTIONS', informations: 'INFORMATION',
        news: 'NEWS', privacy: 'PRIVACY POLICY', travel: 'TRAVEL & TICKETING',
        contact_us: 'Contact us', rights: 'All rights reserved.', location: 'Frankfurt, Germany (haftungsbeschränkt)',
      },
    },
  },
  de: {
    translation: {
      nav: {
        accueil: 'STARTSEITE', apropos: 'ÜBER UNS', activites: 'AKTIVITÄTEN',
        solutions: 'LÖSUNGEN', vision: 'VISION', contact: 'KONTAKT',
        cta: 'LÖSUNGEN ENTDECKEN',
      },
      hero: {
        btn_discover: 'Uns entdecken', btn_solutions: 'Unsere Lösungen', scroll: 'SCROLLEN',
        slides: [
          { tag: 'Technologie & Digital', title: 'Lösungen, die Chancen verbinden.', desc: "HANDELNEX entwickelt und verbindet Dienstleistungen in den Bereichen Logistik, Handel und digitale Lösungen." },
          { tag: 'Logistik & Lieferung', title: 'Reibungslose Logistik auf internationaler Ebene.', desc: "Kontrollierte Abläufe, von der Abholung bis zur Endlieferung, wo immer Sie sie brauchen." },
          { tag: 'Handel & Vermittlung', title: 'Online-Handel, vereinfacht.', desc: "Zuverlässige Vermittlung für Ihre Käufe, Verkäufe und Warenaustausche." },
          { tag: 'Transport & Vertrieb', title: 'Effizienter Vertrieb auf internationaler Ebene.', desc: "Optimierte Transport- und Vertriebslösungen für Ihre Bedürfnisse." },
          { tag: 'Service & Support', title: 'Reaktionsschneller und professioneller Kundensupport.', desc: "Qualitativ hochwertiger Kundenservice zur Unterstützung Ihrer Projekte." },
          { tag: 'Innovation & Entwicklung', title: 'Innovation im Herzen unserer Lösungen.', desc: "Kontinuierliche Entwicklung innovativer Lösungen für beste Ergebnisse." },
          { tag: 'Reisen & Mobilität', title: 'Lösungen für einfacheres Reisen.', desc: "Digitale Dienstleistungen, die Ihre Reiseprojekte und Wege erleichtern." },
          { tag: 'Professionelle Begleitung', title: 'Unterstützung nach Ihren Bedürfnissen.', desc: "Zuverlässige und passende Dienstleistungen für jede Phase Ihrer Projekte." },
          { tag: 'Internationaler Austausch', title: 'Märkte und Chancen verbinden.', desc: "Lösungen, die den internationalen Austausch erleichtern und wertvolle Verbindungen stärken." },
          { tag: 'Ein Netzwerk in Bewegung', title: 'Die Lösungen von morgen entwickeln.', desc: "HANDELNEX entwickelt sein Netzwerk weiter, um neue Nutzungen und Kundenbedürfnisse zu erfüllen." },
        ],
        pills: { logistique: 'Logistik', commerce: 'Handel', livraison: 'Lieferung', voyage: 'Reisen', importExport: 'Import/Export', technologie: 'Technologie' },
      },
      apropos: {
        tag: 'ÜBER HANDELNEX',
        title: 'Mehr als ein Unternehmen. Ein Netzwerk von Lösungen.',
        desc: "HANDELNEX entwickelt Dienstleistungen und Lösungen in mehreren Bereichen, um konkrete Bedürfnisse zu erfüllen und neue Chancen zu schaffen.",
        btn: 'Mehr erfahren',
        infos: [
          { title: 'Mehrere Geschäftsbereiche' },
          { title: 'Skalierbare Lösungen' },
          { title: 'Internationale Perspektive' },
          { title: 'Sitz in Frankfurt' },
        ],
      },
      activites: {
        tag: 'UNSERE AKTIVITÄTEN', title: 'Unsere Geschäftsbereiche',
        desc: 'Eine Reihe ergänzender Dienstleistungen im Kern von HANDELNEX.',
        list: [
          { title: 'Logistik', desc: "Logistiklösungen für die Bedürfnisse von Unternehmen und Privatpersonen, mit optimiertem Flussmanagement." },
          { title: 'Handel & Online-Einkauf', desc: "Vermittlung und Unterstützung beim Online-Einkauf, Erleichterung digitaler Transaktionen." },
          { title: 'Lieferung', desc: "Zuverlässige und schnelle Lieferdienste für den modernen lokalen und digitalen Handel." },
          { title: 'Verwaltungsdienste', desc: "Unterstützung bei Verwaltungsverfahren zur Vereinfachung des Lebens von Unternehmen und Privatpersonen." },
          { title: 'Import & Export', desc: "Import und Export von Elektronikprodukten und Gebrauchtwaren auf internationaler Ebene." },
          { title: 'Technologie & digitale Dienste', desc: "IT-, Elektronik- und digitale Dienstleistungen für Unternehmen im digitalen Wandel." },
          { title: 'Reisen & Ticketing', desc: "Eine digitale Lösung für Reiseprojekte und Ticketing — eine intuitive mobile App." },
          { title: 'Gebrauchtwaren', desc: "Handel mit Gebrauchtwaren mit einem vertrauenswürdigen Rahmen und geeigneten Garantien." },
        ],
      },
      solutions: {
        tag: 'ÖKOSYSTEM', title: 'Unsere Lösungen',
        desc: "Entdecken Sie die Anwendungen und Dienstleistungen von HANDELNEX. Ein Ökosystem, das zum Wachsen konzipiert ist.",
        loading: 'Lösungen werden geladen...',
        empty: 'Noch keine Lösung veröffentlicht. Fügen Sie eine im Admin-Bereich hinzu.',
        app_tag: 'App', discover: 'Lösung entdecken', scan: 'ZUM HERUNTERLADEN SCANNEN', android: 'Android-App',
      },
      actualites: {
        tag: 'NEUIGKEITEN', title: 'Neuigkeiten & Updates',
        desc: 'Verfolgen Sie die neuesten Nachrichten und Initiativen von HANDELNEX.',
        empty: 'Noch keine Neuigkeiten veröffentlicht.', read_more: 'Mehr erfahren', back: 'Zurück zu den Neuigkeiten', loading: 'Wird geladen...', error: 'Neuigkeit nicht gefunden.',
      },
      vision: {
        tag: 'UNSERE VISION',
        title1: 'Dienstleistungen verbinden.', title2: 'Chancen schaffen.',
        desc: "HANDELNEX möchte Dienstleistungen und Lösungen entwickeln, die den Bedürfnissen einer zunehmend vernetzten Umgebung gerecht werden.",
        values: { innovation: 'Innovation', confiance: 'Vertrauen', international: 'International', technologie: 'Technologie' },
      },
      contact: {
        tag: 'KONTAKT', title: 'Sprechen wir über Ihr Projekt oder Ihren Bedarf.',
        nom: 'Name', email: 'E-Mail-Adresse', sujet: 'Betreff', message: 'Nachricht',
        nom_ph: 'Ihr Name', email_ph: 'sie@beispiel.com', sujet_ph: 'Betreff Ihrer Nachricht', message_ph: 'Schreiben Sie hier Ihre Nachricht...',
        send: 'Senden', sent: 'Nachricht gesendet',
        email_title: 'E-Mail', location_title: 'Sitz', location: 'HANDELNEX (haftungsbeschränkt)Hamburger Allee 10260486 Frankfurt am Main Deutschland',
        response_title: 'Antwort', response: 'Unser Team antwortet in der Regel innerhalb von 48 Arbeitsstunden.',
      },
      footer: {
        tagline: 'LÖSUNGEN, DIE CHANCEN VERBINDEN.',
        entreprise: 'UNTERNEHMEN', solutions: 'LÖSUNGEN', informations: 'INFORMATIONEN',
        news: 'NEUIGKEITEN', privacy: 'DATENSCHUTZERKLÄRUNG', travel: 'REISEN & TICKETING',
        contact_us: 'Kontaktieren Sie uns', rights: 'Alle Rechte vorbehalten.', location: 'Frankfurt, Deutschland (haftungsbeschränkt)',
      },
    },
  },
  'pt-BR': {
    translation: {
      nav: {
        accueil: 'INÍCIO',
        apropos: 'SOBRE NÓS',
        activites: 'NOSSAS ATIVIDADES',
        solutions: 'NOSSAS SOLUÇÕES',
        vision: 'NOSSA VISÃO',
        contact: 'CONTATO',
        cta: 'DESCOBRIR NOSSAS SOLUÇÕES',
      },

      hero: {
        btn_discover: 'Conheça-nos',
        btn_solutions: 'Nossas soluções',
        scroll: 'ROLAR',

        slides: [
          {
            tag: 'Tecnologia & Digital',
            title: 'Soluções que conectam oportunidades.',
            desc: 'A HANDELNEX desenvolve e conecta serviços nas áreas de logística, comércio e soluções digitais.',
          },
          {
            tag: 'Logística & Entrega',
            title: 'Uma logística fluida em escala internacional.',
            desc: 'Fluxos controlados, desde a coleta até a entrega final, onde quer que você precise.',
          },
          {
            tag: 'Comércio & Intermediação',
            title: 'Comércio online simplificado.',
            desc: 'Intermediação confiável para suas compras, vendas e trocas de mercadorias.',
          },
          {
            tag: 'Transporte & Distribuição',
            title: 'Uma distribuição eficiente em escala internacional.',
            desc: 'Soluções de transporte e distribuição otimizadas para atender às suas necessidades.',
          },
          {
            tag: 'Serviços & Suporte',
            title: 'Um suporte ao cliente rápido e profissional.',
            desc: 'Um atendimento de qualidade para acompanhar você em seus projetos.',
          },
          {
            tag: 'Inovação & Desenvolvimento',
            title: 'A inovação no centro de nossas soluções.',
            desc: 'Desenvolvimento contínuo de soluções inovadoras para oferecer os melhores resultados.',
          },
          {
            tag: 'Viagens & Mobilidade',
            title: 'Soluções para viajar com mais facilidade.',
            desc: 'Serviços digitais desenvolvidos para facilitar seus projetos de viagem e deslocamentos.',
          },
          {
            tag: 'Acompanhamento Profissional',
            title: 'Um acompanhamento pensado para suas necessidades.',
            desc: 'Serviços confiáveis e adaptados para acompanhar você em cada etapa de seus projetos.',
          },
          {
            tag: 'Intercâmbio Internacional',
            title: 'Conectando mercados e oportunidades.',
            desc: 'Soluções que facilitam as trocas internacionais e fortalecem conexões.',
          },
          {
            tag: 'Uma Rede em Movimento',
            title: 'Construindo as soluções de amanhã.',
            desc: 'A HANDELNEX desenvolve sua rede para responder às novas necessidades e aos novos usos de seus clientes.',
          },
        ],

        pills: {
          logistique: 'Logística',
          commerce: 'Comércio',
          livraison: 'Entrega',
          voyage: 'Viagens',
          importExport: 'Importação/Exportação',
          technologie: 'Tecnologia',
        },
      },

      apropos: {
        tag: 'SOBRE A HANDELNEX',
        title: 'Mais do que uma empresa. Uma rede de soluções.',
        desc: 'A HANDELNEX é uma empresa sediada em Frankfurt que desenvolve e coordena serviços em diversas áreas: logística, comércio, entrega, mobilidade, importação/exportação e tecnologia.\n\nNosso objetivo é oferecer soluções práticas para necessidades concretas, facilitando as trocas entre diferentes mercados e territórios.',
        btn: 'SAIBA MAIS',

        infos: [
          { title: 'Diversas áreas de atuação' },
          { title: 'Soluções escaláveis' },
          { title: 'Perspectiva internacional' },
          { title: 'Sediada em Frankfurt' },
        ],
      },

      activites: {
        tag: 'NOSSAS ATIVIDADES',
        title: 'Nossas áreas de atuação',
        desc: 'Um conjunto de serviços complementares no centro da HANDELNEX.',

        list: [
          {
            title: 'Logística',
            desc: 'Soluções logísticas adaptadas às necessidades de empresas e particulares, com gestão otimizada dos fluxos.',
          },
          {
            title: 'Comércio & Compras Online',
            desc: 'Intermediação e suporte para compras online, facilitando as transações digitais.',
          },
          {
            title: 'Entrega',
            desc: 'Serviços de entrega confiáveis e rápidos, pensados para as necessidades modernas do comércio local e digital.',
          },
          {
            title: 'Serviços Administrativos',
            desc: 'Acompanhamento em procedimentos administrativos para simplificar a vida de empresas e particulares.',
          },
          {
            title: 'Importação & Exportação',
            desc: 'Importação e exportação de produtos eletrônicos e bens usados em escala internacional.',
          },
          {
            title: 'Tecnologia & Serviços Digitais',
            desc: 'Serviços de TI, eletrônicos e digitais para empresas em transformação digital.',
          },
          {
            title: 'Viagens & Bilhetagem',
            desc: 'Uma solução digital dedicada a projetos de viagem e bilhetagem — um aplicativo móvel intuitivo.',
          },
          {
            title: 'Bens Usados',
            desc: 'Comércio de bens usados com uma estrutura de confiança e garantias adequadas às transações.',
          },
        ],
      },

      solutions: {
        tag: 'ECOSSISTEMA',
        title: 'Nossas soluções',
        desc: 'Descubra os aplicativos e serviços oferecidos pela HANDELNEX. Um ecossistema projetado para evoluir.',
        loading: 'Carregando soluções...',
        empty: 'Nenhuma solução publicada no momento.',
        app_tag: 'Aplicativo',
        discover: 'Descobrir a solução',
        scan: 'ESCANEIE PARA BAIXAR',
        android: 'Aplicativo Android',
      },

      actualites: {
        tag: 'NOTÍCIAS',
        title: 'Notícias & novidades',
        desc: 'Acompanhe as últimas notícias e iniciativas da HANDELNEX.',
        empty: 'Nenhuma notícia publicada no momento.',
        read_more: 'LER MAIS',
        back: 'Voltar às notícias',
        loading: 'Carregando...',
        error: 'Notícia não encontrada.',
      },

      vision: {
        tag: 'NOSSA VISÃO',
        title1: 'Conectar serviços.',
        title2: 'Criar oportunidades.',
        desc: 'A HANDELNEX tem como objetivo desenvolver serviços e soluções capazes de acompanhar as necessidades de um ambiente cada vez mais conectado.',

        values: {
          innovation: 'Inovação',
          confiance: 'Confiança',
          international: 'Internacional',
          technologie: 'Tecnologia',
        },
      },

      contact: {
        tag: 'CONTATO',
        title: 'Vamos conversar sobre seu projeto ou sua necessidade.',
        nom: 'Nome',
        email: 'Endereço de e-mail',
        sujet: 'Assunto',
        message: 'Mensagem',

        nom_ph: 'Seu nome',
        email_ph: 'voce@exemplo.com',
        sujet_ph: 'Assunto da sua mensagem',
        message_ph: 'Escreva sua mensagem aqui...',

        send: 'Enviar',
        sent: 'Mensagem enviada',

        email_title: 'E-mail',
        location_title: 'Sede',
        location: 'HANDELNEX (haftungsbeschränkt) Hamburger Allee 10260486 Frankfurt am Main Alemanha',

        response_title: 'Resposta',
        response: 'Nossa equipe geralmente responde em até 48 horas úteis.',
      },

      footer: {
        tagline: 'SOLUÇÕES QUE CONECTAM OPORTUNIDADES.',
        entreprise: 'EMPRESA',
        solutions: 'SOLUÇÕES',
        informations: 'INFORMAÇÕES',

        news: 'NOTÍCIAS',
        privacy: 'POLÍTICA DE PRIVACIDADE',
        travel: 'VIAGENS & BILHETAGEM',

        contact_us: 'ENTRE EM CONTATO',
        rights: 'Todos os direitos reservados.',
        location: 'Frankfurt, Alemanha (haftungsbeschränkt)',
      },
    },
  },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr',
    fallbackLng: 'fr',
    interpolation: { escapeValue: false },
  })

export default i18n