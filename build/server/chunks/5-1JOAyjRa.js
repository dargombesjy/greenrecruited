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
const component = async () => component_cache ??= (await import('./_page.svelte-CJPnaz3G.js')).default;
const universal_id = "src/routes/modules/+page.js";
const imports = ["_app/immutable/nodes/5.CrO-is0f.js","_app/immutable/chunks/BI8TNJbN.js","_app/immutable/chunks/srK-mFOf.js","_app/immutable/chunks/DSgysGrR.js","_app/immutable/chunks/Cb74WmcB.js","_app/immutable/chunks/DmfebJRY.js","_app/immutable/chunks/R7YoDB7m.js","_app/immutable/chunks/amXNjTPi.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=5-1JOAyjRa.js.map
