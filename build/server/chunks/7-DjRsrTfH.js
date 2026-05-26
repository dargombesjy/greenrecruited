import { P as PUBLIC_STRAPI_URL } from './public-CGSgOEA6.js';

async function load({ params }) {
  const res = await fetch(`${PUBLIC_STRAPI_URL}/api/reflection?populate=main_image&populate[0]=forum_image&populate[1]=todos.todo_image`);
  const json = await res.json();
  return json;
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DDck4o6o.js')).default;
const universal_id = "src/routes/reflection/+page.js";
const imports = ["_app/immutable/nodes/7.C_2ZxKqm.js","_app/immutable/chunks/BI8TNJbN.js","_app/immutable/chunks/srK-mFOf.js","_app/immutable/chunks/DSgysGrR.js","_app/immutable/chunks/Cb74WmcB.js","_app/immutable/chunks/DmfebJRY.js","_app/immutable/chunks/R7YoDB7m.js","_app/immutable/chunks/amXNjTPi.js","_app/immutable/chunks/-DPsPhWt.js","_app/immutable/chunks/BK1hjnLs.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=7-DjRsrTfH.js.map
