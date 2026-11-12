# Reporte de cambios: enlaces de proyectos y contacto

Fecha: 12 de noviembre de 2026.

## Solicitud

Dirigir el proyecto Azai a `https://azai.mx/`, abrirlo en otra pestaña y evitar que los enlaces de contacto sustituyan la página de StrataShield.

## Hallazgo en el código

La tarjeta de Azai no tenía enlace a su sitio público: solo ofrecía consultar por correo. Los enlaces de contacto utilizaban `mailto:` sin indicar una pestaña de destino. Esa configuración dejaba la apertura en manos del gestor de correo del navegador o del sistema; podía interrumpir la navegación según la configuración del visitante. No se reprodujo visualmente el comportamiento reportado, por lo que no se atribuye a un navegador específico.

## Cambios y justificación

1. Se añadió `https://azai.mx/` a los datos del proyecto. El enlace «Visitar Azai.mx» queda visible fuera del apartado desplegable, para que el visitante encuentre el sitio sin pasos adicionales. Se utilizó la URL proporcionada por el usuario, sin agregar afirmaciones sobre su disponibilidad o contenido.
2. Se creó el componente `ExternalLink` en `src/pages/LandingPage.jsx`. Los enlaces externos, incluidos los de correo, comparten `target="_blank"` y `rel="noopener noreferrer"`. Así se solicita una pestaña nueva sin dar acceso a la ventana de origen ni enviar el encabezado Referer.
3. Se aplicó el mismo criterio a las referencias de NIST/OWASP, consultas sobre proyectos, investigación y aportaciones. Los enlaces internos siguen desplazando dentro de la página, sin abrir pestañas adicionales.
4. Se añadió «Escribir desde Gmail». El enlace abre el compositor de Gmail con destinatario y asunto preparados. Ofrece una alternativa explícita cuando el visitante no tiene una aplicación de correo configurada. No envía mensajes automáticamente; puede requerir que el usuario inicie sesión.
5. Se conservaron el correo visible, los enlaces `mailto:` y el botón de copia. De esta forma el contacto no depende de una cuenta de Gmail del visitante.
6. Los enlaces externos incorporan un aviso para lectores de pantalla sobre la apertura en otra pestaña o aplicación. El texto de contacto explica las dos opciones. También se actualizó el enlace de la versión sin JavaScript.

## Archivos

- `src/pages/LandingPage.jsx`: URL de Azai, componente de enlace externo, destinos de contacto y alternativa de Gmail.
- `public/index.html`: comportamiento equivalente para el contacto sin JavaScript.
- `src/pages/LandingPage.test.jsx`: pruebas de los nuevos destinos y atributos.
- `DEPLOYMENT.md`: actualización de la documentación del contacto y las comprobaciones.

## Validación realizada

- `CI=true npm test -- --watchAll=false --runInBand`: ocho pruebas aprobadas.
- Las pruebas comprueban el enlace visible de Azai, los destinos externos con nueva pestaña, los atributos de protección, la alternativa de Gmail y la conservación de la navegación interna. También verifican los enlaces de correo, menú y copia de dirección.
- `npm run build`: compilación de producción correcta.

## Límites y comprobación manual pendiente

Las pruebas verifican el DOM y los destinos configurados; no equivalen a una prueba real de apertura de pestañas. El navegador puede elegir una ventana en lugar de una pestaña. Para `mailto:`, la apertura final depende del gestor de correo instalado o registrado: `target="_blank"` no garantiza que se abra un cliente web. La alternativa de Gmail permite solicitar directamente un compositor web en otro contexto.

En la página local, comprobar «Visitar Azai.mx», «Escribir un correo» y «Escribir desde Gmail». StrataShield debe conservarse abierta; basta preparar el borrador, sin enviarlo. Revisar también un enlace interno para confirmar que permanece en la misma pestaña.

No se enviaron correos, no se procesaron aportaciones ni se desplegaron los cambios.
