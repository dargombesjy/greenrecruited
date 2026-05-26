import { P as PUBLIC_STRAPI_URL } from './public-CGSgOEA6.js';

async function load({ params }) {
  const res = await fetch(
    `${PUBLIC_STRAPI_URL}/api/simulations?filters[name]=${params.slug}&populate=*`
  );
  const json = await res.json();
  return json;
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 12;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-4lrof-0W.js')).default;
const universal_id = "src/routes/simulations/[slug]/+page.js";
const imports = ["_app/immutable/nodes/12.WmBqyXBs.js","_app/immutable/chunks/BI8TNJbN.js","_app/immutable/chunks/srK-mFOf.js","_app/immutable/chunks/DSgysGrR.js","_app/immutable/chunks/Cb74WmcB.js","_app/immutable/chunks/DmfebJRY.js","_app/immutable/chunks/BXlBkugS.js","_app/immutable/chunks/b9Xme7dr.js","_app/immutable/chunks/R7YoDB7m.js","_app/immutable/chunks/amXNjTPi.js","_app/immutable/chunks/CLSKzMyb.js","_app/immutable/chunks/BWbZHrvH.js","_app/immutable/chunks/ClB8mC-o.js","_app/immutable/chunks/CVvZV2XN.js","_app/immutable/chunks/BStbf1a-.js"];
const stylesheets = ["_app/immutable/assets/BlocksRenderer.BIkAvqVE.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=12-leShYjfJ.js.map
