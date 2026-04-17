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
const component = async () => component_cache ??= (await import('./_page.svelte-CKXV5ZbI.js')).default;
const universal_id = "src/routes/modules/[slug]/+page.js";
const imports = ["_app/immutable/nodes/6.B1qm9IgI.js","_app/immutable/chunks/DnNqUA1G.js","_app/immutable/chunks/Cu36jJJw.js","_app/immutable/chunks/FL3hJHCL.js","_app/immutable/chunks/D8lH8Vpo.js","_app/immutable/chunks/7q210hqz.js","_app/immutable/chunks/7r8TxmC0.js","_app/immutable/chunks/Dm61nVNf.js","_app/immutable/chunks/Da9m1oO8.js","_app/immutable/chunks/BFg_CinH.js","_app/immutable/chunks/CTB1KCz4.js"];
const stylesheets = ["_app/immutable/assets/6.BIkAvqVE.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=6-Bd0lZrxb.js.map
