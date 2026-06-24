import type { Lang } from "./ui";

export type Job = {
  date: string;
  role: string;
  lines: string[];
  sub?: Job[];
};

export const career: Record<Lang, Job[]> = {
  es: [
    {
      date: "Enero 2023 - Presente",
      role: "Desarrollador de aplicaciones móviles en Hyliacom",
      lines: [
        "Desarrollo de aplicaciones móviles con frameworks como Flutter e Ionic Framework",
        "Desarrollo de una aplicación de escritorio con Flutter para conectar impresoras de etiquetas y tickets con el framework EasyClient",
        "Mantenimiento del webservice sobre el framework a medida EasyClient con PHP y MySQL",
      ],
      sub: [
        {
          date: "Agosto 2022 - Diciembre 2022",
          role: "Desarrollador web en Hyliacom",
          lines: [
            "Creación de verticales con Wordpress",
            "Mantenimiento de sitios web con Wordpress y PrestaShop",
            "Mantenimiento de plugins a medida con PHP",
            "Administración de bases de datos con MySQL",
          ],
        },
      ],
    },
    {
      date: "Junio 2022 - Agosto 2022",
      role: "Desarrollador web en Snollocer Informática",
      lines: [
        "Desarrollador web encargado de la creación y mantenimiento de páginas web con Wordpress",
        "Aptitudes: Elementor · CSS · PHP · WordPress · JavaScript",
      ],
    },
    {
      date: "Noviembre 2021 - Febrero 2022",
      role: "Técnico informático en Universidad Politécnica de Valencia",
      lines: [
        "Técnico informático encargado del edificio Biblioteca de Ciencias Sociales Gregori Maians en la Universidad Politécnica de Valencia, con las siguientes funciones:",
        "Mantenimiento de equipos con Windows/CentOS",
        "Montaje de hardware",
        "Instalación y configuración de sistemas operativos",
        "Instalación y configuración de software",
        "Instalación de lectores de código de barras",
        "Soporte informático al profesorado en los aularios",
      ],
    },
    {
      date: "Marzo 2018 - Junio 2018",
      role: "Desarrollador de aplicaciones web en Else Systems",
      lines: [
        "Prácticas como desarrollador web en la creación y mantenimiento de sitios en Wordpress, PrestaShop, Angular y Symfony. Funciones principales:",
        "Desarrollo de front-end",
        "Desarrollo de back-end en PHP",
        "Desarrollo de aplicaciones móviles con Cordova",
        "Administración de bases de datos con MySQL",
      ],
    },
    {
      date: "Marzo 2015 - Junio 2015",
      role: "Técnico de Hardware y Software en Gregal",
      lines: [
        "Prácticas como técnico informático encargado del mantenimiento de equipos y la administración de servidores con Windows Server",
        "Montaje y administración de servidores en almacenes con Windows Server",
        "Montaje y mantenimiento de equipos de trabajo",
        "Montaje de lectores de códigos de barras para los puestos de trabajo",
      ],
    },
  ],

  en: [
    {
      date: "January 2023 - Present",
      role: "Mobile App Developer at Hyliacom",
      lines: [
        "Mobile app development with frameworks such as Flutter and Ionic Framework",
        "Built a desktop application with Flutter to connect label and receipt printers to the EasyClient framework",
        "Maintenance of the web service on the custom EasyClient framework with PHP and MySQL",
      ],
      sub: [
        {
          date: "August 2022 - December 2022",
          role: "Web Developer at Hyliacom",
          lines: [
            "Building vertical sites with WordPress",
            "Maintenance of websites with WordPress and PrestaShop",
            "Maintenance of custom plugins with PHP",
            "Database administration with MySQL",
          ],
        },
      ],
    },
    {
      date: "June 2022 - August 2022",
      role: "Web Developer at Snollocer Informática",
      lines: [
        "Web developer in charge of building and maintaining websites with WordPress",
        "Skills: Elementor · CSS · PHP · WordPress · JavaScript",
      ],
    },
    {
      date: "November 2021 - February 2022",
      role: "IT Technician at the Polytechnic University of Valencia",
      lines: [
        "IT technician in charge of the Gregori Maians Social Sciences Library building at the Polytechnic University of Valencia, with the following duties:",
        "Maintenance of Windows/CentOS computers",
        "Hardware assembly",
        "Operating system installation and configuration",
        "Software installation and configuration",
        "Barcode scanner installation",
        "IT support for teaching staff in the lecture halls",
      ],
    },
    {
      date: "March 2018 - June 2018",
      role: "Web Application Developer at Else Systems",
      lines: [
        "Internship as a web developer building and maintaining sites with WordPress, PrestaShop, Angular and Symfony. Main duties:",
        "Front-end development",
        "Back-end development in PHP",
        "Mobile app development with Cordova",
        "Database administration with MySQL",
      ],
    },
    {
      date: "March 2015 - June 2015",
      role: "Hardware and Software Technician at Gregal",
      lines: [
        "Internship as an IT technician in charge of equipment maintenance and server administration with Windows Server",
        "Setup and administration of warehouse servers with Windows Server",
        "Assembly and maintenance of workstations",
        "Installation of barcode scanners for workstations",
      ],
    },
  ],

  fr: [
    {
      date: "Janvier 2023 - Présent",
      role: "Développeur d'applications mobiles chez Hyliacom",
      lines: [
        "Développement d'applications mobiles avec des frameworks comme Flutter et Ionic Framework",
        "Développement d'une application desktop avec Flutter pour connecter des imprimantes d'étiquettes et de tickets au framework EasyClient",
        "Maintenance du web service sur le framework sur mesure EasyClient avec PHP et MySQL",
      ],
      sub: [
        {
          date: "Août 2022 - Décembre 2022",
          role: "Développeur web chez Hyliacom",
          lines: [
            "Création de sites verticaux avec WordPress",
            "Maintenance de sites web avec WordPress et PrestaShop",
            "Maintenance de plugins sur mesure avec PHP",
            "Administration de bases de données avec MySQL",
          ],
        },
      ],
    },
    {
      date: "Juin 2022 - Août 2022",
      role: "Développeur web chez Snollocer Informática",
      lines: [
        "Développeur web chargé de la création et de la maintenance de sites web avec WordPress",
        "Compétences : Elementor · CSS · PHP · WordPress · JavaScript",
      ],
    },
    {
      date: "Novembre 2021 - Février 2022",
      role: "Technicien informatique à l'Université Polytechnique de Valence",
      lines: [
        "Technicien informatique responsable du bâtiment de la Bibliothèque de Sciences Sociales Gregori Maians à l'Université Polytechnique de Valence, avec les fonctions suivantes :",
        "Maintenance des postes sous Windows/CentOS",
        "Montage de matériel",
        "Installation et configuration de systèmes d'exploitation",
        "Installation et configuration de logiciels",
        "Installation de lecteurs de codes-barres",
        "Support informatique au personnel enseignant dans les salles de cours",
      ],
    },
    {
      date: "Mars 2018 - Juin 2018",
      role: "Développeur d'applications web chez Else Systems",
      lines: [
        "Stage en tant que développeur web pour la création et la maintenance de sites avec WordPress, PrestaShop, Angular et Symfony. Fonctions principales :",
        "Développement front-end",
        "Développement back-end en PHP",
        "Développement d'applications mobiles avec Cordova",
        "Administration de bases de données avec MySQL",
      ],
    },
    {
      date: "Mars 2015 - Juin 2015",
      role: "Technicien matériel et logiciel chez Gregal",
      lines: [
        "Stage en tant que technicien informatique chargé de la maintenance des équipements et de l'administration de serveurs sous Windows Server",
        "Montage et administration de serveurs en entrepôt sous Windows Server",
        "Montage et maintenance de postes de travail",
        "Installation de lecteurs de codes-barres pour les postes de travail",
      ],
    },
  ],

  it: [
    {
      date: "Gennaio 2023 - Presente",
      role: "Sviluppatore di applicazioni mobili presso Hyliacom",
      lines: [
        "Sviluppo di applicazioni mobili con framework come Flutter e Ionic Framework",
        "Sviluppo di un'applicazione desktop con Flutter per collegare stampanti di etichette e scontrini al framework EasyClient",
        "Manutenzione del web service sul framework su misura EasyClient con PHP e MySQL",
      ],
      sub: [
        {
          date: "Agosto 2022 - Dicembre 2022",
          role: "Sviluppatore web presso Hyliacom",
          lines: [
            "Creazione di siti verticali con WordPress",
            "Manutenzione di siti web con WordPress e PrestaShop",
            "Manutenzione di plugin su misura con PHP",
            "Amministrazione di database con MySQL",
          ],
        },
      ],
    },
    {
      date: "Giugno 2022 - Agosto 2022",
      role: "Sviluppatore web presso Snollocer Informática",
      lines: [
        "Sviluppatore web responsabile della creazione e manutenzione di siti web con WordPress",
        "Competenze: Elementor · CSS · PHP · WordPress · JavaScript",
      ],
    },
    {
      date: "Novembre 2021 - Febbraio 2022",
      role: "Tecnico informatico presso l'Università Politecnica di Valencia",
      lines: [
        "Tecnico informatico responsabile dell'edificio della Biblioteca di Scienze Sociali Gregori Maians presso l'Università Politecnica di Valencia, con le seguenti mansioni:",
        "Manutenzione di postazioni con Windows/CentOS",
        "Montaggio dell'hardware",
        "Installazione e configurazione di sistemi operativi",
        "Installazione e configurazione di software",
        "Installazione di lettori di codici a barre",
        "Supporto informatico ai docenti nelle aule",
      ],
    },
    {
      date: "Marzo 2018 - Giugno 2018",
      role: "Sviluppatore di applicazioni web presso Else Systems",
      lines: [
        "Tirocinio come sviluppatore web nella creazione e manutenzione di siti con WordPress, PrestaShop, Angular e Symfony. Mansioni principali:",
        "Sviluppo front-end",
        "Sviluppo back-end in PHP",
        "Sviluppo di applicazioni mobili con Cordova",
        "Amministrazione di database con MySQL",
      ],
    },
    {
      date: "Marzo 2015 - Giugno 2015",
      role: "Tecnico hardware e software presso Gregal",
      lines: [
        "Tirocinio come tecnico informatico responsabile della manutenzione delle apparecchiature e dell'amministrazione dei server con Windows Server",
        "Montaggio e amministrazione di server in magazzino con Windows Server",
        "Montaggio e manutenzione delle postazioni di lavoro",
        "Installazione di lettori di codici a barre per le postazioni di lavoro",
      ],
    },
  ],
};
