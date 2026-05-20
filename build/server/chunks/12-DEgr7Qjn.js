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

const index = 12;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-D57CgMOm.js')).default;
const universal_id = "src/routes/simulations/[slug]/+page.js";
const imports = ["_app/immutable/nodes/12.CwiHmIvl.js","_app/immutable/chunks/BI8TNJbN.js","_app/immutable/chunks/DyblKahl.js","_app/immutable/chunks/DN3skXJJ.js","_app/immutable/chunks/b4JhZdMj.js","_app/immutable/chunks/Emk6CvTy.js","_app/immutable/chunks/Dn7OlLi4.js","_app/immutable/chunks/Mts2ibs5.js","_app/immutable/chunks/DjJiGA2k.js","_app/immutable/chunks/QS-Evj1R.js","_app/immutable/chunks/CEAD515h.js","_app/immutable/chunks/CeHzahlI.js","_app/immutable/chunks/l1rr1WcF.js","_app/immutable/chunks/Cv8IcgIF.js","_app/immutable/chunks/DdDC0b-i.js"];
const stylesheets = ["_app/immutable/assets/BlocksRenderer.BIkAvqVE.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=12-DEgr7Qjn.js.map
