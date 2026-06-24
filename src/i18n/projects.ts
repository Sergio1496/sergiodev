import type { Lang } from "./ui";

type ProjectText = { title?: string; description: string };

/**
 * Traducciones de los proyectos por id (nombre de fichero sin extensión).
 * Solo se traduce título/descripción; el español vive en el Markdown.
 * Si falta `title`, se usa el del Markdown (nombre de marca).
 */
export const projectTranslations: Record<
  string,
  Partial<Record<Lang, ProjectText>>
> = {
  "cortex-crm": {
    en: {
      description:
        "A comprehensive management platform for development studios: it centralizes client projects, automates server deployments and invoicing, and monitors production status in real time.",
    },
    fr: {
      description:
        "Une plateforme de gestion complète pour les studios de développement : elle centralise les projets clients, automatise les déploiements serveur et la facturation, et surveille l'état de production en temps réel.",
    },
    it: {
      description:
        "Una piattaforma di gestione completa per studi di sviluppo: centralizza i progetti dei clienti, automatizza i deployment sui server e la fatturazione, e monitora lo stato di produzione in tempo reale.",
    },
  },

  homelab: {
    en: {
      description:
        "Self-hosted infrastructure built from scratch —multiple services in Docker containers with secure remote access, automation and local AI— together with a custom mobile app to control it: energy consumption, smart devices and service status from a unified dashboard.",
    },
    fr: {
      description:
        "Infrastructure auto-hébergée montée de zéro —plusieurs services dans des conteneurs Docker avec accès distant sécurisé, automatisation et IA locale— accompagnée d'une application mobile maison pour la contrôler : consommation d'énergie, appareils connectés et état des services depuis un tableau de bord unifié.",
    },
    it: {
      description:
        "Infrastruttura self-hosted costruita da zero —diversi servizi in container Docker con accesso remoto sicuro, automazione e IA locale— insieme a un'app mobile dedicata per controllarla: consumo energetico, dispositivi smart e stato dei servizi da un pannello unificato.",
    },
  },

  readwave: {
    en: {
      title: "ReadWave (In development)",
      description:
        "This app will let users discover new books and authors using cloud-based artificial intelligence that recommends new books based on the user's tastes.",
    },
    fr: {
      title: "ReadWave (En développement)",
      description:
        "Cette application permettra aux utilisateurs de découvrir de nouveaux livres et auteurs grâce à une intelligence artificielle dans le cloud qui recommande de nouveaux livres selon les goûts de l'utilisateur.",
    },
    it: {
      title: "ReadWave (In sviluppo)",
      description:
        "Questa app permetterà agli utenti di scoprire nuovi libri e autori grazie a un'intelligenza artificiale nel cloud che consiglia nuovi libri in base ai gusti dell'utente.",
    },
  },

  redpueblo: {
    en: {
      description:
        "A cross-platform mobile app that connects Spanish rural communities, making it easier to access local services, community communication and geolocated points of interest. It includes real-time chat, push notifications, multiple authentication (Google/Apple) and interactive maps with Google Maps.",
    },
    fr: {
      description:
        "Une application mobile multiplateforme qui connecte les communautés rurales espagnoles, facilitant l'accès aux services locaux, la communication de proximité et les points d'intérêt géolocalisés. Elle inclut un chat en temps réel, des notifications push, l'authentification multiple (Google/Apple) et des cartes interactives avec Google Maps.",
    },
    it: {
      description:
        "Un'app mobile multipiattaforma che connette le comunità rurali spagnole, facilitando l'accesso ai servizi locali, la comunicazione di comunità e i punti di interesse geolocalizzati. Include chat in tempo reale, notifiche push, autenticazione multipla (Google/Apple) e mappe interattive con Google Maps.",
    },
  },

  easyclient: {
    en: {
      title: "EasyClient: Store Management",
      description:
        "Hyliacom clients can manage their stores from this app, viewing sales, products and customers along with a direct support chat. The chat connects through Hyliacom's web service.",
    },
    fr: {
      title: "EasyClient : Gestion de boutiques",
      description:
        "Les clients d'Hyliacom peuvent gérer leurs boutiques depuis cette application : suivi des ventes, des produits et des clients, avec un chat d'assistance directe. Le chat utilise une connexion au web service d'Hyliacom.",
    },
    it: {
      title: "EasyClient: Gestione negozi",
      description:
        "I clienti di Hyliacom possono gestire i propri negozi da questa app, visualizzando vendite, prodotti e clienti insieme a una chat di assistenza diretta. La chat si collega tramite il web service di Hyliacom.",
    },
  },

  "easyclient-pos": {
    en: {
      title: "EasyClient POS (In development)",
      description:
        "A desktop application for managing receipt and label printers. It connects to the EasyClient framework via WebSockets on a Node.js server to print tickets and labels sent directly from the web.",
    },
    fr: {
      title: "EasyClient POS (En développement)",
      description:
        "Une application desktop pour la gestion des imprimantes de tickets et d'étiquettes. Elle se connecte au framework EasyClient via WebSockets sur un serveur Node.js pour imprimer les tickets et étiquettes envoyés directement depuis le web.",
    },
    it: {
      title: "EasyClient POS (In sviluppo)",
      description:
        "Un'applicazione desktop per la gestione di stampanti di scontrini ed etichette. Si collega al framework EasyClient tramite WebSockets su un server Node.js per stampare scontrini ed etichette inviati direttamente dal web.",
    },
  },

  "cafes-lua": {
    en: {
      description:
        "A project developed for the Galician company Cafés Lúa. It is a CRM for managing the appointments and routes of sales reps and delivery drivers.",
    },
    fr: {
      description:
        "Projet développé pour l'entreprise galicienne Cafés Lúa. Il s'agit d'un CRM pour gérer les rendez-vous et les tournées des commerciaux et des livreurs.",
    },
    it: {
      description:
        "Progetto sviluppato per l'azienda galiziana Cafés Lúa. Si tratta di un CRM per gestire gli appuntamenti e i percorsi di commerciali e fattorini.",
    },
  },

  "maat-mirror": {
    en: {
      description:
        "A prototype for opticians that lets customers try on glasses without doing it physically. It uses technologies such as MLKit for facial recognition and DeepAR for rendering the glasses.",
    },
    fr: {
      description:
        "Un prototype pour opticiens qui permet aux clients d'essayer des lunettes sans le faire physiquement. Il utilise des technologies comme MLKit pour la reconnaissance faciale et DeepAR pour le rendu des lunettes.",
    },
    it: {
      description:
        "Un prototipo per ottici che consente ai clienti di provare gli occhiali senza farlo fisicamente. Utilizza tecnologie come MLKit per il riconoscimento facciale e DeepAR per il rendering degli occhiali.",
    },
  },

  "valencia-ultramar": {
    en: {
      description:
        "A pastry shop in Ferrol (A Coruña) with over 50 years of experience. In this app you can browse the product catalogue with a design adapted to tablets and phones.",
    },
    fr: {
      description:
        "Une pâtisserie à Ferrol (A Coruña) avec plus de 50 ans d'expérience. Dans cette application, on peut consulter le catalogue de produits avec un design adapté aux tablettes et aux mobiles.",
    },
    it: {
      description:
        "Una pasticceria a Ferrol (A Coruña) con oltre 50 anni di esperienza. In questa app si può consultare il catalogo dei prodotti con un design adattato a tablet e smartphone.",
    },
  },
};

/** Devuelve título/descripción del proyecto en el idioma dado (es = Markdown). */
export function getProjectText(
  id: string,
  lang: Lang,
  fallback: { title: string; description: string }
): { title: string; description: string } {
  const tr = projectTranslations[id]?.[lang];
  return {
    title: tr?.title ?? fallback.title,
    description: tr?.description ?? fallback.description,
  };
}
