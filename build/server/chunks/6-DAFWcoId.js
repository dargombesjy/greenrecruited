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
const component = async () => component_cache ??= (await import('./_page.svelte-DpW604F_.js')).default;
const universal_id = "src/routes/modules/[slug]/+page.js";
const imports = ["_app/immutable/nodes/6.BB0eU_J9.js","_app/immutable/chunks/CbwWSWMO.js","_app/immutable/chunks/C80bJ0Pg.js","_app/immutable/chunks/lhidEhsI.js","_app/immutable/chunks/BpZzuMAa.js","_app/immutable/chunks/satT1F6r.js","_app/immutable/chunks/rkgIW1_P.js","_app/immutable/chunks/Cj-RsIct.js","_app/immutable/chunks/Bt-Xeu0q.js","_app/immutable/chunks/CVH_rEKy.js","_app/immutable/chunks/CsOvJ5uS.js","_app/immutable/chunks/BBqnh-6C.js"];
const stylesheets = ["_app/immutable/assets/BlocksRenderer.BIkAvqVE.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=6-DAFWcoId.js.map
