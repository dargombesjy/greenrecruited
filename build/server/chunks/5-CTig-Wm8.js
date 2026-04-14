import { P as PUBLIC_STRAPI_URL } from './public-CGSgOEA6.js';

async function load({ params }) {
  const res = await fetch(`${PUBLIC_STRAPI_URL}/api/learning-modules?populate=*`);
  const json = await res.json();
  return json;
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-VB56kDUX.js')).default;
const universal_id = "src/routes/modules/+page.js";
const imports = ["_app/immutable/nodes/5.SAN--x42.js","_app/immutable/chunks/DQ-I1AmP.js","_app/immutable/chunks/mmATy0Io.js","_app/immutable/chunks/BpK1DifN.js","_app/immutable/chunks/CmDUFp9y.js","_app/immutable/chunks/B_MYLyA9.js","_app/immutable/chunks/BL8SE-SE.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=5-CTig-Wm8.js.map
