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
const component = async () => component_cache ??= (await import('./_page.svelte-CudgxebF.js')).default;
const universal_id = "src/routes/modules/[slug]/+page.js";
const imports = ["_app/immutable/nodes/6.BUkL8_rC.js","_app/immutable/chunks/BI8TNJbN.js","_app/immutable/chunks/DhWUWA4W.js","_app/immutable/chunks/DFf5R0V2.js","_app/immutable/chunks/BqLZ-sie.js","_app/immutable/chunks/DyyMfu7_.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=6-CqVJm_Ar.js.map
