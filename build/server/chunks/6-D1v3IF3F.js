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
const component = async () => component_cache ??= (await import('./_page.svelte-BZVLi98u.js')).default;
const universal_id = "src/routes/modules/[slug]/+page.js";
const imports = ["_app/immutable/nodes/6.BeQ3wT1p.js","_app/immutable/chunks/DQ-I1AmP.js","_app/immutable/chunks/mmATy0Io.js","_app/immutable/chunks/BpK1DifN.js","_app/immutable/chunks/CmDUFp9y.js","_app/immutable/chunks/B_MYLyA9.js","_app/immutable/chunks/DtTMvK_0.js","_app/immutable/chunks/BSixK7HJ.js","_app/immutable/chunks/CebTReGp.js","_app/immutable/chunks/BL8SE-SE.js","_app/immutable/chunks/DNS1Ew1L.js"];
const stylesheets = ["_app/immutable/assets/6.BIkAvqVE.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=6-D1v3IF3F.js.map
