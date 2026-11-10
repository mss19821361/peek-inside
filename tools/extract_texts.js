// Load airport.js in a fake environment and dump the part texts as JSON.
global.ISO = new Proxy({}, { get: () => () => {} });
let thing; global.registerThing = t => (thing = t);
require(require('path').resolve(process.argv[2]));
const whoLabel = (((thing.labels || {}).who) || 'Who works here?').replace(/^[^A-Za-z]+/, '').replace(/([^?.!])$/, '$1:');
const out = thing.parts.map(p => ({
  id: p.id,
  text: [p.name + '.', p.what, p.does, ...(p.steps || []).map((s, i) => `Step ${i + 1}: ${s[1]}.`),
         'Wow fact! ' + p.fact, whoLabel + ' ' + p.who].join('\n')
}));
console.log(JSON.stringify(out, null, 1));
