/* Peek Inside — The Human Body (cartoon x-ray kid) */
(function () {
  const { el, g } = ISO;

  const parts = [
    { id: 'brain', emoji: '🧠', name: 'Brain', short: 'The boss of your body', anchor: [0, 80],
      what: 'Your brain lives inside your head, safe behind the hard bones of your skull. It is soft and wrinkly, a bit like a big walnut.',
      does: 'Your brain is the boss! It lets you think, remember, dream and feel happy or sad. It also controls your body all the time, even your breathing and your heartbeat while you sleep.',
      fact: 'Your brain has about 86 billion tiny nerve cells. That is more than ten times the number of people on Earth!',
      who: 'Sleep well, wear a helmet when you ride your bike, and keep learning new things.' },
    { id: 'eyes', emoji: '👀', name: 'Eyes', short: 'Your cameras', anchor: [52, 196],
      what: 'Your eyes are two balls, each about the size of a big grape. The coloured ring is called the iris, and the black dot in the middle is the pupil.',
      does: 'Light goes in through the pupil. A clear lens bends the light to make a picture at the back of your eye. Then a nerve sends the picture to your brain.',
      fact: 'The picture at the back of your eye is actually upside down! Your brain turns it the right way up for you.',
      who: 'Never look straight at the Sun, take breaks from screens, and play outside.' },
    { id: 'ears', emoji: '👂', name: 'Ears', short: 'For hearing and balance', anchor: [-152, 204],
      what: 'The part you can see is only the outside of your ear. Deep inside your head there are tiny bones and a curly tube shaped like a snail shell.',
      does: 'Sounds are wiggles in the air. They make your eardrum shake, then three tiny bones pass the shake to the snail shell, which sends a message to your brain. Your ears also help you keep your balance!',
      fact: 'The smallest bone in your whole body is inside your ear. It is called the stirrup, and it is smaller than a grain of rice.',
      who: 'Keep loud music turned down, and never put things inside your ears.' },
    { id: 'nose', emoji: '👃', name: 'Nose', short: 'Smelling and cleaning the air', anchor: [0, 250],
      what: 'Your nose has two holes called nostrils. Inside, there are little hairs and sticky mucus.',
      does: 'Your nose smells things, and it also cleans, warms and wets the air before it goes to your lungs. The hairs and mucus catch dust. That is what bogeys are made of!',
      fact: 'Smell and taste work together. Hold your nose while you eat an apple, and it will taste much less appley!',
      who: 'Blow your nose into a tissue and wash your hands afterwards.' },
    { id: 'mouth', emoji: '🦷', name: 'Mouth & Teeth', short: 'Where eating begins', anchor: [-32, 300],
      what: 'Your mouth has teeth for biting and chewing, a tongue for tasting and moving food, and spit, which is called saliva.',
      does: 'Your front teeth cut food and your back teeth grind it. Your saliva makes the food soft and starts breaking it down, and your tongue rolls it into a ball to swallow.',
      fact: 'Children have 20 baby teeth. Grown-ups have 32 teeth. Your tongue has thousands of taste buds for sweet, salty, sour, bitter and savoury!',
      who: 'Brush your teeth twice a day for two minutes, and do not have too many sweets.' },
    { id: 'lungs', emoji: '🫁', name: 'Lungs', short: 'Your breathing balloons', anchor: [-90, 470],
      what: 'You have two lungs in your chest, protected by your ribs. They are soft and spongy, like pink sponges.',
      does: 'When you breathe in, your lungs fill with air. They take a gas called oxygen out of the air and put it into your blood. When you breathe out, they get rid of a gas your body does not need.',
      steps: [['👃', 'Breathe in'], ['🌬️', 'Down the windpipe'], ['🫁', 'Into the lungs'], ['🫧', 'Oxygen goes into the blood'], ['❤️', 'Heart sends it everywhere']],
      fact: 'Your left lung is a little smaller than your right lung, to make room for your heart!',
      who: 'Run and play to make your lungs strong, and stay away from smoke.' },
    { id: 'heart', emoji: '❤️', name: 'Heart', short: 'Your never-stopping pump', anchor: [30, 500],
      what: 'Your heart is a strong muscle in the middle of your chest. It is about the size of your fist.',
      does: 'It squeezes again and again to pump blood all around your body. Put your hand on your chest, or feel your wrist, and you can feel it beating: lub-dub, lub-dub!',
      fact: 'Your heart beats about 100,000 times every day, and it never takes a rest, even when you are asleep.',
      who: 'Being active, like running, swimming and dancing, keeps your heart healthy.' },
    { id: 'blood', emoji: '🩸', name: 'Blood Vessels', short: 'The body’s roads', anchor: [214, 600],
      what: 'Blood vessels are tubes that carry blood everywhere in your body, from your head to your toes.',
      does: 'Arteries carry blood full of oxygen away from your heart. Veins bring it back. Your blood also carries food, water and germ fighters wherever they are needed.',
      fact: 'If you laid all your blood vessels end to end, they would go around the whole Earth more than twice!',
      who: 'Drink water, eat fruit and vegetables, and keep moving.' },
    { id: 'stomach', emoji: '🥣', name: 'Stomach', short: 'Your food mixer', anchor: [90, 645],
      what: 'Your stomach is a stretchy bag at the end of your food pipe. It gets bigger when you eat a big meal.',
      does: 'Its strong walls squeeze and mix the food with special juices until it becomes a thick soup. This takes a few hours. Here is the journey your food takes:',
      steps: [['👄', 'Chew in your mouth'], ['🛝', 'Slide down the food pipe'], ['🥣', 'Mash in the stomach'], ['🌀', 'Goodness soaks into the blood'], ['💧', 'Water is taken out'], ['🚽', 'Out it goes!']],
      fact: 'Watch the little bite of food slide down the food pipe! Your stomach juice is so strong that your stomach makes a fresh slimy lining all the time to protect itself.',
      who: 'Chew your food slowly, and stop eating when you feel full.' },
    { id: 'liver', emoji: '🟤', name: 'Liver', short: 'The cleaning factory', anchor: [-80, 640],
      what: 'Your liver is a big, dark red organ under your right ribs. It is the heaviest organ inside your body.',
      does: 'It cleans your blood by removing things that could harm you. It stores energy for later and makes a green juice called bile that helps break down fat.',
      fact: 'Your liver can grow back! If a part of it is taken away, it can grow again.',
      who: 'Healthy food and lots of water make your liver’s job easier.' },
    { id: 'smallint', emoji: '🌀', name: 'Small Intestine', short: 'Where the goodness goes in', anchor: [35, 742],
      what: 'The small intestine is a very long, thin tube, folded up in your tummy like a pile of spaghetti.',
      does: 'It finishes breaking down your food. Then all the goodness, like vitamins and energy, passes through its walls into your blood, which carries it around your body.',
      fact: 'In a grown-up it is about 6 metres long, longer than a car! Inside, it is covered in millions of tiny fingers that soak up the food.',
      who: 'Fruit, vegetables and wholegrain bread keep your insides moving.' },
    { id: 'largeint', emoji: '💧', name: 'Large Intestine', short: 'The water saver', anchor: [-112, 772],
      what: 'The large intestine is a wide tube that goes up, across and down around your small intestine, like a picture frame.',
      does: 'It takes the water out of what is left of your food, so your body can use it. What is left over becomes poo.',
      fact: 'Trillions of tiny friendly bacteria live in your large intestine. They help you digest food and stay healthy!',
      who: 'Drink water, eat fibre (like fruit and veg), and go to the toilet when you need to.' },
    { id: 'kidneys', emoji: '🫘', name: 'Kidneys', short: 'Your blood filters', anchor: [138, 745],
      what: 'You have two kidneys near your back, one on each side. They are shaped like beans and are about the size of your fist.',
      does: 'They filter your blood to clean out waste and extra water. The waste and water become wee, which flows down two thin tubes to your bladder.',
      fact: 'A grown-up’s kidneys filter about 180 litres of blood every day. That is about a whole bathtub full!',
      who: 'Drinking enough water helps your kidneys do their job.' },
    { id: 'bladder', emoji: '🎈', name: 'Bladder', short: 'The stretchy wee bag', anchor: [0, 812],
      what: 'Your bladder is a stretchy bag at the bottom of your tummy, a bit like a balloon.',
      does: 'It stores your wee until you are ready to go to the toilet. When it gets full, it sends a message to your brain: time to go!',
      fact: 'An empty bladder is small and wrinkly, but it stretches like a balloon as it fills up.',
      who: 'Go to the toilet when you need to, and drink water during the day.' },
    { id: 'bones', emoji: '🦴', name: 'Bones', short: 'Your skeleton', anchor: [-78, 1060],
      what: 'Bones are hard and strong. All your bones together make your skeleton. This leg is shown with x-ray vision!',
      does: 'Your skeleton holds you up and gives your body its shape. It protects soft parts, like your ribs protecting your heart and lungs. Inside some bones, new blood is made.',
      fact: 'Babies are born with about 300 bones, but grown-ups have 206, because some bones join together as you grow. The longest one is your thigh bone.',
      who: 'Milk, cheese, yoghurt and jumping games help build strong bones.' },
    { id: 'muscles', emoji: '💪', name: 'Muscles', short: 'They make you move', anchor: [-182, 500],
      what: 'Muscles are stretchy bundles under your skin, attached to your bones. You have more than 600 of them!',
      does: 'Muscles can only pull, not push. So they work in pairs: one pulls your arm up, and another one pulls it back down. Some muscles, like your heart, work all by themselves.',
      fact: 'When you smile, you use lots of little muscles in your face. Smiling is good exercise!',
      who: 'Climbing, swimming, cycling and playing make your muscles stronger.' },
    { id: 'nerves', emoji: '⚡', name: 'Nerves', short: 'The body’s messengers', anchor: [80, 1060],
      what: 'Nerves are like long, thin wires that go everywhere in your body. The biggest one runs down the middle of your back, called the spinal cord.',
      does: 'They carry messages between your brain and your body. If you touch something hot, a message zooms to your brain, and another one zooms back to move your hand away!',
      fact: 'Some nerve messages travel faster than a racing car, more than 400 kilometres per hour!',
      who: 'Sleep and rest help your brain and nerves recharge.' },
    { id: 'skin', emoji: '🖐️', name: 'Skin', short: 'Your body’s raincoat', anchor: [-238, 800],
      what: 'Your skin covers your whole body. It is your largest organ!',
      does: 'It keeps germs and water out, and helps you feel touch, hot and cold. When you get too warm, it makes sweat to cool you down.',
      fact: 'Look at your fingertips: the swirly lines are your fingerprints. Nobody else in the world has the same ones, not even twins!',
      who: 'Wash your hands, use sun cream in the sun, and keep cuts clean.' }
  ];

  const SKIN = '#F6C59E', LINE = '#C98A61';

  function defs(d) {
    const lg = (id, stops, x2 = 0, y2 = 1) => { const e = el('linearGradient', { id, x1: 0, y1: 0, x2, y2 }, d); stops.forEach(([o, c]) => el('stop', { offset: o, 'stop-color': c }, e)); };
    const rg = (id, stops, cx = 0.35, cy = 0.3, r = 0.8) => { const e = el('radialGradient', { id, cx, cy, r }, d); stops.forEach(([o, c]) => el('stop', { offset: o, 'stop-color': c }, e)); };
    lg('skinG', [[0, '#FBD6B4'], [1, '#F0B88E']], 1, 0);
    rg('headG', [[0, '#FDDDBF'], [1, '#F0B88E']]);
    rg('brainG', [[0, '#FBD3E0'], [1, '#E98BAE']]);
    rg('lungG', [[0, '#FFC9D2'], [1, '#EE8597']]);
    rg('heartG', [[0, '#FF6F6F'], [1, '#C41E2E']]);
    rg('liverG', [[0, '#C4625A'], [1, '#7E2B27']]);
    rg('stomachG', [[0, '#FFC6A8'], [1, '#E8907A']]);
    rg('kidneyG', [[0, '#D9707A'], [1, '#93303D']]);
    rg('bladderG', [[0, '#FFF59D'], [1, '#F2C94C']]);
    lg('shortsG', [[0, '#5AB2F7'], [1, '#1E7BD6']]);
    lg('xrayG', [[0, '#25365A'], [1, '#162238']]);
    const pat = el('pattern', { id: 'striate', width: 6, height: 6, patternUnits: 'userSpaceOnUse' }, d);
    el('rect', { width: 6, height: 6, fill: '#E25D5D' }, pat);
    el('line', { x1: 3, y1: 0, x2: 3, y2: 6, stroke: '#F28B82', 'stroke-width': 1.6 }, pat);
    const cp = el('clipPath', { id: 'headClip' }, d);
    el('ellipse', { cx: 0, cy: 165, rx: 146, ry: 148 }, cp);
    const glow = el('filter', { id: 'glow', filterUnits: 'userSpaceOnUse', x: -400, y: -100, width: 800, height: 1450 }, d);
    el('feGaussianBlur', { stdDeviation: 3, result: 'b' }, glow);
    const m = el('feMerge', {}, glow); el('feMergeNode', { in: 'b' }, m); el('feMergeNode', { in: 'SourceGraphic' }, m);
  }

  function path(par, d, attrs) { return el('path', Object.assign({ d }, attrs || {}), par); }
  function tube(par, d, color, w, outline) {
    if (outline) path(par, d, { fill: 'none', stroke: outline, 'stroke-width': w + 4, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' });
    return path(par, d, { fill: 'none', stroke: color, 'stroke-width': w, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' });
  }
  function mover(par, pathD, r, fill, dur, begin, keys) {
    const c = el('circle', { r, fill, opacity: 0 }, par);
    const am = el('animateMotion', { path: pathD, dur, begin: begin || '0s', repeatCount: 'indefinite', calcMode: 'linear' }, c);
    if (keys) { am.setAttribute('keyPoints', keys.points); am.setAttribute('keyTimes', keys.times); }
    el('animate', { attributeName: 'opacity', values: keys ? keys.op : '0;1;1;0', keyTimes: keys ? keys.opTimes : '0;0.1;0.9;1', dur, begin: begin || '0s', repeatCount: 'indefinite' }, c);
    return c;
  }

  const ARM_L = 'M-150,410 L-210,592 L-232,772', ARM_R = 'M150,410 L210,592 L232,772';
  const LEG_L = 'M-72,820 L-78,1005 L-80,1160', LEG_R = 'M72,820 L78,1005 L80,1160';
  const TORSO = 'M-150,398 C-150,376 -130,368 -100,368 L100,368 C130,368 150,376 150,398 L148,640 C146,710 150,780 160,850 L-160,850 C-150,780 -146,710 -148,640 Z';
  const FOOD = 'M2,318 C8,380 10,450 18,520 C24,565 32,595 42,616';

  function silhouette(par, outline) {
    const s = outline ? { fill: LINE, stroke: LINE, 'stroke-width': 9 } : { fill: 'url(#skinG)' };
    const limb = (d, w) => path(par, d, { fill: 'none', stroke: outline ? LINE : SKIN, 'stroke-width': outline ? w + 9 : w, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' });
    limb(ARM_L, 60); limb(ARM_R, 60); limb(LEG_L, 92); limb(LEG_R, 92);
    for (const sx of [-1, 1]) {
      el('circle', Object.assign({ cx: 238 * sx, cy: 802, r: 38 }, s), par);
      el('ellipse', Object.assign({ cx: 212 * sx, cy: 782, rx: 13, ry: 22, transform: `rotate(${-30 * sx} ${212 * sx} 782)` }, s), par);
      el('ellipse', Object.assign({ cx: 92 * sx, cy: 1188, rx: 60, ry: 30 }, s), par);
    }
    el('rect', Object.assign({ x: -40, y: 290, width: 80, height: 100 }, s), par);
    path(par, TORSO, s);
    el('ellipse', Object.assign({ cx: 0, cy: 165, rx: 148, ry: 150 }, outline ? s : { fill: 'url(#headG)' }), par);
  }

  function build(world) {
    const P = id => g(world, id ? { 'data-part': id } : {});
    // floor shadow + glow
    el('ellipse', { cx: 0, cy: 1222, rx: 230, ry: 30, fill: 'rgba(80,40,120,.15)' }, world);
    const ea = P('ears');
    for (const sx of [-1, 1]) {
      el('ellipse', { cx: 148 * sx, cy: 210, rx: 30, ry: 44, fill: 'url(#skinG)', stroke: LINE, 'stroke-width': 4 }, ea);
      path(ea, `M${148 * sx + 6 * sx},186 C${148 * sx - 14 * sx},186 ${148 * sx - 16 * sx},222 ${148 * sx},232 C${148 * sx + 10 * sx},236 ${148 * sx + 12 * sx},220 ${148 * sx},214`, { fill: 'none', stroke: '#D79A72', 'stroke-width': 4, 'stroke-linecap': 'round' });
    }
    const body = g(world);
    silhouette(body, true); silhouette(body, false);
    // tuft of hair (keeps the brain window clear)
    path(body, 'M-20,22 C-10,-12 18,-14 26,8 C14,-2 0,4 -4,22 Z', { fill: '#6D4C41' });

    // spinal cord (part of nerves)
    const nv = P('nerves');
    tube(nv, 'M0,318 L0,850', '#FFD54F', 10, '#E0A800');

    // shorts
    path(body, 'M-162,830 L162,830 L154,930 L22,930 L0,880 L-22,930 L-154,930 Z', { fill: 'url(#shortsG)', stroke: '#1565C0', 'stroke-width': 4, 'stroke-linejoin': 'round' });
    el('rect', { x: -162, y: 826, width: 324, height: 16, rx: 6, fill: '#1565C0' }, body);

    // kidneys + ureters (behind the gut)
    const kd = P('kidneys');
    tube(kd, 'M-128,770 C-100,800 -40,800 -18,818', '#F5B7A8', 5);
    tube(kd, 'M128,770 C100,800 40,800 18,818', '#F5B7A8', 5);
    for (const sx of [-1, 1]) {
      const cx = 136 * sx;
      path(kd, `M${cx},712 C${cx + 26 * sx},712 ${cx + 30 * sx},770 ${cx},775 C${cx - 18 * sx},777 ${cx - 22 * sx},755 ${cx - 12 * sx},742 C${cx - 6 * sx},735 ${cx - 16 * sx},718 ${cx},712 Z`, { fill: 'url(#kidneyG)', stroke: '#7a2532', 'stroke-width': 2 });
    }

    // large intestine (frame)
    const li = P('largeint');
    const LI = 'M-104,850 L-112,716 Q-112,696 -92,696 L92,696 Q112,696 112,716 L110,800 Q108,830 76,832 Q44,836 30,850';
    tube(li, LI, '#D49A78', 28, '#A86C4D');
    path(li, LI, { fill: 'none', stroke: '#B97B5B', 'stroke-width': 28, 'stroke-dasharray': '2 15', opacity: 0.8 });

    // small intestine (coils)
    const si = P('smallint');
    let d = '', rows = [724, 742, 760, 778, 796];
    rows.forEach((y, i) => {
      const L2R = i % 2 === 0, x0 = L2R ? -78 : 78, x1 = L2R ? 78 : -78;
      if (i === 0) d += `M${x0},${y}`;
      for (let k = 1; k <= 6; k++) { const x = x0 + (x1 - x0) * k / 6, xm = x0 + (x1 - x0) * (k - 0.5) / 6; d += ` Q${xm},${y + (k % 2 ? -7 : 7)} ${x},${y}`; }
      if (i < rows.length - 1) d += ` A9,9 0 0 ${L2R ? 1 : 0} ${x1},${rows[i + 1]}`;
    });
    tube(si, d, '#F7B2A6', 14, '#D9806F');

    // bladder
    const bl = P('bladder');
    path(bl, 'M0,790 C30,790 38,812 30,828 C24,840 -24,840 -30,828 C-38,812 -30,790 0,790 Z', { fill: 'url(#bladderG)', stroke: '#C9A227', 'stroke-width': 3 });
    el('ellipse', { cx: -10, cy: 802, rx: 9, ry: 5, fill: '#fff', opacity: 0.6 }, bl);

    // lungs (with windpipe)
    const lu = P('lungs');
    const breathe = g(lu, { class: 'breathe' });
    const lungL = 'M-24,418 C-52,396 -108,400 -132,442 C-152,484 -152,560 -136,596 C-120,618 -74,614 -40,598 C-25,588 -20,560 -20,530 Z';
    const lungR = 'M24,418 C52,396 108,400 132,442 C152,484 152,560 136,596 C120,618 86,614 72,602 C62,562 42,548 24,540 Z';
    for (const dd of [lungL, lungR]) path(breathe, dd, { fill: 'url(#lungG)', stroke: '#C95F72', 'stroke-width': 3 });
    for (const sx of [-1, 1]) for (const [a, b, c] of [[440, 470, 500], [470, 520, 560], [500, 560, 590]])
      path(breathe, `M${30 * sx},${a} Q${70 * sx},${b - 10} ${100 * sx},${b} M${70 * sx},${b - 6} Q${85 * sx},${c - 20} ${88 * sx},${c}`, { fill: 'none', stroke: '#D9707F', 'stroke-width': 3, 'stroke-linecap': 'round', opacity: 0.7 });
    el('ellipse', { cx: -95, cy: 470, rx: 16, ry: 30, fill: '#fff', opacity: 0.35 }, breathe);
    el('ellipse', { cx: 95, cy: 470, rx: 16, ry: 30, fill: '#fff', opacity: 0.35 }, breathe);
    // windpipe drawn after lungs so it sits in front
    const wp = g(lu);
    tube(wp, 'M0,322 L0,420 M0,420 Q-14,428 -38,440 M0,420 Q14,428 38,440', '#E9EEF3', 16, '#9FB0C0');
    for (let y = 330; y < 418; y += 11) el('line', { x1: -8, y1: y, x2: 8, y2: y, stroke: '#9FB0C0', 'stroke-width': 2 }, wp);

    // food pipe + travelling bite (part of stomach)
    const st = P('stomach');
    tube(st, FOOD, '#F2A9A1', 16, '#C77B72');
    path(st, 'M30,620 C50,598 120,600 132,632 C142,668 110,694 74,692 C48,690 32,678 38,662 C44,650 68,654 80,644 C88,634 72,628 54,632 C42,636 28,632 30,620 Z', { fill: 'url(#stomachG)', stroke: '#C46F5C', 'stroke-width': 3 });
    path(st, 'M60,664 Q90,672 118,652', { fill: 'none', stroke: '#D9806F', 'stroke-width': 3, 'stroke-linecap': 'round', opacity: 0.6 });
    mover(st, FOOD, 8, '#8D5A3B', '6s', '0s', { points: '0;0;1;1', times: '0;0.3;0.75;1', op: '0;0;1;1;0', opTimes: '0;0.29;0.3;0.74;0.75' });

    // liver
    const lv = P('liver');
    path(lv, 'M-150,618 C-110,602 -30,602 14,614 C20,632 -10,662 -60,674 C-110,684 -150,670 -152,642 Z', { fill: 'url(#liverG)', stroke: '#5E1F1C', 'stroke-width': 3 });
    el('ellipse', { cx: -100, cy: 628, rx: 26, ry: 8, fill: '#fff', opacity: 0.2 }, lv);

    // heart (on top)
    const ht = P('heart');
    const beat = g(ht, { class: 'beat' });
    tube(beat, 'M22,474 C18,446 40,436 54,446 C62,452 60,462 58,470', '#E04848', 12, '#9E1E28');
    path(beat, 'M30,548 C-12,522 -14,482 8,470 C22,463 30,472 30,482 C30,472 38,463 52,470 C74,482 72,522 30,548 Z', { fill: 'url(#heartG)', stroke: '#8E1420', 'stroke-width': 3, transform: 'rotate(-12 30 505)' });
    el('ellipse', { cx: 14, cy: 488, rx: 8, ry: 11, fill: '#fff', opacity: 0.45 }, beat);

    // arm: muscles (left), blood vessels (right)
    const mu = P('muscles');
    for (const [cx, cy, ry, rot] of [[-180, 500, 78, 18.4], [-221, 682, 74, 7]]) {
      el('ellipse', { cx, cy, rx: 22, ry, fill: 'url(#striate)', stroke: '#B23B3B', 'stroke-width': 2.5, transform: `rotate(${rot} ${cx} ${cy})` }, mu);
      el('ellipse', { cx: cx - 6, cy: cy - ry * 0.35, rx: 5, ry: ry * 0.35, fill: '#fff', opacity: 0.3, transform: `rotate(${rot} ${cx} ${cy})` }, mu);
    }
    const bv = P('blood');
    const ART = 'M145,412 C170,470 196,540 206,592 C214,650 222,710 228,772';
    const VEIN = 'M158,408 C184,466 212,540 220,592 C228,650 236,712 244,770';
    const branches = 'M184,500 L202,520 M200,560 L186,580 M214,640 L232,660 M224,710 L208,730';
    tube(bv, branches, '#E53935', 4);
    tube(bv, ART, '#E53935', 8, '#9E1E28');
    tube(bv, VEIN, '#3F7FD9', 8, '#244B8A');
    path(bv, ART, { fill: 'none', stroke: '#FFCDD2', 'stroke-width': 3, class: 'flow', 'stroke-linecap': 'round' });
    path(bv, VEIN, { fill: 'none', stroke: '#BBDEFB', 'stroke-width': 3, class: 'flow back', 'stroke-linecap': 'round' });

    // left leg: x-ray bones
    const bo = P('bones');
    path(bo, 'M-75,938 L-78,1005 L-80,1160', { fill: 'none', stroke: 'url(#xrayG)', 'stroke-width': 80, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' });
    el('ellipse', { cx: -92, cy: 1188, rx: 54, ry: 26, fill: '#1c2b47' }, bo);
    const bone = { fill: 'none', stroke: '#EAF4FF', 'stroke-linecap': 'round', filter: 'url(#glow)' };
    path(bo, 'M-76,930 L-78,992', Object.assign({ 'stroke-width': 18 }, bone));
    el('ellipse', { cx: -78, cy: 998, rx: 22, ry: 12, fill: '#EAF4FF', filter: 'url(#glow)' }, bo);
    el('circle', { cx: -80, cy: 1001, r: 9, fill: '#C8E1FF' }, bo);
    path(bo, 'M-72,1018 L-74,1150', Object.assign({ 'stroke-width': 14 }, bone));
    path(bo, 'M-94,1022 L-94,1148', Object.assign({ 'stroke-width': 7 }, bone));
    el('ellipse', { cx: -82, cy: 1162, rx: 22, ry: 10, fill: '#EAF4FF', filter: 'url(#glow)' }, bo);
    for (let i = 0; i < 5; i++) path(bo, `M${-96 - i * 4},1172 L${-118 - i * 7},${1190 + i * 2}`, Object.assign({ 'stroke-width': 5 }, bone));

    // right leg: nerves with sparks
    const NL = 'M72,930 L78,1005 L80,1150 L104,1192';
    tube(nv, NL, '#FFD54F', 7, '#E0A800');
    tube(nv, 'M76,975 L96,996 M78,1040 L60,1064 M80,1100 L98,1122 M80,1150 L62,1188 M80,1150 L84,1196', '#FFD54F', 4);
    for (const [pd, dur, beg] of [['M0,318 L0,830', '1.6s', '0s'], ['M0,318 L0,830', '1.6s', '0.8s'], [NL, '1.4s', '0.3s'], [NL, '1.4s', '1s']])
      mover(nv, pd, 6, '#FFF59D', dur, beg).setAttribute('filter', 'url(#glow)');

    // hands: skin + fingerprint
    const sk = P('skin');
    el('circle', { cx: -238, cy: 802, r: 38, fill: 'url(#skinG)' }, sk);
    el('ellipse', { cx: -212, cy: 782, rx: 13, ry: 22, fill: SKIN, transform: 'rotate(30 -212 782)' }, sk);
    for (let r = 6; r <= 22; r += 5) path(sk, `M${-238 - r},${808} A${r},${r * 1.2} 0 1 1 ${-238 + r},${808}`, { fill: 'none', stroke: '#D79A72', 'stroke-width': 2.2, 'stroke-linecap': 'round' });

    // head: brain window
    const br = P('brain');
    const bw = g(br, { 'clip-path': 'url(#headClip)' });
    path(bw, 'M-122,120 C-128,40 -70,0 0,0 C70,0 128,40 122,120 C110,150 60,160 0,158 C-60,160 -110,150 -122,120 Z', { fill: 'url(#brainG)', stroke: '#C2678A', 'stroke-width': 3 });
    const gyri = ['M-100,60 C-80,40 -60,70 -40,48 C-24,30 -8,52 -6,36', 'M-110,100 C-90,80 -70,110 -50,90 C-30,72 -20,100 -8,86', 'M-90,135 C-70,120 -50,140 -30,128 C-18,120 -10,134 -6,126',
      'M100,60 C80,40 60,70 40,48 C24,30 8,52 6,36', 'M110,100 C90,80 70,110 50,90 C30,72 20,100 8,86', 'M90,135 C70,120 50,140 30,128 C18,120 10,134 6,126'];
    gyri.forEach(dd => path(bw, dd, { fill: 'none', stroke: '#C2678A', 'stroke-width': 3, 'stroke-linecap': 'round' }));
    path(bw, 'M0,14 L0,156', { stroke: '#B85A7F', 'stroke-width': 3 });
    el('ellipse', { cx: -60, cy: 40, rx: 30, ry: 12, fill: '#fff', opacity: 0.35 }, bw);

    // face
    for (const sx of [-1, 1]) {
      path(body, `M${sx * 30},176 Q${sx * 52},164 ${sx * 76},174`, { fill: 'none', stroke: '#6D4C41', 'stroke-width': 6, 'stroke-linecap': 'round' });
      el('ellipse', { cx: 96 * sx, cy: 262, rx: 20, ry: 12, fill: '#FF8A80', opacity: 0.45 }, body);
    }
    const ey = P('eyes');
    for (const sx of [-1, 1]) {
      const e = g(ey, { class: 'blink' });
      el('ellipse', { cx: 52 * sx, cy: 210, rx: 28, ry: 32, fill: '#fff', stroke: '#8D6E63', 'stroke-width': 2.5 }, e);
      el('circle', { cx: 52 * sx + 3, cy: 214, r: 17, fill: '#4E8BD1' }, e);
      el('circle', { cx: 52 * sx + 3, cy: 214, r: 8, fill: '#1B2433' }, e);
      el('circle', { cx: 52 * sx + 9, cy: 207, r: 5, fill: '#fff' }, e);
    }
    const ns = P('nose');
    path(ns, 'M-6,228 C-10,244 -20,252 -12,260 C-6,266 6,266 12,260 C20,252 10,244 6,228', { fill: '#F3B086', stroke: LINE, 'stroke-width': 3, 'stroke-linejoin': 'round' });
    el('circle', { cx: -7, cy: 258, r: 3, fill: '#B5724C' }, ns); el('circle', { cx: 7, cy: 258, r: 3, fill: '#B5724C' }, ns);
    const mo = P('mouth');
    path(mo, 'M-46,282 Q0,334 46,282 Z', { fill: '#8E2B35', stroke: '#6B1E27', 'stroke-width': 3, 'stroke-linejoin': 'round' });
    path(mo, 'M-40,284 L40,284 L36,293 L-36,293 Z', { fill: '#fff' });
    for (let x = -26; x <= 26; x += 13) el('line', { x1: x, y1: 284, x2: x, y2: 293, stroke: '#ddd', 'stroke-width': 1.5 }, mo);
    el('ellipse', { cx: 2, cy: 306, rx: 20, ry: 8, fill: '#F28B9B' }, mo);
    return {};
  }

  registerThing({
    id: 'body', name: 'Human Body', emoji: '🫀', color: '#F06292', color2: '#C2185B',
    tagline: 'What’s inside you?',
    bg: 'linear-gradient(#FDE7F0 0%, #F3E5F5 55%, #E8EAF6 100%)',
    labels: { does: '⚙️ What does it do?', who: '🌟 Keep it healthy' },
    viewBox: { x: -330, y: -40, w: 660, h: 1290 },
    project: a => a,
    parts, defs, build
  });
})();
