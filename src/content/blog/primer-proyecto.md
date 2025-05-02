---
title: "Mi primer proyecto con Flutter"
description: "Compartiendo mi experiencia desarrollando mi primera aplicación móvil con Flutter"
pubDate: 2025-03-01
tags: ["flutter", "dart", "mobile", "desarrollo", "android", "ios"]
image: "/images/redpueblo.webp"
projectRelated: "Red de pueblo"
---

# Mi primer proyecto con Flutter: Creando Red de Pueblo 📱

![Red de Pueblo App](/images/redpueblo.webp)

Flutter ha revolucionado la forma en que desarrollamos aplicaciones móviles, permitiéndonos crear experiencias nativas tanto para Android como para iOS desde una única base de código. En este artículo, comparto mi experiencia creando **Red de Pueblo**, una aplicación diseñada para conectar a personas en zonas rurales de España.

## 🚀 ¿Por qué elegí Flutter?

Mi viaje con Flutter comenzó cuando necesitaba desarrollar una aplicación móvil que fuera:

- **Multiplataforma**: Disponible tanto en Android como en iOS
- **Visualmente atractiva**: Con animaciones fluidas y una interfaz moderna
- **Rápida de desarrollar**: Con plazos ajustados, necesitaba eficiencia

Flutter cumplía todos estos requisitos con su enfoque "write once, run anywhere" y su potente sistema de widgets personalizables.

## 🔍 El concepto de Red de Pueblo

Red de Pueblo nació como una solución para un problema real: la comunicación y acceso a servicios en zonas rurales de España. La aplicación permite a los usuarios:

- Comunicarse con otros habitantes de la zona
- Compartir y descubrir servicios locales
- Localizar puntos de interés cercanos
- Crear eventos comunitarios

## 💻 Aspectos técnicos destacados

### Arquitectura limpia

Implementé una arquitectura basada en principios SOLID y Clean Architecture:

```dart
// Ejemplo simplificado de la estructura del proyecto
/lib
  /core
    /error
    /network
    /utils
  /data
    /datasources
    /models
    /repositories
  /domain
    /entities
    /repositories
    /usecases
  /presentation
    /bloc
    /pages
    /widgets
  main.dart
```

### Gestión de estado con BLoC

El patrón BLoC (Business Logic Component) resultó ideal para manejar el estado de la aplicación:

```dart
class LocationBloc extends Bloc<LocationEvent, LocationState> {
  final GetNearbyPlacesUsecase getNearbyPlaces;

  LocationBloc({required this.getNearbyPlaces})
      : super(LocationInitial()) {
    on<FetchNearbyPlaces>(_onFetchNearbyPlaces);
  }

  Future<void> _onFetchNearbyPlaces(
    FetchNearbyPlaces event,
    Emitter<LocationState> emit
  ) async {
    emit(LocationLoading());

    final result = await getNearbyPlaces(
      Params(latitude: event.lat, longitude: event.lng)
    );

    result.fold(
      (failure) => emit(LocationError(message: failure.message)),
      (places) => emit(LocationLoaded(places: places))
    );
  }
}
```

### Integración de Google Maps

Un aspecto crucial de Red de Pueblo es la geolocalización. Integrar Google Maps fue fundamental:

```dart
class MapScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return BlocBuilder<LocationBloc, LocationState>(
      builder: (context, state) {
        if (state is LocationLoaded) {
          return GoogleMap(
            initialCameraPosition: CameraPosition(
              target: LatLng(state.userLocation.latitude,
                            state.userLocation.longitude),
              zoom: 14.0,
            ),
            markers: state.places.map((place) =>
              Marker(
                markerId: MarkerId(place.id),
                position: LatLng(place.latitude, place.longitude),
                infoWindow: InfoWindow(title: place.name),
              )
            ).toSet(),
            onMapCreated: (controller) {
              // Configuración adicional del mapa
            },
          );
        }

        return Center(child: CircularProgressIndicator());
      },
    );
  }
}
```

> **Nota:** Para usar Google Maps en Flutter, necesitas configurar las API keys en los archivos específicos de cada plataforma.

## 🔥 Desafíos y soluciones

### Optimización de rendimiento

La carga de imágenes y datos de ubicación podía ralentizar la aplicación. Implementé:

1. **Carga perezosa de imágenes**: usando `cached_network_image`
2. **Paginación** para listas de contenido extensas
3. **Almacenamiento en caché** de datos frecuentes con `Hive`

### Modo offline

Un requisito importante era que la app funcionara con conectividad limitada:

```dart
class NetworkAwareRepository<T> implements Repository<T> {
  final LocalDataSource localDataSource;
  final RemoteDataSource remoteDataSource;
  final NetworkInfo networkInfo;

  // ...

  @override
  Future<Result<List<T>>> getItems() async {
    if (await networkInfo.isConnected) {
      try {
        final remoteItems = await remoteDataSource.getItems();
        await localDataSource.cacheItems(remoteItems);
        return Right(remoteItems);
      } catch (e) {
        return Left(ServerFailure());
      }
    } else {
      try {
        final localItems = await localDataSource.getLastItems();
        return Right(localItems);
      } catch (e) {
        return Left(CacheFailure());
      }
    }
  }
}
```

## 📊 Resultados y aprendizajes

Tras el lanzamiento de Red de Pueblo, los resultados fueron muy positivos:

- **+1,000 descargas** en el primer mes
- **4.7 estrellas** de valoración media
- **85% de retención** de usuarios después de la primera semana

### Lecciones aprendidas

1. **Prototipado rápido**: Flutter permite iterar rápidamente el diseño.
2. **Pruebas tempranas**: Es crucial probar en dispositivos reales desde el principio.
3. **Rendimiento**: Vigilar el uso de memoria y animaciones complejas.
4. **Accesibilidad**: Diseñar pensando en todos los usuarios desde el inicio.

## 🚀 Próximos pasos

Este primer proyecto con Flutter me ha inspirado a seguir mejorando:

- Implementación de características sociales más avanzadas
- Integración con plataformas de servicios locales
- Desarrollo de una versión web con Flutter Web

## 📚 Recursos útiles para empezar con Flutter

- [Documentación oficial de Flutter](https://flutter.dev/docs)
- [Flutter Cookbook](https://flutter.dev/docs/cookbook)
- [Curso de Flutter de App Brewery](https://www.appbrewery.co/p/flutter-development-bootcamp-with-dart)
- [Flutter Community en Medium](https://medium.com/flutter-community)

---

¿Has desarrollado alguna aplicación con Flutter? ¿Qué desafíos encontraste? ¡Comparte tu experiencia en los comentarios!
