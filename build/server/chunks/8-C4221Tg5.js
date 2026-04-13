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
const component = async () => component_cache ??= (await import('./_page.svelte-CcTwoeIe.js')).default;
const universal_id = "src/routes/resources/+page.js";
const imports = ["_app/immutable/nodes/8.COXk6uwA.js","_app/immutable/chunks/BI8TNJbN.js","_app/immutable/chunks/DaTaY8cw.js","_app/immutable/chunks/BFzjU7f7.js","_app/immutable/chunks/B1BqkFMp.js","_app/immutable/chunks/oFopp9bP.js","_app/immutable/chunks/CEcBc4jr.js","_app/immutable/chunks/UIZ6s1gp.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=8-C4221Tg5.js.map
