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
const component = async () => component_cache ??= (await import('./_page.svelte-DRruWeVp.js')).default;
const universal_id = "src/routes/resources/+page.js";
const imports = ["_app/immutable/nodes/8.DFYavoVL.js","_app/immutable/chunks/BI8TNJbN.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/D6oMQsUx.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/DkQLDreQ.js","_app/immutable/chunks/Cty7hD3V.js","_app/immutable/chunks/DceS0JLl.js","_app/immutable/chunks/CibbD66o.js","_app/immutable/chunks/69_IOA4Y.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=8-CSrMVs_H.js.map
