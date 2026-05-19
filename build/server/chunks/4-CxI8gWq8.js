import { P as PUBLIC_STRAPI_URL } from './public-CGSgOEA6.js';

async function load({ params }) {
  const res = await fetch(`${PUBLIC_STRAPI_URL}/api/about?populate=main_image&populate[0]=about_items.image`);
  const json = await res.json();
  return json;
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Cp2kucaA.js')).default;
const universal_id = "src/routes/about/+page.js";
const imports = ["_app/immutable/nodes/4.BGixQK06.js","_app/immutable/chunks/CbwWSWMO.js","_app/immutable/chunks/C80bJ0Pg.js","_app/immutable/chunks/lhidEhsI.js","_app/immutable/chunks/BpZzuMAa.js","_app/immutable/chunks/satT1F6r.js","_app/immutable/chunks/rkgIW1_P.js","_app/immutable/chunks/Cj-RsIct.js","_app/immutable/chunks/Bt-Xeu0q.js","_app/immutable/chunks/CCdJRtxk.js","_app/immutable/chunks/D4XzdqVj.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=4-CxI8gWq8.js.map
