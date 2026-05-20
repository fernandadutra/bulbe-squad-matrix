(function () {
  'use strict';

  const DISCOUNT_RATE = 0.15;
  const STORAGE_KEY = 'bulbe.fatura';

  const formatBRL = (n) =>
    n.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const parseCurrency = (str) => {
    const digits = String(str).replace(/\D/g, '');
    if (!digits) return 0;
    return parseInt(digits, 10) / 100;
  };

  function setupEntryForm() {
    const form = document.getElementById('simulador');
    const input = document.getElementById('fatura');
    if (!form || !input) return;

    const render = (value) => { input.value = formatBRL(value); };

    input.addEventListener('input', () => {
      const value = parseCurrency(input.value);
      render(value);
      input.setSelectionRange(input.value.length, input.value.length);
    });

    input.addEventListener('focus', () => {
      if (parseCurrency(input.value) === 0) input.select();
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const value = parseCurrency(input.value);
      if (value <= 0) {
        input.focus();
        input.style.outline = '2px solid #C73C2D';
        setTimeout(() => (input.style.outline = ''), 1200);
        return;
      }
      try { sessionStorage.setItem(STORAGE_KEY, String(value)); } catch (_) { }
      window.location.href = 'resultado.html';
    });
  }

  function setupResultScreen() {
    const targets = document.querySelectorAll('[data-result]');
    if (!targets.length) return;

    let value = 0;
    try { value = parseFloat(sessionStorage.getItem(STORAGE_KEY)) || 0; } catch (_) { }

    if (!value) {
      // valores padrão de demonstração de acordo com o design
      value = 350;
    }

    const monthlySavings = value * DISCOUNT_RATE;
    const bulbePrice = value - monthlySavings;
    const annualSavings = monthlySavings * 12;

    const map = {
      monthlySavings,
      fullPrice: value,
      bulbePrice,
      annualSavings,
    };

    targets.forEach((el) => {
      const key = el.getAttribute('data-result');
      if (key in map) el.textContent = formatBRL(map[key]);
    });

    const cta = document.getElementById('ctaStart');
    if (cta) {
      cta.addEventListener('click', () => {
        alert('Vamos te direcionar para iniciar sua adesão à Bulbe.');
      });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    setupEntryForm();
    setupResultScreen();
  });
})();
