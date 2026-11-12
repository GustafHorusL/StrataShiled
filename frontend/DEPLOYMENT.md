# Presentación estática de StrataShield

La ruta `/` utiliza `src/pages/LandingPage.jsx` y `Promotion.css`. Presenta la iniciativa tabasqueña, proyectos del fundador, investigación experimental y apoyo voluntario. El correo autorizado por el fundador es `stratashield26@gmail.com`.

## Ejecución y build

```sh
npm ci
npm run build
```

La salida `build/` es estática. No necesita `api/`, `backend/`, `ejercicio-tickets/`, una base de datos ni secretos. El frontend publicado no importa el cliente de contacto anterior. Los componentes anteriores se conservan sin montarlos en la página.

El archivo `.npmrc` permite resolver las dependencias heredadas con `legacy-peer-deps`. El lockfile fija la instalación utilizada para comprobar el build. Se utiliza npm, sin la declaración anterior de Yarn; `ajv` 8 es una dependencia de desarrollo explícita para resolver la incompatibilidad encontrada entre los validadores de las herramientas de build.

## Vercel

Importar el repositorio con **Root Directory: `frontend`**, build `npm run build` y salida `build`. No configurar funciones ni variables de Supabase. `vercel.json` define cabeceras para la página estática. Si el proyecto tiene Vercel Web Analytics, Speed Insights o herramientas que inyecten scripts, revisar su configuración frente a la CSP; esta versión no incorpora esas integraciones.

**Elegibilidad:** Vercel Hobby está restringido a uso personal no comercial. Este sitio promociona una empresa en desarrollo y solicita apoyo para su crecimiento: no asumir que califica por ser estático, experimental o financiado mediante donativos. Confirmar la elegibilidad con Vercel antes de publicarlo en Hobby, o utilizar un plan permitido. No se ha realizado despliegue ni contratado un plan.

Referencias consultadas:
- https://vercel.com/docs/plans/hobby
- https://vercel.com/docs/limits/fair-use-guidelines
- https://www.nist.gov/itl/ai-risk-management-framework
- https://owasp.org/www-project-application-security-verification-standard/
- https://genai.owasp.org/

## Contacto y aportaciones

Los enlaces de correo utilizan `mailto:` con `target="_blank"` y `rel="noopener noreferrer"`; la aplicación final depende de la configuración del visitante. También se ofrece «Escribir desde Gmail» para preparar un borrador web en otra pestaña, además de copiar la dirección. No se envían mensajes automáticamente ni se confirman entregas. Los enlaces a Azai.mx y a referencias externas utilizan el mismo componente de apertura en otra pestaña; los enlaces internos permanecen en la página. El sitio no procesa pagos ni recoge datos de formularios. No hay analítica ni fuentes o scripts de terceros incorporados.

La descripción pública de privacidad explica el flujo actual. No es un aviso integral aprobado; antes de ampliar el tratamiento de datos hay que definir el responsable, finalidades y condiciones aplicables.

Las aportaciones se coordinan directamente por correo. La página no ofrece deducibilidad fiscal, rendimientos, participación accionaria ni cifras de recaudación.

## Contenido y evidencia

Las menciones a centro de manufacturas, Azai.mx y semáforo inteligente se basan en la información del fundador. No implican clientes o alianzas. No se inventaron entregables, enlaces a repositorios, métricas ni demostraciones. Para publicar evidencias: aportar URLs autorizadas, alcance del trabajo, estado y permiso de exhibición. La tesis se presenta en curso y la integración con nubes cuánticas como aspiración futura.

El ingeniero fundador de StrataShield es Gustavo Erik Villeda Domínguez. El ingeniero fundador de Azai es Arath Saim Garrea Morales. Gustavo trabaja en el proyecto Azai; no se le atribuye su fundación. Estas identidades y la precisión sobre el registro de la marca Azai ante el IMPI fueron proporcionadas por el usuario. No se consultó un expediente ni se incorporaron número de registro, titularidad, clase o vigencia no documentados. La página distingue el registro de marca de una certificación de seguridad.

NIST y OWASP se presentan como referencias de trabajo, sin afirmar certificación, aval o cumplimiento auditado. No se publican las certificaciones ni garantías de la página anterior.

## Validación antes de publicación

- Verificar build y que no incluya llamadas a `/api/contact`, scripts de Emergent o PostHog.
- Revisar escritorio y móvil (320 px en adelante), teclado, menú y foco visible.
- Comprobar enlaces a secciones, apertura de correo y copia de dirección.
- Comprobar las cabeceras del despliegue real; el build local no prueba su aplicación en Vercel.
- Aprobar contenido de proyectos y revisar privacidad antes de recibir datos personales.

## Resultado de la verificación local

- `npm run build`: compilación de producción correcta.
- `npm test -- --watchAll=false --runInBand` con `CI=true`: ocho pruebas correctas (correo/aportaciones, destinos internos, Azai, apertura externa, alternativa de Gmail, menú, copia y alternativa manual).
- Búsqueda en JS y HTML compilados: no se encontraron PostHog, el script principal de Emergent, el endpoint anterior de contacto ni las cifras comerciales retiradas.
- `git diff --check`: sin errores de espacios.
- Revisión visual en navegador: pendiente; el host de acceso al navegador no está disponible en esta sesión. No se han medido Core Web Vitals ni declarado conformidad WCAG.
