/* Peek Inside — tiny isometric SVG engine + touch pan/zoom.
   World units: x runs right-down, y runs left-down, z is up. */
(function () {
  const NS = 'http://www.w3.org/2000/svg';
  const C = Math.cos(Math.PI / 6), S = 0.5, U = 20; // U = screen px per world unit
  let defs = null;
  const gradCache = {};

  function P(x, y, z = 0) { return [(x - y) * C * U, (x + y) * S * U - z * U]; }
  function pts(list) {
    return list.map(([x, y, z]) => { const q = P(x, y, z || 0); return q[0].toFixed(1) + ',' + q[1].toFixed(1); }).join(' ');
  }
  function el(tag, attrs, parent) {
    const e = document.createElementNS(NS, tag);
    if (attrs) for (const k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  function g(parent, attrs) { return el('g', attrs, parent); }
  function poly(parent, list, fill, attrs) {
    return el('polygon', Object.assign({ points: pts(list), fill }, attrs || {}), parent);
  }
  function shade(hex, amt) {
    let c = hex.replace('#', '');
    if (c.length === 3) c = c.split('').map(ch => ch + ch).join('');
    const n = parseInt(c, 16);
    let r = n >> 16, gg = (n >> 8) & 255, b = n & 255;
    const f = amt < 0 ? v => v * (1 + amt) : v => v + (255 - v) * amt;
    r = Math.round(f(r)); gg = Math.round(f(gg)); b = Math.round(f(b));
    return '#' + ((1 << 24) + (r << 16) + (gg << 8) + b).toString(16).slice(1);
  }
  function edge(color) { return { stroke: shade(color, -0.4), 'stroke-width': 0.7, 'stroke-linejoin': 'round' }; }

  // Axis-aligned box: draws the 3 visible faces (front-left = +y face, front-right = +x face, top).
  function box(parent, x, y, z, w, d, h, color, o) {
    o = o || {};
    const grp = g(parent);
    const sa = o.noStroke ? {} : edge(color);
    poly(grp, [[x, y + d, z], [x + w, y + d, z], [x + w, y + d, z + h], [x, y + d, z + h]], o.left || shade(color, -0.1), sa);
    poly(grp, [[x + w, y, z], [x + w, y + d, z], [x + w, y + d, z + h], [x + w, y, z + h]], o.right || shade(color, -0.28), sa);
    poly(grp, [[x, y, z + h], [x + w, y, z + h], [x + w, y + d, z + h], [x, y + d, z + h]], o.top || shade(color, 0.14), sa);
    return grp;
  }
  // Flat rectangle lying on a horizontal plane.
  function flat(parent, x, y, w, d, color, attrs, z) {
    z = z || 0;
    return poly(parent, [[x, y, z], [x + w, y, z], [x + w, y + d, z], [x, y + d, z]], color, attrs);
  }
  // Rectangle painted on the +y face (front-left wall) at depth y.
  function faceY(parent, y, x0, x1, z0, z1, fill, attrs) {
    return poly(parent, [[x0, y, z0], [x1, y, z0], [x1, y, z1], [x0, y, z1]], fill, attrs);
  }
  // Rectangle painted on the +x face (front-right wall) at x.
  function faceX(parent, x, y0, y1, z0, z1, fill, attrs) {
    return poly(parent, [[x, y0, z0], [x, y1, z0], [x, y1, z1], [x, y0, z1]], fill, attrs);
  }
  function line(parent, a, b, stroke, width, attrs) {
    const p = P(...a), q = P(...b);
    return el('line', Object.assign({ x1: p[0], y1: p[1], x2: q[0], y2: q[1], stroke, 'stroke-width': width || 1, 'stroke-linecap': 'round' }, attrs || {}), parent);
  }
  function sideGrad(color) {
    if (gradCache[color]) return gradCache[color];
    const id = 'cg' + color.replace('#', '');
    const lg = el('linearGradient', { id, x1: 0, x2: 1, y1: 0, y2: 0 }, defs);
    el('stop', { offset: '0', 'stop-color': shade(color, 0.1) }, lg);
    el('stop', { offset: '0.45', 'stop-color': shade(color, -0.05) }, lg);
    el('stop', { offset: '1', 'stop-color': shade(color, -0.35) }, lg);
    return (gradCache[color] = 'url(#' + id + ')');
  }
  // Upright cylinder (tanks, poles).
  function cyl(parent, cx, cy, z, r, h, color, o) {
    o = o || {};
    const grp = g(parent);
    const [bx, by] = P(cx, cy, z), [tx, ty] = P(cx, cy, z + h);
    const rx = r * 1.2247 * U, ry = r * 0.7071 * U;
    const st = shade(color, -0.4);
    el('path', { d: `M${bx - rx},${by} A${rx},${ry} 0 0 0 ${bx + rx},${by} L${tx + rx},${ty} L${tx - rx},${ty} Z`, fill: sideGrad(color), stroke: st, 'stroke-width': 0.7 }, grp);
    if (o.band) {
      const mz = z + h * 0.62, [mx, my] = P(cx, cy, mz), [nx, ny] = P(cx, cy, mz + h * 0.12);
      el('path', { d: `M${mx - rx},${my} A${rx},${ry} 0 0 0 ${mx + rx},${my} L${nx + rx},${ny} A${rx},${ry} 0 0 1 ${nx - rx},${ny} Z`, fill: o.band, opacity: 0.9 }, grp);
    }
    el('ellipse', { cx: tx, cy: ty, rx, ry, fill: o.top || shade(color, 0.12), stroke: st, 'stroke-width': 0.7 }, grp);
    return grp;
  }
  const GROUND = `matrix(${C * U},${S * U},${-C * U},${S * U},0,0)`;
  // Text painted flat on the ground.
  function groundText(parent, x, y, txt, size, fill, rot) {
    const t = el('text', { transform: `${GROUND} translate(${x} ${y}) rotate(${rot || 0})`, 'font-size': size, fill, 'text-anchor': 'middle', 'dominant-baseline': 'central', 'font-weight': 800, 'font-family': 'system-ui, sans-serif' }, parent);
    t.textContent = txt; return t;
  }
  // Text painted on a +y facing wall.
  function wallTextY(parent, cx, y, zMid, txt, size, fill) {
    const [X, Y] = P(cx, y, zMid);
    const t = el('text', { transform: `matrix(${C * U},${S * U},0,${U},${X},${Y})`, 'font-size': size, fill, 'text-anchor': 'middle', 'dominant-baseline': 'central', 'font-weight': 800, 'font-family': 'system-ui, sans-serif' }, parent);
    t.textContent = txt; return t;
  }
  function wallTextX(parent, x, cy, zMid, txt, size, fill) {
    const [X, Y] = P(x, cy, zMid);
    const t = el('text', { transform: `matrix(${-C * U},${S * U},0,${U},${X},${Y}) scale(-1,1)`, 'font-size': size, fill, 'text-anchor': 'middle', 'dominant-baseline': 'central', 'font-weight': 800, 'font-family': 'system-ui, sans-serif' }, parent);
    t.textContent = txt; return t;
  }

  /* Depth sorting for items with ground footprints {x0,y0,x1,y1}.
     A must be drawn before B if A is fully behind B along x or y and their screen columns overlap. */
  function depthSort(items) {
    const n = items.length, before = items.map(() => []), indeg = new Array(n).fill(0);
    const sx = it => [it.x0 - it.y1, it.x1 - it.y0];
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
      if (i === j) continue;
      const a = items[i], b = items[j], ra = sx(a), rb = sx(b);
      if (ra[1] <= rb[0] || rb[1] <= ra[0]) continue;
      if (a.x1 <= b.x0 + 1e-6 || a.y1 <= b.y0 + 1e-6) { before[i].push(j); indeg[j]++; }
    }
    const key = it => it.x0 + it.y0 + it.x1 + it.y1;
    const out = [], ready = [];
    for (let i = 0; i < n; i++) if (!indeg[i]) ready.push(i);
    const done = new Array(n).fill(false);
    while (out.length < n) {
      if (!ready.length) { // cycle fallback
        let best = -1; for (let i = 0; i < n; i++) if (!done[i] && (best < 0 || key(items[i]) < key(items[best]))) best = i;
        ready.push(best); indeg[best] = 0;
      }
      ready.sort((p, q) => key(items[p]) - key(items[q]));
      const i = ready.shift(); if (done[i]) continue;
      done[i] = true; out.push(items[i]);
      for (const j of before[i]) if (--indeg[j] === 0 && !done[j]) ready.push(j);
    }
    return out;
  }

  /* Pan / pinch / wheel zoom by editing the SVG viewBox. */
  function panZoom(svg, base, onChange, onTap) {
    const vb = { x: base.x, y: base.y, w: base.w, h: base.h };
    let aspect = 1, homeW = base.w, anim = 0;
    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
    function measure() {
      const r = svg.getBoundingClientRect();
      aspect = (r.height || 1) / (r.width || 1);
      homeW = Math.max(base.w, base.h / aspect);
    }
    function apply() {
      svg.setAttribute('viewBox', `${vb.x.toFixed(2)} ${vb.y.toFixed(2)} ${vb.w.toFixed(2)} ${vb.h.toFixed(2)}`);
      onChange && onChange(homeW / vb.w);
    }
    function set(cx, cy, w) {
      w = clamp(w, homeW / 7, homeW * 1.1);
      cx = clamp(cx, base.x, base.x + base.w); cy = clamp(cy, base.y, base.y + base.h);
      vb.w = w; vb.h = w * aspect; vb.x = cx - w / 2; vb.y = cy - vb.h / 2; apply();
    }
    const center = () => [vb.x + vb.w / 2, vb.y + vb.h / 2];
    function home(animated) {
      const cx = base.x + base.w / 2, cy = base.y + base.h / 2;
      animated ? flyTo(cx, cy, homeW) : set(cx, cy, homeW);
    }
    function zoomAt(f, clientX, clientY) {
      const r = svg.getBoundingClientRect();
      const fx = (clientX - r.left) / r.width, fy = (clientY - r.top) / r.height;
      const wx = vb.x + fx * vb.w, wy = vb.y + fy * vb.h;
      const nw = clamp(vb.w / f, homeW / 7, homeW * 1.1), nh = nw * aspect;
      set(wx - fx * nw + nw / 2, wy - fy * nh + nh / 2, nw);
    }
    function flyTo(cx, cy, w, dur) {
      cancelAnimationFrame(anim);
      dur = dur || 650;
      const [sx, sy] = center(), sw = vb.w, t0 = performance.now();
      w = clamp(w || vb.w, homeW / 7, homeW * 1.1);
      const ease = t => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
      (function step(now) {
        const t = Math.min(1, (now - t0) / dur), e = ease(t);
        set(sx + (cx - sx) * e, sy + (cy - sy) * e, sw + (w - sw) * e);
        if (t < 1) anim = requestAnimationFrame(step);
      })(t0);
    }

    const ptrs = new Map();
    let down = null, last = null;
    const gesture = () => {
      const a = [...ptrs.values()];
      if (a.length === 1) return { cx: a[0].x, cy: a[0].y, d: 0 };
      const [p, q] = a;
      return { cx: (p.x + q.x) / 2, cy: (p.y + q.y) / 2, d: Math.hypot(p.x - q.x, p.y - q.y) };
    };
    svg.addEventListener('pointerdown', e => {
      cancelAnimationFrame(anim);
      try { svg.setPointerCapture(e.pointerId); } catch (_) {}
      ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (ptrs.size === 1) down = { x: e.clientX, y: e.clientY, target: e.target, moved: false };
      else if (down) down.moved = true;
      last = gesture();
    });
    svg.addEventListener('pointermove', e => {
      if (!ptrs.has(e.pointerId)) return;
      ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (down && !down.moved && Math.hypot(e.clientX - down.x, e.clientY - down.y) > 9) down.moved = true;
      const gs = gesture();
      if (down && !down.moved) { last = gs; return; }
      const r = svg.getBoundingClientRect(), upp = vb.w / r.width;
      const [cx, cy] = center();
      set(cx - (gs.cx - last.cx) * upp, cy - (gs.cy - last.cy) * upp, vb.w);
      if (ptrs.size >= 2 && last.d > 0 && gs.d > 0) zoomAt(gs.d / last.d, gs.cx, gs.cy);
      last = gs;
    });
    function up(e) {
      if (!ptrs.has(e.pointerId)) return;
      const tap = ptrs.size === 1 && down && !down.moved && e.type === 'pointerup';
      ptrs.delete(e.pointerId);
      if (tap && onTap) onTap(down.target);
      if (ptrs.size) last = gesture(); else down = null;
    }
    svg.addEventListener('pointerup', up);
    svg.addEventListener('pointercancel', up);
    svg.addEventListener('wheel', e => { e.preventDefault(); zoomAt(Math.exp(-e.deltaY * 0.002), e.clientX, e.clientY); }, { passive: false });
    const onResize = () => { const [cx, cy] = center(); const z = homeW / vb.w; measure(); set(cx, cy, homeW / z); };
    window.addEventListener('resize', onResize);
    measure(); home(false);
    return {
      flyTo, home,
      zoomBy(f) { const [cx, cy] = center(); flyTo(cx, cy, vb.w / f, 350); },
      zoom: () => homeW / vb.w,
      homeW: () => homeW,
      setZoom(z) { const [cx, cy] = center(); set(cx, cy, homeW / z); },
      view: () => ({ ...vb }),
      destroy() { window.removeEventListener('resize', onResize); cancelAnimationFrame(anim); }
    };
  }

  window.ISO = { P, U, el, g, poly, box, flat, faceY, faceX, line, cyl, shade, groundText, wallTextY, wallTextX, depthSort, panZoom, setDefs: d => { defs = d; for (const k in gradCache) delete gradCache[k]; }, defs: () => defs };
})();
