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
const component = async () => component_cache ??= (await import('./_page.svelte-CIerJHy7.js')).default;
const universal_id = "src/routes/+page.js";
const imports = ["_app/immutable/nodes/3.CgBGfnq_.js","_app/immutable/chunks/BI8TNJbN.js","_app/immutable/chunks/DhWUWA4W.js","_app/immutable/chunks/DFf5R0V2.js","_app/immutable/chunks/BqLZ-sie.js","_app/immutable/chunks/DyyMfu7_.js","_app/immutable/chunks/DxKqgr2u.js","_app/immutable/chunks/CbC24sYk.js","_app/immutable/chunks/BfIso7-u.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=3-Biwf833j.js.map
