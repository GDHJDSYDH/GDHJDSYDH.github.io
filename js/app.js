(function () {
  'use strict';

  const STORAGE_LANG_KEY = 'gdhjdsydh_gallery_lang';
  const I18N = window.SITE_I18N || {};
  const GAMES = window.GAMES || [];

  let currentLang = localStorage.getItem(STORAGE_LANG_KEY) || 'zh';
  if (!I18N[currentLang]) currentLang = 'zh';
  let currentFilter = 'all';
  let activeModalGameId = null;
  let toastTimer = null;

  const els = {
    langToggle: document.getElementById('langToggle'),
    gamesGrid: document.getElementById('gamesGrid'),
    guideGrid: document.getElementById('guideGrid'),
    heroQuickLinks: document.getElementById('heroQuickLinks'),
    gameCount: document.getElementById('gameCount'),
    filterChips: document.querySelectorAll('.filter-chip'),
    modal: document.getElementById('gameModal'),
    modalBody: document.getElementById('modalBody'),
    modalCloseBtn: document.getElementById('modalCloseBtn'),
    toast: document.getElementById('toast')
  };

  function t(key) {
    return (I18N[currentLang] && I18N[currentLang][key]) || '';
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function renderCoverMarkup(game, isModal) {
    const loc = game[currentLang];
    if (game.coverType === 'whack-shiki') {
      return `
        <div class="whack-stage">
          <img class="game-cover-img" src="${escapeHtml(game.coverImage)}" alt="${escapeHtml(loc.title)}" loading="${isModal ? 'eager' : 'lazy'}" />
          <div class="whack-hole-mask" aria-hidden="true">
            <img class="whack-shiki-sprite" src="${escapeHtml(game.characterImage)}" alt="" />
          </div>
          <img class="whack-hammer-sprite" src="${escapeHtml(game.hammerImage)}" alt="" aria-hidden="true" />
        </div>
      `;
    }

    if (game.coverType === 'umi-kitchen') {
      return `
        <img class="game-cover-img" src="${escapeHtml(game.coverImage)}" alt="${escapeHtml(loc.title)}" loading="${isModal ? 'eager' : 'lazy'}" />
        ${!isModal ? '<div class="umi-sunlight" aria-hidden="true"></div>' : ''}
      `;
    }

    return `
      <img class="game-cover-img" src="${escapeHtml(game.coverImage)}" alt="${escapeHtml(loc.title)}" loading="${isModal ? 'eager' : 'lazy'}" />
      ${!isModal ? '<div class="foxlight-beam" aria-hidden="true"></div>' : ''}
    `;
  }

  function applyStaticTranslations() {
    document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
    document.title = t('pageTitle');

    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const key = node.getAttribute('data-i18n');
      const val = t(key);
      if (typeof val === 'string') {
        node.textContent = val;
      }
    });

    document.querySelectorAll('[data-lang-option]').forEach((pill) => {
      pill.classList.toggle('is-active', pill.getAttribute('data-lang-option') === currentLang);
    });

    if (els.gameCount) {
      els.gameCount.textContent = String(GAMES.length);
    }
  }

  function renderHeroQuickLinks() {
    if (!els.heroQuickLinks) return;
    els.heroQuickLinks.innerHTML = GAMES.map((game) => {
      const loc = game[currentLang];
      return `
        <a class="quick-launch-row" href="${escapeHtml(game.playUrl)}" target="_blank" rel="noopener noreferrer">
          <span class="quick-launch-left">
            <span class="quick-launch-no">${escapeHtml(game.catalogNo)}</span>
            <span class="quick-launch-title">${escapeHtml(loc.title)}</span>
          </span>
          <span class="quick-launch-go">
            ${escapeHtml(t('playNow'))}
            <svg class="icon-xs" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M5 11L11 5M6 5h5v5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
        </a>
      `;
    }).join('');
  }

  function renderGames() {
    if (!els.gamesGrid) return;

    const filtered = GAMES.filter((game) => {
      if (currentFilter === 'all') return true;
      return Array.isArray(game.categories) && game.categories.includes(currentFilter);
    });

    if (filtered.length === 0) {
      els.gamesGrid.innerHTML = `<div class="empty-state">${escapeHtml(t('emptyFilter'))}</div>`;
      return;
    }

    els.gamesGrid.innerHTML = filtered
      .map((game) => {
        const loc = game[currentLang];
        const previewHighlights = loc.highlights.slice(0, 2);

        return `
          <article class="game-card" style="--card-accent: ${escapeHtml(game.accent)};" data-game-id="${escapeHtml(game.id)}">
            <div class="game-cover" data-open-modal="${escapeHtml(game.id)}" role="button" tabindex="0" aria-label="${escapeHtml(loc.title)} - ${escapeHtml(t('viewDetails'))}">
              ${renderCoverMarkup(game, false)}
              <div class="cover-top-bar">
                <span class="cover-catalog">${escapeHtml(game.catalogNo)}</span>
                <span class="cover-status">
                  <span class="status-dot" aria-hidden="true"></span>
                  ${escapeHtml(t('statusOnline'))}
                </span>
              </div>
              <span class="cover-bottom-badge">${escapeHtml(loc.coverBadge)}</span>
            </div>

            <div class="game-body">
              <div class="game-meta-row">
                <span class="game-genre" style="color: ${escapeHtml(game.accent)}; background: ${escapeHtml(game.accentSoft)};">
                  ${escapeHtml(loc.genre)}
                </span>
                <span class="game-updated">${escapeHtml(game.updated)}</span>
              </div>

              <h3 class="game-title">${escapeHtml(loc.title)}</h3>
              <p class="game-subtitle">${escapeHtml(loc.subtitle)}</p>
              <p class="game-summary">${escapeHtml(loc.summary)}</p>

              <div class="game-tags">
                ${loc.tags.map((tag) => `<span class="tag-pill">${escapeHtml(tag)}</span>`).join('')}
              </div>

              <ul class="game-highlights-preview">
                ${previewHighlights.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
              </ul>

              <div class="game-actions">
                <a class="btn-play" href="${escapeHtml(game.playUrl)}" target="_blank" rel="noopener noreferrer">
                  <svg class="icon-sm" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M6.3 4.84A1.2 1.2 0 018.14 3.8l8.1 5.2a1.2 1.2 0 010 2.02l-8.1 5.2A1.2 1.2 0 016.3 15.2V4.84z" />
                  </svg>
                  <span>${escapeHtml(t('playNow'))}</span>
                </a>

                <button type="button" class="btn-ghost" data-open-modal="${escapeHtml(game.id)}">
                  <span>${escapeHtml(t('viewDetails'))}</span>
                </button>

                <a class="btn-ghost btn-icon-only" href="${escapeHtml(game.repoUrl)}" target="_blank" rel="noopener noreferrer" title="${escapeHtml(t('sourceCode'))}" aria-label="${escapeHtml(t('sourceCode'))}">
                  <svg class="icon-sm" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>

                <button type="button" class="btn-ghost btn-icon-only" data-copy-url="${escapeHtml(game.playUrl)}" title="${escapeHtml(t('copyLink'))}" aria-label="${escapeHtml(t('copyLink'))}">
                  <svg class="icon-sm" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M8.5 11.5l3-3m-4.2 5.2l-1.1 1.1a3 3 0 11-4.24-4.24l1.1-1.1m8.48 0l1.1-1.1a3 3 0 00-4.24-4.24l-1.1 1.1" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </article>
        `;
      })
      .join('');

    bindCoverSpotlight();
  }

  function renderGuide() {
    if (!els.guideGrid) return;
    const items = t('guideItems');
    if (!Array.isArray(items)) return;

    els.guideGrid.innerHTML = items
      .map(
        (item) => `
          <div class="guide-card">
            <span class="guide-num">${escapeHtml(item.num)}</span>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.desc)}</p>
          </div>
        `
      )
      .join('');
  }

  function bindCoverSpotlight() {
    document.querySelectorAll('.game-cover').forEach((cover) => {
      const beam = cover.querySelector('.foxlight-beam');
      if (!beam) return;
      cover.addEventListener('mousemove', (e) => {
        const rect = cover.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        beam.style.setProperty('--mx', `${x.toFixed(1)}%`);
        beam.style.setProperty('--my', `${y.toFixed(1)}%`);
      });
    });
  }

  function openModal(gameId) {
    const game = GAMES.find((g) => g.id === gameId);
    if (!game || !els.modal || !els.modalBody) return;

    activeModalGameId = gameId;
    const loc = game[currentLang];

    els.modalBody.innerHTML = `
      <div class="modal-hero">
        ${renderCoverMarkup(game, true)}
      </div>
      <div class="modal-content" style="--card-accent: ${escapeHtml(game.accent)};">
        <div class="modal-header-row">
          <img class="modal-portrait" src="${escapeHtml(game.portraitImage)}" alt="${escapeHtml(loc.portraitCaption)}" />
          <div>
            <h3 id="modalTitle" class="modal-title">${escapeHtml(loc.title)}</h3>
            <p class="modal-subtitle">${escapeHtml(game.catalogNo)} · ${escapeHtml(loc.subtitle)}</p>
          </div>
        </div>

        <div class="modal-section">
          <h4>${escapeHtml(t('modalSynopsis'))}</h4>
          <p>${escapeHtml(loc.summary)}</p>
        </div>

        <div class="modal-section">
          <h4>${escapeHtml(t('modalHighlights'))}</h4>
          <ul class="modal-list">
            ${loc.highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
          </ul>
        </div>

        <div class="modal-section">
          <h4>${escapeHtml(t('modalControls'))}</h4>
          <div class="controls-grid">
            <div class="control-box">
              <span class="control-box-label">${escapeHtml(t('modalPcLabel'))}</span>
              <p>${escapeHtml(loc.controls.pc)}</p>
            </div>
            <div class="control-box">
              <span class="control-box-label">${escapeHtml(t('modalMobileLabel'))}</span>
              <p>${escapeHtml(loc.controls.mobile)}</p>
            </div>
          </div>
        </div>

        <div class="modal-section">
          <h4>${escapeHtml(t('modalMeta'))}</h4>
          <div class="meta-grid">
            <div class="meta-cell">
              <span>${escapeHtml(t('modalTech'))}</span>
              <strong>${escapeHtml(game.tech)}</strong>
            </div>
            <div class="meta-cell">
              <span>${escapeHtml(t('modalLicense'))}</span>
              <strong>${escapeHtml(game.license)}</strong>
            </div>
            <div class="meta-cell">
              <span>${escapeHtml(t('modalUpdated'))}</span>
              <strong>${escapeHtml(game.updated)}</strong>
            </div>
          </div>
        </div>

        <div class="modal-footer-actions">
          <a class="btn-play" href="${escapeHtml(game.playUrl)}" target="_blank" rel="noopener noreferrer">
            <svg class="icon-sm" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M6.3 4.84A1.2 1.2 0 018.14 3.8l8.1 5.2a1.2 1.2 0 010 2.02l-8.1 5.2A1.2 1.2 0 016.3 15.2V4.84z" />
            </svg>
            <span>${escapeHtml(t('playNow'))}</span>
          </a>
          <a class="btn btn-secondary" href="${escapeHtml(game.repoUrl)}" target="_blank" rel="noopener noreferrer">
            <span>${escapeHtml(t('sourceCode'))}</span>
          </a>
          <button type="button" class="btn btn-outline" data-copy-url="${escapeHtml(game.playUrl)}">
            <span>${escapeHtml(t('copyLink'))}</span>
          </button>
        </div>
      </div>
    `;

    els.modal.hidden = false;
    document.body.classList.add('modal-open');
    els.modalCloseBtn.focus();
  }

  function closeModal() {
    if (!els.modal || els.modal.hidden) return;
    els.modal.hidden = true;
    document.body.classList.remove('modal-open');
    activeModalGameId = null;
  }

  function showToast(message) {
    if (!els.toast) return;
    els.toast.textContent = message;
    els.toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      els.toast.classList.remove('is-visible');
    }, 2200);
  }

  async function copyUrl(url) {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        const input = document.createElement('input');
        input.value = url;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
      }
      showToast(t('copiedToast'));
    } catch (_) {
      showToast(url);
    }
  }

  function renderAll() {
    applyStaticTranslations();
    renderHeroQuickLinks();
    renderGames();
    renderGuide();
    if (activeModalGameId) {
      openModal(activeModalGameId);
    }
  }

  // Event Listeners
  if (els.langToggle) {
    els.langToggle.addEventListener('click', () => {
      currentLang = currentLang === 'zh' ? 'en' : 'zh';
      localStorage.setItem(STORAGE_LANG_KEY, currentLang);
      renderAll();
    });
  }

  els.filterChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      currentFilter = chip.getAttribute('data-filter') || 'all';
      els.filterChips.forEach((c) => {
        const active = c === chip;
        c.classList.toggle('is-active', active);
        c.setAttribute('aria-selected', String(active));
      });
      renderGames();
    });
  });

  document.addEventListener('click', (e) => {
    const modalTrigger = e.target.closest('[data-open-modal]');
    if (modalTrigger) {
      openModal(modalTrigger.getAttribute('data-open-modal'));
      return;
    }

    const copyTrigger = e.target.closest('[data-copy-url]');
    if (copyTrigger) {
      copyUrl(copyTrigger.getAttribute('data-copy-url'));
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      return;
    }
    if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('[data-open-modal].game-cover')) {
      e.preventDefault();
      openModal(e.target.getAttribute('data-open-modal'));
    }
  });

  if (els.modalCloseBtn) {
    els.modalCloseBtn.addEventListener('click', closeModal);
  }

  if (els.modal) {
    els.modal.addEventListener('click', (e) => {
      if (e.target === els.modal) closeModal();
    });
  }

  renderAll();
})();
