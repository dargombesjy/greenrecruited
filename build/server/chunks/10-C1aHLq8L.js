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

const index = 10;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DRruWeVp.js')).default;
const universal_id = "src/routes/resources/+page.js";
const imports = ["_app/immutable/nodes/10.ebFBDi3F.js","_app/immutable/chunks/BI8TNJbN.js","_app/immutable/chunks/CckL8wVe.js","_app/immutable/chunks/CfgV3S4p.js","_app/immutable/chunks/C5eBP2bm.js","_app/immutable/chunks/UUc_BNQL.js","_app/immutable/chunks/C6zUZBwB.js","_app/immutable/chunks/CS1HTKXb.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=10-C1aHLq8L.js.map
