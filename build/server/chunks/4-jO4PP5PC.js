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
const imports = ["_app/immutable/nodes/4.DMEZOgeT.js","_app/immutable/chunks/BI8TNJbN.js","_app/immutable/chunks/DyblKahl.js","_app/immutable/chunks/DN3skXJJ.js","_app/immutable/chunks/b4JhZdMj.js","_app/immutable/chunks/Emk6CvTy.js","_app/immutable/chunks/Dn7OlLi4.js","_app/immutable/chunks/Mts2ibs5.js","_app/immutable/chunks/DjJiGA2k.js","_app/immutable/chunks/QS-Evj1R.js","_app/immutable/chunks/CXIwTLym.js","_app/immutable/chunks/DeEtTC44.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=4-jO4PP5PC.js.map
