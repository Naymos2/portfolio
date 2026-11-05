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
      <div class="intro" id="intro">
      <section class="hero" id="hero">
        <div class="hero-photo" id="hero-photo">
          <div class="hero-card rv" style="--d:.5s">
            <div class="hero-frames">
              ${[1, 2, 3, 4].map((n) => `<img class="frame" src="assets/intro/${n}.webp" alt="${n === 4 ? C.site.name : ''}" decoding="async">`).join('')}
            </div>
            ${U.desk.map((d, i) => `<button class="spot" style="left:${d.x}%;top:${d.y}%" data-i="${i}" data-cursor="${t(d.label)}" aria-label="${t(d.label)} : ${t(d.say)}"></button>`).join('')}
            <p class="bubble" id="bubble"><span></span></p>
          </div>
        </div>
        <h1 class="mega name" id="name">${ln('Charles', .1)}${ln('Surleraux', .22)}</h1>
        <p class="hero-sub rv" style="--d:.7s">${t(U.heroSub)}</p>
        <span class="sticker-hint rv" style="left:9%;top:17.5%;--d:1.2s">${t(U.hint)}</span>
        <button class="sticker s-terracotta" style="left:6%;top:24%;transform:rotate(-8deg)" data-cursor="${t(U.cursorDrag)}">Photo</button>
        <button class="sticker s-honey" style="left:34%;top:19%;transform:rotate(5deg)" data-cursor="${t(U.cursorDrag)}">Vidéo</button>
        <button class="sticker" style="left:21%;top:27%;transform:rotate(-3deg)" data-cursor="${t(U.cursorDrag)}">Social</button>
        <button class="sticker s-sage" style="left:45%;top:29%;transform:rotate(9deg)" data-cursor="${t(U.cursorDrag)}">Print</button>
        <button class="sticker s-honey" style="left:23%;top:15%;transform:rotate(-6deg)" data-cursor="${t(U.cursorDrag)}">IA ✺</button>
        <span class="scroll-hint">${t(U.scroll)}</span>
      </section>
      </div>

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
    if (p.story) return storyView(p, nx);
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
        ${p.video
          ? `<div class="pd-video p-${p.tone} rv"><video src="${p.video}" poster="${p.cover}" controls playsinline preload="metadata"></video></div>`
          : `<div class="pd-cover rv"><div>${visual(p, '16/9', p.cover)}</div></div>`}
        <div class="pd-text">
          <h2 class="rv">${t(p.line)}</h2>
          <div class="rv">${t(p.text).map((x) => `<p>${x}</p>`).join('')}<small>${t(U.draft)}</small></div>
        </div>
        <div class="pd-gal ${p.video ? 'pd-gal--v' : ''}">${gallery.map((g) => `<div class="rv">${visual(p, null, g)}</div>`).join('')}</div>
        <a class="next" href="#/projet/${nx.slug}" data-cursor="${t(U.cursorView)}">
          <p class="eyebrow">${t(U.next)}</p>
          <h2 class="mega">${t(nx.title)} →</h2>
        </a>
      </article>
      ${footer()}`;
  }

  function storyView(p, nx) {
    const S = p.story;
    const media = (c) => {
      if (c.images) return `<div class="ch-images">${c.images.map((g) => `<div class="rv"><img src="${g}" alt="" loading="lazy"></div>`).join('')}</div>`;
      return `<div class="ch-media ch-media--${c.format} rv"><video src="${t(c.video)}" poster="${c.poster}" controls playsinline preload="metadata"></video></div>`;
    };
    const chapters = S.chapters.map((c, i) => `
      <section class="ch ${c.format === 'wide' || c.images ? 'ch--wide' : ''}">
        <div class="ch-text">
          <p class="ch-kicker rv"><b>0${i + 1}</b>${t(c.kicker)}</p>
          <h2 class="rv">${t(c.title)}</h2>
          <div class="rv">${t(c.text).map((x) => `<p>${x}</p>`).join('')}</div>
          ${c.quote ? `<blockquote class="rv">« ${t(c.quote)} »</blockquote>` : ''}
        </div>
        ${media(c)}
      </section>`).join('');
    return `
      <article class="page story">
        <div class="st-progress" id="st-progress"></div>
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
        <div class="st-intro">${t(S.intro).map((x) => `<p class="rv">${x}</p>`).join('')}</div>
        <ul class="st-stats">${S.stats.map((x) => `<li class="rv"><b>${x.value}</b>${t(x.label)}</li>`).join('')}</ul>
        ${chapters}
        <div class="st-closing"><p class="rv">« ${t(S.closing)} »</p><small class="rv">${t(S.closingBy)}</small></div>
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
    if (route.name === '') { initStickers(); initStack(); initIntro(); requestAnimationFrame(() => $('#name') && $('#name').classList.add('in')); }
    if (route.name === 'projets') initFilters();
    if ($('#st-progress')) initProgress();
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

  /* ---------- story: progress bar ---------- */
  function initProgress() {
    const bar = $('#st-progress');
    onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
    };
    onScroll();
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
  /* ---------- intro : je me retourne quand on scrolle ---------- */
  const clamp01 = (x) => Math.min(1, Math.max(0, x));
  const smooth = (a, b, x) => { const k = clamp01((x - a) / (b - a)); return k * k * (3 - 2 * k); };
  function initIntro() {
    const sec = $('#intro');
    if (!sec) return;
    const hero = $('#hero'), photo = $('#hero-photo'), name = $('#name'), hint = $('.scroll-hint');
    const frames = $$('.frame'), lines = $$('.ln', name), spots = $$('.spot');
    const bubble = $('#bubble span');
    const fades = [[0.18, 0.26], [0.40, 0.48], [0.62, 0.70]];
    let geo = {}, step = -1, active = null;

    const say = (text) => {
      if (bubble.textContent === text) return;
      bubble.textContent = text;
      bubble.classList.remove('pop');
      void bubble.offsetWidth;
      bubble.classList.add('pop');
    };
    const measure = () => {
      const [a, b] = lines.map((l) => l.firstElementChild);
      const textW = Math.max(a.offsetWidth, b.offsetWidth);
      const room = photo.offsetLeft - name.offsetLeft - 24;
      geo = { wide: innerWidth > 800, shift: b.offsetLeft - a.offsetLeft, end: Math.min(0.62, room / textW) };
    };
    const update = () => {
      const max = sec.offsetHeight - innerHeight;
      const p = reduce || max <= 0 ? 1 : clamp01(-sec.getBoundingClientRect().top / max);
      const e = smooth(0, 0.55, p);
      const s = geo.wide ? 0.5 + 0.5 * e : 0.82 + 0.18 * e;
      const tx = geo.wide ? -(1 - e) * innerWidth * 0.07 : 0;
      photo.style.transform = `translateX(${tx}px) scale(${s}) rotate(${3 * (1 - e)}deg)`;
      photo.style.setProperty('--inv', 1 / s);
      name.style.transform = geo.wide ? `scale(${1 + (geo.end - 1) * e})` : '';
      lines[1].style.transform = geo.wide ? `translateX(${-geo.shift * e}px)` : '';
      fades.forEach(([a, b], i) => { frames[i + 1].style.opacity = smooth(a, b, p); });
      hint.style.opacity = 1 - smooth(0.02, 0.1, p);
      const desk = p > 0.72;
      hero.classList.toggle('desk', desk);
      hero.classList.toggle('past', p > 0.08);
      if (!desk) active = null;
      step = p < 0.22 ? 0 : p < 0.44 ? 1 : p < 0.66 ? 2 : 3;
      say(t(active !== null ? U.desk[active].say : U.intro[step]));
    };

    const pick = (i) => {
      active = i;
      spots.forEach((b, k) => b.classList.toggle('on', k === i));
      say(t(i !== null ? U.desk[i].say : U.intro[step]));
    };
    spots.forEach((b, i) => {
      b.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') pick(i); });
      b.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') pick(null); });
      b.addEventListener('focus', () => pick(i));
      b.addEventListener('blur', () => pick(null));
      b.addEventListener('click', (e) => { e.stopPropagation(); pick(i); });
    });
    hero.addEventListener('click', () => { if (active !== null) pick(null); });

    measure();
    update();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (sec.isConnected) { measure(); update(); } });
    window.addEventListener('resize', () => { if (sec.isConnected) { measure(); update(); } });
    const prev = onScroll;
    onScroll = () => { if (prev) prev(); update(); };
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
    window.addEventListener('mousemove', (e) => { x = e.clientX; y = e.clientY; cur.classList.add('show'); cur.classList.toggle('flip', x > innerWidth - 120); });
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

  /* une seule vidéo à la fois */
  document.addEventListener('play', (e) => {
    $$('video').forEach((v) => { if (v !== e.target) v.pause(); });
  }, true);

  window.addEventListener('hashchange', () => navigate(false));
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  navigate(true);
})();
