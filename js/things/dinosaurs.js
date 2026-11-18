/* Peek Inside — Dinosaurs: a prehistoric valley and the rocks beneath it */
(function () {
  const { el, g } = ISO;

  const parts = [
    { id: 'trex', emoji: '🦖', name: 'Tyrannosaurus rex', short: 'The tyrant lizard king', anchor: [1236, 300],
      what: 'T. rex was one of the biggest meat-eating animals that ever walked on land. It was as long as a bus and as heavy as an elephant.',
      does: 'It had a huge head, a super strong bite and teeth as big as bananas! It walked on two strong legs and balanced with its long heavy tail.',
      fact: 'T. rex had tiny arms with just two fingers each. Nobody knows for sure what it used them for!',
      who: 'Measure 12 metres outside with big steps (about 24 of your steps). That is how long a T. rex was!',
      hw: [['How do we know what T. rex ate?', 'Scientists have found bones of other dinosaurs with T. rex tooth marks in them, and even fossil poo full of crunched-up bones!']],
      tc: [['T. rex had about 60 teeth. If 10 fell out and grew back, how many teeth did it have afterwards?', 'Still 60! The 10 lost teeth were replaced by 10 new ones. Dinosaurs grew new teeth all their lives.']] },
    { id: 'triceratops', emoji: '🦏', name: 'Triceratops', short: 'Three horns and a frill', anchor: [470, 410],
      what: 'Triceratops means “three-horned face”. It had two long horns above its eyes, a short one on its nose, and a big bony frill behind its head.',
      does: 'It was a plant-eater. It used its sharp beak to snip off tough plants, and its horns to protect itself, maybe even from T. rex!',
      fact: 'Triceratops had one of the biggest heads of any land animal ever. Its skull was longer than a grown-up is tall!',
      who: 'Make a Triceratops frill from a paper plate! Cut a hole for your face and add three cardboard horns.',
      hw: [['What was the frill for?', 'Scientists think it helped protect its neck, and it may have been brightly coloured to show off to other Triceratops, like a peacock’s tail.']],
      tc: [['Triceratops has 3 horns. How many horns do 4 Triceratops have?', '12 horns: 3 + 3 + 3 + 3 = 12.']] },
    { id: 'stegosaurus', emoji: '🦕', name: 'Stegosaurus', short: 'Plates and a spiky tail', anchor: [936, 380],
      what: 'Stegosaurus had two rows of big flat plates along its back and four sharp spikes on the end of its tail.',
      does: 'It was a slow plant-eater. If a meat-eater came close, it swung its spiky tail to defend itself.',
      fact: 'Stegosaurus was as big as a bus, but its brain was only about the size of a walnut!',
      who: 'Make a Stegosaurus from play dough and use folded paper triangles for the plates. How many plates can you fit?',
      hw: [['Did Stegosaurus and T. rex ever meet?', 'No! Stegosaurus lived about 150 million years ago, and T. rex about 66 million years ago. T. rex actually lived closer in time to us than to Stegosaurus!']],
      tc: [['Stegosaurus has 4 spikes on its tail. How many spikes do 3 Stegosaurus have?', '12 spikes: 4 × 3 = 12.']] },
    { id: 'brachiosaurus', emoji: '🦒', name: 'Brachiosaurus', short: 'A giant with a long neck', anchor: [1168, 160],
      what: 'Brachiosaurus was one of the giant long-necked dinosaurs. It could look into a window on the fourth floor of a building!',
      does: 'It stretched its long neck up to eat leaves from the tops of tall trees, where other dinosaurs could not reach.',
      fact: 'Its front legs were longer than its back legs, like a giraffe. It had to eat huge piles of leaves every single day to stay alive!',
      who: 'Lie down on the floor and ask a grown-up to mark your head and feet. How many of you would make one Brachiosaurus, about 22 metres long?',
      hw: [['How did such a big animal not crush its own eggs?', 'Its eggs were only about the size of a football. The mother probably laid them in a nest and walked away, and the babies grew up on their own.']],
      tc: [['Brachiosaurus was about 12 metres tall. A giraffe is about 6 metres. How many giraffes stacked up would be as tall?', '2 giraffes: 6 + 6 = 12.']] },
    { id: 'raptor', emoji: '🦃', name: 'Velociraptor', short: 'A feathered hunter', anchor: [1442, 452],
      what: 'Velociraptor was a fast meat-eater. It was not giant like in films: it was about as big as a turkey!',
      does: 'It had a big curved claw on each foot and probably hunted small animals. It ran fast on two legs.',
      fact: 'Velociraptor had feathers! Scientists found small bumps on its arm bones where feathers were joined, just like on birds’ wings.',
      who: 'Find a feather outdoors and look at it closely with a magnifying glass. Can you see the tiny hooks that zip it together?',
      hw: [['If it had feathers, could Velociraptor fly?', 'No. Its arms were too short to be proper wings. The feathers probably kept it warm and helped it show off.']],
      tc: [['Each Velociraptor has 1 big claw on each foot. How many big claws do 3 raptors have?', '6 claws: each has 2 feet, so 2 + 2 + 2 = 6.']] },
    { id: 'pteranodon', emoji: '🪽', name: 'Pteranodon', short: 'A flying reptile', anchor: [470, 180],
      what: 'Pteranodon soared over the sea on wings made of skin. Its wings were wider than a small aeroplane’s!',
      does: 'It swooped down to catch fish from the sea with its long toothless beak.',
      fact: 'Pteranodon was NOT a dinosaur! It was a flying reptile, a close cousin of the dinosaurs.',
      who: 'Make a paper aeroplane and see how far it glides. Pteranodon glided like that on warm air rising from the sea!',
      hw: [['If Pteranodon is not a dinosaur, what is the difference?', 'Dinosaurs stood with their legs straight underneath them and lived on land. Flying reptiles and sea reptiles were different groups that lived at the same time.']],
      tc: [['Pteranodon’s wings were about 6 metres wide. Your arms spread out are about 1 metre. How many children holding hands would match its wings?', 'About 6 children!']] },
    { id: 'plesiosaur', emoji: '🐉', name: 'Plesiosaur', short: 'A sea reptile', anchor: [150, 410],
      what: 'Plesiosaurs swam in the seas with four big flippers, like a turtle without a shell, and a long neck.',
      does: 'They caught fish and squid with their sharp teeth. They came up to the surface to breathe air.',
      fact: 'Plesiosaurs were not dinosaurs either! They were sea reptiles that lived at the same time as the dinosaurs.',
      who: 'Try swimming with your arms like flippers, flapping up and down like a bird, instead of paddling. It is how plesiosaurs swam!',
      hw: [['Did plesiosaurs lay eggs on the beach like turtles?', 'No! Scientists found a fossil of a plesiosaur with a baby inside. They gave birth to live babies in the water.']],
      tc: [['A plesiosaur has 4 flippers. How many flippers do 5 plesiosaurs have?', '20 flippers: 4 + 4 + 4 + 4 + 4 = 20.']] },
    { id: 'ankylosaurus', emoji: '🛡️', name: 'Ankylosaurus', short: 'The living tank', anchor: [786, 452],
      what: 'Ankylosaurus was covered in bony armour plates and spikes, even on its eyelids!',
      does: 'It had a huge bony club on the end of its tail. If a hungry meat-eater came close, WHACK!',
      fact: 'The only soft part was its tummy. To get a bite, a meat-eater would have to flip it over, and that was nearly impossible!',
      who: 'Make armour from egg-carton cups glued on cardboard. How does it feel to touch compared with your arm?',
      hw: [['Why was the club at the end of the tail?', 'A long tail swings like a bat, so the club at the end moves fastest and hits hardest!']],
      tc: [['An Ankylosaurus has 4 rows of 5 spikes on its back. How many spikes?', '20 spikes: 5 + 5 + 5 + 5 = 20.']] },
    { id: 'parasaurolophus', emoji: '🎺', name: 'Parasaurolophus', short: 'The trumpet dinosaur', anchor: [640, 330],
      what: 'Parasaurolophus had a long curved crest on the back of its head, like a hollow tube.',
      does: 'Air went through tubes inside the crest when it breathed out, so it could make loud, low honking calls to its herd, like a trumpet!',
      fact: 'Scientists made a model of the crest and blew air through it. It made a deep, booming sound!',
      who: 'Blow across the top of an empty bottle to make a hoot. Add water: does the sound get higher or lower?',
      hw: [['Why would a dinosaur need to make loud noises?', 'To warn the herd of danger, to call to its babies, or to find a mate, just like many animals do today.']],
      tc: [['A herd has 6 Parasaurolophus. Each honks 2 times. How many honks?', '12 honks: 6 + 6 = 12.']] },
    { id: 'nest', emoji: '🥚', name: 'Dinosaur Nest', short: 'Eggs and babies', anchor: [560, 512],
      what: 'All dinosaurs hatched from eggs. Many laid their eggs in nests dug in the ground, in a circle or a spiral.',
      does: 'Some dinosaurs looked after their babies, bringing them food until they were big enough to leave the nest.',
      fact: 'Even the biggest dinosaurs had eggs no bigger than a football. Baby dinosaurs were small and grew up very fast!',
      who: 'Look at a hen’s egg. Can you squeeze it gently from end to end without breaking it? (Do it over a bowl!) Eggs are strong in that direction.',
      hw: [['How do we know some dinosaurs cared for their babies?', 'Scientists found nests with babies that were too big to have just hatched, so their parents must have fed them in the nest.']],
      tc: [['A nest has 3 rows with 4 eggs in each row. How many eggs? If 5 hatch, how many are left?', '12 eggs (4 + 4 + 4), and 7 are left to hatch: 12 − 5 = 7.']] },
    { id: 'mammal', emoji: '🐭', name: 'Tiny Mammal', short: 'Our furry ancestors', anchor: [700, 504],
      what: 'Look! A little furry mammal is peeking out of its burrow. Mammals lived alongside the dinosaurs.',
      does: 'Most were small, like mice and shrews. They hid in burrows in the day and came out at night to eat insects.',
      fact: 'After the dinosaurs disappeared, mammals had the world to themselves and grew into all kinds of animals, from whales to elephants, and us!',
      who: 'Make a list of 5 mammals you know. What do they all have in common? (Hint: hair, and they feed their babies milk!)',
      hw: [['Why did small animals survive when the giant dinosaurs did not?', 'Small animals need less food, can hide in burrows, and have lots of babies quickly. That helped them get through the hard times.']],
      tc: [['A tiny mammal eats 5 beetles every night. How many beetles in 4 nights?', '20 beetles: 5 + 5 + 5 + 5 = 20.']] },
    { id: 'archaeopteryx', emoji: '🐦', name: 'Archaeopteryx', short: 'Dinosaurs became birds', anchor: [338, 266],
      what: 'Archaeopteryx was half like a dinosaur and half like a bird. It had feathered wings, but also teeth and a long bony tail.',
      does: 'It could probably flap and glide from tree to tree. It helped scientists discover that birds came from dinosaurs.',
      fact: 'Birds ARE dinosaurs! So the dinosaurs did not all disappear: the robin in your garden is a little feathered dinosaur.',
      who: 'Watch a bird walking. Look at its scaly feet and how it walks on its toes, just like a dinosaur!',
      hw: [['What do birds and T. rex have in common?', 'Hollow bones, three main toes on their feet, eggs, and a wishbone! Birds are the dinosaurs’ living relatives.']],
      tc: [['A pigeon has 2 legs. A dinosaur footprint trail shows 10 footprints. If the dinosaur walked on 2 legs, how many steps did each foot take?', '5 steps for each foot: 10 ÷ 2 = 5.']] },
    { id: 'ferns', emoji: '🌿', name: 'Prehistoric Plants', short: 'A world without grass', anchor: [400, 470],
      what: 'The dinosaur world was full of ferns, horsetails, cycads that look like palms, and tall conifer trees, like pines.',
      does: 'Plant-eating dinosaurs munched these plants. Some dinosaurs swallowed stones to help grind up the tough leaves in their stomachs!',
      fact: 'For most of the time of the dinosaurs, there was no grass at all! Flowers came along later, while the dinosaurs were still around.',
      who: 'Find a fern in a park or garden. Look under the leaves for tiny brown dots: these are spores, how ferns make new plants.',
      hw: [['Do any dinosaur-time plants still grow today?', 'Yes! Ferns, horsetails, monkey puzzle trees and ginkgo trees all lived in the time of the dinosaurs.']],
      tc: [['A fern leaf has 8 little leaflets on each side. How many leaflets altogether?', '16 leaflets: 8 + 8 = 16.']] },
    { id: 'asteroid', emoji: '☄️', name: 'The Asteroid', short: 'The end of the dinosaurs', anchor: [1404, 84],
      what: 'About 66 million years ago, a giant space rock about 10 kilometres wide crashed into the Earth, in the place that is now Mexico.',
      does: 'The crash threw so much dust into the sky that it blocked out the Sun for a long time. Plants died, and the big dinosaurs could not find enough food.',
      fact: 'The crater it made is still there, hidden under the ground and the sea. It is wider than a big city!',
      who: 'With a grown-up, drop pebbles into a tray of flour sprinkled with cocoa. Look at the craters and the splash pattern!',
      hw: [['How do we know an asteroid hit?', 'All around the world, there is a thin layer of rock from that time with a metal called iridium in it. It is rare on Earth but common in space rocks!']],
      tc: [['Dinosaurs disappeared 66 million years ago. Is that more or less than 100 million years ago?', 'Less! 66 is smaller than 100, so it was more recent.']] },
    { id: 'footprints', emoji: '👣', name: 'Footprints', short: 'Clues in the mud', anchor: [430, 560],
      what: 'When a dinosaur walked through soft mud, it left footprints. Sometimes the mud dried, got covered, and slowly turned into rock.',
      does: 'Footprints tell scientists how big a dinosaur was, how it walked, and even if it walked alone or in a herd.',
      fact: 'The longer the gap between footprints, the faster the dinosaur was moving!',
      who: 'Walk and then run across wet sand. Measure the gaps between your footprints. Are they longer when you run?',
      hw: [['How can footprints tell if a dinosaur walked on two legs or four?', 'Count the different kinds of prints! Four-legged dinosaurs left big back footprints and smaller front ones in between.']],
      tc: [['A trail of footprints goes left, right, left, right, … What comes after 7 prints, starting with left?', 'The 7th print is left, so the next one, the 8th, is right!']] },
    { id: 'layers', emoji: '🪨', name: 'Rock Layers', short: 'A history book in stone', anchor: [250, 760],
      what: 'Look underground! Over millions of years, mud and sand settled in layers and slowly turned into rock.',
      does: 'Each layer is like a page in a history book. The deepest layers are the oldest, and the top layers are the youngest.',
      fact: 'The very first dinosaurs appeared about 230 million years ago. Dinosaurs ruled the Earth for over 160 million years. Humans have been around for much less time!',
      who: 'Pour layers of sand, soil and small stones into a clear jar. Which layer went in first? Which is at the bottom?',
      hw: [['Why are the oldest layers at the bottom?', 'Each new layer settles on top of the one before, just like a pile of washing. The first one in is at the bottom!']],
      tc: [['There are 5 rock layers. Layer 1 is at the top. Which layer is the oldest?', 'Layer 5, the one at the very bottom!']] },
    { id: 'fossil', emoji: '🦴', name: 'Fossil Skeleton', short: 'Bones turned to stone', anchor: [1000, 742],
      what: 'This is a fossil: the bones of a dinosaur that have slowly turned to stone deep inside the rock.',
      does: 'When a dinosaur died near water, it was quickly buried in mud. Over millions of years, minerals in the water slowly replaced the bone, making it into stone.',
      fact: 'Fossils are rare! Most animals rot away or get eaten. Only a tiny few become fossils, so every new find is exciting.',
      who: 'Press a shell or a leaf into play dough, then take it out. You have made a pretend fossil print!',
      hw: [['How do we know what colour dinosaurs were?', 'Usually we do not! But scientists have found tiny colour cells in a few fossil feathers and skin. One small dinosaur had a striped ginger tail!']],
      tc: [['A dinosaur skeleton has 4 legs with 3 big bones each. How many leg bones is that?', '12 bones: 3 + 3 + 3 + 3 = 12.']] },
    { id: 'dig', emoji: '🧑‍🔬', name: 'Fossil Hunter', short: 'A palaeontologist at work', anchor: [1352, 660],
      what: 'A scientist who digs up fossils is called a palaeontologist. Here, one is carefully uncovering a dinosaur skeleton.',
      does: 'They dig with small tools and brushes, measure and photograph everything, then wrap the bones in plaster, like a broken arm, to carry them safely to a museum.',
      fact: 'Some of the most famous fossils were found by children! Mary Anning, a girl in England, found a sea reptile skeleton over 200 years ago.',
      who: 'Bury some toy dinosaurs or pasta “bones” in a tray of sand, then dig them up gently with a paintbrush. Draw a map of where each one was!',
      hw: [['Why do palaeontologists dig so slowly?', 'Fossils can be very fragile, and where each bone lies tells a story. Going slowly makes sure nothing breaks or gets mixed up.']],
      tc: [['A fossil hunter finds 3 bones on Monday, 5 on Tuesday and 4 on Wednesday. How many bones altogether?', '12 bones: 3 + 5 + 4 = 12.']] }
  ];

  const path = (par, d, a) => el('path', Object.assign({ d }, a || {}), par);
  const c = (par, cx, cy, r, fill, a) => el('circle', Object.assign({ cx, cy, r, fill }, a || {}), par);
  const ell = (par, cx, cy, rx, ry, fill, a) => el('ellipse', Object.assign({ cx, cy, rx, ry, fill }, a || {}), par);
  const eye = (par, x, y, r) => { c(par, x, y, r || 5, '#FFFFFF'); c(par, x + 1, y, (r || 5) * 0.55, '#212121'); };
  const leg = (par, x, y, w, h, col) => path(par, `M${x - w / 2},${y} L${x - w / 2 + 2},${y + h} L${x + w / 2 + 4},${y + h} L${x + w / 2},${y} Z`, { fill: col });

  function build(world) {
    const P = id => g(world, id ? { 'data-part': id } : {});
    el('rect', { x: -400, y: -900, width: 2400, height: 1500, fill: 'url(#dSky)' }, world);
    c(world, 140, 90, 50, '#FFE082', { opacity: 0.9 });
    // far mountains + smoking volcano
    path(world, 'M300,540 L460,380 L560,470 L700,330 L820,450 L900,400 L1060,540 Z', { fill: '#B39DDB', opacity: 0.45 });
    path(world, 'M820,540 L960,300 L990,300 L1140,540 Z', { fill: '#9575CD', opacity: 0.5 });
    for (const [x, y, r, d] of [[975, 280, 22, 0], [990, 250, 28, 1], [1010, 214, 34, 2]]) c(world, x, y, r, '#B0BEC5', { opacity: 0.6, class: 'wisp', style: `animation-delay:${d}s` });

    // asteroid streak
    const as = P('asteroid');
    const ast = g(as, { class: 'streak' });
    path(ast, 'M1530,-20 L1420,70', { stroke: 'url(#dTail)', 'stroke-width': 26, 'stroke-linecap': 'round' });
    c(ast, 1410, 80, 16, '#6D4C41', { stroke: '#FF7043', 'stroke-width': 4 });
    c(ast, 1406, 76, 4, '#4E342E');

    // sea + plesiosaur
    const sea = g(world);
    el('rect', { x: -400, y: 520, width: 740, height: 120, fill: 'url(#dSea)' }, sea);
    const ple = P('plesiosaur');
    const pg = g(ple, { class: 'bob' });
    ell(pg, 150, 528, 70, 18, '#5C6BC0');
    path(pg, 'M190,524 C210,480 200,440 170,428 L160,440 C186,452 190,490 176,522 Z', { fill: '#5C6BC0' });
    ell(pg, 160, 432, 18, 10, '#5C6BC0'); eye(pg, 158, 428, 3.5);
    path(pg, 'M146,438 l-8,2', { stroke: '#283593', 'stroke-width': 2 });
    ell(pg, 104, 536, 26, 7, '#3F51B5', { transform: 'rotate(20 104 536)' });
    const wv = g(sea, { class: 'waveslide' });
    let wd = 'M-400,522'; for (let x = -200; x < 400; x += 40) wd += ' q10,-8 20,0 t20,0';
    path(wv, wd + ' L400,532 L-400,532 Z', { fill: '#4DB6E6' });

    // ground surface + rock layers
    const LAYERS = [['#A1887F', 560], ['#C8A27A', 620], ['#8D6E63', 680], ['#BCAAA4', 740], ['#795548', 800], ['#6D4C41', 860]];
    const ly = P('layers');
    path(ly, 'M330,540 L1900,540 L1900,1900 L-400,1900 L-400,640 L330,640 Z', { fill: '#A1887F' });
    LAYERS.forEach(([col, y], i) => path(ly, `M-400,${y + 50} C300,${y + 40} 700,${y + 60} 1900,${y + 46} L1900,1900 L-400,1900 Z`, { fill: col }));
    for (let i = 0; i < 50; i++) c(ly, (i * 131) % 1640 - 60, 660 + (i * 47) % 400, 3 + (i % 3), '#5D4037', { opacity: 0.35 });
    // ammonite fossils in layers
    for (const [x, y] of [[180, 700], [620, 820], [1450, 800]]) { c(ly, x, y, 14, '#D7CCC8', { stroke: '#8D6E63', 'stroke-width': 2 }); path(ly, `M${x},${y} m-8,0 a8,8 0 1,1 8,8 a5,5 0 1,1 -5,-5`, { fill: 'none', stroke: '#8D6E63', 'stroke-width': 1.5 }); }
    const arrow = g(ly);
    path(arrow, 'M60,690 L60,930', { stroke: '#FFF8E1', 'stroke-width': 5 });
    path(arrow, 'M48,918 L60,940 L72,918 Z', { fill: '#FFF8E1' });
    const tx = (x, y, t, s) => { const e = el('text', { x, y, 'font-size': s || 18, 'font-weight': 800, fill: '#FFF8E1', 'font-family': 'system-ui, sans-serif' }, arrow); e.textContent = t; };
    tx(76, 706, 'newer'); tx(76, 934, 'older');
    path(world, 'M330,540 L1900,540', { stroke: '#7CB342', 'stroke-width': 12 });
    path(world, 'M-400,640 L330,640', { stroke: '#C8A27A', 'stroke-width': 4 });

    // fossil skeleton in the rock
    const fo = P('fossil');
    ell(fo, 1010, 750, 190, 50, '#5D4037', { opacity: 0.35 });
    const bone = '#FFF8E1';
    path(fo, 'M860,760 C900,740 960,734 1020,738 C1080,742 1120,730 1160,712', { stroke: bone, 'stroke-width': 6, fill: 'none', 'stroke-linecap': 'round' });
    for (let i = 0; i < 12; i++) { const x = 880 + i * 22, y = 752 - i * 1.6; path(fo, `M${x},${y} l0,-12`, { stroke: bone, 'stroke-width': 4, 'stroke-linecap': 'round' }); }
    for (let i = 0; i < 6; i++) path(fo, `M${960 + i * 14},740 q4,26 -2,40`, { stroke: bone, 'stroke-width': 3.5, fill: 'none', 'stroke-linecap': 'round' });
    path(fo, 'M1160,712 L1196,700 L1214,716 L1190,730 L1166,726 Z', { fill: bone });
    for (const x of [1176, 1186, 1196]) path(fo, `M${x},727 l2,7`, { stroke: bone, 'stroke-width': 2 });
    path(fo, 'M980,744 L1000,790 L990,800 M1060,742 L1070,790 L1084,798', { stroke: bone, 'stroke-width': 6, fill: 'none', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' });

    // dig pit + palaeontologist
    const dg = P('dig');
    path(dg, 'M1240,540 L1260,700 L1520,700 L1540,540 Z', { fill: '#D7CCC8', opacity: 0.55 });
    path(dg, 'M1240,540 L1260,700 L1520,700 L1540,540', { stroke: '#8D6E63', 'stroke-width': 3, fill: 'none', 'stroke-dasharray': '8 6' });
    for (let x = 1280; x < 1520; x += 40) path(dg, `M${x},540 L${x + 4},700`, { stroke: '#FFFFFF', 'stroke-width': 1, opacity: 0.5 });
    const pp = g(dg, { transform: 'translate(1370,700)' });
    path(pp, 'M-10,0 L-6,-40 L6,-40 L10,0', { stroke: '#37474F', 'stroke-width': 9, fill: 'none', 'stroke-linejoin': 'round' });
    el('rect', { x: -14, y: -82, width: 28, height: 44, rx: 8, fill: '#FF7043' }, pp);
    c(pp, 0, -96, 13, '#FFCC80');
    path(pp, 'M-17,-100 Q0,-122 17,-100 Z', { fill: '#FDD835' }); el('rect', { x: -22, y: -102, width: 44, height: 5, rx: 2, fill: '#F9A825' }, pp);
    c(pp, 5, -96, 2, '#212121');
    const arm = g(pp, { class: 'brush' });
    path(arm, 'M-8,-70 L-46,-50', { stroke: '#FF7043', 'stroke-width': 8, 'stroke-linecap': 'round' });
    path(arm, 'M-46,-50 L-66,-40', { stroke: '#8D6E63', 'stroke-width': 4 });
    el('rect', { x: -76, y: -42, width: 12, height: 8, fill: '#FFB74D', transform: 'rotate(-25 -70 -38)' }, arm);
    el('rect', { x: 30, y: -16, width: 30, height: 16, rx: 3, fill: '#1E88E5' }, pp);
    path(pp, 'M70,0 L70,-30 L90,-30', { stroke: '#90A4AE', 'stroke-width': 3, fill: 'none' });
    path(pp, 'M1250,700 L1250,720', { stroke: 'none' });

    // footprints in the mud
    const fp = P('footprints');
    ell(fp, 470, 562, 130, 16, '#8D6E63');
    for (const [x, y, f] of [[380, 560, 1], [420, 566, -1], [462, 558, 1], [504, 566, -1], [546, 560, 1]]) path(fp, `M${x},${y} l10,${-3 * f} M${x},${y} l12,0 M${x},${y} l10,${3 * f}`, { stroke: '#4E342E', 'stroke-width': 3.5, 'stroke-linecap': 'round' });

    // cycad tree + archaeopteryx
    const tree = g(world);
    path(tree, 'M346,540 L340,330 L362,330 L358,540 Z', { fill: '#8D6E63' });
    for (let y = 520; y > 340; y -= 16) path(tree, `M340,${y} l20,-8`, { stroke: '#6D4C41', 'stroke-width': 3 });
    for (const a of [-70, -40, -10, 20, 50, 80, 110, 140, 170, 200, 230]) path(tree, 'M0,0 q30,-6 70,10', { fill: 'none', stroke: '#388E3C', 'stroke-width': 9, 'stroke-linecap': 'round', transform: `translate(351,326) rotate(${a})` });
    const ar = P('archaeopteryx');
    const arb = g(ar, { class: 'sway' });
    ell(arb, 336, 292, 14, 9, '#8D6E63');
    path(arb, 'M324,294 L296,306 L300,300 L292,302 L322,288 Z', { fill: '#6D4C41' });
    c(arb, 350, 284, 7, '#A1887F'); eye(arb, 352, 283, 2);
    path(arb, 'M356,286 l10,2 l-10,2', { fill: '#5D4037' });
    path(arb, 'M330,288 q8,-20 20,-12 q-6,8 -14,14', { fill: '#4FC3F7', stroke: '#0277BD', 'stroke-width': 1 });
    path(arb, 'M334,300 l-2,10 M340,300 l2,10', { stroke: '#5D4037', 'stroke-width': 1.5 });

    // ferns
    const fe = P('ferns');
    for (const [x, s, r] of [[390, 1, -20], [410, 0.8, 15], [440, 1.1, -5], [600, 0.8, 10], [860, 0.9, -15], [1180, 0.9, 5]]) {
      const f = g(fe, { transform: `translate(${x},540) rotate(${r}) scale(${s})`, class: 'sway' });
      path(f, 'M0,0 C-4,-30 -2,-60 6,-80', { stroke: '#2E7D32', 'stroke-width': 3, fill: 'none' });
      for (let i = 1; i < 9; i++) { const y = -i * 9, x2 = 1 + i * 0.4; ell(f, x2 - 10, y, 10 - i * 0.7, 3, '#43A047', { transform: `rotate(-25 ${x2 - 10} ${y})` }); ell(f, x2 + 10, y, 10 - i * 0.7, 3, '#43A047', { transform: `rotate(25 ${x2 + 10} ${y})` }); }
    }

    // brachiosaurus (behind)
    const br = P('brachiosaurus');
    const bb = g(br);
    for (const [x, h] of [[1036, 120], [1066, 120], [1132, 150], [1160, 150]]) leg(bb, x, 540 - h, 22, h, '#78909C');
    path(bb, 'M990,430 C1000,380 1060,370 1110,372 C1150,374 1180,384 1190,410 C1196,440 1180,460 1120,462 C1060,464 990,470 940,500 C960,470 980,450 990,430 Z', { fill: '#90A4AE' });
    const nk = g(bb, { class: 'necksway' });
    path(nk, 'M1150,384 C1160,300 1150,230 1160,170 L1188,170 C1186,240 1196,310 1186,400 Z', { fill: '#90A4AE' });
    ell(nk, 1182, 164, 28, 14, '#90A4AE'); eye(nk, 1182, 158, 4);
    path(nk, 'M1198,170 q6,2 10,-2', { stroke: '#546E7A', 'stroke-width': 2, fill: 'none' });
    path(nk, 'M1172,150 q6,-10 14,-4', { fill: '#78909C' });
    path(bb, 'M1150,395 C1158,420 1150,440 1134,446', { stroke: '#78909C', 'stroke-width': 3, fill: 'none' });

    // parasaurolophus
    const pa = P('parasaurolophus');
    const pab = g(pa);
    leg(pab, 640, 470, 18, 70, '#26A69A');
    path(pab, 'M560,440 C590,420 640,410 680,420 C700,430 704,454 680,470 C640,480 600,474 520,476 Z', { fill: '#4DB6AC' });
    path(pab, 'M672,428 C690,410 704,380 720,368 L736,374 C724,394 702,420 690,440 Z', { fill: '#4DB6AC' });
    const ph = g(pab, { class: 'honk' });
    ell(ph, 734, 368, 20, 11, '#4DB6AC'); eye(ph, 732, 362, 3.5);
    path(ph, 'M730,358 C710,340 690,330 666,330 L668,338 C690,340 708,350 724,364 Z', { fill: '#FF8A65' });
    path(ph, 'M752,372 l12,2', { stroke: '#00796B', 'stroke-width': 2 });
    path(pab, 'M680,450 l14,14', { stroke: '#26A69A', 'stroke-width': 6, 'stroke-linecap': 'round' });
    for (const [x, d] of [[770, 0], [784, 0.4]]) path(pa, `M${x},360 q10,8 0,16`, { stroke: '#FFFFFF', 'stroke-width': 3, fill: 'none', class: 'soundwave', style: `animation-delay:${d}s` });

    // nest
    const ne = P('nest');
    ell(ne, 560, 538, 40, 12, '#A1887F');
    path(ne, 'M520,538 Q560,520 600,538', { stroke: '#6D4C41', 'stroke-width': 4, fill: 'none' });
    for (const [x, y, d] of [[544, 528, 0], [560, 524, 0.6], [576, 528, 1.2], [552, 534, 0.3], [570, 534, 0.9]]) ell(ne, x, y, 8, 10, '#FFF3E0', { stroke: '#BCAAA4', class: 'eggwobble', style: `animation-delay:${d}s` });
    const baby = g(ne);
    path(baby, 'M586,520 l8,-14 l10,2 l-4,6 Z', { fill: '#4DB6AC' });
    path(baby, 'M582,528 l6,-6 l4,4 l4,-6 l4,6', { stroke: '#FFF3E0', 'stroke-width': 3, fill: 'none' });

    // tiny mammal in burrow
    const mm = P('mammal');
    path(mm, 'M676,540 Q700,520 724,540 Z', { fill: '#4E342E' });
    const mp = g(mm, { class: 'peek' });
    ell(mp, 700, 532, 12, 9, '#A1887F'); c(mp, 692, 524, 4, '#BCAAA4'); c(mp, 708, 524, 4, '#BCAAA4');
    eye(mp, 696, 530, 2); eye(mp, 704, 530, 2); c(mp, 700, 536, 1.8, '#4E342E');

    // ankylosaurus
    const an = P('ankylosaurus');
    for (const x of [760, 784, 826, 848]) leg(an, x, 500, 14, 40, '#795548');
    path(an, 'M736,506 C740,470 780,456 810,456 C850,456 880,470 886,500 Z', { fill: '#A1887F' });
    for (let r = 0; r < 3; r++) for (let i = 0; i < 5; i++) c(an, 756 + i * 26 + r * 6, 498 - r * 12 - Math.sin(i / 4 * Math.PI) * 8, 4.5, '#6D4C41');
    const tail = g(an, { class: 'tailswing' });
    path(tail, 'M880,494 C910,494 930,490 950,480', { stroke: '#A1887F', 'stroke-width': 10, fill: 'none', 'stroke-linecap': 'round' });
    ell(tail, 958, 478, 14, 10, '#6D4C41');
    ell(an, 730, 494, 18, 12, '#A1887F'); eye(an, 726, 490, 3);
    path(an, 'M740,484 l8,-6 M722,484 l-6,-6', { stroke: '#6D4C41', 'stroke-width': 3 });

    // stegosaurus
    const sg = P('stegosaurus');
    for (const x of [890, 916, 966, 990]) leg(sg, x, 480, 18, 60, '#66BB6A');
    const plates = g(sg);
    for (let i = 0; i < 9; i++) { const x = 880 + i * 15, y = 438 - Math.sin(i / 8 * Math.PI) * 26; path(plates, `M${x - 9},${y + 10} L${x},${y - 18 - (i % 2) * 4} L${x + 9},${y + 10} Z`, { fill: i % 2 ? '#FF8A65' : '#FFAB91', stroke: '#E64A19', 'stroke-width': 1 }); }
    path(sg, 'M860,470 C880,420 960,410 1000,430 C1040,440 1070,450 1080,470 L1060,478 C1020,486 900,490 860,470 Z', { fill: '#81C784' });
    const stail = g(sg, { class: 'tailswish' });
    path(stail, 'M1060,462 C1090,462 1110,456 1124,446', { stroke: '#81C784', 'stroke-width': 10, fill: 'none', 'stroke-linecap': 'round' });
    for (const [x, y, a] of [[1112, 446, -40], [1118, 440, -60], [1122, 452, 30], [1128, 446, 50]]) path(stail, `M${x},${y} l0,-16`, { stroke: '#FFF8E1', 'stroke-width': 3.5, 'stroke-linecap': 'round', transform: `rotate(${a} ${x} ${y})` });
    path(sg, 'M866,466 C850,470 836,476 830,490', { stroke: '#81C784', 'stroke-width': 12, fill: 'none', 'stroke-linecap': 'round' });
    ell(sg, 826, 492, 14, 8, '#81C784'); eye(sg, 822, 489, 2.5);

    // triceratops
    const tri = P('triceratops');
    for (const x of [430, 452, 500, 522]) leg(tri, x, 490, 18, 50, '#6D4C41');
    path(tri, 'M410,494 C410,456 450,436 490,438 C530,440 548,456 548,486 Z', { fill: '#8D6E63' });
    path(tri, 'M410,470 C390,470 376,476 366,490', { stroke: '#8D6E63', 'stroke-width': 10, fill: 'none', 'stroke-linecap': 'round' });
    const th = g(tri, { class: 'nod' });
    path(th, 'M530,452 C540,410 580,404 590,424 C600,446 584,470 560,474 Z', { fill: '#FFB74D', stroke: '#E65100', 'stroke-width': 2 });
    for (let i = 0; i < 6; i++) c(th, 546 + i * 8, 418 + Math.abs(i - 2.5) * 4, 3, '#E65100');
    ell(th, 580, 462, 26, 18, '#8D6E63');
    path(th, 'M598,470 L618,474 L604,482 Z', { fill: '#5D4037' });
    path(th, 'M574,446 C584,424 600,414 620,408 C604,420 594,434 588,448 Z', { fill: '#FFF8E1', stroke: '#BCAAA4' });
    path(th, 'M594,452 C604,440 618,436 630,436 C618,444 608,452 600,458 Z', { fill: '#FFF8E1', stroke: '#BCAAA4' });
    path(th, 'M602,462 L612,450 L610,464 Z', { fill: '#FFF8E1' });
    eye(th, 584, 456, 3.5);

    // T. rex
    const tr = P('trex');
    const trb = g(tr, { class: 'stomp' });
    path(trb, 'M1260,460 L1250,520 L1236,540 L1270,540 L1272,522 L1290,460 Z', { fill: '#556B2F' });
    path(trb, 'M1320,452 L1316,516 L1304,540 L1338,540 L1342,520 L1350,452 Z', { fill: '#6B8E23' });
    path(trb, 'M1230,400 C1260,370 1320,370 1360,390 C1400,404 1460,420 1520,440 C1460,444 1400,450 1360,462 C1310,476 1260,474 1240,450 Z', { fill: '#7CA03A' });
    for (let i = 0; i < 6; i++) path(trb, `M${1280 + i * 26},${386 + i * 4} l6,14`, { stroke: '#556B2F', 'stroke-width': 4, 'stroke-linecap': 'round' });
    path(trb, 'M1250,430 l-14,14 l-6,-4 M1236,444 l-2,6', { stroke: '#556B2F', 'stroke-width': 4, fill: 'none', 'stroke-linecap': 'round' });
    const head = g(trb);
    path(head, 'M1240,396 C1236,370 1230,348 1200,342 L1150,346 C1138,350 1136,366 1146,372 L1220,376 Z', { fill: '#7CA03A' });
    const jaw = g(head, { class: 'chomp' });
    path(jaw, 'M1238,400 L1230,384 L1150,380 C1146,392 1160,400 1180,402 Z', { fill: '#6B8E23' });
    for (let x = 1158; x < 1220; x += 10) path(jaw, `M${x},381 l4,-7 l4,7`, { fill: '#FFF8E1' });
    for (let x = 1154; x < 1220; x += 10) path(head, `M${x},372 l4,8 l4,-8`, { fill: '#FFF8E1' });
    eye(head, 1196, 354, 5);
    path(head, 'M1186,346 l18,-4', { stroke: '#33691E', 'stroke-width': 3 });
    c(head, 1152, 356, 2.4, '#33691E');

    // velociraptors
    const vr = P('raptor');
    for (const [x, s, d] of [[1440, 1, 0], [1500, 0.8, 0.4]]) {
      const r = g(vr, { transform: `translate(${x},540) scale(${-s},${s})` });
      const rr = g(r, { class: 'run', style: `animation-delay:${d}s` });
      path(rr, 'M-6,-30 L-10,-8 L-4,0 M6,-30 L10,-10 L18,0', { stroke: '#8D6E63', 'stroke-width': 5, fill: 'none', 'stroke-linejoin': 'round' });
      path(rr, 'M18,0 q4,-6 0,-8', { stroke: '#212121', 'stroke-width': 2, fill: 'none' });
      path(rr, 'M-50,-44 C-30,-50 -10,-50 10,-46 C24,-44 30,-34 20,-28 C0,-24 -20,-30 -50,-44 Z', { fill: '#A1887F' });
      for (let i = 0; i < 4; i++) path(rr, `M${-40 + i * 10},-46 l-8,-8`, { stroke: '#FF7043', 'stroke-width': 3, 'stroke-linecap': 'round' });
      path(rr, 'M18,-40 C26,-54 30,-60 36,-62 L48,-58 L36,-52 L28,-40 Z', { fill: '#A1887F' });
      eye(rr, 38, -58, 2.4);
      path(rr, 'M14,-34 l12,6 l2,-3', { stroke: '#8D6E63', 'stroke-width': 3, fill: 'none' });
      path(rr, 'M10,-44 l10,-6 l6,6 l-4,4', { fill: '#FFB74D' });
    }

    // pteranodon
    const pt = P('pteranodon');
    const pf = g(pt, { class: 'soar' });
    const pw = g(pf, { transform: 'translate(470,200)' });
    const wing = g(pw, { class: 'ptflap' });
    path(wing, 'M0,0 C-30,-24 -80,-30 -120,-14 C-80,-10 -40,0 0,10 Z', { fill: '#BCAAA4', stroke: '#8D6E63', 'stroke-width': 2 });
    path(wing, 'M0,0 C30,-24 80,-30 120,-14 C80,-10 40,0 0,10 Z', { fill: '#BCAAA4', stroke: '#8D6E63', 'stroke-width': 2 });
    ell(pw, 0, 4, 10, 16, '#A1887F');
    path(pw, 'M-4,-8 L-16,-30 L4,-14 Z M4,-14 L30,-6 L4,-4 Z', { fill: '#A1887F' });
    eye(pw, 0, -12, 2.2);
    return {};
  }

  function defs(d) {
    const lg = (id, stops, x2, y2) => { const e = el('linearGradient', { id, x1: 0, y1: 0, x2: x2 || 0, y2: y2 == null ? 1 : y2 }, d); stops.forEach(([o, col, op]) => el('stop', Object.assign({ offset: o, 'stop-color': col }, op != null ? { 'stop-opacity': op } : {}), e)); };
    lg('dSky', [[0, '#FFB74D'], [0.45, '#FFE0B2'], [1, '#FFF3E0']]);
    lg('dSea', [[0, '#29B6F6'], [1, '#0277BD']]);
    lg('dTail', [[0, '#FFF59D', 0], [1, '#FF7043', 1]], 1, 1);
  }

  registerThing({
    id: 'dinosaurs', name: 'Dinosaurs', emoji: '🦖', color: '#FF8A65', color2: '#BF360C',
    tagline: 'Giants of long ago!',
    bg: 'linear-gradient(#FFB74D, #FFF3E0)',
    labels: { does: '🦴 How did it live?', who: '🧪 Try this!' },
    viewBox: { x: -40, y: -20, w: 1580, h: 960 },
    phoneZoom: 1.7,
    noClouds: true,
    project: a => a,
    parts, defs, build
  });
})();
