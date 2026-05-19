import { P as PUBLIC_STRAPI_URL } from './public-CGSgOEA6.js';

async function load({ params }) {
  const res = await fetch(`${PUBLIC_STRAPI_URL}/api/resource?populate[0]=videos.thumbnail&populate[1]=news.thumbnail&populate[2]=articles.thumbnail`);
  const json = await res.json();
  return json;
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-FKyIMuEZ.js')).default;
const universal_id = "src/routes/resources/+page.js";
const imports = ["_app/immutable/nodes/8.BEDhfR5H.js","_app/immutable/chunks/CbwWSWMO.js","_app/immutable/chunks/C80bJ0Pg.js","_app/immutable/chunks/lhidEhsI.js","_app/immutable/chunks/Bt-Xeu0q.js","_app/immutable/chunks/CCdJRtxk.js","_app/immutable/chunks/D4XzdqVj.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=8-BMQ3nbkB.js.map
