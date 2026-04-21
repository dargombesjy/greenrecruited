import { P as PUBLIC_STRAPI_URL } from './public-CGSgOEA6.js';

async function load({ params }) {
  const res = await fetch(`${PUBLIC_STRAPI_URL}/api/home-page?populate=*`);
  const json = await res.json();
  return json;
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-D6aUiZfK.js')).default;
const universal_id = "src/routes/+page.js";
const imports = ["_app/immutable/nodes/3.DxybqDNq.js","_app/immutable/chunks/BI8TNJbN.js","_app/immutable/chunks/CZHfX3Sd.js","_app/immutable/chunks/BqEozBxR.js","_app/immutable/chunks/OnCvNs-_.js","_app/immutable/chunks/4PD2n0KE.js","_app/immutable/chunks/BxpJhL9M.js","_app/immutable/chunks/D9ccr44F.js","_app/immutable/chunks/Cln1azrE.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=3-Bb_bN8cW.js.map
