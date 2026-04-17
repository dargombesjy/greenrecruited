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
const component = async () => component_cache ??= (await import('./_page.svelte-zg8YswVB.js')).default;
const universal_id = "src/routes/about/+page.js";
const imports = ["_app/immutable/nodes/4.D0ko0JrM.js","_app/immutable/chunks/DnNqUA1G.js","_app/immutable/chunks/Cu36jJJw.js","_app/immutable/chunks/FL3hJHCL.js","_app/immutable/chunks/D8lH8Vpo.js","_app/immutable/chunks/7q210hqz.js","_app/immutable/chunks/7r8TxmC0.js","_app/immutable/chunks/Dm61nVNf.js","_app/immutable/chunks/Da9m1oO8.js","_app/immutable/chunks/MzpK0HP3.js","_app/immutable/chunks/CU3evbcX.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=4-BKErC64s.js.map
