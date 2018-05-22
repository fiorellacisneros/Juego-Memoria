# Memory Game

Este juego permite mezclar entretenimiento con desarrollo de la memoria, ya que nos impele a recordar lo más posible las posiciones de las cartas reveladas anteriormente para poder ganar.
El reto fue proporcionado por Oeschle para evaluar mis habilidades como Front-End Developer.

## Requisitos
- [x] Mostrar 8 cartas sobre la mesa
- [x] Las cartas siempre tienen pareja, ningun queda sola.
- [x] Las cartas cargan aleatoriamente, tanto el tipo y número como el orden sobre la mesa
- [x] Si encontramos un par, las cartas desaparecerán en su mismo sitio sin moverse las demás
- [x] Solo son pares las cartas del mismo número y tipo/palo
- [x] Si se encontraron todos los pares mostrar un mensaje de juego terminado.

## ¿Cómo jugar?

Para poder accionar el juego, primero hay que desplegar el sistema:
- Descargar este repositorio (mediante el botón **Clonar|Descargar**).
- Correr **ng serve** en la consola para iniciar el servidor.
- En el explorador, colocar la dirección **http://localhost:4200/**.
- La aplicación se recargará automáticamente si se cambia alguno de los archivos fuente.

Pasos del juego:
- Hacer click en una carta para voltearla y descubrir su valor.
- Se debe adivinar el par oculto de la carta previamente descubierta.
- El número de aciertos va incrementando cuando hacen match las imágenes.
- El jugador tiene 12 intentos.
- El juego termina cuando todas las cartas hacen pares o cuando el jugador se queda sin intentos.

## Implementación

Para desarrollar este juego, se hizo uso de Angular CLI versión 6.0.3.
Trabajado de manera local, se hicieron las pruebas de manera interna para verificar las funcionabilidades de la misma.


Para hacerme llegar observaciones y alcances acerca de este desarrollo, por favor sírvanse escribir a mi correo personal: mfcisnerosr@gmail.com
Siempre estoy en constante mejora, el feedback siempre es bien recibido.


---
Memory Game, desarrollado por Fiorella Cisneros. Lima, 2018.
