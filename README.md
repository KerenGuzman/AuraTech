# Auratech — sitio informativo

Versión estática e ilustrativa del sitio de Auratech, lista para publicarse en **GitHub Pages**.

## Qué cambió respecto al proyecto original

- Se eliminó la sección **Recursos** (dashboard en vivo, lectura de Arduino/ESP32 por puerto serial, Firebase y el backend en Flask), ya que GitHub Pages solo sirve archivos estáticos y no puede ejecutar ese código.
- Se quitaron `app.py`, `interfas/`, `datos.csv` y el `.rar`, por depender del backend.
- Se corrigieron enlaces rotos: imágenes de la galería que no existían (`cabina5.jpg` a `cabina12.jpg`), el kit de Font Awesome (usaba un ID de ejemplo), y las imágenes de servicios que apuntaban a un dominio externo.
- Las páginas ahora están todas en la raíz del sitio (antes vivían en `templates/`, pensadas para ser renderizadas por Flask) y los enlaces son relativos, para que funcionen igual en la raíz de un dominio o en un repositorio de proyecto (`usuario.github.io/repositorio/`).
- El formulario de contacto se mantiene como una demostración visual (valida los campos y muestra un mensaje), aclarando que no envía nada a un servidor real.
- El diseño (colores, tipografía, animaciones, menú lateral) es el mismo del proyecto original.

## Estructura

```
index.html
services.html
gallery.html
us.html
contact.html
static/
  css/styles.css
  js/common.js
  js/script.js
  img/...
```

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub y sube todo el contenido de esta carpeta a la raíz del repositorio.
2. En GitHub, ve a **Settings → Pages**.
3. En "Source" selecciona la rama (por ejemplo `main`) y la carpeta `/ (root)`.
4. Guarda; GitHub te dará una URL del tipo `https://usuario.github.io/nombre-repo/`.

No necesitas ningún paso de build: es HTML, CSS y JS puros.
