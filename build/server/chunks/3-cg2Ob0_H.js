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
const component = async () => component_cache ??= (await import('./_page.svelte-CIerJHy7.js')).default;
const universal_id = "src/routes/+page.js";
const imports = ["_app/immutable/nodes/3.C0NirB39.js","_app/immutable/chunks/BI8TNJbN.js","_app/immutable/chunks/DaTaY8cw.js","_app/immutable/chunks/BFzjU7f7.js","_app/immutable/chunks/CE7DHFnv.js","_app/immutable/chunks/D2beRi_s.js","_app/immutable/chunks/B1BqkFMp.js","_app/immutable/chunks/oFopp9bP.js","_app/immutable/chunks/UIZ6s1gp.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=3-cg2Ob0_H.js.map
