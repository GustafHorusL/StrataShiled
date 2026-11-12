import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import LandingPage from './LandingPage';

describe('Presentación estática', () => {
  let container;
  let root;

  beforeEach(() => {
    global.IS_REACT_ACT_ENVIRONMENT = true;
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    act(() => root.render(<LandingPage />));
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
    jest.restoreAllMocks();
  });

  test('usa el correo autorizado para contacto, proyectos y aportaciones, sin formularios', () => {
    const mailLinks = [...container.querySelectorAll('a[href^="mailto:"]')];
    expect(mailLinks.length).toBeGreaterThan(3);
    mailLinks.forEach(link => expect(link.getAttribute('href')).toMatch(/^mailto:stratashield26@gmail\.com\?subject=/));
    const supportLink = container.querySelector('#apoyar a');
    expect(decodeURIComponent(supportLink.getAttribute('href'))).toContain('Quiero apoyar a StrataShield con una aportación');
    expect(container.querySelector('form')).toBeNull();
    expect(container.querySelector('input')).toBeNull();
  });

  test('todos los enlaces internos tienen un destino existente', () => {
    [...container.querySelectorAll('a[href^="#"]')].forEach(link => {
      const target = link.getAttribute('href').slice(1);
      expect(target).not.toBe('');
      expect(document.getElementById(target)).not.toBeNull();
    });
    expect(container.querySelectorAll('h1')).toHaveLength(1);
  });

  test('Azai tiene un enlace público visible que conserva la pestaña de StrataShield', () => {
    const link = container.querySelector('a[href="https://azai.mx/"]');
    expect(link).not.toBeNull();
    expect(link.textContent).toContain('Visitar Azai.mx');
    expect(link.closest('details')).toBeNull();
    expect(link.target).toBe('_blank');
    expect(link.rel).toBe('noopener noreferrer');
  });

  test('los enlaces externos y de correo solicitan una nueva pestaña con protección del origen', () => {
    [...container.querySelectorAll('a[href^="https:"], a[href^="mailto:"]')].forEach(link => {
      expect(link.target).toBe('_blank');
      expect(link.rel).toBe('noopener noreferrer');
      expect(link.textContent).toContain('abre en otra pestaña o aplicación');
    });
    [...container.querySelectorAll('a[href^="#"]')].forEach(link => expect(link.target).toBe(''));
  });

  test('la alternativa de Gmail prepara un borrador para el correo autorizado', () => {
    const link = container.querySelector('a[href^="https://mail.google.com/"]');
    const url = new URL(link.href);
    expect(url.pathname).toBe('/mail/');
    expect(url.searchParams.get('view')).toBe('cm');
    expect(url.searchParams.get('to')).toBe('stratashield26@gmail.com');
    expect(url.searchParams.get('su')).toBe('Contacto con StrataShield');
    expect(link.target).toBe('_blank');
  });

  test('el menú anuncia su estado y se cierra al seleccionar una sección', () => {
    const button = container.querySelector('button[aria-controls="primary-navigation"]');
    const nav = container.querySelector('#primary-navigation');
    expect(button.getAttribute('aria-expanded')).toBe('false');
    act(() => button.click());
    expect(button.getAttribute('aria-expanded')).toBe('true');
    expect(nav.classList.contains('is-open')).toBe(true);
    act(() => nav.querySelector('a').click());
    expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(nav.classList.contains('is-open')).toBe(false);
  });

  test('copia la dirección y anuncia el resultado', async () => {
    const writeText = jest.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', { value: { writeText }, configurable: true });
    const button = [...container.querySelectorAll('button')].find(el => el.textContent.includes('Copiar dirección'));
    await act(async () => button.click());
    expect(writeText).toHaveBeenCalledWith('stratashield26@gmail.com');
    expect(container.querySelector('[role="status"]').textContent).toBe('Correo copiado.');
  });

  test('conserva una alternativa manual si falla el portapapeles', async () => {
    Object.defineProperty(navigator, 'clipboard', { value: { writeText: jest.fn().mockRejectedValue(new Error('Unavailable')) }, configurable: true });
    const button = [...container.querySelectorAll('button')].find(el => el.textContent.includes('Copiar dirección'));
    await act(async () => button.click());
    expect(container.querySelector('[role="status"]').textContent).toContain('Puedes copiar el correo manualmente: stratashield26@gmail.com');
  });
});
