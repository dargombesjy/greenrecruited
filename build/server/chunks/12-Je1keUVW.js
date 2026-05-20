import { P as PUBLIC_STRAPI_URL } from './public-CGSgOEA6.js';

async function load({ params }) {
  const res = await fetch(`${PUBLIC_STRAPI_URL}/api/simulations?filters[name]=${params.slug}&populate=*`);
  const json = await res.json();
  return json;
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 12;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-wb1k8LWJ.js')).default;
const universal_id = "src/routes/simulations/[slug]/+page.js";
const imports = ["_app/immutable/nodes/12.DVxvvUXz.js","_app/immutable/chunks/BI8TNJbN.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/D6oMQsUx.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/CjJUhez7.js","_app/immutable/chunks/CD0mYr-T.js","_app/immutable/chunks/DkQLDreQ.js","_app/immutable/chunks/BqSY7oT0.js","_app/immutable/chunks/DEV7WA6v.js","_app/immutable/chunks/Cty7hD3V.js","_app/immutable/chunks/DceS0JLl.js","_app/immutable/chunks/DqetSkR_.js","_app/immutable/chunks/BMhKgujm.js","_app/immutable/chunks/ByyquhWL.js","_app/immutable/chunks/BH7ceYq1.js","_app/immutable/chunks/C3YbBEwl.js"];
const stylesheets = ["_app/immutable/assets/BlocksRenderer.BIkAvqVE.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=12-Je1keUVW.js.map
