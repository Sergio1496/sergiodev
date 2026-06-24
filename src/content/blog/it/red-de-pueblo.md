---
title: "Red de Pueblo: Connettere le comunità rurali"
description: "Sviluppo completo di un'applicazione mobile per connettere le comunità rurali spagnole con i servizi locali e la comunicazione di comunità"
pubDate: 2024-02-15
tags: ["flutter", "dart", "firebase"]
image: "/images/redpueblo.webp"
projectRelated: "Red de pueblo"
---

# Red de Pueblo: La tecnologia al servizio delle comunità rurali 🏘️

## Introduzione

In Spagna, le comunità rurali affrontano sfide quotidiane legate alla connettività e all'accesso ai servizi di base. La dispersione geografica e la mancanza di piattaforme digitali dedicate rendono difficile la comunicazione tra gli abitanti e la visibilità delle attività locali. Di fronte a questa realtà, emerge la necessità di una soluzione tecnologica che avvicini le persone e favorisca lo sviluppo locale.

## Sviluppo e funzionalità

Red de Pueblo è un'applicazione mobile multipiattaforma realizzata con Flutter, pensata per connettere gli abitanti delle zone rurali e facilitare l'accesso ai servizi nelle vicinanze. Il progetto è stato concepito con un obiettivo chiaro: offrire un'esperienza semplice, accessibile e utile per utenti di tutte le età e livelli di familiarità con la tecnologia.

L'app integra una mappa interattiva basata su Google Maps, dove i servizi locali appaiono geolocalizzati e categorizzati, consentendo ricerche per prossimità. Il sistema di chat in tempo reale, costruito su WebSockets e Firebase, favorisce la comunicazione istantanea tra i vicini, con supporto per messaggi offline e notifiche push segmentate in base alla posizione e alle preferenze.

L'architettura tecnica si basa su Provider per la gestione dello stato, Isar come database locale NoSQL e Firebase per autenticazione, sincronizzazione e notifiche. Il design dell'interfaccia privilegia la leggibilità e la facilità d'uso, adattandosi alle esigenze degli utenti rurali.

Durante lo sviluppo sono state affrontate sfide come la gestione graduale dei permessi di localizzazione, l'ottimizzazione delle prestazioni tramite paginazione e caricamento asincrono delle immagini, e l'esecuzione di test in condizioni reali di connettività limitata.

## Risultati e insegnamenti

Il lancio su Android e iOS è stato accolto con entusiasmo dalle comunità rurali, ottenendo un'adozione crescente e un alto tasso di consegna delle notifiche push. La chat in tempo reale ha dimostrato bassa latenza e robustezza, mentre la funzionalità offline ha permesso l'utilizzo dell'app in zone con copertura limitata.

Tra le lezioni apprese spiccano l'importanza di progettare applicazioni offline-first, l'efficacia di Provider e Isar in progetti di media complessità e il valore di effettuare test con utenti reali. L'autenticazione multipla si è rivelata fondamentale per incrementare l'adozione, e il design semplice dell'interfaccia ha facilitato l'accesso agli utenti meno familiari con la tecnologia.

## Conclusioni

Il progetto non solo ha raggiunto tutti gli obiettivi tecnici, ma ha anche creato valore concreto per i suoi utenti, facilitando la connessione tra gli abitanti dei paesi e migliorando l'accesso ai servizi locali.

L'applicazione è disponibile su [Google Play](https://play.google.com/store/apps/details?id=com.hyliaapps.reddepueblo) e [App Store](https://apps.apple.com/us/app/red-de-pueblo/id6744020049).

Siamo anche apparsi in televisione! ☺️ Il 18 settembre 2025 [RTVE Aragón](https://www.rtve.es/play/videos/noticias-aragon/) ha realizzato un servizio sull'applicazione, che puoi trovare [qui](https://www.rtve.es/play/videos/noticias-aragon/noticias-aragon-18-09-25/16734522/).

Desidero esprimere la mia sincera gratitudine a [Hyliacom](https://hyliacom.es/), l'azienda in cui attualmente sviluppo la mia carriera professionale e che è stata il pilastro fondamentale per realizzare questo progetto. La fiducia nel mio lavoro e la cultura dell'innovazione che promuovono hanno creato l'ambiente ideale per la mia crescita tecnica. In questi anni ho avuto la libertà di esplorare tecnologie emergenti, sperimentare architetture complesse e affrontare sfide reali che hanno plasmato la mia esperienza come sviluppatore Flutter, trasformando ogni progetto in un'opportunità di crescita professionale.

---
