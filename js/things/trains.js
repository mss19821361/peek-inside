/* Peek Inside — Trains & the Railway */
(function () {
  const { P, U, el, g, poly, box, flat, faceY, faceX, line, cyl, shade, wallTextY } = ISO;
  const C30 = Math.cos(Math.PI / 6);

  /* ---------- Content ---------- */
  const parts = [
    { id: 'passenger', emoji: '🚆', name: 'Passenger Train', short: 'Taking people places', anchor: [22, 12.5, 2.0],
      what: 'This is an electric passenger train waiting at the platform. It is made of several carriages joined together, with seats, big windows and wide doors.',
      does: 'People get on and off when the doors open at a station. Then the doors beep, close tight, and the train glides off to the next station, carrying hundreds of people at once.',
      fact: 'One train can take hundreds of cars off the road, because everyone travels together. That means less traffic and cleaner air!',
      who: 'The driver, the conductor who checks tickets and helps passengers, and cleaners.' },
    { id: 'cab', emoji: '🎛️', name: 'Driver’s Cab', short: 'Where the driver sits', anchor: [29.4, 12.5, 1.3],
      what: 'The cab is the little room at the very front of the train, with a big window to see the track ahead.',
      does: 'The driver uses a handle to make the train go faster, and another one to brake. There is also a horn, a radio to talk to the signaller, and screens that show the speed.',
      fact: 'The driver has to keep touching a special handle or pedal. If they ever let go for too long, the train stops all by itself, just in case they feel unwell!',
      who: 'Train drivers, who train for more than a year and learn every signal on their routes.' },
    { id: 'highspeed', emoji: '🚄', name: 'High-Speed Train', short: 'The fastest trains of all', anchor: [40.5, 10.5, 0.3],
      what: 'Watch for the long white train with a pointy nose zooming past! High-speed trains run on special smooth tracks.',
      does: 'Their long, pointed nose helps them slice through the air. Many go about 300 kilometres per hour, so they can be quicker than flying for some trips.',
      fact: 'The nose of one Japanese bullet train was designed to look like the beak of a kingfisher, a bird that dives into water without a splash. It made the train quieter in tunnels!',
      who: 'Drivers, and engineers who check the special tracks every night.' },
    { id: 'freight', emoji: '📦', name: 'Freight Train', short: 'Trains that carry things', anchor: [31.5, 6, 0.3],
      what: 'Freight trains carry things instead of people: big boxes called containers, coal, wood, cars and even food.',
      does: 'A strong locomotive at the front pulls a long line of wagons. The containers can be lifted straight from a ship onto the train, and then onto a lorry.',
      fact: 'The longest train ever was a freight train in Australia. It was more than 7 kilometres long and had 682 wagons!',
      who: 'Drivers, and people who load and unload the wagons at big freight yards.' },
    { id: 'steam', emoji: '🚂', name: 'Steam Train', short: 'Choo-choo! The old way', anchor: [20, 28, 2.4],
      what: 'Long ago, all trains were steam trains. Today, old ones still puff along special lines for people to enjoy.',
      does: 'A fire burns coal to boil water in the long round boiler. The steam pushes pistons back and forth, which turn the big wheels. The puffs of steam make the famous choo-choo sound!',
      fact: 'The fastest steam train ever, called Mallard, reached 203 kilometres per hour in 1938. No steam train has ever beaten it.',
      who: 'A driver, and a fireman who shovels coal into the fire. It is hot, hard work!' },
    { id: 'wires', emoji: '⚡', name: 'Overhead Wires', short: 'Electricity for trains', anchor: [12, 14.2, 3.9],
      what: 'The wires hanging above the tracks carry very strong electricity. Tall poles called masts hold them up.',
      does: 'On top of electric trains there is a springy arm called a pantograph. It slides along the wire and brings the electricity down to the train’s motors.',
      fact: 'The wire zigzags a tiny bit from side to side, so the pantograph does not wear out in just one spot!',
      who: 'Electricians who fix the wires. Stay safe: never climb near railway wires. The electricity can jump!' },
    { id: 'rails', emoji: '🛤️', name: 'Rails & Wheels', short: 'How trains stay on track', anchor: [8, 28, 0],
      what: 'A track has two steel rails held by sleepers, which lie on a bed of stones called ballast.',
      does: 'Train wheels are made of steel and have a lip on the inside, called a flange, which stops them sliding off. The stones keep the track steady and let rainwater drain away.',
      fact: 'Train wheels are a tiny bit cone-shaped. This clever trick helps the train steer itself around bends, with no steering wheel at all!',
      who: 'Track workers who check and fix the rails, often at night when no trains run.' },
    { id: 'points', emoji: '🔀', name: 'Points', short: 'How trains change tracks', anchor: [39.6, 4.6, 0],
      what: 'Points are where one track splits into two. Look where the siding turns off towards the depot!',
      does: 'Two pieces of rail, called switch blades, slide sideways to guide the wheels one way or the other. A motor moves them when the signaller presses a button.',
      fact: 'In winter, points have little heaters so ice and snow cannot freeze them stuck!',
      who: 'Signallers control them, and track engineers keep them working.' },
    { id: 'signals', emoji: '🚦', name: 'Signals', short: 'Traffic lights for trains', anchor: [13, 9.2, 2.2],
      what: 'Signals are like traffic lights beside the track. Red means stop, yellow means be careful, and green means go.',
      does: 'They keep trains a safe distance apart, so only one train can be in each part of the track at a time. Watch this one turn green when the fast train comes!',
      fact: 'A fast train can need more than a kilometre to stop, so signals are put far ahead to warn the driver early.',
      who: 'Signallers decide what the signals show.' },
    { id: 'crossing', emoji: '🚧', name: 'Level Crossing', short: 'Where roads cross the railway', anchor: [10, 15.2, 1.2],
      what: 'A level crossing is where a road crosses the railway on the same level.',
      does: 'When a train is coming, lights flash, an alarm rings and the barriers come down to stop the cars. When the train has passed, the barriers go back up. Watch them move!',
      fact: 'Trains cannot swerve, and they need a very long way to stop. That is why everyone must always wait when the lights flash.',
      who: 'Signallers watch many crossings, sometimes with cameras.' },
    { id: 'platform', emoji: '🚉', name: 'Platform', short: 'Where you wait for the train', anchor: [20, 14.6, 0.6],
      what: 'The platform is the raised floor beside the track, at the same height as the train’s doors.',
      does: 'You wait here for your train. Screens show when the next train is coming. The yellow line tells you where to stand safely, back from the edge.',
      fact: 'On the London Underground, a voice has said “Mind the gap!” since 1968, to remind people to step over the gap between the train and the platform.',
      who: 'Station staff who help passengers and blow a whistle when the train is ready to leave.' },
    { id: 'station', emoji: '🎫', name: 'Station Building', short: 'Tickets, timetables and more', anchor: [19, 19.3, 3],
      what: 'The station building is where your train journey begins, with a ticket office, ticket machines and a waiting room.',
      does: 'You buy a ticket, check the big departure board to find your platform, and maybe get a snack. Then you go through the ticket gates to the platforms.',
      fact: 'Grand Central Terminal in New York has 44 platforms. That is more than any other station in the world!',
      who: 'Ticket office staff, station managers, cleaners and café workers.' },
    { id: 'clock', emoji: '⏰', name: 'Station Clock', short: 'Trains run on time', anchor: [24.5, 21, 1.5],
      what: 'Every station has clocks, so passengers and staff all know the exact time.',
      does: 'Trains follow a timetable, a plan that says exactly when each train should arrive and leave, often to the minute.',
      fact: 'Long ago, every town set its own clocks by the Sun, so times were a bit different everywhere. Railways made the whole country use the same time, so the timetables would work!',
      who: 'Timetable planners work out where every train should be, every minute of the day.' },
    { id: 'footbridge', emoji: '🚶', name: 'Footbridge', short: 'The safe way across', anchor: [25.75, 11.5, 5.2],
      what: 'The footbridge goes high over the tracks, from one platform to the other.',
      does: 'People climb the stairs or take the lift, walk across, and come down on the other side. It is the safe way to cross. Never walk on railway tracks!',
      fact: 'Some stations use tunnels under the tracks instead of bridges over them.',
      who: 'Station staff, and engineers who check the bridge is strong and safe.' },
    { id: 'signalbox', emoji: '🖥️', name: 'Signal Box', short: 'The railway’s control room', anchor: [15.8, 2.7, 3.2],
      what: 'The signal box is the building where signallers control the trains.',
      does: 'Signallers set the points and signals so every train goes the right way and stays safely apart. In old signal boxes they pulled big levers. Today they use computer screens.',
      fact: 'One modern control centre can look after hundreds of kilometres of railway, all from one room!',
      who: 'Signallers, who work day and night, because trains run all the time.' },
    { id: 'tunnel', emoji: '⛰️', name: 'Tunnel', short: 'A shortcut through the hill', anchor: [6.5, 11.5, 2.2],
      what: 'A tunnel is a long hole dug right through a hill or a mountain, so trains do not have to go over or around it.',
      does: 'Giant tunnel boring machines with spinning cutters chew through the rock, and the walls are lined with concrete to make them strong.',
      fact: 'The longest railway tunnel in the world goes under the mountains in Switzerland. It is 57 kilometres long!',
      who: 'Tunnel engineers and miners build them, and inspectors check them.' },
    { id: 'bridge', emoji: '🌉', name: 'Railway Bridge', short: 'Crossing the river', anchor: [35.5, 13.7, 1.6],
      what: 'This steel bridge carries the tracks over the river. Its criss-cross triangles are called a truss.',
      does: 'Triangles are a super-strong shape, so the truss can hold up heavy trains without bending. Boats can sail along the river underneath.',
      fact: 'The longest bridge in the world is a railway bridge in China. It is about 164 kilometres long!',
      who: 'Bridge engineers design and check them. Painters keep the steel from rusting.' },
    { id: 'depot', emoji: '🔧', name: 'Depot', short: 'Where trains get looked after', anchor: [41, 2.6, 3.1],
      what: 'The depot is a big shed where trains go to rest, get cleaned and be checked.',
      does: 'Engineers check the brakes, doors and motors, and fix anything broken. Trains also go through a train wash with giant spinning brushes!',
      fact: 'Some depots have a machine under the floor that can reshape a train’s wheels without even taking them off!',
      who: 'Train engineers, mechanics and cleaners.' }
  ];

  /* ---------- helpers ---------- */
  function convexHull(points) {
    const pts = points.slice().sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
    const lo = [], up = [];
    for (const p of pts) { while (lo.length >= 2 && cross(lo[lo.length - 2], lo[lo.length - 1], p) <= 0) lo.pop(); lo.push(p); }
    for (let i = pts.length - 1; i >= 0; i--) { const p = pts[i]; while (up.length >= 2 && cross(up[up.length - 2], up[up.length - 1], p) <= 0) up.pop(); up.push(p); }
    return lo.slice(0, -1).concat(up.slice(0, -1));
  }
  const spts = arr => arr.map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ');
  // circle lying in a vertical plane: axis 'x' => plane x=const (y,z); axis 'y' => plane y=const (x,z)
  function ring(c, r, axis, n) {
    n = n || 24; const out = [];
    for (let i = 0; i < n; i++) {
      const t = i / n * Math.PI * 2, a = r * Math.cos(t), b = r * Math.sin(t);
      out.push(axis === 'x' ? [c[0], c[1] + a, c[2] + b] : [c[0] + a, c[1], c[2] + b]);
    }
    return out;
  }
  const proj = list => list.map(p => P(...p));
  function disc(par, c, r, axis, fill, attrs) { return el('polygon', Object.assign({ points: spts(proj(ring(c, r, axis))), fill }, attrs || {}), par); }
  // horizontal cylinder along x
  function hcyl(par, x0, x1, yc, zc, r, color) {
    const a = ring([x0, yc, zc], r, 'x'), b = ring([x1, yc, zc], r, 'x');
    el('polygon', { points: spts(convexHull(proj(a.concat(b)))), fill: shade(color, -0.12), stroke: shade(color, -0.45), 'stroke-width': 0.8 }, par);
    // top highlight band
    poly(par, [[x0, yc - r * 0.3, zc + r * 0.95], [x1, yc - r * 0.3, zc + r * 0.95], [x1, yc + r * 0.25, zc + r * 0.97], [x0, yc + r * 0.25, zc + r * 0.97]], shade(color, 0.25));
    el('polygon', { points: spts(proj(b)), fill: shade(color, -0.3), stroke: shade(color, -0.5), 'stroke-width': 0.8 }, par);
  }

  // Track along a polyline of ground points
  function track(par, pts, o) {
    o = o || {};
    const S = [];
    for (let i = 0; i < pts.length - 1; i++) {
      const [ax, ay] = pts[i], [bx, by] = pts[i + 1], n = Math.max(1, Math.ceil(Math.hypot(bx - ax, by - ay) / 0.3));
      for (let k = 0; k < n; k++) S.push([ax + (bx - ax) * k / n, ay + (by - ay) * k / n]);
    }
    S.push(pts[pts.length - 1]);
    const nrm = i => { const a = S[Math.max(0, i - 1)], b = S[Math.min(S.length - 1, i + 1)], dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy) || 1; return [-dy / L, dx / L, dx / L, dy / L]; };
    const off = d => S.map((p, i) => { const n = nrm(i); return [p[0] + n[0] * d, p[1] + n[1] * d, 0.02]; });
    if (!o.noBallast) poly(par, off(0.85).concat(off(-0.85).reverse()), o.ballast || '#A79C92');
    let acc = 0;
    for (let i = 0; i < S.length; i++) {
      if (i > 0) acc += Math.hypot(S[i][0] - S[i - 1][0], S[i][1] - S[i - 1][1]);
      if (i === 0 || acc >= 0.6) {
        acc = 0;
        const [nx, ny, tx, ty] = nrm(i), [x, y] = S[i];
        poly(par, [[x + nx * 0.65 - tx * 0.11, y + ny * 0.65 - ty * 0.11, 0.04], [x + nx * 0.65 + tx * 0.11, y + ny * 0.65 + ty * 0.11, 0.04],
          [x - nx * 0.65 + tx * 0.11, y - ny * 0.65 + ty * 0.11, 0.04], [x - nx * 0.65 - tx * 0.11, y - ny * 0.65 - ty * 0.11, 0.04]], '#6D4C41');
      }
    }
    for (const d of [0.37, -0.37]) {
      const p = off(d).map(q => P(q[0], q[1], 0.08));
      el('polyline', { points: spts(p), fill: 'none', stroke: '#5f6b75', 'stroke-width': 2.6, 'stroke-linejoin': 'round' }, par);
      el('polyline', { points: spts(p.map(q => [q[0], q[1] - 0.8])), fill: 'none', stroke: '#E3E9EE', 'stroke-width': 1.3, 'stroke-linejoin': 'round' }, par);
    }
  }

  // One railway vehicle body along x, from x0 to x1 on track yc.
  // o: { color, roof, stripe, nose: 'front'|'back'|null, noseLen, windows, doors, h }
  function vehicle(par, x0, x1, yc, o) {
    const W = 0.55, z0 = 0.35, h = o.h || 1.4, z1 = z0 + h, nl = o.noseLen || 1.1;
    const color = o.color || '#ECEFF1';
    // bogies + wheels
    for (const bx of [x0 + 0.35, x1 - 1.45]) {
      box(par, bx, yc - 0.42, 0.06, 1.1, 0.84, 0.3, '#37474F', { noStroke: true });
      for (const wx of [bx + 0.25, bx + 0.85]) disc(par, [wx, yc + 0.43, 0.2], 0.17, 'y', '#263238', { stroke: '#90A4AE', 'stroke-width': 0.8 });
    }
    let bx0 = x0, bx1 = x1;
    if (o.nose === 'front') bx1 = x1 - nl;
    if (o.nose === 'back') bx0 = x0 + nl;
    const sides = (xa, xb) => box(par, xa, yc - W, z0, xb - xa, 2 * W, h, color, { top: o.roof || shade(color, 0.08), left: shade(color, -0.04), right: shade(color, -0.22) });
    if (o.nose === 'back') { // wedge behind (towards -x)
      poly(par, [[bx0, yc + W, z0], [bx0, yc + W, z1], [x0, yc + W - 0.15, z0 + 0.35], [x0, yc + W - 0.15, z0]], shade(color, -0.06), { stroke: shade(color, -0.4), 'stroke-width': 0.7 });
      poly(par, [[bx0, yc - W, z1], [bx0, yc + W, z1], [x0, yc + W - 0.15, z0 + 0.35], [x0, yc - W + 0.15, z0 + 0.35]], shade(color, 0.1), { stroke: shade(color, -0.4), 'stroke-width': 0.7 });
      poly(par, [[bx0 - 0.1, yc - 0.35, z1 - 0.08], [bx0 - 0.1, yc + 0.35, z1 - 0.08], [bx0 - 0.55, yc + 0.3, z1 - 0.45], [bx0 - 0.55, yc - 0.3, z1 - 0.45]], '#263238');
    }
    sides(bx0, bx1);
    const fy = yc + W;
    if (o.stripe) faceY(par, fy, bx0, bx1, z0 + 0.12, z0 + 0.3, o.stripe);
    if (o.windows !== false) for (let x = bx0 + 0.35; x < bx1 - 0.5; x += 0.62) faceY(par, fy, x, x + 0.42, z0 + 0.62, z0 + 1.08, o.glass || '#263F57', { stroke: '#90A4AE', 'stroke-width': 0.4 });
    const doors = [];
    if (o.doors) for (const dx of o.doors) doors.push(faceY(par, fy, x0 + dx, x0 + dx + 0.55, z0 + 0.05, z0 + 1.2, o.doorColor || '#FFC107', { stroke: shade(o.doorColor || '#FFC107', -0.4), 'stroke-width': 0.6, class: 'tdoor' }));
    if (o.nose === 'front') {
      poly(par, [[bx1, fy, z0], [bx1, fy, z1], [x1, fy - 0.15, z0 + 0.35], [x1, fy - 0.15, z0]], shade(color, -0.06), { stroke: shade(color, -0.4), 'stroke-width': 0.7 });
      poly(par, [[bx1, yc - W, z1], [bx1, yc + W, z1], [x1, fy - 0.15, z0 + 0.35], [x1, yc - W + 0.15, z0 + 0.35]], shade(color, 0.1), { stroke: shade(color, -0.4), 'stroke-width': 0.7 });
      poly(par, [[x1, yc - W + 0.15, z0], [x1, fy - 0.15, z0], [x1, fy - 0.15, z0 + 0.35], [x1, yc - W + 0.15, z0 + 0.35]], shade(color, -0.25));
      poly(par, [[bx1 + 0.1, yc - 0.35, z1 - 0.08], [bx1 + 0.1, yc + 0.35, z1 - 0.08], [bx1 + 0.55, yc + 0.3, z1 - 0.45], [bx1 + 0.55, yc - 0.3, z1 - 0.45]], '#263238');
      const [hx, hy] = P(x1 - 0.05, fy - 0.25, z0 + 0.18); el('circle', { cx: hx, cy: hy, r: 2.2, fill: '#FFF9C4' }, par);
    }
    return doors;
  }
  function pantograph(par, x, yc, z, top) {
    const pts = [[x - 0.3, yc, z], [x + 0.25, yc, (z + top) / 2], [x - 0.15, yc, top]];
    el('polyline', { points: spts(proj(pts)), fill: 'none', stroke: '#455A64', 'stroke-width': 1.6 }, par);
    line(par, [x - 0.15, yc - 0.35, top], [x - 0.15, yc + 0.35, top], '#37474F', 2);
    box(par, x - 0.45, yc - 0.2, z - 0.02, 0.5, 0.4, 0.08, '#78909C', { noStroke: true });
  }
  function person(par, x, y, col) {
    const [a, b] = P(x, y, 0.5);
    el('ellipse', { cx: a + 2, cy: b + 1, rx: 4, ry: 2, fill: 'rgba(0,0,0,.18)' }, par);
    el('rect', { x: a - 2.6, y: b - 13, width: 5.2, height: 13, rx: 2.6, fill: col }, par);
    el('circle', { cx: a, cy: b - 16, r: 3.1, fill: '#F2C8A0' }, par);
  }
  function tree(par, x, y, s) {
    s = s || 1;
    box(par, x - 0.1, y - 0.1, 0, 0.2, 0.2, 0.7 * s, '#7B5B43', { noStroke: true });
    const [tx, ty] = P(x, y, 1.25 * s);
    el('circle', { cx: tx, cy: ty, r: 15 * s, fill: 'url(#tleaf)' }, par);
    el('circle', { cx: tx - 4 * s, cy: ty - 5 * s, r: 6 * s, fill: '#A5D66B', opacity: 0.55 }, par);
  }
  function clipX(par, xa, xb, y) { // show only world x in [xa, xb] for things on track y
    const id = 'clip' + Math.random().toString(36).slice(2, 8);
    const cp = el('clipPath', { id, clipPathUnits: 'userSpaceOnUse' }, ISO.defs());
    const X0 = (xa - y) * C30 * U, X1 = (xb - y) * C30 * U;
    el('rect', { x: X0, y: -2000, width: X1 - X0, height: 4000 }, cp);
    return g(par, { 'clip-path': `url(#${id})` });
  }

  /* ---------- Scene ---------- */
  function build(world) {
    const items = [];
    const add = (part, x0, y0, x1, y1, draw) => items.push({ part, x0, y0, x1, y1, draw });
    const layer = part => g(world, part ? { 'data-part': part } : {});
    const M = {};

    // island + river
    const isl = layer();
    box(isl, 0, 0, -1.4, 44, 34, 1.4, '#7CB342', { top: '#8BC34A', left: '#A1795C', right: '#7E5A41' });
    for (let y = 1; y < 34; y += 4) flat(isl, 0, y, 44, 2, '#93C653', { opacity: 0.5 });
    const riv = layer('bridge');
    flat(riv, 33.8, 0, 3.4, 34, '#5FB7E8');
    flat(riv, 33.8, 0, 0.25, 34, '#7A9E58'); flat(riv, 36.95, 0, 0.25, 34, '#7A9E58');
    for (let y = 1; y < 34; y += 2.3) flat(riv, 34.6 + (y % 3) * 0.4, y, 1.2, 0.12, '#B3E5FC', { class: 'ripple', style: `animation-delay:${(y % 4) * 0.4}s` });
    poly(riv, [[33.8, 34, -0.02], [37.2, 34, -0.02], [37.2, 34, -1.1], [33.8, 34, -1.1]], '#4FA3D6');

    // roads
    const rd = layer('crossing');
    flat(rd, 9, 0.6, 2, 21.4, '#5A6069');
    for (let y = 1.2; y < 21; y += 1.4) if (y < 4.6 || y > 14.6) flat(rd, 9.95, y, 0.1, 0.7, '#fff');
    const fr = layer('station');
    flat(fr, 0, 22, 33.6, 2, '#5A6069');
    for (let x = 0.4; x < 33; x += 1.5) flat(fr, x, 22.95, 0.7, 0.1, '#fff');
    flat(fr, 14, 15.4, 16, 6.6, '#D7CCC8');
    for (let x = 14.5; x < 30; x += 1) flat(fr, x, 15.4, 0.05, 6.6, '#C9BCB6');

    // tracks
    const tk = layer('rails');
    track(tk, [[0, 6], [44, 6]]);                 // freight line
    track(tk, [[0, 10.5], [44, 10.5]]);           // main line 1
    track(tk, [[0, 12.5], [44, 12.5]]);           // main line 2
    track(tk, [[0, 28], [44, 28]]);               // heritage line
    const pt = layer('points');
    const sid = [[38.6, 6]]; for (let k = 1; k <= 8; k++) { const t = k / 8; sid.push([38.6 + 2.4 * Math.sin(t * Math.PI / 2), 6 - 1.6 * (1 - Math.cos(t * Math.PI / 2))]); }
    sid.push([41, 3.4], [41, 2.6]);
    track(pt, sid);
    box(pt, 38.2, 6.85, 0, 0.6, 0.35, 0.3, '#FFB300');
    // level-crossing deck over the rails
    for (const y of [5.1, 9.6, 11.6]) flat(rd, 9, y, 2, 1.8, '#6B717A', { opacity: 0.92 });
    for (const y of [5.1, 6.9, 9.6, 11.4, 11.6, 13.4]) flat(rd, 9, y, 2, 0.08, '#FFEB3B');

    // ---- 3D items ----
    // hill with tunnel (left)
    add('tunnel', 0, 3.6, 6.6, 15.4, gp => {
      box(gp, 0, 3.6, 0, 6.6, 11.8, 2.9, '#7CB342', { top: '#8BC34A', left: '#8D7B68', right: '#7A6A58' });
      box(gp, 0.4, 5.2, 2.9, 4.6, 8.6, 1.3, '#7CB342', { top: '#93C653', left: '#8D7B68', right: '#76664F' });
      for (let y = 4.2; y < 15; y += 1.7) for (let z = 0.4; z < 2.6; z += 0.9) faceX(gp, 6.6, y + (z % 2) * 0.4, y + 0.9 + (z % 2) * 0.4, z, z + 0.5, '#86745F', { opacity: 0.6 });
      for (const [yc, w, hh] of [[6, 1.05, 2.0], [11.5, 2.2, 2.4]]) {
        const arch = (ww, h0) => { const a = [[6.6, yc - ww, 0]]; for (let i = 0; i <= 12; i++) { const t = Math.PI * i / 12; a.push([6.6, yc - ww * Math.cos(t), h0 + ww * 0.75 * Math.sin(t)]); } a.push([6.6, yc + ww, 0]); return a; };
        poly(gp, arch(w + 0.35, hh - w * 0.75 + 0.2), '#CFC6BC', { stroke: '#8D8173', 'stroke-width': 1 });
        poly(gp, arch(w, hh - w * 0.75), '#1A1A1A');
      }
      for (const [x, y] of [[1.4, 6.4], [3.6, 9.2], [1.8, 12], [4, 13.2]]) { const [a, b] = P(x, y, 4.2); el('circle', { cx: a, cy: b - 10, r: 12, fill: 'url(#tleaf)' }, gp); }
    });

    // signal box (back)
    add('signalbox', 14, 1.2, 17.6, 4.2, gp => {
      box(gp, 14, 1.2, 0, 3.6, 3, 1.5, '#B5593F', { top: '#C9785F' });
      for (let z = 0.3; z < 1.5; z += 0.3) faceY(gp, 4.2, 14, 17.6, z, z + 0.02, '#9C4A33');
      box(gp, 14, 1.2, 1.5, 3.6, 3, 1.15, '#E8EEF2', { left: 'url(#tglass)', right: '#8ABAD6' });
      for (let x = 14.6; x < 17.6; x += 0.6) line(gp, [x, 4.2, 1.5], [x, 4.2, 2.65], '#ffffff', 0.8);
      const r = [[13.8, 1, 2.65], [17.8, 1, 2.65], [17.8, 4.4, 2.65], [13.8, 4.4, 2.65]];
      poly(gp, [r[0], r[1], [15.8, 2.7, 3.5]], '#5D4037'); poly(gp, [r[1], r[2], [15.8, 2.7, 3.5]], '#4E342E');
      poly(gp, [r[2], r[3], [15.8, 2.7, 3.5]], '#6D4C41', { stroke: '#3E2723', 'stroke-width': 0.8 });
      wallTextY(gp, 15.8, 4.2, 1.2, 'SIGNAL BOX', 0.28, '#fff');
    });

    // depot (back right) with train peeking out
    add('depot', 38.4, 0.4, 43.6, 4.6, gp => {
      box(gp, 38.4, 0.4, 0, 5.2, 4.2, 2.6, '#B0BEC5', { top: '#90A4AE' });
      for (let x = 38.9; x < 43.6; x += 0.8) line(gp, [x, 4.6, 0], [x, 4.6, 2.6], '#90A4AE', 0.8);
      faceY(gp, 4.6, 40.1, 41.9, 0, 2.0, '#263238');
      faceX(gp, 43.6, 0.9, 4.1, 1.6, 2.2, 'url(#tglass)');
      wallTextY(gp, 41, 4.6, 2.3, 'DEPOT', 0.32, '#37474F');
      // nose of a train inside the door
      poly(gp, [[40.45, 4.6, 0.4], [41.55, 4.6, 0.4], [41.55, 4.6, 1.75], [40.45, 4.6, 1.75]], '#FFEB3B', { opacity: 0.95 });
      poly(gp, [[40.6, 4.6, 1.15], [41.4, 4.6, 1.15], [41.4, 4.6, 1.6], [40.6, 4.6, 1.6]], '#263238');
      const [a, b] = P(40.7, 4.6, 0.65), [c, d] = P(41.3, 4.6, 0.65);
      el('circle', { cx: a, cy: b, r: 2.2, fill: '#FFF9C4' }, gp); el('circle', { cx: c, cy: d, r: 2.2, fill: '#FFF9C4' }, gp);
    });

    // freight train layer (moving -x), hidden inside the tunnel
    add('freight', 0, 5.4, 44, 6.6, gp => {
      const cg = clipX(gp, 6.6, 44, 6);
      const tg = g(cg);
      const cont = ['#E53935', '#1E88E5', '#43A047', '#FB8C00', '#8E24AA'];
      vehicle(tg, 0, 3.6, 6, { color: '#FF7043', nose: 'back', noseLen: 0.6, windows: false, stripe: '#FFEB3B', h: 1.5 });
      faceY(tg, 6.55, 0.9, 1.5, 1.25, 1.65, '#263F57');
      for (let i = 0; i < 5; i++) {
        const x = 3.8 + i * 3.4;
        box(tg, x, 5.6, 0.06, 3.2, 0.8, 0.3, '#37474F', { noStroke: true });
        for (const wx of [x + 0.4, x + 2.8]) disc(tg, [wx, 6.42, 0.2], 0.17, 'y', '#263238', { stroke: '#90A4AE', 'stroke-width': 0.8 });
        box(tg, x + 0.1, 5.5, 0.36, 3.0, 1.0, 1.15, cont[i]);
        for (let k = x + 0.35; k < x + 3; k += 0.35) line(tg, [k, 6.5, 0.4], [k, 6.5, 1.46], shade(cont[i], -0.25), 0.7);
      }
      M.freight = tg;
    });

    // platform 2 (back) + canopy + people
    add('platform', 14, 7.4, 30, 9.2, gp => {
      box(gp, 14, 7.4, 0, 16, 1.8, 0.5, '#CFC6BC', { top: '#E0D9D1' });
      flat(gp, 14, 8.95, 16, 0.12, '#FFD600', null, 0.5);
      for (let x = 15; x < 30; x += 3) box(gp, x, 7.6, 0.5, 0.15, 0.15, 1.9, '#455A64', { noStroke: true });
      box(gp, 14.4, 7.3, 2.4, 15.2, 1.7, 0.16, '#78909C', { top: '#90A4AE' });
      for (const [x, c] of [[17, '#E91E63'], [19.5, '#3F51B5'], [23, '#009688'], [27.5, '#FF9800']]) person(gp, x, 8.3, c);
    });

    // signal for main line 1 (changes colour)
    add('signals', 12.8, 8.9, 13.2, 9.3, gp => {
      box(gp, 12.93, 9.03, 0, 0.14, 0.14, 2.0, '#546E7A', { noStroke: true });
      box(gp, 12.82, 8.98, 1.9, 0.36, 0.3, 0.75, '#212121');
      const lamps = [['#FF1744', 2.48], ['#FFC400', 2.25], ['#00E676', 2.02]].map(([c, z]) => { const [a, b] = P(13.0, 9.28, z); return el('circle', { cx: a, cy: b, r: 2.8, fill: c, opacity: 0.2 }, gp); });
      M.signal1 = lamps;
    });

    // high-speed train layer on main line 1 (moving -x)
    add('highspeed', 0, 9.9, 44, 11.1, gp => {
      const cg = clipX(gp, 6.6, 44, 10.5), tg = g(cg);
      vehicle(tg, 0, 4.6, 10.5, { color: '#FAFAFA', nose: 'back', noseLen: 2.0, stripe: '#E53935', glass: '#37474F' });
      vehicle(tg, 4.7, 8.9, 10.5, { color: '#FAFAFA', stripe: '#E53935', glass: '#37474F' });
      vehicle(tg, 9.0, 13.2, 10.5, { color: '#FAFAFA', stripe: '#E53935', glass: '#37474F' });
      vehicle(tg, 13.3, 17.9, 10.5, { color: '#FAFAFA', nose: 'front', noseLen: 2.0, stripe: '#E53935', glass: '#37474F' });
      pantograph(tg, 6.8, 10.5, 1.75, 3.4);
      M.hs = tg;
    });

    // parked passenger train on main line 2
    add('passenger', 16.3, 11.9, 29.8, 13.1, gp => {
      const doors = [];
      const opt = { color: '#1E88E5', roof: '#B0BEC5', stripe: '#FFEB3B', doors: [1.2, 3.0], doorColor: '#FFEB3B' };
      doors.push(...vehicle(gp, 16.3, 20.5, 12.5, Object.assign({}, opt, { nose: 'back', noseLen: 0.9 })));
      doors.push(...vehicle(gp, 20.6, 24.8, 12.5, opt));
      M.cabGroup = g(gp, { 'data-part': 'cab' });
      doors.push(...vehicle(M.cabGroup, 24.9, 29.8, 12.5, Object.assign({}, opt, { nose: 'front', noseLen: 0.9, doors: [1.0, 2.7] })));
      pantograph(gp, 22.6, 12.5, 1.75, 3.4);
      M.doors = doors;
    });

    // overhead wires (between trains and footbridge in draw order)
    add('wires', 6.6, 10.5, 44, 10.5, gp => { line(gp, [6.6, 10.5, 3.4], [44, 10.5, 3.4], '#37474F', 1.2); });
    add('wires', 6.6, 12.5, 44, 12.5, gp => { line(gp, [6.6, 12.5, 3.4], [44, 12.5, 3.4], '#37474F', 1.2); });
    for (const mx of [8, 12.6, 31.6, 38.2, 42.4]) add('wires', mx - 0.15, 14.05, mx + 0.15, 14.35, gp => {
      box(gp, mx - 0.12, 14.08, 0, 0.24, 0.24, 3.95, '#78909C', { noStroke: true });
      line(gp, [mx, 14.2, 3.75], [mx, 10.1, 3.75], '#607D8B', 1.6);
      line(gp, [mx, 10.5, 3.75], [mx, 10.5, 3.4], '#607D8B', 1);
      line(gp, [mx, 12.5, 3.75], [mx, 12.5, 3.4], '#607D8B', 1);
    });

    // bridge trusses (back + front of main lines)
    const truss = (gp, y) => {
      const zb = 0.25, zt = 2.0, xs = [33.6, 34.55, 35.5, 36.45, 37.4];
      line(gp, [33.6, y, zb], [37.4, y, zb], '#1E6F7A', 3); line(gp, [33.9, y, zt], [37.1, y, zt], '#1E6F7A', 3);
      for (let i = 0; i < xs.length - 1; i++) {
        line(gp, [xs[i], y, zb], [Math.min(37.1, Math.max(33.9, xs[i + 1])), y, zt], '#26838F', 2);
        line(gp, [Math.min(37.1, Math.max(33.9, xs[i])), y, zt], [xs[i + 1], y, zb], '#26838F', 2);
      }
      for (const x of [33.9, 35.5, 37.1]) line(gp, [x, y, zb], [x, y, zt], '#1E6F7A', 2);
    };
    add('bridge', 33.6, 4.9, 37.4, 5.1, gp => { truss(gp, 5.0); box(gp, 33.4, 4.8, -0.6, 0.4, 9.2, 0.6, '#BDB5AC'); });
    add('bridge', 33.6, 13.6, 37.4, 13.8, gp => { box(gp, 37.2, 4.8, -0.6, 0.4, 9.2, 0.6, '#BDB5AC'); truss(gp, 13.7); });

    // platform 1 (front)
    add('platform', 14, 13.6, 30, 15.4, gp => {
      box(gp, 14, 13.6, 0, 16, 1.8, 0.5, '#CFC6BC', { top: '#E0D9D1' });
      flat(gp, 14, 13.75, 16, 0.12, '#FFD600', null, 0.5);
      for (const x of [16, 22, 27]) { box(gp, x, 14.8, 0.5, 1.1, 0.35, 0.3, '#8D6E63'); box(gp, x, 15.05, 0.8, 1.1, 0.1, 0.35, '#8D6E63'); }
      box(gp, 18.9, 14.9, 0.5, 0.1, 0.1, 1.6, '#455A64', { noStroke: true });
      box(gp, 18.3, 14.85, 2.1, 1.3, 0.12, 0.5, '#212121');
      wallTextY(gp, 18.95, 14.97, 2.35, '10:42  ON TIME', 0.22, '#FFC400');
      for (const [x, c] of [[17.4, '#F44336'], [20.6, '#9C27B0'], [21.2, '#4CAF50'], [24.5, '#FF5722'], [28.3, '#03A9F4']]) person(gp, x, 14.3, c);
    });
    // signal for main line 2 (red: train waiting)
    add('signals', 30.6, 13.9, 31.0, 14.3, gp => {
      box(gp, 30.73, 14.03, 0, 0.14, 0.14, 2.0, '#546E7A', { noStroke: true });
      box(gp, 30.62, 13.98, 1.9, 0.36, 0.3, 0.75, '#212121');
      [['#FF1744', 2.48, 1], ['#FFC400', 2.25, 0.2], ['#00E676', 2.02, 0.2]].forEach(([c, z, o]) => { const [a, b] = P(30.8, 14.28, z); el('circle', { cx: a, cy: b, r: 2.8, fill: c, opacity: o }, gp); });
    });

    // footbridge (deck split so it sits above trains and wires)
    const FX = 25, FW = 1.5, FZ = 4.2;
    add('footbridge', FX, 7.4, FX + FW, 8.6, gp => { box(gp, FX, 7.4, 0, FW, 1.2, FZ + 0.8, '#90A4AE'); faceY(gp, 8.6, FX + 0.2, FX + FW - 0.2, 0.5, FZ, 'url(#tglass)'); });
    [[8.6, 9.6], [9.6, 11.4], [11.4, 13.4]].forEach(([a, b]) => add('footbridge', FX, a, FX + FW, b, gp => {
      box(gp, FX, a, FZ, FW, b - a, 0.25, '#B0BEC5');
      faceX(gp, FX + FW, a, b, FZ + 0.25, FZ + 0.85, 'url(#tglass)');
      box(gp, FX, a, FZ + 0.85, FW, b - a, 0.08, '#78909C');
    }));
    add('footbridge', FX, 13.4, FX + FW, 14.8, gp => {
      box(gp, FX, 13.4, 0, FW, 1.4, FZ + 0.93, '#90A4AE');
      faceY(gp, 14.8, FX + 0.2, FX + FW - 0.2, 0.6, FZ, 'url(#tglass)');
      faceX(gp, FX + FW, 13.6, 14.6, 0.6, FZ, 'url(#tglass)');
      wallTextY(gp, FX + FW / 2, 14.8, FZ + 0.45, 'EXIT', 0.3, '#fff');
    });

    // level crossing: barriers + lights
    const barriers = [];
    for (const [bx, by, dir] of [[8.6, 14.2, 1], [11.4, 4.7, -1]]) add('crossing', bx - 0.3, by - 0.3, bx + 0.3, by + 0.3, gp => {
      box(gp, bx - 0.15, by - 0.15, 0, 0.3, 0.3, 1.1, '#ECEFF1');
      const arm = el('line', { stroke: '#E53935', 'stroke-width': 3.2, 'stroke-linecap': 'round', 'stroke-dasharray': '6 5' }, gp);
      const armW = el('line', { stroke: '#FFFFFF', 'stroke-width': 3.2, 'stroke-linecap': 'round', 'stroke-dasharray': '5 6', 'stroke-dashoffset': 6 }, gp);
      box(gp, bx - 0.2 * dir - 0.1, by + 0.05, 0, 0.12, 0.12, 1.7, '#455A64', { noStroke: true });
      const lamps = [-0.22, 0.22].map(dy => { const [a, b] = P(bx - 0.2 * dir, by + 0.12, 1.75 + 0 * dy); return el('circle', { cx: a + dy * 22, cy: b, r: 3, fill: '#FF1744', opacity: 0.15 }, gp); });
      barriers.push({ bx, by, dir, arm, armW, lamps, ang: 80 });
    });
    add('crossing', 9.2, 16.2, 10.6, 17.6, gp => { // car waiting on the road
      box(gp, 9.35, 16.4, 0.1, 0.7, 1.3, 0.38, '#7E57C2');
      box(gp, 9.42, 16.6, 0.48, 0.56, 0.75, 0.32, '#D1C4E9', { left: '#90CAF9', right: '#64B5F6' });
    });

    // station building (front)
    add('station', 16, 17.4, 28, 21, gp => {
      box(gp, 16, 17.4, 0, 12, 3.6, 1.9, '#F3D9B1', { top: '#EAD0A7' });
      for (let x = 16.6; x < 27.6; x += 1.4) if (Math.abs(x - 21.8) > 1) faceY(gp, 21, x, x + 0.8, 0.5, 1.5, 'url(#tglass)', { stroke: '#fff', 'stroke-width': 0.8 });
      faceY(gp, 21, 21.0, 22.6, 0, 1.45, '#6D4C41');
      faceX(gp, 28, 18, 20.4, 0.5, 1.5, '#9CC9E3');
      const R0 = [[15.8, 17.2, 1.9], [28.2, 17.2, 1.9], [28.2, 21.2, 1.9], [15.8, 21.2, 1.9]];
      poly(gp, [R0[2], R0[3], [15.8, 19.2, 3.0], [28.2, 19.2, 3.0]], '#C0563E', { stroke: '#8E3B28', 'stroke-width': 1 });
      poly(gp, [R0[1], R0[2], [28.2, 19.2, 3.0]], '#A84834', { stroke: '#8E3B28', 'stroke-width': 1 });
      for (let x = 16.5; x < 28; x += 0.8) line(gp, [x, 21.2, 1.9], [x, 19.2, 3.0], '#A84834', 0.6);
      box(gp, 19, 20.95, 1.55, 6, 0.15, 0.4, '#1565C0');
      wallTextY(gp, 22, 21.1, 1.75, '🚆 STATION', 0.3, '#fff');
    });
    add('clock', 24.2, 20.95, 24.9, 21.25, gp => {
      const c = [24.55, 21.12, 2.45];
      box(gp, 24.48, 21.05, 1.9, 0.14, 0.14, 0.3, '#455A64', { noStroke: true });
      disc(gp, c, 0.38, 'y', '#FFFFFF', { stroke: '#37474F', 'stroke-width': 1.6 });
      const [cx, cy] = P(...c);
      M.hand1 = el('line', { x1: cx, y1: cy, x2: cx, y2: cy - 4.5, stroke: '#212121', 'stroke-width': 1.6, 'stroke-linecap': 'round' }, gp);
      M.hand2 = el('line', { x1: cx, y1: cy, x2: cx + 3, y2: cy, stroke: '#212121', 'stroke-width': 1.6, 'stroke-linecap': 'round' }, gp);
      M.clockC = [cx, cy];
    });

    // steam train (moving +x on the heritage line)
    add('steam', 0, 27.3, 44, 28.7, gp => {
      const cg = clipX(gp, 0.2, 43.8, 28), tg = g(cg);
      // two old carriages
      for (const [a, b] of [[0, 3.4], [3.5, 6.9]]) vehicle(tg, a, b, 28, { color: '#8E2430', roof: '#5D4037', stripe: '#D4A537', glass: '#FFE9A8', h: 1.25 });
      // tender
      box(tg, 7.0, 27.55, 0.3, 1.6, 0.9, 0.9, '#2E7D32');
      box(tg, 7.1, 27.6, 1.2, 1.4, 0.8, 0.15, '#212121');
      for (const wx of [7.4, 8.2]) disc(tg, [wx, 28.47, 0.22], 0.2, 'y', '#B71C1C', { stroke: '#212121', 'stroke-width': 1 });
      // cab
      box(tg, 8.7, 27.5, 0.35, 1.0, 1.0, 1.45, '#2E7D32', { top: '#1B5E20' });
      faceY(tg, 28.5, 8.9, 9.5, 1.0, 1.5, '#FFE9A8');
      box(tg, 8.6, 27.45, 1.8, 1.2, 1.1, 0.12, '#1B5E20');
      // frame + big wheels
      box(tg, 9.6, 27.6, 0.35, 2.4, 0.8, 0.25, '#212121', { noStroke: true });
      hcyl(tg, 9.6, 12.0, 28, 1.05, 0.48, '#2E7D32');
      for (const bx of [10.0, 10.8]) disc(tg, [bx, 28.42, 0.42], 0.38, 'y', '#C62828', { stroke: '#212121', 'stroke-width': 1.4 });
      disc(tg, [11.6, 28.42, 0.25], 0.22, 'y', '#C62828', { stroke: '#212121', 'stroke-width': 1.2 });
      M.rod = el('line', { stroke: '#B0BEC5', 'stroke-width': 2.2, 'stroke-linecap': 'round' }, tg);
      cyl(tg, 11.5, 28, 1.45, 0.17, 0.75, '#212121');
      cyl(tg, 10.6, 28, 1.45, 0.22, 0.2, '#D4A537');
      const [hx, hy] = P(12.0, 28, 1.05); el('circle', { cx: hx + 2, cy: hy - 1, r: 2.6, fill: '#FFF9C4' }, tg);
      M.steam = tg;
    });
    // little houses + trees (front)
    for (const [x, y, c] of [[3, 30.4, '#FFCC80'], [14, 30.8, '#90CAF9'], [24, 30.3, '#F48FB1'], [39.5, 30.6, '#CE93D8']]) add(null, x, y, x + 2.2, y + 1.8, gp => {
      box(gp, x, y, 0, 2.2, 1.8, 1.0, c);
      poly(gp, [[x - 0.1, y + 1.9, 1.0], [x + 2.3, y + 1.9, 1.0], [x + 2.3, y + 0.9, 1.7], [x - 0.1, y + 0.9, 1.7]], '#C0563E');
      poly(gp, [[x + 2.3, y - 0.1, 1.0], [x + 2.3, y + 1.9, 1.0], [x + 2.3, y + 0.9, 1.7]], '#A84834');
      faceY(gp, y + 1.8, x + 0.3, x + 0.8, 0.4, 0.8, 'url(#tglass)'); faceY(gp, y + 1.8, x + 1.3, x + 1.8, 0, 0.75, '#6D4C41');
    });
    const T = [[1.5, 18], [4, 19.5], [6.5, 17.5], [2.5, 25], [6, 25.2], [30.5, 25.2], [40, 25], [42.5, 22.5], [39.5, 19], [42.6, 16.5],
      [12.5, 25.3], [27.5, 25.4], [8, 31.5], [19, 32], [30, 32.2], [35.5, 31.2], [42.5, 32.3], [12.4, 2], [21, 2.2], [32, 2.4]];
    T.forEach(([x, y]) => add(null, x - 0.5, y - 0.5, x + 0.5, y + 0.5, gp => tree(gp, x, y)));

    ISO.depthSort(items).forEach(it => it.draw(layer(it.part)));
    // smoke above everything
    const smokeL = g(world, { 'data-part': 'steam' });
    const puffs = Array.from({ length: 9 }, () => el('circle', { r: 6, fill: '#F5F5F5', opacity: 0 }, smokeL));

    /* ---------- animation ---------- */
    const off = (dx, y) => { const [a, b] = P(dx, y, 0), [c, d] = P(0, y, 0); return `translate(${(a - c).toFixed(1)},${(b - d).toFixed(1)})`; };
    let doorOpen = null;
    function tick(t) {
      // high-speed: every 16 s, 4.5 s run from x=46 to x=-20 (nose leads at -x end)
      const th = t % 16; const hsX = th < 4.5 ? 46 - (66 * th / 4.5) : 99;
      M.hs.setAttribute('transform', off(hsX, 10.5));
      // freight: every 30 s, 22 s run from 46 to -24
      const tf = t % 30; const frX = tf < 22 ? 46 - 70 * tf / 22 : 99;
      M.freight.setAttribute('transform', off(frX, 6));
      // steam: every 28 s, 22 s run from -14 to 46
      const ts = t % 28; const stX = ts < 22 ? -14 + 60 * ts / 22 : -99;
      M.steam.setAttribute('transform', off(stX, 28));
      // connecting rod on the big wheels
      const ang = t * 6, r = 0.22;
      const a1 = P(10.0 + stX + r * Math.cos(ang), 28.5, 0.42 + r * Math.sin(ang)), a2 = P(10.8 + stX + r * Math.cos(ang), 28.5, 0.42 + r * Math.sin(ang));
      const [ox, oy] = P(stX, 28, 0), [qx, qy] = P(0, 28, 0);
      M.rod.setAttribute('x1', a1[0] - (ox - qx)); M.rod.setAttribute('y1', a1[1] - (oy - qy));
      M.rod.setAttribute('x2', a2[0] - (ox - qx)); M.rod.setAttribute('y2', a2[1] - (oy - qy));
      // smoke puffs from the chimney
      const visible = stX > -12 && stX < 33;
      puffs.forEach((p, i) => {
        const age = ((t * 1.0 + i / puffs.length * 2.2) % 2.2) / 2.2;
        const born = t - age * 2.2, bx = -14 + 60 * ((born % 28) / 22);
        const ok = visible && (born % 28) < 22 && bx + 11.5 < 43;
        const [sx, sy] = P(bx + 11.5 - age * 1.6, 28 - age * 0.6, 2.2 + age * 2.6);
        p.setAttribute('cx', sx.toFixed(1)); p.setAttribute('cy', sy.toFixed(1));
        p.setAttribute('r', (5 + age * 13).toFixed(1));
        p.setAttribute('opacity', ok ? (0.85 * (1 - age)).toFixed(2) : 0);
      });
      // level crossing: down when a train is near x 4..24
      const near = (head, len) => head < 24 && head + len > 2;
      const down = (th < 4.5 && near(hsX, 18)) || (tf < 22 && near(frX, 21));
      barriers.forEach(b => {
        b.ang += ((down ? 0 : 82) - b.ang) * 0.08;
        const A = b.ang * Math.PI / 180, L = 2.4;
        const p0 = P(b.bx, b.by, 1.0), p1 = P(b.bx + b.dir * L * Math.cos(A), b.by, 1.0 + L * Math.sin(A));
        for (const ln of [b.arm, b.armW]) { ln.setAttribute('x1', p0[0]); ln.setAttribute('y1', p0[1]); ln.setAttribute('x2', p1[0]); ln.setAttribute('y2', p1[1]); }
        const flash = down || b.ang < 60;
        b.lamps.forEach((l, i) => l.setAttribute('opacity', flash ? ((Math.floor(t * 2.5) + i) % 2 ? 1 : 0.15) : 0.15));
      });
      // main line 1 signal: green while the fast train is coming
      const green = th < 4.5 && hsX > 0;
      M.signal1[0].setAttribute('opacity', green ? 0.2 : 1);
      M.signal1[2].setAttribute('opacity', green ? 1 : 0.2);
      // doors of the parked train open and close
      const open = (t % 12) < 7;
      if (open !== doorOpen) { doorOpen = open; M.doors.forEach(d => d.setAttribute('fill', open ? '#37474F' : '#FFEB3B')); }
      // station clock hands
      const [cx, cy] = M.clockC, m = t / 10, h = t / 120;
      M.hand1.setAttribute('x2', cx + 4.5 * Math.sin(m)); M.hand1.setAttribute('y2', cy - 4.5 * Math.cos(m) * 0.9);
      M.hand2.setAttribute('x2', cx + 3 * Math.sin(h + 2)); M.hand2.setAttribute('y2', cy - 3 * Math.cos(h + 2) * 0.9);
    }
    return { tick };
  }

  function defs(d) {
    const lg = el('linearGradient', { id: 'tglass', x1: 0, y1: 0, x2: 0, y2: 1 }, d);
    el('stop', { offset: 0, 'stop-color': '#B3E5FC' }, lg); el('stop', { offset: 1, 'stop-color': '#4FA8D8' }, lg);
    const rg = el('radialGradient', { id: 'tleaf', cx: 0.35, cy: 0.35, r: 0.75 }, d);
    el('stop', { offset: 0, 'stop-color': '#8BC34A' }, rg); el('stop', { offset: 1, 'stop-color': '#2E7D32' }, rg);
  }

  registerThing({
    id: 'trains', name: 'Trains', emoji: '🚂', color: '#66BB6A', color2: '#2E7D32',
    tagline: 'All aboard the railway!',
    viewBox: { x: -640, y: -110, w: 1440, h: 960 },
    phoneZoom: 1.7,
    parts, defs, build
  });
})();
