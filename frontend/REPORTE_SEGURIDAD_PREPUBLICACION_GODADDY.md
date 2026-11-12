# Escaneo de seguridad previo a publicación en GoDaddy

Fecha: 12 de noviembre de 2026  
Alcance: código fuente activo, dependencias, compilación de producción y configuración de despliegue del frontend estático.  
Fuera de alcance: infraestructura de GoDaddy todavía no publicada, DNS, TLS real, panel cPanel y pruebas dinámicas contra un dominio público.

## Dictamen

**Publicación condicionada / no publicar todavía tal como está.** La página activa tiene una superficie reducida y no se identificó una vía evidente de ejecución de código, XSS, envío oculto de datos o exposición de secretos. Sin embargo, las cabeceras de seguridad están definidas únicamente para Vercel y no se trasladarán automáticamente a GoDaddy. Antes de publicar debe existir una configuración equivalente en el alojamiento, HTTPS forzado y una verificación posterior sobre el dominio real.

## Hallazgos

### SS-GD-001 — Cabeceras vinculadas a Vercel (alta prioridad de despliegue)

- Evidencia: `vercel.json` configura CSP, protección contra framing, `nosniff`, política de referencia y permisos.
- Riesgo: al copiar solamente `build/` a GoDaddy, esas reglas no forman parte de los archivos compilados. El navegador podría recibir la página sin esas defensas.
- Acción requerida: reproducir las cabeceras en cPanel/Apache mediante una configuración admitida por el plan (habitualmente `.htaccess` con `mod_headers`) o mediante el mecanismo equivalente del producto contratado. Validarlas en respuestas 200, redirecciones y errores.
- Estado: abierto; bloquea la recomendación de publicación.

### SS-GD-002 — Cadena de compilación con avisos de dependencias (media)

- `npm audit` reportó 36 avisos: 15 altos, 4 moderados, 17 bajos y 0 críticos.
- El principal origen es `react-scripts@5.0.1` y sus herramientas transitivas (`webpack-dev-server`, SVGO, PostCSS, Jest y Workbox). También se reportó `zod` como dependencia directa.
- La revisión del punto de entrada confirmó que la página publicada importa únicamente React, React Router, Lucide y la página principal. Los componentes heredados y el cliente de contacto no forman parte del flujo activo.
- Interpretación: los avisos afectan principalmente al entorno de desarrollo/compilación; no se demostró que exista una ruta explotable en el paquete estático actual. Aun así, aumentan el riesgo de la cadena de suministro y justifican migrar de Create React App o depurar dependencias antes de mantener el proyecto a largo plazo.
- Acción requerida: no ejecutar el servidor de desarrollo en Internet; compilar en un equipo controlado; publicar sólo el resultado de `build/`; planificar la actualización del toolchain y la reducción de dependencias.

### SS-GD-003 — Código de contacto legado no utilizado (baja)

- Evidencia: `src/api/contact.js` conserva como alternativa `http://localhost:3001/api`.
- El archivo no está importado desde la aplicación activa y no se encontró la URL en el artefacto funcional revisado.
- Riesgo: confusión operativa o reactivación accidental de tráfico HTTP en cambios futuros.
- Acción recomendada: eliminarlo cuando se confirme que ya no se recuperará el backend de tickets/contacto, o documentarlo explícitamente como código fuera de uso.

### SS-GD-004 — Mapas de fuentes en el artefacto (baja)

- La compilación genera archivos `.map` de CSS y JavaScript.
- Riesgo: facilitan el análisis del código original y aumentan el material publicado, aunque no constituyen por sí solos una vulnerabilidad ni contienen secretos detectados.
- Acción recomendada: compilar con mapas desactivados para producción (`GENERATE_SOURCEMAP=false`) si no se necesitan para diagnóstico público.

## Controles verificados

- Compilación optimizada completada correctamente.
- 8 de 8 pruebas automatizadas aprobadas.
- No hay formulario activo, backend, cookies, almacenamiento del navegador ni analítica en la página publicada.
- No se localizaron usos activos de `dangerouslySetInnerHTML`, `eval`, `new Function` o `document.write`.
- Los enlaces externos son constantes y se abren con `rel="noopener noreferrer"`.
- No hay scripts de terceros ni recursos HTTP en el flujo activo.
- La CSP propuesta restringe scripts, estilos, conexiones y recursos al mismo origen; bloquea objetos, formularios y framing.

## Lista obligatoria antes de publicar

1. Confirmar que el producto es Web Hosting Linux/cPanel u obtener el mecanismo equivalente del plan real.
2. Instalar/activar SSL, comprobar el certificado y forzar la redirección de HTTP a HTTPS.
3. Aplicar en GoDaddy las mismas cabeceras de `vercel.json`; añadir HSTS únicamente después de confirmar que HTTPS funciona correctamente en todo el dominio.
4. Publicar sólo el contenido de `frontend/build/` en la raíz web correspondiente. No subir el repositorio, `src/`, `node_modules/`, archivos `.env`, informes ni configuración local.
5. Considerar la exclusión de los archivos `*.map`.
6. Tras publicar, comprobar cabeceras, redirecciones, MIME, contenido mixto, enlaces externos, páginas 404 y ausencia de archivos sensibles.
7. Ejecutar una prueba dinámica pasiva contra el dominio definitivo. Cualquier prueba intrusiva debe limitarse al dominio y horario expresamente autorizados.

## Resultado de liberación

- **Código estático:** apto con observaciones.
- **Cadena de compilación:** requiere mantenimiento, sin explotación demostrada en el bundle servido.
- **Configuración GoDaddy:** pendiente y necesaria.
- **Decisión actual:** `NO-GO` hasta completar SS-GD-001, HTTPS y la verificación posterior al despliegue.
