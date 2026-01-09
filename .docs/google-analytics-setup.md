# Configuración de Google Tag Manager (GTM) y Google Analytics 4 (GA4) en Astro - Guía 2026

Esta guía detalla los pasos para integrar **Google Tag Manager** en tu portafolio. GTM actúa como un contenedor que te permite gestionar Google Analytics 4 y otras herramientas de medición de forma profesional sin modificar el código constantemente.

## 1. Configuración Inicial en las Consolas

### En Google Tag Manager:
1.  Ve a [Tag Manager](https://tagmanager.google.com/).
2.  Crea una cuenta y un contenedor de tipo **Sitio Web**.
3.  Obtén tu ID de contenedor (ej: `GTM-TD6HSMJ2`).

### En Google Analytics 4:
1.  Crea tu propiedad en [Analytics](https://analytics.google.com/) y obtén tu **ID de Medición** (`G-XXXXXXXXXX`).
2.  **Vinculación:** Dentro de Google Tag Manager, crea una nueva **Etiqueta** (Tag):
    *   **Tipo de etiqueta:** Google Tag.
    *   **ID de la etiqueta:** Pega aquí tu ID de medición de GA4 (`G-XXXXXXXXXX`).
    *   **Activación (Triggering):** Selecciona "Initialization - All Pages" o "All Pages".
    *   **Publicar:** Haz clic en "Enviar" y "Publicar" en GTM para que los cambios tengan efecto.

---

## 2. Implementación Técnica en Astro

Debes insertar dos fragmentos de código en tu layout principal para que el rastreo funcione en todo el sitio.

### Archivo: `src/layouts/mainLayout.astro`

#### A. En el `<head>` (lo más arriba posible):
Este script carga la lógica de GTM.

```html
<!-- Google Tag Manager -->
<script is:inline>
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-TD6HSMJ2');
</script>
<!-- End Google Tag Manager -->
```

#### B. En el `<body>` (justo después de la etiqueta de apertura):
Este fragmento es un respaldo para usuarios que tienen desactivado JavaScript.

```html
<!-- Google Tag Manager (noscript) -->
<noscript>
  <iframe 
    src="https://www.googletagmanager.com/ns.html?id=GTM-TD6HSMJ2"
    height="0" 
    width="0" 
    style="display:none;visibility:hidden"
  ></iframe>
</noscript>
<!-- End Google Tag Manager (noscript) -->
```

> **Nota Crítica de Astro:** Es **obligatorio** usar la directiva `is:inline`. Sin ella, Astro intentará optimizar el script y romperá la funcionalidad de Google Tag Manager.

---

## 3. Seguimiento de Fuentes (LinkedIn, GitHub, WhatsApp)

GTM/GA4 detectan automáticamente de qué sitio web vienen los usuarios ("Referral").

### Fuentes automáticas:
*   **LinkedIn:** Aparecerá como `linkedin.com / referral`.
*   **GitHub:** Aparecerá como `github.com / referral`.

### Fuentes manuales (WhatsApp y otros):
WhatsApp no envía información de procedencia. Para identificar estas visitas, añade **Parámetros UTM** a tus enlaces:

*   **Para WhatsApp:** `https://tuweb.com/?utm_source=whatsapp&utm_medium=social&utm_campaign=portfolio_share`
*   **Para LinkedIn (en tu perfil):** `https://tuweb.com/?utm_source=linkedin&utm_medium=profile&utm_campaign=portfolio`

---

## 4. Visualización de Métricas Clave

*   **¿Cuántos usuarios y cuándo?:** Ve a **Informes > Adquisición > Adquisición de tráfico**. Para horas específicas, usa el panel **Explorar**.
*   **¿De qué país?:** Ve a **Informes > Atributos del usuario > Detalles demográficos**.
*   **¿Privacidad e IP?:** GA4 cumple con GDPR y anonimiza las IPs automáticamente. Obtendrás la ubicación geográfica (ciudad/país) sin comprometer la IP privada del usuario.

---

## 5. Mejores Prácticas para 2026

1.  **Modo Vista Previa:** Antes de publicar cambios en GTM, usa el botón "Vista Previa" para probar que las etiquetas se disparan correctamente en tu web local o de desarrollo.
2.  **Eventos Personalizados:** Con GTM es muy fácil trackear clics en botones específicos (como "Descargar CV") creando un activador de tipo "Clic en todos los elementos" y filtrando por el ID del botón.
3.  **Variables de Entorno:** Si prefieres no tener el ID de GTM (`GTM-TD6HSMJ2`) visible en el código fuente de tu repo, puedes usar variables de entorno de Astro, aunque al ser un script de cliente, el ID siempre será visible en el navegador.

---
*Documentación actualizada para Google Tag Manager - Diego Tineo 2026*
