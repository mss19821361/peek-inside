/* Peek Inside — "I have a question!" + mailbox. No server:
   questions go out by email (Mail app), answers come back from answers.txt in the repo. */
(function () {
  const CFG = window.PEEK_CONFIG || {};
  const EMAIL = (CFG.PARENT_EMAIL || '').trim();
  const LS = {
    get(k, d) { try { const v = localStorage.getItem('peek.' + k); return v == null ? d : v; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('peek.' + k, v); } catch (e) {} }
  };
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const loadQs = () => { try { return JSON.parse(LS.get('questions', '[]')); } catch (e) { return []; } };
  const saveQs = qs => LS.set('questions', JSON.stringify(qs));
  const seenSet = () => new Set(JSON.parse(LS.get('seen', '[]')));
  const markSeen = id => { const s = seenSet(); s.add(id); LS.set('seen', JSON.stringify([...s])); };

  let answers = {}, pollTimer = 0, layer = null;

  function repo() {
    if (CFG.GITHUB_REPO) return CFG.GITHUB_REPO;
    const h = location.hostname;
    if (/\.github\.io$/i.test(h)) {
      const user = h.split('.')[0], seg = location.pathname.split('/').filter(Boolean)[0];
      return user + '/' + (seg && !/\.html?$/.test(seg) ? seg : h);
    }
    return '';
  }
  function newId() {
    const A = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789', used = new Set(loadQs().map(q => q.id));
    let id; do { id = Array.from({ length: 4 }, () => A[Math.floor(Math.random() * A.length)]).join(''); } while (used.has(id));
    return id;
  }

  /* ---------- answers.txt ---------- */
  function parseAnswers(txt) {
    const out = {}; let cur = null;
    txt.split(/\r?\n/).forEach(line => {
      const t = line.trim();
      if (t.startsWith('//')) return;
      const h = t.match(/^#\s*([A-Za-z0-9]{3,8})\s*$/);
      if (h) { cur = { id: h[1].toUpperCase(), lines: [], picture: '', from: '' }; out[cur.id] = cur; return; }
      if (!cur) return;
      const kv = t.match(/^(picture|emoji|image|from)\s*:\s*(.*)$/i);
      if (kv) { if (/from/i.test(kv[1])) cur.from = kv[2].trim(); else cur.picture = kv[2].trim(); return; }
      cur.lines.push(t);
    });
    for (const id in out) {
      const a = out[id];
      a.paras = a.lines.join('\n').split(/\n\s*\n/).map(p => p.replace(/\n/g, ' ').trim()).filter(Boolean);
      if (!a.paras.length || /^\(?write your answer/i.test(a.paras[0])) delete out[id];
    }
    return out;
  }
  const answeredQs = () => loadQs().filter(q => answers[q.id]);
  const unseen = () => { const s = seenSet(); return answeredQs().filter(q => !s.has(q.id)).length; };
  async function poll(quiet) {
    if (!EMAIL || !loadQs().length) { paintBadges(); return; }
    try {
      const r = await fetch('answers.txt?t=' + Date.now(), { cache: 'no-store' });
      if (!r.ok) return;
      const before = unseen();
      answers = parseAnswers(await r.text());
      LS.set('answersCache', JSON.stringify(answers));
      const after = unseen();
      paintBadges();
      if (!quiet && after > before) { chime(); toast('📬 You got a letter!'); }
    } catch (e) { /* offline */ }
  }
  try { answers = JSON.parse(LS.get('answersCache', '{}')); } catch (e) { answers = {}; }

  function paintBadges() {
    const n = unseen();
    document.querySelectorAll('.mailbtn').forEach(b => {
      b.querySelector('.badge').textContent = n || '';
      b.classList.toggle('has-new', n > 0);
    });
  }

  /* ---------- little sounds + toast ---------- */
  let actx = null;
  document.addEventListener('pointerdown', () => {
    try { if (!actx) actx = new (window.AudioContext || window.webkitAudioContext)(); if (actx.state === 'suspended') actx.resume(); } catch (e) {}
  }, { passive: true });
  function chime() {
    if (!actx) return;
    const t = actx.currentTime;
    [[784, 0], [1047, 0.16], [1319, 0.32]].forEach(([f, d]) => {
      const o = actx.createOscillator(), g = actx.createGain();
      o.type = 'sine'; o.frequency.value = f;
      g.gain.setValueAtTime(0.0001, t + d); g.gain.exponentialRampToValueAtTime(0.25, t + d + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + d + 0.6);
      o.connect(g).connect(actx.destination); o.start(t + d); o.stop(t + d + 0.65);
    });
  }
  function toast(msg) {
    const t = document.createElement('div'); t.className = 'toast'; t.textContent = msg;
    document.body.appendChild(t); setTimeout(() => t.classList.add('show'), 20);
    t.onclick = () => openMailbox();
    setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 500); }, 5000);
  }

  /* ---------- overlay helper ---------- */
  function overlay(html, cls) {
    closeOverlay();
    layer = document.createElement('div');
    layer.className = 'ask-layer ' + (cls || '');
    layer.innerHTML = `<div class="ask-card">${html}</div>`;
    layer.addEventListener('click', e => { if (e.target === layer) closeOverlay(); });
    document.body.appendChild(layer);
    requestAnimationFrame(() => layer && layer.classList.add('show'));
    return layer;
  }
  function closeOverlay() {
    stopListening();
    if (layer) { const l = layer; layer = null; l.classList.remove('show'); setTimeout(() => l.remove(), 250); }
  }

  /* ---------- speech-to-text ---------- */
  let rec = null;
  function stopListening() { if (rec) { try { rec.stop(); } catch (e) {} rec = null; } document.querySelectorAll('.mic.on').forEach(m => m.classList.remove('on')); }
  function listen(btn, field, note) {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (rec) { stopListening(); return; }
    if (!SR) { field.focus(); note.textContent = 'Tap the 🎤 on the keyboard and speak!'; return; }
    const start = field.value ? field.value.trim() + ' ' : '';
    rec = new SR();
    rec.lang = CFG.SPEECH_LANG || 'en-GB'; rec.interimResults = true; rec.continuous = false;
    rec.onresult = e => {
      let s = ''; for (let i = 0; i < e.results.length; i++) s += e.results[i][0].transcript;
      field.value = start + s.charAt(0).toUpperCase() + s.slice(1);
    };
    rec.onerror = () => { stopListening(); field.focus(); note.textContent = 'I could not hear you. Try the 🎤 on the keyboard!'; };
    rec.onend = () => { stopListening(); if (field.value && !/[?!.]$/.test(field.value.trim())) field.value = field.value.trim() + '?'; };
    btn.classList.add('on'); note.textContent = 'Listening… ask your question!';
    try { rec.start(); } catch (e) { stopListening(); field.focus(); }
  }

  /* ---------- ask + email ---------- */
  function mailtoFor(q) {
    const r = repo();
    const subject = `Peek Inside question #${q.id}${q.name ? ' from ' + q.name : ''}`;
    const body = [
      `${q.name || 'Someone'} asked:`, '', `“${q.text}”`, '',
      `Topic: ${q.thingName || 'Anything'}${q.partName ? ' → ' + q.partName : ''}`,
      `Asked: ${new Date(q.created).toLocaleString()}`, '',
      '------------------------------',
      'TO ANSWER: add this to answers.txt' + (r ? ':' : ' in your GitHub repo.'),
      r ? `https://github.com/${r}/edit/main/answers.txt` : '', '',
      `# ${q.id}`,
      '(write your answer here)',
      'picture: ' + (q.emoji || '✨'),
      '------------------------------'
    ].join('\n');
    return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  function openMail(q) { const u = mailtoFor(q); window.__lastMailto = u; location.href = u; }

  function openAsk(thing, part) {
    if (!EMAIL) return;
    const about = part ? part.name : (thing ? thing.name : 'anything');
    const L = overlay(`<div class="ask-head"><span class="big">${part ? part.emoji : '❓'}</span><div><h2>Ask a question</h2><p>About: ${esc(about)}</p></div><button class="x" aria-label="Close">✕</button></div>
      <div class="ask-body">
        <button class="mic" id="mic" aria-label="Talk"><span>🎤</span></button>
        <p class="note" id="note">Tap the microphone and talk, or type below</p>
        <textarea id="q" class="field" rows="3" maxlength="500" placeholder="I wonder…"></textarea>
        <label class="who">Your name <input id="name" class="field small" maxlength="40" value="${esc(LS.get('name', ''))}" placeholder="optional"></label>
        <p class="err" id="err"></p>
      </div>
      <div class="ask-foot"><button class="btn primary" id="send">Send ✉️</button></div>`);
    const field = L.querySelector('#q'), note = L.querySelector('#note');
    L.querySelector('.x').onclick = closeOverlay;
    L.querySelector('#mic').onclick = e => listen(e.currentTarget, field, note);
    L.querySelector('#send').onclick = () => {
      stopListening();
      const text = field.value.trim(), name = L.querySelector('#name').value.trim();
      if (text.length < 3) { L.querySelector('#err').textContent = 'Say or type your question first!'; return; }
      LS.set('name', name);
      const q = { id: newId(), text, name, created: Date.now(),
        thing: thing && thing.id, thingName: thing && thing.name, part: part && part.id, partName: part && part.name,
        emoji: part ? part.emoji : (thing ? thing.emoji : '❓') };
      const qs = loadQs(); qs.unshift(q); saveQs(qs.slice(0, 200));
      sent(q);
      setTimeout(() => openMail(q), 900); // let the envelope fly first
    };
  }
  function sent(q) {
    const L = overlay(`<div class="sent"><div class="env">✉️</div><h2>Almost done!</h2>
      <p>Your email is ready.<br>Press <b class="sendword">Send</b> at the top of the email 👆</p>
      <div class="qcode">Question <b>#${esc(q.id)}</b></div>
      <p class="small">When the answer comes, it will be in your mailbox 📬</p>
      <div class="row2"><button class="btn" id="again">Open email again</button><button class="btn primary" id="ok">OK!</button></div></div>`, 'sent-layer');
    L.querySelector('#ok').onclick = closeOverlay;
    L.querySelector('#again').onclick = () => openMail(q);
  }

  /* ---------- mailbox ---------- */
  function openMailbox() {
    if (!EMAIL) return;
    poll();
    const qs = loadQs(), seen = seenSet();
    const when = ms => new Date(ms).toLocaleDateString(undefined, { weekday: 'short', day: 'numeric', month: 'short' });
    const items = qs.length ? qs.map(q => {
      const a = answers[q.id];
      if (a) return `<li class="env-row ${seen.has(q.id) ? '' : 'new'}" data-id="${q.id}">
          <span class="stamp">${esc(q.emoji || '✉️')}</span>
          <div class="grow"><div class="qline">${esc(q.text)}</div>
          <div class="meta">${seen.has(q.id) ? '💌 Tap to read again' : '💌 A letter arrived! Tap to open'}</div></div>
          ${seen.has(q.id) ? '' : '<span class="newtag">NEW!</span>'}</li>`;
      return `<li class="env-row waiting"><span class="stamp">${esc(q.emoji || '✉️')}</span>
          <div class="grow"><div class="qline">${esc(q.text)}</div>
          <div class="meta">✉️ Waiting for an answer… · #${esc(q.id)} · ${when(q.created)}</div></div></li>`;
    }).join('') : `<li class="empty">No letters yet!<br>Tap <b>“I have a question!”</b> on any card to ask something.</li>`;
    const L = overlay(`<div class="ask-head"><span class="big">📬</span><div><h2>My Mailbox</h2><p>Answers to your questions</p></div><button class="x" aria-label="Close">✕</button></div>
      <ul class="letters">${items}</ul>
      <div class="ask-foot"><button class="btn" id="askAny">❓ Ask anything</button></div>`, 'mailbox');
    L.querySelector('.x').onclick = closeOverlay;
    L.querySelector('#askAny').onclick = () => openAsk(thingGetter(), null);
    L.querySelectorAll('.env-row[data-id]').forEach(li => li.onclick = () => openLetter(li.dataset.id));
  }

  function pictureHtml(pic) {
    if (!pic) return '';
    if (/^https?:\/\//i.test(pic) || /\.(png|jpe?g|gif|webp|svg)$/i.test(pic)) {
      const src = /^https?:/i.test(pic) ? pic : 'answers/' + pic.replace(/^\/+|^answers\//g, '');
      return `<div class="pic photo"><img src="${esc(src)}" alt=""></div>`;
    }
    const parts = window.Intl && Intl.Segmenter ? [...new Intl.Segmenter().segment(pic)].map(x => x.segment) : Array.from(pic);
    const emo = parts.filter(c => c.trim()).slice(0, 6);
    return `<div class="pic emo">${emo.map((c, i) => `<span style="animation-delay:${(0.9 + i * 0.15).toFixed(2)}s">${esc(c)}</span>`).join('')}</div>`;
  }
  function openLetter(id) {
    const q = loadQs().find(x => x.id === id), a = answers[id];
    if (!q || !a) return;
    const firstTime = !seenSet().has(id);
    markSeen(id); paintBadges();
    const sig = a.from || CFG.SIGNATURE || '';
    const L = overlay(`
      <div class="envelope ${firstTime ? 'opening' : 'opened'}">
        <div class="flap"></div><div class="seal">💌</div>
      </div>
      <div class="letter-paper">
        <button class="x dark" aria-label="Close">✕</button>
        <div class="lstamp"><span>${esc(q.emoji || '✉️')}</span></div>
        <div class="dear">${q.name ? 'Dear ' + esc(q.name) + ',' : 'Hello!'}</div>
        <div class="youasked">You asked: <i>“${esc(q.text)}”</i></div>
        ${pictureHtml(a.picture)}
        ${a.paras.map(p => `<p>${esc(p)}</p>`).join('')}
        ${sig ? `<div class="sig">${esc(sig)}</div>` : ''}
        <div class="lfoot"><button class="btn" id="back">📬 Mailbox</button><button class="btn primary" id="close2">Thanks! 😊</button></div>
      </div>`, 'letter-layer' + (firstTime ? ' first' : ''));
    L.querySelector('.x').onclick = closeOverlay;
    L.querySelector('#close2').onclick = closeOverlay;
    L.querySelector('#back').onclick = openMailbox;
    if (firstTime) { chime(); confetti(L); }
  }
  function confetti(L) {
    const box = document.createElement('div'); box.className = 'mini-confetti';
    box.innerHTML = Array.from({ length: 36 }, () => `<i style="left:${Math.random() * 100}%;background:hsl(${Math.random() * 360},90%,62%);animation-delay:${(0.6 + Math.random() * 0.6).toFixed(2)}s;animation-duration:${(1.8 + Math.random()).toFixed(2)}s"></i>`).join('');
    L.appendChild(box); setTimeout(() => box.remove(), 4000);
  }

  let thingGetter = () => null;

  /* ---------- public ---------- */
  window.PeekAsk = {
    enabled: !!EMAIL,
    mailButton: () => EMAIL ? `<button class="round mailbtn" aria-label="Mailbox">📬<span class="badge"></span></button>` : '',
    wire(root, getThing) {
      thingGetter = getThing || (() => null);
      root.querySelectorAll('.mailbtn').forEach(b => b.onclick = openMailbox);
      paintBadges();
    },
    openAsk, openMailbox, close: closeOverlay, _parse: parseAnswers,
    start() {
      if (!EMAIL) return;
      poll(true);
      clearInterval(pollTimer);
      pollTimer = setInterval(() => { if (!document.hidden) poll(); }, 120000);
      document.addEventListener('visibilitychange', () => { if (!document.hidden) poll(); });
    }
  };
})();
