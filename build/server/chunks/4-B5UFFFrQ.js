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
const component = async () => component_cache ??= (await import('./_page.svelte-DMJKxOHX.js')).default;
const universal_id = "src/routes/about/+page.js";
const imports = ["_app/immutable/nodes/4.svvEDANN.js","_app/immutable/chunks/BI8TNJbN.js","_app/immutable/chunks/DaTaY8cw.js","_app/immutable/chunks/BFzjU7f7.js","_app/immutable/chunks/CE7DHFnv.js","_app/immutable/chunks/D2beRi_s.js","_app/immutable/chunks/9oZPzsQy.js","_app/immutable/chunks/CCBI57TB.js","_app/immutable/chunks/B1BqkFMp.js","_app/immutable/chunks/oFopp9bP.js","_app/immutable/chunks/CEcBc4jr.js","_app/immutable/chunks/UIZ6s1gp.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=4-B5UFFFrQ.js.map
