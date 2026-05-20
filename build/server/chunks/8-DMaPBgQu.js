import { P as PUBLIC_STRAPI_URL } from './public-CGSgOEA6.js';

async function load({ params }) {
  const res = await fetch(`${PUBLIC_STRAPI_URL}/api/resource?populate[0]=videos.thumbnail&populate[1]=news.thumbnail&populate[2]=articles.thumbnail`);
  const json = await res.json();
  return json;
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-C-veBkRb.js')).default;
const universal_id = "src/routes/resources/+page.js";
const imports = ["_app/immutable/nodes/8.Dflh_YjY.js","_app/immutable/chunks/Dzvjh5LF.js","_app/immutable/chunks/BT_o8xiV.js","_app/immutable/chunks/BIt9y0Ex.js","_app/immutable/chunks/zOBf8o-T.js","_app/immutable/chunks/DIbQk2K-.js","_app/immutable/chunks/jtbMbXQL.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=8-DMaPBgQu.js.map
