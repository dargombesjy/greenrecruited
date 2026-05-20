import { P as PUBLIC_STRAPI_URL } from './public-CGSgOEA6.js';

async function load({ params }) {
  const res = await fetch(`${PUBLIC_STRAPI_URL}/api/learning-modules/${params.slug}?populate=*`);
  const json = await res.json();
  return json;
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DcMzU3YV.js')).default;
const universal_id = "src/routes/modules/[slug]/+page.js";
const imports = ["_app/immutable/nodes/6.CF2ZTF1W.js","_app/immutable/chunks/Dzvjh5LF.js","_app/immutable/chunks/BT_o8xiV.js","_app/immutable/chunks/BIt9y0Ex.js","_app/immutable/chunks/0w9_Zw-g.js","_app/immutable/chunks/BM5OCKjh.js","_app/immutable/chunks/D22Cfpb0.js","_app/immutable/chunks/ByGV8oJP.js","_app/immutable/chunks/zOBf8o-T.js","_app/immutable/chunks/K8USDvcO.js","_app/immutable/chunks/BP9GQzwF.js","_app/immutable/chunks/BuCOJEgm.js"];
const stylesheets = ["_app/immutable/assets/BlocksRenderer.BIkAvqVE.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=6-BayA_-z9.js.map
