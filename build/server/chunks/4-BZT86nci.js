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
const imports = ["_app/immutable/nodes/4.C7OE4za2.js","_app/immutable/chunks/BI8TNJbN.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/D6oMQsUx.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/CjJUhez7.js","_app/immutable/chunks/CD0mYr-T.js","_app/immutable/chunks/DkQLDreQ.js","_app/immutable/chunks/BqSY7oT0.js","_app/immutable/chunks/DEV7WA6v.js","_app/immutable/chunks/Cty7hD3V.js","_app/immutable/chunks/DceS0JLl.js","_app/immutable/chunks/CibbD66o.js","_app/immutable/chunks/69_IOA4Y.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=4-BZT86nci.js.map
