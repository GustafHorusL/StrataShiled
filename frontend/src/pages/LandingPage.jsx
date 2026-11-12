import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Shield, Menu, X, Heart, FlaskConical, Cpu, Factory, Layers, TrafficCone, Mail, Check, Copy } from 'lucide-react';
import './Promotion.css';

const EMAIL = 'stratashield26@gmail.com';
const emailLink = (subject) => `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;
const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}&su=${encodeURIComponent('Contacto con StrataShield')}`;
const links = [
  ['La iniciativa', '#iniciativa'], ['Proyectos', '#proyectos'],
  ['Investigación', '#investigacion'], ['Apoyar', '#apoyar'],
];
const projects = [
  { number: '01', title: 'Centro de manufacturas', area: 'INFORMACIÓN Y VINCULACIÓN', icon: Factory,
    description: 'Una plataforma mexicana en desarrollo, con enfoque institucional, documental y estratégico. Busca facilitar la consulta pública de información, además de acercar a quienes forman parte de los sectores tecnológico, manufacturero, educativo, científico e industrial del país.',
    detail: 'Para cumplir ese propósito, hará falta mucho más que tecnología. La calidad de los datos, una gobernanza clara, la revisión humana, la participación institucional, así como la protección de la información serán esenciales. Por eso, su desarrollo deberá avanzar de forma gradual, responsable y verificable, explicando con claridad qué puede ofrecer en cada etapa. Su función será informar y facilitar vínculos: no certificará a personas u organizaciones ni sustituirá las fuentes oficiales. Nuestro fundador participa en este proyecto como parte de su trabajo de desarrollo de plataformas.' },
  { number: '02', title: 'Azai.mx', area: 'DESARROLLO DE PLATAFORMAS', icon: Layers, url: 'https://azai.mx/',
    description: 'Azai fue fundada por el ingeniero Arath Saim Garrea Morales. En este proyecto también trabaja Gustavo Erik Villeda Domínguez, ingeniero fundador de StrataShield, como parte de su experiencia en desarrollo de plataformas.',
    detail: 'La marca Azai está registrada ante el Instituto Mexicano de la Propiedad Industrial (IMPI). El registro protege la marca; no acredita la seguridad de la plataforma.' },
  { number: '03', title: 'Semáforo inteligente', area: 'SISTEMAS INTELIGENTES', icon: TrafficCone,
    description: 'Con este proyecto, el fundador explora nuevas aplicaciones de la tecnología. El semáforo inteligente forma parte de su trabajo actual de desarrollo.',
    detail: 'El proyecto sigue en desarrollo. Por ahora no se presentan despliegues urbanos ni resultados validados.' },
];

function SectionIntro({ eyebrow, title, children }) {
  return <div className="section-intro"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{children && <p className="section-description">{children}</p>}</div>;
}

function ExternalLink({ children, ...props }) {
  return <a {...props} target="_blank" rel="noopener noreferrer">{children}<span className="sr-only"> (abre en otra pestaña o aplicación)</span></a>;
}

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copyState, setCopyState] = useState('');
  async function copyEmail() {
    try { await navigator.clipboard.writeText(EMAIL); setCopyState('Correo copiado.'); }
    catch { setCopyState(`Puedes copiar el correo manualmente: ${EMAIL}`); }
  }
  return (
    <div className="promotion">
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="#inicio" aria-label="StrataShield, inicio"><Shield aria-hidden="true" /><span>Strata<span className="accent">Shield</span><small>CYBERSECURITY & TECHNOLOGIES</small></span></a>
          <button className="menu-button" type="button" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
          <nav id="primary-navigation" className={`primary-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navegación principal">
            {links.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
            <a className="nav-contact" href="#contacto" onClick={() => setMenuOpen(false)}>Hablemos <ArrowUpRight size={16} aria-hidden="true" /></a>
          </nav>
        </div>
      </header>
      <main id="contenido" tabIndex={-1}>
        <section className="hero shell" id="inicio" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> DESDE TABASCO, MÉXICO</p>
            <h1 id="hero-title">El futuro digital<br />también se construye<br /><span className="accent">desde aquí.</span></h1>
            <p className="hero-description">Somos StrataShield, una empresa tabasqueña de ciberseguridad en desarrollo. A través de proyectos e investigación, buscamos aprender cómo construir tecnología más segura.</p>
            <div className="actions"><a className="button button-primary" href="#apoyar">Impulsa la iniciativa <ArrowUpRight size={18} aria-hidden="true" /></a><a className="text-link" href="#proyectos">Conoce los proyectos <ArrowDown size={16} aria-hidden="true" /></a></div>
            <div className="hero-caption"><span className="tiny-square" /> Una iniciativa en desarrollo. Un propósito a largo plazo.</div>
          </div>
          <div className="hero-art" aria-hidden="true"><div className="art-grid" /><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="shield-core"><Shield strokeWidth={0.8} /><span>SS / LAB</span></div><span className="art-tag tag-top">ORIGEN / TABASCO</span><span className="art-tag tag-bottom">CONSTRUIR · EVALUAR · APRENDER</span><div className="art-coordinate coordinate-one" /><div className="art-coordinate coordinate-two" /></div>
        </section>
        <div className="principle-bar"><div className="shell"><span>CIBERSEGURIDAD</span><span aria-hidden="true">+</span><span>DESARROLLO</span><span aria-hidden="true">+</span><span>INVESTIGACIÓN EN IA</span><span className="bar-note">Tecnología con raíces en Tabasco.</span></div></div>
        <section className="section shell initiative" id="iniciativa" aria-labelledby="initiative-title">
          <div><p className="eyebrow">01 / LA INICIATIVA</p><h2 id="initiative-title">Primero los cimientos.<br /><span className="muted">Después, el crecimiento.</span></h2></div>
          <div className="initiative-copy"><p>StrataShield nace en Tabasco con el propósito de desarrollar soluciones tecnológicas desde la ciberseguridad. Nuestro ingeniero fundador, Gustavo Erik Villeda Domínguez, impulsa esta primera etapa. Queremos abrir el camino a quienes compartan esa inquietud.</p><p>Por ahora, te invitamos a conocer los proyectos en curso. Tu apoyo nos ayudaría a desarrollar prototipos, poner herramientas a prueba y dejar constancia de lo aprendido.</p><div className="honesty-note"><Shield size={21} aria-hidden="true" /><p><strong>Queremos hablar con claridad.</strong> Todavía no contamos con certificaciones. Aspiramos a obtenerlas conforme maduren nuestros procesos; hoy nos corresponde construir las bases.</p></div></div>
        </section>
        <section className="section projects-section" id="proyectos"><div className="shell">
          <SectionIntro eyebrow="02 / TRABAJO EN CURSO" title={<>Ideas que empiezan<br />a tomar forma.</>}>Estos son algunos proyectos en los que trabaja nuestro fundador. Lo que aprende en cada uno aporta nuevas perspectivas a StrataShield.</SectionIntro>
          <div className="projects-grid">{projects.map(({ number, title, area, icon: Icon, description, detail, url }) => (
            <article className="project-card" key={number}>
              <div className="project-top"><Icon size={29} strokeWidth={1.25} aria-hidden="true" /><span>{number}</span></div>
              <p className="project-area">{area}</p><h3>{title}</h3><p>{description}</p>
              {url && <ExternalLink className="text-link" href={url}>Visitar Azai.mx <ArrowUpRight size={15} aria-hidden="true" /></ExternalLink>}
              <details><summary>Sobre este proyecto</summary><p>{detail}</p><ExternalLink href={emailLink(`Información sobre ${title}`)}>Consultar al fundador <ArrowUpRight size={15} aria-hidden="true" /></ExternalLink></details>
              <span className="project-status"><span className="status-dot" /> Trabajo en curso</span>
            </article>
          ))}</div>
          <p className="section-footnote">Compartimos estas experiencias como parte del recorrido del fundador, sin presentarlas como clientes o alianzas institucionales. Añadiremos demostraciones cuando estén disponibles, con la autorización correspondiente.</p>
        </div></section>
        <section className="section shell research-section" id="investigacion">
          <SectionIntro eyebrow="03 / LABORATORIO EN DESARROLLO" title={<>Investigar antes<br />de dar por hecho.</>}>Experimentamos con agentes de IA de código abierto, además de herramientas comerciales. Nos interesa comprender qué aportan al desarrollo de plataformas, dónde fallan y qué riesgos debemos atender.</SectionIntro>
          <div className="research-layout">
            <article className="research-main"><div className="research-heading"><FlaskConical size={24} aria-hidden="true" /><span className="pill">INVESTIGACIÓN ACTUAL</span></div><h3>Agentes de IA, bajo observación.</h3><p>Como parte de su tesis, nuestro fundador evalúa agentes de IA de código abierto. La investigación busca comprender su comportamiento, reconocer sus límites e identificar las condiciones de uso en entornos de desarrollo, incluidos escenarios de interacción con clientes.</p><p>En paralelo, experimentamos con herramientas comerciales para ampliar nuestra perspectiva. Este trabajo sigue siendo experimental; aún no ofrecemos un servicio autónomo para clientes.</p><div className="research-topics"><span>Evaluación de agentes</span><span>Desarrollo de plataformas</span><span>Análisis de riesgos</span></div><p className="research-disclosure">La tesis está en curso. Todavía no publicamos resultados, métricas ni una validación de seguridad. Si te interesa conocer el avance, escríbenos para consultar qué evidencias podemos compartir.</p><ExternalLink className="text-link" href={emailLink('Avances de investigación sobre agentes de IA')}>Hablemos de la investigación <ArrowUpRight size={16} aria-hidden="true" /></ExternalLink></article>
            <article className="research-future"><Cpu size={27} aria-hidden="true" /><p className="eyebrow">HORIZONTE DE INVESTIGACIÓN</p><h3>Explorar la nube cuántica.</h3><p>Más adelante, queremos explorar servicios de computación cuántica en la nube. La pregunta que nos mueve es cómo podrían integrarse, de forma experimental, al monitoreo de agentes de IA o al análisis de eventos de ciberseguridad.</p><p className="future-note">Por ahora es una aspiración de investigación. Aún no existe una integración operativa ni hemos demostrado ventajas.</p></article>
          </div>
          <div className="standards"><div><p className="eyebrow">REFERENCIAS DE TRABAJO</p><h3>Buenas prácticas, con contexto.</h3><p>Para orientar este trabajo, tomamos como referencia los marcos de NIST junto con las guías de OWASP. Nos sirven para estudiar riesgos, guiar el desarrollo seguro e identificar qué debemos evaluar. Referenciarlos no implica una certificación, un aval o conformidad auditada.</p></div><div className="standard-links"><ExternalLink href="https://www.nist.gov/itl/ai-risk-management-framework">NIST AI RMF <ArrowUpRight size={17} aria-hidden="true" /></ExternalLink><ExternalLink href="https://owasp.org/www-project-application-security-verification-standard/">OWASP ASVS <ArrowUpRight size={17} aria-hidden="true" /></ExternalLink><ExternalLink href="https://genai.owasp.org/">OWASP GenAI Security <ArrowUpRight size={17} aria-hidden="true" /></ExternalLink></div></div>
        </section>
        <section className="support-section" id="apoyar"><div className="shell support-layout"><div><p className="eyebrow">04 / CRECER CON APOYO</p><h2>Ayúdanos a construir<br /><span className="accent">lo que sigue.</span></h2><p>Si crees en el talento tecnológico de Tabasco, te invitamos a ser parte de este comienzo. Puedes hacer una aportación voluntaria, facilitar recursos para investigar o compartir tu experiencia técnica. Cada forma de apoyo nos ayuda a avanzar.</p><ExternalLink className="button button-primary" href={emailLink('Quiero apoyar a StrataShield con una aportación')}><Heart size={18} aria-hidden="true" /> Quiero aportar <ArrowUpRight size={18} aria-hidden="true" /></ExternalLink><p className="support-caption">Escríbenos para coordinar tu aportación. Los pagos se acuerdan fuera de esta página.</p></div><div className="support-plan"><p className="eyebrow">EN QUÉ PODRÍA CONVERTIRSE TU APOYO</p>{[['01', 'Desarrollo de prototipos', 'Recursos para dedicar más tiempo a los proyectos en curso.'], ['02', 'Investigación aplicada', 'Pruebas experimentales de agentes, con documentación de lo observado.'], ['03', 'Infraestructura de desarrollo', 'Entornos de prueba donde podamos aprender antes de llevar una idea más lejos.']].map(([n, title, description]) => <div className="support-item" key={n}><span>{n}</span><div><h3>{title}</h3><p>{description}</p></div></div>)}<p className="support-terms">Antes de aportar, conversemos sobre cómo se utilizaría tu apoyo. No ofrecemos rendimientos, participación en la empresa ni beneficios fiscales. Cualquier cifra de recaudación que publiquemos deberá contar con registros que la respalden.</p></div></div></section>
        <section className="section shell contact-section" id="contacto"><div><p className="eyebrow">05 / CONTACTO</p><h2>La siguiente conversación<br /><span className="muted">puede empezar contigo.</span></h2><p>¿Te interesa un proyecto? ¿Quieres compartir una idea o apoyar la iniciativa? Escríbele directamente a Gustavo. También puedes consultar los avances de su investigación.</p></div><div className="contact-panel"><Mail size={27} aria-hidden="true" /><span className="contact-label">POR AHORA, HABLEMOS POR CORREO</span><ExternalLink className="email-address" href={emailLink('Contacto con StrataShield')}>{EMAIL}<ArrowUpRight size={20} aria-hidden="true" /></ExternalLink><div className="contact-actions"><ExternalLink className="button button-outline" href={emailLink('Contacto con StrataShield')}>Escribir un correo <ArrowUpRight size={16} aria-hidden="true" /></ExternalLink><ExternalLink className="text-link" href={gmailLink}>Escribir desde Gmail <ArrowUpRight size={16} aria-hidden="true" /></ExternalLink><button className="text-link" type="button" onClick={copyEmail}>{copyState === 'Correo copiado.' ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />} Copiar dirección</button></div><p className="copy-feedback" role="status">{copyState}</p><p className="contact-note">Puedes abrir tu aplicación de correo o preparar el mensaje en Gmail, en otra pestaña. No se envía nada automáticamente. Compártenos solo lo necesario; evita enviar contraseñas, claves, datos sensibles o reportes confidenciales.</p></div></section>
        <section className="shell site-disclosures" aria-label="Transparencia del sitio"><details id="privacidad"><summary>Sobre tu privacidad</summary><p>Esta página no incluye formularios, cuentas, analítica ni procesamiento de pagos. Si escribes a {EMAIL}, tu mensaje pasa por tu proveedor de correo hasta llegar a Gmail. Comparte solo los datos necesarios para conversar. Puedes utilizar la misma dirección para preguntar cómo tratamos tu información o solicitar su eliminación. Por su parte, el proveedor de alojamiento puede tratar datos técnicos de conexión conforme a sus propias políticas. Esta explicación describe el funcionamiento actual; no sustituye el aviso de privacidad integral que deberá aprobarse antes de ampliar la recepción de datos.</p></details><details><summary>En qué etapa estamos</summary><p>StrataShield es una empresa en desarrollo, nacida en Tabasco, México. Aquí compartimos proyectos en curso e investigación según la información del fundador. Todavía no contamos con certificaciones, un servicio de monitoreo 24/7 ni resultados publicados de la tesis. Tampoco ofrecemos garantías de seguridad. NIST junto con OWASP son referencias para nuestro trabajo, sin que esto implique un aval de esas organizaciones.</p></details></section>
      </main>
      <footer className="site-footer shell"><a className="brand footer-brand" href="#inicio"><Shield size={23} aria-hidden="true" /><span>Strata<span className="accent">Shield</span></span></a><p>Construyendo desde Tabasco, México.</p><a href="#privacidad">Sobre tu privacidad</a><span>© {new Date().getFullYear()} StrataShield</span></footer>
    </div>
  );
}
