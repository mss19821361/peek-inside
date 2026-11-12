/* Peek Inside — app shell: home screen, scene viewer, info cards, progress. */
(function () {
  const THINGS = [];
  window.registerThing = t => THINGS.push(t);

  const COMING = [
    { emoji: '🚢', name: 'Ship' }, { emoji: '🏰', name: 'Castle' }, { emoji: '🚀', name: 'Rocket' },
    { emoji: '🌋', name: 'Volcano' }
  ];

  const store = {
    get(id) { try { return new Set(JSON.parse(localStorage.getItem('peek.explored.' + id) || '[]')); } catch (e) { return new Set(); } },
    set(id, s) { try { localStorage.setItem('peek.explored.' + id, JSON.stringify([...s])); } catch (e) {} }
  };

  const app = document.getElementById('app');
  let cleanup = null;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  function route() {
    if (cleanup) { cleanup(); cleanup = null; }
    stopSpeaking();
    if (window.PeekAsk) PeekAsk.close();
    const id = location.hash.replace(/^#\/?/, '');
    const t = THINGS.find(t => t.id === id);
    t ? showThing(t) : showHome();
  }

  /* ---------- Home ---------- */
  function showHome() {
    const tiles = THINGS.map(t => {
      const n = store.get(t.id).size, total = t.parts.length, pct = Math.round(100 * n / total);
      return `<button class="tile" data-id="${t.id}" style="--c1:${t.color};--c2:${t.color2}">
        <span class="tile-emoji">${t.emoji}</span>
        <span class="tile-name">${esc(t.name)}</span>
        <span class="tile-tag">${esc(t.tagline)}</span>
        <span class="tile-bar"><i style="width:${pct}%"></i></span>
        <span class="tile-count">${n === total ? '🏆 All explored!' : `⭐ ${n} of ${total} explored`}</span>
      </button>`;
    }).join('') + COMING.map(c => `<div class="tile soon"><span class="tile-emoji">${c.emoji}</span><span class="tile-name">${esc(c.name)}</span><span class="tile-tag">Coming soon</span><span class="lock">🔒</span></div>`).join('');
    app.innerHTML = `<div class="home">
      <div class="clouds"><i></i><i></i><i></i></div>
      <div class="home-mail">${window.PeekAsk ? PeekAsk.mailButton() : ''}</div>
      <header><h1>Peek Inside!</h1><p>Tap a picture to see how it works</p></header>
      <main class="grid">${tiles}</main>
    </div>`;
    app.querySelectorAll('.tile[data-id]').forEach(b => b.addEventListener('click', () => { location.hash = '#/' + b.dataset.id; }));
    if (window.PeekAsk) PeekAsk.wire(app, () => null);
  }

  /* ---------- Scene ---------- */
  function showThing(t) {
    const explored = store.get(t.id);
    const project = t.project || (a => ISO.P(...a));
    const L = Object.assign({ what: '🤔 What is it?', does: '⚙️ What happens here?', fact: '🤩 Wow fact!', who: '👷 Who works here?' }, t.labels || {});
    app.innerHTML = `<div class="scene" style="--accent:${t.color};--accent2:${t.color2};${t.bg ? 'background:' + t.bg : ''}">
      <div class="clouds"><i></i><i></i><i></i></div>
      <svg id="svg" xmlns="http://www.w3.org/2000/svg"><defs id="defs"></defs><g id="world"></g><g id="pins"></g></svg>
      <div class="topbar">
        <button class="round" id="homeBtn" aria-label="Home">🏠</button>
        <div class="chip title">${t.emoji} ${esc(t.name)}</div>
        <div class="chip prog" id="prog"></div>
        ${window.PeekAsk ? PeekAsk.mailButton() : ''}
      </div>
      <div class="zoom">
        <button id="zin" aria-label="Zoom in">＋</button>
        <button id="zout" aria-label="Zoom out">−</button>
        <button id="zhome" aria-label="See everything">⤢</button>
      </div>
      <div class="hint" id="hint">👆 Tap the bouncing pins to explore<br>🤏 Pinch to zoom · drag to move</div>
      <div class="panel" id="panel" aria-live="polite"></div>
      <div class="celebrate" id="cel"></div>
    </div>`;
    const svg = app.querySelector('#svg'), world = app.querySelector('#world'), pinsLayer = app.querySelector('#pins');
    const defs = app.querySelector('#defs'), panel = app.querySelector('#panel'), prog = app.querySelector('#prog');
    ISO.setDefs(defs);
    t.defs && t.defs(defs);
    const scene = t.build(world);

    // Pins
    const pinEls = {};
    t.parts.forEach(p => {
      const [x, y] = project(p.anchor);
      const pg = ISO.el('g', { class: 'pin', 'data-part': p.id, transform: `translate(${x.toFixed(1)},${y.toFixed(1)})` }, pinsLayer);
      const sc = ISO.el('g', { class: 'pin-scale' }, pg);
      ISO.el('ellipse', { cx: 0, cy: 0, rx: 7, ry: 3.5, fill: 'rgba(0,0,0,0.25)' }, sc);
      const bob = ISO.el('g', { class: 'bob', style: `animation-delay:${(Math.random() * 1.2).toFixed(2)}s` }, sc);
      ISO.el('circle', { class: 'pulse', cx: 0, cy: -32, r: 18 }, bob);
      ISO.el('path', { class: 'drop', d: 'M0,-4 C-5,-12 -18,-20 -18,-32 A18,18 0 1 1 18,-32 C18,-20 5,-12 0,-4 Z' }, bob);
      ISO.el('circle', { cx: 0, cy: -32, r: 14, fill: '#fff' }, bob);
      const tx = ISO.el('text', { x: 0, y: -31, 'text-anchor': 'middle', 'dominant-baseline': 'central', 'font-size': 16 }, bob);
      tx.textContent = p.emoji;
      const ck = ISO.el('g', { class: 'check', transform: 'translate(13,-46)' }, bob);
      ISO.el('circle', { r: 7, fill: '#43A047', stroke: '#fff', 'stroke-width': 2 }, ck);
      ISO.el('path', { d: 'M-3,0 L-1,2.5 L3.5,-2.5', stroke: '#fff', 'stroke-width': 2, fill: 'none', 'stroke-linecap': 'round' }, ck);
      pinEls[p.id] = pg;
    });
    function refreshPins() {
      t.parts.forEach(p => pinEls[p.id].classList.toggle('done', explored.has(p.id)));
      prog.textContent = `⭐ ${explored.size} / ${t.parts.length}`;
    }
    refreshPins();

    let currentZoom = 1;
    function scalePins(z) {
      currentZoom = z;
      // pin radius in screen px (smaller on phones), with partial zoom compensation
      const sw = svg.getBoundingClientRect().width || 1000, homeW = view ? view.homeW() : t.viewBox.w;
      const rPx = Math.max(10, Math.min(16, sw / 40));
      const k = (rPx * (homeW / sw) / 18 / Math.pow(z, 0.72)).toFixed(3);
      pinsLayer.querySelectorAll('.pin-scale').forEach(s => s.setAttribute('transform', `scale(${k})`));
    }

    let selected = null, view = null;
    view = ISO.panZoom(svg, t.viewBox, scalePins, target => {
      const hit = target && target.closest && target.closest('[data-part]');
      if (hit) openPart(hit.getAttribute('data-part'), true); else closePanel();
    });

    // phones in portrait: start a bit closer in
    if (t.phoneZoom && window.innerWidth < 700 && window.innerHeight > window.innerWidth) view.setZoom(t.phoneZoom);
    scalePins(view.zoom());

    function focusOn(p) {
      const [ax, ay] = project(p.anchor);
      const v = view.view(), wide = window.innerWidth >= 760;
      const w = Math.min(v.w, (view.zoom() < 1.5 ? v.w / 1.6 : v.w));
      const h = w * v.h / v.w;
      // keep the part visible beside (iPad) or above (iPhone) the info card
      const cx = wide ? ax + w * 0.2 : ax, cy = wide ? ay : ay + h * 0.2;
      view.flyTo(cx, cy, w);
    }

    function openPart(id, fly) {
      const i = t.parts.findIndex(p => p.id === id); if (i < 0) return;
      const p = t.parts[i];
      const first = !explored.has(id);
      explored.add(id); store.set(t.id, explored); refreshPins();
      if (selected) world.querySelectorAll(`[data-part="${selected}"]`).forEach(e => e.classList.remove('sel'));
      selected = id;
      world.querySelectorAll(`[data-part="${id}"]`).forEach(e => e.classList.add('sel'));
      Object.values(pinEls).forEach(e => e.classList.toggle('active', e === pinEls[id]));
      stopSpeaking();
      const steps = p.steps ? `<ol class="steps">${p.steps.map(([e, s]) => `<li><span>${e}</span>${esc(s)}</li>`).join('')}</ol>` : '';
      panel.innerHTML = `<div class="card">
        <div class="card-head"><span class="big">${p.emoji}</span><div><h2>${esc(p.name)}</h2><p>${esc(p.short)}</p></div>
          <button class="x" id="closeBtn" aria-label="Close">✕</button></div>
        <div class="card-body">
          <section><h3>${L.what}</h3><p>${esc(p.what)}</p></section>
          <section><h3>${L.does}</h3><p>${esc(p.does)}</p>${steps}</section>
          <section class="fact"><h3>${L.fact}</h3><p>${esc(p.fact)}</p></section>
          <section><h3>${L.who}</h3><p>${esc(p.who)}</p></section>
        </div>
        ${window.PeekAsk && PeekAsk.enabled ? '<button class="askbtn" id="askBtn">❓ I have a question!</button>' : ''}
        <div class="card-foot">
          <button class="btn" id="speakBtn">🔊 Read to me</button>
          <button class="btn primary" id="nextBtn">Next ➜</button>
        </div></div>`;
      panel.classList.add('open');
      panel.querySelector('.card-body').scrollTop = 0;
      panel.querySelector('#closeBtn').onclick = closePanel;
      const askBtn = panel.querySelector('#askBtn');
      if (askBtn) askBtn.onclick = () => { stopSpeaking(); PeekAsk.openAsk(t, p); };
      panel.querySelector('#speakBtn').onclick = e => speak(e.currentTarget, [p.name, p.what, p.does, ...(p.steps || []).map(s => s[1]), 'Wow fact! ' + p.fact].join('. '), `audio/${t.id}/${p.id}.mp3`);
      panel.querySelector('#nextBtn').onclick = () => {
        const rest = t.parts.slice(i + 1).concat(t.parts.slice(0, i + 1));
        const nxt = rest.find(q => !explored.has(q.id)) || t.parts[(i + 1) % t.parts.length];
        openPart(nxt.id, true);
      };
      if (fly) focusOn(p);
      hideHint();
      if (first && explored.size === t.parts.length) celebrate();
    }
    function closePanel() {
      stopSpeaking();
      panel.classList.remove('open');
      if (selected) world.querySelectorAll(`[data-part="${selected}"]`).forEach(e => e.classList.remove('sel'));
      Object.values(pinEls).forEach(e => e.classList.remove('active'));
      selected = null;
    }
    function celebrate() {
      const cel = app.querySelector('#cel');
      const bits = Array.from({ length: 60 }, (_, k) => `<i style="left:${Math.random() * 100}%;background:hsl(${Math.random() * 360},90%,60%);animation-delay:${(Math.random() * 0.8).toFixed(2)}s;animation-duration:${(2 + Math.random() * 1.5).toFixed(2)}s"></i>`).join('');
      cel.innerHTML = `${bits}<div class="trophy"><div>🏆</div><b>${esc(t.name)} Expert!</b><span>You explored every part!</span><button class="btn primary" id="yay">Yay!</button></div>`;
      cel.classList.add('show');
      cel.querySelector('#yay').onclick = () => cel.classList.remove('show');
    }

    const hint = app.querySelector('#hint');
    const hintTimer = setTimeout(hideHint, 7000);
    function hideHint() { hint.classList.add('gone'); }

    app.querySelector('#homeBtn').onclick = () => { location.hash = ''; };
    if (window.PeekAsk) PeekAsk.wire(app, () => t);
    app.querySelector('#zin').onclick = () => view.zoomBy(1.5);
    app.querySelector('#zout').onclick = () => view.zoomBy(1 / 1.5);
    app.querySelector('#zhome').onclick = () => view.home(true);

    let raf = 0; const t0 = performance.now();
    (function loop(now) { scene.tick && scene.tick((now - t0) / 1000); raf = requestAnimationFrame(loop); })(t0);
    const onKey = e => { if (e.key === 'Escape') closePanel(); };
    document.addEventListener('keydown', onKey);
    cleanup = () => { cancelAnimationFrame(raf); clearTimeout(hintTimer); view.destroy(); document.removeEventListener('keydown', onKey); };
  }

  /* ---------- Read aloud ----------
     Plays the recorded voice file audio/<thing>/<part>.mp3.
     If it is missing (e.g. you just added a new part), falls back to the device voice. */
  let speakingBtn = null;
  const player = new Audio();
  player.preload = 'auto';
  function resetBtn() { if (speakingBtn) { speakingBtn.textContent = '🔊 Read to me'; speakingBtn = null; } }
  function stopSpeaking() {
    player.pause();
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    resetBtn();
  }
  function speak(btn, text, src) {
    if (speakingBtn === btn) { stopSpeaking(); return; }
    stopSpeaking();
    speakingBtn = btn; btn.textContent = '⏹ Stop';
    if (!src) { deviceVoice(btn, text); return; }
    player.onended = () => { if (speakingBtn === btn) resetBtn(); };
    player.onerror = () => { if (speakingBtn === btn) deviceVoice(btn, text); };
    player.src = src;
    player.currentTime = 0;
    const pr = player.play();
    if (pr && pr.catch) pr.catch(() => { if (speakingBtn === btn) deviceVoice(btn, text); });
  }
  function bestVoice() {
    const vs = speechSynthesis.getVoices().filter(v => /^en/i.test(v.lang));
    const score = v => (/premium/i.test(v.name) ? 4 : 0) + (/enhanced/i.test(v.name) ? 3 : 0) + (/en-GB/i.test(v.lang) ? 1 : 0) + (/Ava|Zoe|Serena|Kate|Samantha/.test(v.name) ? 1 : 0);
    return vs.sort((a, b) => score(b) - score(a))[0];
  }
  function deviceVoice(btn, text) {
    if (!('speechSynthesis' in window)) { resetBtn(); return; }
    const u = new SpeechSynthesisUtterance(text.replace(/[\u{1F000}-\u{1FFFF}\u{2600}-\u{27BF}]/gu, ''));
    const v = bestVoice(); if (v) { u.voice = v; u.lang = v.lang; } else u.lang = 'en-GB';
    u.rate = 0.92;
    u.onend = () => { if (speakingBtn === btn) resetBtn(); };
    speechSynthesis.speak(u);
  }
  document.addEventListener('visibilitychange', () => { if (document.hidden) stopSpeaking(); });
  window.PeekVoice = { say: (btn, text) => speak(btn, text, null), stop: stopSpeaking };

  /* ---------- Boot ---------- */
  document.addEventListener('gesturestart', e => e.preventDefault());
  document.addEventListener('dblclick', e => e.preventDefault());
  window.addEventListener('hashchange', route);
  window.addEventListener('DOMContentLoaded', () => { route(); if (window.PeekAsk) PeekAsk.start(); });
  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
  }
})();
