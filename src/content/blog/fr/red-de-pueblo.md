---
title: "Red de Pueblo : Connecter les communautés rurales"
description: "Développement complet d'une application mobile pour connecter les communautés rurales espagnoles aux services locaux et à la communication de proximité"
pubDate: 2024-02-15
tags: ["flutter", "dart", "firebase"]
image: "/images/redpueblo.webp"
projectRelated: "Red de pueblo"
---

# Red de Pueblo : La technologie au service des communautés rurales 🏘️

## Introduction

En Espagne, les communautés rurales font face chaque jour à des défis liés à la connectivité et à l'accès aux services essentiels. La dispersion géographique et le manque de plateformes numériques adaptées compliquent la communication entre habitants et la visibilité des commerces locaux. Face à cette réalité, une solution technologique s'imposait pour rapprocher les personnes et renforcer le développement local.

## Développement et fonctionnalités

Red de Pueblo est une application mobile multiplateforme développée avec Flutter, conçue pour mettre en relation les habitants des zones rurales et faciliter l'accès aux services de proximité. Le projet a été pensé avec un objectif clair : offrir une expérience simple, accessible et utile pour des utilisateurs de tous âges et de tous niveaux technologiques.

L'application intègre une carte interactive basée sur Google Maps, où les services locaux apparaissent géolocalisés et catégorisés, permettant des recherches par proximité. Le système de chat en temps réel, construit sur WebSockets et Firebase, favorise la communication instantanée entre voisins, avec prise en charge des messages offline et des notifications push segmentées selon la localisation et les préférences.

L'architecture technique repose sur Provider pour la gestion d'état, Isar comme base de données locale NoSQL et Firebase pour l'authentification, la synchronisation et les notifications. Le design de l'interface privilégie la lisibilité et la facilité d'utilisation, en s'adaptant aux besoins des utilisateurs ruraux.

Au cours du développement, plusieurs défis ont été relevés : la gestion progressive des permissions de localisation, l'optimisation des performances via la pagination et le chargement asynchrone des images, ainsi que la réalisation de tests dans des conditions réelles de connectivité limitée.

## Résultats et enseignements

Le lancement sur Android et iOS a été accueilli avec enthousiasme par les communautés rurales, avec une adoption croissante et un taux de délivrance élevé pour les notifications push. Le chat en temps réel s'est révélé à faible latence et robuste, tandis que la fonctionnalité offline a permis d'utiliser l'application dans des zones à couverture limitée.

Parmi les leçons retenues, on soulignera l'importance de concevoir des applications offline-first, l'efficacité de Provider et Isar sur des projets de complexité intermédiaire, et la valeur des tests avec de vrais utilisateurs. L'authentification multiple s'est révélée déterminante pour favoriser l'adoption, et le design épuré de l'interface a facilité l'accès aux utilisateurs peu à l'aise avec la technologie.

## Conclusions

Le projet a non seulement atteint tous ses objectifs techniques, mais il a également créé une valeur réelle pour ses utilisateurs, en facilitant les liens entre habitants de villages et en améliorant l'accès aux services locaux.

L'application est disponible en téléchargement sur [Google Play](https://play.google.com/store/apps/details?id=com.hyliaapps.reddepueblo) et sur l'[App Store](https://apps.apple.com/us/app/red-de-pueblo/id6744020049).

Et nous sommes passés à la télé ! ☺️ Le 18 septembre 2025, [RTVE Aragón](https://www.rtve.es/play/videos/noticias-aragon/) a réalisé un reportage sur l'application, que vous pouvez retrouver [ici](https://www.rtve.es/play/videos/noticias-aragon/noticias-aragon-18-09-25/16734522/).

Je tiens à exprimer ma sincère gratitude à [Hyliacom](https://hyliacom.es/), l'entreprise où je poursuis actuellement ma carrière et qui a constitué le pilier fondamental pour concrétiser ce projet. La confiance accordée à mon travail et la culture d'innovation qu'ils promeuvent ont créé un environnement idéal pour ma progression technique. Au fil de ces années, j'ai eu la liberté d'explorer des technologies émergentes, d'expérimenter des architectures complexes et de relever des défis concrets qui ont forgé mon expérience en tant que développeur Flutter, faisant de chaque projet une opportunité de dépassement professionnel.

---
