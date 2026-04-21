import { P as PUBLIC_STRAPI_URL } from './public-CGSgOEA6.js';

async function load({ params }) {
  const res = await fetch(`${PUBLIC_STRAPI_URL}/api/simulations?filters[name]=cari_jalan_01&populate=*`);
  const json = await res.json();
  return json;
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 9;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-pFJL-4xl.js')).default;
const universal_id = "src/routes/simulations/+page.js";
const imports = ["_app/immutable/nodes/9.DjzptBCG.js","_app/immutable/chunks/BI8TNJbN.js","_app/immutable/chunks/CZHfX3Sd.js","_app/immutable/chunks/BqEozBxR.js","_app/immutable/chunks/4PD2n0KE.js","_app/immutable/chunks/CNEbXpnP.js","_app/immutable/chunks/BeYIQxCt.js","_app/immutable/chunks/29ZXAmoY.js","_app/immutable/chunks/Cln1azrE.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=9-CvG7o_JL.js.map
