"""Record the 'Read to me' voice files with the free Kokoro voice.

Run this after you change the texts of a model (or add a new one):

    pip install kokoro-onnx soundfile numpy
    python3 tools/make_audio.py airport            # default voice: af_heart
    python3 tools/make_audio.py airport bf_emma    # another voice

Needs Node.js and ffmpeg. The first run downloads the voice model (~350 MB)
into tools/models/ (that folder is ignored by git).
Voices: af_heart, af_bella, bf_emma, bf_isabella, am_michael, bm_george, ...
"""
import json, os, re, subprocess, sys, urllib.request
import numpy as np, soundfile as sf
from kokoro_onnx import Kokoro

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODELS = os.path.join(ROOT, 'tools', 'models')
BASE = 'https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/'

def models():
    os.makedirs(MODELS, exist_ok=True)
    for f in ['kokoro-v1.0.onnx', 'voices-v1.0.bin']:
        path = os.path.join(MODELS, f)
        if not os.path.exists(path):
            print('downloading', f, '...'); urllib.request.urlretrieve(BASE + f, path)
    return Kokoro(os.path.join(MODELS, 'kokoro-v1.0.onnx'), os.path.join(MODELS, 'voices-v1.0.bin'))

def clean(t):
    return re.sub(r'"', '', t.replace('&', 'and').replace('!.', '!').replace('°C', ' degrees Celsius').replace('°', ' degrees'))

def main():
    thing = sys.argv[1]; voice = sys.argv[2] if len(sys.argv) > 2 else 'af_heart'
    js = os.path.join(ROOT, 'js', 'things', thing + '.js')
    parts = json.loads(subprocess.check_output(['node', os.path.join(ROOT, 'tools', 'extract_texts.js'), js]))
    out = os.path.join(ROOT, 'audio', thing); os.makedirs(out, exist_ok=True)
    k = models(); lang = 'en-gb' if voice.startswith('b') else 'en-us'
    for p in parts:
        chunks, sr = [], 24000
        for para in clean(p['text']).split('\n'):
            if para.strip():
                a, sr = k.create(para, voice=voice, speed=0.95, lang=lang)
                chunks += [a, np.zeros(int(sr * 0.45), dtype=a.dtype)]
        wav = os.path.join(out, p['id'] + '.wav')
        sf.write(wav, np.concatenate(chunks), sr)
        subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', wav, '-ac', '1', '-b:a', '48k', wav[:-4] + '.mp3'], check=True)
        os.remove(wav); print('✓', p['id'])

if __name__ == '__main__':
    main()
