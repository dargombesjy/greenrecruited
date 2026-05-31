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

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CJPnaz3G.js')).default;
const universal_id = "src/routes/modules/+page.js";
const imports = ["_app/immutable/nodes/7.BSKvXI_B.js","_app/immutable/chunks/BI8TNJbN.js","_app/immutable/chunks/CckL8wVe.js","_app/immutable/chunks/CfgV3S4p.js","_app/immutable/chunks/CzkQBGAB.js","_app/immutable/chunks/CtEmhWD4.js","_app/immutable/chunks/C5eBP2bm.js","_app/immutable/chunks/UUc_BNQL.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=7-CRWmEV7O.js.map
