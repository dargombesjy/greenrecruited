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
const component = async () => component_cache ??= (await import('./_page.svelte-jHFAkToe.js')).default;
const universal_id = "src/routes/simulations/[slug]/+page.js";
const imports = ["_app/immutable/nodes/10.Cmum75y5.js","_app/immutable/chunks/BI8TNJbN.js","_app/immutable/chunks/CZHfX3Sd.js","_app/immutable/chunks/BqEozBxR.js","_app/immutable/chunks/OnCvNs-_.js","_app/immutable/chunks/4PD2n0KE.js","_app/immutable/chunks/DeVGZwmz.js","_app/immutable/chunks/BflWvBoa.js","_app/immutable/chunks/BxpJhL9M.js","_app/immutable/chunks/D9ccr44F.js","_app/immutable/chunks/CNEbXpnP.js","_app/immutable/chunks/BeYIQxCt.js","_app/immutable/chunks/CHPx3H5F.js","_app/immutable/chunks/CYK0e6Q3.js","_app/immutable/chunks/22HMAFkB.js"];
const stylesheets = ["_app/immutable/assets/BlocksRenderer.BIkAvqVE.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=10-Bwm7O3na.js.map
