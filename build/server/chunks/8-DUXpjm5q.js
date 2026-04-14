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
const component = async () => component_cache ??= (await import('./_page.svelte-Xvs9vQOE.js')).default;
const universal_id = "src/routes/resources/+page.js";
const imports = ["_app/immutable/nodes/8.BF7HaEcG.js","_app/immutable/chunks/DQ-I1AmP.js","_app/immutable/chunks/mmATy0Io.js","_app/immutable/chunks/BpK1DifN.js","_app/immutable/chunks/BL8SE-SE.js","_app/immutable/chunks/B75slaU3.js","_app/immutable/chunks/BcMAU00Y.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=8-DUXpjm5q.js.map
