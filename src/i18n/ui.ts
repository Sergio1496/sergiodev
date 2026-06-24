export type Lang = "es" | "en" | "fr" | "it";

export const defaultLang: Lang = "es";

/** Locale para Intl/toLocaleDateString por idioma. */
export const dateLocale: Record<Lang, string> = {
  es: "es-ES",
  en: "en-US",
  fr: "fr-FR",
  it: "it-IT",
};

export const ui: Record<Lang, Record<string, string>> = {
  es: {
    "meta.description":
      "Sergio Expósito Martínez | Desarrollador Fullstack de aplicaciones móviles",

    "nav.home": "Inicio",
    "nav.projects": "Proyectos",
    "nav.blog": "Blog",
    "nav.contact": "Contacto",
    "nav.aria": "Barra de navegación",
    "nav.openMenu": "Abrir menú",

    "lang.label": "Idioma",

    "hero.role": "Desarrollador Fullstack de aplicaciones móviles",

    "btn.contact": "Contacta conmigo",
    "btn.cv": "Mi CV",

    "about.title": "Sobre mí",
    "about.p1":
      "Soy Sergio, desarrollador fullstack especializado en aplicaciones móviles. Desde 2023 trabajo en Hyliacom creando apps multiplataforma con Flutter, además de soluciones de escritorio y servicios backend sobre EasyClient, un framework propio desarrollado en PHP y MySQL.",
    "about.p2":
      "Me gusta construir productos cuidados, con buen rendimiento y atención al detalle, y estar siempre aprendiendo nuevas tecnologías —de Dart y TypeScript a React, Angular o Laravel— para aportar lo mejor en cada proyecto.",

    "career.title": "Trayectoria",
    "career.present": "Presente",

    "skills.title": "Habilidades",

    "studies.degree": "Máster en Desarrollo Web Fullstack",
    "studies.body":
      "Durante el Máster en Desarrollo Web Fullstack, adquirí habilidades en HTML5, CSS, SASS, Bootstrap, Javascript y PHP. Creé aplicaciones SPA's con React, Angular y Laravel, gestioné bases de datos con MySQL y MongoDB, y desarrollé API's y webservices. También manejé servicios cloud (AWS, Azure, Google Cloud) y utilicé metodologías ágiles como SCRUM y KanBan.",

    "contact.title": "Contacto",
    "contact.intro": "Contacta conmigo por email y charlemos 🙂",
    "contact.name": "Nombre",
    "contact.email": "Email",
    "contact.subject": "Asunto",
    "contact.message": "Mensaje",
    "contact.send": "Enviar",
    "contact.err.campos": "Por favor, rellena todos los campos antes de enviar.",
    "contact.err.envio":
      "Hubo un problema al enviar el mensaje. Inténtalo de nuevo en unos minutos.",
    "contact.err.generic":
      "Ocurrió un error al enviar el mensaje. Inténtalo de nuevo.",

    "projects.title": "Proyectos",
    "projects.article": "Artículo",
    "projects.viewProject": "Ver proyecto",
    "projects.viewPlay": "Ver en Google Play",

    "blog.title": "Artículos",
    "blog.readArticle": "Leer artículo",
    "reading.suffix": "de lectura",

    "post.back": "Volver al blog",
    "post.relatedTitle": "Proyecto relacionado",
    "post.relatedDesc": "Explora el proyecto que inspiró este artículo",
    "post.relatedView": "Ver",
    "post.notFoundTitle": "Artículo no encontrado",
    "post.notFoundDesc": "El artículo que buscas no existe o ha sido movido.",
    "post.moreArticles": "Ver más artículos",
    "post.liked": "¿Te gustó este artículo?",
    "post.share": "Compartir artículo",
    "post.shareOptions": "Opciones de compartir",
    "post.copyLink": "Copiar enlace",
    "post.emailLabel": "Correo",
    "post.contentError": "Error cargando el contenido del artículo.",
    "post.linkCopied": "Enlace copiado",
    "post.actionFailed": "No se pudo completar la acción",

    "success.title": "Mensaje Enviado",
    "success.subtitle": "Serás redirigido a la página de inicio en breve...",

    "notfound.title": "Página no encontrada",
    "notfound.desc": "La página que buscas no existe o ha sido movida.",
    "notfound.home": "Volver al inicio",
  },

  en: {
    "meta.description":
      "Sergio Expósito Martínez | Fullstack Mobile App Developer",

    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.aria": "Navigation bar",
    "nav.openMenu": "Open menu",

    "lang.label": "Language",

    "hero.role": "Fullstack Mobile App Developer",

    "btn.contact": "Get in touch",
    "btn.cv": "My CV",

    "about.title": "About me",
    "about.p1":
      "I'm Sergio, a fullstack developer specialized in mobile applications. Since 2023 I've worked at Hyliacom building cross-platform apps with Flutter, along with desktop solutions and backend services on EasyClient, an in-house framework developed with PHP and MySQL.",
    "about.p2":
      "I enjoy building polished products with great performance and attention to detail, and I'm always learning new technologies —from Dart and TypeScript to React, Angular or Laravel— to give my best on every project.",

    "career.title": "Career",
    "career.present": "Present",

    "skills.title": "Skills",

    "studies.degree": "Master's in Fullstack Web Development",
    "studies.body":
      "During the Master's in Fullstack Web Development, I gained skills in HTML5, CSS, SASS, Bootstrap, JavaScript and PHP. I built SPA applications with React, Angular and Laravel, managed databases with MySQL and MongoDB, and developed APIs and web services. I also worked with cloud services (AWS, Azure, Google Cloud) and applied agile methodologies such as SCRUM and Kanban.",

    "contact.title": "Contact",
    "contact.intro": "Drop me an email and let's chat 🙂",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send",
    "contact.err.campos": "Please fill in all fields before sending.",
    "contact.err.envio":
      "There was a problem sending your message. Please try again in a few minutes.",
    "contact.err.generic":
      "An error occurred while sending the message. Please try again.",

    "projects.title": "Projects",
    "projects.article": "Article",
    "projects.viewProject": "View project",
    "projects.viewPlay": "View on Google Play",

    "blog.title": "Articles",
    "blog.readArticle": "Read article",
    "reading.suffix": "read",

    "post.back": "Back to blog",
    "post.relatedTitle": "Related project",
    "post.relatedDesc": "Explore the project that inspired this article",
    "post.relatedView": "View",
    "post.notFoundTitle": "Article not found",
    "post.notFoundDesc":
      "The article you're looking for doesn't exist or has been moved.",
    "post.moreArticles": "See more articles",
    "post.liked": "Did you like this article?",
    "post.share": "Share article",
    "post.shareOptions": "Share options",
    "post.copyLink": "Copy link",
    "post.emailLabel": "Email",
    "post.contentError": "Error loading the article content.",
    "post.linkCopied": "Link copied",
    "post.actionFailed": "The action could not be completed",

    "success.title": "Message Sent",
    "success.subtitle": "You'll be redirected to the homepage shortly...",

    "notfound.title": "Page not found",
    "notfound.desc": "The page you're looking for doesn't exist or has been moved.",
    "notfound.home": "Back to home",
  },

  fr: {
    "meta.description":
      "Sergio Expósito Martínez | Développeur Fullstack d'applications mobiles",

    "nav.home": "Accueil",
    "nav.projects": "Projets",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.aria": "Barre de navigation",
    "nav.openMenu": "Ouvrir le menu",

    "lang.label": "Langue",

    "hero.role": "Développeur Fullstack d'applications mobiles",

    "btn.contact": "Contactez-moi",
    "btn.cv": "Mon CV",

    "about.title": "À propos",
    "about.p1":
      "Je suis Sergio, développeur fullstack spécialisé dans les applications mobiles. Depuis 2023, je travaille chez Hyliacom à créer des applications multiplateformes avec Flutter, ainsi que des solutions desktop et des services backend sur EasyClient, un framework maison développé en PHP et MySQL.",
    "about.p2":
      "J'aime concevoir des produits soignés, performants et attentifs aux détails, et apprendre sans cesse de nouvelles technologies —de Dart et TypeScript à React, Angular ou Laravel— pour donner le meilleur sur chaque projet.",

    "career.title": "Parcours",
    "career.present": "Présent",

    "skills.title": "Compétences",

    "studies.degree": "Master en Développement Web Fullstack",
    "studies.body":
      "Pendant le Master en Développement Web Fullstack, j'ai acquis des compétences en HTML5, CSS, SASS, Bootstrap, JavaScript et PHP. J'ai créé des applications SPA avec React, Angular et Laravel, géré des bases de données avec MySQL et MongoDB, et développé des API et des services web. J'ai également utilisé des services cloud (AWS, Azure, Google Cloud) et appliqué des méthodologies agiles comme SCRUM et Kanban.",

    "contact.title": "Contact",
    "contact.intro": "Contactez-moi par e-mail et discutons 🙂",
    "contact.name": "Nom",
    "contact.email": "E-mail",
    "contact.subject": "Sujet",
    "contact.message": "Message",
    "contact.send": "Envoyer",
    "contact.err.campos": "Veuillez remplir tous les champs avant d'envoyer.",
    "contact.err.envio":
      "Un problème est survenu lors de l'envoi du message. Veuillez réessayer dans quelques minutes.",
    "contact.err.generic":
      "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.",

    "projects.title": "Projets",
    "projects.article": "Article",
    "projects.viewProject": "Voir le projet",
    "projects.viewPlay": "Voir sur Google Play",

    "blog.title": "Articles",
    "blog.readArticle": "Lire l'article",
    "reading.suffix": "de lecture",

    "post.back": "Retour au blog",
    "post.relatedTitle": "Projet associé",
    "post.relatedDesc": "Découvrez le projet à l'origine de cet article",
    "post.relatedView": "Voir",
    "post.notFoundTitle": "Article introuvable",
    "post.notFoundDesc":
      "L'article que vous cherchez n'existe pas ou a été déplacé.",
    "post.moreArticles": "Voir plus d'articles",
    "post.liked": "Vous avez aimé cet article ?",
    "post.share": "Partager l'article",
    "post.shareOptions": "Options de partage",
    "post.copyLink": "Copier le lien",
    "post.emailLabel": "E-mail",
    "post.contentError": "Erreur lors du chargement du contenu de l'article.",
    "post.linkCopied": "Lien copié",
    "post.actionFailed": "Impossible d'effectuer l'action",

    "success.title": "Message envoyé",
    "success.subtitle": "Vous allez être redirigé vers l'accueil sous peu...",

    "notfound.title": "Page introuvable",
    "notfound.desc": "La page que vous cherchez n'existe pas ou a été déplacée.",
    "notfound.home": "Retour à l'accueil",
  },

  it: {
    "meta.description":
      "Sergio Expósito Martínez | Sviluppatore Fullstack di applicazioni mobili",

    "nav.home": "Home",
    "nav.projects": "Progetti",
    "nav.blog": "Blog",
    "nav.contact": "Contatti",
    "nav.aria": "Barra di navigazione",
    "nav.openMenu": "Apri menu",

    "lang.label": "Lingua",

    "hero.role": "Sviluppatore Fullstack di applicazioni mobili",

    "btn.contact": "Contattami",
    "btn.cv": "Il mio CV",

    "about.title": "Chi sono",
    "about.p1":
      "Sono Sergio, sviluppatore fullstack specializzato in applicazioni mobili. Dal 2023 lavoro in Hyliacom creando app multipiattaforma con Flutter, oltre a soluzioni desktop e servizi backend su EasyClient, un framework proprietario sviluppato in PHP e MySQL.",
    "about.p2":
      "Mi piace costruire prodotti curati, performanti e attenti ai dettagli, e imparare sempre nuove tecnologie —da Dart e TypeScript a React, Angular o Laravel— per dare il meglio in ogni progetto.",

    "career.title": "Percorso",
    "career.present": "Presente",

    "skills.title": "Competenze",

    "studies.degree": "Master in Sviluppo Web Fullstack",
    "studies.body":
      "Durante il Master in Sviluppo Web Fullstack ho acquisito competenze in HTML5, CSS, SASS, Bootstrap, JavaScript e PHP. Ho creato applicazioni SPA con React, Angular e Laravel, gestito database con MySQL e MongoDB e sviluppato API e web service. Ho inoltre utilizzato servizi cloud (AWS, Azure, Google Cloud) e applicato metodologie agili come SCRUM e Kanban.",

    "contact.title": "Contatti",
    "contact.intro": "Scrivimi un'email e parliamone 🙂",
    "contact.name": "Nome",
    "contact.email": "Email",
    "contact.subject": "Oggetto",
    "contact.message": "Messaggio",
    "contact.send": "Invia",
    "contact.err.campos": "Per favore, compila tutti i campi prima di inviare.",
    "contact.err.envio":
      "Si è verificato un problema durante l'invio del messaggio. Riprova tra qualche minuto.",
    "contact.err.generic":
      "Si è verificato un errore durante l'invio del messaggio. Riprova.",

    "projects.title": "Progetti",
    "projects.article": "Articolo",
    "projects.viewProject": "Vedi progetto",
    "projects.viewPlay": "Vedi su Google Play",

    "blog.title": "Articoli",
    "blog.readArticle": "Leggi l'articolo",
    "reading.suffix": "di lettura",

    "post.back": "Torna al blog",
    "post.relatedTitle": "Progetto correlato",
    "post.relatedDesc": "Esplora il progetto che ha ispirato questo articolo",
    "post.relatedView": "Vedi",
    "post.notFoundTitle": "Articolo non trovato",
    "post.notFoundDesc": "L'articolo che cerchi non esiste o è stato spostato.",
    "post.moreArticles": "Vedi altri articoli",
    "post.liked": "Ti è piaciuto questo articolo?",
    "post.share": "Condividi l'articolo",
    "post.shareOptions": "Opzioni di condivisione",
    "post.copyLink": "Copia link",
    "post.emailLabel": "Email",
    "post.contentError": "Errore durante il caricamento del contenuto dell'articolo.",
    "post.linkCopied": "Link copiato",
    "post.actionFailed": "Impossibile completare l'azione",

    "success.title": "Messaggio inviato",
    "success.subtitle": "Sarai reindirizzato alla home page a breve...",

    "notfound.title": "Pagina non trovata",
    "notfound.desc": "La pagina che cerchi non esiste o è stata spostata.",
    "notfound.home": "Torna alla home",
  },
};
