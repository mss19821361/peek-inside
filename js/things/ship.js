/* Peek Inside — The Cruise Ship (side cutaway) */
(function () {
  const { el, g } = ISO;

  const parts = [
    { id: 'bridge', emoji: '🧭', name: 'Bridge', short: 'Where the ship is steered', anchor: [980, 175],
      what: 'The bridge is the room at the front, high up, with big windows all around. It is where the captain and officers drive the ship.',
      does: 'From here they steer, check the maps and the weather, watch the radar and talk by radio to other ships and harbours. Someone is always on the bridge, day and night.',
      fact: 'It is called the bridge because on old paddle steamers, the captain stood on a little bridge that went across from one paddle wheel to the other!',
      who: 'The captain, the officers who take turns steering, and lookouts.' },
    { id: 'radar', emoji: '📡', name: 'Radar Mast', short: 'Seeing in the dark and fog', anchor: [1005, 80],
      what: 'The tall mast on top holds the radar, radio aerials, lights and the ship’s horn.',
      does: 'The radar spins round and round, sending out radio waves that bounce back from other ships, islands and storms, even at night or in thick fog.',
      fact: 'Ships have lights like cars: a red light on the left side and a green light on the right. Then other ships can tell which way they are going in the dark. Can you spot the green one?',
      who: 'Officers on the bridge watch the radar screens.' },
    { id: 'funnel', emoji: '💨', name: 'Funnel', short: 'The ship’s chimney', anchor: [314, 60],
      what: 'The funnel is the big chimney on top of the ship, painted in the company’s colours.',
      does: 'Smoke and hot air from the engines far below travel up through pipes inside the ship and come out of the top of the funnel, high above the people on deck.',
      fact: 'The Titanic had four funnels, but the fourth one was a fake! It was added to make the ship look grander, and it was used for fresh air.',
      who: 'Engineers keep the engines and their exhaust pipes clean.' },
    { id: 'pool', emoji: '🏊', name: 'Pool Deck', short: 'Splash and slide!', anchor: [530, 108],
      what: 'On the very top deck there are swimming pools, water slides and sun loungers.',
      does: 'People swim, slide, play games and relax in the sunshine while the ship sails across the sea.',
      fact: 'The biggest cruise ship in the world has seven swimming pools and six water slides!',
      who: 'Lifeguards, deck crew who set out the loungers, and cleaners.' },
    { id: 'lifeboats', emoji: '🛟', name: 'Lifeboats', short: 'Safety boats for everyone', anchor: [450, 318],
      what: 'The orange boats hanging along the side are lifeboats. They have roofs to keep people warm and dry.',
      does: 'If there is ever an emergency, they can be lowered into the sea with people inside. Everyone on board practises where to go in a safety drill at the start of every cruise.',
      fact: 'After the Titanic sank in 1912, new rules said every passenger ship must carry enough lifeboats for everyone on board.',
      who: 'Every crew member is trained to help, and some are lifeboat commanders.' },
    { id: 'cabins', emoji: '🛏️', name: 'Cabins', short: 'Bedrooms at sea', anchor: [600, 250],
      what: 'Cabins are the bedrooms on a ship. Each one has beds, a little bathroom, and often a window or a balcony looking out to sea.',
      does: 'Passengers sleep here while the ship sails through the night to the next port. The crew have their own cabins lower down in the ship.',
      fact: 'The biggest cruise ship can carry 7,600 passengers and 2,350 crew. That is almost 10,000 people, like a whole town at sea!',
      who: 'Cabin stewards clean the rooms and sometimes fold the towels into animal shapes!' },
    { id: 'restaurant', emoji: '🍽️', name: 'Restaurant', short: 'Dinner time on the waves', anchor: [430, 400],
      what: 'The big dining room is where passengers eat breakfast, lunch and dinner together.',
      does: 'Waiters carry plates from the kitchen to the tables. Big windows let people watch the sea while they eat.',
      fact: 'A big cruise ship serves thousands and thousands of meals every single day!',
      who: 'Waiters, head waiters, and helpers who clear the tables.' },
    { id: 'galley', emoji: '🧑‍🍳', name: 'Galley', short: 'The ship’s kitchen', anchor: [380, 478],
      what: 'On a ship, the kitchen is called the galley. It is huge, with lots of ovens, stoves and giant pots.',
      does: 'Chefs cook food all day and night. Pots and pans have rails around them so they do not slide off when the ship rocks on the waves.',
      fact: 'Food for the whole trip is loaded on before the ship leaves, so the store rooms are full of mountains of fruit, vegetables, flour and eggs!',
      who: 'Chefs, bakers, dishwashers and the people who look after the store rooms.' },
    { id: 'theatre', emoji: '🎭', name: 'Theatre', short: 'Shows at sea', anchor: [890, 430],
      what: 'Big cruise ships have a real theatre with a stage, lights, curtains and rows of seats.',
      does: 'Every evening there are shows with singing, dancing, magic and music. Watch the spotlight!',
      fact: 'Some ship theatres have more than a thousand seats, as big as a theatre in a city!',
      who: 'Singers, dancers, musicians, and technicians who work the lights and sound.' },
    { id: 'engine', emoji: '⚙️', name: 'Engine Room', short: 'The power of the ship', anchor: [400, 556],
      what: 'Deep down at the bottom of the ship is the engine room, with enormous engines.',
      does: 'The engines burn fuel to make electricity. The electricity turns the propellers and also powers all the lights, kitchens and pools. Watch the pistons go up and down!',
      fact: 'A big ship’s engine can be as long as a bus and as tall as a house!',
      who: 'Engineers and mechanics, who wear ear protectors because it is very loud.' },
    { id: 'water', emoji: '🚰', name: 'Water Maker', short: 'Turning sea water into drinking water', anchor: [640, 556],
      what: 'You cannot drink sea water because it is too salty. So the ship makes its own fresh water.',
      does: 'The water maker pushes sea water through very fine filters, or boils it into steam and cools it back down. The salt stays behind and clean water comes out.',
      fact: 'A cruise ship can make enough fresh water every day for thousands of people’s showers, drinks and cooking!',
      who: 'Engineers check the water is clean and safe to drink.' },
    { id: 'ballast', emoji: '💧', name: 'Ballast Tanks', short: 'Keeping the ship balanced', anchor: [820, 615],
      what: 'At the very bottom of the ship are big tanks that can be filled with sea water. They are called ballast tanks.',
      does: 'Pumps move water in and out, or from side to side. This keeps the ship upright and balanced, even when it is heavier on one side.',
      fact: 'Submarines use ballast tanks too! Filling them with water makes the submarine sink, and blowing the water out makes it float up again.',
      who: 'Engineers on the bridge and in the engine room control the pumps.' },
    { id: 'propeller', emoji: '🌀', name: 'Propeller', short: 'Pushing the ship along', anchor: [195, 612],
      what: 'The propeller is a big fan with twisted blades, under the back of the ship.',
      does: 'When it spins, its blades push water backwards, and that pushes the ship forwards. Spin it the other way and the ship goes backwards!',
      fact: 'A big ship’s propeller can be taller than a giraffe!',
      who: 'Divers and engineers check the propellers when the ship is in port.' },
    { id: 'rudder', emoji: '↩️', name: 'Rudder', short: 'How the ship turns', anchor: [142, 575],
      what: 'The rudder is a big flat board at the back of the ship, under the water, behind the propeller.',
      does: 'When it turns to one side, the water pushes on it and the back of the ship swings the other way, so the ship turns. It works like a fish’s tail!',
      fact: 'Big ships turn and stop very slowly. A huge ship can need more than a kilometre to stop!',
      who: 'The officer on the bridge steers, and machines move the rudder.' },
    { id: 'anchor', emoji: '⚓', name: 'Anchor', short: 'Holding the ship still', anchor: [1150, 452],
      what: 'The anchor is a huge heavy metal hook on a very long chain, kept at the front of the ship.',
      does: 'When the ship wants to stay in one place, the anchor drops to the sea floor. Its arms dig into the sand, and the heavy chain lying on the bottom helps hold the ship still.',
      fact: 'The anchor of a big cruise ship can weigh as much as two elephants!',
      who: 'Deck crew run the big machine that lets the chain out and pulls it back in.' },
    { id: 'thruster', emoji: '↔️', name: 'Bow Thruster', short: 'Moving sideways', anchor: [1084, 556],
      what: 'The round hole near the front is a tunnel that goes right through the ship, with a propeller inside.',
      does: 'It pushes water sideways, so the front of the ship can move left or right. This helps the ship squeeze into its place in the harbour, a bit like a crab walking sideways!',
      fact: 'With thrusters at the front and back, some big ships can park in a harbour without any help from tugboats!',
      who: 'The captain uses it carefully when the ship is arriving in port.' },
    { id: 'bulb', emoji: '🐬', name: 'Bulbous Bow', short: 'The secret bump', anchor: [1160, 600],
      what: 'Under the water at the front, many ships have a big round bump, a bit like a dolphin’s nose. It is called a bulbous bow.',
      does: 'It makes its own little wave that cancels out part of the big wave the ship pushes in front of it. So the ship slides through the water more easily.',
      fact: 'This clever bump helps big ships save a lot of fuel!',
      who: 'Ship designers test the shape with models in long water tanks.' },
    { id: 'hull', emoji: '🚢', name: 'Hull', short: 'Why does a heavy ship float?', anchor: [190, 488],
      what: 'The hull is the body of the ship, made of thick steel. The red part is under the water, and the circle mark shows how low the ship is allowed to sit.',
      does: 'A ship pushes lots of water out of the way, and the water pushes back up on it. Because the hull is full of air, it can float, even though steel is heavy!',
      fact: 'Long ago, a Greek scientist called Archimedes worked out how floating works. Legend says he shouted “Eureka!” in his bath!',
      who: 'Shipbuilders weld giant steel blocks together to build the hull.' }
  ];

  const path = (par, d, attrs) => el('path', Object.assign({ d }, attrs || {}), par);
  const rect = (par, x, y, w, h, fill, attrs) => el('rect', Object.assign({ x, y, width: w, height: h, fill }, attrs || {}), par);
  const circ = (par, cx, cy, r, fill, attrs) => el('circle', Object.assign({ cx, cy, r, fill }, attrs || {}), par);
  function person(par, x, y, body, hat) {
    rect(par, x - 4, y - 16, 8, 16, body, { rx: 3 });
    circ(par, x, y - 20, 4.5, '#F2C8A0');
    if (hat === 'chef') rect(par, x - 4.5, y - 31, 9, 7, '#FFFFFF', { rx: 2 });
    if (hat === 'cap') rect(par, x - 5, y - 26, 10, 3.5, '#1A237E', { rx: 1 });
  }
  const HULL = 'M118,358 L120,470 Q140,535 192,560 L232,600 Q252,632 300,640 L1040,640 Q1132,648 1172,622 Q1196,604 1176,584 Q1150,566 1122,562 L1146,470 Q1170,400 1200,350 Q660,372 118,358 Z';

  function build(world) {
    const P = id => g(world, id ? { 'data-part': id } : {});
    const d = ISO.defs();
    const clip = (id, shape) => { const c = el('clipPath', { id }, d); shape(c); return `url(#${id})`; };
    const hullClip = clip('hullClip', c => path(c, HULL));
    const below = clip('belowWL', c => rect(c, -100, 480, 1500, 400));
    const above = clip('aboveWL', c => rect(c, -100, -200, 1500, 680));
    const outside = clip('outsideCut', c => { rect(c, -1600, -200, 1848, 1100); rect(c, 1036, -200, 1900, 1100); });

    /* ---- sea, sea floor, fish ---- */
    const sea = g(world);
    rect(sea, -1500, 480, 4300, 340, 'url(#sSea)');
    path(sea, 'M-1500,744 L-60,742 Q200,728 420,744 T900,740 T1320,744 L2800,744 L2800,2400 L-1500,2400 Z', { fill: '#E8D3A2' });
    for (const [x, h] of [[30, 50], [60, 34], [480, 44], [905, 56], [940, 36], [1250, 46]]) path(sea, `M${x},744 q-8,-${h / 2} 0,-${h} q8,-${h / 2} 0,-${h * 0.2}`, { fill: 'none', stroke: '#43A047', 'stroke-width': 5, 'stroke-linecap': 'round', class: 'sway' });
    path(sea, 'M700,744 l4,-9 l4,9 l-9,-6 l10,0 Z', { fill: '#FF7043' });
    const fishes = [['#FFB300', 'M-60,700 L1330,700', '14s', '0s'], ['#29B6F6', 'M1330,676 L-60,676', '18s', '3s'], ['#EC407A', 'M-60,718 L1330,718', '22s', '8s']];
    fishes.forEach(([c, pd, dur, b]) => {
      const f = g(sea);
      const right = pd.startsWith('M-60');
      path(f, right ? 'M0,0 q10,-8 20,0 q-10,8 -20,0 Z M0,0 l-8,-6 l0,12 Z' : 'M0,0 q-10,-8 -20,0 q10,8 20,0 Z M0,0 l8,-6 l0,12 Z', { fill: c });
      el('animateMotion', { path: pd, dur, begin: b, repeatCount: 'indefinite' }, f);
    });
    // back waves
    const wv = g(sea, { class: 'waveslide' });
    let wd = 'M-1500,480'; for (let x = -1500; x < 2800; x += 40) wd += ` q10,-8 20,0 t20,0`;
    path(wv, wd + ' L2800,500 L-1500,500 Z', { fill: '#4FA8DB' });

    /* ---- hull outside ---- */
    const hu = P('hull');
    path(hu, HULL, { fill: '#B71C1C', 'clip-path': below });
    path(hu, HULL, { fill: '#1B3A5B', 'clip-path': above });
    g(hu, { 'clip-path': hullClip }).appendChild(el('rect', { x: 0, y: 473, width: 1300, height: 11, fill: '#ECEFF1' }));
    path(hu, HULL, { fill: 'none', stroke: '#0D1B2A', 'stroke-width': 3 });
    // portholes on the outside parts
    for (const x of [140, 170, 200, 1080, 1110]) circ(hu, x, 400, 6, '#B3E5FC', { stroke: '#ECEFF1', 'stroke-width': 2 });
    // Plimsoll mark
    circ(hu, 190, 500, 11, 'none', { stroke: '#FFFFFF', 'stroke-width': 2.5 });
    path(hu, 'M174,500 L206,500 M212,488 L212,512 M212,490 L224,490 M212,500 L224,500 M212,510 L224,510', { stroke: '#FFFFFF', 'stroke-width': 2.5 });

    // propeller shaft + propeller + rudder
    const pr = P('propeller');
    path(pr, 'M226,598 L195,612', { stroke: '#90A4AE', 'stroke-width': 7, 'stroke-linecap': 'round' });
    const prop = g(pr, { transform: 'translate(195,612)' });
    const spin = g(prop, { class: 'propspin' });
    for (const a of [0, 120, 240]) el('ellipse', { cx: 0, cy: -17, rx: 7, ry: 17, fill: '#D4A537', stroke: '#8D6E1F', 'stroke-width': 1.5, transform: `rotate(${a})` }, spin);
    circ(prop, 0, 0, 7, '#8D6E1F');
    const ru = P('rudder');
    path(ru, 'M150,548 L150,566', { stroke: '#5D4037', 'stroke-width': 6 });
    path(ru, 'M128,566 L162,566 L164,648 L134,652 Z', { fill: '#8E1B1B', stroke: '#4A0E0E', 'stroke-width': 2 });

    /* ---- bow features ---- */
    const bb = P('bulb');
    path(bb, 'M1068,640 Q1132,648 1172,622 Q1196,604 1176,584 Q1150,566 1122,562 L1112,604 Z', { fill: '#C62828', stroke: '#4A0E0E', 'stroke-width': 2 });
    el('ellipse', { cx: 1168, cy: 596, rx: 10, ry: 5, fill: '#FFFFFF', opacity: 0.3 }, bb);
    for (const y of [590, 610, 630]) path(bb, `M1210,${y} q20,-6 40,0`, { fill: 'none', stroke: '#E1F5FE', 'stroke-width': 3, 'stroke-linecap': 'round', 'stroke-dasharray': '6 10', class: 'stream' });
    const th = P('thruster');
    circ(th, 1084, 560, 21, '#263238', { stroke: '#90A4AE', 'stroke-width': 3 });
    const tf = g(th, { transform: 'translate(1084,560)' });
    const tsp = g(tf, { class: 'propspin fast' });
    for (const a of [0, 90, 180, 270]) el('ellipse', { cx: 0, cy: -9, rx: 4, ry: 9, fill: '#B0BEC5', transform: `rotate(${a})` }, tsp);
    const an = P('anchor');
    el('ellipse', { cx: 1150, cy: 420, rx: 10, ry: 7, fill: '#0D1B2A', stroke: '#90A4AE', 'stroke-width': 2 }, an);
    for (let i = 0; i < 4; i++) el('ellipse', { cx: 1151, cy: 428 + i * 7, rx: 3, ry: 4, fill: 'none', stroke: '#B0BEC5', 'stroke-width': 2 }, an);
    const A = [1152, 458];
    path(an, `M${A[0]},${A[1]} L${A[0]},${A[1] + 34} M${A[0] - 9},${A[1] + 8} L${A[0] + 9},${A[1] + 8} M${A[0] - 16},${A[1] + 24} Q${A[0] - 14},${A[1] + 38} ${A[0]},${A[1] + 36} Q${A[0] + 14},${A[1] + 38} ${A[0] + 16},${A[1] + 24}`, { fill: 'none', stroke: '#CFD8DC', 'stroke-width': 5, 'stroke-linecap': 'round' });
    circ(an, A[0], A[1] - 2, 4, 'none', { stroke: '#CFD8DC', 'stroke-width': 3 });

    /* ---- inside the hull (cutaway) ---- */
    const cutRect = clip('cutRect', c => rect(c, 244, 300, 796, 360));
    const inside = g(g(world, { 'clip-path': hullClip }), { 'clip-path': cutRect });
    rect(inside, 248, 362, 788, 280, '#F3EEE3');
    // ballast tanks
    const ba = g(inside, { 'data-part': 'ballast' });
    rect(ba, 248, 600, 788, 42, '#CFD8DC');
    const bw = g(ba, { class: 'slosh' });
    let bwd = 'M220,614'; for (let x = 220; x < 1080; x += 30) bwd += ' q7.5,-4 15,0 t15,0';
    path(bw, bwd + ' L1080,645 L220,645 Z', { fill: '#4FA8DB', opacity: 0.85 });
    for (const x of [400, 560, 720, 880]) rect(ba, x - 2, 600, 4, 40, '#78909C');
    // engine room
    const en = g(inside, { 'data-part': 'engine' });
    rect(en, 248, 520, 312, 80, '#E3E6E8');
    for (const [x, w] of [[282, 120], [418, 120]]) {
      rect(en, x, 548, w, 48, '#78909C', { rx: 4, stroke: '#455A64', 'stroke-width': 2 });
      for (let k = 0; k < 4; k++) { rect(en, x + 10 + k * 27, 532, 20, 18, '#90A4AE', { stroke: '#455A64', 'stroke-width': 1.5 }); rect(en, x + 14 + k * 27, 526, 12, 10, '#B0BEC5', { class: 'piston', style: `animation-delay:${(k * 0.15 + (x > 300 ? 0.07 : 0)).toFixed(2)}s` }); }
      rect(en, x + 8, 568, w - 16, 6, '#FFC107');
    }
    path(en, 'M248,588 L282,588', { stroke: '#90A4AE', 'stroke-width': 7 });
    person(en, 548, 596, '#1565C0');
    rect(en, 543, 573, 10, 3, '#FFEB3B');
    // water maker
    const wm = g(inside, { 'data-part': 'water' });
    rect(wm, 560, 520, 160, 80, '#E8F4FA');
    for (const x of [580, 625]) { rect(wm, x, 532, 32, 64, '#90CAF9', { rx: 14, stroke: '#1E88E5', 'stroke-width': 2 }); rect(wm, x + 6, 560, 20, 30, '#29B6F6', { rx: 8 }); }
    path(wm, 'M612,545 L625,545 M657,545 L690,545 L690,590', { stroke: '#78909C', 'stroke-width': 5, fill: 'none' });
    for (const [x, y, dl] of [[690, 560, 0], [690, 574, 0.6]]) path(wm, `M${x},${y} q-5,8 0,10 q5,-2 0,-10 Z`, { fill: '#29B6F6', class: 'drip', style: `animation-delay:${dl}s` });
    rect(wm, 664, 526, 46, 14, '#1565C0', { rx: 3 });
    const wt = el('text', { x: 687, y: 536, 'font-size': 9, 'font-weight': 800, fill: '#fff', 'text-anchor': 'middle', 'font-family': 'system-ui' }, wm); wt.textContent = 'H₂O';
    // store rooms
    const so = g(inside, { 'data-part': 'galley' });
    rect(so, 720, 520, 316, 80, '#EFE6D6');
    for (const [x, c] of [[740, '#C8A26B'], [775, '#B58B52'], [800, '#C8A26B'], [960, '#B58B52'], [990, '#C8A26B']]) rect(so, x, 572, 28, 26, c, { stroke: '#8D6E4A', 'stroke-width': 1.5 });
    for (const x of [850, 880, 910]) el('ellipse', { cx: x, cy: 584, rx: 12, ry: 14, fill: '#8D6E63', stroke: '#5D4037', 'stroke-width': 1.5 }, so);
    for (const [x, c] of [[742, '#FF7043'], [756, '#FFCA28'], [770, '#66BB6A']]) circ(so, x, 566, 6, c);
    // galley
    const ga = g(inside, { 'data-part': 'galley' });
    rect(ga, 248, 440, 272, 80, '#FFF8E1');
    for (let x = 252; x < 520; x += 16) for (let y = 444; y < 486; y += 16) rect(ga, x, y, 15, 15, (x + y) % 32 ? '#FFFDF5' : '#F5EFD9');
    rect(ga, 262, 494, 170, 24, '#546E7A', { rx: 3 });
    for (const x of [276, 326, 376]) { rect(ga, x, 480, 34, 16, '#B0BEC5', { rx: 3, stroke: '#78909C', 'stroke-width': 1.5 }); for (let k = 0; k < 2; k++) circ(ga, x + 17, 476, 6, '#FFFFFF', { class: 'wisp', style: `animation-delay:${(x / 100 + k * 1.1) % 2.4}s` }); }
    rect(ga, 260, 490, 174, 3, '#FFC107');
    rect(ga, 450, 488, 60, 30, '#CFD8DC', { stroke: '#90A4AE', 'stroke-width': 1.5 });
    person(ga, 440, 516, '#FFFFFF', 'chef'); person(ga, 490, 486, '#FFFFFF', 'chef');
    // crew cabins
    const cc = g(inside, { 'data-part': 'cabins' });
    rect(cc, 520, 440, 260, 80, '#EDE7F6');
    for (let x = 520; x < 780; x += 65) {
      rect(cc, x, 440, 3, 80, '#B39DDB');
      for (const y of [470, 502]) { rect(cc, x + 10, y, 46, 9, '#7E57C2', { rx: 2 }); rect(cc, x + 12, y - 4, 12, 5, '#FFFFFF', { rx: 2 }); }
      rect(cc, x + 54, 462, 3, 58, '#9575CD');
    }
    // restaurant
    const re = g(inside, { 'data-part': 'restaurant' });
    rect(re, 248, 362, 532, 78, '#FFF3E0');
    for (let x = 270; x < 770; x += 70) rect(re, x, 370, 44, 28, '#B3E5FC', { rx: 6, stroke: '#FFE0B2', 'stroke-width': 3 });
    for (const x of [300, 420, 540, 660]) {
      path(re, `M${x},362 L${x},374`, { stroke: '#BCAAA4', 'stroke-width': 1.5 });
      circ(re, x, 378, 6, '#FFD54F', { stroke: '#FFA000', 'stroke-width': 1.5 });
      rect(re, x - 28, 418, 56, 6, '#FFFFFF', { stroke: '#E0E0E0' });
      rect(re, x - 28, 424, 56, 10, '#FFFFFF', { opacity: 0.85 });
      path(re, `M${x},424 L${x},438`, { stroke: '#8D6E63', 'stroke-width': 3 });
      circ(re, x - 10, 414, 3.5, '#E53935'); circ(re, x + 12, 414, 3.5, '#43A047');
      person(re, x - 36, 438, ['#EF5350', '#AB47BC', '#42A5F5', '#26A69A'][(x / 120) % 4 | 0]);
      person(re, x + 36, 438, ['#FFA726', '#5C6BC0', '#EC407A', '#8D6E63'][(x / 120) % 4 | 0]);
    }
    person(re, 735, 438, '#212121');
    rect(re, 733, 410, 18, 3, '#ECEFF1');
    // theatre (two decks tall)
    const tht = g(inside, { 'data-part': 'theatre' });
    rect(tht, 780, 362, 256, 158, '#311B92');
    for (let i = 0; i < 6; i++) {
      const x = 790 + i * 30, y = 420 + i * 16;
      rect(tht, x, y, 30, 520 - y, '#4527A0');
      rect(tht, x + 4, y - 10, 18, 12, '#E53935', { rx: 3 });
      circ(tht, x + 13, y - 16, 4.5, ['#FFCC80', '#8D6E63', '#F2C8A0'][i % 3]);
    }
    rect(tht, 972, 470, 64, 50, '#6D4C41');
    rect(tht, 972, 466, 64, 6, '#8D6E63');
    path(tht, 'M972,368 Q990,420 976,470 L972,470 Z M1036,368 Q1014,420 1030,470 L1036,470 Z', { fill: '#C62828' });
    rect(tht, 968, 362, 72, 10, '#B71C1C');
    person(tht, 1004, 466, '#FFEB3B');
    path(tht, 'M830,372 L995,466 L1015,466 Z', { fill: '#FFF59D', opacity: 0.35, class: 'spot' });
    circ(tht, 830, 372, 5, '#FFF59D');
    // floors + cut edges
    const fl = g(inside);
    for (const [y, x0, x1] of [[600, 248, 1036], [520, 248, 1036], [440, 248, 780]]) { rect(fl, x0, y - 3, x1 - x0, 6, '#9EA7AD'); rect(fl, x0, y - 3, x1 - x0, 2, '#CFD8DC'); }
    rect(fl, 244, 360, 8, 290, 'url(#sCut)'); rect(fl, 1032, 360, 8, 290, 'url(#sCut)');
    rect(fl, 248, 630, 788, 12, 'url(#sCut)');

    /* ---- superstructure ---- */
    const su = g(world);
    // deck 3 promenade + lifeboats
    rect(su, 236, 284, 816, 8, '#ECEFF1', { stroke: '#90A4AE' });
    for (let x = 250; x < 1050; x += 100) rect(su, x, 292, 5, 68, '#CFD8DC');
    rect(su, 240, 334, 812, 3, '#90A4AE');
    for (let x = 250; x < 1050; x += 20) rect(su, x, 334, 2, 24, '#B0BEC5');
    const lb = P('lifeboats');
    for (const x of [290, 440, 590, 740]) {
      path(lb, `M${x + 10},292 L${x + 10},302 M${x + 100},292 L${x + 100},302`, { stroke: '#607D8B', 'stroke-width': 3 });
      path(lb, `M${x},318 Q${x + 4},342 ${x + 22},344 L${x + 92},344 Q${x + 108},342 ${x + 112},318 Z`, { fill: '#FF6D00', stroke: '#BF360C', 'stroke-width': 2 });
      path(lb, `M${x + 6},318 Q${x + 12},300 ${x + 40},300 L${x + 76},300 Q${x + 104},300 ${x + 108},318 Z`, { fill: '#FFF3E0', stroke: '#BF360C', 'stroke-width': 2 });
      for (let k = 0; k < 4; k++) rect(lb, x + 26 + k * 17, 306, 9, 7, '#4FC3F7', { rx: 2 });
    }
    // deck 4 cabins + lounge
    const cab = P('cabins');
    const cabinRow = (x0, x1, y0, h) => {
      const cols = ['#FFF9C4', '#E1F5FE', '#FCE4EC', '#E8F5E9', '#FFF3E0', '#EDE7F6'];
      let i = 0;
      for (let x = x0; x + 70 <= x1; x += 73, i++) {
        rect(cab, x, y0, 73, h, cols[i % cols.length], { stroke: '#B0BEC5', 'stroke-width': 1.5 });
        rect(cab, x + 8, y0 + h - 22, 44, 12, '#5C6BC0', { rx: 3 });
        rect(cab, x + 10, y0 + h - 27, 14, 7, '#FFFFFF', { rx: 3 });
        rect(cab, x + 56, y0 + 12, 10, h - 24, '#B3E5FC', { rx: 2 });
        circ(cab, x + 46, y0 + 14, 4, '#FFD54F');
        rect(cab, x + 6, y0 + h - 10, 50, 10, '#8D6E63', { opacity: 0.5 });
      }
    };
    rect(su, 248, 220, 796, 64, '#FAFAFA', { stroke: '#90A4AE', 'stroke-width': 2 });
    cabinRow(252, 920, 222, 62);
    const lo = g(su);
    rect(lo, 922, 222, 118, 62, '#E0F2F1');
    path(lo, 'M1040,222 L1052,284', { stroke: '#90A4AE', 'stroke-width': 2 });
    for (const x of [940, 980, 1015]) { circ(lo, x, 262, 9, '#66BB6A'); rect(lo, x - 5, 268, 10, 14, '#8D6E63'); }
    // deck 5 cabins + bridge
    rect(su, 284, 150, 806, 70, '#FAFAFA', { stroke: '#90A4AE', 'stroke-width': 2 });
    cabinRow(290, 885, 152, 66);
    const br = P('bridge');
    rect(br, 886, 152, 180, 66, '#E3F2FD');
    path(br, 'M1066,150 L1090,150 L1080,220 L1066,220 Z', { fill: '#90CAF9', stroke: '#1E88E5', 'stroke-width': 2 });
    rect(br, 900, 160, 160, 18, '#B3E5FC', { stroke: '#64B5F6' });
    rect(br, 960, 196, 70, 22, '#455A64', { rx: 3 });
    for (const [x, c] of [[968, '#00E676'], [982, '#FFEB3B'], [996, '#FF5252'], [1010, '#40C4FF']]) circ(br, x, 203, 3, c);
    rect(br, 965, 186, 60, 10, '#263238', { rx: 2 });
    circ(br, 945, 196, 10, 'none', { stroke: '#8D6E63', 'stroke-width': 3 });
    path(br, 'M935,196 L955,196 M945,186 L945,206', { stroke: '#8D6E63', 'stroke-width': 2 });
    person(br, 925, 218, '#FFFFFF', 'cap');
    person(br, 1045, 218, '#1A237E', 'cap');
    path(br, 'M1090,150 L1112,150 L1112,160 L1088,160 Z', { fill: '#ECEFF1', stroke: '#90A4AE' });
    // top deck floor
    rect(su, 280, 144, 820, 7, '#D7CCC8', { stroke: '#A1887F' });

    /* ---- radar mast, nav light ---- */
    const ra = P('radar');
    path(ra, 'M1000,144 L1004,70 L1012,70 L1016,144', { fill: '#ECEFF1', stroke: '#90A4AE', 'stroke-width': 2 });
    path(ra, 'M990,100 L1026,100', { stroke: '#90A4AE', 'stroke-width': 3 });
    circ(ra, 990, 100, 3.5, '#FFF59D');
    const rg = g(ra, { transform: 'translate(1008,66)' });
    const rs = g(rg, { class: 'spin' });
    rect(rs, -28, -4, 56, 7, '#ECEFF1', { rx: 3, stroke: '#78909C', 'stroke-width': 1.5 });
    circ(ra, 1110, 155, 5, '#00E676', { filter: 'url(#sGlow)' });

    /* ---- funnel + smoke ---- */
    const fu = P('funnel');
    path(fu, 'M270,144 L360,144 L352,44 L290,34 Z', { fill: '#E53935', stroke: '#8E1B1B', 'stroke-width': 2 });
    path(fu, 'M291,34 L352,44 L351,60 L289,52 Z', { fill: '#212121' });
    path(fu, 'M314,88 l5,11 l12,1 l-9,8 l3,12 l-11,-7 l-11,7 l3,-12 l-9,-8 l12,-1 Z', { fill: '#FFFFFF' });
    for (let k = 0; k < 4; k++) circ(fu, 320, 34, 10, '#ECEFF1', { class: 'smoke', style: `animation-delay:${k * 0.8}s` });

    /* ---- pool deck ---- */
    const po = P('pool');
    rect(po, 440, 112, 180, 32, '#29B6F6', { stroke: '#ECEFF1', 'stroke-width': 3, rx: 3 });
    const pw = g(po, { class: 'slosh' });
    let pwd = 'M430,116'; for (let x = 430; x < 640; x += 20) pwd += ' q5,-3 10,0 t10,0';
    path(pw, pwd, { fill: 'none', stroke: '#B3E5FC', 'stroke-width': 3 });
    for (const [x, c] of [[480, '#FFCC80'], [530, '#8D6E63'], [585, '#F2C8A0']]) { circ(po, x, 122, 5, c); rect(po, x - 8, 125, 16, 3, '#FFFFFF', { opacity: 0.6 }); }
    rect(po, 378, 64, 26, 80, '#FFCA28', { stroke: '#F57F17', 'stroke-width': 2 });
    path(po, 'M404,70 C460,64 470,96 430,100 C400,104 420,124 448,118', { fill: 'none', stroke: '#1E88E5', 'stroke-width': 10, 'stroke-linecap': 'round' });
    path(po, 'M404,70 C460,64 470,96 430,100 C400,104 420,124 448,118', { fill: 'none', stroke: '#64B5F6', 'stroke-width': 4, 'stroke-linecap': 'round', 'stroke-dasharray': '4 8', class: 'stream' });
    for (const x of [650, 700, 750]) { path(po, `M${x},140 L${x + 34},132`, { stroke: '#FFFFFF', 'stroke-width': 6, 'stroke-linecap': 'round' }); }
    for (const [x, c] of [[680, '#EF5350'], [800, '#42A5F5']]) { path(po, `M${x},144 L${x},108`, { stroke: '#8D6E63', 'stroke-width': 2 }); path(po, `M${x - 22},112 Q${x},92 ${x + 22},112 Z`, { fill: c }); }
    rect(su, 280, 136, 820, 3, '#B0BEC5');
    // stern flag
    const fg = g(world);
    path(fg, 'M126,358 L126,300', { stroke: '#90A4AE', 'stroke-width': 3 });
    path(fg, 'M126,302 q12,-4 24,2 q-10,6 -24,10 Z', { fill: '#1E88E5', class: 'flag' });

    /* ---- front waves on the outside parts, dolphin, seagulls ---- */
    const fw = g(world, { 'clip-path': outside });
    const fwg = g(fw, { class: 'waveslide back' });
    let fwd = 'M-1500,486'; for (let x = -1500; x < 2800; x += 40) fwd += ' q10,-9 20,0 t20,0';
    path(fwg, fwd + ' L2800,494 L-1500,494 Z', { fill: '#81D4FA', opacity: 0.8 });
    const dol = g(world);
    const dl = g(dol);
    path(dl, 'M-18,0 Q-6,-10 14,-4 Q20,-2 22,0 Q14,2 10,4 Q-4,8 -18,0 Z M-2,-6 l4,-8 l4,8 Z M-18,0 l-8,-6 l2,6 l-2,6 Z', { fill: '#78909C' });
    circ(dl, 15, -2, 1.5, '#000');
    el('animateMotion', { path: 'M1200,500 Q1236,420 1272,500', dur: '5s', repeatCount: 'indefinite', rotate: 'auto', keyPoints: '0;0;1;1', keyTimes: '0;0.5;0.8;1', calcMode: 'linear' }, dl);
    el('animate', { attributeName: 'opacity', values: '0;0;1;1;0;0', keyTimes: '0;0.49;0.5;0.79;0.8;1', dur: '5s', repeatCount: 'indefinite' }, dl);
    for (const [y, dur, b] of [[-10, '16s', '0s'], [20, '22s', '6s'], [-30, '19s', '11s']]) {
      const gu = g(world);
      path(gu, 'M-10,0 q5,-6 10,0 q5,-6 10,0', { fill: 'none', stroke: '#455A64', 'stroke-width': 2.5, 'stroke-linecap': 'round' });
      el('animateMotion', { path: `M1330,${y} L-80,${y + 20}`, dur, begin: b, repeatCount: 'indefinite' }, gu);
    }
    return {};
  }

  function defs(d) {
    const lg = (id, stops, x2, y2) => { const e = el('linearGradient', { id, x1: 0, y1: 0, x2: x2 || 0, y2: y2 == null ? 1 : y2 }, d); stops.forEach(([o, c]) => el('stop', { offset: o, 'stop-color': c }, e)); };
    lg('sSea', [[0, '#3D9BD1'], [0.6, '#1E6FA8'], [1, '#14527F']]);
    const p = el('pattern', { id: 'sCut', width: 8, height: 8, patternUnits: 'userSpaceOnUse', patternTransform: 'rotate(45)' }, d);
    el('rect', { width: 8, height: 8, fill: '#B0BEC5' }, p);
    el('rect', { width: 3, height: 8, fill: '#78909C' }, p);
    const f = el('filter', { id: 'sGlow', filterUnits: 'userSpaceOnUse', x: 900, y: 0, width: 400, height: 300 }, d);
    el('feGaussianBlur', { stdDeviation: 3, result: 'b' }, f);
    const m = el('feMerge', {}, f); el('feMergeNode', { in: 'b' }, m); el('feMergeNode', { in: 'SourceGraphic' }, m);
  }

  registerThing({
    id: 'ship', name: 'Ship', emoji: '🚢', color: '#29B6F6', color2: '#01579B',
    tagline: 'A floating town at sea',
    bg: 'linear-gradient(#81D4FA 0%, #B3E5FC 45%, #E1F5FE 58%, #B3E5FC 100%)',
    viewBox: { x: -40, y: -60, w: 1330, h: 840 },
    phoneZoom: 1.7,
    project: a => a,
    parts, defs, build
  });
})();
