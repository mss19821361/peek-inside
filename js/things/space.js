/* Peek Inside — Stars & Planets (our solar system) */
(function () {
  const { el, g } = ISO;

  const parts = [
    { id: 'sun', emoji: '☀️', name: 'The Sun', short: 'Our very own star', anchor: [70, 300],
      what: 'The Sun is a star: a gigantic ball of glowing hot gas at the centre of our solar system. In this picture, everything is drawn much smaller and closer together than it really is, so it all fits!',
      does: 'It gives us light and warmth. Its pull, called gravity, keeps all the planets going round and round it.',
      fact: 'About 109 Earths could fit side by side across the Sun. Its light takes about 8 minutes to reach us!',
      who: 'Never look straight at the Sun! Instead, push a stick into the ground and mark the end of its shadow every hour. You have made a sun clock!',
      hw: [['Why does the Sun look so much bigger than other stars?', 'The other stars are suns too, many even bigger than ours! They look like tiny dots only because they are very, very far away.']],
      tc: [['Sunlight takes 8 minutes to reach Earth. If light leaves the Sun at 9:00, when does it arrive?', 'At 9:08!']] },
    { id: 'mercury', emoji: '🌡️', name: 'Mercury', short: 'The smallest, fastest planet', anchor: [239, 495],
      what: 'Mercury is the smallest planet and the closest one to the Sun. It is grey and covered in craters, a bit like our Moon.',
      does: 'It zooms around the Sun faster than any other planet. One year on Mercury lasts only 88 Earth days!',
      fact: 'Mercury has no air to keep it warm, so its days are hotter than an oven and its nights are colder than a freezer.',
      who: 'With a grown-up, look very low in the sky just after sunset. If you are lucky, you might spot Mercury as a tiny dot!',
      hw: [['Mercury is closest to the Sun. Is it the hottest planet?', 'No! Venus is hotter, because its thick clouds trap the heat like a blanket. Mercury has no blanket, so its heat escapes.']],
      tc: [['A year on Mercury is 88 days. About how many Mercury years fit into one Earth year of 365 days?', 'About 4! 88 + 88 + 88 + 88 = 352, which is close to 365.']] },
    { id: 'venus', emoji: '✨', name: 'Venus', short: 'The hottest planet', anchor: [295, 384],
      what: 'Venus is the second planet from the Sun. It is about the same size as Earth, but it is covered in thick yellow clouds.',
      does: 'The clouds trap the Sun’s heat, so Venus is the hottest planet of all, hot enough to melt lead!',
      fact: 'Venus spins so slowly that one day on Venus (243 Earth days) is longer than its whole year (225 Earth days)! And it spins backwards.',
      who: 'Venus is the brightest “star” in the evening or morning sky. Look for a very bright dot near the Sunset!',
      hw: [['Why is Venus called the Evening Star?', 'It shines so brightly just after sunset that people long ago thought it was a star. But it is a planet, reflecting sunlight.']],
      tc: [['A day on Venus is 243 Earth days and its year is 225 days. Which is longer, and by how many days?', 'The day is longer, by 18 days: 243 − 225 = 18.']] },
    { id: 'earth', emoji: '🌍', name: 'Earth', short: 'Our home', anchor: [381, 518],
      what: 'Earth is our home, the third planet from the Sun. It is the only place we know of where there is life.',
      does: 'Earth is not too hot and not too cold, so it has liquid water and air to breathe. It spins once a day, giving us day and night, and goes around the Sun once a year.',
      fact: 'Earth spins really fast! People near the middle of the Earth are whizzing around at more than 1,600 kilometres per hour, and they don’t even feel it.',
      who: 'In a dark room, shine a torch on a ball and slowly spin the ball. You will see day and night move around it!',
      hw: [['Why do we have summer and winter?', 'Earth is tilted. For part of the year your half of the Earth leans towards the Sun, so it is summer. Later it leans away, so it is winter.']],
      tc: [['Earth spins once every day. How many times does it spin in one week?', '7 times, one for each day of the week!']] },
    { id: 'moon', emoji: '🌙', name: 'The Moon', short: 'Earth’s rocky friend', anchor: [452, 452],
      what: 'The Moon is a big ball of rock that goes around the Earth. It is covered in craters made by space rocks crashing into it.',
      does: 'It does not make its own light. It shines because sunlight bounces off it. Its pull also makes the sea go up and down, which is called the tides.',
      fact: 'Twelve astronauts have walked on the Moon. Their footprints are still there, because there is no wind or rain to blow them away!',
      who: 'Look at the Moon every evening for two weeks and draw its shape each time. Watch it change!',
      hw: [['Why does the Moon change shape?', 'Half of the Moon is always lit by the Sun. As the Moon goes around us, we see different amounts of that bright half, so it seems to change shape.']],
      tc: [['The Moon goes around the Earth in about 4 weeks. About how many days is that?', 'About 28 days: 7 + 7 + 7 + 7 = 28.']] },
    { id: 'mars', emoji: '🔴', name: 'Mars', short: 'The red planet', anchor: [496, 378],
      what: 'Mars is the fourth planet. It looks red because its dusty ground is full of rust!',
      does: 'Mars is cold and dry, with huge volcanoes, deep canyons and icy poles. Robot rovers drive across it to explore.',
      fact: 'Mars has the biggest volcano in the whole solar system, called Olympus Mons. It is about three times taller than Mount Everest!',
      who: 'Mars looks like a reddish star in the night sky. Ask a grown-up to help you find it with a stargazing app.',
      hw: [['Why is Mars red?', 'The rocks and dust on Mars have lots of iron in them, and the iron has gone rusty, just like an old bike left out in the rain.']],
      tc: [['Mars has 2 small moons and Earth has 1. How many moons do they have together?', '3 moons: 2 + 1 = 3.']] },
    { id: 'asteroids', emoji: '🪨', name: 'Asteroid Belt', short: 'A ring of space rocks', anchor: [629, 489],
      what: 'Between Mars and Jupiter there is a huge ring of space rocks called the asteroid belt. Watch them drift around the Sun!',
      does: 'The asteroids are leftover bits from when the planets were made, long ago. Most are small, but the biggest one, Ceres, is a dwarf planet.',
      fact: 'Even though there are millions of asteroids, they are so far apart that spacecraft fly right through the belt without hitting any!',
      who: 'Make asteroids from play-dough or clay. Make them lumpy, not round, just like the real ones!',
      hw: [['Why are asteroids lumpy instead of round?', 'Big things in space get pulled into a ball by their own gravity. Asteroids are too small for their gravity to squeeze them round.']],
      tc: [['A space probe spots 5 asteroids on Monday and 7 on Tuesday. How many altogether?', '12 asteroids: 5 + 7 = 12.']] },
    { id: 'jupiter', emoji: '🟠', name: 'Jupiter', short: 'The giant planet', anchor: [751, 519],
      what: 'Jupiter is the biggest planet. It is a gas giant, made mostly of gas, with colourful stripes of clouds.',
      does: 'The big red spot is a giant storm, bigger than the whole Earth, that has been swirling for hundreds of years. Jupiter has more than 100 moons!',
      fact: 'Jupiter is so big that more than 1,300 Earths could fit inside it!',
      who: 'With binoculars on a clear night, you can see Jupiter’s 4 biggest moons as tiny dots in a line next to it.',
      hw: [['Could you stand on Jupiter?', 'No! It has no solid ground. If you fell in, you would just sink through thicker and thicker clouds of gas.']],
      tc: [['Jupiter has 4 big moons. Earth has 1. How many more big moons does Jupiter have?', '3 more: 4 − 1 = 3.']] },
    { id: 'saturn', emoji: '🪐', name: 'Saturn', short: 'The planet with rings', anchor: [949, 369],
      what: 'Saturn is the second biggest planet, a gas giant with beautiful wide rings around it.',
      does: 'The rings are made of billions of pieces of ice and rock, some as small as sand and some as big as a house, all circling the planet.',
      fact: 'Saturn is so light for its size that it would float, if you could find a bathtub big enough! It also has more moons than any other planet: over 280!',
      who: 'Even a small telescope can show you Saturn’s rings. Ask a grown-up to find a stargazing night near you!',
      hw: [['What are Saturn’s rings made of?', 'Billions of chunks of ice and rock, all going round and round Saturn. The ice makes them shine in the sunlight.']],
      tc: [['Count the planets from the Sun: Mercury, Venus, Earth, Mars, Jupiter, Saturn. Which number is Saturn?', 'Saturn is the 6th planet!']] },
    { id: 'uranus', emoji: '🧊', name: 'Uranus', short: 'The planet on its side', anchor: [1104, 543],
      what: 'Uranus is an ice giant, a cold blue-green planet made of icy stuff and gas.',
      does: 'Most planets spin like a top, but Uranus rolls around the Sun on its side, like a ball rolling along the floor!',
      fact: 'Because it is tipped over, each end of Uranus gets 42 years of sunshine and then 42 years of darkness.',
      who: 'Spin a top, then roll a ball across the floor. Uranus moves like the rolling ball!',
      hw: [['Why does Uranus lie on its side?', 'Scientists think something huge crashed into it a very long time ago and knocked it over.']],
      tc: [['One year on Uranus is 84 Earth years. What is half of 84?', '42, which is how long each end of Uranus stays in sunshine!']] },
    { id: 'neptune', emoji: '💨', name: 'Neptune', short: 'The windiest planet', anchor: [1260, 376],
      what: 'Neptune is the eighth planet and the farthest from the Sun. It is a deep blue ice giant.',
      does: 'It has the fastest winds in the solar system, much faster than the strongest hurricanes on Earth.',
      fact: 'Neptune was found using maths! Scientists worked out where it should be before anyone had ever seen it.',
      who: 'Make up a rhyme to remember the planets in order: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune!',
      hw: [['Why is Neptune so cold?', 'It is so far from the Sun that sunlight there is very weak, much too weak to warm it up.']],
      tc: [['How many planets are there in our solar system? Count them in the picture!', '8 planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune.']] },
    { id: 'pluto', emoji: '🤍', name: 'Pluto', short: 'A dwarf planet', anchor: [1386, 515],
      what: 'Pluto is a dwarf planet, smaller than our Moon, far out in the cold beyond Neptune.',
      does: 'It is made of rock and ice. A spacecraft that flew past found a giant heart shape made of ice on it!',
      fact: 'Pluto was called a planet for 76 years. In 2006, scientists decided to call it a dwarf planet instead.',
      who: 'Draw Pluto with its icy heart, then draw the other dwarf planets: Ceres, Eris, Haumea and Makemake!',
      hw: [['Why is Pluto not a planet any more?', 'A full planet clears its path around the Sun. Pluto shares its path with lots of other icy objects, so it is called a dwarf planet.']],
      tc: [['Pluto was found in 1930 and called a dwarf planet in 2006. How many years apart is that?', '76 years. From 1930 to 2000 is 70 years, and 6 more makes 76.']] },
    { id: 'comet', emoji: '☄️', name: 'Comet', short: 'A dirty snowball with a tail', anchor: [1150, 150],
      what: 'A comet is like a giant dirty snowball made of ice, dust and rock, travelling around the Sun.',
      does: 'When it comes near the Sun, its ice turns into gas and makes a long glowing tail that can stretch for millions of kilometres.',
      fact: 'Halley’s Comet comes back about every 76 years. The next time it will be seen from Earth is in 2061!',
      who: 'Make a comet: tie long ribbons to a small ball and swing it around. Watch the tail stream behind!',
      hw: [['Why does a comet’s tail point away from the Sun?', 'Sunlight and a wind of tiny particles from the Sun push the gas and dust away, so the tail always points away from the Sun.']],
      tc: [['If you are 8 years old in 2026, how old will you be when Halley’s Comet comes back in 2061?', '43 years old! From 2026 to 2061 is 35 years, and 8 + 35 = 43.']] },
    { id: 'iss', emoji: '🛰️', name: 'Space Station', short: 'A home in space', anchor: [330, 600],
      what: 'The International Space Station is a huge laboratory in space, where astronauts live and work for months.',
      does: 'It flies around the Earth about 400 kilometres up. Astronauts do science experiments, exercise every day, and sleep in sleeping bags tied to the wall.',
      fact: 'The station goes all the way around the Earth every 90 minutes, so the astronauts see 16 sunrises and 16 sunsets every day!',
      who: 'You can see the space station from the ground as a bright dot moving quickly across the night sky. Look up when it passes!',
      hw: [['Why do astronauts float in the space station?', 'The station and everything inside it are falling around the Earth together, all the time. So nothing feels heavy, and everything floats!']],
      tc: [['The station goes around the Earth every 90 minutes. How many times does it go around in 3 hours?', '2 times: 90 + 90 = 180 minutes, which is 3 hours.']] },
    { id: 'rocket', emoji: '🚀', name: 'Rocket', short: 'Blasting into space', anchor: [478, 600],
      what: 'A rocket is a machine that can fly into space. It is tall and thin, and full of fuel.',
      does: 'It burns its fuel and pushes hot gas out of the bottom very fast. That push sends the rocket up, faster and faster, until it can fly around the Earth.',
      fact: 'Rockets are built in parts called stages. When a stage runs out of fuel, it drops off, so the rocket gets lighter and goes faster!',
      who: 'Make a balloon rocket: thread a straw on a long string, tape a blown-up balloon to the straw, then let go!',
      hw: [['How can a rocket fly where there is no air to push on?', 'It does not need air! The rocket pushes the hot gas out backwards, and the gas pushes the rocket forwards. It works even in empty space.']],
      tc: [['Count down by 2s from 10: 10, 8, 6… What are the next three numbers?', '4, 2, 0. Blast off!']] },
    { id: 'astronaut', emoji: '🧑‍🚀', name: 'Astronaut', short: 'Working in space', anchor: [282, 648],
      what: 'This astronaut is on a spacewalk outside the space station, fixing something.',
      does: 'The spacesuit is like a tiny spaceship. It gives the astronaut air to breathe, keeps them warm or cool, and protects them. A strong line keeps them tied to the station.',
      fact: 'Astronauts grow a little bit taller in space, because their back stretches out when there is no gravity pulling it down!',
      who: 'Put on thick gloves and try to button a shirt or pick up a coin. That is how hard it is to work in a spacesuit!',
      hw: [['Why do astronauts need spacesuits?', 'Space has no air to breathe, and it can be terribly hot in sunlight and freezing cold in the shade. The suit protects them from all of it.']],
      tc: [['3 astronauts go on a spacewalk. Each one has 2 gloves. How many gloves altogether?', '6 gloves: 2 + 2 + 2 = 6.']] },
    { id: 'telescope', emoji: '🔭', name: 'Space Telescope', short: 'A golden eye in space', anchor: [590, 690],
      what: 'This is the James Webb Space Telescope. It has a giant golden mirror and a silver shield as big as a tennis court.',
      does: 'It floats far out in space and looks at stars and galaxies so far away that their light has travelled for billions of years to reach us.',
      fact: 'Its mirror is made of 18 hexagons, each covered in a very thin layer of real gold!',
      who: 'Find hexagons around you: honeycomb, football patches, bathroom tiles. How many can you spot?',
      hw: [['Why put a telescope in space?', 'The air around Earth makes stars twinkle and blur, and it blocks some kinds of light. From space, the view is much clearer.']],
      tc: [['Count the gold hexagons: 6 in the inside ring and 12 in the outside ring. How many altogether?', '18 hexagons: 6 + 12 = 18.']] },
    { id: 'stars', emoji: '⭐', name: 'Big Dipper', short: 'A pattern of stars', anchor: [775, 130],
      what: 'These 7 bright stars make a famous pattern called the Big Dipper, or the Plough. It looks like a big spoon or a saucepan.',
      does: 'People have used star patterns for thousands of years to find their way at night. The two stars at the end of the spoon point to the North Star.',
      fact: 'Stars are so far away that the light you see tonight left some of them hundreds of years ago!',
      who: 'On a clear night, ask a grown-up to help you find the Big Dipper, then follow its two end stars to the North Star.',
      hw: [['Why do stars twinkle?', 'The air above us is always moving. It bends the starlight a tiny bit this way and that, so the stars seem to twinkle.']],
      tc: [['Count the stars in the Big Dipper. If 4 make the bowl, how many make the handle?', '7 stars in all, so 3 make the handle: 7 − 4 = 3.']] }
  ];

  const SUN = [-60, 450];
  const pos = (d, deg) => [SUN[0] + d * Math.cos(deg * Math.PI / 180), SUN[1] + 0.32 * d * Math.sin(deg * Math.PI / 180)];
  const c = (par, cx, cy, r, fill, a) => el('circle', Object.assign({ cx, cy, r, fill }, a || {}), par);
  const path = (par, d, a) => el('path', Object.assign({ d }, a || {}), par);

  function build(world) {
    const P = id => g(world, id ? { 'data-part': id } : {});
    const defs = ISO.defs();
    // starfield
    const sky = g(world);
    path(sky, 'M-400,900 C200,620 900,520 1900,120 L1900,260 C900,660 200,760 -400,1040 Z', { fill: '#ffffff', opacity: 0.05 });
    let seed = 7; const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
    for (let i = 0; i < 170; i++) c(sky, -300 + rnd() * 2100, -200 + rnd() * 1300, 0.6 + rnd() * 1.6, '#ffffff', { opacity: (0.4 + rnd() * 0.6).toFixed(2), class: i % 4 ? '' : 'twinkle', style: `animation-delay:${(rnd() * 3).toFixed(2)}s` });
    // shooting star
    const sh = path(sky, 'M0,0 L-70,-26', { stroke: '#ffffff', 'stroke-width': 2.5, 'stroke-linecap': 'round', opacity: 0 });
    el('animateMotion', { path: 'M600,60 L1000,210', dur: '9s', repeatCount: 'indefinite', keyPoints: '0;0;1;1', keyTimes: '0;0.85;0.93;1', calcMode: 'linear' }, sh);
    el('animate', { attributeName: 'opacity', values: '0;0;1;0;0', keyTimes: '0;0.85;0.88;0.93;1', dur: '9s', repeatCount: 'indefinite' }, sh);

    // orbits
    const orb = g(world);
    for (const d of [330, 410, 500, 600, 840, 1040, 1200, 1340, 1460]) el('ellipse', { cx: SUN[0], cy: SUN[1], rx: d, ry: d * 0.32, fill: 'none', stroke: '#9FA8DA', 'stroke-width': 1.2, opacity: d === 1460 ? 0.25 : 0.4, 'stroke-dasharray': d === 1460 ? '5 6' : '' }, orb);

    // asteroid belt
    const ab = P('asteroids');
    for (let i = 0; i < 420; i++) {
      const d = 665 + rnd() * 70, a = rnd() * 360, [x, y] = pos(d, a);
      if (x > 170) el('ellipse', { cx: x.toFixed(1), cy: y.toFixed(1), rx: (1.5 + rnd() * 2.5).toFixed(1), ry: (1 + rnd() * 1.8).toFixed(1), fill: rnd() > 0.5 ? '#BCAAA4' : '#9E9E9E', opacity: 0.85 }, ab);
    }
    for (let i = 0; i < 6; i++) {
      const rock = path(ab, 'M-6,-3 L-1,-6 L5,-4 L7,1 L3,5 L-4,4 Z', { fill: '#BCAAA4', stroke: '#6D4C41', 'stroke-width': 1 });
      el('animateMotion', { path: `M${SUN[0] + 700},${SUN[1]} A700,224 0 1 1 ${SUN[0] - 700},${SUN[1]} A700,224 0 1 1 ${SUN[0] + 700},${SUN[1]}`, dur: `${60 + i * 7}s`, begin: `-${i * 11}s`, repeatCount: 'indefinite' }, rock);
    }

    // the Sun
    const su = P('sun');
    c(su, SUN[0], SUN[1], 300, 'url(#spGlow)');
    const sunBody = c(su, SUN[0], SUN[1], 220, 'url(#spSun)', { class: 'sunpulse' });
    for (let i = 0; i < 9; i++) { const a = (i * 40 - 80) * Math.PI / 180; c(su, SUN[0] + 175 * Math.cos(a), SUN[1] + 175 * Math.sin(a), 14 + (i % 3) * 6, '#FFB300', { opacity: 0.35, class: 'twinkle', style: `animation-delay:${i * 0.3}s` }); }
    path(su, `M${SUN[0] + 205},${SUN[1] - 90} q40,-30 30,20`, { fill: 'none', stroke: '#FF7043', 'stroke-width': 6, 'stroke-linecap': 'round', class: 'twinkle' });

    const planet = (id, d, deg, r, grad, extra) => {
      const [x, y] = pos(d, deg), gp = P(id);
      el('ellipse', { cx: x + r * 0.15, cy: y + r * 0.2, rx: r * 1.15, ry: r * 1.15, fill: '#000', opacity: 0.18 }, gp);
      if (extra && extra.behind) extra.behind(gp, x, y);
      c(gp, x, y, r, grad);
      if (extra && extra.over) extra.over(gp, x, y);
      c(gp, x, y, r, 'url(#spShade)');
      if (extra && extra.front) extra.front(gp, x, y);
      return [x, y];
    };
    const clipCircle = (x, y, r) => { const id = 'cc' + Math.random().toString(36).slice(2, 7); const cp = el('clipPath', { id }, defs); c(cp, x, y, r, '#000'); return `url(#${id})`; };

    planet('mercury', 330, 25, 12, 'url(#spMercury)', { over: (gp, x, y) => { c(gp, x - 3, y - 2, 2.5, '#757575'); c(gp, x + 4, y + 3, 2, '#757575'); } });
    planet('venus', 410, -30, 20, 'url(#spVenus)', { over: (gp, x, y) => { const cl = g(gp, { 'clip-path': clipCircle(x, y, 20) }); for (const dy of [-8, 0, 8]) path(cl, `M${x - 22},${y + dy} q11,-4 22,0 t22,0`, { fill: 'none', stroke: '#FFF59D', 'stroke-width': 3, opacity: 0.6 }); } });
    // Earth with clouds
    const ep = planet('earth', 500, 28, 26, 'url(#spOcean)', { over: (gp, x, y) => {
      const cl = g(gp, { 'clip-path': clipCircle(x, y, 26) });
      const land = g(cl, { class: 'earthspin' });
      for (const dx of [-60, 0, 60]) {
        path(land, `M${x - 14 + dx},${y - 12} q8,-8 16,-2 q6,8 -2,14 q-6,10 -12,2 q-8,-4 -2,-14 Z`, { fill: '#66BB6A' });
        path(land, `M${x + 8 + dx},${y + 4} q10,-4 14,4 q-2,10 -10,10 q-8,-4 -4,-14 Z`, { fill: '#81C784' });
      }
      const clouds = g(cl, { class: 'cloudspin' });
      for (const dx of [-60, 0, 60]) path(clouds, `M${x - 20 + dx},${y - 4} q10,-6 20,0 t20,2 M${x - 10 + dx},${y + 14} q10,-5 20,0`, { fill: 'none', stroke: '#FFFFFF', 'stroke-width': 3, 'stroke-linecap': 'round', opacity: 0.8 });
    } });
    // Moon
    const mo = P('moon');
    el('ellipse', { cx: ep[0], cy: ep[1], rx: 66, ry: 40, fill: 'none', stroke: '#B0BEC5', 'stroke-width': 1, 'stroke-dasharray': '3 5', opacity: 0.6 }, mo);
    c(mo, 452, 470, 10, 'url(#spMoon)');
    for (const [dx, dy, r] of [[-3, -2, 2.2], [3, 3, 1.6], [2, -4, 1.2]]) c(mo, 452 + dx, 470 + dy, r, '#9E9E9E');
    c(mo, 452, 470, 10, 'url(#spShade)');
    planet('mars', 600, -22, 16, 'url(#spMars)', { over: (gp, x, y) => { c(gp, x, y - 14, 4, '#FFFFFF', { opacity: 0.8 }); c(gp, x - 4, y + 2, 3, '#BF360C', { opacity: 0.6 }); } });
    // Jupiter with moving bands
    planet('jupiter', 840, 15, 62, 'url(#spJupiter)', { over: (gp, x, y) => {
      const cl = g(gp, { 'clip-path': clipCircle(x, y, 62) });
      const bands = g(cl, { class: 'bandslide' });
      const cols = ['#D7A86E', '#F3D6A4', '#B97A44', '#EED3A8', '#C88B52', '#F5DEB3', '#A9683A'];
      cols.forEach((col, i) => path(bands, `M${x - 140},${y - 52 + i * 16} q35,-5 70,0 t70,0 t70,0 t70,0 L${x + 140},${y - 52 + i * 16 + 12} q-35,5 -70,0 t-70,0 t-70,0 t-70,0 Z`, { fill: col, opacity: 0.85 }));
      el('ellipse', { cx: x + 18, cy: y + 20, rx: 14, ry: 8, fill: '#C0392B', opacity: 0.9 }, cl);
    } });
    // Saturn with rings (back half behind, front half in front)
    const ring = (gp, x, y, front) => {
      for (const [rx, ry, col, w] of [[100, 26, '#E8D5A9', 9], [86, 22, '#C9AE7C', 6], [74, 19, '#F2E4C0', 4]]) {
        const d = front ? `M${x - rx},${y} A${rx},${ry} 0 0 0 ${x + rx},${y}` : `M${x - rx},${y} A${rx},${ry} 0 0 1 ${x + rx},${y}`;
        path(gp, d, { fill: 'none', stroke: col, 'stroke-width': w, opacity: 0.95, transform: `rotate(-12 ${x} ${y})` });
      }
    };
    planet('saturn', 1040, -14, 48, 'url(#spSaturn)', { behind: (gp, x, y) => ring(gp, x, y, false), front: (gp, x, y) => ring(gp, x, y, true) });
    planet('uranus', 1200, 14, 32, 'url(#spUranus)', { front: (gp, x, y) => el('ellipse', { cx: x, cy: y, rx: 8, ry: 46, fill: 'none', stroke: '#B2EBF2', 'stroke-width': 2, opacity: 0.7, transform: `rotate(10 ${x} ${y})` }, gp) });
    planet('neptune', 1340, -10, 30, 'url(#spNeptune)', { over: (gp, x, y) => { el('ellipse', { cx: x - 6, cy: y + 6, rx: 7, ry: 4, fill: '#0D2A6B', opacity: 0.6 }, gp); path(gp, `M${x - 20},${y - 8} q20,-6 40,0`, { fill: 'none', stroke: '#90CAF9', 'stroke-width': 2, opacity: 0.6, class: 'wind' }); } });
    planet('pluto', 1460, 8, 9, 'url(#spPluto)', { over: (gp, x, y) => path(gp, `M${x + 1},${y + 4} c-4,-3 -5,-6 -2,-7 c1.5,0 2,1 2,2 c0,-1 0.5,-2 2,-2 c3,1 2,4 -2,7 Z`, { fill: '#FFFFFF' }) });

    // comet
    const co = P('comet');
    path(co, 'M1150,150 L1360,40 L1370,62 Z', { fill: 'url(#spTail)', class: 'tailshimmer' });
    path(co, 'M1150,150 L1330,100 L1336,116 Z', { fill: 'url(#spTail2)', class: 'tailshimmer', style: 'animation-delay:.6s' });
    c(co, 1150, 150, 11, '#E1F5FE', { filter: 'url(#spBlur)' });
    c(co, 1150, 150, 7, '#FFFFFF');

    // Big Dipper
    const st = P('stars');
    const dip = [[700, 150], [742, 168], [762, 140], [722, 120], [790, 110], [822, 92], [862, 98]];
    path(st, 'M700,150 L742,168 L762,140 L722,120 Z M762,140 L790,110 L822,92 L862,98', { fill: 'none', stroke: '#9FA8DA', 'stroke-width': 1.5, 'stroke-dasharray': '4 4', opacity: 0.7 });
    dip.forEach(([x, y], i) => { c(st, x, y, 9, '#FFF9C4', { opacity: 0.25 }); c(st, x, y, 4, '#FFFDE7', { class: 'twinkle', style: `animation-delay:${i * 0.4}s` }); });
    c(st, 700, 30, 5, '#FFFFFF'); c(st, 700, 30, 11, '#FFFFFF', { opacity: 0.2 });
    path(st, 'M722,120 L708,46', { fill: 'none', stroke: '#FFF59D', 'stroke-width': 1.2, 'stroke-dasharray': '2 5', opacity: 0.6 });

    // space station
    const is = P('iss');
    path(is, `M${ep[0]},${ep[1]} m-70,60`, {});
    const issG = g(is, { transform: 'translate(330,600) rotate(-12)' });
    for (const dx of [-40, 22]) for (const dy of [-16, 6]) el('rect', { x: dx, y: dy, width: 18, height: 10, fill: '#3F51B5', stroke: '#C5CAE9', 'stroke-width': 1, class: 'panel' }, issG);
    el('rect', { x: -42, y: -2, width: 84, height: 4, fill: '#CFD8DC' }, issG);
    el('rect', { x: -12, y: -6, width: 24, height: 12, rx: 3, fill: '#ECEFF1', stroke: '#90A4AE' }, issG);
    c(issG, 0, 0, 2, '#FF5252', { class: 'blink' });
    // astronaut on a tether
    const as = P('astronaut');
    path(as, 'M320,606 C305,630 300,632 290,628', { fill: 'none', stroke: '#ECEFF1', 'stroke-width': 1.5, 'stroke-dasharray': '3 2' });
    const astro = g(as, { class: 'floaty' });
    el('rect', { x: 274, y: 628, width: 16, height: 20, rx: 6, fill: '#FAFAFA', stroke: '#90A4AE' }, astro);
    c(astro, 282, 622, 8, '#FAFAFA', { stroke: '#90A4AE' });
    c(astro, 283, 622, 5, '#FFB74D');
    path(astro, 'M274,634 l-8,6 M290,634 l8,-6 M278,648 l-2,9 M286,648 l2,9', { stroke: '#FAFAFA', 'stroke-width': 4, 'stroke-linecap': 'round' });
    el('rect', { x: 277, y: 632, width: 10, height: 6, fill: '#64B5F6', rx: 1 }, astro);
    // rocket with flame
    const ro = P('rocket');
    const rg = g(ro, { transform: 'translate(478,600) rotate(40)' });
    const flame = g(rg, { class: 'flame' });
    path(flame, 'M-7,26 Q0,58 7,26 Z', { fill: '#FFB300' });
    path(flame, 'M-4,26 Q0,44 4,26 Z', { fill: '#FFF59D' });
    path(rg, 'M-9,26 L-9,-14 Q0,-38 9,-14 L9,26 Z', { fill: '#FAFAFA', stroke: '#90A4AE', 'stroke-width': 1.5 });
    path(rg, 'M-9,14 L-17,28 L-9,24 Z M9,14 L17,28 L9,24 Z', { fill: '#E53935' });
    c(rg, 0, -6, 4, '#4FC3F7', { stroke: '#1E88E5', 'stroke-width': 1.5 });
    path(rg, 'M-9,8 L9,8', { stroke: '#E53935', 'stroke-width': 3 });
    // James Webb
    const te = P('telescope');
    const tg = g(te, { transform: 'translate(590,690)' });
    path(tg, 'M-50,28 L50,28 L36,40 L-36,40 Z', { fill: '#B0BEC5', stroke: '#ECEFF1', 'stroke-width': 1 });
    path(tg, 'M-44,34 L44,34', { stroke: '#E1BEE7', 'stroke-width': 1, opacity: 0.7 });
    const hex = (cx, cy, s) => { const p = []; for (let i = 0; i < 6; i++) { const a = Math.PI / 3 * i + Math.PI / 6; p.push((cx + s * Math.cos(a)).toFixed(1) + ',' + (cy + s * Math.sin(a)).toFixed(1)); } return p.join(' '); };
    const hs = 6.2, hw = hs * Math.sqrt(3);
    const cells = [];
    for (let q = -2; q <= 2; q++) for (let r = -2; r <= 2; r++) { const s = -q - r, dist = Math.max(Math.abs(q), Math.abs(r), Math.abs(s)); if (dist >= 1 && dist <= 2) cells.push([hw * (q + r / 2), hs * 1.5 * r]); }
    cells.forEach(([x, y], i) => el('polygon', { points: hex(x, y, hs - 0.6), fill: 'url(#spGold)', stroke: '#8D6E1F', 'stroke-width': 0.6, class: i % 5 ? '' : 'twinkle' }, tg));
    path(tg, 'M0,-26 L0,-6 M-14,-22 L0,-6 L14,-22', { stroke: '#90A4AE', 'stroke-width': 1.2, fill: 'none' });
    return {};
  }

  function defs(d) {
    const rg = (id, stops, cx, cy, r) => { const e = el('radialGradient', { id, cx: cx == null ? 0.35 : cx, cy: cy == null ? 0.35 : cy, r: r || 0.75 }, d); stops.forEach(([o, col, op]) => el('stop', Object.assign({ offset: o, 'stop-color': col }, op != null ? { 'stop-opacity': op } : {}), e)); };
    rg('spSun', [[0, '#FFFDE7'], [0.35, '#FFEB3B'], [0.75, '#FFA000'], [1, '#FF6F00']], 0.5, 0.5, 0.5);
    rg('spGlow', [[0.55, '#FFB300', 0.6], [1, '#FF6F00', 0]], 0.5, 0.5, 0.5);
    rg('spShade', [[0.45, '#000', 0], [1, '#000', 0.55]], 0.32, 0.3, 0.8);
    rg('spMercury', [[0, '#E0E0E0'], [1, '#9E9E9E']]);
    rg('spVenus', [[0, '#FFF3C4'], [1, '#E0B04A']]);
    rg('spOcean', [[0, '#64B5F6'], [1, '#1565C0']]);
    rg('spMoon', [[0, '#F5F5F5'], [1, '#BDBDBD']]);
    rg('spMars', [[0, '#FF8A65'], [1, '#BF360C']]);
    rg('spJupiter', [[0, '#F5DEB3'], [1, '#B97A44']]);
    rg('spSaturn', [[0, '#FFF3C4'], [1, '#D4A85A']]);
    rg('spUranus', [[0, '#E0F7FA'], [1, '#4DD0E1']]);
    rg('spNeptune', [[0, '#82B1FF'], [1, '#1A3FA8']]);
    rg('spPluto', [[0, '#EFEBE9'], [1, '#A1887F']]);
    const lg = (id, stops) => { const e = el('linearGradient', { id, x1: 0, y1: 0.5, x2: 1, y2: 0.5 }, d); stops.forEach(([o, col, op]) => el('stop', Object.assign({ offset: o, 'stop-color': col }, op != null ? { 'stop-opacity': op } : {}), e)); };
    lg('spTail', [[0, '#E1F5FE', 0.95], [1, '#4FC3F7', 0]]);
    lg('spTail2', [[0, '#FFF9C4', 0.8], [1, '#FFF59D', 0]]);
    const gold = el('linearGradient', { id: 'spGold', x1: 0, y1: 0, x2: 1, y2: 1 }, d);
    el('stop', { offset: 0, 'stop-color': '#FFE082' }, gold); el('stop', { offset: 1, 'stop-color': '#C9952B' }, gold);
    const f = el('filter', { id: 'spBlur', filterUnits: 'userSpaceOnUse', x: 1000, y: 0, width: 400, height: 300 }, d);
    el('feGaussianBlur', { stdDeviation: 4 }, f);
  }

  registerThing({
    id: 'space', name: 'Stars & Planets', emoji: '🪐', color: '#5C6BC0', color2: '#283593',
    tagline: 'Blast off into our solar system!',
    bg: 'radial-gradient(ellipse at 30% 40%, #2A2F6B 0%, #11143A 55%, #05061A 100%)',
    labels: { does: '🔭 What is special?', who: '🧪 Try this!' },
    viewBox: { x: -40, y: -10, w: 1560, h: 760 },
    phoneZoom: 1.8,
    noClouds: true,
    project: a => a,
    parts, defs, build
  });
})();
