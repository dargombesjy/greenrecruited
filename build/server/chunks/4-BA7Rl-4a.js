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
const component = async () => component_cache ??= (await import('./_page.svelte-D1ZzwRAp.js')).default;
const universal_id = "src/routes/about/+page.js";
const imports = ["_app/immutable/nodes/4.C2G0NrHB.js","_app/immutable/chunks/BI8TNJbN.js","_app/immutable/chunks/srK-mFOf.js","_app/immutable/chunks/DSgysGrR.js","_app/immutable/chunks/Cb74WmcB.js","_app/immutable/chunks/DmfebJRY.js","_app/immutable/chunks/BXlBkugS.js","_app/immutable/chunks/b9Xme7dr.js","_app/immutable/chunks/R7YoDB7m.js","_app/immutable/chunks/amXNjTPi.js","_app/immutable/chunks/-DPsPhWt.js","_app/immutable/chunks/BK1hjnLs.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=4-BA7Rl-4a.js.map
