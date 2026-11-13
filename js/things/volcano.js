/* Peek Inside — The Volcano (cutaway, sliced in half like a cake) */
(function () {
  const { el, g } = ISO;

  const parts = [
    { id: 'crater', emoji: '🕳️', name: 'Crater', short: 'The bowl at the top', anchor: [32, -48],
      what: 'The crater is the big bowl-shaped hole at the very top of the volcano.',
      does: 'When the volcano erupts, lava, ash and gas burst out of the crater. Between eruptions, a crater can be quiet, or even hold a bubbling lake of lava!',
      fact: 'When a volcano goes quiet for a long time, rain can fill its crater and make a beautiful round lake, called a crater lake.',
      who: 'With a grown-up, make a baking soda volcano: put baking soda in a cup, add a squirt of washing-up liquid and red food colouring, then pour in vinegar. Whoosh!' },
    { id: 'ash', emoji: '☁️', name: 'Ash Cloud', short: 'Not soft like campfire ash', anchor: [-170, -262],
      what: 'The dark cloud above the volcano is made of volcanic ash: tiny, sharp bits of rock and glass, mixed with gas.',
      does: 'Strong eruptions blast the ash high into the sky. The wind can carry it hundreds of kilometres away, and it slowly falls back down like grey snow.',
      fact: 'In 2010, ash from a volcano in Iceland stopped about 100,000 aeroplane flights in Europe, because ash can damage jet engines!',
      who: 'Shake a jar of water with a spoonful of soil, then watch: the tiny bits take a long time to settle, just like ash in the sky.' },
    { id: 'lightning', emoji: '⚡', name: 'Volcanic Lightning', short: 'Lightning inside the ash', anchor: [122, -236],
      what: 'Sometimes lightning flashes right inside the ash cloud. Watch for the yellow zap!',
      does: 'Billions of ash bits crash and rub together as they fly up. This makes static electricity, which builds up until it jumps across as lightning.',
      fact: 'Scientists call it a “dirty thunderstorm”, because the lightning is made by dusty ash instead of a rain cloud.',
      who: 'Rub a balloon on your hair, then hold it near tiny bits of paper. They jump up! That is static electricity, the same thing that makes volcanic lightning.' },
    { id: 'bombs', emoji: '☄️', name: 'Lava Bombs', short: 'Flying blobs of lava', anchor: [-168, -118],
      what: 'Lava bombs are blobs of hot lava thrown up into the air by the eruption. Watch them fly!',
      does: 'They spin through the air and cool down on the way, so they often land as rocks shaped like footballs or teardrops.',
      fact: 'Some lava bombs are as big as a car! That is why people must stay far away from an erupting volcano.',
      who: 'Throw a soft ball high up and watch the curved path it makes as it falls. Lava bombs fly along the same kind of curve.' },
    { id: 'vent', emoji: '🔥', name: 'Main Vent', short: 'The volcano’s chimney', anchor: [0, 170],
      what: 'The main vent is a long pipe, deep inside the volcano, that goes from the magma chamber up to the crater.',
      does: 'Magma is lighter than the solid rock around it, so it pushes up the vent, a bit like a bubble rising in water. Watch the glowing bubbles!',
      fact: 'Magma is full of gas, like a fizzy drink. When it rises, the gas bubbles grow and rush out. That is why some volcanoes explode with a BANG!',
      who: 'With a grown-up, shake a bottle of fizzy water outside, then open it slowly. The fizz rushes out, just like gas in magma.' },
    { id: 'sidevent', emoji: '↖️', name: 'Side Vent', short: 'A new door for magma', anchor: [-200, 108],
      what: 'A side vent is a crack where magma escapes from the side of the volcano instead of the top.',
      does: 'If the main vent is blocked, or the volcano’s side is weak, magma finds a new way out. Over time, a little cone can grow there.',
      fact: 'Mount Etna in Italy has hundreds of little side cones dotted all over its slopes!',
      who: 'Push a straw into a ball of play-dough and blow gently. The air finds the easiest way out, just like magma does.' },
    { id: 'magma', emoji: '🟠', name: 'Magma Chamber', short: 'A hidden pool of melted rock', anchor: [0, 466],
      what: 'Deep under the volcano is a huge pocket of magma: rock so hot that it has melted.',
      does: 'Magma collects here for a long time. When too much magma and gas squeeze in, the pressure pushes it up the vent and the volcano erupts.',
      fact: 'Magma underground is called lava once it comes out. It can be 1,200 °C, more than four times hotter than the hottest kitchen oven!',
      who: 'With a grown-up, melt a piece of chocolate in a warm spoon. Solid becomes runny when it gets hot, just like rock becomes magma.' },
    { id: 'layers', emoji: '🍰', name: 'Rock Layers', short: 'Built like a layer cake', anchor: [-245, 250],
      what: 'Look at the stripes inside the volcano! It is made of many layers of old lava and ash.',
      does: 'Every eruption adds a new layer on top, so the volcano slowly grows taller and wider, one layer at a time.',
      fact: 'Some big volcanoes took hundreds of thousands of years to grow, layer by layer!',
      who: 'Make a mountain from layers of different coloured play-dough, then ask a grown-up to cut it in half. Can you see the layers?' },
    { id: 'mantle', emoji: '🟤', name: 'Mantle', short: 'The hot layer under the crust', anchor: [-300, 690],
      what: 'Under the ground we stand on, the crust, is a thick, hot layer called the mantle.',
      does: 'The mantle is mostly solid rock, but it is so hot that it slowly flows and churns, like very thick toothpaste. It moves so slowly that you could never see it.',
      fact: 'The crust is very thin compared to the whole Earth, about as thin as the skin on an apple!',
      who: 'Pour some honey onto a plate and watch how slowly it spreads. The mantle flows much, much slower still!' },
    { id: 'plates', emoji: '🧩', name: 'Tectonic Plates', short: 'Earth’s giant puzzle pieces', anchor: [330, 520],
      what: 'The Earth’s crust is broken into giant pieces called plates, like a huge jigsaw puzzle.',
      does: 'The plates slowly move. Here, one plate slides down under another. It melts deep down and makes magma, which feeds volcanoes.',
      fact: 'Plates move about as fast as your fingernails grow. Most volcanoes sit in a giant ring around the Pacific Ocean, called the Ring of Fire.',
      who: 'Put cracker pieces on top of yoghurt and gently push them together. Watch them bump and slide, like plates!' },
    { id: 'lava', emoji: '🌋', name: 'Lava Flow', short: 'A river of melted rock', anchor: [210, 62],
      what: 'Lava is melted rock that has come out of the volcano. Watch the glowing river flow down to the sea!',
      does: 'Lava flows downhill like very thick syrup. As it cools, it gets darker and harder until it turns into solid rock.',
      fact: 'There are two kinds of lava flow with Hawaiian names: smooth, ropey “pahoehoe” and rough, crunchy “a’a”.',
      who: 'Pour honey and water down a tilted tray side by side. Thick lava moves slowly like the honey!' },
    { id: 'steam', emoji: '♨️', name: 'Steam Vents', short: 'The volcano’s breath', anchor: [138, 22],
      what: 'Steam vents, called fumaroles, are small holes where hot gas and steam puff out of the ground.',
      does: 'Water underground gets heated by the hot rocks and turns into steam. Gases from the magma escape with it.',
      fact: 'Some volcano gases smell like rotten eggs! That smell comes from a yellow stuff called sulphur.',
      who: 'Ask a grown-up to show you the steam from a kettle, from a safe distance. Steam vents work in a similar way.' },
    { id: 'geyser', emoji: '⛲', name: 'Geyser', short: 'A hot water fountain', anchor: [-410, 252],
      what: 'A geyser is a hot spring that sometimes shoots a tall fountain of hot water and steam into the air. Watch it whoosh!',
      does: 'Water trickles down into hot rocks underground. It gets hotter and hotter until it boils and blasts up out of the hole.',
      fact: 'All geysers are named after one famous geyser in Iceland, called Geysir!',
      who: 'Outside, with a grown-up, drop a few mint sweets into a bottle of diet cola, then step back. A fizzy fountain!' },
    { id: 'island', emoji: '🏝️', name: 'New Island', short: 'Brand-new land!', anchor: [632, 244],
      what: 'When lava flows into the sea, it cools very fast and turns into new rock. Little by little, it can build brand-new land.',
      does: 'The lava hisses and makes huge clouds of steam as it hits the cold water. Volcanoes under the sea can even grow up out of the water to make whole islands!',
      fact: 'In 1963, a new island called Surtsey was born from a volcano in the sea near Iceland. Now birds and seals live there!',
      who: 'Slowly pour wet sand from a cup into a bowl of water, in the same spot. Watch your own little island grow!' },
    { id: 'rocks', emoji: '🪨', name: 'Volcanic Rocks', short: 'Rocks made by volcanoes', anchor: [-490, 290],
      what: 'When lava cools, it turns into different kinds of rock. Here are three: pumice, obsidian and basalt.',
      does: 'Pumice is full of tiny gas bubbles, so it is very light. Obsidian cooled so fast that it became shiny black glass. Basalt is dark and heavy.',
      fact: 'Pumice is so light that it can float on water! It is the only rock that floats.',
      who: 'If you have a pumice stone in the bathroom, put it in a bowl of water and see if it floats!' },
    { id: 'farms', emoji: '🌾', name: 'Farms', short: 'Super soil from volcanoes', anchor: [-480, 222],
      what: 'Farmers often grow crops on the land around volcanoes, even though it can be risky.',
      does: 'Old volcanic ash and rock break down into very rich soil, full of the minerals that plants need to grow big and strong.',
      fact: 'Lots of coffee, grapes and rice are grown on the slopes of volcanoes, because the soil is so good!',
      who: 'Plant two seeds, one in plain sand and one in good soil. Which one grows better?' },
    { id: 'scientist', emoji: '👩‍🔬', name: 'Volcano Scientist', short: 'Keeping people safe', anchor: [-598, 292],
      what: 'Volcano scientists are called volcanologists. They study volcanoes to understand them and keep people safe.',
      does: 'They use machines called seismometers to feel tiny earthquakes, measure the gases, check if the ground is swelling up, and fly drones over craters.',
      fact: 'Before a volcano erupts, the ground often shakes with lots of tiny earthquakes. Scientists can use these clues to warn people to move away in time.',
      who: 'Put a cup of water on a table and gently tap the table. Watch the ripples! A seismometer feels shaking in a similar way.' },
    { id: 'sleeping', emoji: '💤', name: 'Sleeping Volcano', short: 'Quiet… for now', anchor: [-340, -20],
      what: 'The snowy mountain in the back is a sleeping volcano. Volcanoes that have not erupted for a long time, but might again, are called dormant.',
      does: 'A volcano that will never erupt again is called extinct. Over millions of years, rain and wind slowly wear extinct volcanoes down.',
      fact: 'Edinburgh Castle in Scotland is built on top of an extinct volcano that erupted about 350 million years ago!',
      who: 'Look at a world map with a grown-up and find Edinburgh in Scotland, then the Pacific Ocean’s Ring of Fire.' }
  ];

  /* ---------- oblique projection: X right, Y depth (back), Z up ---------- */
  const O = (X, Y, Z) => [X + 0.4 * Y, 300 - Z - 0.3 * Y];
  const pts = list => list.map(p => (p.length === 3 ? O(...p) : p)).map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ');
  const poly = (par, list, fill, attrs) => el('polygon', Object.assign({ points: pts(list), fill }, attrs || {}), par);
  const path = (par, d, attrs) => el('path', Object.assign({ d }, attrs || {}), par);
  function hull(points) {
    const p = points.slice().sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    const cr = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
    const lo = [], up = [];
    for (const q of p) { while (lo.length > 1 && cr(lo[lo.length - 2], lo[lo.length - 1], q) <= 0) lo.pop(); lo.push(q); }
    for (let i = p.length - 1; i >= 0; i--) { const q = p[i]; while (up.length > 1 && cr(up[up.length - 2], up[up.length - 1], q) <= 0) up.pop(); up.push(q); }
    return lo.slice(0, -1).concat(up.slice(0, -1));
  }
  const wave = (y, amp, ph) => { let d = `M-640,${y}`; for (let x = -620; x <= 640; x += 20) d += ` L${x},${(y + amp * Math.sin(x / 70 + ph)).toFixed(1)}`; return d; };
  function mover(par, d, r, fill, dur, begin, attrs) {
    const c = el('circle', Object.assign({ r, fill, opacity: 0 }, attrs || {}), par);
    el('animateMotion', { path: d, dur, begin, repeatCount: 'indefinite' }, c);
    el('animate', { attributeName: 'opacity', values: '0;1;1;0', keyTimes: '0;0.08;0.85;1', dur, begin, repeatCount: 'indefinite' }, c);
    return c;
  }

  const R = 380, RT = 55, H = 325; // cone base radius, crater radius, crater height

  function build(world) {
    const P = id => g(world, id ? { 'data-part': id } : {});

    /* ---- ground block: right face, front face (crust + mantle), top ---- */
    const blk = g(world);
    poly(blk, [O(640, 0, 0), O(640, 400, 0), O(640, 400, -490), O(640, 0, -490)], 'url(#vSide)', { stroke: '#4E342E', 'stroke-width': 1.5 });
    poly(blk, [O(640, 0, 0), O(640, 400, 0), O(640, 400, -28), O(640, 0, -28)], '#3E8FC4');
    // front face: crust bands
    const crust = P('layers');
    const bands = [[300, '#6D4C41'], [322, '#A1887F'], [372, '#8D6E63'], [430, '#BCAAA4'], [495, '#9E8577']];
    bands.forEach(([y, c], i) => path(crust, wave(y, i ? 6 : 0, i) + ` L640,600 L-640,600 Z`, { fill: c }));
    // mantle
    const ma = P('mantle');
    path(ma, wave(560, 10, 2) + ' L640,790 L-640,790 Z', { fill: 'url(#vMantle)' });
    for (const cx of [-300, 260]) {
      el('ellipse', { cx, cy: 680, rx: 170, ry: 58, fill: 'none', stroke: '#FFE0B2', 'stroke-width': 4, opacity: 0.55, class: 'vflow' }, ma);
      path(ma, `M${cx + 170},676 l-8,14 l14,-4 Z`, { fill: '#FFE0B2', opacity: 0.7 });
    }
    // sea water in front face
    const isl = P('island');
    el('rect', { x: 460, y: 300, width: 180, height: 34, fill: '#4FA8DB' }, isl);
    // plates: ocean plate sliding under
    const pl = P('plates');
    poly(pl, [[640, 334], [640, 392], [215, 612], [150, 572]], '#7E8E99', { stroke: '#546E7A', 'stroke-width': 2 });
    for (let k = 0; k < 6; k++) path(pl, `M${600 - k * 70},${356 + k * 36} l-24,12`, { stroke: '#B0BEC5', 'stroke-width': 3, 'stroke-linecap': 'round' });
    const arrow = (x, y, dir) => path(pl, `M${x},${y} l${-dir * 46},0 m0,0 l${dir * 14},-12 m${-dir * 14},12 l${dir * 14},12`, { stroke: '#FFFFFF', 'stroke-width': 6, 'stroke-linecap': 'round', fill: 'none', class: 'vnudge' });
    arrow(600, 372, 1); arrow(-470, 452, -1);
    // magma melting at the plate tip
    el('ellipse', { cx: 180, cy: 570, rx: 34, ry: 14, fill: '#FF7043', opacity: 0.8, class: 'vglow' }, pl);

    // top surface: grass + sea
    const top = g(world);
    poly(top, [O(-640, 0, 0), O(460, 0, 0), O(460, 400, 0), O(-640, 400, 0)], 'url(#vGrass)');
    const sea = P('island');
    poly(sea, [O(460, 0, 0), O(640, 0, 0), O(640, 400, 0), O(460, 400, 0)], '#5BB5E6');
    for (let i = 0; i < 6; i++) { const [a, b] = O(500 + (i % 3) * 40, 60 + i * 55, 0); path(sea, `M${a},${b} q10,-5 20,0 t20,0`, { fill: 'none', stroke: '#B3E5FC', 'stroke-width': 2.5, class: 'ripple' }); }
    poly(top, [O(-640, 0, 0), O(640, 0, 0), O(640, 0, -3), O(-640, 0, -3)], '#4E7D2A');

    /* ---- sleeping volcano (back) ---- */
    const sv = P('sleeping');
    const sb = [];
    for (let i = 0; i <= 18; i++) { const t = Math.PI * i / 18; sb.push(O(-500 + 150 * Math.cos(t), 330 + 60 * Math.sin(t), 0)); }
    const sApex = O(-500, 330, 230);
    poly(sv, hull(sb.concat([O(-525, 330, 225), O(-475, 330, 225)])), '#8EA3B4', { stroke: '#6C8294', 'stroke-width': 1.5 });
    poly(sv, [O(-525, 330, 225), O(-475, 330, 225), O(-455, 330, 175), O(-490, 330, 185), O(-515, 330, 170), O(-548, 330, 178)], '#FFFFFF');
    const zz = g(sv);
    [0, 1, 2].forEach(i => { const t = el('text', { x: sApex[0] + 18 + i * 12, y: sApex[1] - 10 - i * 14, 'font-size': 16 + i * 4, 'font-weight': 900, fill: '#5C6BC0', class: 'zzz', style: `animation-delay:${i * 0.6}s` }, zz); t.textContent = 'z'; });

    /* ---- farms + geyser + rocks + scientist (left side of the top) ---- */
    const fa = P('farms');
    const cols = ['#C5E1A5', '#FFF59D', '#AED581', '#FFE082'];
    for (let i = 0; i < 4; i++) {
      const y0 = 120 + i * 65;
      poly(fa, [O(-640, y0, 0), O(-525, y0, 0), O(-525, y0 + 60, 0), O(-640, y0 + 60, 0)], cols[i], { stroke: '#8BC34A', 'stroke-width': 1 });
      for (let k = 1; k < 5; k++) { const a = O(-640 + k * 23, y0 + 4, 0), b = O(-640 + k * 23, y0 + 56, 0); el('line', { x1: a[0], y1: a[1], x2: b[0], y2: b[1], stroke: '#7CB342', 'stroke-width': 2, opacity: 0.6 }, fa); }
    }
    const fh = O(-560, 360, 0);
    el('rect', { x: fh[0] - 14, y: fh[1] - 18, width: 28, height: 18, fill: '#FFCC80', stroke: '#A1887F' }, fa);
    path(fa, `M${fh[0] - 18},${fh[1] - 17} L${fh[0]},${fh[1] - 32} L${fh[0] + 18},${fh[1] - 17} Z`, { fill: '#D84315' });

    const gy = P('geyser');
    const gp = O(-470, 150, 0);
    el('ellipse', { cx: gp[0], cy: gp[1], rx: 26, ry: 8, fill: '#80DEEA', stroke: '#E0F7FA', 'stroke-width': 3 }, gy);
    const jet = g(gy, { class: 'geyser' });
    path(jet, `M${gp[0] - 7},${gp[1]} C${gp[0] - 10},${gp[1] - 50} ${gp[0] - 4},${gp[1] - 100} ${gp[0]},${gp[1] - 120} C${gp[0] + 4},${gp[1] - 100} ${gp[0] + 10},${gp[1] - 50} ${gp[0] + 7},${gp[1]} Z`, { fill: '#E1F5FE', opacity: 0.95 });
    for (const [dx, dy, r] of [[-10, -118, 13], [8, -126, 12], [0, -138, 15]]) el('circle', { cx: gp[0] + dx, cy: gp[1] + dy, r, fill: '#FFFFFF', opacity: 0.9 }, jet);

    /* ---- main volcano: back half surface ---- */
    const cone = g(world);
    const base = [], rim = [];
    for (let i = 0; i <= 36; i++) { const t = Math.PI * i / 36; base.push(O(R * Math.cos(t), R * Math.sin(t), 0)); rim.push(O(RT * Math.cos(t), RT * Math.sin(t), H)); }
    poly(cone, hull(base.concat(rim)), 'url(#vCone)', { stroke: '#4E342E', 'stroke-width': 2 });
    // green foothills band
    const band = [];
    for (let i = 0; i <= 36; i++) { const t = Math.PI * i / 36; band.push(O(R * Math.cos(t), R * Math.sin(t), 0)); }
    for (let i = 36; i >= 0; i--) { const t = Math.PI * i / 36, r = R - (R - RT) * 70 / H; band.push(O(r * Math.cos(t), r * Math.sin(t), 70)); }
    for (const deg of [15, 35, 55, 75, 100, 125, 145, 165]) {
      const t = deg * Math.PI / 180, a = O(RT * Math.cos(t), RT * Math.sin(t), H), b = O(R * Math.cos(t), R * Math.sin(t), 0);
      el('line', { x1: a[0], y1: a[1], x2: b[0], y2: b[1], stroke: '#3E2723', 'stroke-width': 2, opacity: 0.18 }, cone);
    }
    // crater lava lake
    const cr = P('crater');
    const lake = [];
    for (let i = 0; i <= 18; i++) { const t = Math.PI * i / 18; lake.push(O(46 * Math.cos(t), 46 * Math.sin(t), H - 12)); }
    poly(cr, rim, '#4E342E');
    poly(cr, lake, 'url(#vLava)', { class: 'vglow' });

    /* ---- lava flow down the back-right slope into the sea ---- */
    const lv = P('lava');
    const flow = [O(40, 35, 318), O(110, 110, 230), O(170, 160, 150), O(255, 220, 60), O(330, 255, 0), O(410, 240, 0), O(472, 230, 0)];
    const fd = 'M' + flow.map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' L');
    path(lv, fd, { fill: 'none', stroke: '#3E2723', 'stroke-width': 20, 'stroke-linejoin': 'round', 'stroke-linecap': 'round' });
    path(lv, fd, { fill: 'none', stroke: '#FF6D00', 'stroke-width': 14, 'stroke-linejoin': 'round', 'stroke-linecap': 'round' });
    path(lv, fd, { fill: 'none', stroke: '#FFD54F', 'stroke-width': 5, 'stroke-linejoin': 'round', 'stroke-linecap': 'round', 'stroke-dasharray': '10 16', class: 'vlava' });

    /* ---- steam vents on the slope ---- */
    const st = P('steam');
    for (const [x, y, d] of [[138, 22, 0], [160, 40, 0.9], [118, 46, 1.7]]) {
      el('ellipse', { cx: x, cy: y + 4, rx: 7, ry: 3, fill: '#3E2723' }, st);
      for (let k = 0; k < 2; k++) el('circle', { cx: x, cy: y, r: 7, fill: '#FFFFFF', class: 'wisp', style: `animation-delay:${d + k * 1.2}s` }, st);
    }

    /* ---- cut face of the volcano (layers) ---- */
    const sec = P('layers');
    const S = [[-R, 300], [-RT, 300 - H], [-28, 300 - H + 26], [28, 300 - H + 26], [RT, 300 - H], [R, 300]];
    const lc = ['#8D6E63', '#A1887F', '#6D4C41', '#BCAAA4', '#795548', '#A1887F', '#8D6E63'];
    [1, 0.86, 0.72, 0.58, 0.44, 0.3, 0.16].forEach((s, i) => poly(sec, S.map(([x, y]) => [x * s, 300 - (300 - y) * s]), lc[i], { stroke: '#5D4037', 'stroke-width': 1.2 }));
    poly(sec, S, 'none', { stroke: '#3E2723', 'stroke-width': 3, 'stroke-linejoin': 'round' });

    /* ---- side vent (branch + small cone on the left slope) ---- */
    const sv2 = P('sidevent');
    path(sv2, 'M-4,205 Q-110,160 -205,112', { fill: 'none', stroke: '#BF360C', 'stroke-width': 16, 'stroke-linecap': 'round' });
    path(sv2, 'M-4,205 Q-110,160 -205,112', { fill: 'none', stroke: '#FF8F00', 'stroke-width': 9, 'stroke-linecap': 'round' });
    path(sv2, 'M-238,138 L-214,96 L-196,96 L-178,118 Z', { fill: '#795548', stroke: '#3E2723', 'stroke-width': 2 });
    el('ellipse', { cx: -205, cy: 97, rx: 10, ry: 4, fill: '#FF6D00', class: 'vglow' }, sv2);
    path(sv2, 'M-210,99 Q-226,130 -238,170 Q-246,196 -252,214', { fill: 'none', stroke: '#FF6D00', 'stroke-width': 6, 'stroke-linecap': 'round' });

    /* ---- main vent (conduit) with rising bubbles ---- */
    const ve = P('vent');
    path(ve, 'M0,430 L0,-2', { stroke: '#BF360C', 'stroke-width': 34, 'stroke-linecap': 'round' });
    path(ve, 'M0,430 L0,-2', { stroke: 'url(#vPipe)', 'stroke-width': 24, 'stroke-linecap': 'round' });
    for (let i = 0; i < 5; i++) mover(ve, 'M0,430 L0,0', 4 + (i % 3), '#FFF59D', '3s', `${i * 0.6}s`);

    /* ---- magma chamber ---- */
    const mc = P('magma');
    el('ellipse', { cx: 0, cy: 470, rx: 165, ry: 60, fill: '#BF360C' }, mc);
    el('ellipse', { cx: 0, cy: 470, rx: 155, ry: 52, fill: 'url(#vMagma)', class: 'vglow' }, mc);
    for (const [x, y, d] of [[-80, 480, 0], [40, 460, 0.8], [100, 485, 1.6], [-20, 495, 2.2]]) el('circle', { cx: x, cy: y, r: 6, fill: '#FFF176', class: 'blob', style: `animation-delay:${d}s` }, mc);

    /* ---- ash column, cloud, lightning ---- */
    const as = P('ash');
    poly(as, [[-30, -22], [30, -22], [100, -215], [-100, -215]], 'url(#vColumn)');
    const puffs = [[-185, -250, 70], [-95, -305, 92], [20, -330, 102], [135, -298, 86], [225, -252, 66], [-40, -240, 82], [95, -236, 76], [-140, -205, 55], [170, -205, 52]];
    puffs.forEach(([x, y, r], i) => el('circle', { cx: x, cy: y, r, fill: 'url(#vAsh)', class: 'billow', style: `animation-delay:${(i * 0.35).toFixed(2)}s` }, as));
    const li = P('lightning');
    el('polyline', { points: '100,-300 122,-262 108,-258 138,-206 128,-230 142,-232', fill: 'none', stroke: '#FFEB3B', 'stroke-width': 6, 'stroke-linejoin': 'round', class: 'zap', filter: 'url(#vGlow)' }, li);
    el('polyline', { points: '-60,-280 -48,-252 -58,-250 -40,-214', fill: 'none', stroke: '#FFF59D', 'stroke-width': 4, 'stroke-linejoin': 'round', class: 'zap z2', filter: 'url(#vGlow)' }, li);

    /* ---- lava bombs ---- */
    const bo = P('bombs');
    const arcs = [['M0,-40 Q-120,-330 -232,143', '2.6s', '0s'], ['M0,-40 Q70,-300 170,60', '2.2s', '0.7s'], ['M0,-40 Q-60,-260 -120,28', '2s', '1.3s'], ['M0,-40 Q150,-280 260,150', '2.8s', '1.8s']];
    path(bo, 'M0,-40 Q-120,-330 -232,143', { fill: 'none', stroke: '#FF8A65', 'stroke-width': 2, 'stroke-dasharray': '4 8', opacity: 0.5 });
    arcs.forEach(([d, dur, b]) => mover(bo, d, 8, '#E64A19', dur, b, { stroke: '#FFCC80', 'stroke-width': 2, filter: 'url(#vGlow)' }));
    for (const [x, y] of [[-150, 66], [210, 120]]) el('ellipse', { cx: x, cy: y, rx: 9, ry: 6, fill: '#3E2723' }, bo);

    /* ---- new island + steam where lava meets the sea ---- */
    const ni = P('island');
    const ic = O(560, 180, 0);
    path(ni, `M${ic[0] - 48},${ic[1] + 4} Q${ic[0] - 30},${ic[1] - 22} ${ic[0] - 4},${ic[1] - 24} Q${ic[0] + 26},${ic[1] - 26} ${ic[0] + 46},${ic[1] + 4} Z`, { fill: '#37474F', stroke: '#263238', 'stroke-width': 2 });
    path(ni, `M${ic[0] - 14},${ic[1] - 22} q8,-6 16,0`, { stroke: '#8BC34A', 'stroke-width': 5, fill: 'none', 'stroke-linecap': 'round' });
    const se = O(472, 230, 0);
    for (let k = 0; k < 3; k++) el('circle', { cx: se[0] + k * 8, cy: se[1] - 6, r: 9, fill: '#FFFFFF', class: 'wisp', style: `animation-delay:${k * 0.7}s` }, ni);

    /* ---- volcanic rocks ---- */
    const ro = P('rocks');
    const rp = [-490, 292];
    path(ro, `M${rp[0] - 34},${rp[1]} q4,-18 18,-20 q14,0 16,20 Z`, { fill: '#D7CCC8', stroke: '#8D6E63', 'stroke-width': 2 });
    for (const [dx, dy] of [[-24, -8], [-16, -14], [-10, -6]]) el('circle', { cx: rp[0] + dx, cy: rp[1] + dy, r: 2, fill: '#A1887F' }, ro);
    path(ro, `M${rp[0] - 2},${rp[1]} l8,-28 l14,10 l4,18 Z`, { fill: '#212121', stroke: '#000', 'stroke-width': 1.5 });
    path(ro, `M${rp[0] + 6},${rp[1] - 24} l6,6`, { stroke: '#90A4AE', 'stroke-width': 2 });
    el('ellipse', { cx: rp[0] + 38, cy: rp[1] - 8, rx: 14, ry: 10, fill: '#455A64', stroke: '#263238', 'stroke-width': 1.5 }, ro);

    /* ---- volcano scientist with seismometer ---- */
    const sc = P('scientist');
    const sp = [-598, 292];
    el('ellipse', { cx: sp[0], cy: sp[1] + 2, rx: 16, ry: 5, fill: 'rgba(0,0,0,.2)' }, sc);
    el('rect', { x: sp[0] - 9, y: sp[1] - 36, width: 18, height: 34, rx: 7, fill: '#FF9800' }, sc);
    el('rect', { x: sp[0] - 9, y: sp[1] - 22, width: 18, height: 4, fill: '#FFF59D' }, sc);
    el('circle', { cx: sp[0], cy: sp[1] - 44, r: 9, fill: '#F2C8A0' }, sc);
    path(sc, `M${sp[0] - 12},${sp[1] - 46} q12,-18 24,0 Z`, { fill: '#FFFFFF', stroke: '#B0BEC5', 'stroke-width': 1.5 });
    el('rect', { x: sp[0] + 16, y: sp[1] - 30, width: 40, height: 28, rx: 4, fill: '#37474F' }, sc);
    el('rect', { x: sp[0] + 19, y: sp[1] - 27, width: 34, height: 18, fill: '#E8F5E9' }, sc);
    path(sc, `M${sp[0] + 20},${sp[1] - 18} l4,0 l2,-6 l3,12 l3,-9 l2,5 l3,-3 l2,1 l4,0 l3,-7 l2,10 l3,-4 l3,0`, { fill: 'none', stroke: '#E53935', 'stroke-width': 1.6, class: 'seismo' });

    return {};
  }

  function defs(d) {
    const lg = (id, stops, x2, y2) => { const e = el('linearGradient', { id, x1: 0, y1: 0, x2: x2 || 0, y2: y2 == null ? 1 : y2 }, d); stops.forEach(([o, c, op]) => el('stop', Object.assign({ offset: o, 'stop-color': c }, op != null ? { 'stop-opacity': op } : {}), e)); };
    const rg = (id, stops, cx, cy, r) => { const e = el('radialGradient', { id, cx: cx || 0.5, cy: cy || 0.5, r: r || 0.6 }, d); stops.forEach(([o, c, op]) => el('stop', Object.assign({ offset: o, 'stop-color': c }, op != null ? { 'stop-opacity': op } : {}), e)); };
    lg('vCone', [[0, '#A1887F'], [0.5, '#8D6E63'], [1, '#5D4037']], 1, 0.6);
    lg('vGrass', [[0, '#7CB342'], [1, '#9CCC65']], 0, 1);
    lg('vSide', [[0, '#6D4C41'], [0.55, '#5D4037'], [0.75, '#BF360C'], [1, '#E65100']], 0, 1);
    lg('vMantle', [[0, '#E65100'], [0.5, '#FF7043'], [1, '#FFB74D']], 0, 1);
    lg('vPipe', [[0, '#FFD54F'], [1, '#FF6D00']], 1, 0);
    lg('vColumn', [[0, '#9E9E9E', 0.6], [1, '#616161', 0.95]], 0, 1);
    rg('vMagma', [[0, '#FFF59D'], [0.45, '#FFB300'], [1, '#E65100']]);
    rg('vLava', [[0, '#FFF59D'], [0.6, '#FF9100'], [1, '#D84315']]);
    rg('vAsh', [[0, '#9E9E9E'], [0.7, '#757575'], [1, '#5F5F5F']], 0.35, 0.3, 0.75);
    const f = el('filter', { id: 'vGlow', filterUnits: 'userSpaceOnUse', x: -700, y: -500, width: 1600, height: 1400 }, d);
    el('feGaussianBlur', { stdDeviation: 3, result: 'b' }, f);
    const m = el('feMerge', {}, f); el('feMergeNode', { in: 'b' }, m); el('feMergeNode', { in: 'SourceGraphic' }, m);
  }

  registerThing({
    id: 'volcano', name: 'Volcano', emoji: '🌋', color: '#FF7043', color2: '#BF360C',
    tagline: 'Fire from inside the Earth!',
    bg: 'linear-gradient(#FFCCBC 0%, #FFE0B2 40%, #E1F5FE 100%)',
    labels: { does: '🔥 How does it work?', who: '🧪 Try this!' },
    viewBox: { x: -660, y: -420, w: 1480, h: 1220 },
    phoneZoom: 1.5,
    project: a => a,
    parts, defs, build
  });
})();
