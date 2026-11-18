# Peek Inside! 🔍✈️

A kid-friendly web app (ages ~6–9) that shows how things are built. Tap a picture on the
home screen, then explore a 3D-style model: tap the bouncing pins (or the buildings
themselves) to open a card with *What is it? / What happens here? / Wow fact! / Who works here?*
and a **🔊 Read to me** button.

First model: **the Airport** — 18 parts (runway, take-off, taxiway, apron, terminal,
jet bridges, airplane, baggage train, control tower, radar, windsock, approach lights,
hangar, fire station, fuel farm, drop-off road, car park, train station).
Second model: **the Human Body**, a friendly cartoon kid with x-ray vision. It has 18 parts: brain, eyes, ears,
nose, mouth & teeth, lungs, heart, blood vessels, stomach, liver, small and large intestine, kidneys,
bladder, bones, muscles, nerves and skin. The heart beats, the lungs breathe, blood flows, a bite of food
slides down to the stomach and nerve signals zip down the leg. Each card ends with a "Keep it healthy" tip.

Third model: **Trains**, a railway island with a station. It has 18 parts: passenger train, driver's cab,
high-speed train, freight train, steam train, overhead wires, rails & wheels, points, signals, level
crossing, platform, station building, station clock, footbridge, signal box, tunnel, bridge and depot.
A high-speed train zooms out of the tunnel, a freight train rolls by, a steam train puffs smoke along the
heritage line, the level-crossing barriers come down when a train is near and the signal turns green.

Fourth model: **the Volcano**, sliced in half like a cake so you can see inside. It has 18 parts: crater,
ash cloud, volcanic lightning, lava bombs, main vent, side vent, magma chamber, rock layers, mantle,
tectonic plates, lava flow, steam vents, geyser, new island, volcanic rocks, farms, volcano scientist
and a sleeping volcano. Instead of "Who works here?", each card ends with a "Try this!" experiment to do
with a grown-up.

Fifth model: **the Ship**, a cruise ship sliced open from the side. It has 18 parts: bridge, radar mast, funnel,
pool deck, lifeboats, cabins, restaurant, galley, theatre, engine room, water maker, ballast tanks,
propeller, rudder, anchor, bow thruster, bulbous bow and hull. Waves roll, a dolphin jumps, the propeller
spins, engine pistons pump, smoke puffs from the funnel and a spotlight sweeps the theatre stage.

**Stars & Planets** and **Dinosaurs** are switched on. Weather, Insects, The Ocean, Electricity & Magnets, Rocks & Caves and Machines & Inventions are drawn and ready but **switched off** for now (their files are not loaded).
They show on the home screen as locked "Coming soon" tiles (the COMING list in `js/app.js`); a tile unlocks by itself once its model file is loaded.
To switch one on, add its `<script src="js/things/NAME.js"></script>` line to `index.html` after ship.js,
add `'js/things/NAME.js'` to the FILES list in `sw.js` (and bump the CACHE number), and upload its
`js/things/NAME.js` file and `audio/NAME/` folder. They are inspired by the classic "How and Why" style
of science books (all text and pictures are original):

- **Stars & Planets**: the Sun, all eight planets, the Moon, asteroid belt, Pluto, a comet, the ISS,
  a rocket, an astronaut, a space telescope and the Big Dipper.
- **Weather**: the water cycle (sun, evaporation, clouds, rain, snow, river, sea, groundwater), hail,
  thunder and lightning, a tornado, rainbow, wind turbines, fog, a weather station, balloon and satellite.
- **Insects**: what makes an insect, bees and their hive, flowers and pollen, the butterfly life cycle
  (caterpillar, chrysalis), ladybird, ants and their underground nest, dragonfly, grasshopper, fireflies,
  dung beetle, praying mantis, stick insect, plus two "not insects" puzzles: the spider and the earthworm.
- **Dinosaurs**: T. rex, Triceratops, Stegosaurus, Brachiosaurus, Velociraptor, Ankylosaurus,
  Parasaurolophus, a nest, Archaeopteryx, a tiny mammal, prehistoric plants, footprints, the asteroid,
  Pteranodon and a plesiosaur (not dinosaurs!), and underground: rock layers, a fossil and a fossil hunter.
- **The Ocean**: tides, waves, a dolphin, plankton, a sea turtle, a blue whale, a coral reef, a fish school,
  a scuba diver, an octopus, a shark, jellyfish, a submarine, a giant squid, an anglerfish, deep-sea vents,
  the deepest trench and the ocean zones.
- **Electricity & Magnets**: a power station, pylons, a transformer, solar panels, a meter and fuse box,
  wires, a light switch, a bulb, a battery, static electricity, magnets, a compass, an electric motor,
  a toaster, a plug socket, an electromagnet, an electric car and a bike dynamo.
- **Rocks & Caves**: a cave, stalactites, stalagmites, bats, cave paintings, an underground lake,
  seashell fossils, rock layers, a canyon, soil, magma and granite, marble, a geode, a gold vein,
  a coal seam, diamonds, a mine and a rock hunter.
- **Machines & Inventions**: lever, pulley, wheel and axle, ramp, wedge, Archimedes' screw, water wheel,
  windmill, crane, bicycle, gears, spring, 3D printer, steam engine, pendulum clock, printing press,
  a robot arm and a young inventor.

Every card in every model now also has two tap-to-reveal extras:

- **❓ How and Why**: a curious question and its answer (`js/howwhy.js`, or `hw:` inside a model file).
- **🧮 Think & Count**: a small maths or logic puzzle (`js/thinkcount.js`, or `tc:` inside a model file).

Explored parts turn green and are remembered on the device; finding all 18 earns a trophy.

No build step, no libraries, works offline once loaded.

## The "Read to me" voice

The cards are read by a natural-sounding AI voice (Kokoro, free and open source),
pre-recorded as small MP3s in `audio/airport/` (about 40 s and 180 KB each).
If a recording is missing, or the iPad is offline, it falls back to the iPad's own voice.

When you change a card's text or add a new model, record it again:

```
pip install kokoro-onnx soundfile numpy
python3 tools/make_audio.py airport            # voice "af_heart"
python3 tools/make_audio.py airport bf_emma    # or a British voice
```
(needs Node.js and ffmpeg; the first run downloads the ~350 MB voice model into `tools/models/`, which git ignores).

Tip: the fallback sounds much better if you download an "Enhanced" or "Premium" voice on each iPad:
Settings → Accessibility → Spoken Content → Voices → English.

## Put it online with GitHub Pages

1. Create a new repository on GitHub (e.g. `peek-inside`). It can be public, or private if your plan allows Pages for private repos.
2. Upload **everything inside this folder** to the repo root (drag-and-drop on github.com works:
   *Add file → Upload files*). Keep the folders (`css/`, `js/`, `icons/`) as they are.
3. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   branch `main`, folder `/ (root)` → Save.
4. After a minute your app is at `https://<your-username>.github.io/peek-inside/`.

## Install on the iPads / iPhones

Open that link in **Safari** → tap the **Share** button → **Add to Home Screen**.
It then opens full-screen with its own icon, like a real app, and keeps working offline.

## Updating

Push your changes to GitHub. The app checks the network first, so the iPads get the new
version the next time they open it while online. If an iPad seems stuck on an old version,
change `CACHE = 'peek-inside-v1'` in `sw.js` to `v2` (and so on) when you push.

## Questions & mailbox 📬 (optional, no server needed)

**How it works**
1. A kid taps **"❓ I have a question!"** on any card (or "Ask anything" in the mailbox), then speaks or types.
2. Pressing **Send** opens the iPad's **Mail** app with an email to you, already written. The kid presses *Send* there.
   The subject has a code, e.g. `Peek Inside question #K7P2 from Sara`.
3. When you have an answer, tap the link in the email. It opens `answers.txt` in your GitHub repo for editing.
   Paste the block from the email, write your answer and press **Commit changes**:
   ```
   # K7P2
   Planes have wheels so they can roll along the runway, just like your bike.

   In the sky the wheels fold up and hide inside the plane's tummy!
   picture: ✈️🛞☁️
   ```
4. Within a few minutes (GitHub publishes, the iPad checks every 2 minutes and whenever the app is opened),
   the mailbox badge lights up with a chime. The kid opens an envelope animation to see your answer as an
   illustrated letter: "Dear Sara, …", the pictures, and your signature.

**Pictures:** `picture:` can be a few emojis, the name of an image you uploaded into an `answers/` folder in
the repo (`picture: wheels.jpg`), or a full `https://` image link. `from:` changes the signature for one letter.

**Setup:** open `js/config.js` and fill in:
```js
PARENT_EMAIL: 'you@example.com',   // where questions are emailed
SIGNATURE: 'Love, Dad',
```
Then push to GitHub. That's all.

**Good to know**
- Each iPad needs an email account set up in the **Mail** app, because the question is sent from there.
- If your repo is **public**, anyone can read your email address in `js/config.js` and the answers in `answers.txt`.
  You may prefer a separate email address just for this.
- Answers are matched to the iPad that asked (the code is remembered on that iPad).
- **Speaking:** the big 🎤 uses Safari's speech recognition (Siri must be on). If it isn't available, which can
  happen in the home-screen app, it opens the keyboard, and kids can use the keyboard's 🎤.
- If `PARENT_EMAIL` is empty, the question buttons are hidden.

## Try it on your computer

```
cd peek-inside
python3 -m http.server 8000
```
then open http://localhost:8000

## Adding the next thing (ship, castle, …)

1. Copy `js/things/airport.js` to e.g. `js/things/castle.js`.
2. Change the `registerThing({...})` block at the bottom: `id`, `name`, `emoji`, colours, `parts`.
3. Draw the model in `build(world)` using the helpers in `js/iso.js`:
   `box()` (blocks), `cyl()` (towers/tanks), `flat()` (ground areas), `faceX/faceY()` (windows/doors).
   Wrap each part with `add('partId', x0, y0, x1, y1, gp => { ... })` so it is tappable and
   drawn in the right order.
4. Add `<script src="js/things/castle.js"></script>` in `index.html`, add the file to `FILES` in `sw.js`,
   and remove it from the "Coming soon" list in `js/app.js`.
5. Record its voice: `python3 tools/make_audio.py castle`.

## Files

```
index.html            app page
css/style.css         all styling
js/iso.js             isometric drawing helpers + pinch/drag/zoom
js/app.js             home screen, info cards, progress, read-aloud
js/things/airport.js  the airport model and its texts (3D isometric)
js/things/trains.js   the railway model and its texts (3D isometric)
js/things/ship.js     the cruise ship cutaway and its texts (flat drawing)
js/things/volcano.js  the volcano cutaway and its texts (flat drawing)
js/things/body.js     the human body model and its texts (flat drawing, uses project: a => a)
js/things/space.js, weather.js, insects.js, dinosaurs.js   the new flat-drawing models
js/howwhy.js          "How and Why" questions for the older models
js/thinkcount.js      "Think & Count" puzzles for the older models
js/config.js          your settings (email, signature)
js/ask.js             question sheet, mailbox and letters
answers.txt           your answers to the kids' questions
audio/<model>/        recorded voice for each card
tools/                script to re-record the voice
manifest.json, sw.js  home-screen app + offline support
icons/                app icons
```
