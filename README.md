# Peek Inside! 🔍✈️

A kid-friendly web app (ages ~6–9) that shows how things are built. Tap a picture on the
home screen, then explore a 3D-style model: tap the bouncing pins (or the buildings
themselves) to open a card with *What is it? / What happens here? / Wow fact! / Who works here?*
and a **🔊 Read to me** button.

First model: **the Airport** — 18 parts (runway, take-off, taxiway, apron, terminal,
jet bridges, airplane, baggage train, control tower, radar, windsock, approach lights,
hangar, fire station, fuel farm, drop-off road, car park, train station).
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
js/things/airport.js  the airport model and its texts
audio/airport/        recorded voice for each card
tools/                script to re-record the voice
manifest.json, sw.js  home-screen app + offline support
icons/                app icons
```
