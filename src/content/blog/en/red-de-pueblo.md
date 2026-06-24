---
title: "Red de Pueblo: Connecting Rural Communities"
description: "Full development of a mobile application to connect Spanish rural communities with local services and community communication"
pubDate: 2024-02-15
tags: ["flutter", "dart", "firebase"]
image: "/images/redpueblo.webp"
projectRelated: "Red de pueblo"
---

# Red de Pueblo: Technology at the service of rural communities 🏘️

## Introduction

In Spain, rural communities face daily challenges related to connectivity and access to basic services. Geographic dispersion and the lack of dedicated digital platforms make it difficult for residents to communicate with one another and for local businesses to gain visibility. Faced with this reality, there emerged a need for a technological solution that could bring people closer together and drive local development.

## Development and features

Red de Pueblo is a cross-platform mobile application built with Flutter, designed to connect residents of rural areas and make it easier to access nearby services. The project was built around a clear vision: to deliver a simple, accessible, and genuinely useful experience for users of all ages and levels of technical familiarity.

The app integrates an interactive map powered by Google Maps, where local services appear geolocated and categorized, enabling proximity-based searches. The real-time chat system, built on WebSockets and Firebase, enables instant communication between neighbors, with support for offline messages and push notifications segmented by location and user preferences.

The technical architecture relies on Provider for state management, Isar as the local NoSQL database, and Firebase for authentication, synchronization, and notifications. The UI design prioritizes readability and ease of use, tailored to the needs of rural users.

During development, several challenges were tackled: progressive location permission handling, performance optimization through pagination and asynchronous image loading, and testing under real-world conditions with limited connectivity.

## Results and lessons learned

The launch on Android and iOS was met with enthusiasm by rural communities, achieving steady adoption and a high push notification delivery rate. The real-time chat proved to be low-latency and robust, while offline functionality allowed the app to be used in areas with limited coverage.

Key takeaways included the importance of designing applications offline-first, the effectiveness of Provider and Isar in medium-complexity projects, and the value of testing with real users. Multi-method authentication proved essential for driving adoption, and the clean UI design lowered the barrier to entry for users less familiar with technology.

## Conclusions

The project not only met all of its technical objectives, but also created real value for its users — bridging the gap between rural residents and improving access to local services.

You can download the app from [Google Play](https://play.google.com/store/apps/details?id=com.hyliaapps.reddepueblo) and the [App Store](https://apps.apple.com/us/app/red-de-pueblo/id6744020049).

We even made it on TV! ☺️ On September 18, 2025, [RTVE Aragón](https://www.rtve.es/play/videos/noticias-aragon/) aired a feature story about the app, which you can watch [here](https://www.rtve.es/play/videos/noticias-aragon/noticias-aragon-18-09-25/16734522/).

I want to express my sincere gratitude to [Hyliacom](https://hyliacom.es/), the company where I currently work and that has been the cornerstone behind bringing this project to life. Their trust in my work and the culture of innovation they foster have created the perfect environment for my professional growth. Over these years, I have had the freedom to explore emerging technologies, experiment with complex architectures, and tackle real-world challenges that have shaped my experience as a Flutter developer — turning every project into an opportunity to push myself further.

---
