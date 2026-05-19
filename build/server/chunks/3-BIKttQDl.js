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
const component = async () => component_cache ??= (await import('./_page.svelte-5iCAW3I3.js')).default;
const universal_id = "src/routes/+page.js";
const imports = ["_app/immutable/nodes/3._KVdm0M3.js","_app/immutable/chunks/CbwWSWMO.js","_app/immutable/chunks/C80bJ0Pg.js","_app/immutable/chunks/lhidEhsI.js","_app/immutable/chunks/BpZzuMAa.js","_app/immutable/chunks/satT1F6r.js","_app/immutable/chunks/Bt-Xeu0q.js","_app/immutable/chunks/D4XzdqVj.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=3-BIKttQDl.js.map
