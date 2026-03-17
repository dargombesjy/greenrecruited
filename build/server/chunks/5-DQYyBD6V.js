import { P as PUBLIC_STRAPI_URL } from './public-CGSgOEA6.js';

async function load({ params }) {
  const res = await fetch(`${PUBLIC_STRAPI_URL}/api/learning-modules?populate=*`);
  const json = await res.json();
  return json;
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DZ0STfOj.js')).default;
const universal_id = "src/routes/modules/+page.js";
const imports = ["_app/immutable/nodes/5.E8gqnhSU.js","_app/immutable/chunks/BI8TNJbN.js","_app/immutable/chunks/BGoFMBqd.js","_app/immutable/chunks/Bcac9-xV.js","_app/immutable/chunks/CABi7X04.js","_app/immutable/chunks/BxX26pLE.js","_app/immutable/chunks/DumwOi1m.js","_app/immutable/chunks/CDe7mgrB.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=5-DQYyBD6V.js.map
