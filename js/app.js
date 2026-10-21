(function () {
  const C = window.C;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  let lang = store.get('lang') || ((navigator.language || 'fr').toLowerCase().startsWith('fr') ? 'fr' : 'en');
  const t = (v) => (v && typeof v === 'object' && !Array.isArray(v) && 'fr' in v ? v[lang] : v);
  const U = C.ui;
  const ln = (text, d = 0) => `<span class="ln"><span style="--d:${d}s">${text}</span></span>`;

  /* ---------- helpers ---------- */
  const visual = (p, ratio, img) => {
    if (img) return `<img src="${img}" alt="" loading="lazy">`;
    return `<div class="ph ph--${p.tone}" ${ratio ? `style="aspect-ratio:${ratio}"` : ''}><span>${t(U.placeholder)}</span></div>`;
  };
  const projectBySlug = (s) => C.projects.find((p) => p.slug === s);

  /* ---------- chrome ---------- */
  function renderHeader(route) {
    const a = (r, label) => `<a href="#/${r}" class="${route.name === r || (r === 'projets' && route.name === 'projet') ? 'active' : ''}">${t(label)}</a>`;
    $('#header').innerHTML = `
      <a class="logo" href="#/" aria-label="${C.site.name}" data-cursor="Home">CS</a>
      <nav class="nav">
        ${a('projets', U.nav.projects)}
        ${a('a-propos', U.nav.about)}
        <a href="#contact" data-scroll="contact">${t(U.nav.contact)}</a>
        <button class="lang" aria-label="Language">${lang === 'fr' ? 'EN' : 'FR'}</button>
      </nav>`;
    $('.lang').onclick = () => {
      lang = lang === 'fr' ? 'en' : 'fr';
      store.set('lang', lang);
      document.documentElement.lang = lang;
      render(parse());
    };
  }

  function footer() {
    const links = Object.entries(C.site.links).map(([n, u]) => `<a href="${u}" target="_blank" rel="noopener">${n}</a>`).join('');
    return `
      <footer class="foot" id="contact">
        <p class="eyebrow rv"><span class="dot"></span>${t(U.contactEyebrow)}</p>
        <h2 class="mega rv">${t(U.contactTitle)}<br><em>${t(U.contactTitle2)}</em></h2>
        <div class="foot-row">
          <a class="foot-mail" href="mailto:${C.site.email}">${C.site.email}</a>
          <a class="circle" href="mailto:${C.site.email}" data-cursor="@">${t(U.write)}</a>
        </div>
        <div class="foot-links">${links}</div>
        <div class="foot-bottom"><span>${t(U.rights)}</span><button data-top>${t(U.top)}</button></div>
      </footer>`;
  }

  /* ---------- views ---------- */
  function home() {
    const feat = C.projects.filter((p) => p.featured);
    const panels = feat.map((p, i) => `
      <a class="panel p-${p.tone}" href="#/projet/${p.slug}" data-cursor="${t(U.cursorView)}">
        <div class="panel-inner">
          <div class="panel-text">
            <div class="panel-num">0${i + 1} <small>${p.cat.map((c) => t(U.filters[c])).join(' · ')}</small></div>
            <div>
              <h3 class="mega">${t(p.title)}</h3>
              <p class="panel-line">${t(p.line)}</p>
              <span class="panel-cta">${t(U.seeProject)} <i>→</i></span>
            </div>
          </div>
          <div class="panel-visual">${visual(p, null, p.cover)}</div>
        </div>
      </a>`).join('');
    const words = [...U.marquee, ...U.marquee].map((w) => `<span>${w}</span>`).join('');

    return `
      <section class="hero" id="hero">
        <p class="eyebrow rv" style="--d:.9s"><span class="dot"></span>${t(U.avail)}</p>
        <div class="hero-photo rv" style="--d:.5s"><img src="${C.site.photo}" alt="${C.site.name}"></div>
        <h1 class="mega name" id="name">${ln('Charles', .1)}${ln('Surleraux', .22)}</h1>
        <p class="hero-sub rv" style="--d:.7s">${t(U.heroSub)}</p>
        <span class="sticker-hint rv" style="left:12%;top:36%;--d:1.2s">${t(U.hint)}</span>
        <button class="sticker s-terracotta" style="left:6%;top:24%;transform:rotate(-8deg)" data-cursor="${t(U.cursorDrag)}">Photo</button>
        <button class="sticker s-honey" style="left:34%;top:19%;transform:rotate(5deg)" data-cursor="${t(U.cursorDrag)}">Vidéo</button>
        <button class="sticker" style="left:20%;top:48%;transform:rotate(-3deg)" data-cursor="${t(U.cursorDrag)}">Social</button>
        <button class="sticker s-sage" style="left:46%;top:42%;transform:rotate(9deg)" data-cursor="${t(U.cursorDrag)}">Print</button>
        <button class="sticker s-honey" style="left:60%;top:30%;transform:rotate(-6deg)" data-cursor="${t(U.cursorDrag)}">IA ✺</button>
        <span class="scroll-hint">${t(U.scroll)}</span>
      </section>

      <div class="marquee" aria-hidden="true"><div class="marquee-track">${words}</div></div>

      <section class="statement"><p class="rv">${t(U.statement)}</p></section>

      <div class="sel-head">
        <p class="eyebrow rv">${t(U.selected)}</p>
        <h2 class="mega rv">${t(U.selectedTitle)}</h2>
      </div>
      <div class="stack" id="stack">${panels}</div>

      <div class="center"><a class="btn" href="#/projets">${t(U.allProjects)} (${C.projects.length}) →</a></div>

      <section class="teaser">
        <div class="portrait rv"><img src="${C.site.photo}" alt="${C.site.name}" loading="lazy"></div>
        <div>
          <p class="eyebrow rv">${t(U.nav.about)}</p>
          <h2 class="mega rv">${t(U.teaserTitle)}</h2>
          <p class="rv">${t(C.about.bio)[0]}</p>
          <a class="btn rv" href="#/a-propos">${t(U.teaserBtn)} →</a>
        </div>
      </section>
      ${footer()}`;
  }

  function projects() {
    const cats = ['all', 'video', 'photo', 'social', 'print'];
    const ratios = ['4/5', '1/1', '5/4', '4/5'];
    const cards = C.projects.map((p, i) => `
      <a class="card rv" data-cat="${p.cat.join(' ')}" href="#/projet/${p.slug}" data-cursor="${t(U.cursorView)}">
        <div class="card-media" style="aspect-ratio:${ratios[i % 4]}">${visual(p, null, p.cover)}</div>
        <div class="card-info"><h3>${t(p.title)}</h3><small>${p.cat.map((c) => t(U.filters[c])).join(' · ')}</small></div>
      </a>`).join('');
    return `
      <section class="page">
        <div class="page-head">
          <p class="eyebrow">${C.projects.length} ${t(U.nav.projects).toLowerCase()}</p>
          <h1 class="mega">${ln(t(U.allTitle))}</h1>
          <p class="rv">${t(U.allIntro)}</p>
        </div>
        <div class="filters">${cats.map((c, i) => `<button class="chip ${i === 0 ? 'on' : ''}" data-f="${c}">${t(U.filters[c])}</button>`).join('')}</div>
        <div class="grid" id="grid">${cards}</div>
      </section>
      ${footer()}`;
  }

  function project(slug) {
    const i = C.projects.findIndex((p) => p.slug === slug);
    if (i < 0) return notFound();
    const p = C.projects[i];
    const nx = C.projects[(i + 1) % C.projects.length];
    const gallery = p.gallery && p.gallery.length ? p.gallery : [null, null, null];
    return `
      <article class="page">
        <div class="pd-head">
          <a class="back" href="#/projets">${t(U.back)}</a>
          <h1 class="mega">${ln(t(p.title))}</h1>
        </div>
        <dl class="pd-meta rv">
          <div><dt>${t(U.meta.client)}</dt><dd>Atelier Jean Regniers</dd></div>
          <div><dt>${t(U.meta.role)}</dt><dd>${t(p.role)}</dd></div>
          <div><dt>${t(U.meta.year)}</dt><dd>${p.year}</dd></div>
          <div><dt>${t(U.meta.tools)}</dt><dd>${p.tools}</dd></div>
        </dl>
        <div class="pd-cover rv"><div>${visual(p, '16/9', p.cover)}</div></div>
        <div class="pd-text">
          <h2 class="rv">${t(p.line)}</h2>
          <div class="rv">${t(p.text).map((x) => `<p>${x}</p>`).join('')}<small>${t(U.draft)}</small></div>
        </div>
        <div class="pd-gal">${gallery.map((g) => `<div class="rv">${visual(p, null, g)}</div>`).join('')}</div>
        <a class="next" href="#/projet/${nx.slug}" data-cursor="${t(U.cursorView)}">
          <p class="eyebrow">${t(U.next)}</p>
          <h2 class="mega">${t(nx.title)} →</h2>
        </a>
      </article>
      ${footer()}`;
  }

  function about() {
    const A = C.about;
    return `
      <section class="page">
        <div class="page-head">
          <p class="eyebrow">${t(U.nav.about)}</p>
          <h1 class="mega" style="font-size:clamp(2.6rem,9vw,9rem)">${ln(t(A.title))}</h1>
        </div>
        <div class="about">
          <div class="portrait rv"><img src="${C.site.photo}" alt="${C.site.name}"></div>
          <div>
            <div class="bio rv">${t(A.bio).map((x) => `<p>${x}</p>`).join('')}</div>
            <h3 class="rv">${t(A.valuesTitle)}</h3>
            <ul class="tags fill rv">${t(A.values).map((v) => `<li>${v}</li>`).join('')}</ul>
            <h3 class="rv">${t(A.toolsTitle)}</h3>
            <ul class="tags rv">${A.tools.map((v) => `<li>${v}</li>`).join('')}</ul>
            <h3 class="rv">${t(A.timelineTitle)}</h3>
            <ul class="tl rv">${A.timeline.map((r) => `<li><b>${r.when}</b><div>${t(r.what)}<span>${r.where}</span></div></li>`).join('')}</ul>
            <h3 class="rv">${t(A.interestsTitle)}</h3>
            <p class="rv">${t(A.interests)}</p>
          </div>
        </div>
      </section>
      ${footer()}`;
  }

  function notFound() {
    return `<section class="page"><div class="page-head"><h1 class="mega">404</h1><p><a class="back" href="#/">← ${C.site.name}</a></p></div></section>`;
  }

  /* ---------- router ---------- */
  function parse() {
    const h = location.hash.replace(/^#\/?/, '');
    if (!h || h === 'contact') return { name: '' };
    const [name, arg] = h.split('/');
    return { name, arg };
  }
  const titles = { '': null, projets: U.nav.projects, 'a-propos': U.nav.about };

  let onScroll = null;
  function render(route) {
    const view = $('#view');
    let html;
    if (route.name === '') html = home();
    else if (route.name === 'projets') html = projects();
    else if (route.name === 'projet') html = project(route.arg);
    else if (route.name === 'a-propos') html = about();
    else html = notFound();
    view.innerHTML = html;
    renderHeader(route);
    document.documentElement.lang = lang;
    const p = route.name === 'projet' ? projectBySlug(route.arg) : null;
    document.title = p ? `${t(p.title)} — ${C.site.name}` : titles[route.name] ? `${t(titles[route.name])} — ${C.site.name}` : `${C.site.name} — ${lang === 'fr' ? 'Créatif & communication' : 'Creative & communication'}`;
    onScroll = null;
    initReveal();
    if (route.name === '') { initStickers(); initStack(); requestAnimationFrame(() => $('#name') && $('#name').classList.add('in')); }
    if (route.name === 'projets') initFilters();
  }

  let busy = false;
  async function navigate(first) {
    const route = parse();
    if (first) {
      render(route);
      await sleep(reduce ? 0 : 1000);
      leave();
      return;
    }
    if (busy) return;
    busy = true;
    const label = route.name === 'projets' ? t(U.nav.projects) : route.name === 'a-propos' ? t(U.nav.about) : route.name === 'projet' ? (projectBySlug(route.arg) ? t(projectBySlug(route.arg).title) : '') : C.site.name;
    $('#curtain-label').textContent = label;
    const c = $('#curtain');
    c.classList.remove('leave', 'notrans');
    c.classList.add('on');
    await sleep(reduce ? 0 : 700);
    render(route);
    window.scrollTo(0, 0);
    await sleep(120);
    leave();
    busy = false;
  }
  async function leave() {
    const c = $('#curtain');
    c.classList.add('leave');
    c.classList.remove('on');
    await sleep(reduce ? 0 : 700);
    c.classList.add('notrans');
    c.classList.remove('leave');
    void c.offsetWidth;
    c.classList.remove('notrans');
    document.dispatchEvent(new Event('revealcheck'));
  }

  /* ---------- reveal ---------- */
  let io;
  function initReveal() {
    if (io) io.disconnect();
    io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
    $$('.rv, .page-head .ln, .pd-head .ln').forEach((el) => io.observe(el));
  }

  /* ---------- stack (3 overlapping panels) ---------- */
  function initStack() {
    const panels = $$('.panel');
    if (!panels.length) return;
    onScroll = () => {
      panels.forEach((p, i) => {
        const next = panels[i + 1];
        if (!next) return;
        const r = next.getBoundingClientRect();
        const prog = Math.min(1, Math.max(0, 1 - r.top / innerHeight));
        const inner = p.firstElementChild;
        inner.style.transform = `scale(${1 - 0.07 * prog})`;
        inner.style.filter = `brightness(${1 - 0.4 * prog})`;
      });
    };
    onScroll();
  }
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!onScroll || ticking) return;
    ticking = true;
    requestAnimationFrame(() => { onScroll && onScroll(); ticking = false; });
  }, { passive: true });

  /* ---------- draggable stickers (le côté "explorer") ---------- */
  function initStickers() {
    $$('.sticker').forEach((el) => {
      let sx, sy, ox = 0, oy = 0, rot = (/rotate\((-?[\d.]+)deg\)/.exec(el.style.transform) || [0, 0])[1];
      const apply = () => { el.style.transform = `translate(${ox}px,${oy}px) rotate(${rot}deg)`; };
      apply();
      el.addEventListener('pointerdown', (e) => {
        el.setPointerCapture(e.pointerId);
        sx = e.clientX - ox; sy = e.clientY - oy;
        el.classList.add('dragging');
        const move = (m) => { ox = m.clientX - sx; oy = m.clientY - sy; apply(); };
        const up = () => { el.classList.remove('dragging'); el.removeEventListener('pointermove', move); el.removeEventListener('pointerup', up); el.removeEventListener('pointercancel', up); };
        el.addEventListener('pointermove', move);
        el.addEventListener('pointerup', up);
        el.addEventListener('pointercancel', up);
      });
    });
  }

  /* ---------- filters ---------- */
  function initFilters() {
    $$('.chip').forEach((b) => b.addEventListener('click', () => {
      $$('.chip').forEach((x) => x.classList.toggle('on', x === b));
      const f = b.dataset.f;
      $$('.card').forEach((c) => { c.hidden = !(f === 'all' || c.dataset.cat.split(' ').includes(f)); c.classList.add('in'); });
    }));
  }

  /* ---------- cursor ---------- */
  const cur = $('#cursor');
  if (matchMedia('(hover: hover) and (pointer: fine)').matches && !reduce) {
    document.body.classList.add('has-cursor');
    let x = 0, y = 0, cx = 0, cy = 0;
    window.addEventListener('mousemove', (e) => { x = e.clientX; y = e.clientY; cur.classList.add('show'); });
    document.addEventListener('mouseleave', () => cur.classList.remove('show'));
    (function loop() {
      cx += (x - cx) * 0.2; cy += (y - cy) * 0.2;
      cur.style.transform = `translate(${cx}px,${cy}px)`;
      requestAnimationFrame(loop);
    })();
    document.addEventListener('mouseover', (e) => {
      const d = e.target.closest('[data-cursor]');
      const l = e.target.closest('a,button');
      cur.classList.toggle('big', !!d);
      cur.classList.toggle('link', !d && !!l);
      $('span', cur).textContent = d ? d.dataset.cursor : '';
    });
  }

  /* ---------- global clicks ---------- */
  document.addEventListener('click', (e) => {
    const s = e.target.closest('[data-scroll]');
    if (s) {
      e.preventDefault();
      const target = $('#' + s.dataset.scroll);
      if (target) target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
      return;
    }
    if (e.target.closest('[data-top]')) window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    const a = e.target.closest('a[href^="#/"]');
    if (a && a.getAttribute('href') === location.hash) e.preventDefault();
  });

  window.addEventListener('hashchange', () => navigate(false));
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  navigate(true);
})();
