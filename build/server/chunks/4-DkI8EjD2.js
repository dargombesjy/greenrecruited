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
const component = async () => component_cache ??= (await import('./_page.svelte-Bm72Q_wv.js')).default;
const universal_id = "src/routes/about/+page.js";
const imports = ["_app/immutable/nodes/4.2Xbg-fy9.js","_app/immutable/chunks/BI8TNJbN.js","_app/immutable/chunks/CckL8wVe.js","_app/immutable/chunks/CfgV3S4p.js","_app/immutable/chunks/CzkQBGAB.js","_app/immutable/chunks/CtEmhWD4.js","_app/immutable/chunks/B6NqALj5.js","_app/immutable/chunks/Bt_XbMcU.js","_app/immutable/chunks/C5eBP2bm.js","_app/immutable/chunks/UUc_BNQL.js","_app/immutable/chunks/DeCQer-G.js","_app/immutable/chunks/BIoQu4rm.js","_app/immutable/chunks/BBF5p-pt.js","_app/immutable/chunks/C6zUZBwB.js","_app/immutable/chunks/CS1HTKXb.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=4-DkI8EjD2.js.map
