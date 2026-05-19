import { P as PUBLIC_STRAPI_URL } from './public-CGSgOEA6.js';

async function load({ params }) {
  const res = await fetch(`${PUBLIC_STRAPI_URL}/api/simulations?filters[name]=${params.slug}&populate=*`);
  const json = await res.json();
  return json;
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 10;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-bvPW9IUK.js')).default;
const universal_id = "src/routes/simulations/[slug]/+page.js";
const imports = ["_app/immutable/nodes/10.TBsFHT_i.js","_app/immutable/chunks/CbwWSWMO.js","_app/immutable/chunks/C80bJ0Pg.js","_app/immutable/chunks/lhidEhsI.js","_app/immutable/chunks/BpZzuMAa.js","_app/immutable/chunks/satT1F6r.js","_app/immutable/chunks/rkgIW1_P.js","_app/immutable/chunks/Cj-RsIct.js","_app/immutable/chunks/Bt-Xeu0q.js","_app/immutable/chunks/izS0NcGz.js","_app/immutable/chunks/BqcxvOjV.js","_app/immutable/chunks/CVH_rEKy.js","_app/immutable/chunks/CsOvJ5uS.js","_app/immutable/chunks/BBqnh-6C.js"];
const stylesheets = ["_app/immutable/assets/BlocksRenderer.BIkAvqVE.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=10-TowZCMgy.js.map
