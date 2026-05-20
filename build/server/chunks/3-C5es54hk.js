import { P as PUBLIC_STRAPI_URL } from './public-CGSgOEA6.js';

async function load({ params }) {
  const res = await fetch(`${PUBLIC_STRAPI_URL}/api/home-page?populate=*`);
  const json = await res.json();
  return json;
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-D6aUiZfK.js')).default;
const universal_id = "src/routes/+page.js";
const imports = ["_app/immutable/nodes/3.CWqT-CE4.js","_app/immutable/chunks/Dzvjh5LF.js","_app/immutable/chunks/BT_o8xiV.js","_app/immutable/chunks/BIt9y0Ex.js","_app/immutable/chunks/0w9_Zw-g.js","_app/immutable/chunks/BM5OCKjh.js","_app/immutable/chunks/zOBf8o-T.js","_app/immutable/chunks/jtbMbXQL.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=3-C5es54hk.js.map
