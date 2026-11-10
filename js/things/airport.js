/* Peek Inside — The Airport */
(function () {
  const { P, el, g, poly, box, flat, faceY, faceX, line, cyl, shade, groundText, wallTextY } = ISO;

  /* ---------- Content: one entry per clickable part ---------- */
  const parts = [
    { id: 'runway', emoji: '🛣️', name: 'Runway', short: 'The super-long road for flying',
      anchor: [12, 3.75, 0],
      what: 'The runway is a very long, very strong road made just for airplanes. Planes speed along it to take off, and touch down on it when they land.',
      does: 'A plane needs lots of space to go fast enough to fly. The white stripes and numbers painted on it help pilots line up perfectly, even from high in the sky.',
      fact: 'The big numbers are a compass! "09" means the runway points East (90°) and "27" means it points West (270°). Just add a zero!',
      who: 'Pilots, and the airport team who sweep it clean and check it for stones every day.' },
    { id: 'takeoff', emoji: '🛫', name: 'Take-off!', short: 'How a plane leaves the ground',
      anchor: [33, 3.75, 0],
      what: 'Watch the orange plane! It rolls down the runway faster and faster until it lifts into the sky.',
      does: 'The jet engines push the plane forward. When it is going fast enough, air rushing over the wings pushes it up. The pilot gently pulls back and up it goes!',
      fact: 'A big passenger jet leaves the ground at about 280 km per hour. That is around 3 times faster than a car on the motorway!',
      who: 'The captain and the first officer (co-pilot) fly the plane together.' },
    { id: 'taxiway', emoji: '🟡', name: 'Taxiway', short: 'Roads for planes to drive on',
      anchor: [9, 8.25, 0],
      what: 'Taxiways are the roads that join the runway to the parking places. Planes drive slowly along them, like cars on a street.',
      does: 'Pilots follow the yellow line in the middle. At night, blue lights shine along the edges so pilots can see where to go.',
      fact: 'Most big planes cannot drive backwards by themselves! A small, super-strong tractor called a pushback tug pushes them out of their parking spot.',
      who: 'Pilots, and ground controllers who tell each plane which way to drive.' },
    { id: 'apron', emoji: '🅿️', name: 'Apron', short: 'The parking lot for planes',
      anchor: [33, 10.6, 0],
      what: 'The apron is the big area where planes park next to the terminal. It is also called "the ramp".',
      does: 'While a plane is parked, lots of jobs happen at once: bags go in, fuel goes in, food is loaded, and the cabin is cleaned. It is like a pit stop!',
      fact: 'A plane can arrive, unload, get ready and fly away again in less than an hour.',
      who: 'Ramp agents, marshallers who wave orange batons to guide planes, cleaners and caterers.' },
    { id: 'terminal', emoji: '🏢', name: 'Terminal', short: 'Where passengers start their trip',
      anchor: [16, 22, 3.2],
      what: 'The terminal is the big building where people arrive and leave. It has check-in desks, shops, cafés and waiting areas.',
      does: 'Passengers go through a set of steps before they can get on their plane:',
      steps: [['🧳', 'Check in & drop bags'], ['🛂', 'Show your passport'], ['🔍', 'Security check'], ['🛍️', 'Wait & explore'], ['🚪', 'Go to your gate'], ['✈️', 'Board the plane!']],
      fact: 'Some airports are so big that they have trains inside the terminal just to carry people between the gates!',
      who: 'Check-in staff, security officers, shop workers, cleaners and information desk helpers.' },
    { id: 'jetbridge', emoji: '🚪', name: 'Jet Bridge', short: 'A moving tunnel to the plane',
      anchor: [21.5, 18, 2.6],
      what: 'A jet bridge is a tunnel that reaches from the gate right up to the airplane door, so passengers can walk on board without going outside.',
      does: 'It sits on wheels and can stretch longer, swing left and right, and move up and down to fit planes of different sizes.',
      fact: 'The end of the jet bridge has a soft bumper so it can gently "hug" the side of the plane without scratching it.',
      who: 'A trained operator drives the jet bridge with a little control panel.' },
    { id: 'airplane', emoji: '✈️', name: 'Airplane', short: 'The flying machine itself',
      anchor: [21.5, 12.6, 1.6],
      what: 'An airplane is a flying machine. Its main parts are the body (fuselage), two wings, jet engines, and a tail.',
      does: 'The engines push it forward, the wings lift it up, and the tail keeps it steady and lets it turn. The pilots sit in the cockpit at the very front.',
      fact: 'The wings of a big jet bend up and down during the flight, like a bird’s wings. They are built to flex so they do not break!',
      who: 'Pilots fly it, cabin crew look after passengers, and engineers check it before every flight.' },
    { id: 'baggage', emoji: '🧳', name: 'Baggage Train', short: 'How your suitcase finds its plane',
      anchor: [18.8, 18.6, 0.8],
      what: 'This little yellow tractor pulls a train of carts full of suitcases between the terminal and the planes.',
      does: 'After check-in, your bag rides on conveyor belts through tunnels under the terminal. A sticker with a barcode tells machines which plane it belongs to.',
      fact: 'Big airports have many kilometres of conveyor belts hidden under the floor, like a giant roller coaster for suitcases!',
      who: 'Baggage handlers load the bags, and drivers pull the carts.' },
    { id: 'tower', emoji: '🗼', name: 'Control Tower', short: 'The airport’s eyes and voice',
      anchor: [36.5, 20.5, 11],
      what: 'The control tower is tall so the people inside can see the whole airport through its big glass windows.',
      does: 'Air traffic controllers talk to every pilot by radio. They decide who can use the runway, so planes always stay a safe distance apart. A pilot must hear "cleared for take-off" before going!',
      fact: 'If a plane’s radio breaks, controllers can still send messages with a special lamp that flashes green, red or white light!',
      who: 'Air traffic controllers. They train for years to do this important job.' },
    { id: 'radar', emoji: '📡', name: 'Radar', short: 'Seeing planes far away',
      anchor: [41.5, 18.5, 3],
      what: 'The radar is the spinning antenna. It helps controllers see where planes are, even when they are too far away or hidden in clouds.',
      does: 'It sends out invisible radio waves. When the waves hit a plane they bounce back, like an echo, and show up as a dot on a screen.',
      fact: 'Bats find their way in the dark with sound echoes. Radar uses the same echo idea, but with radio waves!',
      who: 'Air traffic controllers watch the radar screens, and technicians keep the radar working.' },
    { id: 'windsock', emoji: '🎏', name: 'Windsock', short: 'Which way is the wind blowing?',
      anchor: [24, 6.6, 2.4],
      what: 'The windsock is a big striped fabric tube on a pole. Pilots can see it from the air.',
      does: 'It points the way the wind is blowing. The stronger the wind, the straighter it sticks out. Planes like to take off and land facing into the wind, because it helps lift the wings.',
      fact: 'Even with fancy computers, every airport still uses windsocks because they work without electricity!',
      who: 'Pilots look at it, and the airport team checks it is in good shape.' },
    { id: 'lights', emoji: '💡', name: 'Approach Lights', short: 'Lights that lead the way',
      anchor: [1.6, 3.75, 0.4],
      what: 'These rows of lights stand before the start of the runway. They help pilots find the runway at night, in rain or in fog.',
      does: 'Some of the lights flash one after another, very fast, pointing straight at the runway, like an arrow made of light.',
      fact: 'Pilots call the running flashing lights "the rabbit", because they look like a little rabbit racing towards the runway!',
      who: 'Electricians check thousands of lights at the airport to make sure every one is working.' },
    { id: 'hangar', emoji: '🔧', name: 'Hangar', short: 'The giant garage for planes',
      anchor: [4.7, 13.2, 4.6],
      what: 'A hangar is an enormous garage with huge doors, big enough to fit a whole airplane inside.',
      does: 'Engineers check and fix planes here. They look at the engines, wheels, brakes and wings, and change parts before they wear out.',
      fact: 'Every few years, a big plane gets a "heavy check" where it is taken almost completely apart and put back together. It can take a month!',
      who: 'Aircraft engineers and mechanics.' },
    { id: 'fire', emoji: '🚒', name: 'Fire Station', short: 'Airport firefighters on standby',
      anchor: [39, 12.2, 2.2],
      what: 'Airports have their own fire station and special fire trucks, always ready in case something goes wrong.',
      does: 'Their trucks are bigger and faster than normal fire trucks and spray foam from a cannon on the roof. They practise every week.',
      fact: 'The firefighters must be able to reach the end of the runway in about 3 minutes or less!',
      who: 'Airport firefighters, who also help with rescues and first aid.' },
    { id: 'fuel', emoji: '⛽', name: 'Fuel Farm', short: 'Where the jet fuel is kept',
      anchor: [4.2, 21.2, 2],
      what: 'These big round tanks hold jet fuel, a special kind of fuel called kerosene. A fuel truck carries it to the planes.',
      does: 'The fuel is cleaned and tested, then pumped into the plane’s tanks, which are hidden inside the wings!',
      fact: 'A jumbo jet can hold more than 200,000 litres of fuel. That would fill about 4,000 car tanks!',
      who: 'Fuel truck drivers and fuel technicians.' },
    { id: 'bus', emoji: '🚌', name: 'Drop-off Road', short: 'Getting to the airport',
      anchor: [21, 26, 0.6],
      what: 'This road runs right in front of the terminal. Cars, taxis and buses stop here to drop people off or pick them up.',
      does: 'Passengers hop out with their bags and walk straight into the terminal to check in.',
      fact: 'A busy airport can have more people passing through in one day than live in a whole town!',
      who: 'Bus drivers, taxi drivers and traffic helpers.' },
    { id: 'carpark', emoji: '🚗', name: 'Car Park', short: 'Parking for cars',
      anchor: [14, 30.3, 2.3],
      what: 'The car park is a building with several floors where people leave their cars while they travel.',
      does: 'Cars drive up ramps to find a free space. Some car parks have little green and red lights above each space that show if it is empty.',
      fact: 'Some airport car parks have space for more than 10,000 cars!',
      who: 'Car park attendants and security staff.' },
    { id: 'train', emoji: '🚆', name: 'Train Station', short: 'Arriving by train',
      anchor: [28.5, 29.5, 1.9],
      what: 'Many airports have their own train station, so people can travel there without a car.',
      does: 'Trains bring passengers from the city right to the terminal. It is quick, and it is better for the air than lots of cars.',
      fact: 'Some airport trains have no driver at all. They are driven by computers!',
      who: 'Train drivers, station staff and engineers.' }
  ];

  /* ---------- Plane model ---------- */
  // dir 'y' = nose towards +y, 'x' = nose towards +x. Drawn around (cx, cy).
  function plane(parent, cx, cy, o) {
    const L = o.len || 6.6, SPN = o.span || 6.4, dir = o.dir || 'y', tail = o.tail || '#E53935', z0 = o.z0 == null ? 0.4 : o.z0;
    const W = 0.95, H = 0.95, zt = z0 + H;
    const M = (a, b, z) => (dir === 'y' ? [cx + b, cy + a, z] : [cx + a, cy + b, z]);
    const bx = (a0, b0, z, la, lb, h, col, op) => dir === 'y' ? box(parent, cx + b0, cy + a0, z, lb, la, h, col, op) : box(parent, cx + a0, cy + b0, z, la, lb, h, col, op);
    const pl = (list, fill, attrs) => poly(parent, list.map(p => M(...p)), fill, attrs);
    const st = { stroke: '#7d8794', 'stroke-width': 0.6, 'stroke-linejoin': 'round' };
    // ground shadow
    if (!o.noShadow) {
      pl([[L / 2, 0, 0], [0.4, SPN / 2, 0], [-0.8, SPN / 2, 0], [-L / 2, 0.5, 0], [-L / 2, -0.5, 0], [-0.8, -SPN / 2, 0], [0.4, -SPN / 2, 0]], 'rgba(0,0,0,0.16)');
    }
    // landing gear
    bx(1.9, -0.08, 0, 0.16, 0.16, z0, '#424242', { noStroke: true });
    bx(-0.6, -1.0, 0, 0.2, 0.2, z0 + 0.1, '#424242', { noStroke: true });
    bx(-0.6, 0.8, 0, 0.2, 0.2, z0 + 0.1, '#424242', { noStroke: true });
    // wings + engines
    const wz = z0 + 0.3;
    pl([[0.9, -W / 2, wz], [-0.5, -SPN / 2, wz], [-1.2, -SPN / 2, wz], [-0.9, -W / 2, wz]], '#DDE3EA', st);
    pl([[0.9, W / 2, wz], [-0.5, SPN / 2, wz], [-1.2, SPN / 2, wz], [-0.9, W / 2, wz]], '#DDE3EA', st);
    bx(0.3, -1.85, z0 - 0.1, 1.1, 0.5, 0.45, '#B0BEC5');
    bx(0.3, 1.35, z0 - 0.1, 1.1, 0.5, 0.45, '#B0BEC5');
    // tailplane
    pl([[-L / 2 + 1.1, -0.3, zt - 0.15], [-L / 2 + 0.2, -1.5, zt - 0.15], [-L / 2 - 0.1, -1.5, zt - 0.15], [-L / 2 + 0.1, -0.3, zt - 0.15]], '#DDE3EA', st);
    pl([[-L / 2 + 1.1, 0.3, zt - 0.15], [-L / 2 + 0.2, 1.5, zt - 0.15], [-L / 2 - 0.1, 1.5, zt - 0.15], [-L / 2 + 0.1, 0.3, zt - 0.15]], '#DDE3EA', st);
    // fuselage
    bx(-L / 2, -W / 2, z0, L - 1, W, H, '#F5F7FA', { top: '#FFFFFF', left: '#EEF1F5', right: '#D9DEE5' });
    // windows + stripe on the visible long side
    const side = dir === 'y' ? 'x' : 'y';
    for (let a = -L / 2 + 0.7; a < L / 2 - 1.4; a += 0.42) {
      const p0 = M(a, W / 2, z0 + 0.55), p1 = M(a + 0.2, W / 2, z0 + 0.55);
      if (side === 'x') { p0[0] = p1[0] = cx + W / 2; }
      line(parent, p0, p1, '#455A64', 2.2);
    }
    const s0 = M(-L / 2, W / 2, z0 + 0.25), s1 = M(L / 2 - 1, W / 2, z0 + 0.25);
    line(parent, s0, s1, tail, 1.6, { opacity: 0.9 });
    // nose
    const nf = L / 2 - 1, tip = [L / 2, 0, z0 + 0.4];
    pl([[nf, -W / 2, zt], [nf, W / 2, zt], tip], '#FFFFFF', st);
    pl([[nf, W / 2, z0], [nf, W / 2, zt], tip], '#E3E8EE', st);
    pl([[nf, -W / 2, z0], [nf, W / 2, z0], tip], '#D0D6DD', st);
    pl([[nf - 0.05, -0.32, zt - 0.02], [nf - 0.05, 0.32, zt - 0.02], [nf + 0.45, 0.2, zt - 0.2], [nf + 0.45, -0.2, zt - 0.2]], '#37474F');
    // tail fin
    pl([[-L / 2, 0, zt], [-L / 2 + 1.3, 0, zt], [-L / 2 + 0.15, 0, zt + 1.35], [-L / 2 - 0.35, 0, zt + 1.35]], tail, { stroke: shade(tail, -0.35), 'stroke-width': 0.7, 'stroke-linejoin': 'round' });
  }

  function tree(parent, x, y, s) {
    s = s || 1;
    const [sx, sy] = P(x, y, 0);
    el('ellipse', { cx: sx + 6 * s, cy: sy + 2, rx: 17 * s, ry: 8 * s, fill: 'rgba(0,0,0,0.13)' }, parent);
    box(parent, x - 0.1, y - 0.1, 0, 0.2, 0.2, 0.7 * s, '#7B5B43', { noStroke: true });
    const [tx, ty] = P(x, y, 1.25 * s);
    el('circle', { cx: tx, cy: ty, r: 15 * s, fill: 'url(#leaf)' }, parent);
    el('circle', { cx: tx - 4 * s, cy: ty - 5 * s, r: 6 * s, fill: '#A5D66B', opacity: 0.55 }, parent);
  }
  function car(parent, x, y, col, dir) {
    box(parent, x, y, 0.1, 1.3, 0.65, 0.35, col);
    box(parent, x + (dir > 0 ? 0.25 : 0.35), y + 0.07, 0.45, 0.7, 0.5, 0.3, '#CFE8FF', { left: '#90CAF9', right: '#64B5F6' });
  }

  /* ---------- Scene ---------- */
  function build(world) {
    const items = [];
    const add = (part, x0, y0, x1, y1, draw) => items.push({ part, x0, y0, x1, y1, draw });
    const layer = part => g(world, part ? { 'data-part': part } : {});
    const movers = {};

    // Island
    const isl = layer();
    box(isl, 0, 0, -1.4, 44, 34, 1.4, '#7CB342', { top: '#8BC34A', left: '#A1795C', right: '#7E5A41', stroke: '#6d4c3a' });
    for (let y = 1; y < 34; y += 4) flat(isl, 0, y, 44, 2, '#93C653', { opacity: 0.55 });
    // dirt layers on the island edge
    poly(isl, [[0, 34, -0.55], [44, 34, -0.55], [44, 34, -0.5], [0, 34, -0.5]], '#8D6650');
    poly(isl, [[44, 0, -0.55], [44, 34, -0.55], [44, 34, -0.5], [44, 0, -0.5]], '#6A4A36');

    // Runway
    const rw = layer('runway');
    flat(rw, 3, 2, 38, 3.5, '#4C525B', { stroke: '#3a3f46', 'stroke-width': 1 });
    flat(rw, 3, 2.15, 38, 0.12, '#fff'); flat(rw, 3, 5.23, 38, 0.12, '#fff');
    for (let x = 8.2; x < 36; x += 2) flat(rw, x, 3.69, 1.1, 0.12, '#fff');
    for (let i = 0; i < 6; i++) { flat(rw, 3.35, 2.45 + i * 0.5, 1.4, 0.26, '#fff'); flat(rw, 39.25, 2.45 + i * 0.5, 1.4, 0.26, '#fff'); }
    for (const x of [8.5, 33.5]) { flat(rw, x, 2.6, 1.6, 0.45, '#fff'); flat(rw, x, 4.45, 1.6, 0.45, '#fff'); }
    groundText(rw, 6.6, 3.75, '09', 1.5, '#fff', -90);
    groundText(rw, 37.4, 3.75, '27', 1.5, '#fff', -90);
    for (let x = 3.4; x <= 41; x += 2.5) for (const y of [2.05, 5.45]) { const [a, b] = P(x, y, 0.05); el('circle', { cx: a, cy: b, r: 1.8, fill: '#FFFDE7', class: 'twinkle', style: `animation-delay:${(x * 0.13) % 2}s` }, rw); }

    // Taxiway
    const tw = layer('taxiway');
    flat(tw, 4, 7.5, 36, 1.5, '#5B616A');
    for (const x of [6, 21, 37]) flat(tw, x, 5.5, 1.5, 2, '#5B616A');
    flat(tw, 4.3, 8.2, 35.4, 0.1, '#FFD54F');
    for (const x of [6.7, 21.7, 37.7]) flat(tw, x, 5.3, 0.1, 3, '#FFD54F');
    for (let x = 4.5; x < 40; x += 2.2) for (const y of [7.45, 9.05]) { const [a, b] = P(x, y, 0.05); el('circle', { cx: a, cy: b, r: 1.6, fill: '#42A5F5' }, tw); }

    // Apron + service road
    const ap = layer('apron');
    flat(ap, 9, 9, 25, 8.5, '#C9CED5');
    flat(ap, 7.5, 11, 1.5, 4.5, '#C9CED5');
    flat(ap, 9, 17.5, 25, 2.5, '#A4AAB2');
    for (let x = 9.5; x < 34; x += 1.4) flat(ap, x, 18.68, 0.7, 0.08, '#fff');
    for (const c of [14, 21.5, 29]) { flat(ap, c - 0.05, 9.2, 0.1, 7.6, '#FFD54F'); flat(ap, c - 0.6, 16.6, 1.2, 0.1, '#FFD54F'); }
    for (const c of [17.75, 25.25]) flat(ap, c - 0.04, 10, 0.08, 7, '#E57373', { opacity: 0.8 });

    // Landside
    const rd = layer('bus');
    flat(rd, 0, 24, 44, 1, '#E3E3E3');
    flat(rd, 0, 25, 44, 2.6, '#575D65');
    for (let x = 0.5; x < 44; x += 1.6) flat(rd, x, 26.25, 0.8, 0.1, '#fff');
    flat(rd, 0, 27.6, 44, 0.4, '#E3E3E3');
    for (let x = 18.5; x < 24; x += 0.6) flat(rd, x, 25.05, 0.3, 1.1, '#fff', { opacity: 0.7 });

    // Train tracks
    const tr = layer('train');
    flat(tr, 0, 32, 44, 1.4, '#A68B7C');
    for (let x = 0.2; x < 44; x += 0.55) flat(tr, x, 32.1, 0.22, 1.2, '#6D4C41');
    flat(tr, 0, 32.3, 44, 0.08, '#B0BEC5'); flat(tr, 0, 33.02, 44, 0.08, '#B0BEC5');

    // Ground pads
    const fp = layer('fuel'); flat(fp, 1, 18, 6.6, 6.6, '#D9CFC7', { stroke: '#bcaea3', 'stroke-width': 1 });
    const fd = layer('fire'); flat(fd, 38, 9, 2.2, 1.5, '#A4AAB2'); flat(fd, 36.5, 14, 5, 2, '#A4AAB2');
    const cp = layer('carpark'); flat(cp, 13, 27.6, 2, 0.9, '#575D65');

    // ---- 3D items ----
    // Approach lights (both ends)
    for (const [x0, x1] of [[0.4, 3], [41.2, 43.8]]) add('lights', x0, 3.4, x1, 4.1, gp => {
      const xs = []; for (let x = x0 + 0.2; x < x1; x += 0.5) xs.push(x);
      const order = x0 < 5 ? xs : xs.slice().reverse();
      xs.forEach(x => {
        box(gp, x - 0.06, 3.69, 0, 0.12, 0.12, 0.35, '#9E9E9E', { noStroke: true });
        const [a, b] = P(x, 3.75, 0.4);
        el('circle', { cx: a, cy: b, r: 3.2, fill: '#FFF59D', class: 'rabbit', style: `animation-delay:${order.indexOf(x) * 0.12}s` }, gp);
      });
      const mid = (x0 + x1) / 2;
      for (let y = 2.7; y <= 4.8; y += 0.35) { const [a, b] = P(mid, y, 0.3); el('circle', { cx: a, cy: b, r: 2, fill: '#FFFFFF' }, gp); }
    });

    // Take-off plane (animated), lives just in front of the runway in draw order
    add('takeoff', 0, 2, 44, 5.5, gp => {
      const sh = g(gp, { class: 'mover' }), pg = g(gp, { class: 'mover' });
      // shadow
      poly(sh, [[3, 0, 0], [0.4, 3, 0], [-0.8, 3, 0], [-3, 0.5, 0], [-3, -0.5, 0], [-0.8, -3, 0], [0.4, -3, 0]], 'rgba(0,0,0,0.18)');
      plane(pg, 0, 0, { dir: 'x', len: 6, span: 6, tail: '#FB8C00', noShadow: true });
      movers.takeoff = { sh, pg };
    });

    // Windsock
    add('windsock', 23.8, 6.4, 25.8, 6.8, gp => {
      box(gp, 23.95, 6.55, 0, 0.1, 0.1, 2.5, '#90A4AE', { noStroke: true });
      const sock = g(gp, { class: 'sock' });
      const cols = ['#FF6D00', '#FFFFFF', '#FF6D00', '#FFFFFF', '#FF6D00'];
      for (let i = 0; i < 5; i++) {
        const a = 24.05 + i * 0.34, b = a + 0.34, r0 = 0.34 - i * 0.04, r1 = r0 - 0.04, dz = i * 0.06;
        poly(sock, [[a, 6.6, 2.42 - dz + r0], [b, 6.6, 2.42 - dz - 0.06 + r1], [b, 6.6, 2.42 - dz - 0.06 - r1], [a, 6.6, 2.42 - dz - r0]], cols[i], { stroke: '#d84315', 'stroke-width': 0.5 });
      }
    });

    // Hangar (arched roof, door facing the apron)
    add('hangar', 2, 10.5, 7.5, 16, gp => {
      const x0 = 2, x1 = 7.5, y0 = 10.5, y1 = 16, wall = 1.3, rise = 2.3, N = 12;
      const Y = t => y0 + (y1 - y0) * (1 - Math.cos(t)) / 2, Z = t => wall + rise * Math.sin(t);
      faceY(gp, y1, x0, x1, 0, wall, '#B7C1CA', { stroke: '#6f7d89', 'stroke-width': 0.7 });
      for (let i = 0; i < N; i++) {
        const t0 = Math.PI * i / N, t1 = Math.PI * (i + 1) / N;
        const light = 0.12 - 0.3 * (i / N);
        poly(gp, [[x0, Y(t0), Z(t0)], [x1, Y(t0), Z(t0)], [x1, Y(t1), Z(t1)], [x0, Y(t1), Z(t1)]], shade('#B0BEC5', light), { stroke: shade('#B0BEC5', -0.25), 'stroke-width': 0.5 });
      }
      const front = [[x1, y0, 0]]; for (let i = 0; i <= N; i++) { const t = Math.PI * i / N; front.push([x1, Y(t), Z(t)]); } front.push([x1, y1, 0]);
      poly(gp, front, '#90A0AD', { stroke: '#5f6e7a', 'stroke-width': 0.8 });
      faceX(gp, x1, y0 + 0.6, y1 - 0.6, 0, 2.7, '#5E6C78');
      for (let y = y0 + 1.2; y < y1 - 0.6; y += 0.7) line(gp, [x1, y, 0], [x1, y, 2.7], '#7d8b97', 0.8);
      faceX(gp, x1, y0 + 2.3, y1 - 2.3, 0, 2.2, '#263238');
      // a plane nose peeking out
      const [a, b] = P(x1 + 0.3, 13.25, 0.9); el('ellipse', { cx: a, cy: b, rx: 9, ry: 7, fill: '#ECEFF1', stroke: '#90A4AE' }, gp);
    });

    // Parked planes + jet bridges
    const tails = ['#E53935', '#1E88E5', '#43A047'];
    [14, 21.5, 29].forEach((c, i) => {
      add('airplane', c - 3.2, 9.7, c + 3.2, 16.3, gp => plane(gp, c, 13, { dir: 'y', tail: tails[i] }));
      add('jetbridge', c - 0.7, 16.5, c + 0.7, 20, gp => {
        box(gp, c - 0.65, 16.5, 1.4, 1.3, 1.0, 1.15, '#90A4AE');
        box(gp, c - 0.12, 17.2, 0, 0.24, 0.24, 1.4, '#607D8B', { noStroke: true });
        box(gp, c - 0.45, 17.5, 1.55, 0.9, 2.5, 0.85, '#B0BEC5');
        for (let y = 17.8; y < 19.9; y += 0.5) faceX(gp, c + 0.45, y, y + 0.25, 1.85, 2.15, '#4FC3F7');
      });
    });

    // Baggage train
    add('baggage', 17.6, 18.1, 21.3, 19.1, gp => {
      const bags = ['#E91E63', '#3F51B5', '#FF9800', '#009688', '#9C27B0', '#795548'];
      box(gp, 17.6, 18.2, 0.05, 1.0, 0.8, 0.5, '#FDD835');
      box(gp, 17.65, 18.25, 0.55, 0.5, 0.7, 0.4, '#FFF59D', { left: '#81D4FA', right: '#4FC3F7' });
      for (let k = 0; k < 3; k++) {
        const x = 18.75 + k * 0.85;
        box(gp, x, 18.25, 0.15, 0.75, 0.7, 0.18, '#78909C');
        box(gp, x + 0.05, 18.3, 0.33, 0.32, 0.3, 0.3, bags[k * 2]);
        box(gp, x + 0.38, 18.6, 0.33, 0.3, 0.32, 0.36, bags[k * 2 + 1]);
      }
    });

    // Fuel truck
    add('fuel', 32.6, 12.4, 33.6, 15.9, gp => {
      box(gp, 32.65, 12.4, 0.15, 0.9, 2.5, 0.25, '#455A64');
      box(gp, 32.7, 12.5, 0.4, 0.8, 2.3, 0.75, '#ECEFF1');
      faceX(gp, 33.5, 12.6, 14.7, 0.6, 0.75, '#E53935');
      box(gp, 32.65, 15, 0.15, 0.9, 0.9, 0.95, '#FB8C00');
      faceY(gp, 15.9, 32.75, 33.45, 0.6, 0.95, '#81D4FA');
    });

    // Fuel farm tanks
    add('fuel', 1, 18, 7.6, 24.6, gp => {
      [[2.6, 19.6], [5.8, 19.6], [2.6, 22.9], [5.8, 22.9]].sort((a, b) => a[0] + a[1] - b[0] - b[1])
        .forEach(([x, y]) => cyl(gp, x, y, 0, 1.25, 1.7, '#F1F3F5', { band: '#E53935' }));
      box(gp, 7.2, 20.9, 0, 0.4, 0.3, 0.3, '#9E9E9E');
      line(gp, [7.6, 21.05, 0.15], [9, 21.05, 0.15], '#9E9E9E', 3);
    });
    add(null, 8.2, 22.1, 8.9, 22.9, gp => tree(gp, 8.55, 22.5, 0.9));

    // Terminal
    add('terminal', 10, 20, 33, 24, gp => {
      box(gp, 10, 20, 0, 23, 4, 2.6, '#EEF1F4', { top: '#F8FAFB', left: '#E3E8EC', right: '#C9D1D8' });
      faceY(gp, 24, 10.3, 32.7, 0.35, 2.15, 'url(#glass)');
      for (let x = 10.3; x <= 32.7; x += 0.9) line(gp, [x, 24, 0.35], [x, 24, 2.15], '#ffffff', 0.7, { opacity: 0.8 });
      line(gp, [10.3, 24, 1.25], [32.7, 24, 1.25], '#ffffff', 0.7, { opacity: 0.8 });
      for (const x of [13, 21.5, 30]) faceY(gp, 24, x - 0.7, x + 0.7, 0, 1.05, '#455A64');
      faceX(gp, 33, 20.3, 23.7, 0.35, 2.15, 'url(#glass)');
      // wavy canopy roof
      const RX0 = 9.6, RX1 = 33.4, RY0 = 19.6, RY1 = 24.6, N = 16;
      for (let i = 0; i < N; i++) {
        const xa = RX0 + (RX1 - RX0) * i / N, xb = RX0 + (RX1 - RX0) * (i + 1) / N;
        const za = 2.75 + 0.35 * Math.sin(i / N * Math.PI * 3), zb = 2.75 + 0.35 * Math.sin((i + 1) / N * Math.PI * 3);
        poly(gp, [[xa, RY0, za], [xb, RY0, zb], [xb, RY1, zb], [xa, RY1, za]], i % 2 ? '#8FCBEA' : '#9DD3EF', { stroke: '#6aa9c9', 'stroke-width': 0.5 });
        poly(gp, [[xa, RY1, za - 0.18], [xb, RY1, zb - 0.18], [xb, RY1, zb], [xa, RY1, za]], '#5B9BBE');
      }
      poly(gp, [[RX1, RY0, 2.75 + 0.35 * Math.sin(Math.PI * 3) - 0.18], [RX1, RY1, 2.75 - 0.18], [RX1, RY1, 2.75], [RX1, RY0, 2.75]], '#4C88A8');
      box(gp, 17.5, 23.3, 3.1, 8, 0.3, 0.85, '#1E88E5');
      wallTextY(gp, 21.5, 23.6, 3.52, '✈ AIRPORT', 0.6, '#fff');
    });

    // Bus stop
    add('bus', 20, 24.25, 22, 24.75, gp => {
      box(gp, 20, 24.3, 0, 0.08, 0.08, 1.0, '#607D8B', { noStroke: true });
      box(gp, 21.9, 24.3, 0, 0.08, 0.08, 1.0, '#607D8B', { noStroke: true });
      box(gp, 19.9, 24.25, 1.0, 2.2, 0.55, 0.1, '#26A69A');
      const [a, b] = P(19.6, 24.6, 1.5); el('circle', { cx: a, cy: b, r: 6, fill: '#FDD835', stroke: '#F9A825' }, gp);
    });

    // Road traffic layer (moving cars + bus)
    add('bus', 0, 25, 44, 27.6, gp => { movers.road = g(gp); });

    // Control tower
    add('tower', 35, 19, 38, 22, gp => {
      box(gp, 35, 19, 0, 3, 3, 1.4, '#CFD8DC');
      faceY(gp, 22, 35.4, 37.6, 0.4, 1.0, 'url(#glass)');
      box(gp, 36, 20, 1.4, 1, 1, 7.6, '#ECEFF1');
      for (let z = 3; z < 9; z += 1.4) faceY(gp, 21, 36.3, 36.7, z, z + 0.5, '#90CAF9');
      box(gp, 35.3, 19.3, 9, 2.4, 2.4, 0.3, '#546E7A');
      box(gp, 35.4, 19.4, 9.3, 2.2, 2.2, 1.15, '#4FC3F7', { top: '#B3E5FC', left: 'url(#glass)', right: '#29B6F6' });
      for (const x of [36.1, 36.8]) line(gp, [x, 21.6, 9.3], [x, 21.6, 10.45], '#E1F5FE', 0.7);
      line(gp, [37.6, 20.1, 9.3], [37.6, 20.1, 10.45], '#E1F5FE', 0.7); line(gp, [37.6, 20.8, 9.3], [37.6, 20.8, 10.45], '#E1F5FE', 0.7);
      box(gp, 35.2, 19.2, 10.45, 2.6, 2.6, 0.3, '#37474F');
      line(gp, [36.5, 20.5, 10.75], [36.5, 20.5, 12.2], '#455A64', 1.5);
      const [a, b] = P(36.5, 20.5, 12.25); el('circle', { cx: a, cy: b, r: 3, fill: '#FF1744', class: 'blink' }, gp);
    });

    // Radar
    add('radar', 41, 18, 42, 19, gp => {
      box(gp, 41, 18, 0, 1, 1, 0.5, '#90A4AE');
      box(gp, 41.38, 18.38, 0.5, 0.24, 0.24, 1.9, '#B0BEC5');
      const [a, b] = P(41.5, 18.5, 2.55);
      const dish = g(gp, { transform: `translate(${a},${b})` });
      const spin = g(dish, { class: 'spin' });
      el('path', { d: 'M-24,-4 Q0,10 24,-4 L24,2 Q0,16 -24,2 Z', fill: '#ECEFF1', stroke: '#78909C', 'stroke-width': 1 }, spin);
      el('rect', { x: -2, y: -2, width: 4, height: 10, fill: '#78909C' }, spin);
    });

    // Fire station + truck
    add('fire', 36.5, 10.5, 41.5, 14, gp => {
      box(gp, 36.5, 10.5, 0, 5, 3.5, 2, '#E53935');
      for (const x of [36.9, 38.5, 40.1]) {
        faceY(gp, 14, x, x + 1.2, 0, 1.4, '#FFEBEE', { stroke: '#b71c1c', 'stroke-width': 0.6 });
        for (let z = 0.35; z < 1.4; z += 0.35) line(gp, [x, 14, z], [x + 1.2, 14, z], '#ef9a9a', 0.6);
      }
      faceY(gp, 14, 36.5, 41.5, 1.6, 1.75, '#FFFFFF');
      faceX(gp, 41.5, 11, 13.5, 0.6, 1.4, '#FFCDD2');
      box(gp, 38.6, 11.6, 2, 0.8, 0.8, 0.5, '#B71C1C');
      const [a, b] = P(39, 12, 2.6); el('circle', { cx: a, cy: b, r: 3, fill: '#2979FF', class: 'blink' }, gp);
    });
    add('fire', 37.2, 14.4, 40.9, 15.5, gp => {
      box(gp, 37.25, 14.45, 0.15, 2.8, 1.0, 0.85, '#D32F2F');
      box(gp, 40.05, 14.45, 0.1, 0.8, 1.0, 1.1, '#E53935');
      faceX(gp, 40.85, 14.6, 15.3, 0.6, 1.0, '#81D4FA');
      for (let x = 37.5; x < 40; x += 0.4) line(gp, [x, 14.65, 1.05], [x, 15.25, 1.05], '#CFD8DC', 1);
      line(gp, [37.4, 14.65, 1.05], [40, 14.65, 1.05], '#ECEFF1', 1.2); line(gp, [37.4, 15.25, 1.05], [40, 15.25, 1.05], '#ECEFF1', 1.2);
      const [a, b] = P(40.4, 14.95, 1.25); el('circle', { cx: a, cy: b, r: 2.4, fill: '#2979FF', class: 'blink' }, gp);
      faceY(gp, 15.45, 37.25, 40.05, 0.35, 0.45, '#FFEB3B');
    });

    // Car park
    add('carpark', 9, 28.5, 19, 32, gp => {
      box(gp, 9, 28.5, 0, 10, 3.5, 1.9, '#B8C2CB', { top: '#7C858E' });
      for (const z of [0.25, 1.15]) { faceY(gp, 32, 9.3, 18.7, z, z + 0.5, '#37474F'); faceX(gp, 19, 28.8, 31.7, z, z + 0.5, '#2E3B42'); }
      for (let x = 9.4; x < 18.8; x += 0.9) { flat(gp, x, 28.7, 0.05, 1.2, '#fff', null, 1.9); flat(gp, x, 30.8, 0.05, 1.2, '#fff', null, 1.9); }
      const cols = ['#E53935', '#1E88E5', '#FDD835', '#43A047', '#8E24AA', '#FB8C00', '#ECEFF1', '#00ACC1'];
      [9.5, 11.3, 12.2, 14.9, 16.7].forEach((x, i) => { box(gp, x, 28.85, 1.95, 0.6, 1.0, 0.3, cols[i]); });
      [10.4, 13.1, 14, 17.6].forEach((x, i) => { box(gp, x, 30.95, 1.95, 0.6, 1.0, 0.3, cols[i + 4]); });
      box(gp, 9.3, 31.6, 1.9, 0.9, 0.2, 1.1, '#1565C0');
      wallTextY(gp, 9.75, 31.8, 2.45, 'P', 0.8, '#fff');
    });

    // Train station
    add('train', 23, 28.5, 34, 31.9, gp => {
      box(gp, 24, 28.5, 0, 9, 2, 1.6, '#FFE0B2', { top: '#BF6F4A' });
      for (let x = 24.4; x < 32.8; x += 1.1) faceY(gp, 30.5, x, x + 0.6, 0.4, 1.2, '#81D4FA');
      faceY(gp, 30.5, 27.9, 29.1, 0, 1.2, '#5D4037');
      box(gp, 23, 30.6, 0, 11, 1.25, 0.25, '#BDBDBD');
      faceY(gp, 31.85, 23, 34, 0.18, 0.25, '#FDD835');
      for (const x of [23.6, 28.4, 33.2]) box(gp, x, 31.4, 0.25, 0.12, 0.12, 1.5, '#6D4C41', { noStroke: true });
      box(gp, 23.4, 30.6, 1.75, 10.2, 1.3, 0.14, '#A1887F');
      wallTextY(gp, 28.5, 30.5, 1.42, '🚆 TRAINS', 0.32, '#5D4037');
    });

    // Train layer
    add('train', 0, 32, 44, 33.4, gp => { movers.train = g(gp); });

    // Trees
    const T = [[1.4, 7], [1.5, 9.8], [43, 7.5], [43.1, 10.5], [42.9, 13.5], [43, 22.5], [42.6, 25], [39.5, 23.5],
      [1.8, 27.9], [4, 28.7], [6.3, 28], [2.8, 30.8], [5.4, 31.1], [7.6, 30.3],
      [35.6, 28.3], [38.3, 28.9], [41, 28.2], [42.6, 30.6], [37.3, 31], [40, 31.3], [20.6, 29.2], [21.8, 31], [12.4, 17.2]];
    T.forEach(([x, y]) => add(null, x - 0.5, y - 0.5, x + 0.5, y + 0.5, gp => tree(gp, x, y)));

    ISO.depthSort(items).forEach(it => it.draw(layer(it.part)));

    // Moving things
    const road = movers.road, train = movers.train;
    const vehicles = [
      { y: 25.3, dir: 1, speed: 2.4, x: 3, col: '#E53935' },
      { y: 25.3, dir: 1, speed: 2.4, x: 18, col: '#1E88E5' },
      { y: 26.5, dir: -1, speed: 2.1, x: 30, col: '#FDD835' },
      { y: 26.5, dir: -1, speed: 2.1, x: 9, col: '#8E24AA' },
      { y: 25.25, dir: 1, speed: 1.5, x: 33, bus: true }
    ];
    vehicles.forEach(v => {
      v.g = g(road);
      if (v.bus) {
        box(v.g, 0, 0, 0.1, 3, 0.75, 1.0, '#FFB300');
        for (let x = 0.2; x < 2.7; x += 0.55) faceY(v.g, 0.75, x, x + 0.4, 0.55, 0.9, '#81D4FA');
        faceX(v.g, 3, 0.1, 0.65, 0.5, 0.95, '#81D4FA');
      } else car(v.g, 0, 0, v.col, v.dir);
    });
    for (let i = 0; i < 3; i++) {
      const x = i * 3.25;
      box(train, x, 32.15, 0.18, 3.1, 1.05, 1.15, i === 2 ? '#00897B' : '#26A69A', { top: '#E0F2F1' });
      for (let w = x + 0.25; w < x + 2.9; w += 0.6) faceY(train, 33.2, w, w + 0.4, 0.6, 1.0, '#B3E5FC');
      faceY(train, 33.2, x, x + 3.1, 0.3, 0.4, '#FDD835');
    }
    faceX(train, 9.75 - 0.1, 32.3, 33.05, 0.55, 1.05, '#263238');

    const TRAIN_LEN = 9.75;
    function tick(tSec) {
      // take-off cycle (16 s)
      const t = tSec % 16; let x, z, op;
      if (t < 1) { x = 6; z = 0; op = t; }
      else if (t < 7) { const s = t - 1; x = 6 + 0.555 * s * s; z = 0; op = 1; }
      else if (t < 12) { const s = t - 7; x = 26 + 6.67 * s; z = 0.45 * s * s; op = Math.max(0, Math.min(1, (52 - x) / 6)); }
      else { x = 6; z = 0; op = 0; }
      const [a, b] = P(x, 3.75, z), [c, d] = P(x, 3.75, 0);
      movers.takeoff.pg.setAttribute('transform', `translate(${a.toFixed(1)},${(b + (z > 0 ? 0 : 0)).toFixed(1)})`);
      movers.takeoff.pg.setAttribute('opacity', op.toFixed(2));
      movers.takeoff.sh.setAttribute('transform', `translate(${c.toFixed(1)},${d.toFixed(1)}) scale(${Math.max(0.3, 1 - z / 14).toFixed(2)})`);
      movers.takeoff.sh.setAttribute('opacity', (op * Math.max(0, 1 - z / 10)).toFixed(2));
      // cars
      vehicles.forEach(v => {
        const span = 50, len = v.bus ? 3 : 1.3;
        let px = ((v.x + v.dir * v.speed * tSec) % span + span) % span - 3;
        const [a2, b2] = P(px, v.y, 0), [o0, o1] = P(0, 0, 0);
        v.g.setAttribute('transform', `translate(${(a2 - o0).toFixed(1)},${(b2 - o1).toFixed(1)})`);
        const fade = Math.max(0, Math.min(1, px / 1.2, (44 - len - px) / 1.2));
        v.g.setAttribute('opacity', fade.toFixed(2));
      });
      // train: 20 s cycle, stops at the station
      const tt = tSec % 20; let tx;
      if (tt < 5) tx = -12 + (24 - -12) * (1 - Math.pow(1 - tt / 5, 2));
      else if (tt < 9) tx = 24;
      else if (tt < 14) tx = 24 + 30 * Math.pow((tt - 9) / 5, 2);
      else tx = 60;
      const [a3, b3] = P(tx, 0, 0), [q0, q1] = P(0, 0, 0);
      train.setAttribute('transform', `translate(${(a3 - q0).toFixed(1)},${(b3 - q1).toFixed(1)})`);
      train.setAttribute('opacity', Math.max(0, Math.min(1, (tx + 2) / 2, (44 - TRAIN_LEN - tx) / 2 + 1)).toFixed(2));
    }
    return { tick };
  }

  function defs(d) {
    const lg = el('linearGradient', { id: 'glass', x1: 0, y1: 0, x2: 0, y2: 1 }, d);
    el('stop', { offset: 0, 'stop-color': '#B3E5FC' }, lg);
    el('stop', { offset: 1, 'stop-color': '#4FA8D8' }, lg);
    const rg = el('radialGradient', { id: 'leaf', cx: 0.35, cy: 0.35, r: 0.75 }, d);
    el('stop', { offset: 0, 'stop-color': '#8BC34A' }, rg);
    el('stop', { offset: 1, 'stop-color': '#2E7D32' }, rg);
  }

  registerThing({
    id: 'airport', name: 'Airport', emoji: '✈️', color: '#29B6F6', color2: '#0277BD',
    tagline: 'Where planes take off and land',
    viewBox: { x: -640, y: -60, w: 1440, h: 920 },
    phoneZoom: 1.7,
    parts, defs, build
  });
})();
