import { P as PUBLIC_STRAPI_URL } from './public-CGSgOEA6.js';

async function load({ params }) {
  const res = await fetch(`${PUBLIC_STRAPI_URL}/api/simulations?filters[parent]=self&populate=*`);
  const json = await res.json();
  return json;
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 9;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CrSo4bYd.js')).default;
const universal_id = "src/routes/simulations/+page.js";
const imports = ["_app/immutable/nodes/9.BkQ5IWu_.js","_app/immutable/chunks/CbwWSWMO.js","_app/immutable/chunks/C80bJ0Pg.js","_app/immutable/chunks/lhidEhsI.js","_app/immutable/chunks/BpZzuMAa.js","_app/immutable/chunks/satT1F6r.js","_app/immutable/chunks/izS0NcGz.js","_app/immutable/chunks/BqcxvOjV.js","_app/immutable/chunks/CCdJRtxk.js","_app/immutable/chunks/D4XzdqVj.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=9-DlPCy-FA.js.map
